Feature: Reset Password

  End users can reset their password through "Forgot your password?" link.

  Background:
    Given I'm running the example "ui/components/authenticator/forgot-password"

  @react @vue @angular @react-native @gen1 @gen2
  Scenario: Forgot Password with valid email
    When I type my "email" with status "CONFIRMED"
    Then I intercept '{ "headers": { "X-Amz-Target": "AWSCognitoIdentityProviderService.ForgotPassword" } }' with fixture "reset-password"
    Then I click the "Send code" button
    Then I will be redirected to the confirm forgot password page
    Then I see "Code *"
    Then I type a valid code
    Then I type my new password
    Then I confirm my password
    Then I intercept '{ "headers": { "X-Amz-Target": "AWSCognitoIdentityProviderService.ConfirmForgotPassword" } }' with fixture "confirm-reset-password"
    Then I click the 'Submit' button
    Then I see "Sign In"
    
  @react @vue @angular @react-native @gen1
  Scenario: Forgot Password with invalid email
    When I type my "email" with status "UNKNOWN"
    Then I click the "Send code" button
    Then I see "Username/client id combination not found."

  @angular @react @vue @react-native @gen1 @gen2
  Scenario: Forgot Password with valid placeholder 
    Then I see "Enter your email"
    Then I don't see "Enter your phone number"

  @angular @react @vue @react-native @gen1 @gen2
  Scenario: Forgot Password with wrong password requirements
    When I type my "email" with status "CONFIRMED"
    Then I intercept '{ "headers": { "X-Amz-Target": "AWSCognitoIdentityProviderService.ForgotPassword" } }' with fixture "reset-password"
    Then I click the "Send code" button
    Then I will be redirected to the confirm forgot password page
    Then I see "Code *"
    Then I type a valid code
    Then I type an invalid wrong complexity new password
    Then I confirm my password
    Then I see "Password must have numbers"
    Then I see "Password must have special characters"
    Then I see "Password must have upper case letters"
    Then I see "Password must have at least 8 characters"

  @react-native @gen1 @gen2
  Scenario: Forgot Password with wrong password requirements typed slowly
    When I type my "email" with status "CONFIRMED"
    Then I intercept '{ "headers": { "X-Amz-Target": "AWSCognitoIdentityProviderService.ForgotPassword" } }' with fixture "reset-password"
    Then I click the "Send code" button
    Then I will be redirected to the confirm forgot password page
    Then I see "Code *"
    Then I type a valid code
    Then I slowly type an invalid wrong complexity new password
    Then I confirm my password
    Then I see "Password must have numbers"
    Then I see "Password must have special characters"
    Then I see "Password must have upper case letters"
    Then I see "Password must have at least 8 characters"

  @angular @react @vue @react-native @gen1 @gen2
  Scenario: Forgot Password without lower case characters
    When I type my "email" with status "CONFIRMED"
    Then I intercept '{ "headers": { "X-Amz-Target": "AWSCognitoIdentityProviderService.ForgotPassword" } }' with fixture "reset-password"
    Then I click the "Send code" button
    Then I will be redirected to the confirm forgot password page
    Then I see "Code *"
    Then I type a valid code
    Then I type an invalid no lower case new password
    Then I confirm my password
    Then I see "Password must have numbers"
    Then I see "Password must have special characters"
    Then I see "Password must have lower case letters"
    Then I see "Password must have at least 8 characters"
    Then I confirm "Password must have numbers" error is accessible in new password field

  @react @vue @angular @react-native @gen1 @gen2
  Scenario: Forgot Password with resend code 
    When I type my "email" with status "CONFIRMED"
    Then I intercept '{ "headers": { "X-Amz-Target": "AWSCognitoIdentityProviderService.ForgotPassword" } }' with fixture "reset-password"
    Then I click the "Send code" button
    Then I will be redirected to the confirm forgot password page
    Then I click the "Resend Code" button
    Then I see "Code *"
    Then I type a valid code
    Then I type my new password
    Then I confirm my password
    Then I intercept '{ "headers": { "X-Amz-Target": "AWSCognitoIdentityProviderService.ConfirmForgotPassword" } }' with fixture "confirm-reset-password"
    Then I click the 'Submit' button
    Then I see "Sign In"
