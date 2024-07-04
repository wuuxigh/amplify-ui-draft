import React from 'react';
import { useElement } from '../context/elements';
import { Messages } from './Messages';
import { Avatar } from '.';

export const mockMessages = [
  {
    id: '1',
    content: { type: 'text', value: 'hello world!' },
    role: 'user',
    timestamp: new Date(),
  },
  {
    id: '2',
    content: { type: 'text', value: 'world says hi back' },
    role: 'assistant',
    timestamp: new Date(),
  },
];

export default function Conversation(): JSX.Element {
  const View = useElement('View');
  const Paragraph = useElement('Text');
  return (
    <View
      style={{
        width: '584px',
        height: '344px',
      }}
    >
      <View
        aria-label="Header"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          border: '1px solid rgba(220, 222, 224, 1)',
          borderRadius: '16px 16px 0px 0px',
          padding: '0px 16px',
          boxShadow: '0px 12px 30px 0px rgba(0, 0, 0, 0.07)',
          backgroundColor: 'rgba(250, 250, 250, 1)',
        }}
      >
        <Paragraph>Header title</Paragraph>
      </View>
      <View
        style={{
          borderLeft: '1px solid rgba(220, 222, 224, 1)',
          borderRight: '1px solid rgba(220, 222, 224, 1)',
          padding: '0px 16px',
          height: '300px',
        }}
      >
        <Messages.Layout>
          {mockMessages.map((message) => (
            <Messages.Message key={`message-${message.id}`}>
              <Avatar>
                <Avatar.Icon>avatar icon</Avatar.Icon>
                <Avatar.DisplayName>username</Avatar.DisplayName>
              </Avatar>
              <Messages.Message.MessageTextContent>
                {message.content.value}
              </Messages.Message.MessageTextContent>
              <Messages.ActionsBar>
                <Messages.ActionsBar.ActionsBarButton>
                  <Messages.ActionsBar.ActionsBarIcon>
                    action
                  </Messages.ActionsBar.ActionsBarIcon>
                </Messages.ActionsBar.ActionsBarButton>
              </Messages.ActionsBar>
            </Messages.Message>
          ))}
        </Messages.Layout>
      </View>
      <View
        style={{
          border: '1px solid rgba(220, 222, 224, 1)',
          borderTop: 'none',
          borderRadius: '0px 0px 16px 16px',
          padding: '0px 16px',
        }}
      >
        input subcomponent
      </View>
    </View>
  );
}
