import Link from 'next/link';

import { VisuallyHidden } from '@aws-amplify/ui-react';

import { Logo } from '../Logo';

interface LogoLinkProps {
  platform: string;
  onClick?: () => void;
  alwaysCollapsible: boolean;
}

export const LogoLink = ({
  platform,
  onClick,
  alwaysCollapsible,
}: LogoLinkProps) => {
  return (
    <Link href={`/${platform}`} passHref>
      <a
        onClick={onClick}
        className={`docs-logo-link ${
          alwaysCollapsible ? 'always-collapsible' : null
        }`}
      >
        <VisuallyHidden>Amplify UI Home</VisuallyHidden>
        <Logo />
      </a>
    </Link>
  );
};
