import {
  AuthActorState,
  AuthMachineState,
} from '../../machines/authenticator/types';
import { groupLog } from '../../utils';

export const getRoute = (
  state: AuthMachineState,
  actorState: AuthActorState
) => {
  // @todo-migration delete
  // console.log('state', state?.value);
  // console.log('actorState', actorState?.value);

  switch (true) {
    case state.matches('idle'):
      return 'idle';
    case state.matches('setup'):
      return 'setup';
    case state.matches('signOut'):
      return 'signOut';
    case state.matches('authenticated'):
      return 'authenticated';
    case actorState?.matches('confirmSignUp'):
    case actorState?.matches('confirmSignUp.resendConfirmationCode'):
      return 'confirmSignUp';
    case actorState?.matches('confirmSignIn'):
      return 'confirmSignIn';
    case actorState?.matches('setupTotp.edit'):
    case actorState?.matches('setupTotp.submit'):
      return 'setupTotp';
    case state.matches('signInActor.getCurrentUser'):
    case actorState?.matches('signIn'):
      return 'signIn';
    case actorState?.matches('signUp'):
      return 'signUp';
    case actorState?.matches('forceChangePassword'):
      return 'forceNewPassword';
    case actorState?.matches('forgotPassword'):
      return 'forgotPassword';
    case actorState?.matches('confirmResetPassword'):
      return 'confirmResetPassword';
    case actorState?.matches('verifyUser'):
      return 'verifyUser';
    case actorState?.matches('confirmVerifyUser'):
      return 'confirmVerifyUser';
    case state.matches('signIn.runActor'):
    case actorState.matches('fetchUserAttributes'):
      /**
       * This route is needed for autoSignIn to capture both the
       * autoSignIn.pending and the resolved states when the
       * signIn actor is running.
       */
      return 'transition';
    default:
      console.debug(
        'Cannot infer `route` from Authenticator state:',
        state.value
      );
      return null;
  }
};
