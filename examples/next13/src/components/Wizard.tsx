'use client';
import { createComponentTheme } from '@aws-amplify/ui-react/theme';

const { className, theme } = createComponentTheme({
  name: 'wizard',
  theme(tokens) {
    return {
      backgroundColor: tokens.colors.background.primary,
      modifier: {
        primary: {
          backgroundColor: tokens.colors.background.success,
          fontSize: '20px',
        },
      },
      element: {
        header: {
          backgroundColor: tokens.colors.background.warning,
          color: tokens.colors.font.primary,
        },
      },
    };
  },
});

export default function Wizard({ variation }: { variation?: string }) {
  return (
    <div className={className({ modifier: [variation] })}>
      <h1 className={className({ element: ['header'] })}>Wizard</h1>
      <p>Variation: {variation}</p>
    </div>
  );
}

Wizard.theme = theme;
