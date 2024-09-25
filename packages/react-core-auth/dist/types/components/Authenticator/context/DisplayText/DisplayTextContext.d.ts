/// <reference types="react" />
export declare const DisplayTextContext: import("react").Context<Required<import("@aws-amplify/ui").DisplayTextTemplate<{
    providersDividerText?: string | undefined;
    getChallengeText?: ((challengeName: import("@aws-amplify/ui").ChallengeName | undefined) => string | undefined) | undefined;
    getCopyButtonText?: ((hasCopied: boolean) => string) | undefined;
    getDescriptionText?: ((route: import("../ComponentRoute").ComponentRoute | undefined) => string | undefined) | undefined;
    getProviderButtonText?: ((provider: string) => string | undefined) | undefined;
    getResetPasswordLinkText?: ((route: "forgotPassword" | "signIn" | "signUp") => string | undefined) | undefined;
    getSignInLinkText?: ((route: "forgotPassword" | "signIn" | "signUp") => string | undefined) | undefined;
    getSignUpLinkText?: ((route: "forgotPassword" | "signIn" | "signUp") => string | undefined) | undefined;
    getPrimaryButtonText?: ((route: import("../ComponentRoute").ComponentRoute | undefined) => string | undefined) | undefined;
    getSecondaryButtonText?: ((route: "confirmResetPassword" | "confirmSignUp" | "confirmVerifyUser" | "verifyUser" | undefined) => string | undefined) | undefined;
    getTitleText?: ((route: import("../ComponentRoute").ComponentRoute) => string) | undefined;
}>> | undefined>, DisplayTextProvider: import("react").ComponentType<import("react").PropsWithChildren<Required<import("@aws-amplify/ui").DisplayTextTemplate<{
    providersDividerText?: string | undefined;
    getChallengeText?: ((challengeName: import("@aws-amplify/ui").ChallengeName | undefined) => string | undefined) | undefined;
    getCopyButtonText?: ((hasCopied: boolean) => string) | undefined;
    getDescriptionText?: ((route: import("../ComponentRoute").ComponentRoute | undefined) => string | undefined) | undefined;
    getProviderButtonText?: ((provider: string) => string | undefined) | undefined;
    getResetPasswordLinkText?: ((route: "forgotPassword" | "signIn" | "signUp") => string | undefined) | undefined;
    getSignInLinkText?: ((route: "forgotPassword" | "signIn" | "signUp") => string | undefined) | undefined;
    getSignUpLinkText?: ((route: "forgotPassword" | "signIn" | "signUp") => string | undefined) | undefined;
    getPrimaryButtonText?: ((route: import("../ComponentRoute").ComponentRoute | undefined) => string | undefined) | undefined;
    getSecondaryButtonText?: ((route: "confirmResetPassword" | "confirmSignUp" | "confirmVerifyUser" | "verifyUser" | undefined) => string | undefined) | undefined;
    getTitleText?: ((route: import("../ComponentRoute").ComponentRoute) => string) | undefined;
}>>>>, useDisplayText: (params?: {
    errorMessage?: string | undefined;
} | undefined) => Required<import("@aws-amplify/ui").DisplayTextTemplate<{
    providersDividerText?: string | undefined;
    getChallengeText?: ((challengeName: import("@aws-amplify/ui").ChallengeName | undefined) => string | undefined) | undefined;
    getCopyButtonText?: ((hasCopied: boolean) => string) | undefined;
    getDescriptionText?: ((route: import("../ComponentRoute").ComponentRoute | undefined) => string | undefined) | undefined;
    getProviderButtonText?: ((provider: string) => string | undefined) | undefined;
    getResetPasswordLinkText?: ((route: "forgotPassword" | "signIn" | "signUp") => string | undefined) | undefined;
    getSignInLinkText?: ((route: "forgotPassword" | "signIn" | "signUp") => string | undefined) | undefined;
    getSignUpLinkText?: ((route: "forgotPassword" | "signIn" | "signUp") => string | undefined) | undefined;
    getPrimaryButtonText?: ((route: import("../ComponentRoute").ComponentRoute | undefined) => string | undefined) | undefined;
    getSecondaryButtonText?: ((route: "confirmResetPassword" | "confirmSignUp" | "confirmVerifyUser" | "verifyUser" | undefined) => string | undefined) | undefined;
    getTitleText?: ((route: import("../ComponentRoute").ComponentRoute) => string) | undefined;
}>>;
