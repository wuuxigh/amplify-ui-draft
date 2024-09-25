import * as React from 'react';
import { FlexProps } from '@aws-amplify/ui-react';
interface OverlayProps extends FlexProps {
    horizontal?: 'start' | 'center' | 'end';
    vertical?: 'start' | 'center' | 'end' | 'space-between';
}
export declare const Overlay: React.FC<OverlayProps>;
export {};
