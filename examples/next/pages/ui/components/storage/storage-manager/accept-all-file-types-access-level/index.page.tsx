import { Amplify } from 'aws-amplify';
import { StorageManager } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';

const amplifyOutputs = (
  await import(`@environments/storage/file-uploader/${process.env.PATH}`)
).default;

Amplify.configure(amplifyOutputs);

export function StorageManagerExample() {
  return (
    <StorageManager
      acceptedFileTypes={['*']}
      accessLevel="guest"
      maxFileCount={1}
      showThumbnails
    />
  );
}
export default StorageManagerExample;
