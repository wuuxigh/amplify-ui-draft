import { createComponentTheme } from '../createTheme';
import { BaseProperties, Modifiers, Size } from './utils';

export type RadioTheme<Required extends boolean = false> = BaseProperties &
  Modifiers<Size, Required> & {
    _element?: {
      input?: BaseProperties;
      button?: BaseProperties & Modifiers<Size>;
      label?: BaseProperties & Modifiers<'disabled'>;
    };
  };

const radioTheme = createComponentTheme<RadioTheme<true>>({
  name: 'radio',
  theme(tokens) {
    const {
      components: { radio },
    } = tokens;
    return {
      _modifiers: {
        small: {},
        large: {},
      },
      _element: {
        button: {
          flexShrink: 0,
          '::before': {
            content: "''",
            display: 'inline-block',
            width: '100%',
            height: '100%',
            backgroundColor: 'currentcolor',
            borderRadius: '50%',
          },
          _modifiers: {
            small: {
              width: radio.button.small.width,
              height: radio.button.small.height,
            },
            large: {
              width: radio.button.large.width,
              height: radio.button.large.height,
            },
          },
        },
        input: {
          _css: {
            '&:disabled + .amplify-radio__button': {
              borderColor: radio.button._disabled.borderColor,
              backgroundColor: radio.button._disabled.backgroundColor,
            },
            '&[aria-invalid="true"]:focus + .amplify-radio__button': {
              // b/c shadows are objects, need to stringify it
              boxShadow: `${radio.button._error._focus.boxShadow}`,
            },
          },
        },
        label: {
          color: radio.label.color,
          _modifiers: {
            disabled: {
              color: radio.label._disabled.color,
            },
          },
        },
      },
    };
  },
});
