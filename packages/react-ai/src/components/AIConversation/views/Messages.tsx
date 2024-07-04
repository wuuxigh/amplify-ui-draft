import React from 'react';
import { ViewElementProps } from '@aws-amplify/ui-react/internal';
import { useElement } from '../context/elements';
import { ActionsBar } from './ActionsBar';
import { Layout } from './Layout';
import { Message } from './Message';

export const MessagesElement = <T extends ViewElementProps>({
  children,
  className,
  ...rest
}: T): JSX.Element => {
  const View = useElement('View');

  return (
    <View className={className} {...rest}>
      {children}
    </View>
  );
};

const Messages = Object.assign(MessagesElement, {
  ActionsBar,
  Layout,
  Message,
});

export { Messages };
