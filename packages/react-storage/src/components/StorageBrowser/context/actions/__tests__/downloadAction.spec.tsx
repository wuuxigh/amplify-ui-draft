import * as StorageModule from 'aws-amplify/storage';
import { downloadAction } from '../downloadAction';

const getUrlSpy = jest.spyOn(StorageModule, 'getUrl');
const config = {
  bucket: 'bucket',
  credentialsProvider: jest.fn(),
  region: 'region',
};
const initialValue = { signedUrl: '' };

describe('downloadAction', () => {
  beforeEach(() => {
    getUrlSpy.mockClear();
  });

  it('returns the expected output in the happy path', async () => {
    getUrlSpy.mockResolvedValueOnce({
      url: new URL('https://docs.amplify.aws/'),
      expiresAt: new Date(),
    });

    const { signedUrl } = await downloadAction(initialValue, {
      config,
      key: 'a_prefix',
    });

    expect(signedUrl).toEqual('https://docs.amplify.aws/');
  });

  it('should succeed without expiresAt', async () => {
    getUrlSpy.mockResolvedValueOnce({
      url: new URL('https://docs.amplify.aws/'),
    } as StorageModule.GetUrlWithPathOutput);

    const { signedUrl } = await downloadAction(initialValue, {
      config,
      key: 'a_prefix',
    });

    expect(signedUrl).toEqual('https://docs.amplify.aws/');
  });

  it.each([
    {
      name: 'should fail with missing url',
      value: {
        expiresAt: new Date(0),
      },
      thrownMessage:
        'Required keys missing for GetUrlWithPathOutput: url.\nObject: {"expiresAt":"1970-01-01T00:00:00.000Z"}',
    },
    {
      name: 'should fail with no keys',
      value: {},
      thrownMessage:
        'Required keys missing for GetUrlWithPathOutput: url.\nObject: {}',
    },
  ])('$name', async ({ value, thrownMessage }) => {
    getUrlSpy.mockResolvedValueOnce(
      value as StorageModule.GetUrlWithPathOutput
    );

    await expect(
      downloadAction(initialValue, {
        config,
        key: 'a_prefix',
      })
    ).rejects.toThrow(thrownMessage);
  });
});
