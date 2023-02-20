import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';

import { Amplify, Credentials, I18n, Logger } from '@aws-amplify/core';
import { Cache } from '@aws-amplify/cache';
import { Auth } from '@aws-amplify/auth';

import awsconfig from './aws-exports';

Amplify.Auth = Auth;
Amplify.Cache = Cache;
Amplify.Credentials = Credentials;
Amplify.I18n = I18n;

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
