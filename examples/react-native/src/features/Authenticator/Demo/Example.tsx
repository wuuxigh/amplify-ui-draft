import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
import { Amplify, I18n, Logger } from '@aws-amplify/core';
import { Cache } from '@aws-amplify/cache';
import { PubSub } from '@aws-amplify/pubsub';
import { Auth } from '@aws-amplify/auth';

import awsconfig from './aws-exports';

Amplify.register(I18n);

Amplify.register(Cache);
Amplify.register(PubSub);

Amplify.register(Auth);

Amplify.configure(awsconfig);

Logger.LOG_LEVEL = 'DEBUG';

function SignOutButton() {
  const { signOut } = useAuthenticator();
  return <Button onPress={signOut} title="Sign Out" />;
}

function App() {
  return (
    <Authenticator.Provider>
      <Authenticator>
        <View style={style.container}>
          <SignOutButton />
        </View>
      </Authenticator>
    </Authenticator.Provider>
  );
}

const style = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

export default App;
