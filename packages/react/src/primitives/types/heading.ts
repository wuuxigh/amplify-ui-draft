import { BaseTextProps } from './text';
import { ElementType, PrimitiveProps } from './view';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingElement = Extract<React.ElementType, `h${HeadingLevel}`>;

/** @deprecated For internal use only */
export interface BaseHeadingProps extends BaseTextProps {
  /**
   * @description
   * Controls which semantic section heading element is rendered, <h1> through <h6>
   */
  level?: HeadingLevel;
}

export type HeadingProps<Element extends ElementType = HeadingElement> =
  PrimitiveProps<BaseHeadingProps, Element>;
