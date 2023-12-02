import * as React from 'react';
import { classNames } from '@aws-amplify/ui';

import { classNameModifier, classNameModifierByFlag } from '../shared/utils';
import { ComponentClassName } from '@aws-amplify/ui';
import {
  BaseHeadingProps,
  ForwardRefPrimitive,
  HeadingElement,
  HeadingProps,
  Primitive,
} from '../types';
import { View } from '../View';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef';

const HeadingPrimitive: Primitive<HeadingProps, HeadingElement> = (
  { className, children, isTruncated, level = 6, ...rest },
  ref
) => (
  <View
    as={`h${level}`}
    className={classNames(
      ComponentClassName.Heading,
      classNameModifier(ComponentClassName.Heading, level),
      classNameModifierByFlag(
        ComponentClassName.Heading,
        'truncated',
        isTruncated
      ),
      className
    )}
    ref={ref}
    {...rest}
  >
    {children}
  </View>
);

/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/heading)
 */
export const Heading: ForwardRefPrimitive<BaseHeadingProps, HeadingElement> =
  primitiveWithForwardRef(HeadingPrimitive);

Heading.displayName = 'Heading';
