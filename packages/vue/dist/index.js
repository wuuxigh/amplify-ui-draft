import { defineComponent as q, useSlots as Ir, renderSlot as E, mergeProps as Ie, unref as d, createElementVNode as x, normalizeProps as oe, guardReactiveProps as ie, openBlock as U, createElementBlock as X, toRefs as re, ref as le, createVNode as C, withCtx as _, createCommentVNode as j, effectScope as cs, getCurrentScope as us, onScopeDispose as ci, isRef as ds, shallowRef as so, watch as fs, reactive as ui, watchEffect as ps, createBlock as W, normalizeClass as Ae, createTextVNode as M, toDisplayString as R, Fragment as He, renderList as An, computed as D, onBeforeMount as ms, withModifiers as ue, h as qt, onMounted as di, onUnmounted as gs } from "vue";
import { Hub as hs, I18n as ys, ConsoleLogger as vs } from "aws-amplify/utils";
import { getCurrentUser as fi, signIn as _s, signUp as ws, confirmSignIn as pi, confirmSignUp as Ss, confirmResetPassword as bs, resetPassword as mi, fetchUserAttributes as gi, resendSignUpCode as hi, signInWithRedirect as yi, autoSignIn as Cs, signOut as As, sendUserAttributeVerificationCode as Is, confirmUserAttribute as Es } from "aws-amplify/auth";
import { AuthAction as Ce, Category as tt, StorageAction as vi, InAppMessagingAction as Ts, GeoAction as Qn, setCustomUserAgent as Qe } from "@aws-amplify/core/internals/utils";
import { Amplify as Ps } from "aws-amplify";
const Ne = /* @__PURE__ */ q({
  __name: "base-footer",
  setup(e) {
    const t = Ir();
    return (n, r) => E(n.$slots, "footert", Ie(n.$attrs, {
      slotData: d(t).default && d(t).default()
    }), () => [
      x("footer", oe(ie(n.$attrs)), [
        E(n.$slots, "default")
      ], 16)
    ]);
  }
}), Ue = /* @__PURE__ */ q({
  __name: "base-form",
  setup(e) {
    const t = Ir();
    return (n, r) => E(n.$slots, "formt", Ie(n.$attrs, {
      slotData: d(t).default && d(t).default()
    }), () => [
      x("form", Ie({ "data-amplify-form": "" }, n.$attrs), [
        E(n.$slots, "default")
      ], 16)
    ]);
  }
}), In = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, ks = {};
function Ns(e, t) {
  return U(), X("div", null, [
    E(e.$slots, "default")
  ]);
}
const me = /* @__PURE__ */ In(ks, [["render", Ns]]), Us = ["type", "data-fullwidth", "data-size", "data-fontWeight", "data-variation", "data-loading", "data-disabled", "disabled"], we = /* @__PURE__ */ q({
  __name: "amplify-button",
  props: {
    type: null,
    fullWidth: { type: [Boolean, String] },
    size: null,
    variation: null,
    fontWeight: null,
    loading: { type: [Boolean, String] },
    disabled: { type: [Boolean, String] }
  },
  setup(e) {
    const t = e, { type: n, fullWidth: r, size: o, variation: i, fontWeight: a } = re(t);
    return (s, l) => E(s.$slots, "buttont", oe(ie(s.$attrs)), () => [
      x("button", Ie({
        class: ["amplify-button amplify-field-group__control", {
          [`amplify-button--${d(i)}`]: d(i),
          [`amplify-button--${d(o)}`]: d(o),
          "amplify-button--fullwidth": d(r),
          "amplify-button--loading": e.loading,
          "amplify-button--disabled": e.disabled
        }],
        type: d(n),
        style: { fontWeight: d(a) },
        "data-fullwidth": d(r),
        "data-size": d(o),
        "data-fontWeight": d(a),
        "data-variation": d(i),
        "data-loading": e.loading,
        "data-disabled": e.disabled,
        disabled: e.disabled
      }, s.$attrs, { "data-amplify-button": "" }), [
        E(s.$slots, "default")
      ], 16, Us)
    ]);
  }
}), Er = (e) => {
  var t;
  return (t = e.context.actorRef) == null ? void 0 : t.getSnapshot();
}, Tr = (e) => {
  var t;
  return (t = Er(e)) == null ? void 0 : t.context;
}, $s = {
  apis: [Ce.DeleteUser, Ce.UpdatePassword],
  category: tt.Auth
}, Fs = {
  apis: [
    Ce.SignUp,
    Ce.ConfirmSignUp,
    Ce.ResendSignUpCode,
    Ce.SignIn,
    Ce.ConfirmSignIn,
    Ce.FetchUserAttributes,
    Ce.SignOut,
    Ce.ResetPassword,
    Ce.ConfirmResetPassword,
    Ce.SignInWithRedirect
  ],
  category: tt.Auth
}, Os = {
  apis: [vi.UploadData],
  category: tt.Storage
}, Rs = {
  apis: [Ts.NotifyMessageInteraction],
  category: tt.InAppMessaging
}, xs = {
  category: tt.Geo,
  apis: [
    Qn.SearchByText,
    Qn.SearchForSuggestions,
    Qn.SearchByPlaceId
  ]
}, Ms = {
  category: tt.Geo,
  apis: []
}, Ds = {
  apis: [vi.UploadData],
  category: tt.Storage
};
function Dt(e) {
  return e != null && !Array.isArray(e) && typeof e == "object";
}
function _i(e) {
  return typeof e == "string" || typeof e == "object" && Object.prototype.toString.call(e) === "[object String]";
}
function Bs(e) {
  return Dt(e) && Object.prototype.toString.call(e) === "[object Map]";
}
function Ls(e) {
  return Dt(e) && Object.prototype.toString.call(e) === "[object Set]";
}
function wi(e) {
  if (e == null)
    return !0;
  if (Dt(e) && (Bs(e) || Ls(e)))
    return !e.size;
  if (Dt(e) && (_i(e) || Array.isArray(e)))
    return !e.length;
  for (const t in e)
    if (zs(e, t))
      return !1;
  return !0;
}
function Gs(e) {
  return Dt(e) && wi(e);
}
function zs(e, t) {
  return e != null && Object.prototype.hasOwnProperty.call(e, t);
}
function lo(e) {
  return typeof e == "function";
}
function Ws(...e) {
}
const Si = ({ payload: e }, t, n) => {
  const { event: r } = e, { send: o } = t, { onSignIn: i, onSignOut: a } = n ?? {};
  switch (r) {
    case "signedIn": {
      lo(i) && i(e);
      break;
    }
    case "signInWithRedirect": {
      o("SIGN_IN_WITH_REDIRECT");
      break;
    }
    case "signedOut":
    case "tokenRefresh_failure": {
      r === "signedOut" && lo(a) && a(), o("SIGN_OUT");
      break;
    }
  }
}, Vs = (e, t = Si) => {
  const n = (r) => t(r, e);
  return hs.listen("auth", n, "authenticator-hub-handler");
}, js = [
  "+1",
  "+7",
  "+20",
  "+27",
  "+30",
  "+31",
  "+32",
  "+33",
  "+34",
  "+36",
  "+39",
  "+40",
  "+41",
  "+43",
  "+44",
  "+45",
  "+46",
  "+47",
  "+48",
  "+49",
  "+51",
  "+52",
  "+53",
  "+54",
  "+55",
  "+56",
  "+57",
  "+58",
  "+60",
  "+61",
  "+62",
  "+63",
  "+64",
  "+65",
  "+66",
  "+81",
  "+82",
  "+84",
  "+86",
  "+90",
  "+91",
  "+92",
  "+93",
  "+94",
  "+95",
  "+98",
  "+212",
  "+213",
  "+216",
  "+218",
  "+220",
  "+221",
  "+222",
  "+223",
  "+224",
  "+225",
  "+226",
  "+227",
  "+228",
  "+229",
  "+230",
  "+231",
  "+232",
  "+233",
  "+234",
  "+235",
  "+236",
  "+237",
  "+238",
  "+239",
  "+240",
  "+241",
  "+242",
  "+243",
  "+244",
  "+245",
  "+246",
  "+248",
  "+249",
  "+250",
  "+251",
  "+252",
  "+253",
  "+254",
  "+255",
  "+256",
  "+257",
  "+258",
  "+260",
  "+261",
  "+262",
  "+263",
  "+264",
  "+265",
  "+266",
  "+267",
  "+268",
  "+269",
  "+290",
  "+291",
  "+297",
  "+298",
  "+299",
  "+345",
  "+350",
  "+351",
  "+352",
  "+353",
  "+354",
  "+355",
  "+356",
  "+357",
  "+358",
  "+359",
  "+370",
  "+371",
  "+372",
  "+373",
  "+374",
  "+375",
  "+376",
  "+377",
  "+378",
  "+379",
  "+380",
  "+381",
  "+382",
  "+385",
  "+386",
  "+387",
  "+389",
  "+420",
  "+421",
  "+423",
  "+500",
  "+501",
  "+502",
  "+503",
  "+504",
  "+505",
  "+506",
  "+507",
  "+508",
  "+509",
  "+537",
  "+590",
  "+591",
  "+593",
  "+594",
  "+595",
  "+596",
  "+597",
  "+598",
  "+599",
  "+670",
  "+672",
  "+673",
  "+674",
  "+675",
  "+676",
  "+677",
  "+678",
  "+679",
  "+680",
  "+681",
  "+682",
  "+683",
  "+685",
  "+686",
  "+687",
  "+688",
  "+689",
  "+690",
  "+691",
  "+692",
  "+850",
  "+852",
  "+853",
  "+855",
  "+856",
  "+872",
  "+880",
  "+886",
  "+960",
  "+961",
  "+962",
  "+963",
  "+964",
  "+965",
  "+966",
  "+967",
  "+968",
  "+970",
  "+971",
  "+972",
  "+973",
  "+974",
  "+975",
  "+976",
  "+977",
  "+992",
  "+993",
  "+994",
  "+995",
  "+996",
  "+998"
], Bt = {
  birthdate: {
    label: "Birthdate",
    placeholder: "Enter your Birthdate",
    type: "date",
    autocomplete: "bday",
    isRequired: !0
  },
  confirmation_code: {
    label: "Confirmation Code",
    placeholder: "Enter your Confirmation Code",
    type: "text",
    autocomplete: "one-time-code",
    isRequired: !0
  },
  confirm_password: {
    label: "Confirm Password",
    placeholder: "Please confirm your Password",
    type: "password",
    autocomplete: "new-password",
    isRequired: !0
  },
  email: {
    label: "Email",
    placeholder: "Enter your Email",
    type: "email",
    autocomplete: "username",
    isRequired: !0
  },
  family_name: {
    label: "Family Name",
    placeholder: "Enter your Family Name",
    type: "text",
    autocomplete: "family-name",
    isRequired: !0
  },
  given_name: {
    label: "Given Name",
    placeholder: "Enter your Given Name",
    type: "text",
    autocomplete: "given-name",
    isRequired: !0
  },
  middle_name: {
    label: "Middle Name",
    placeholder: "Enter your Middle Name",
    type: "text",
    autocomplete: "additional-name",
    isRequired: !0
  },
  name: {
    label: "Name",
    placeholder: "Enter your Name",
    type: "text",
    autocomplete: "name",
    isRequired: !0
  },
  nickname: {
    label: "Nickname",
    placeholder: "Enter your Nickname",
    type: "text",
    autocomplete: "tel",
    isRequired: !0
  },
  password: {
    label: "Password",
    placeholder: "Enter your Password",
    type: "password",
    autocomplete: "new-password",
    isRequired: !0
  },
  phone_number: {
    label: "Phone Number",
    placeholder: "Enter your Phone Number",
    type: "tel",
    autocomplete: "tel",
    dialCode: "+1",
    dialCodeList: js,
    isRequired: !0
  },
  preferred_username: {
    label: "Preferred Username",
    placeholder: "Enter your Preferred Username",
    type: "text",
    isRequired: !0
  },
  profile: {
    label: "Profile",
    placeholder: "Add your Profile",
    type: "url",
    autocomplete: "url",
    isRequired: !0
  },
  website: {
    label: "Website",
    placeholder: "Add your Website",
    type: "url",
    autocomplete: "url",
    isRequired: !0
  },
  username: {
    label: "Username",
    placeholder: "Enter your Username",
    type: "text",
    autocomplete: "username",
    isRequired: !0
  }
}, Hs = [
  "^",
  "$",
  "*",
  ".",
  "[",
  "]",
  "{",
  "}",
  "(",
  ")",
  "?",
  '"',
  "!",
  "@",
  "#",
  "%",
  "&",
  "/",
  "\\",
  ",",
  ">",
  "<",
  "'",
  ":",
  ";",
  "|",
  "_",
  "~",
  "`",
  "=",
  "+",
  "-",
  " "
], Ys = (e, t) => {
  if (t != null && t.matches("federatedSignIn")) {
    if (e.matches("signUpActor"))
      return "signUp";
    if (e.matches("signInActor"))
      return "signIn";
  }
  switch (!0) {
    case e.matches("idle"):
      return "idle";
    case e.matches("setup"):
      return "setup";
    case e.matches("signOut"):
      return "signOut";
    case e.matches("authenticated"):
      return "authenticated";
    case (t == null ? void 0 : t.matches("confirmSignUp")):
    case (t == null ? void 0 : t.matches("resendSignUpCode")):
      return "confirmSignUp";
    case (t == null ? void 0 : t.matches("confirmSignIn")):
      return "confirmSignIn";
    case (t == null ? void 0 : t.matches("setupTotp.edit")):
    case (t == null ? void 0 : t.matches("setupTotp.submit")):
      return "setupTotp";
    case (t == null ? void 0 : t.matches("signIn")):
      return "signIn";
    case (t == null ? void 0 : t.matches("signUp")):
    case (t == null ? void 0 : t.matches("autoSignIn")):
      return "signUp";
    case (t == null ? void 0 : t.matches("forceChangePassword")):
      return "forceNewPassword";
    case (t == null ? void 0 : t.matches("forgotPassword")):
      return "forgotPassword";
    case (t == null ? void 0 : t.matches("confirmResetPassword")):
      return "confirmResetPassword";
    case (t == null ? void 0 : t.matches("selectUserAttributes")):
      return "verifyUser";
    case (t == null ? void 0 : t.matches("confirmVerifyUserAttribute")):
      return "confirmVerifyUser";
    case e.matches("getCurrentUser"):
    case (t == null ? void 0 : t.matches("fetchUserAttributes")):
      return "transition";
    default:
      return null;
  }
}, Ks = (e) => {
  const t = (n) => (r) => e({ type: n, data: r });
  return {
    initializeMachine: t("INIT"),
    resendCode: t("RESEND"),
    signOut: t("SIGN_OUT"),
    submitForm: t("SUBMIT"),
    updateForm: t("CHANGE"),
    updateBlur: t("BLUR"),
    // Actions that don't immediately invoke a service but instead transition to a screen
    // are prefixed with `to*`
    toFederatedSignIn: t("FEDERATED_SIGN_IN"),
    toForgotPassword: t("FORGOT_PASSWORD"),
    toSignIn: t("SIGN_IN"),
    toSignUp: t("SIGN_UP"),
    skipVerification: t("SKIP")
  };
}, qs = (e) => {
  var g, w;
  const t = Tr(e) ?? {}, { challengeName: n, codeDeliveryDetails: r, remoteError: o, validationError: i, totpSecretCode: a = null, unverifiedUserAttributes: s, username: l } = t, { socialProviders: c = [] } = ((g = e.context) == null ? void 0 : g.config) ?? {}, u = (t == null ? void 0 : t.user) ?? ((w = e.context) == null ? void 0 : w.user), m = !!(i && Object.keys(i).length > 0), f = Er(e), p = e.hasTag("pending") || (f == null ? void 0 : f.hasTag("pending")), h = Ys(e, f);
  return {
    authStatus: ((y) => {
      switch (y) {
        case "idle":
        case "setup":
          return "configuring";
        case "authenticated":
          return "authenticated";
        default:
          return "unauthenticated";
      }
    })(h),
    challengeName: n,
    codeDeliveryDetails: r,
    error: o,
    hasValidationErrors: m,
    isPending: p,
    route: h,
    socialProviders: c,
    totpSecretCode: a,
    unverifiedUserAttributes: s,
    user: u,
    username: l,
    validationErrors: i
    // @v6-migration-note
    // While most of the properties
    // on `AuthenticatorServiceContextFacade` can resolve to `undefined`, updating
    // the interface requires material changes in consumers (namely `useAuthenticator`)
    // which will have implications on the UI layer as typeguards and non-null checks
    // are required to pass type checking. As the `Authenticator` is behaving as expected
    // with the `AuthenticatorServiceContextFacade` interface, prefer to cast
  };
}, Js = ({ send: e, state: t }) => {
  const n = Ks(e), r = qs(t);
  return {
    ...n,
    ...r
  };
};
var lr;
(function(e) {
  e.Apple = "Apple", e.Amazon = "Amazon", e.Facebook = "Facebook", e.Google = "Google";
})(lr || (lr = {}));
var co;
(function(e) {
  e.Email = "email", e.PhoneNumber = "phone_number";
})(co || (co = {}));
const Zs = [
  "birthdate",
  "email",
  "family_name",
  "given_name",
  "middle_name",
  "name",
  "nickname",
  "phone_number",
  "preferred_username",
  "profile",
  "website"
], Qs = [
  "username",
  "email",
  "phone_number"
], bi = [
  ...Qs,
  ...Zs,
  "confirmation_code",
  "password",
  "confirm_password"
], Xs = (e) => bi.includes(e), $e = (e) => {
  const t = new FormData(e.target);
  return Object.fromEntries(t);
}, Ci = (e) => bi.includes(e), el = (e) => Array.isArray(e), tl = (e) => e ? el(e) ? e : [e] : null, nl = (e) => {
  const t = e.trim().split("");
  for (let n = 0; n < t.length; n++)
    n > 0 && n < t.length - 1 && (t[n] = "*");
  return t.join("");
}, rl = (e) => {
  if (e.length < 4)
    return e;
  const t = e.split("");
  for (let n = 0; n < t.length - 4; n++)
    t[n] = "*";
  return t.join("");
}, ol = (e) => {
  const t = e.split("@");
  return `${nl(t[0])}@${t[1]}`;
}, il = (e, t) => e === "Phone Number" ? rl(t) : ol(t), al = (e) => Hs.some((t) => e.includes(t)), sl = (e, t, n) => encodeURI(`otpauth://totp/${e}:${t}?secret=${n}&issuer=${e}`);
function ll(e, ...t) {
  return Object.entries(e).reduce((n, [r, o]) => ({
    ...n,
    [r]: t.includes(r) ? o : o == null ? void 0 : o.trim()
  }), {});
}
const cl = {
  "Account recovery requires verified contact information": "Zurücksetzen des Accounts benötigt einen verifizierten Account",
  "Add your Profile": "Ihr Profil hinzufügen",
  "Add your Website": "Ihre Website hinzufügen",
  "Back to Sign In": "Zurück zur Anmeldung",
  "Change Password": "Passwort ändern",
  Changing: "Ändern von",
  Code: "Code",
  "Confirm Password": "Passwort bestätigen",
  "Please confirm your Password": "Bitte bestätigen Sie Ihr Passwort",
  "Confirm Sign Up": "Registrierung bestätigen",
  "Confirm SMS Code": "SMS-Code bestätigen",
  "Confirm TOTP Code": "TOTP-Code bestätigen",
  Confirm: "Bestätigen",
  "Confirmation Code": "Bestätigungs-Code",
  Confirming: "Wird bestätigt",
  "Create a new account": "Einen neuen Account erstellen",
  "Create Account": "Account erstellen",
  "Creating Account": "Account wird erstellt",
  "Dismiss alert": "Warnung verwerfen",
  Email: "E-Mail",
  "Enter your Birthdate": "Geben Sie Ihr Geburtsdatum ein",
  "Enter your code": "Geben Sie Ihren Code ein",
  "Enter your Confirmation Code": "Geben Sie Ihren Bestätigungs-Code ein",
  "Enter your Email": "Geben Sie Ihre E-Mail ein",
  "Enter your Family Name": "Geben Sie Ihren Nachnamen ein",
  "Enter your Given Name": "Geben Sie Ihren Vornamen ein",
  "Enter your Middle Name": "Geben Sie Ihren zweiten Vornamen ein",
  "Enter your Name": "Geben Sie Ihren Namen ein",
  "Enter your Nickname": "Geben Sie Ihren Spitznamen ein",
  "Enter your Password": "Geben Sie Ihr Passwort ein",
  "Enter your password": "Geben Sie Ihr Passwort ein",
  "Enter your email": "Geben Sie Ihre E-Mail ein",
  "Enter your phone number": "Geben Sie Ihre Telefonnummer ein",
  "Enter your Preferred Username": "Geben Sie Ihren bevorzugten Benutzernamen ein",
  "Enter your username": "Geben Sie Ihren Benutzernamen ein",
  "Forgot password?": "Passwort vergessen?",
  "Forgot your password?": "Passwort vergessen? ",
  "Hide password": "Passwort verbergen",
  "It may take a minute to arrive": "Es kann eine Minute dauern, bis er ankommt",
  Loading: "Wird geladen",
  "New password": "Neues Passwort",
  or: "oder",
  Password: "Passwort",
  "Phone Number": "Telefonnummer",
  "Resend Code": "Code erneut senden",
  "Reset your Password": "Zurücksetzen des Passworts",
  "Reset your password": "Zurücksetzen des passworts",
  "Send code": "Code senden",
  "Send Code": "Code senden",
  Sending: "Wird gesendet",
  "Setup TOTP": "TOTP einrichten",
  "Show password": "Passwort anzeigen",
  "Sign in to your account": "Melden Sie sich mit Ihrem Account an",
  "Sign In with Amazon": "Mit Amazon anmelden",
  "Sign In with Apple": "Mit Apple anmelden",
  "Sign In with Facebook": "Mit Facebook anmelden",
  "Sign In with Google": "Mit Google anmelden",
  "Sign in": "Anmelden",
  "Sign In": "Anmelden",
  "Signing in": "Wird angemeldet",
  Skip: "Überspringen",
  Submit: "Abschicken",
  Submitting: "Wird gesendet",
  Username: "Benutzername",
  "Verify Contact": "Kontakt verifizieren",
  Verify: "Verifizieren",
  "We Emailed You": "E-Mail wurde versendet",
  "We Sent A Code": "Wir haben einen Code gesendet",
  "We Texted You": "Wir haben Ihnen eine SMS gesendet",
  "Your code is on the way. To log in, enter the code we emailed to": "Ihr Bestätigungscode ist unterwegs. Um sich einzuloggen geben Sie den Code ein, den wir per E-Mail verschickt haben",
  "Your code is on the way. To log in, enter the code we sent you": "Ihr Code ist unterwegs. Um sich anzumelden, geben Sie den Code ein, den wir Ihnen gesendet haben",
  "Your code is on the way. To log in, enter the code we texted to": "Ihr Bestätigungscode ist unterwegs. Um sich einzuloggen geben Sie den Code ein, den wir per SMS verschickt haben",
  // Additional translations provided by customers
  "An account with the given email already exists.": "Ein Account mit dieser E-Mail existiert bereits.",
  "Confirm a Code": "Code bestätigen",
  "Confirm Sign In": "Anmeldung bestätigen",
  "Create account": "Hier registrieren",
  "Sign Up with Facebook": "Mit Facebook registrieren",
  "Sign Up with Google": "Mit Google registrieren",
  "Forgot Password": "Passwort vergessen",
  "Have an account? ": "Schon registriert? ",
  "Incorrect username or password": "Falscher Benutzername oder falsches Passwort",
  "Invalid password format": "Ungültiges Passwort-Format",
  "Invalid phone number format": "Ungültiges Telefonummern-Format. Benutze eine Nummer im Format: +12345678900",
  "It may take a minute to arrive.": "Es könnte eine Minute dauern, bis der Code eintrifft.",
  "Lost your code? ": "Code verloren? ",
  "New Password": "Neues Passwort",
  "No account? ": "Kein Account? ",
  "Password attempts exceeded": "Die maximale Anzahl der fehlerhaften Anmeldeversuche wurde erreicht",
  "Reset password": "Passwort zurücksetzen",
  "Reset Password": "Passwort Zurücksetzen",
  "Sign Out": "Abmelden",
  "Sign Up": "Registrieren",
  "User already exists": "Dieser Benutzer existiert bereits",
  "User does not exist": "Dieser Benutzer existiert nicht",
  "Username cannot be empty": "Benutzername darf nicht leer sein"
}, ul = {
  "Account recovery requires verified contact information": "Account recovery requires verified contact information",
  "Add your Profile": "Add your Profile",
  "Add your Website": "Add your Website",
  "Back to Sign In": "Back to Sign In",
  "Change Password": "Change Password",
  Changing: "Changing",
  Code: "Code",
  "Confirm Password": "Confirm Password",
  "Confirm Sign Up": "Confirm Sign Up",
  "Confirm SMS Code": "Confirm SMS Code",
  "Confirm MFA Code": "Confirm MFA Code",
  "Confirm TOTP Code": "Confirm TOTP Code",
  Confirm: "Confirm",
  "Confirmation Code": "Confirmation Code",
  Confirming: "Confirming",
  "Create a new account": "Create a new account",
  "Create Account": "Create Account",
  "Creating Account": "Creating Account",
  "Dismiss alert": "Dismiss alert",
  Email: "Email",
  "Enter your Birthdate": "Enter your Birthdate",
  "Enter your code": "Enter your code",
  "Enter your Confirmation Code": "Enter your Confirmation Code",
  "Enter your Email": "Enter your Email",
  "Enter your Family Name": "Enter your Family Name",
  "Enter your Given Name": "Enter your Given Name",
  "Enter your Middle Name": "Enter your Middle Name",
  "Enter your Name": "Enter your Name",
  "Enter your Nickname": "Enter your Nickname",
  "Enter your Password": "Enter your Password",
  "Enter your phone number": "Enter your phone number",
  "Enter your Preferred Username": "Enter your Preferred Username",
  "Enter your username": "Enter your username",
  "Forgot password?": "Forgot password?",
  "Forgot your password?": "Forgot your password?",
  "Hide password": "Hide password",
  "It may take a minute to arrive": "It may take a minute to arrive",
  Loading: "Loading",
  "New password": "New password",
  or: "or",
  Password: "Password",
  "Phone Number": "Phone Number",
  "Please confirm your Password": "Please confirm your Password",
  "Resend Code": "Resend Code",
  "Reset your password": "Reset your password",
  "Reset your Password": "Reset your Password",
  "Send code": "Send code",
  "Send Code": "Send Code",
  Sending: "Sending",
  "Setup TOTP": "Setup TOTP",
  "Show password": "Show password",
  "Sign in to your account": "Sign in to your account",
  "Sign In with Amazon": "Sign In with Amazon",
  "Sign In with Apple": "Sign In with Apple",
  "Sign In with Facebook": "Sign In with Facebook",
  "Sign In with Google": "Sign In with Google",
  "Sign in": "Sign in",
  "Sign In": "Sign In",
  "Signing in": "Signing in",
  Skip: "Skip",
  Submit: "Submit",
  Submitting: "Submitting",
  Username: "Username",
  "Verify Contact": "Verify Contact",
  Verify: "Verify",
  "We Emailed You": "We Emailed You",
  "We Sent A Code": "We Sent A Code",
  "We Texted You": "We Texted You",
  "Your code is on the way. To log in, enter the code we emailed to": "Your code is on the way. To log in, enter the code we emailed to",
  "Your code is on the way. To log in, enter the code we sent you": "Your code is on the way. To log in, enter the code we sent you",
  "Your code is on the way. To log in, enter the code we texted to": "Your code is on the way. To log in, enter the code we texted to"
}, dl = {
  "Account recovery requires verified contact information": "La recuperación de la cuenta requiere información de contacto verificada",
  "Back to Sign In": "Volver a inicio de sesión",
  "Change Password": "Cambiar contraseña",
  Changing: "Cambiando",
  Code: "Código",
  "Code *": "Código *",
  "Confirm Password": "Confirmar contraseña",
  "Confirm Sign Up": "Confirmar registro",
  "Confirm SMS Code": "Confirmar el código de SMS",
  "Confirm TOTP Code": "Confirmar código TOTP",
  Confirm: "Confirmar",
  "Confirmation Code": "Código de confirmación",
  Confirming: "Confirmando",
  "Create a new account": "Crear una cuenta nueva",
  "Create Account": "Crear cuenta",
  "Creating Account": "Creando cuenta",
  "Dismiss alert": "Descartar alerta",
  Email: "Email",
  "Enter your code": "Ingrese el código",
  "Enter your Email": "Escriba su Email",
  "Enter your email": "Escriba su email",
  "Enter your Password": "Escriba su Contraseña",
  "Enter your phone number": "Ingrese el número de teléfono",
  "Enter your username": "Ingrese el nombre de usuario",
  "Forgot your password?": "¿Olvidó su contraseña?",
  "Hide password": "Ocultar contraseña",
  "It may take a minute to arrive": "Es posible que tarde un minuto en llegar",
  Loading: "Cargando",
  "New password": "Nueva contraseña",
  or: "o",
  Password: "Contraseña",
  "Phone Number": "Número de teléfono",
  "Resend Code": "Reenviar código",
  "Reset your password": "Restablecer su contraseña",
  "Reset your Password": "Restablecer su Contraseña",
  "Send code": "Enviar código",
  "Send Code": "Enviar código",
  Sending: "Enviando",
  "Setup TOTP": "Configurar TOTP",
  "Show password": "Mostrar contraseña",
  "Sign in to your account": "Iniciar sesión en tu cuenta",
  "Sign In with Amazon": "Iniciar Sesión con Amazon",
  "Sign In with Apple": "Iniciar Sesión con Apple",
  "Sign In with Facebook": "Iniciar Sesión con Facebook",
  "Sign In with Google": "Iniciar Sesión con Google",
  "Sign in": "Iniciar sesión",
  "Sign In": "Iniciar Sesión",
  "Signing in": "Iniciando sesión",
  Skip: "Omitir",
  Submit: "Enviar",
  Submitting: "Enviando",
  Username: "Nombre de usuario",
  "Verify Contact": "Verificar contacto",
  Verify: "Verificar",
  "We Emailed You": "Le hemos enviado un correo electrónico",
  "We Sent A Code": "Hemos enviado un código",
  "We Texted You": "Le hemos enviado un mensaje de texto",
  "Your code is on the way. To log in, enter the code we emailed to": "El código está en camino. Para iniciar sesión, escriba el código que hemos enviado por correo electrónico a",
  "Your code is on the way. To log in, enter the code we sent you": "El código está en camino. Para iniciar sesión, escriba el código que le hemos enviado",
  "Your code is on the way. To log in, enter the code we texted to": "El código está en camino. Para iniciar sesión, escriba el código que hemos enviado por mensaje de texto a",
  // Additional translations provided by customers
  "An account with the given email already exists.": "Ya existe una cuenta con el correo ingresado.",
  "Confirm a Code": "Confirmar un código",
  "Confirm Sign In": "Confirmar inicio de sesión",
  "Forgot Password": "Olvidé mi contraseña",
  "Incorrect username or password.": "Nombre de usuario o contraseña incorrecta",
  "Enter your Family Name": "Escriba su apellido",
  "Enter your Given Name": "Escriba su nombre",
  "Given Name": "Nombre",
  "Family Name": "Apellido",
  "Reset Password": "Restablecer contraseña",
  "Please confirm your Password": "Confirme su contraseña",
  "Invalid password format": "Formato de contraseña inválido",
  "Invalid phone number format": "Formato de número de teléfono inválido",
  "Loading...": "Cargando...",
  "New Password": "Nueva contraseña",
  "Resend a Code": "Reenviar un código",
  "Sign Out": "Cerrar sesión",
  "Sign Up with Amazon": "Crear cuenta con Amazon",
  "Sign Up with Apple": "Crear cuenta con Apple",
  "Sign Up with Facebook": "Crear cuenta con Facebook",
  "Sign Up with Google": "Crear cuenta con Google",
  "Sign Up": "Crear cuenta",
  "User already exists": "El usuario ya existe",
  "User does not exist": "El usuario no existe",
  "Username/client id combination not found.": "El usuario no existe",
  "Username cannot be empty": "El nombre de usuario no puede estar vacío",
  "Your passwords must match": "Las contraseñas deben coincidir",
  "Password must have at least 8 characters": "La contraseña debe tener al menos 8 caracteres",
  "Password did not conform with policy: Password must have uppercase characters": "La contraseña debe tener al menos un carácter en mayúscula",
  "Password did not conform with policy: Password must have numeric characters": "La contraseña debe tener al menos un carácter numérico",
  "Password did not conform with policy: Password must have symbol characters": "La contraseña debe tener al menos un símbolo",
  "Password did not conform with policy: Password must have lowercase characters": "La contraseña debe tener al menos un carácter en minúsculas",
  "Invalid verification code provided, please try again.": "Código de verificación no válido, inténtelo de nuevo.",
  "Attempt limit exceeded, please try after some time.": "Número máximo de intentos excedido, por favor inténtelo de nuevo más tarde.",
  "A network error has occurred.": "Se ha producido un error de red."
}, fl = {
  "Account recovery requires verified contact information": "La récupération du compte nécessite des informations de contact vérifiées",
  "Back to Sign In": "Retour à la connexion",
  "Change Password": "Modifier le mot de passe",
  Changing: "Modification en cours",
  Code: "Code",
  "Confirm Password": "Confirmez le mot de passe",
  "Confirm Sign Up": "Confirmer l'inscription",
  "Confirm SMS Code": "Confirmer le code SMS",
  "Confirm TOTP Code": "Confirmer le code TOTP",
  Confirm: "Confirmer",
  "Confirmation Code": "Code de confirmation",
  Confirming: "Confirmation",
  "Create a new account": "Créer un nouveau compte",
  "Create Account": "Créer un compte",
  "Creating Account": "Création d'un compte",
  "Dismiss alert": "Supprimer l'alerte",
  Email: "Email",
  "Enter your code": "Saisissez cotre code de confirmation",
  "Enter your Email": "Saisissez votre adresse e-mail",
  "Enter your email": "Saisissez votre adresse e-mail",
  "Enter your phone number": "Saisissez votre numéro de téléphone",
  "Enter your username": "Saisissez votre nom d'utilisateur",
  "Forgot your password?": "Mot de passe oublié ? ",
  "Hide password": "Masquer le mot de passe",
  "It may take a minute to arrive": "Cela peut prendre une minute",
  Loading: "Chargement en cours",
  "New password": "Nouveau mot de passe",
  or: "ou",
  Password: "Mot de passe",
  "Phone Number": "Numéro de téléphone",
  "Resend Code": "Renvoyer le code",
  "Reset your Password": "Réinitialiser votre mot de passe",
  "Reset your password": "Réinitialisez votre mot de passe",
  "Send code": "Envoyer le code",
  "Send Code": "M'envoyer un code",
  Sending: "Envoi en cours",
  "Setup TOTP": "Configuration de TOTP",
  "Show password": "Afficher le mot de passe",
  "Sign in to your account": "Connexion à votre compte",
  "Sign In with Amazon": "Se connecter avec Amazon",
  "Sign In with Apple": "Se connecter avec Apple",
  "Sign In with Facebook": "Se connecter avec Facebook",
  "Sign In with Google": "Se connecter avec Google",
  "Sign in": "Se connecter",
  "Sign In": "Se connecter",
  "Signing in": "Connexion en cours",
  Skip: "Passer",
  Submit: "Soumettre",
  Submitting: "Envoi en cours",
  Username: "Nom d'utilisateur",
  "Verify Contact": "Vérifier le contact",
  Verify: "Vérifier",
  "We Sent A Code": "Nous avons envoyé un code",
  "We Texted You": "Nous vous avons envoyé un SMS",
  "Your code is on the way. To log in, enter the code we sent you": "Votre code est en cours d'envoi. Pour vous connecter, saisissez le code que nous vous avons envoyé",
  // Additional translations provided by customers
  "Add your Profile": "Ajoutez votre profil",
  "Add your Website": "Ajoutez votre site web",
  "An account with the given email already exists.": "Un utilisateur avec cette adresse email existe déjà.",
  Birthdate: "Date de naissance",
  Change: "Modifier",
  "Confirm a Code": "Confirmer un code",
  "Confirm Sign In": "Confirmer la connexion",
  "Create account": "Créer un compte",
  "Enter your Birthdate": "Saisissez votre date de naissance",
  "Enter your Confirmation Code": "Saisissez votre code de confirmation",
  "Enter your Family Name": "Saisissez votre nom de famille",
  "Enter your Given Name": "Saisissez votre prénom",
  "Enter your Middle Name": "Saisissez votre deuxième prénom",
  "Enter your Name": "Saisissez votre nom",
  "Enter your Nickname": "Saisissez votre surnom",
  "Enter your Password": "Saisissez votre mot de passe",
  "Enter your Phone Number": "Saisissez votre numéro de téléphone",
  "Enter your Preferred Username": "Saisissez votre nom d'utilisateur",
  "Enter your password": "Saisissez votre mot de passe",
  "Given Name": "Prénom",
  "Family Name": "Nom de famille",
  "Forgot Password": "Mot de passe oublié",
  "Forgot Password?": "Mot de passe oublié ?",
  "Incorrect username or password.": "Identifiant ou mot de passe incorrect.",
  "Have an account? ": "Déjà un compte ? ",
  Hello: "Bonjour",
  "Incorrect username or password": "Identifiant ou mot de passe incorrect",
  "Invalid password format": "Format de mot de passe invalide",
  "Invalid phone number format": "Format de numéro de téléphone invalide. Veuillez utiliser un format +12345678900",
  "Loading...": "Chargement...",
  "Lost your code? ": "Vous avez perdu votre code ? ",
  "Network error": "Erreur réseau",
  "New Password": "Nouveau mot de passe",
  Name: "Nom",
  "No account? ": "Pas de compte ? ",
  "Please confirm your Password": "Confirmez votre mot de passe",
  "Preferred Username": "Nom d'utilisateur préféré",
  Profile: "Profil",
  "Resend a Code": "Renvoyer un code",
  "Reset password": "Réinitialiser le mot de passe",
  "Reset Password": "Réinitialiser le mot de passe",
  Send: "Envoyer",
  "Sign In with AWS": "Se connecter avec AWS",
  "Sign Out": "Déconnexion",
  "Sign Up": "S'inscrire",
  SMS: "SMS",
  "User already exists": "L'utilisateur existe déjà",
  "User does not exist": "L'utilisateur n'existe pas",
  "Username cannot be empty": "Le nom d'utilisateur doit être renseigné",
  "Username/client id combination not found.": "L'utilisateur n'existe pas",
  "We Emailed You": "Nous vous avons envoyé un code",
  "Your code is on the way. To log in, enter the code we emailed to": "Votre code est en route. Pour vous connecter entrez le code reçu sur cette adresse email",
  "Your code is on the way. To log in, enter the code we texted to": "Votre code est en route. Pour vous connecter entrez le code reçu sur ce numéro de téléphone",
  "Your passwords must match": "Vos mots de passe doivent être identiques",
  "It may take a minute to arrive.": "Cela peut prendre quelques minutes.",
  Website: "Site web",
  "Password must have at least 8 characters": "Le mot de passe doit comporter au moins 8 caractères",
  "Password did not conform with policy: Password must have uppercase characters": "Le mot de passe doit comporter des caractères majuscules",
  "Password did not conform with policy: Password must have numeric characters": "Le mot de passe doit comporter des caractères numériques",
  "Password did not conform with policy: Password must have symbol characters": "Le mot de passe doit comporter des symboles",
  "Password did not conform with policy: Password must have lowercase characters": "Le mot de passe doit comporter des caractères minuscules",
  "Invalid verification code provided, please try again.": "Code de vérification invalide, veuillez réessayer.",
  "Attempt limit exceeded, please try after some time.": "Nombre maximum de tentatives dépassé, veuillez réessayer plus tard.",
  "A network error has occurred.": "Une erreur de réseau s'est produite."
}, pl = {
  "Account recovery requires verified contact information": "Il ripristino dell'account richiede informazioni di contatto verificate",
  "Back to Sign In": "Torna alla schermata di accesso",
  "Change Password": "Cambia la password",
  Changing: "Modifica in corso",
  Code: "Codice",
  "Confirm Password": "Conferma la password",
  "Confirm Sign Up": "Conferma registrazione",
  "Confirm SMS Code": "Conferma codice SMS",
  "Confirm TOTP Code": "Conferma codice TOTP",
  Confirm: "Conferma",
  "Confirmation Code": "Codice di verifica",
  Confirming: "Conferma in corso",
  "Create a new account": "Crea un nuovo account",
  "Create Account": "Crea Account",
  "Creating Account": "Creazione account in corso",
  "Dismiss alert": "Ignora l'avviso",
  Email: "Email",
  "Enter your code": "Inserisci il tuo codice",
  "Enter your Email": "Inserisci la tua e-mail",
  "Enter your phone number": 'Inserisci il tuo numero di telefono"',
  "Enter your username": "Inserisci il tuo nome utente",
  "Forgot your password?": "Password dimenticata?",
  "Hide password": "Nascondi password",
  "It may take a minute to arrive": "L'arrivo potrebbe richiedere qualche minuto",
  Loading: "Caricamento in corso",
  "New password": "Nuova password",
  or: "oppure",
  Password: "Password",
  "Phone Number": "Numero di telefono",
  "Resend Code": "Invia nuovamente il codice",
  "Reset your Password": "Reimposta la tua Password",
  "Reset your password": "Reimposta la tua password",
  "Send code": "Invia codice",
  "Send Code": "Invia codice",
  Sending: "Invio in corso",
  "Setup TOTP": "Configura TOTP",
  "Show password": "Mostra password",
  "Sign in to your account": "Accedi al tuo account",
  "Sign In with Amazon": "Accedi con Amazon",
  "Sign In with Apple": "Accedi con Apple",
  "Sign In with Facebook": "Accedi con Facebook",
  "Sign In with Google": "Accedi con Google",
  "Sign in": "Accedi",
  "Sign In": "Accedi",
  "Signing in": "Accesso in corso",
  Skip: "Salta",
  Submit: "Invia",
  Submitting: "Invio in corso",
  Username: "Nome utente",
  "Verify Contact": "Verifica contatto",
  Verify: "Verifica",
  "We Emailed You": "Ti abbiamo inviato un'e-mail",
  "We Sent A Code": "Ti abbiamo inviato un codice",
  "We Texted You": "Ti abbiamo inviato un SMS",
  "Your code is on the way. To log in, enter the code we emailed to": "Il codice è in arrivo. Per effettuare l'accesso, immetti il codice che ti abbiamo inviato via e-mail",
  "Your code is on the way. To log in, enter the code we sent you": "Il codice è in arrivo. Per accedere, immetti il codice che ti abbiamo inviato",
  "Your code is on the way. To log in, enter the code we texted to": "Il codice è in arrivo. Per accedere, immetti il codice che abbiamo inviato tramite SMS",
  // Additional translations provided by customers
  "An account with the given email already exists.": "Questa email è già utilizzata da un altro account.",
  "Confirm a Code": "Conferma un codice",
  "Confirm Sign In": "Conferma l'accesso",
  "Create account": "Crea account",
  "Enter your password": "Inserisci la tua password",
  "Forgot Password?": "Password dimenticata?",
  "Have an account? ": "Già registrato?",
  "Incorrect username or password": "Nome utente o password errati",
  "Invalid password format": "Formato della password non valido",
  "Invalid phone number format": "Formato del numero di telefono non valido",
  "Lost your code?": "Codice smarrito?",
  "New Password": "Nuova password",
  "No account? ": "Non hai un account?",
  "Password attempts exceeded": "Il numero massimo di tentativi di accesso falliti è stato raggiunto",
  "Reset password": "Reimposta password",
  "Sign Out": "Esci",
  "Sign Up": "Registrati",
  "User already exists": "Utente già esistente",
  "User does not exist": "Utente inesistente",
  "Username cannot be empty": "Il nome utente non può essere vuoto"
}, ml = {
  "Account recovery requires verified contact information": "アカウントの復旧には確認済みの連絡先が必要です",
  "Back to Sign In": "サインインに戻る",
  "Change Password": "パスワードを変える ",
  Changing: "変更中",
  Code: "コード",
  "Confirm Password": "パスワードの確認",
  "Confirm Sign Up": "登録する",
  "Confirm SMS Code": "SMS コードを確認",
  "Confirm TOTP Code": "TOTP コードを確認",
  Confirm: "確定",
  "Confirmation Code": "確認コード",
  Confirming: "確認中",
  "Create a new account": "新しいアカウントを作る",
  "Create Account": "アカウントを作る",
  "Creating Account": "アカウントの作成中",
  "Dismiss alert": "アラートを閉じる",
  Email: "メールアドレス",
  "Enter your code": "コードを入力",
  "Enter your Email": "メールアドレスを入力",
  "Enter your phone number": "電話番号を入力",
  "Enter your username": "ユーザー名を入力 ",
  "Enter your Username": "ユーザー名を入力 ",
  "Forgot your password?": "パスワードを忘れましたか？ ",
  "Hide password": "パスワードを非表示",
  "It may take a minute to arrive": "到着するまでに 1 分かかることがあります",
  Loading: "ロード中",
  "New password": "新しいパスワード",
  or: "又は",
  Password: "パスワード ",
  "Phone Number": "電話番号",
  "Resend Code": "コードを再送信",
  "Reset your Password": "パスワードをリセット",
  "Reset your password": "パスワードをリセットする",
  "Send code": "コードを送信",
  "Send Code": "コードを送信",
  Sending: "送信中",
  "Setup TOTP": "TOTP をセットアップ",
  "Show password": "パスワードを表示",
  "Sign in to your account": "アカウントにサインイン ",
  "Sign In with Amazon": "Amazonでサインイン",
  "Sign In with Apple": "Apple でサインイン",
  "Sign In with Facebook": "Facebookでサインイン",
  "Sign In with Google": "Googleでサインイン",
  "Sign In": "サインイン ",
  "Sign in": "サインイン",
  "Signing in": "サインイン中",
  Skip: "スキップ",
  Submit: "送信",
  Submitting: "送信中",
  Username: "ユーザー名 ",
  "Verify Contact": "連絡先を確認",
  Verify: "確認",
  "We Sent A Code": "コードが送信されました",
  "We Texted You": "テキストが送信されました",
  "Your code is on the way. To log in, enter the code we sent you": "コードが途中です。ログインするには、送信したコードを入力してください",
  // Additional translations provided by customers
  "An account with the given email already exists.": "入力されたメールアドレスのアカウントが既に存在します",
  "Confirm a Code": "コードを確認",
  "Confirm Sign In": "サインインする",
  "Create account": "アカウントを作る ",
  "Enter your password": "パスワードを入力 ",
  "Enter your Password": "パスワードを入力",
  "Please confirm your Password": "パスワードを入力",
  "Forgot Password": "パスワードを忘れた ",
  "Have an account? ": "アカウントを持っていますか？",
  "Incorrect username or password": "ユーザー名かパスワードが異なります ",
  "Invalid password format": "パスワードの形式が無効です ",
  "Invalid phone number format": `不正な電話番号の形式です。
+12345678900 の形式で入力してください`,
  "It may take a minute to arrive.": "コードを受信するまで数分かかる場合があります。",
  "Lost your code? ": "コードを失くしましたか？",
  "New Password": "新しいパスワード",
  "No account? ": "アカウントが無いとき ",
  "Password attempts exceeded": "サインインの試行回数が上限に達しました",
  "Reset password": "パスワードをリセット ",
  "Reset Password": "パスワードをリセット",
  "Sign Out": "サインアウト ",
  "Sign Up": "登録 ",
  "User already exists": "既にユーザーが存在しています ",
  "User does not exist": "ユーザーが存在しません ",
  "Username cannot be empty": "ユーザー名は入力必須です",
  "We Emailed You": "コードを送信しました",
  "Your code is on the way. To log in, enter the code we emailed to": "ログインするには、メールに記載されたコードを入力してください。送信先:",
  "Your code is on the way. To log in, enter the code we texted to": "ログインするには、テキストメッセージに記載されたコードを入力してください。送信先:"
}, gl = {
  "Account recovery requires verified contact information": "계정 복구를 위해 연락처 확인이 필요합니다",
  "Back to Sign In": "로그인으로 돌아가기",
  "Change Password": "비밀번호 변경하기",
  Changing: "변경중",
  Code: "코드",
  "Confirm Password": "비밀번호 재확인",
  "Confirm Sign Up": "회원가입 확인",
  "Confirm SMS Code": "휴대폰 본인 확인",
  "Confirm TOTP Code": "TOTP 인증번호 확인",
  Confirm: "확인",
  "Confirmation Code": "인증번호",
  Confirming: "확인중",
  "Create a new account": "회원가입",
  "Create Account": "회원가입",
  "Creating Account": "회원가입중",
  "Dismiss alert": "알림 무시",
  Email: "이메일",
  "Enter your Birthdate": "생년월일 입력",
  "Enter your code": "인증번호를 입력해주세요",
  "Enter your Confirmation Code": "확인 코드 입력",
  "Enter your Email": "이메일 입력",
  "Enter your Family Name": "성 입력",
  "Enter your Given Name": "사용장 이름 입력",
  "Enter your Name": "이름 입력",
  "Enter your Nickname": "닉네임 입력",
  "Enter your Password": "비밀번호 입력",
  "Enter your phone number": "전화번호 입력",
  "Enter your Preferred Username": "선호하는 아이디 입력",
  "Enter your username": "아이디를 입력해주세요",
  "Forgot password?": "비밀번호를 잊으셨나요?",
  "Hide password": "비밀번호 숨기기",
  "It may take a minute to arrive": "도착하는 데 1분 정도 걸릴 수 있습니다",
  Loading: "로딩중",
  "New password": "새 비밀번호",
  or: "또는",
  Password: "비밀번호",
  "Phone Number": "전화번호",
  "Please confirm your Password": "비밀번호를 확인해 주세요.",
  "Resend Code": "인증번호 재전송",
  "Reset your password": "비밀번호 재설정",
  "Reset your Password": "비밀번호 재설정",
  "Send code": "인증코드 보내기",
  "Send Code": "코드 전송",
  Sending: "전송중",
  "Setup TOTP": "TOTP 설정하기",
  "Show password": "비밀번호 보이기",
  "Sign in to your account": "로그인",
  "Sign In with Amazon": "Amazon 로그인",
  "Sign In with Apple": "Apple 로그인",
  "Sign In with Facebook": "Facebook 로그인",
  "Sign In with Google": "Google 로그인",
  "Sign in": "로그인",
  "Sign In": "로그인",
  "Signing in": "로그인중",
  Skip: "다음에 하기",
  Submit: "확인",
  Submitting: "확인중",
  Username: "아이디",
  "Verify Contact": "연락처 확인",
  Verify: "인증",
  "We Emailed You": "이메일을 보냄",
  "We Sent A Code": "코드를 보냄",
  "We Texted You": "문자 메시지를 보냄",
  "Your code is on the way. To log in, enter the code we emailed to": "코드가 전송 중입니다. 로그인하려면 이메일로 전송한 코드를 입력하세요",
  "Your code is on the way. To log in, enter the code we sent you": "코드가 전송 중입니다. 로그인하려면 전송한 코드를 입력하세요",
  "Your code is on the way. To log in, enter the code we texted to": "코드가 전송 중입니다. 로그인하려면 문자 메시지로 전송한 코드를 입력하세요",
  // Additional translations provided by customers
  Birthdate: "생년월일",
  "Family Name": "성",
  "Forgot your password?": "비밀번호를 잊으셨나요?",
  "Given Name": "이름",
  Name: "성함",
  Nickname: "닉네임",
  "Preferred Username": "닉네임",
  Profile: "프로필",
  "Reset Password": "비밀번호 재설정",
  Website: "웹사이트"
}, hl = {
  "Account recovery requires verified contact information": "Gjenoppretting av konto krever verifisert kontaktinformajson",
  "Add your Profile": "Legg til profilen din",
  "Add your Website": "Legg til nettsiden din",
  "Back to Sign In": "Tilbake til innlogging",
  "Change Password": "Bytt passord",
  Changing: "Endre",
  Code: "Kode",
  "Confirm Password": "Bekreft passordet",
  "Confirm Sign Up": "Bekreft registrering",
  "Confirm SMS Code": "Bekreft SMS-kode",
  "Confirm TOTP Code": "Bekreft TOTP-kode",
  Confirm: "Bekreft",
  "Confirmation Code": "Bekreftelseskode",
  Confirming: "Bekrefter",
  "Create a new account": "Opprett en ny konto",
  "Create Account": "Opprett konto",
  "Creating Account": "Oppretter konto",
  "Dismiss alert": "Avvis varsel",
  Email: "E-post",
  "Enter your Birthdate": "Skriv inn fødselsdatoen din",
  "Enter your code": "Skriv inn koden din",
  "Enter your Confirmation Code": "Skriv inn bekreftelseskoden din",
  "Enter your Email": "Skriv inn e-postadressen din",
  "Enter your Family Name": "Skriv inn etternavnet ditt",
  "Enter your Given Name": "Skriv inn fornavnet ditt",
  "Enter your Middle Name": "Skriv inn mellomnavnet ditt",
  "Enter your Name": "Skriv inn navnet ditt",
  "Enter your Nickname": "Skriv inn kallenavnet ditt",
  "Enter your Password": "Skriv inn passordet ditt",
  "Enter your phone number": "Skriv inn telefonnummeret ditt",
  "Enter your Preferred Username": "Skriv inn det foretrukne brukernavnet ditt",
  "Enter your username": "Skriv inn brukernavnet ditt",
  "Forgot password?": "Glemt passord?",
  "Forgot your password?": "Glemt passordet ditt?",
  "Hide password": "Skjul passordet",
  "It may take a minute to arrive": "Det kan ta et minutt for å komme frem",
  Loading: "Laster inn",
  "New password": "Nytt passord",
  or: "eller",
  Password: "Passord",
  "Phone Number": "Telefonnummer",
  "Please confirm your Password": "Vennligst bekreft passordet ditt",
  "Resend Code": "Send koden på nytt",
  "Reset your password": "Nullstill passordet ditt",
  "Reset your Password": "Nullstill passordet ditt",
  "Send code": "Send kode",
  "Send Code": "Send kode",
  Sending: "Sender",
  "Setup TOTP": "Konfigurer TOTP",
  "Show password": "Vis passordet",
  "Sign in to your account": "Logg inn på kontoen din",
  "Sign In with Amazon": "Logg inn med Amazon",
  "Sign In with Apple": "Logg inn med Apple",
  "Sign In with Facebook": "Logg inn med Facebook",
  "Sign In with Google": "Logg inn med Google",
  "Sign in": "Logg inn",
  "Sign In": "Logg inn",
  "Signing in": "Logger inn",
  Skip: "Hopp over",
  Submit: "Send inn",
  Submitting: "Sender inn",
  Username: "Brukernavn",
  "Verify Contact": "Bekreft kontakt",
  Verify: "Bekreft",
  "We Emailed You": "Vi sendte deg en e-post",
  "We Sent A Code": "Vi sendte en kode",
  "We Texted You": "Vi sendte deg en tekstmelding",
  "Your code is on the way. To log in, enter the code we emailed to": "Koden din er på vei. For å logge inn, skriv inn koden vi sendte e-post til",
  "Your code is on the way. To log in, enter the code we sent you": "Koden din er på vei. For å logge inn, skriv inn koden vi sendte deg",
  "Your code is on the way. To log in, enter the code we texted to": "Koden din er på vei. For å logge inn, skriv inn koden vi sendte tekstmelding til",
  // Additional translations provided by customers
  "An account with the given email already exists.": "Det finnes allerede en konto med denne e-postadressen",
  "Confirm a Code": "Bekreft koden",
  "Confirm Sign In": "Bekreft innlogging",
  "Create account": "Opprett konto",
  "Enter your password": "Skriv inn passordet ditt",
  "Forgot Password": "Glemt passordet",
  "Have an account? ": "Har en konto allerede? ",
  "Incorrect username or password": "Feil brukernavn eller passord",
  "Invalid password format": "Ugyldig passordformat",
  "Invalid phone number format": "Ugyldig telefonnummerformat",
  "Lost your code? ": "Mistet koden? ",
  "New Password": "Nytt passord",
  "No account? ": "Ingen konto? ",
  "Password attempts exceeded": "For mange mislykkede passordforsøk",
  "Reset password": "Nullstill passord",
  "Sign Out": "Logg ut",
  "Sign Up": "Registrering",
  "User already exists": "Brukeren finnes allerede",
  "User does not exist": "Brukeren finnes ikke",
  "Username cannot be empty": "Brukernavnet kan ikke være tomt"
}, yl = {
  "Account recovery requires verified contact information": "Accountherstel vereist geverifieerde contactgegevens",
  "Back to Sign In": "Terug naar inloggen",
  "Change Password": "Wachtwoord wijzigen",
  Changing: "Wordt aangepast",
  Code: "Code",
  "Confirm Password": "Bevestig Wachtwoord",
  "Confirm Sign Up": "Bevestig inschrijving",
  "Confirm SMS Code": "Bevestig SMS Code",
  "Confirm TOTP Code": "Bevestig TOTP Code",
  Confirm: "Bevestig",
  "Confirmation Code": "Bevestigingscode",
  Confirming: "Bevestigen",
  "Create a new account": "Nieuw account aanmaken",
  "Create Account": "Account aanmaken",
  "Creating Account": "Account wordt aangemaakt",
  "Dismiss alert": "Waarschuwing sluiten",
  Email: "E-mail",
  "Enter your code": "Vul je code in",
  "Enter your Email": "Vul je e-mail in",
  "Enter your Password": "Vul je wachtwoord in",
  "Enter your phone number": "Vul je telefoonnummer in",
  "Enter your username": "Vul je gebruikersnaam in",
  "Enter your Username": "Vul je gebruikersnaam in",
  "Forgot your password?": "Wachtwoord vergeten? ",
  "Hide password": "Verberg wachtwoord",
  "It may take a minute to arrive": "Het kan even duren voordat deze aankomt",
  Loading: "Laden",
  "New password": "Nieuw wachtwoord",
  "New Password": "Nieuw Wachtwoord",
  or: "of",
  Password: "Wachtwoord",
  "Phone Number": "Telefoonnummer",
  "Please confirm your Password": "Bevestig je wachtwoord",
  "Resend Code": "Verstuur code nogmaals",
  "Reset Password": "Wachtwoord resetten",
  "Reset your password": "Reset je wachtwoord",
  "Reset your Password": "Wachtwoord resetten",
  "Send code": "Verstuur code",
  "Send Code": "Verstuur Code",
  Sending: "Versturen",
  "Setup TOTP": "TOTP Instellingen",
  "Show password": "Toon wachtwoord",
  "Sign in to your account": "Inloggen op je account",
  "Sign In with Amazon": "Inloggen met Amazon",
  "Sign In with Apple": "Inloggen met Apple",
  "Sign In with Facebook": "Inloggen met Facebook",
  "Sign In with Google": "Inloggen met Google",
  "Sign in": "Inloggen",
  "Sign In": "Inloggen",
  "Signing in": "Inloggen",
  Skip: "Overslaan",
  Submit: "Versturen",
  Submitting: "Wordt verstuurd",
  Username: "Gebruikersnaam",
  "Verify Contact": "Verifieer Contact",
  Verify: "Verifieer",
  "We Emailed You": "We hebben u een e-mail gestuurd",
  "We Sent A Code": "We hebben een code gestuurd",
  "We Texted You": "We hebben u een sms gestuurd",
  "Your code is on the way. To log in, enter the code we emailed to": "Uw code is onderweg. Om in te loggen, voer de code in die we gemaild hebben naar",
  "Your code is on the way. To log in, enter the code we sent you": "Uw code is onderweg. Om in te loggen, voer de code in die we u hebben gestuurd",
  "Your code is on the way. To log in, enter the code we texted to": "Uw code is onderweg. Om in te loggen, voer de code in die we hebben gestuurd naar",
  "Your passwords must match": "Je wachtwoorden moeten overeenkomen"
}, vl = {
  "Account recovery requires verified contact information": "Odzyskanie konta wymaga zweryfikowanych danych kontaktowych",
  "Back to Sign In": "Powrót do logowania",
  "Change Password": "Zmień hasło",
  Changing: "Zmienianie",
  Code: "Kod",
  "Confirm Password": "Potwierdź Hasło",
  "Confirm Sign Up": "Potwierdź rejestrację",
  "Confirm SMS Code": "Potwierdź kod SMS",
  "Confirm TOTP Code": "Potwierdź hasło jednorazowe",
  Confirm: "Potwierdź",
  "Confirmation Code": "Kod potwierdzenia",
  Confirming: "Potwierdzanie",
  "Create a new account": "Utwórz nowe konto",
  "Create Account": "Utwórz konto",
  "Creating Account": "Tworzenie konta",
  "Dismiss alert": "Odrzuć alert",
  Email: "E-mail",
  "Enter your code": "Wprowadź swój kod",
  "Enter your Email": "Wpisz swój adres e-mail",
  "Enter your phone number": "Wpisz swój numer telefonu",
  "Enter your username": "Wprowadź swoją nazwę użytkownika",
  "Forgot your password?": "Zapomniałeś hasła? ",
  "Hide password": "Ukryj hasło",
  "It may take a minute to arrive": "Może to chwilę potrwać",
  Loading: "Ładowanie",
  "New password": "Nowe hasło",
  or: "albo",
  Password: "Hasło",
  "Phone Number": "Numer telefonu",
  "Resend Code": "Wyślij kod ponownie",
  "Reset your password": "Zresetuj swoje hasło",
  "Reset your Password": "Zresetuj swoje hasło",
  "Send code": "Wyślij kod",
  "Send Code": "Zresetuj hasło",
  Sending: "Wysyłanie",
  "Setup TOTP": "Konfiguruj TOTP",
  "Show password": "Pokaż hasło",
  "Sign in to your account": "Zaloguj się na swoje konto",
  "Sign In with Amazon": "Zaloguj z Amazon",
  "Sign In with Apple": "Zaloguj z Apple",
  "Sign In with Facebook": "Zaloguj z Facebook",
  "Sign In with Google": "Zaloguj z Google",
  "Sign In": "Logowanie",
  "Sign in": "Zaloguj",
  "Signing in": "Logowanie",
  Skip: "Pomiń",
  Submit: "Wyślij",
  Submitting: "Wysyłanie",
  Username: "Nazwa użytkownika",
  "Verify Contact": "Weryfikacja danych kontaktowych",
  Verify: "Zweryfikuj",
  // Additional translations provided by customers
  Birthdate: "Data urodzenia",
  "Family Name": "Nazwisko",
  "Given Name": "Pierwsze imię",
  "Middle Name": "Drugie imię",
  Name: "Imię i nazwisko",
  Nickname: "Pseudonim",
  "Preferred Username": "Preferowana nazwa użytkownika",
  Profile: "Profil",
  Website: "Strona internetowa",
  "We Emailed You": "Wysłaliśmy Ci wiadomość e-mail",
  "We Sent A Code": "Wysłaliśmy kod",
  "We Texted You": "Wysłaliśmy Ci wiadomość SMS",
  "Your code is on the way. To log in, enter the code we emailed to": "Twój kod został wysłany. Aby się zalogować, wprowadź kod wysłany na adres e-mail",
  "Your code is on the way. To log in, enter the code we sent you": "Twój kod został wysłany. Aby się zalogować, wprowadź wysłany do Ciebie kod",
  "Your code is on the way. To log in, enter the code we texted to": "Twój kod został wysłany. Aby się zalogować, wprowadź kod wysłany do Ciebie w wiadomości SMS pod numer"
}, _l = {
  "Account recovery requires verified contact information": "A recuperação da conta requer informações de contato verificadas",
  "Add your Profile": "Adicione seu Perfil",
  "Add your Website": "Adicione seu Website",
  "Back to Sign In": "Voltar para Entrar",
  "Change Password": "Mudar senha",
  Changing: "Mudando",
  Code: "Código",
  "Confirm Password": "Confirme a Senha",
  "Confirm Sign Up": "Confirmar inscrição",
  "Confirm SMS Code": "Confirme o código SMS",
  "Confirm MFA Code": "Confirme o código MFA",
  "Confirm TOTP Code": "Confirme o código TOTP",
  Confirm: "confirme",
  "Confirmation Code": "Código de confirmação",
  Confirming: "Confirmando",
  "Create a new account": "Criar uma nova conta",
  "Create Account": "Criar Conta",
  "Creating Account": "Criando conta",
  "Dismiss alert": "Descartar alerta",
  Email: "O email",
  "Enter your Birthdate": "Digite sua Data de Nascimento",
  "Enter your code": "Insira seu código",
  "Enter your Confirmation Code": "Digite seu código de confirmação",
  "Enter your Email": "Digite seu e-mail",
  "Enter your Family Name": "Digite seu Sobrenome",
  "Enter your Given Name": "Digite seu Primeiro Nome",
  "Enter your Middle Name": "Digite seu Nome do Meio",
  "Enter your Name": "Digite seu Nome",
  "Enter your Nickname": "Digite seu Apelido",
  "Enter your Password": "Digite sua senha",
  "Enter your phone number": "Digite seu número de telefone",
  "Enter your Preferred Username": "Digite seu nome de usuário preferido",
  "Enter your username": "Digite seu nome de usuário",
  "Forgot password?": "Esqueceu a senha?",
  "Forgot your password?": "Esqueceu sua senha?",
  "Hide password": "Esconder a senha",
  "It may take a minute to arrive": "Pode levar um minuto para chegar",
  Loading: "Carregando",
  "New password": "Nova Senha",
  or: "ou",
  Password: "Senha",
  "Phone Number": "Número de telefone",
  "Please confirm your Password": "Por favor confirme sua Senha",
  "Resend Code": "Reenviar código",
  "Reset your password": "Redefina sua senha",
  "Reset your Password": "Redefina sua senha",
  "Send code": "Enviar código",
  "Send Code": "Enviar código",
  Sending: "Enviando",
  "Setup TOTP": "Configurar TOTP",
  "Show password": "Mostrar senha",
  "Sign in to your account": "Faça login em sua conta",
  "Sign In with Amazon": "Entrar com a Amazon",
  "Sign In with Apple": "Entrar com a Apple",
  "Sign In with Facebook": "Entrar com o Facebook",
  "Sign In with Google": "Faça login no Google",
  "Sign in": "Entrar",
  "Sign In": "Entrar",
  "Signing in": "Entrando",
  Skip: "Pular",
  Submit: "Enviar",
  Submitting: "Enviando",
  Username: "Nome do usuário",
  "Verify Contact": "Verificar contato",
  Verify: "Verificar",
  "We Emailed You": "Enviamos um e-mail para você",
  "We Sent A Code": "Enviamos um código",
  "We Texted You": "Enviamos um SMS para você",
  "Your code is on the way. To log in, enter the code we emailed to": "Seu código está a caminho. Para fazer login, insira o código para o qual enviamos um e-mail",
  "Your code is on the way. To log in, enter the code we sent you": "Seu código está a caminho. Para fazer login, insira o código que enviamos para você",
  "Your code is on the way. To log in, enter the code we texted to": "Seu código está a caminho. Para fazer login, insira o código para o qual enviamos uma mensagem de texto",
  // Additional translations provided by customers
  "An account with the given email already exists.": "Já existe uma conta com o email utilizado.",
  "Confirm a Code": "Confirmar um Código",
  "Confirm Sign In": "Confirmar Início de Sessão",
  "Forgot Password": "Esqueci Minha Senha",
  "Incorrect username or password.": "Nome de usuário ou senha incorreta",
  "Invalid password format": "Formato de senha inválido",
  "Invalid phone number format": "Formato de número de telefone inválido",
  "Loading...": "Carregando...",
  "New Password": "Nova Senha",
  "Resend a Code": "Reenviar um Código",
  "Sign Out": "Sair",
  "Sign Up with Amazon": "Criar Conta com a Amazon",
  "Sign Up with Apple": "Criar Conta com a Apple",
  "Sign Up with Facebook": "Criar Conta com o Facebook",
  "Sign Up with Google": "Criar Conta com o Google",
  "Sign Up": "Criar Conta",
  "User already exists": "Usuário já existe",
  "User does not exist": "Usuário não existe",
  "Username cannot be empty": "Nome de usuário não pode estar vazio",
  "Your passwords must match": "Suas senhas devem ser iguais"
}, wl = {
  "Account recovery requires verified contact information": "账户恢复需要验证过的联系方式",
  "Back to Sign In": "回到登录",
  "Change Password": "更改密码",
  Changing: "正在修改",
  Code: "确认码",
  "Confirm Password": "确认密码",
  "Confirm Sign Up": "确认注册",
  "Confirm SMS Code": "确认短信验证码",
  "Confirm TOTP Code": "确认 TOTP 代码",
  Confirm: "确认",
  "Confirmation Code": "确认码",
  Confirming: "正在确认",
  "Create a new account": "创建新账户",
  "Create Account": "创建账户",
  "Creating Account": "正在创建账户",
  "Dismiss alert": "关闭警报",
  Email: "邮箱",
  "Enter your code": "输入验证码",
  "Enter your Email": "输入电子邮件",
  "Enter your phone number": "输入电话号码",
  "Enter your username": "输入用户名",
  "Forgot your password?": "忘记密码了？",
  "Hide password": "隐藏密码",
  "It may take a minute to arrive": "可能需要一分钟才能到达",
  Loading: "正在加载",
  "New password": "新密码",
  or: "或者",
  Password: "密码",
  "Phone Number": "电话",
  "Resend Code": "重发验证码",
  "Reset your password": "重置密码",
  "Reset your Password": "重置密码",
  "Send Code": "发送确认码",
  "Send code": "发送验证码",
  Sending: "正在发送",
  "Setup TOTP": "设置 TOTP",
  "Show password": "显示密码",
  "Sign in to your account": "登录账户",
  "Sign In with Amazon": "通过 Amazon 登录",
  "Sign In with Apple": "通过 Apple 登录",
  "Sign In with Facebook": "通过 Facebook 登录",
  "Sign In with Google": "通过 Google 登录",
  "Sign in": "登录",
  "Sign In": "登录",
  "Signing in": "正在登录",
  Skip: "跳过",
  Submit: "提交",
  Submitting: "正在提交",
  Username: "用户名",
  "Verify Contact": "验证联系方式",
  Verify: "验证",
  "We Emailed You": "我们给您发送了电子邮件",
  "We Sent A Code": "我们发送了代码",
  "We Texted You": "我们给您发送了短信",
  "Your code is on the way. To log in, enter the code we emailed to": "您的代码正在发送中。要登录，请输入我们通过电子邮件发送给以下人员的代码：",
  "Your code is on the way. To log in, enter the code we sent you": "您的代码正在发送中。要登录，请输入我们发送给您的代码",
  "Your code is on the way. To log in, enter the code we texted to": "您的代码正在发送中。要登录，请输入我们通过短信发送给以下人员的代码：",
  // Additional translations provided by customers
  "Confirm a Code": "确认码",
  "Confirm Sign In": "确认登录",
  "Forgot Password": "忘记密码",
  "Incorrect username or password": "用户名或密码错误",
  "Invalid password format": "密码格式错误",
  "Invalid phone number format": "电话格式错误，请使用格式 +12345678900",
  "New Password": "新密码",
  "Resend a Code": "重发确认码",
  "Sign Out": "退出",
  "Sign Up": "注册",
  "User already exists": "用户已经存在",
  "User does not exist": "用户不存在"
}, Sl = {
  "Account recovery requires verified contact information": "För att återställa kontot behöver du ett verifierat konto",
  "Back to Sign In": "Tillbaka till inloggningen",
  "Change Password": "Byt lösenord",
  Changing: "Ändra",
  Code: "Kod",
  "Confirm Password": "Bekräfta lösenord",
  "Confirm Sign Up": "Bekräfta registrering",
  "Confirm SMS Code": "Bekräfta SMS-kod",
  "Confirm TOTP Code": "Bekräfta TOTP-kod",
  Confirm: "Bekräfta",
  "Confirmation Code": "Verifikationskod",
  Confirming: "Bekräftar",
  "Create a new account": "Skapa ett nytt konto",
  "Create Account": "Skapa konto",
  "Creating Account": "Skapar konto",
  "Dismiss alert": "Avvisa varning",
  Email: "E-post",
  "Enter your code": "Skriv din kod",
  "Enter your Email": "Fyll i din e-post",
  "Enter your phone number": "Ange ditt telefonnummer",
  "Enter your username": "Ange ditt användarnamn",
  "Forgot your password?": "Glömt ditt lösenord? ",
  "Hide password": "Dölj lösenord",
  "It may take a minute to arrive": "Det kan ta en minut att komma fram",
  Loading: "Laddar",
  "New password": "Nytt lösenord",
  or: "eller",
  Password: "Lösenord",
  "Phone Number": "Telefonnummer",
  "Resend Code": "Skicka koden igen",
  "Reset your password": "Återställ ditt lösenord",
  "Reset your Password": "Återställ ditt lösenord",
  "Send code": "Skicka kod",
  "Send Code": "Skicka kod",
  Sending: "Skickar",
  "Setup TOTP": "Konfigurera TOTP",
  "Show password": "Visa lösenord",
  "Sign in to your account": "Logga in till ditt konto",
  "Sign In with Amazon": "Logga in med Amazon",
  "Sign In with Apple": "Logga in med Apple",
  "Sign In with Facebook": "Logga in med Facebook",
  "Sign In with Google": "Logga in med Google",
  "Sign in": "Logga in",
  "Sign In": "Logga in",
  "Signing in": "Loggar in",
  Skip: "Hoppa över",
  Submit: "Skicka",
  Submitting: "Skickar in",
  Username: "Användarnamn",
  "Verify Contact": "Verifiera kontakt",
  Verify: "Verifiera",
  "We Sent A Code": "Vi skickade en kod",
  "We Texted You": "Vi sms:ade dig",
  "Your code is on the way. To log in, enter the code we emailed to": "Din kod är på väg. För att logga in, ange koden vi mejlade till",
  "Your code is on the way. To log in, enter the code we sent you": "Din kod är på väg. För att logga in, ange koden vi skickade till dig",
  "Your code is on the way. To log in, enter the code we texted to": "Din kod är på väg. För att logga in, ange koden vi sms:ade till",
  // Additional translations provided by customers
  "An account with the given email already exists.": "Det finns redan ett konto med denna e-postadress",
  "Confirm a Code": "Bekräfta koden",
  "Confirm Sign In": "Bekräfta inloggning",
  "Create account": "Skapa konto",
  "Enter your password": "Ange ditt lösenord",
  "Forgot Password": "Glömt lösenordet",
  "Have an account? ": "Redan registrerad? ",
  "Incorrect username or password": "Felaktigt användarnamn eller lösenord",
  "Invalid password format": "Ogiltigt lösenordsformat",
  "Invalid phone number format": "Ogiltigt format för telefonnummer",
  "Lost your code? ": "Förlorat koden? ",
  "New Password": "Nytt lösenord",
  "No account? ": "Inget konto? ",
  "Password attempts exceeded": "Maximalt antal felaktiga inloggningsförsök har uppnåtts",
  "Reset password": "Återställ lösenord",
  "Sign Out": "Logga ut",
  "Sign Up": "Registrering",
  "User already exists": "Användaren finns redan",
  "User does not exist": "Användaren finns inte",
  "Username cannot be empty": "Användarnamnet kan inte vara tomt",
  "We Emailed You": "Vi har skickat e-post till dig"
}, bl = {
  "Account recovery requires verified contact information": "Pemulihan akun memerlukan informasi kontak terverifikasi",
  "Back to Sign In": "Kembali ke Masuk",
  "Change Password": "Ubah kata sandi",
  Changing: "Mengubah",
  Code: "Kode",
  "Confirm Password": "Konfirmasi kata sandi",
  "Confirm Sign Up": "Konfirmasi Pendaftaran",
  "Confirm SMS Code": "Konfirmasi Kode SMS",
  "Confirm TOTP Code": "Konfirmasi Kode TOTP",
  Confirm: "Konfirmasi",
  "Confirmation Code": "Kode Konfirmasi",
  Confirming: "Mengkonfirmasi",
  "Create a new account": "Buat akun baru",
  "Create Account": "Buat Akun",
  "Creating Account": "Membuat Akun",
  "Dismiss alert": "Hentikan pemberitahuan",
  Email: "Email",
  "Enter your code": "Masukkan kode anda",
  "Enter your Email": "Masukkan email anda",
  "Enter your phone number": "Masukkan nomor telepon anda",
  "Enter your username": "Masukkan nama akun anda",
  "Forgot your password?": "Lupa kata sandi? ",
  "Hide password": "Sembunyikan kata sandi",
  "It may take a minute to arrive": "Mungkin perlu waktu satu menit untuk tiba",
  Loading: "Memuat",
  "New password": "Kata sandi baru",
  or: "atau",
  Password: "Kata sandi",
  "Phone Number": "Nomor telepon",
  "Resend Code": "Kirim ulang kodenya",
  "Reset your Password": "Reset Kata Sandi",
  "Reset your password": "Ubah kata sandi anda",
  "Send code": "Kirim kode",
  "Send Code": "Kirim Kode",
  Sending: "Mengirim",
  "Setup TOTP": "Siapkan TOTP",
  "Show password": "Tampilkan kata sandi",
  "Sign in to your account": "Masuk akun anda",
  "Sign In with Amazon": "Masuk dengan Amazon",
  "Sign In with Apple": "Masuk dengan Apple",
  "Sign In with Facebook": "Masuk dengan Facebook",
  "Sign In with Google": "Masuk dengan Google",
  "Sign in": "Masuk",
  "Sign In": "Masuk",
  "Signing in": "Memasuki",
  Skip: "Lewati",
  Submit: "Ajukan",
  Submitting: "Mengajukan",
  Username: "Nama akun",
  "Verify Contact": "Verifikasi Kontak",
  Verify: "Verifikasi",
  "We Sent A Code": "Kami Mengirim Kode",
  "We Texted You": "Kami mengirim SMS kepada Anda",
  "Your code is on the way. To log in, enter the code we sent you": "Kode Anda segera hadir. Untuk masuk, masukkan kode yang kami kirimkan kepada Anda",
  // Additional translations provided by customers
  "An account with the given email already exists.": "Akun dengan email tersebut sudah terdaftar.",
  "Attempt limit exceeded, please try after some time.": "Batas percobaan terlampaui, mohon coba lagi setelah beberapa waktu.",
  "Cannot reset password for the user as there is no registered/verified email or phone_number": "Tidak dapat mengatur ulang kata sandi karena tidak ada email terdaftar / terverifikasi atau nomor telepon",
  Change: "Ubah",
  "Confirm a Code": "Konfirmasi kode",
  "Create account": "Buat akun",
  "Enter your password": "Masukkan kata sandi anda",
  "Forgot Password": "Lupa kata sandi",
  "Have an account? ": "Sudah punya akun? ",
  Hello: "Halo",
  "Incorrect username or password.": "Nama akun atau kata sandi salah.",
  "Invalid phone number format": "Nomor telepon tidak sesuai dengan format.",
  "Invalid verification code provided, please try again.": "Kode verifikasi tidak sesuai, mohon coba lagi.",
  "It may take a minute to arrive.": "Mungkin perlu beberapa waktu untuk tiba.",
  "Lost your code? ": "Kode anda hilang?",
  Name: "Nama",
  "Network error": "Galat jaringan",
  "No account? ": "Tidak ada akun?",
  "Password did not conform with policy: Password not long enough": "Kata sandi tidak sesuai dengan aturan: Kata sandi kurang panjang",
  "Resend a Code": "Renvoyer un code",
  "Reset password": "Ubah kata sandi anda",
  Send: "Kirim",
  "Sign In with AWS": "Masuk dengan AWS",
  "Sign Up with Amazon": "Daftar dengan Amazon",
  "Sign Up with AWS": "Daftar dengan AWS",
  "Sign Up with Facebook": "Daftar dengan Facebook",
  "Sign Up with Google": "Daftar dengan Google",
  SMS: "SMS",
  "User already exists": "Akun sudah terdaftar",
  "User does not exist.": "Akun tidak terdaftar.",
  "User is disabled.": "Akun dinonaktifkan.",
  "Username cannot be empty": "Nama akun tidak boleh kosong",
  "Username/client id combination not found.": "Nama akun atau id tidak ditemukan.",
  "We Emailed You": "Kami mengirimkanmu email",
  "Your code is on the way. To log in, enter the code we emailed to": "Kode anda dalam pengiriman. Untuk masuk, masukkan kode yang kami emailkan ke",
  "Your code is on the way. To log in, enter the code we texted to": "Kode anda dalam pengiriman. Untuk masuk, masukkan kode yang kami tuliskan ke",
  "Your passwords must match": "Kata sandi harus sama"
}, Cl = {
  "Account recovery requires verified contact information": "Hesap kurtarma, doğrulanmış iletişim bilgilerini gerektirir",
  "Add your Profile": "Profilinizi ekleyin",
  "Add your Website": "Web sitenizi ekleyin",
  "Back to Sign In": "Oturum Açmaya Geri Dön",
  "Change Password": "Şifreyi Değiştir",
  Changing: "Değiştiriliyor",
  Code: "Kod",
  "Confirm Password": "Şifreyi Doğrula",
  "Confirm Sign Up": "Kayıt İşlemini Doğrula",
  "Confirm SMS Code": "SMS Kodunu Doğrula",
  "Confirm MFA Code": "Çoklu Faktörlü Doğrulama Kodunu Doğrula",
  "Confirm TOTP Code": "Tek Kullanımlık Şifreyi Doğrula",
  Confirm: "Doğrula",
  "Confirmation Code": "Doğrulama Kodu",
  Confirming: "Doğrulanıyor",
  "Create a new account": "Yeni bir hesap oluştur",
  "Create Account": "Hesap Oluştur",
  "Creating Account": "Hesap Oluşturuluyor",
  "Dismiss alert": "Uyarıyı reddet",
  Email: "E-posta",
  "Enter your Birthdate": "Doğum gününüzü girin",
  "Enter your code": "Kodu girin",
  "Enter your Confirmation Code": "Doğrulama Kodunuzu Girin",
  "Enter your Email": "E-posta adresinizi girin",
  "Enter your email": "E-posta adresinizi girin",
  "Enter your Family Name": "Ad Soyadınızı girin",
  "Enter your Given Name": "Adınızı girin",
  "Enter your Middle Name": "Soyadınızı girin",
  "Enter your Name": "Adınızı girin",
  "Enter your Nickname": "Takma adınızı girin",
  "Enter your Password": "Şifrenizi girin",
  "Enter your phone number": "Telefon numaranızı girin",
  "Enter your Preferred Username": "Tercih ettiğiniz kullanıcı adınızı girin",
  "Enter your username": "Kullanıcı adınızı girin",
  "Forgot Password?": "Şifrenizi Mi Unuttunuz?",
  "Forgot password?": "Şifrenizi mi unuttunuz?",
  "Forgot your password?": "Şifrenizi mi unuttunuz?",
  "Hide password": "Şifreyi gizle",
  "It may take a minute to arrive": "Kodun gelmesi bir dakika sürebilir",
  Loading: "Yükleniyor",
  "New password": "Yeni şifre",
  or: "veya",
  Password: "Şifre",
  "Phone Number": "Telefon Numarası",
  "Please confirm your Password": "Lütfen şifrenizi doğrulayın",
  "Resend Code": "Kodu Yeniden Gönder",
  "Reset your password": "Şifrenizi sıfırlayın",
  "Reset your Password": "Şifrenizi Sıfırlayın",
  "Reset Password": "Şifreyi Sıfırla",
  "Send code": "Kod gönder",
  "Send Code": "Kod Gönder",
  Sending: "Gönderiliyor",
  "Setup TOTP": "Tek kullanımlık şifre kurulumu yap",
  "Show password": "Şifreyi göster",
  "Sign in to your account": "Hesabınızda oturum açın",
  "Sign In with Amazon": "Amazon ile Oturum Aç",
  "Sign In with Apple": "Apple ile Oturum Aç",
  "Sign In with Facebook": "Facebook ile Oturum Aç",
  "Sign In with Google": "Google ile Oturum Aç",
  "Sign in": "Oturum aç",
  "Sign In": "Oturum Aç",
  "Sign Up with Facebook": "Facebook ile Kayıt Ol",
  "Sign Up with Google": "Google ile Kayıt Ol",
  "Signing in": "Oturum açılıyor",
  Skip: "Atla",
  Submit: "Gönder",
  Submitting: "Gönderiliyor",
  Username: "Kullanıcı adı",
  "Verify Contact": "Kişiyi Doğrula",
  Verify: "Doğrula",
  "We Emailed You": "Size E-posta Gönderdik",
  "We Sent A Code": "Bir Kod Gönderdik",
  "We Texted You": "Size Mesaj Gönderdik",
  "Your code is on the way. To log in, enter the code we emailed to": "Kodunuz yolda. Oturum açmak için, gönderdiğimiz e-postadaki kodu girin",
  "Your code is on the way. To log in, enter the code we sent you": "Kodunuz yolda. Oturum açmak için, size gönderdiğimiz kodu girin",
  "Your code is on the way. To log in, enter the code we texted to": "Kodunuz yolda. Oturum açmak için, gönderdiğimiz mesajdaki kodu girin",
  // Additional translations provided by customers
  "An account with the given email already exists.": "Bu e-postaya ait zaten bir hesap var.",
  "Confirm Sign In": "Oturum Açmayı Doğrula",
  "Have an account? ": "Hesabınız var mı? ",
  "Incorrect username or password": "Yanlış kullanıcı adı ya da şifre",
  "Invalid password format": "Geçersiz parola formatı",
  "Invalid phone number format": "Geçersiz telefon numarası formatı",
  "Lost your code? ": "Kodu mu kaybettiniz? ",
  "No account? ": "Hesabınız yok mu? ",
  "Password attempts exceeded": "Maksimum oturum açma girişimi aşıldı",
  "Sign Out": "Çıkış yap",
  "Sign Up": "Kayıt Ol",
  "User already exists": "Bu kullanıcı zaten var",
  "User does not exist": "Böyle bir kullanıcı mevcut değil",
  "Username cannot be empty": "Kullanıcı adı boş olamaz"
}, Al = {
  "Account recovery requires verified contact information": "Восстановление учетной записи требует проверки контактной информации",
  "Back to Sign In": "Назад, чтобы войти",
  "Change Password": "изменять пароль",
  Changing: "Изменение",
  Code: "Код",
  "Confirm Password": "Подтверждение пароля",
  "Confirm Sign Up": "Подтверждение зарегистрироваться",
  "Confirm SMS Code": "Подтверждение CMC-Код",
  "Confirm TOTP Code": "Подтверждение TOTP-Код",
  Confirm: "Подтверждать",
  "Confirmation Code": "код подтверждения",
  Confirming: "подтверждение",
  "Create a new account": "Создавать новую учетную запись",
  "Create Account": "Создать учетную запись",
  "Creating Account": "создание учетная запись",
  "Dismiss alert": "Закрыть оповещение",
  Email: "электронная почта",
  "Enter your code": "ввести ваш Код",
  "Enter your Email": "ввести ваш электронная почта",
  "Enter your phone number": "ввести ваш номер телефона",
  "Enter your username": "ввести ваш имя пользователя",
  "Forgot your password?": "Забыли ваш пароль?",
  "Hide password": "Скрывать пароль",
  "It may take a minute to arrive": "Доставка может занять некоторое время",
  Loading: "Загрузка",
  "New password": "Новый пароль",
  or: "или",
  Password: "Пароль",
  "Phone Number": "Номер телефона",
  "Resend Code": "Отправь еще раз Код",
  "Reset your password": "сброс ваш пароль",
  "Reset your Password": "сброс ваш Пароль",
  "Send code": "Отправлять Код",
  "Send Code": "Отправлять Код",
  Sending: "отправка",
  "Setup TOTP": "Настраивать TOTP",
  "Show password": "Показывать пароль",
  "Sign in to your account": "знак в свой аккаунт",
  "Sign In with Amazon": "знак в с Amazon",
  "Sign In with Apple": "знак в с Apple",
  "Sign In with Facebook": "знак в с Facebook",
  "Sign In with Google": "знак в с Google",
  "Sign in": "знак в",
  "Sign In": "знак в",
  "Signing in": "подписание в",
  Skip: "Пропускать",
  Submit: "Представлять на рассмотрение",
  Submitting: "Представив",
  Username: "Имя пользователя",
  "Verify Contact": "Проверить контакт",
  Verify: "Проверить",
  "We Emailed You": "Мы отправили вам электронное письмо",
  "We Sent A Code": "Мы отправили код",
  "We Texted You": "Мы отправили вам текстовое сообщение",
  "Your code is on the way. To log in, enter the code we emailed to": "Ваш код отправлен. Чтобы войти в систему, введите код, который мы отправили по электронной почте",
  "Your code is on the way. To log in, enter the code we sent you": "Ваш код отправлен. Чтобы войти в систему, введите код, который мы послали вам",
  "Your code is on the way. To log in, enter the code we texted to": "Ваш код отправлен. Чтобы войти в систему, введите код, который мы отправили текстовым сообщением"
}, Il = {
  "Account recovery requires verified contact information": "שחזור לקוח דורש עוד מידע",
  "Back to Sign In": "חזור להרשמה",
  "Change Password": "עדכון סיסמא",
  Changing: "מעדכן",
  Code: "קוד",
  "Confirm Password": "אשר סיסמא",
  "Confirm Sign Up": "אשר הרשמה",
  "Confirm SMS Code": "אשר sms קוד",
  "Confirm TOTP Code": "אשר totp קוד",
  Confirm: "אישור",
  "Confirmation Code": "אישור קוד",
  Confirming: "מאשר",
  "Create a new account": "צור משתמש חדש",
  "Create Account": "צור משתמש",
  "Creating Account": "יצירת משתמש",
  "Dismiss alert": "הסר התראה",
  Email: "אימייל",
  "Enter your code": "הכנס את הקוד",
  "Enter your Email": "הכנס את המייל שלך",
  "Enter your phone number": "הכנס את מספר הטלפון שלך",
  "Enter your username": "הכנס את שם המתמש שלך",
  "Forgot your password?": "שכחת סיסמא ?",
  "Hide password": "הסתר סיסמא",
  Loading: "טוען",
  "New password": "סיסמא חדשה",
  or: "אוֹ",
  Password: "סיסמא",
  "Phone Number": "מספר טלפון",
  "Resend Code": "שלח קוד שוב",
  "Reset your password": "אפס סיסמא",
  "Reset your Password": "אפס סיסמא",
  "Send code": "שלח קוד",
  "Send Code": "שלח קוד",
  Sending: "שולח",
  "Setup TOTP": "Setup TOTP",
  "Show password": "הצג סיסמא",
  "Sign in to your account": "התחבר לחשבון שלך",
  "Sign In with Amazon": "Sign In with Amazon",
  "Sign In with Apple": "Sign In with Apple",
  "Sign In with Facebook": "Sign In with Facebook",
  "Sign In with Google": "Sign In with Google",
  "Sign in": "התחבר",
  "Sign In": "התחבר",
  "Signing in": "מתחבר",
  Skip: "דלג",
  Submit: "שלח",
  Submitting: "שולח",
  Username: "שם משתמש",
  "Verify Contact": "אמת איש קשר",
  Verify: "אמת"
}, El = {
  "Account recovery requires verified contact information": "Відновлення облікового запису потребує контактної інформації",
  "Back to Sign In": "Назад на сторінку входу",
  "Change Password": "Змінити пароль",
  Changing: "Змінюємо",
  Code: "Код",
  "Confirm Password": "Підтвердіть пароль",
  "Confirm Sign Up": "Підтвердіть реєстрацію",
  "Confirm SMS Code": "Підтвердіть SMS код",
  "Confirm TOTP Code": "Підтвердіть TOTP код",
  Confirm: "Підтвердити",
  "Confirmation Code": "Код підтвердження",
  Confirming: "Підтверджуємо",
  "Create a new account": "Зареєструватися",
  "Create Account": "Зареєструватися",
  "Creating Account": "Реєструємо",
  "Dismiss alert": "Відхилити сповіщення",
  Email: "Email",
  "Enter your code": "Введіть код",
  "Enter your Email": "Введіть ваш email",
  "Enter your phone number": "Введіть ваш номер телефону",
  "Enter your username": "Введіть ваше імʼя користувача",
  "Forgot password?": "Забули пароль?",
  "Forgot your password?": "Забули ваш пароль?",
  "Hide password": "Сховати пароль",
  "It may take a minute to arrive": "Доставка може тривати хвилину",
  Loading: "Загружаємо",
  "New password": "Новий пароль",
  or: "або",
  Password: "Пароль",
  "Phone Number": "Номер Телефону",
  "Resend Code": "Відправити код повторно",
  "Reset your password": "Скинути пароль",
  "Reset your Password": "Скинути пароль",
  "Send code": "Відправити код",
  "Send Code": "Відправити код",
  Sending: "Відправляємо",
  "Setup TOTP": "Налаштувати TOTP",
  "Show password": "Показати пароль",
  "Sign in to your account": "Увійти у ваш обліковий запис",
  "Sign In with Amazon": "Увійти з Amazon",
  "Sign In with Apple": "Увійти з Apple",
  "Sign In with Facebook": "Увійти з Facebook",
  "Sign In with Google": "Увійти з Google",
  "Sign in": "Увійти",
  "Sign In": "Увійти",
  "Signing in": "Входимо",
  Skip: "Пропустити",
  Submit: "Відправити",
  Submitting: "Відправляємо",
  Username: "Імʼя користувача",
  "Verify Contact": "Підтвердити Контакт",
  Verify: "Підтвердити",
  "We Emailed You": "Ми відправили вам Email",
  "We Sent A Code": "Ми відправили код",
  "We Texted You": "Ми відправили вам текстове повідомлення",
  "Your code is on the way. To log in, enter the code we emailed to": "Ваш код вже в дорозі. Щоб увійти, введіть код, що ми відправили вам на Email",
  "Your code is on the way. To log in, enter the code we sent you": "Ваш код вже в дорозі. Щоб увійти, введіть код, що ми вам відправили",
  "Your code is on the way. To log in, enter the code we texted to": "Ваш код вже в дорозі. Щоб увійти, введіть код, що ми відправили вам текстовим повідомленням",
  // Additional translations
  "An account with the given email already exists.": "Обліковий запис з цим Email вже існує.",
  "Confirm a Code": "Підтвердіть код",
  "Confirm Sign In": "Підтвердіть вхід",
  "Forgot Password": "Забули пароль",
  "Incorrect username or password.": "Невірне імʼя користувача або пароль",
  "Invalid password format": "Невірний формат паролю",
  "Invalid phone number format": "Невірний формат номеру телефону",
  "Loading...": "Загружаємо...",
  "New Password": "Новий пароль",
  "Resend a Code": "Відправити код повторно",
  "Reset Password": "Скинути пароль",
  "Sign Out": "Вийти",
  "Sign Up with Amazon": "Зареєструватися з Amazon",
  "Sign Up with Apple": "Зареєструватися з Apple",
  "Sign Up with Facebook": "Зареєструватися з Facebook",
  "Sign Up with Google": "Зареєструватися з Google",
  "Sign Up": "Зареєструватися",
  "User already exists": "Користувач вже існує",
  "User does not exist": "Такий користувач не існує",
  "Username cannot be empty": "Імʼя користувача не може бути пустим",
  "Your passwords must match": "Паролі мають збігатися"
}, Tl = {
  "Account recovery requires verified contact information": "การกู้คืนบัญชีต้องมีข้อมูลติดต่อที่ได้รับการยืนยันแล้ว",
  "Add your Profile": "เพิ่มโปรไฟล์ของคุณ",
  "Add your Website": "เพิ่มเว็บไซต์ของคุณ",
  "Back to Sign In": "กลับไปที่การเข้าสู่ระบบ",
  "Change Password": "เปลี่ยนรหัสผ่าน",
  Changing: "กำลังเปลี่ยน",
  Code: "รหัส",
  "Confirm Password": "ยืนยันรหัสผ่าน",
  "Please confirm your Password": "กรุณายืนยันรหัสผ่านของคุณ",
  "Confirm Sign Up": "ยืนยันการลงทะเบียน",
  "Confirm SMS Code": "ยืนยันรหัส SMS",
  "Confirm MFA Code": "ยืนยันรหัส MFA",
  "Confirm TOTP Code": "ยืนยันรหัส TOTP",
  Confirm: "ยืนยัน",
  "Confirmation Code": "รหัสยืนยัน",
  Confirming: "กำลังยืนยัน",
  "Create a new account": "สร้างบัญชีใหม่",
  "Create Account": "สร้างบัญชี",
  "Creating Account": "กำลังสร้างบัญชี",
  "Dismiss alert": "ปิดการแจ้งเตือน",
  Email: "อีเมล",
  "Enter your Birthdate": "กรอกวันเกิดของคุณ",
  "Enter your code": "กรอกรหัสของคุณ",
  "Enter your Confirmation Code": "กรอกรหัสยืนยันของคุณ",
  "Enter your Email": "กรอกอีเมลของคุณ",
  "Enter your Family Name": "กรอกนามสกุลของคุณ",
  "Enter your Given Name": "กรอกชื่อของคุณ",
  "Enter your Middle Name": "กรอกชื่อกลางของคุณ",
  "Enter your Name": "กรอกชื่อของคุณ",
  "Enter your Nickname": "กรอกชื่อเล่นของคุณ",
  "Enter your Password": "กรอกรหัสผ่านของคุณ",
  "Enter your email": "กรอกอีเมลของคุณ",
  "Enter your phone number": "กรอกหมายเลขโทรศัพท์ของคุณ",
  "Enter your Preferred Username": "กรอกชื่อผู้ใช้ที่ต้องการ",
  "Enter your username": "กรอกชื่อผู้ใช้ของคุณ",
  "Forgot password?": "ลืมรหัสผ่าน?",
  "Forgot your password?": "ลืมรหัสผ่านใช่หรือไม่?",
  "Hide password": "ซ่อนรหัสผ่าน",
  "It may take a minute to arrive": "อาจใช้เวลาสักครู่",
  Loading: "กำลังโหลด",
  "New password": "รหัสผ่านใหม่",
  or: "หรือ",
  Password: "รหัสผ่าน",
  "Phone Number": "หมายเลขโทรศัพท์",
  "Resend Code": "ส่งรหัสอีกครั้ง",
  "Reset your Password": "รีเซ็ตรหัสผ่านของคุณ",
  "Reset your password": "รีเซ็ตรหัสผ่านของคุณ",
  "Send code": "ส่งรหัส",
  "Send Code": "ส่งรหัส",
  Sending: "กำลังส่ง",
  "Setup TOTP": "ตั้งค่า TOTP",
  "Show password": "แสดงรหัสผ่าน",
  "Sign in to your account": "เข้าสู่ระบบบัญชีของคุณ",
  "Sign In with Amazon": "เข้าสู่ระบบด้วย Amazon",
  "Sign In with Apple": "เข้าสู่ระบบด้วย Apple",
  "Sign In with Facebook": "เข้าสู่ระบบด้วย Facebook",
  "Sign In with Google": "เข้าสู่ระบบด้วย Google",
  "Sign in": "เข้าสู่ระบบ",
  "Sign In": "เข้าสู่ระบบ",
  "Signing in": "กำลังเข้าสู่ระบบ",
  Skip: "ข้าม",
  Submit: "ส่ง",
  Submitting: "กำลังส่ง",
  Username: "ชื่อผู้ใช้",
  "Verify Contact": "ยืนยันการติดต่อ",
  Verify: "ยืนยัน",
  "We Emailed You": "เราได้ส่งอีเมลถึงคุณแล้ว",
  "We Sent A Code": "เราได้ส่งรหัสแล้ว",
  "We Texted You": "เราได้ส่ง SMS ถึงคุณแล้ว",
  "Your code is on the way. To log in, enter the code we emailed to": "รหัสของคุณกำลังมา เพื่อเข้าสู่ระบบ กรุณากรอกรหัสที่เราส่งไปยังอีเมล",
  "Your code is on the way. To log in, enter the code we sent you": "รหัสของคุณกำลังมา เพื่อเข้าสู่ระบบ กรุณากรอกรหัสที่เราส่งให้คุณ",
  "Your code is on the way. To log in, enter the code we texted to": "รหัสของคุณกำลังมา เพื่อเข้าสู่ระบบ กรุณากรอกรหัสที่เราส่งไปยัง SMS",
  // Additional translations
  "An account with the given email already exists.": "บัญชีที่ใช้อีเมลนี้มีอยู่แล้ว",
  "Confirm a Code": "ยืนยันรหัส",
  "Confirm Sign In": "ยืนยันการเข้าสู่ระบบ",
  "Create account": "สร้างบัญชี",
  "Sign Up with Facebook": "ลงทะเบียนด้วย Facebook",
  "Sign Up with Google": "ลงทะเบียนด้วย Google",
  "Sign Up with Apple": "ลงทะเบียนด้วย Apple",
  "Sign Up with Line": "ลงทะเบียนด้วย Line",
  "Forgot Password": "ลืมรหัสผ่าน",
  "Have an account? ": "มีบัญชีอยู่แล้ว? ",
  "Incorrect username or password": "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
  "Invalid password format": "รูปแบบรหัสผ่านไม่ถูกต้อง",
  "It may take a minute to arrive.": "อาจใช้เวลาสักครู่ในการมาถึง",
  "Lost your code? ": "หารหัสไม่เจอ? ",
  "New Password": "รหัสผ่านใหม่",
  "No account? ": "ไม่มีบัญชี? ",
  "Password attempts exceeded": "เกินจำนวนครั้งที่อนุญาตให้ใส่รหัสผ่าน",
  "Reset password": "รีเซ็ตรหัสผ่าน",
  "Reset Password": "รีเซ็ตรหัสผ่าน",
  "Sign Out": "ออกจากระบบ",
  "Sign Up": "ลงทะเบียน",
  "User already exists": "ผู้ใช้นี้มีอยู่แล้ว",
  "User does not exist": "ไม่มีผู้ใช้นี้",
  "Username cannot be empty": "ต้องใส่ชื่อผู้ใช้งาน"
}, Pl = {
  ADD_PROFILE: "Add your Profile",
  ADD_WEBSITE: "Add your Website",
  BACK_SIGN_IN: "Back to Sign In",
  BIRTHDATE: "Birthdate",
  CHANGE_PASSWORD: "Change Password",
  CHANGING_PASSWORD: "Changing",
  CODE: "Code",
  CODE_ARRIVAL: "It may take a minute to arrive",
  CODE_EMAILED: "Your code is on the way. To log in, enter the code we emailed to",
  CODE_SENT: "Your code is on the way. To log in, enter the code we sent you",
  CODE_TEXTED: "Your code is on the way. To log in, enter the code we texted to",
  CONFIRM_PASSWORD: "Confirm Password",
  CONFIRM_PASSWORD_PLACEHOLDER: "Please confirm your Password",
  CONFIRM_RESET_PASSWORD_HEADING: "Reset your Password",
  CONFIRM_SIGNUP_HEADING: "Confirm Sign Up",
  CONFIRM_SMS: "Confirm SMS Code",
  // If challenge name is not returned
  CONFIRM_MFA_DEFAULT: "Confirm MFA Code",
  CONFIRM_TOTP: "Confirm TOTP Code",
  CONFIRM: "Confirm",
  CONFIRMATION_CODE: "Confirmation Code",
  CONFIRMING: "Confirming",
  CREATE_ACCOUNT: "Create Account",
  CREATING_ACCOUNT: "Creating Account",
  EMAIL_ADDRESS: "Email",
  ENTER_BIRTHDATE: "Enter your Birthdate",
  ENTER_CODE: "Enter your code",
  ENTER_CONFIRMATION_CODE: "Enter your Confirmation Code",
  ENTER_EMAIL: "Enter your Email",
  ENTER_FAMILY_NAME: "Enter your Family Name",
  ENTER_GIVEN_NAME: "Enter your Given Name",
  ENTER_MIDDLE_NAME: "Enter your Middle Name",
  ENTER_NAME: "Enter your Name",
  ENTER_NICK_NAME: "Enter your Nickname",
  ENTER_PASSWORD: "Enter your Password",
  ENTER_PHONE_NUMBER: "Enter your Phone Number",
  ENTER_PREFERRED_USERNAME: "Enter your Preferred Username",
  ENTER_USERNAME: "Enter your username",
  FAMILY_NAME: "Family Name",
  GIVEN_NAME: "Given Name",
  FORGOT_PASSWORD: "Forgot Password?",
  FORGOT_YOUR_PASSWORD: "Forgot your password?",
  HIDE_PASSWORD: "Hide password",
  LOADING: "Loading",
  LOGIN_NAME: "Username",
  MIDDLE_NAME: "Middle Name",
  NAME: "Name",
  NICKNAME: "Nickname",
  NEW_PASSWORD: "New password",
  OR: "or",
  PASSWORD: "Password",
  PHONE_NUMBER: "Phone Number",
  PREFERRED_USERNAME: "Preferred Username",
  PROFILE: "Profile",
  RESEND_CODE: "Resend Code",
  RESET_PASSWORD_HEADING: "Reset your password",
  RESET_PASSWORD: "Reset Password",
  SEND_CODE: "Send code",
  SENDING: "Sending",
  SETUP_TOTP: "Setup TOTP",
  SHOW_PASSWORD: "Show password",
  SIGN_IN_BUTTON: "Sign in",
  SIGN_IN_TAB: "Sign In",
  SIGN_IN_WITH_AMAZON: "Sign In with Amazon",
  SIGN_IN_WITH_APPLE: "Sign In with Apple",
  SIGN_IN_WITH_FACEBOOK: "Sign In with Facebook",
  SIGN_IN_WITH_GOOGLE: "Sign In with Google",
  SIGN_IN: "Sign in to your account",
  SIGN_UP_BUTTON: "Create a new account",
  SIGNING_IN_BUTTON: "Signing in",
  SKIP: "Skip",
  SUBMIT: "Submit",
  SUBMITTING: "Submitting",
  UPPERCASE_COPY: "COPY",
  VERIFY_CONTACT: "Verify Contact",
  VERIFY_HEADING: "Account recovery requires verified contact information",
  VERIFY: "Verify",
  WE_EMAILED: "We Emailed You",
  WE_SENT_CODE: "We Sent A Code",
  WE_TEXTED: "We Texted You",
  WEBSITE: "Website"
}, kl = { ...cl }, Nl = {
  ...ul
}, Ul = { ...dl }, $l = { ...fl }, Fl = { ...pl }, Ol = { ...ml }, uo = { ...gl }, Rl = { ...hl }, xl = { ...yl }, Ml = { ...vl }, Dl = { ..._l }, Bl = { ...wl }, Ll = { ...Sl }, Gl = { ...bl }, zl = { ...Cl }, Wl = { ...Al }, Vl = { ...Il }, jl = { ...El }, Hl = { ...Tl }, Yl = {
  ...Pl
  // new module related default texts goes here
}, z = { ...Yl };
function N(e) {
  return ys.get(e);
}
const WC = {
  de: kl,
  en: Nl,
  es: Ul,
  fr: $l,
  id: Gl,
  it: Fl,
  ja: Ol,
  // TODO: remove kr in next major release
  kr: uo,
  ko: uo,
  nb: Rl,
  nl: xl,
  pl: Ml,
  pt: Dl,
  zh: Bl,
  sv: Ll,
  tr: zl,
  ru: Wl,
  he: Vl,
  ua: jl,
  th: Hl
}, Pr = (e) => {
  var r;
  const t = (r = e == null ? void 0 : e.context.config) == null ? void 0 : r.loginMechanisms, [n] = t ?? ["username"];
  return n;
}, Kl = (e) => {
  const t = { ...e };
  for (const [n, r] of Object.entries(e)) {
    const { label: o, placeholder: i } = r;
    t[n] = {
      ...r,
      label: o ? N(o) : void 0,
      placeholder: i ? N(i) : void 0
    };
  }
  return t;
}, ql = (e) => Object.entries(e).sort((t, n) => {
  const r = t[1].order || Number.MAX_VALUE, o = n[1].order || Number.MAX_VALUE;
  return r - o;
}).filter((t) => t[1] !== void 0), Jl = "+1", Ye = (e) => {
  let t = Bt[e];
  const { type: n } = t;
  return n === "tel" && (t = { ...t, dialCode: Jl }), t;
}, En = (e) => {
  const t = Pr(e);
  return {
    ...Ye(t),
    autocomplete: "username"
  };
}, sn = (e) => ({
  confirmation_code: {
    ...Ye("confirmation_code"),
    label: "Code *",
    placeholder: "Code"
  }
}), Zl = (e) => ({
  username: { ...En(e) },
  password: {
    ...Ye("password"),
    autocomplete: "current-password"
  }
}), Ql = (e) => {
  const { loginMechanisms: t, signUpAttributes: n } = e.context.config, r = Pr(e), o = Array.from(/* @__PURE__ */ new Set([
    ...t,
    "password",
    "confirm_password",
    ...n
  ])), i = {};
  for (const a of o)
    if (Ci(a)) {
      const s = a === r ? En(e) : Ye(a);
      i[a] = { ...s };
    } else
      console.debug(`Authenticator does not have a default implementation for ${a}. Customize SignUp FormFields to add your own.`);
  return i;
}, Xl = (e) => ({
  confirmation_code: {
    ...Ye("confirmation_code"),
    placeholder: "Enter your code"
  }
}), ec = (e) => {
  const t = Pr(e), { label: n } = Bt[t];
  return {
    username: {
      ...En(e),
      label: `Enter your ${n.toLowerCase()}`,
      placeholder: `Enter your ${n.toLowerCase()}`
    }
  };
}, tc = (e) => ({
  ...sn(),
  password: {
    ...Ye("password"),
    label: "New Password",
    placeholder: "New Password"
  },
  confirm_password: {
    ...Ye("confirm_password"),
    label: "Confirm Password",
    placeholder: "Confirm Password"
  }
}), nc = (e) => {
  const t = Er(e), { missingAttributes: n } = t.context, r = Array.from(/* @__PURE__ */ new Set([
    "password",
    "confirm_password",
    ...n ?? []
  ])), o = {};
  for (const i of r)
    Ci(i) ? o[i] = { ...Ye(i) } : console.debug(`Authenticator does not have a default implementation for ${i}. Customize ForceNewPassword FormFields to add your own.`);
  return o;
}, rc = {
  signIn: Zl,
  signUp: Ql,
  confirmSignUp: Xl,
  confirmSignIn: sn,
  forceNewPassword: nc,
  forgotPassword: ec,
  confirmResetPassword: tc,
  confirmVerifyUser: sn,
  setupTotp: sn
}, oc = (e, t) => {
  const n = rc[e];
  return n(t);
}, ic = (e, t) => {
  var r, o;
  const n = (o = (r = Tr(t)) == null ? void 0 : r.formFields) == null ? void 0 : o[e];
  return !n || Object.keys(n).length === 0 ? {} : Object.entries(n).reduce((i, [a, s]) => {
    if ((e === "signIn" || e === "forgotPassword") && a === "username") {
      const c = { ...En(t), ...s };
      return { ...i, [a]: c };
    } else if (Xs(a)) {
      const c = { ...Bt[a], ...s };
      return { ...i, [a]: c };
    } else
      return { ...i, [a]: s };
  }, {});
}, ac = (e, t) => {
  const n = oc(e, t), r = ic(e, t), o = { ...n, ...r };
  return delete o.QR, Kl(o);
}, sc = (e) => e.map((t) => {
  const n = t[0], r = { ...t[1], order: void 0 };
  return [n, r];
}), lc = (e, t) => {
  const n = ac(e, t);
  return sc(ql(n));
}, cc = (e) => {
  switch (e) {
    case "SMS_MFA":
      return N(z.CONFIRM_SMS);
    case "SOFTWARE_TOKEN_MFA":
      return N(z.CONFIRM_TOTP);
    default:
      return N(z.CONFIRM_MFA_DEFAULT);
  }
}, uc = (e) => {
  const { DeliveryMedium: t, Destination: n } = e ?? {}, r = t === "EMAIL", o = t === "SMS", i = N(z.CODE_ARRIVAL);
  return r || o ? `${N(r ? z.CODE_EMAILED : z.CODE_TEXTED)} ${n}. ${i}.` : `${N(z.CODE_SENT)}. ${i}.`;
}, dc = (e) => {
  const { DeliveryMedium: t } = e ?? {}, n = t === "EMAIL";
  return N(!n && t === "SMS" ? z.WE_SENT_CODE : n ? z.WE_EMAILED : z.WE_TEXTED);
}, fc = {
  amazon: "Amazon",
  apple: "Apple",
  facebook: "Facebook",
  google: "Google"
}, pc = (e, t) => N(`Sign ${e === "signIn" ? "In" : "Up"} with ${fc[t]}`), Ee = {
  /** Shared */
  getBackToSignInText: () => N(z.BACK_SIGN_IN),
  getChangePasswordText: () => N(z.CHANGE_PASSWORD),
  getChangingText: () => N(z.CHANGING_PASSWORD),
  getConfirmText: () => N(z.CONFIRM),
  getConfirmingText: () => N(z.CONFIRMING),
  getCopyText: () => N(z.UPPERCASE_COPY),
  getHidePasswordText: () => N(z.HIDE_PASSWORD),
  getLoadingText: () => N(z.LOADING),
  getOrText: () => N(z.OR),
  getResendCodeText: () => N(z.RESEND_CODE),
  getSendCodeText: () => N(z.SEND_CODE),
  getSendingText: () => N(z.SENDING),
  getShowPasswordText: () => N(z.SHOW_PASSWORD),
  getSubmitText: () => N(z.SUBMIT),
  getSubmittingText: () => N(z.SUBMITTING),
  /** SignInSignUpTabs */
  getSignInTabText: () => N(z.SIGN_IN_TAB),
  getSignUpTabText: () => N(z.CREATE_ACCOUNT),
  /** SignIn */
  getForgotPasswordText: (e) => N(e ? z.FORGOT_PASSWORD : z.FORGOT_YOUR_PASSWORD),
  getSigningInText: () => N(z.SIGNING_IN_BUTTON),
  getSignInText: () => N(z.SIGN_IN_BUTTON),
  /** SignUp */
  getCreatingAccountText: () => N(z.CREATING_ACCOUNT),
  getCreateAccountText: () => N(z.CREATE_ACCOUNT),
  /** ConfirmSignUp */
  getDeliveryMessageText: uc,
  getDeliveryMethodText: dc,
  /** ConfirmSignIn */
  getChallengeText: cc,
  /** ForgotPassword */
  getResetYourPasswordText: () => N(z.RESET_PASSWORD),
  /** SetupTotp */
  getSetupTotpText: () => N(z.SETUP_TOTP),
  // TODO: add defaultText for below
  getSetupTotpInstructionsText: () => N("Copy and paste the secret key below into an authenticator app and then enter the code in the text field below."),
  // TODO: add defaultText for "COPIED"
  getCopiedText: () => N("COPIED"),
  /** FederatedSignIn */
  getSignInWithFederationText: pc,
  /** VerifyUser */
  getSkipText: () => N(z.SKIP),
  getVerifyText: () => N(z.VERIFY),
  getVerifyContactText: () => N(z.VERIFY_CONTACT),
  getAccountRecoveryInfoText: () => N(z.VERIFY_HEADING),
  /** Validations */
  // TODO: add defaultText
  getInvalidEmailText: () => N("Please enter a valid email"),
  // TODO: add defaultText
  getRequiredFieldText: () => N("This field is required")
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var A = function() {
  return A = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, A.apply(this, arguments);
};
function kr(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function V(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
  if (n)
    return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function H(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n)
    return e;
  var r = n.call(e), o, i = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = r.next()).done; )
      i.push(o.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      o && !o.done && (n = r.return) && n.call(r);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return i;
}
function Q(e, t, n) {
  if (arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Z;
(function(e) {
  e.Start = "xstate.start", e.Stop = "xstate.stop", e.Raise = "xstate.raise", e.Send = "xstate.send", e.Cancel = "xstate.cancel", e.NullEvent = "", e.Assign = "xstate.assign", e.After = "xstate.after", e.DoneState = "done.state", e.DoneInvoke = "done.invoke", e.Log = "xstate.log", e.Init = "xstate.init", e.Invoke = "xstate.invoke", e.ErrorExecution = "error.execution", e.ErrorCommunication = "error.communication", e.ErrorPlatform = "error.platform", e.ErrorCustom = "xstate.error", e.Update = "xstate.update", e.Pure = "xstate.pure", e.Choose = "xstate.choose";
})(Z || (Z = {}));
var Ke;
(function(e) {
  e.Parent = "#_parent", e.Internal = "#_internal";
})(Ke || (Ke = {}));
var dn = Z.Start, Tn = Z.Stop, ht = Z.Raise, Wt = Z.Send, Nr = Z.Cancel, Ai = Z.NullEvent, Pn = Z.Assign, mc = Z.After, gc = Z.DoneState, kn = Z.Log, Ii = Z.Init, fn = Z.Invoke, hc = Z.ErrorExecution, cr = Z.ErrorPlatform, Ur = Z.ErrorCustom, Nn = Z.Update, Ei = Z.Choose, Ti = Z.Pure;
const yc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  after: mc,
  assign: Pn,
  cancel: Nr,
  choose: Ei,
  doneState: gc,
  error: Ur,
  errorExecution: hc,
  errorPlatform: cr,
  init: Ii,
  invoke: fn,
  log: kn,
  nullEvent: Ai,
  pure: Ti,
  raise: ht,
  send: Wt,
  start: dn,
  stop: Tn,
  update: Nn
}, Symbol.toStringTag, { value: "Module" }));
var Pi = ".", fo = {}, ur = "xstate.guard", vc = "", ne = process.env.NODE_ENV === "production", Jt;
function $r(e, t, n) {
  n === void 0 && (n = Pi);
  var r = Rt(e, n), o = Rt(t, n);
  return Y(o) ? Y(r) ? o === r : !1 : Y(r) ? r in o : Object.keys(r).every(function(i) {
    return i in o ? $r(r[i], o[i]) : !1;
  });
}
function ki(e) {
  try {
    return Y(e) || typeof e == "number" ? "".concat(e) : e.type;
  } catch {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
function dr(e, t) {
  try {
    return yt(e) ? e : e.toString().split(t);
  } catch {
    throw new Error("'".concat(e, "' is not a valid state path."));
  }
}
function _c(e) {
  return typeof e == "object" && "value" in e && "context" in e && "event" in e && "_event" in e;
}
function Rt(e, t) {
  if (_c(e))
    return e.value;
  if (yt(e))
    return pn(e);
  if (typeof e != "string")
    return e;
  var n = dr(e, t);
  return pn(n);
}
function pn(e) {
  if (e.length === 1)
    return e[0];
  for (var t = {}, n = t, r = 0; r < e.length - 1; r++)
    r === e.length - 2 ? n[e[r]] = e[r + 1] : (n[e[r]] = {}, n = n[e[r]]);
  return t;
}
function Ut(e, t) {
  for (var n = {}, r = Object.keys(e), o = 0; o < r.length; o++) {
    var i = r[o];
    n[i] = t(e[i], i, e, o);
  }
  return n;
}
function po(e, t, n) {
  var r, o, i = {};
  try {
    for (var a = V(Object.keys(e)), s = a.next(); !s.done; s = a.next()) {
      var l = s.value, c = e[l];
      n(c) && (i[l] = t(c, l, e));
    }
  } catch (u) {
    r = {
      error: u
    };
  } finally {
    try {
      s && !s.done && (o = a.return) && o.call(a);
    } finally {
      if (r)
        throw r.error;
    }
  }
  return i;
}
var wc = function(e) {
  return function(t) {
    var n, r, o = t;
    try {
      for (var i = V(e), a = i.next(); !a.done; a = i.next()) {
        var s = a.value;
        o = o[s];
      }
    } catch (l) {
      n = {
        error: l
      };
    } finally {
      try {
        a && !a.done && (r = i.return) && r.call(i);
      } finally {
        if (n)
          throw n.error;
      }
    }
    return o;
  };
};
function Sc(e, t) {
  return function(n) {
    var r, o, i = n;
    try {
      for (var a = V(e), s = a.next(); !s.done; s = a.next()) {
        var l = s.value;
        i = i[t][l];
      }
    } catch (c) {
      r = {
        error: c
      };
    } finally {
      try {
        s && !s.done && (o = a.return) && o.call(a);
      } finally {
        if (r)
          throw r.error;
      }
    }
    return i;
  };
}
function ln(e) {
  if (!e)
    return [[]];
  if (Y(e))
    return [[e]];
  var t = te(Object.keys(e).map(function(n) {
    var r = e[n];
    return typeof r != "string" && (!r || !Object.keys(r).length) ? [[n]] : ln(e[n]).map(function(o) {
      return [n].concat(o);
    });
  }));
  return t;
}
function te(e) {
  var t;
  return (t = []).concat.apply(t, Q([], H(e), !1));
}
function Ni(e) {
  return yt(e) ? e : [e];
}
function Pe(e) {
  return e === void 0 ? [] : Ni(e);
}
function mn(e, t, n) {
  var r, o;
  if (K(e))
    return e(t, n.data);
  var i = {};
  try {
    for (var a = V(Object.keys(e)), s = a.next(); !s.done; s = a.next()) {
      var l = s.value, c = e[l];
      K(c) ? i[l] = c(t, n.data) : i[l] = c;
    }
  } catch (u) {
    r = {
      error: u
    };
  } finally {
    try {
      s && !s.done && (o = a.return) && o.call(a);
    } finally {
      if (r)
        throw r.error;
    }
  }
  return i;
}
function bc(e) {
  return /^(done|error)\./.test(e);
}
function mo(e) {
  return !!(e instanceof Promise || e !== null && (K(e) || typeof e == "object") && K(e.then));
}
function Cc(e) {
  return e !== null && typeof e == "object" && "transition" in e && typeof e.transition == "function";
}
function Ac(e, t) {
  var n, r, o = H([[], []], 2), i = o[0], a = o[1];
  try {
    for (var s = V(e), l = s.next(); !l.done; l = s.next()) {
      var c = l.value;
      t(c) ? i.push(c) : a.push(c);
    }
  } catch (u) {
    n = {
      error: u
    };
  } finally {
    try {
      l && !l.done && (r = s.return) && r.call(s);
    } finally {
      if (n)
        throw n.error;
    }
  }
  return [i, a];
}
function Ui(e, t) {
  return Ut(e.states, function(n, r) {
    if (n) {
      var o = (Y(t) ? void 0 : t[r]) || (n ? n.current : void 0);
      if (o)
        return {
          current: o,
          states: Ui(n, o)
        };
    }
  });
}
function Ic(e, t) {
  return {
    current: t,
    states: Ui(e, t)
  };
}
function go(e, t, n, r) {
  ne || ce(!!e, "Attempting to update undefined context");
  var o = e && n.reduce(function(i, a) {
    var s, l, c = a.assignment, u = {
      state: r,
      action: a,
      _event: t
    }, m = {};
    if (K(c))
      m = c(i, t.data, u);
    else
      try {
        for (var f = V(Object.keys(c)), p = f.next(); !p.done; p = f.next()) {
          var h = p.value, v = c[h];
          m[h] = K(v) ? v(i, t.data, u) : v;
        }
      } catch (b) {
        s = {
          error: b
        };
      } finally {
        try {
          p && !p.done && (l = f.return) && l.call(f);
        } finally {
          if (s)
            throw s.error;
        }
      }
    return Object.assign({}, i, m);
  }, e);
  return o;
}
var ce = function() {
};
ne || (ce = function(e, t) {
  var n = e instanceof Error ? e : void 0;
  if (!(!n && e) && console !== void 0) {
    var r = ["Warning: ".concat(t)];
    n && r.push(n), console.warn.apply(console, r);
  }
});
function yt(e) {
  return Array.isArray(e);
}
function K(e) {
  return typeof e == "function";
}
function Y(e) {
  return typeof e == "string";
}
function $i(e, t) {
  if (e)
    return Y(e) ? {
      type: ur,
      name: e,
      predicate: t ? t[e] : void 0
    } : K(e) ? {
      type: ur,
      name: e.name,
      predicate: e
    } : e;
}
function Ec(e) {
  try {
    return "subscribe" in e && K(e.subscribe);
  } catch {
    return !1;
  }
}
var Ve = /* @__PURE__ */ function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
Jt = {}, Jt[Ve] = function() {
  return this;
}, Jt[Symbol.observable] = function() {
  return this;
};
function Le(e) {
  return !!e && "__xstatenode" in e;
}
function Tc(e) {
  return !!e && typeof e.send == "function";
}
var Pc = /* @__PURE__ */ function() {
  var e = 0;
  return function() {
    return e++, e.toString(16);
  };
}();
function Un(e, t) {
  return Y(e) || typeof e == "number" ? A({
    type: e
  }, t) : e;
}
function de(e, t) {
  if (!Y(e) && "$$type" in e && e.$$type === "scxml")
    return e;
  var n = Un(e);
  return A({
    name: n.type,
    data: n,
    $$type: "scxml",
    type: "external"
  }, t);
}
function it(e, t) {
  var n = Ni(t).map(function(r) {
    return typeof r > "u" || typeof r == "string" || Le(r) ? {
      target: r,
      event: e
    } : A(A({}, r), {
      event: e
    });
  });
  return n;
}
function kc(e) {
  if (!(e === void 0 || e === vc))
    return Pe(e);
}
function Nc(e, t, n) {
  if (!ne) {
    var r = e.stack ? " Stacktrace was '".concat(e.stack, "'") : "";
    if (e === t)
      console.error("Missing onError handler for invocation '".concat(n, "', error was '").concat(e, "'.").concat(r));
    else {
      var o = t.stack ? " Stacktrace was '".concat(t.stack, "'") : "";
      console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(n, "'. ") + "Original error: '".concat(e, "'. ").concat(r, " Current error is '").concat(t, "'.").concat(o));
    }
  }
}
function Fi(e, t, n, r, o) {
  var i = e.options.guards, a = {
    state: o,
    cond: t,
    _event: r
  };
  if (t.type === ur)
    return ((i == null ? void 0 : i[t.name]) || t.predicate)(n, r.data, a);
  var s = i == null ? void 0 : i[t.type];
  if (!s)
    throw new Error("Guard '".concat(t.type, "' is not implemented on machine '").concat(e.id, "'."));
  return s(n, r.data, a);
}
function Oi(e) {
  return typeof e == "string" ? {
    type: e
  } : e;
}
function cn(e, t, n) {
  var r = function() {
  }, o = typeof e == "object", i = o ? e : null;
  return {
    next: ((o ? e.next : e) || r).bind(i),
    error: ((o ? e.error : t) || r).bind(i),
    complete: ((o ? e.complete : n) || r).bind(i)
  };
}
function Zt(e, t) {
  return "".concat(e, ":invocation[").concat(t, "]");
}
function fr(e) {
  return (e.type === ht || e.type === Wt && e.to === Ke.Internal) && typeof e.delay != "number";
}
var et = /* @__PURE__ */ de({
  type: Ii
});
function gn(e, t) {
  return t && t[e] || void 0;
}
function dt(e, t) {
  var n;
  if (Y(e) || typeof e == "number") {
    var r = gn(e, t);
    K(r) ? n = {
      type: e,
      exec: r
    } : r ? n = r : n = {
      type: e,
      exec: void 0
    };
  } else if (K(e))
    n = {
      // Convert action to string if unnamed
      type: e.name || e.toString(),
      exec: e
    };
  else {
    var r = gn(e.type, t);
    if (K(r))
      n = A(A({}, e), {
        exec: r
      });
    else if (r) {
      var o = r.type || e.type;
      n = A(A(A({}, r), e), {
        type: o
      });
    } else
      n = e;
  }
  return n;
}
var Be = function(e, t) {
  if (!e)
    return [];
  var n = yt(e) ? e : [e];
  return n.map(function(r) {
    return dt(r, t);
  });
};
function $n(e) {
  var t = dt(e);
  return A(A({
    id: Y(e) ? e : t.id
  }, t), {
    type: t.type
  });
}
function Ri(e, t) {
  return {
    type: ht,
    event: typeof e == "function" ? e : Un(e),
    delay: t ? t.delay : void 0,
    id: t == null ? void 0 : t.id
  };
}
function xi(e, t, n, r) {
  var o = {
    _event: n
  }, i = de(K(e.event) ? e.event(t, n.data, o) : e.event), a;
  if (Y(e.delay)) {
    var s = r && r[e.delay];
    a = K(s) ? s(t, n.data, o) : s;
  } else
    a = K(e.delay) ? e.delay(t, n.data, o) : e.delay;
  return A(A({}, e), {
    type: ht,
    _event: i,
    delay: a
  });
}
function vt(e, t) {
  return {
    to: t ? t.to : void 0,
    type: Wt,
    event: K(e) ? e : Un(e),
    delay: t ? t.delay : void 0,
    // TODO: don't auto-generate IDs here like that
    // there is too big chance of the ID collision
    id: t && t.id !== void 0 ? t.id : K(e) ? e.name : ki(e)
  };
}
function Mi(e, t, n, r) {
  var o = {
    _event: n
  }, i = de(K(e.event) ? e.event(t, n.data, o) : e.event), a;
  if (Y(e.delay)) {
    var s = r && r[e.delay];
    a = K(s) ? s(t, n.data, o) : s;
  } else
    a = K(e.delay) ? e.delay(t, n.data, o) : e.delay;
  var l = K(e.to) ? e.to(t, n.data, o) : e.to;
  return A(A({}, e), {
    to: l,
    _event: i,
    event: i.data,
    delay: a
  });
}
function Fr(e, t) {
  return vt(e, A(A({}, t), {
    to: Ke.Parent
  }));
}
function Uc(e, t, n) {
  return vt(t, A(A({}, n), {
    to: e
  }));
}
function Di() {
  return Fr(Nn);
}
function $c(e, t) {
  return vt(e, A(A({}, t), {
    to: function(n, r, o) {
      var i = o._event;
      return i.origin;
    }
  }));
}
var Fc = function(e, t) {
  return {
    context: e,
    event: t
  };
};
function Oc(e, t) {
  return e === void 0 && (e = Fc), {
    type: kn,
    label: t,
    expr: e
  };
}
var Bi = function(e, t, n) {
  return A(A({}, e), {
    value: Y(e.expr) ? e.expr : e.expr(t, n.data, {
      _event: n
    })
  });
}, Li = function(e) {
  return {
    type: Nr,
    sendId: e
  };
};
function Gi(e) {
  var t = $n(e);
  return {
    type: Z.Start,
    activity: t,
    exec: void 0
  };
}
function zi(e) {
  var t = K(e) ? e : $n(e);
  return {
    type: Z.Stop,
    activity: t,
    exec: void 0
  };
}
function Wi(e, t, n) {
  var r = K(e.activity) ? e.activity(t, n.data) : e.activity, o = typeof r == "string" ? {
    id: r
  } : r, i = {
    type: Z.Stop,
    activity: o
  };
  return i;
}
var Vi = function(e) {
  return {
    type: Pn,
    assignment: e
  };
};
function Rc(e) {
  return typeof e == "object" && "type" in e;
}
function ji(e, t) {
  var n = t ? "#".concat(t) : "";
  return "".concat(Z.After, "(").concat(e, ")").concat(n);
}
function $t(e, t) {
  var n = "".concat(Z.DoneState, ".").concat(e), r = {
    type: n,
    data: t
  };
  return r.toString = function() {
    return n;
  }, r;
}
function xt(e, t) {
  var n = "".concat(Z.DoneInvoke, ".").concat(e), r = {
    type: n,
    data: t
  };
  return r.toString = function() {
    return n;
  }, r;
}
function ut(e, t) {
  var n = "".concat(Z.ErrorPlatform, ".").concat(e), r = {
    type: n,
    data: t
  };
  return r.toString = function() {
    return n;
  }, r;
}
function xc(e) {
  return {
    type: Z.Pure,
    get: e
  };
}
function Hi(e, t) {
  if (!ne && (!e || typeof e == "function")) {
    var n = e;
    e = function() {
      for (var r = [], o = 0; o < arguments.length; o++)
        r[o] = arguments[o];
      var i = typeof n == "function" ? n.apply(void 0, Q([], H(r), !1)) : n;
      if (!i)
        throw new Error("Attempted to forward event to undefined actor. This risks an infinite loop in the sender.");
      return i;
    };
  }
  return vt(function(r, o) {
    return o;
  }, A(A({}, t), {
    to: e
  }));
}
function Mc(e, t) {
  return Fr(function(n, r, o) {
    return {
      type: Ur,
      data: K(e) ? e(n, r, o) : e
    };
  }, A(A({}, t), {
    to: Ke.Parent
  }));
}
function Dc(e) {
  return {
    type: Z.Choose,
    conds: e
  };
}
var Bc = function(e) {
  var t, n, r = [];
  try {
    for (var o = V(e), i = o.next(); !i.done; i = o.next())
      for (var a = i.value, s = 0; s < a.actions.length; ) {
        if (a.actions[s].type === Pn) {
          r.push(a.actions[s]), a.actions.splice(s, 1);
          continue;
        }
        s++;
      }
  } catch (l) {
    t = {
      error: l
    };
  } finally {
    try {
      i && !i.done && (n = o.return) && n.call(o);
    } finally {
      if (t)
        throw t.error;
    }
  }
  return r;
};
function Lt(e, t, n, r, o, i, a) {
  a === void 0 && (a = !1);
  var s = a ? [] : Bc(o), l = s.length ? go(n, r, s, t) : n, c = a ? [n] : void 0, u = [];
  function m(h, v) {
    var b;
    switch (v.type) {
      case ht: {
        var g = xi(v, l, r, e.options.delays);
        return i && typeof g.delay == "number" && i(g, l, r), g;
      }
      case Wt:
        var w = Mi(v, l, r, e.options.delays);
        if (!ne) {
          var y = v.delay;
          ce(
            !Y(y) || typeof w.delay == "number",
            // tslint:disable-next-line:max-line-length
            "No delay reference for delay expression '".concat(y, "' was found on machine '").concat(e.id, "'")
          );
        }
        return i && w.to !== Ke.Internal && (h === "entry" ? u.push(w) : i(w, l, r)), w;
      case kn: {
        var S = Bi(v, l, r);
        return i == null || i(S, l, r), S;
      }
      case Ei: {
        var I = v, T = (b = I.conds.find(function(fe) {
          var ge = $i(fe.cond, e.options.guards);
          return !ge || Fi(e, ge, l, r, i ? void 0 : t);
        })) === null || b === void 0 ? void 0 : b.actions;
        if (!T)
          return [];
        var P = H(Lt(e, t, l, r, [{
          type: h,
          actions: Be(Pe(T), e.options.actions)
        }], i, a), 2), k = P[0], $ = P[1];
        return l = $, c == null || c.push(l), k;
      }
      case Ti: {
        var T = v.get(l, r.data);
        if (!T)
          return [];
        var F = H(Lt(e, t, l, r, [{
          type: h,
          actions: Be(Pe(T), e.options.actions)
        }], i, a), 2), O = F[0], B = F[1];
        return l = B, c == null || c.push(l), O;
      }
      case Tn: {
        var S = Wi(v, l, r);
        return i == null || i(S, n, r), S;
      }
      case Pn: {
        l = go(l, r, [v], i ? void 0 : t), c == null || c.push(l);
        break;
      }
      default:
        var G = dt(v, e.options.actions), ae = G.exec;
        if (i)
          i(G, l, r);
        else if (ae && c) {
          var be = c.length - 1, Te = A(A({}, G), {
            exec: function(fe) {
              for (var ge = [], ve = 1; ve < arguments.length; ve++)
                ge[ve - 1] = arguments[ve];
              ae.apply(void 0, Q([c[be]], H(ge), !1));
            }
          });
          G = Te;
        }
        return G;
    }
  }
  function f(h) {
    var v, b, g = [];
    try {
      for (var w = V(h.actions), y = w.next(); !y.done; y = w.next()) {
        var S = y.value, I = m(h.type, S);
        I && (g = g.concat(I));
      }
    } catch (T) {
      v = {
        error: T
      };
    } finally {
      try {
        y && !y.done && (b = w.return) && b.call(w);
      } finally {
        if (v)
          throw v.error;
      }
    }
    return u.forEach(function(T) {
      i(T, l, r);
    }), u.length = 0, g;
  }
  var p = te(o.map(f));
  return [p, l];
}
const Yi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  actionTypes: yc,
  after: ji,
  assign: Vi,
  cancel: Li,
  choose: Dc,
  done: $t,
  doneInvoke: xt,
  error: ut,
  escalate: Mc,
  forwardTo: Hi,
  getActionFunction: gn,
  initEvent: et,
  isActionObject: Rc,
  log: Oc,
  pure: xc,
  raise: Ri,
  resolveActions: Lt,
  resolveLog: Bi,
  resolveRaise: xi,
  resolveSend: Mi,
  resolveStop: Wi,
  respond: $c,
  send: vt,
  sendParent: Fr,
  sendTo: Uc,
  sendUpdate: Di,
  start: Gi,
  stop: zi,
  toActionObject: dt,
  toActionObjects: Be,
  toActivityDefinition: $n
}, Symbol.toStringTag, { value: "Module" }));
var hn = [], lt = function(e, t) {
  hn.push(e);
  var n = t(e);
  return hn.pop(), n;
}, Lc = function(e) {
  return e(hn[hn.length - 1]);
};
function Ki(e) {
  var t;
  return t = {
    id: e,
    send: function() {
    },
    subscribe: function() {
      return {
        unsubscribe: function() {
        }
      };
    },
    getSnapshot: function() {
    },
    toJSON: function() {
      return {
        id: e
      };
    }
  }, t[Ve] = function() {
    return this;
  }, t;
}
function Gc(e, t, n, r) {
  var o, i = Oi(e.src), a = (o = t == null ? void 0 : t.options.services) === null || o === void 0 ? void 0 : o[i.type], s = e.data ? mn(e.data, n, r) : void 0, l = a ? Or(a, e.id, s) : Ki(e.id);
  return l.meta = e, l;
}
function Or(e, t, n) {
  var r = Ki(t);
  if (r.deferred = !0, Le(e)) {
    var o = r.state = lt(void 0, function() {
      return (n ? e.withContext(n) : e).initialState;
    });
    r.getSnapshot = function() {
      return o;
    };
  }
  return r;
}
function zc(e) {
  try {
    return typeof e.send == "function";
  } catch {
    return !1;
  }
}
function Wc(e) {
  return zc(e) && "id" in e;
}
function Vc(e) {
  var t;
  return A((t = {
    subscribe: function() {
      return {
        unsubscribe: function() {
        }
      };
    },
    id: "anonymous",
    getSnapshot: function() {
    }
  }, t[Ve] = function() {
    return this;
  }, t), e);
}
var yn = function(e) {
  return e.type === "atomic" || e.type === "final";
};
function qi(e) {
  return Object.keys(e.states).map(function(t) {
    return e.states[t];
  });
}
function Gt(e) {
  return qi(e).filter(function(t) {
    return t.type !== "history";
  });
}
function Ji(e) {
  var t = [e];
  return yn(e) ? t : t.concat(te(Gt(e).map(Ji)));
}
function Ft(e, t) {
  var n, r, o, i, a, s, l, c, u = new Set(e), m = pr(u), f = new Set(t);
  try {
    for (var p = V(f), h = p.next(); !h.done; h = p.next())
      for (var v = h.value, b = v.parent; b && !f.has(b); )
        f.add(b), b = b.parent;
  } catch ($) {
    n = {
      error: $
    };
  } finally {
    try {
      h && !h.done && (r = p.return) && r.call(p);
    } finally {
      if (n)
        throw n.error;
    }
  }
  var g = pr(f);
  try {
    for (var w = V(f), y = w.next(); !y.done; y = w.next()) {
      var v = y.value;
      if (v.type === "compound" && (!g.get(v) || !g.get(v).length))
        m.get(v) ? m.get(v).forEach(function(F) {
          return f.add(F);
        }) : v.initialStateNodes.forEach(function(F) {
          return f.add(F);
        });
      else if (v.type === "parallel")
        try {
          for (var S = (a = void 0, V(Gt(v))), I = S.next(); !I.done; I = S.next()) {
            var T = I.value;
            f.has(T) || (f.add(T), m.get(T) ? m.get(T).forEach(function(F) {
              return f.add(F);
            }) : T.initialStateNodes.forEach(function(F) {
              return f.add(F);
            }));
          }
        } catch (F) {
          a = {
            error: F
          };
        } finally {
          try {
            I && !I.done && (s = S.return) && s.call(S);
          } finally {
            if (a)
              throw a.error;
          }
        }
    }
  } catch ($) {
    o = {
      error: $
    };
  } finally {
    try {
      y && !y.done && (i = w.return) && i.call(w);
    } finally {
      if (o)
        throw o.error;
    }
  }
  try {
    for (var P = V(f), k = P.next(); !k.done; k = P.next())
      for (var v = k.value, b = v.parent; b && !f.has(b); )
        f.add(b), b = b.parent;
  } catch ($) {
    l = {
      error: $
    };
  } finally {
    try {
      k && !k.done && (c = P.return) && c.call(P);
    } finally {
      if (l)
        throw l.error;
    }
  }
  return f;
}
function Zi(e, t) {
  var n = t.get(e);
  if (!n)
    return {};
  if (e.type === "compound") {
    var r = n[0];
    if (r) {
      if (yn(r))
        return r.key;
    } else
      return {};
  }
  var o = {};
  return n.forEach(function(i) {
    o[i.key] = Zi(i, t);
  }), o;
}
function pr(e) {
  var t, n, r = /* @__PURE__ */ new Map();
  try {
    for (var o = V(e), i = o.next(); !i.done; i = o.next()) {
      var a = i.value;
      r.has(a) || r.set(a, []), a.parent && (r.has(a.parent) || r.set(a.parent, []), r.get(a.parent).push(a));
    }
  } catch (s) {
    t = {
      error: s
    };
  } finally {
    try {
      i && !i.done && (n = o.return) && n.call(o);
    } finally {
      if (t)
        throw t.error;
    }
  }
  return r;
}
function jc(e, t) {
  var n = Ft([e], t);
  return Zi(e, pr(n));
}
function Ot(e, t) {
  return Array.isArray(e) ? e.some(function(n) {
    return n === t;
  }) : e instanceof Set ? e.has(t) : !1;
}
function Hc(e) {
  return Q([], H(new Set(te(Q([], H(e.map(function(t) {
    return t.ownEvents;
  })), !1)))), !1);
}
function un(e, t) {
  return t.type === "compound" ? Gt(t).some(function(n) {
    return n.type === "final" && Ot(e, n);
  }) : t.type === "parallel" ? Gt(t).every(function(n) {
    return un(e, n);
  }) : !1;
}
function Yc(e) {
  return e === void 0 && (e = []), e.reduce(function(t, n) {
    return n.meta !== void 0 && (t[n.id] = n.meta), t;
  }, {});
}
function ho(e) {
  return new Set(te(e.map(function(t) {
    return t.tags;
  })));
}
function Qi(e, t) {
  if (e === t)
    return !0;
  if (e === void 0 || t === void 0)
    return !1;
  if (Y(e) || Y(t))
    return e === t;
  var n = Object.keys(e), r = Object.keys(t);
  return n.length === r.length && n.every(function(o) {
    return Qi(e[o], t[o]);
  });
}
function Kc(e) {
  return typeof e != "object" || e === null ? !1 : "value" in e && "_event" in e;
}
function qc(e, t) {
  var n = e.exec, r = A(A({}, e), {
    exec: n !== void 0 ? function() {
      return n(t.context, t.event, {
        action: e,
        state: t,
        _event: t._event
      });
    } : void 0
  });
  return r;
}
var ke = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      var n = this, r;
      this.actions = [], this.activities = fo, this.meta = {}, this.events = [], this.value = t.value, this.context = t.context, this._event = t._event, this._sessionid = t._sessionid, this.event = this._event.data, this.historyValue = t.historyValue, this.history = t.history, this.actions = t.actions || [], this.activities = t.activities || fo, this.meta = Yc(t.configuration), this.events = t.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = t.configuration, this.transitions = t.transitions, this.children = t.children, this.done = !!t.done, this.tags = (r = Array.isArray(t.tags) ? new Set(t.tags) : t.tags) !== null && r !== void 0 ? r : /* @__PURE__ */ new Set(), this.machine = t.machine, Object.defineProperty(this, "nextEvents", {
        get: function() {
          return Hc(n.configuration);
        }
      });
    }
    return e.from = function(t, n) {
      if (t instanceof e)
        return t.context !== n ? new e({
          value: t.value,
          context: n,
          _event: t._event,
          _sessionid: null,
          historyValue: t.historyValue,
          history: t.history,
          actions: [],
          activities: t.activities,
          meta: {},
          events: [],
          configuration: [],
          transitions: [],
          children: {}
        }) : t;
      var r = et;
      return new e({
        value: t,
        context: n,
        _event: r,
        _sessionid: null,
        historyValue: void 0,
        history: void 0,
        actions: [],
        activities: void 0,
        meta: void 0,
        events: [],
        configuration: [],
        transitions: [],
        children: {}
      });
    }, e.create = function(t) {
      return new e(t);
    }, e.inert = function(t, n) {
      if (t instanceof e) {
        if (!t.actions.length)
          return t;
        var r = et;
        return new e({
          value: t.value,
          context: n,
          _event: r,
          _sessionid: null,
          historyValue: t.historyValue,
          history: t.history,
          activities: t.activities,
          configuration: t.configuration,
          transitions: [],
          children: {}
        });
      }
      return e.from(t, n);
    }, e.prototype.toStrings = function(t, n) {
      var r = this;
      if (t === void 0 && (t = this.value), n === void 0 && (n = "."), Y(t))
        return [t];
      var o = Object.keys(t);
      return o.concat.apply(o, Q([], H(o.map(function(i) {
        return r.toStrings(t[i], n).map(function(a) {
          return i + n + a;
        });
      })), !1));
    }, e.prototype.toJSON = function() {
      var t = this;
      t.configuration, t.transitions;
      var n = t.tags;
      t.machine;
      var r = kr(t, ["configuration", "transitions", "tags", "machine"]);
      return A(A({}, r), {
        tags: Array.from(n)
      });
    }, e.prototype.matches = function(t) {
      return $r(t, this.value);
    }, e.prototype.hasTag = function(t) {
      return this.tags.has(t);
    }, e.prototype.can = function(t) {
      var n;
      ne && ce(!!this.machine, "state.can(...) used outside of a machine-created State object; this will always return false.");
      var r = (n = this.machine) === null || n === void 0 ? void 0 : n.getTransitionData(this, t);
      return !!(r != null && r.transitions.length) && // Check that at least one transition is not forbidden
      r.transitions.some(function(o) {
        return o.target !== void 0 || o.actions.length;
      });
    }, e;
  }()
), Jc = {
  deferEvents: !1
}, yo = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      this.processingEvent = !1, this.queue = [], this.initialized = !1, this.options = A(A({}, Jc), t);
    }
    return e.prototype.initialize = function(t) {
      if (this.initialized = !0, t) {
        if (!this.options.deferEvents) {
          this.schedule(t);
          return;
        }
        this.process(t);
      }
      this.flushEvents();
    }, e.prototype.schedule = function(t) {
      if (!this.initialized || this.processingEvent) {
        this.queue.push(t);
        return;
      }
      if (this.queue.length !== 0)
        throw new Error("Event queue should be empty when it is not processing events");
      this.process(t), this.flushEvents();
    }, e.prototype.clear = function() {
      this.queue = [];
    }, e.prototype.flushEvents = function() {
      for (var t = this.queue.shift(); t; )
        this.process(t), t = this.queue.shift();
    }, e.prototype.process = function(t) {
      this.processingEvent = !0;
      try {
        t();
      } catch (n) {
        throw this.clear(), n;
      } finally {
        this.processingEvent = !1;
      }
    }, e;
  }()
), Xn = /* @__PURE__ */ new Map(), Zc = 0, Et = {
  bookId: function() {
    return "x:".concat(Zc++);
  },
  register: function(e, t) {
    return Xn.set(e, t), e;
  },
  get: function(e) {
    return Xn.get(e);
  },
  free: function(e) {
    Xn.delete(e);
  }
};
function Rr() {
  if (typeof globalThis < "u")
    return globalThis;
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  ne || console.warn("XState could not find a global object in this environment. Please let the maintainers know and raise an issue here: https://github.com/statelyai/xstate/issues");
}
function Qc() {
  var e = Rr();
  if (e && "__xstate__" in e)
    return e.__xstate__;
}
function Xc(e) {
  if (Rr()) {
    var t = Qc();
    t && t.register(e);
  }
}
function eu(e, t) {
  t === void 0 && (t = {});
  var n = e.initialState, r = /* @__PURE__ */ new Set(), o = [], i = !1, a = function() {
    if (!i) {
      for (i = !0; o.length > 0; ) {
        var c = o.shift();
        n = e.transition(n, c, l), r.forEach(function(u) {
          return u.next(n);
        });
      }
      i = !1;
    }
  }, s = Vc({
    id: t.id,
    send: function(c) {
      o.push(c), a();
    },
    getSnapshot: function() {
      return n;
    },
    subscribe: function(c, u, m) {
      var f = cn(c, u, m);
      return r.add(f), f.next(n), {
        unsubscribe: function() {
          r.delete(f);
        }
      };
    }
  }), l = {
    parent: t.parent,
    self: s,
    id: t.id || "anonymous",
    observers: r
  };
  return n = e.start ? e.start(l) : n, s;
}
var mr = {
  sync: !1,
  autoForward: !1
}, se;
(function(e) {
  e[e.NotStarted = 0] = "NotStarted", e[e.Running = 1] = "Running", e[e.Stopped = 2] = "Stopped";
})(se || (se = {}));
var tu = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, n) {
      n === void 0 && (n = e.defaultOptions);
      var r = this;
      this.machine = t, this.delayedEventsMap = {}, this.listeners = /* @__PURE__ */ new Set(), this.contextListeners = /* @__PURE__ */ new Set(), this.stopListeners = /* @__PURE__ */ new Set(), this.doneListeners = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Set(), this.sendListeners = /* @__PURE__ */ new Set(), this.initialized = !1, this.status = se.NotStarted, this.children = /* @__PURE__ */ new Map(), this.forwardTo = /* @__PURE__ */ new Set(), this._outgoingQueue = [], this.init = this.start, this.send = function(u, m) {
        if (yt(u))
          return r.batch(u), r.state;
        var f = de(Un(u, m));
        if (r.status === se.Stopped)
          return ne || ce(!1, 'Event "'.concat(f.name, '" was sent to stopped service "').concat(r.machine.id, `". This service has already reached its final state, and will not transition.
Event: `).concat(JSON.stringify(f.data))), r.state;
        if (r.status !== se.Running && !r.options.deferEvents)
          throw new Error('Event "'.concat(f.name, '" was sent to uninitialized service "').concat(
            r.machine.id,
            `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `
          ).concat(JSON.stringify(f.data)));
        return r.scheduler.schedule(function() {
          r.forward(f);
          var p = r._nextState(f);
          r.update(p, f);
        }), r._state;
      }, this.sendTo = function(u, m, f) {
        var p = r.parent && (m === Ke.Parent || r.parent.id === m), h = p ? r.parent : Y(m) ? m === Ke.Internal ? r : r.children.get(m) || Et.get(m) : Tc(m) ? m : void 0;
        if (!h) {
          if (!p)
            throw new Error("Unable to send event to child '".concat(m, "' from service '").concat(r.id, "'."));
          ne || ce(!1, "Service '".concat(r.id, "' has no parent: unable to send event ").concat(u.type));
          return;
        }
        if ("machine" in h) {
          if (r.status !== se.Stopped || r.parent !== h || // we need to send events to the parent from exit handlers of a machine that reached its final state
          r.state.done) {
            var v = A(A({}, u), {
              name: u.name === Ur ? "".concat(ut(r.id)) : u.name,
              origin: r.sessionId
            });
            !f && r.machine.config.predictableActionArguments ? r._outgoingQueue.push([h, v]) : h.send(v);
          }
        } else
          !f && r.machine.config.predictableActionArguments ? r._outgoingQueue.push([h, u.data]) : h.send(u.data);
      }, this._exec = function(u, m, f, p) {
        p === void 0 && (p = r.machine.options.actions);
        var h = u.exec || gn(u.type, p), v = K(h) ? h : h ? h.exec : u.exec;
        if (v)
          try {
            return v(m, f.data, r.machine.config.predictableActionArguments ? {
              action: u,
              _event: f
            } : {
              action: u,
              state: r.state,
              _event: f
            });
          } catch (ae) {
            throw r.parent && r.parent.send({
              type: "xstate.error",
              data: ae
            }), ae;
          }
        switch (u.type) {
          case ht: {
            var b = u;
            r.defer(b);
            break;
          }
          case Wt:
            var g = u;
            if (typeof g.delay == "number") {
              r.defer(g);
              return;
            } else
              g.to ? r.sendTo(g._event, g.to, f === et) : r.send(g._event);
            break;
          case Nr:
            r.cancel(u.sendId);
            break;
          case dn: {
            if (r.status !== se.Running)
              return;
            var w = u.activity;
            if (
              // in v4 with `predictableActionArguments` invokes are called eagerly when the `this.state` still points to the previous state
              !r.machine.config.predictableActionArguments && !r.state.activities[w.id || w.type]
            )
              break;
            if (w.type === Z.Invoke) {
              var y = Oi(w.src), S = r.machine.options.services ? r.machine.options.services[y.type] : void 0, I = w.id, T = w.data;
              ne || ce(
                !("forward" in w),
                // tslint:disable-next-line:max-line-length
                "`forward` property is deprecated (found in invocation of '".concat(w.src, "' in in machine '").concat(r.machine.id, "'). ") + "Please use `autoForward` instead."
              );
              var P = "autoForward" in w ? w.autoForward : !!w.forward;
              if (!S) {
                ne || ce(!1, "No service found for invocation '".concat(w.src, "' in machine '").concat(r.machine.id, "'."));
                return;
              }
              var k = T ? mn(T, m, f) : void 0;
              if (typeof S == "string")
                return;
              var $ = K(S) ? S(m, f.data, {
                data: k,
                src: y,
                meta: w.meta
              }) : S;
              if (!$)
                return;
              var F = void 0;
              Le($) && ($ = k ? $.withContext(k) : $, F = {
                autoForward: P
              }), r.spawn($, I, F);
            } else
              r.spawnActivity(w);
            break;
          }
          case Tn: {
            r.stopChild(u.activity.id);
            break;
          }
          case kn:
            var O = u, B = O.label, G = O.value;
            B ? r.logger(B, G) : r.logger(G);
            break;
          default:
            ne || ce(!1, "No implementation found for action type '".concat(u.type, "'"));
            break;
        }
      };
      var o = A(A({}, e.defaultOptions), n), i = o.clock, a = o.logger, s = o.parent, l = o.id, c = l !== void 0 ? l : t.id;
      this.id = c, this.logger = a, this.clock = i, this.parent = s, this.options = o, this.scheduler = new yo({
        deferEvents: this.options.deferEvents
      }), this.sessionId = Et.bookId();
    }
    return Object.defineProperty(e.prototype, "initialState", {
      get: function() {
        var t = this;
        return this._initialState ? this._initialState : lt(this, function() {
          return t._initialState = t.machine.initialState, t._initialState;
        });
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "state", {
      /**
       * @deprecated Use `.getSnapshot()` instead.
       */
      get: function() {
        return ne || ce(this.status !== se.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first.")), this._state;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.execute = function(t, n) {
      var r, o;
      try {
        for (var i = V(t.actions), a = i.next(); !a.done; a = i.next()) {
          var s = a.value;
          this.exec(s, t, n);
        }
      } catch (l) {
        r = {
          error: l
        };
      } finally {
        try {
          a && !a.done && (o = i.return) && o.call(i);
        } finally {
          if (r)
            throw r.error;
        }
      }
    }, e.prototype.update = function(t, n) {
      var r, o, i, a, s, l, c, u, m = this;
      if (t._sessionid = this.sessionId, this._state = t, (!this.machine.config.predictableActionArguments || // this is currently required to execute initial actions as the `initialState` gets cached
      // we can't just recompute it (and execute actions while doing so) because we try to preserve identity of actors created within initial assigns
      n === et) && this.options.execute)
        this.execute(this.state);
      else
        for (var f = void 0; f = this._outgoingQueue.shift(); )
          f[0].send(f[1]);
      if (this.children.forEach(function($) {
        m.state.children[$.id] = $;
      }), this.devTools && this.devTools.send(n.data, t), t.event)
        try {
          for (var p = V(this.eventListeners), h = p.next(); !h.done; h = p.next()) {
            var v = h.value;
            v(t.event);
          }
        } catch ($) {
          r = {
            error: $
          };
        } finally {
          try {
            h && !h.done && (o = p.return) && o.call(p);
          } finally {
            if (r)
              throw r.error;
          }
        }
      try {
        for (var b = V(this.listeners), g = b.next(); !g.done; g = b.next()) {
          var v = g.value;
          v(t, t.event);
        }
      } catch ($) {
        i = {
          error: $
        };
      } finally {
        try {
          g && !g.done && (a = b.return) && a.call(b);
        } finally {
          if (i)
            throw i.error;
        }
      }
      try {
        for (var w = V(this.contextListeners), y = w.next(); !y.done; y = w.next()) {
          var S = y.value;
          S(this.state.context, this.state.history ? this.state.history.context : void 0);
        }
      } catch ($) {
        s = {
          error: $
        };
      } finally {
        try {
          y && !y.done && (l = w.return) && l.call(w);
        } finally {
          if (s)
            throw s.error;
        }
      }
      if (this.state.done) {
        var I = t.configuration.find(function($) {
          return $.type === "final" && $.parent === m.machine;
        }), T = I && I.doneData ? mn(I.doneData, t.context, n) : void 0;
        this._doneEvent = xt(this.id, T);
        try {
          for (var P = V(this.doneListeners), k = P.next(); !k.done; k = P.next()) {
            var v = k.value;
            v(this._doneEvent);
          }
        } catch ($) {
          c = {
            error: $
          };
        } finally {
          try {
            k && !k.done && (u = P.return) && u.call(P);
          } finally {
            if (c)
              throw c.error;
          }
        }
        this._stop(), this._stopChildren(), Et.free(this.sessionId);
      }
    }, e.prototype.onTransition = function(t) {
      return this.listeners.add(t), this.status === se.Running && t(this.state, this.state.event), this;
    }, e.prototype.subscribe = function(t, n, r) {
      var o = this, i = cn(t, n, r);
      this.listeners.add(i.next), this.status !== se.NotStarted && i.next(this.state);
      var a = function() {
        o.doneListeners.delete(a), o.stopListeners.delete(a), i.complete();
      };
      return this.status === se.Stopped ? i.complete() : (this.onDone(a), this.onStop(a)), {
        unsubscribe: function() {
          o.listeners.delete(i.next), o.doneListeners.delete(a), o.stopListeners.delete(a);
        }
      };
    }, e.prototype.onEvent = function(t) {
      return this.eventListeners.add(t), this;
    }, e.prototype.onSend = function(t) {
      return this.sendListeners.add(t), this;
    }, e.prototype.onChange = function(t) {
      return this.contextListeners.add(t), this;
    }, e.prototype.onStop = function(t) {
      return this.stopListeners.add(t), this;
    }, e.prototype.onDone = function(t) {
      return this.status === se.Stopped && this._doneEvent ? t(this._doneEvent) : this.doneListeners.add(t), this;
    }, e.prototype.off = function(t) {
      return this.listeners.delete(t), this.eventListeners.delete(t), this.sendListeners.delete(t), this.stopListeners.delete(t), this.doneListeners.delete(t), this.contextListeners.delete(t), this;
    }, e.prototype.start = function(t) {
      var n = this;
      if (this.status === se.Running)
        return this;
      this.machine._init(), Et.register(this.sessionId, this), this.initialized = !0, this.status = se.Running;
      var r = t === void 0 ? this.initialState : lt(this, function() {
        return Kc(t) ? n.machine.resolveState(t) : n.machine.resolveState(ke.from(t, n.machine.context));
      });
      return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
        n.update(r, et);
      }), this;
    }, e.prototype._stopChildren = function() {
      this.children.forEach(function(t) {
        K(t.stop) && t.stop();
      }), this.children.clear();
    }, e.prototype._stop = function() {
      var t, n, r, o, i, a, s, l, c, u;
      try {
        for (var m = V(this.listeners), f = m.next(); !f.done; f = m.next()) {
          var p = f.value;
          this.listeners.delete(p);
        }
      } catch (P) {
        t = {
          error: P
        };
      } finally {
        try {
          f && !f.done && (n = m.return) && n.call(m);
        } finally {
          if (t)
            throw t.error;
        }
      }
      try {
        for (var h = V(this.stopListeners), v = h.next(); !v.done; v = h.next()) {
          var p = v.value;
          p(), this.stopListeners.delete(p);
        }
      } catch (P) {
        r = {
          error: P
        };
      } finally {
        try {
          v && !v.done && (o = h.return) && o.call(h);
        } finally {
          if (r)
            throw r.error;
        }
      }
      try {
        for (var b = V(this.contextListeners), g = b.next(); !g.done; g = b.next()) {
          var p = g.value;
          this.contextListeners.delete(p);
        }
      } catch (P) {
        i = {
          error: P
        };
      } finally {
        try {
          g && !g.done && (a = b.return) && a.call(b);
        } finally {
          if (i)
            throw i.error;
        }
      }
      try {
        for (var w = V(this.doneListeners), y = w.next(); !y.done; y = w.next()) {
          var p = y.value;
          this.doneListeners.delete(p);
        }
      } catch (P) {
        s = {
          error: P
        };
      } finally {
        try {
          y && !y.done && (l = w.return) && l.call(w);
        } finally {
          if (s)
            throw s.error;
        }
      }
      if (!this.initialized)
        return this;
      this.initialized = !1, this.status = se.Stopped, this._initialState = void 0;
      try {
        for (var S = V(Object.keys(this.delayedEventsMap)), I = S.next(); !I.done; I = S.next()) {
          var T = I.value;
          this.clock.clearTimeout(this.delayedEventsMap[T]);
        }
      } catch (P) {
        c = {
          error: P
        };
      } finally {
        try {
          I && !I.done && (u = S.return) && u.call(S);
        } finally {
          if (c)
            throw c.error;
        }
      }
      this.scheduler.clear(), this.scheduler = new yo({
        deferEvents: this.options.deferEvents
      });
    }, e.prototype.stop = function() {
      var t = this, n = this.scheduler;
      return this._stop(), n.schedule(function() {
        var r = de({
          type: "xstate.stop"
        }), o = lt(t, function() {
          var i = te(Q([], H(t.state.configuration), !1).sort(function(u, m) {
            return m.order - u.order;
          }).map(function(u) {
            return Be(u.onExit, t.machine.options.actions);
          })), a = H(Lt(t.machine, t.state, t.state.context, r, [{
            type: "exit",
            actions: i
          }], t.machine.config.predictableActionArguments ? t._exec : void 0, t.machine.config.predictableActionArguments || t.machine.config.preserveActionOrder), 2), s = a[0], l = a[1], c = new ke({
            value: t.state.value,
            context: l,
            _event: r,
            _sessionid: t.sessionId,
            historyValue: void 0,
            history: t.state,
            actions: s.filter(function(u) {
              return !fr(u);
            }),
            activities: {},
            events: [],
            configuration: [],
            transitions: [],
            children: {},
            done: t.state.done,
            tags: t.state.tags,
            machine: t.machine
          });
          return c.changed = !0, c;
        });
        t.update(o, r), t._stopChildren(), Et.free(t.sessionId);
      }), this;
    }, e.prototype.batch = function(t) {
      var n = this;
      if (this.status === se.NotStarted && this.options.deferEvents)
        ne || ce(!1, "".concat(t.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, `" and are deferred. Make sure .start() is called for this service.
Event: `).concat(JSON.stringify(event)));
      else if (this.status !== se.Running)
        throw new Error(
          // tslint:disable-next-line:max-line-length
          "".concat(t.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.')
        );
      if (t.length) {
        var r = !!this.machine.config.predictableActionArguments && this._exec;
        this.scheduler.schedule(function() {
          var o, i, a = n.state, s = !1, l = [], c = function(p) {
            var h = de(p);
            n.forward(h), a = lt(n, function() {
              return n.machine.transition(a, h, void 0, r || void 0);
            }), l.push.apply(l, Q([], H(n.machine.config.predictableActionArguments ? a.actions : a.actions.map(function(v) {
              return qc(v, a);
            })), !1)), s = s || !!a.changed;
          };
          try {
            for (var u = V(t), m = u.next(); !m.done; m = u.next()) {
              var f = m.value;
              c(f);
            }
          } catch (p) {
            o = {
              error: p
            };
          } finally {
            try {
              m && !m.done && (i = u.return) && i.call(u);
            } finally {
              if (o)
                throw o.error;
            }
          }
          a.changed = s, a.actions = l, n.update(a, de(t[t.length - 1]));
        });
      }
    }, e.prototype.sender = function(t) {
      return this.send.bind(this, t);
    }, e.prototype._nextState = function(t, n) {
      var r = this;
      n === void 0 && (n = !!this.machine.config.predictableActionArguments && this._exec);
      var o = de(t);
      if (o.name.indexOf(cr) === 0 && !this.state.nextEvents.some(function(a) {
        return a.indexOf(cr) === 0;
      }))
        throw o.data.data;
      var i = lt(this, function() {
        return r.machine.transition(r.state, o, void 0, n || void 0);
      });
      return i;
    }, e.prototype.nextState = function(t) {
      return this._nextState(t, !1);
    }, e.prototype.forward = function(t) {
      var n, r;
      try {
        for (var o = V(this.forwardTo), i = o.next(); !i.done; i = o.next()) {
          var a = i.value, s = this.children.get(a);
          if (!s)
            throw new Error("Unable to forward event '".concat(t, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(a, "'."));
          s.send(t);
        }
      } catch (l) {
        n = {
          error: l
        };
      } finally {
        try {
          i && !i.done && (r = o.return) && r.call(o);
        } finally {
          if (n)
            throw n.error;
        }
      }
    }, e.prototype.defer = function(t) {
      var n = this, r = this.clock.setTimeout(function() {
        "to" in t && t.to ? n.sendTo(t._event, t.to, !0) : n.send(t._event);
      }, t.delay);
      t.id && (this.delayedEventsMap[t.id] = r);
    }, e.prototype.cancel = function(t) {
      this.clock.clearTimeout(this.delayedEventsMap[t]), delete this.delayedEventsMap[t];
    }, e.prototype.exec = function(t, n, r) {
      r === void 0 && (r = this.machine.options.actions), this._exec(t, n.context, n._event, r);
    }, e.prototype.removeChild = function(t) {
      var n;
      this.children.delete(t), this.forwardTo.delete(t), (n = this.state) === null || n === void 0 || delete n.children[t];
    }, e.prototype.stopChild = function(t) {
      var n = this.children.get(t);
      n && (this.removeChild(t), K(n.stop) && n.stop());
    }, e.prototype.spawn = function(t, n, r) {
      if (this.status !== se.Running)
        return Or(t, n);
      if (mo(t))
        return this.spawnPromise(Promise.resolve(t), n);
      if (K(t))
        return this.spawnCallback(t, n);
      if (Wc(t))
        return this.spawnActor(t, n);
      if (Ec(t))
        return this.spawnObservable(t, n);
      if (Le(t))
        return this.spawnMachine(t, A(A({}, r), {
          id: n
        }));
      if (Cc(t))
        return this.spawnBehavior(t, n);
      throw new Error('Unable to spawn entity "'.concat(n, '" of type "').concat(typeof t, '".'));
    }, e.prototype.spawnMachine = function(t, n) {
      var r = this;
      n === void 0 && (n = {});
      var o = new e(t, A(A({}, this.options), {
        parent: this,
        id: n.id || t.id
      })), i = A(A({}, mr), n);
      i.sync && o.onTransition(function(s) {
        r.send(Nn, {
          state: s,
          id: o.id
        });
      });
      var a = o;
      return this.children.set(o.id, a), i.autoForward && this.forwardTo.add(o.id), o.onDone(function(s) {
        r.removeChild(o.id), r.send(de(s, {
          origin: o.id
        }));
      }).start(), a;
    }, e.prototype.spawnBehavior = function(t, n) {
      var r = eu(t, {
        id: n,
        parent: this
      });
      return this.children.set(n, r), r;
    }, e.prototype.spawnPromise = function(t, n) {
      var r, o = this, i = !1, a;
      t.then(function(l) {
        i || (a = l, o.removeChild(n), o.send(de(xt(n, l), {
          origin: n
        })));
      }, function(l) {
        if (!i) {
          o.removeChild(n);
          var c = ut(n, l);
          try {
            o.send(de(c, {
              origin: n
            }));
          } catch (u) {
            Nc(l, u, n), o.devTools && o.devTools.send(c, o.state), o.machine.strict && o.stop();
          }
        }
      });
      var s = (r = {
        id: n,
        send: function() {
        },
        subscribe: function(l, c, u) {
          var m = cn(l, c, u), f = !1;
          return t.then(function(p) {
            f || (m.next(p), !f && m.complete());
          }, function(p) {
            f || m.error(p);
          }), {
            unsubscribe: function() {
              return f = !0;
            }
          };
        },
        stop: function() {
          i = !0;
        },
        toJSON: function() {
          return {
            id: n
          };
        },
        getSnapshot: function() {
          return a;
        }
      }, r[Ve] = function() {
        return this;
      }, r);
      return this.children.set(n, s), s;
    }, e.prototype.spawnCallback = function(t, n) {
      var r, o = this, i = !1, a = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), l, c = function(f) {
        l = f, s.forEach(function(p) {
          return p(f);
        }), !i && o.send(de(f, {
          origin: n
        }));
      }, u;
      try {
        u = t(c, function(f) {
          a.add(f);
        });
      } catch (f) {
        this.send(ut(n, f));
      }
      if (mo(u))
        return this.spawnPromise(u, n);
      var m = (r = {
        id: n,
        send: function(f) {
          return a.forEach(function(p) {
            return p(f);
          });
        },
        subscribe: function(f) {
          var p = cn(f);
          return s.add(p.next), {
            unsubscribe: function() {
              s.delete(p.next);
            }
          };
        },
        stop: function() {
          i = !0, K(u) && u();
        },
        toJSON: function() {
          return {
            id: n
          };
        },
        getSnapshot: function() {
          return l;
        }
      }, r[Ve] = function() {
        return this;
      }, r);
      return this.children.set(n, m), m;
    }, e.prototype.spawnObservable = function(t, n) {
      var r, o = this, i, a = t.subscribe(function(l) {
        i = l, o.send(de(l, {
          origin: n
        }));
      }, function(l) {
        o.removeChild(n), o.send(de(ut(n, l), {
          origin: n
        }));
      }, function() {
        o.removeChild(n), o.send(de(xt(n), {
          origin: n
        }));
      }), s = (r = {
        id: n,
        send: function() {
        },
        subscribe: function(l, c, u) {
          return t.subscribe(l, c, u);
        },
        stop: function() {
          return a.unsubscribe();
        },
        getSnapshot: function() {
          return i;
        },
        toJSON: function() {
          return {
            id: n
          };
        }
      }, r[Ve] = function() {
        return this;
      }, r);
      return this.children.set(n, s), s;
    }, e.prototype.spawnActor = function(t, n) {
      return this.children.set(n, t), t;
    }, e.prototype.spawnActivity = function(t) {
      var n = this.machine.options && this.machine.options.activities ? this.machine.options.activities[t.type] : void 0;
      if (!n) {
        ne || ce(!1, "No implementation found for activity '".concat(t.type, "'"));
        return;
      }
      var r = n(this.state.context, t);
      this.spawnEffect(t.id, r);
    }, e.prototype.spawnEffect = function(t, n) {
      var r;
      this.children.set(t, (r = {
        id: t,
        send: function() {
        },
        subscribe: function() {
          return {
            unsubscribe: function() {
            }
          };
        },
        stop: n || void 0,
        getSnapshot: function() {
        },
        toJSON: function() {
          return {
            id: t
          };
        }
      }, r[Ve] = function() {
        return this;
      }, r));
    }, e.prototype.attachDev = function() {
      var t = Rr();
      if (this.options.devTools && t) {
        if (t.__REDUX_DEVTOOLS_EXTENSION__) {
          var n = typeof this.options.devTools == "object" ? this.options.devTools : void 0;
          this.devTools = t.__REDUX_DEVTOOLS_EXTENSION__.connect(A(A({
            name: this.id,
            autoPause: !0,
            stateSanitizer: function(r) {
              return {
                value: r.value,
                context: r.context,
                actions: r.actions
              };
            }
          }, n), {
            features: A({
              jump: !1,
              skip: !1
            }, n ? n.features : void 0)
          }), this.machine), this.devTools.init(this.state);
        }
        Xc(this);
      }
    }, e.prototype.toJSON = function() {
      return {
        id: this.id
      };
    }, e.prototype[Ve] = function() {
      return this;
    }, e.prototype.getSnapshot = function() {
      return this.status === se.NotStarted ? this.initialState : this._state;
    }, e.defaultOptions = {
      execute: !0,
      deferEvents: !0,
      clock: {
        setTimeout: function(t, n) {
          return setTimeout(t, n);
        },
        clearTimeout: function(t) {
          return clearTimeout(t);
        }
      },
      logger: /* @__PURE__ */ console.log.bind(console),
      devTools: !1
    }, e.interpret = Xi, e;
  }()
), nu = function(e) {
  return Y(e) ? A(A({}, mr), {
    name: e
  }) : A(A(A({}, mr), {
    name: Pc()
  }), e);
};
function Tt(e, t) {
  var n = nu(t);
  return Lc(function(r) {
    if (!ne) {
      var o = Le(e) || K(e);
      ce(!!r || o, 'Attempted to spawn an Actor (ID: "'.concat(Le(e) ? e.id : "undefined", '") outside of a service. This will have no effect.'));
    }
    return r ? r.spawn(e, n.name, n) : Or(e, n.name);
  });
}
function Xi(e, t) {
  var n = new tu(e, t);
  return n;
}
function ru(e) {
  if (typeof e == "string") {
    var t = {
      type: e
    };
    return t.toString = function() {
      return e;
    }, t;
  }
  return e;
}
function Qt(e) {
  return A(A({
    type: fn
  }, e), {
    toJSON: function() {
      e.onDone, e.onError;
      var t = kr(e, ["onDone", "onError"]);
      return A(A({}, t), {
        type: fn,
        src: ru(e.src)
      });
    }
  });
}
var ct = "", gr = "#", Pt = "*", at = {}, st = function(e) {
  return e[0] === gr;
}, ou = function() {
  return {
    actions: {},
    guards: {},
    services: {},
    activities: {},
    delays: {}
  };
}, iu = function(e, t, n) {
  var r = n.slice(0, -1).some(function(i) {
    return !("cond" in i) && !("in" in i) && (Y(i.target) || Le(i.target));
  }), o = t === ct ? "the transient event" : "event '".concat(t, "'");
  ce(!r, "One or more transitions for ".concat(o, " on state '").concat(e.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
}, au = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, n, r, o) {
      r === void 0 && (r = "context" in t ? t.context : void 0);
      var i = this, a;
      this.config = t, this._context = r, this.order = -1, this.__xstatenode = !0, this.__cache = {
        events: void 0,
        relativeValue: /* @__PURE__ */ new Map(),
        initialStateValue: void 0,
        initialState: void 0,
        on: void 0,
        transitions: void 0,
        candidates: {},
        delayedTransitions: void 0
      }, this.idMap = {}, this.tags = [], this.options = Object.assign(ou(), n), this.parent = o == null ? void 0 : o.parent, this.key = this.config.key || (o == null ? void 0 : o.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : Pi), this.id = this.config.id || Q([this.machine.key], H(this.path), !1).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (a = this.config.schema) !== null && a !== void 0 ? a : {}, this.description = this.config.description, ne || ce(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead.")), this.initial = this.config.initial, this.states = this.config.states ? Ut(this.config.states, function(c, u) {
        var m, f = new e(c, {}, void 0, {
          parent: i,
          key: u
        });
        return Object.assign(i.idMap, A((m = {}, m[f.id] = f, m), f.idMap)), f;
      }) : at;
      var s = 0;
      function l(c) {
        var u, m;
        c.order = s++;
        try {
          for (var f = V(qi(c)), p = f.next(); !p.done; p = f.next()) {
            var h = p.value;
            l(h);
          }
        } catch (v) {
          u = {
            error: v
          };
        } finally {
          try {
            p && !p.done && (m = f.return) && m.call(f);
          } finally {
            if (u)
              throw u.error;
          }
        }
      }
      l(this), this.history = this.config.history === !0 ? "shallow" : this.config.history || !1, this._transient = !!this.config.always || (this.config.on ? Array.isArray(this.config.on) ? this.config.on.some(function(c) {
        var u = c.event;
        return u === ct;
      }) : ct in this.config.on : !1), this.strict = !!this.config.strict, this.onEntry = Pe(this.config.entry || this.config.onEntry).map(function(c) {
        return dt(c);
      }), this.onExit = Pe(this.config.exit || this.config.onExit).map(function(c) {
        return dt(c);
      }), this.meta = this.config.meta, this.doneData = this.type === "final" ? this.config.data : void 0, this.invoke = Pe(this.config.invoke).map(function(c, u) {
        var m, f;
        if (Le(c)) {
          var p = Zt(i.id, u);
          return i.machine.options.services = A((m = {}, m[p] = c, m), i.machine.options.services), Qt({
            src: p,
            id: p
          });
        } else if (Y(c.src)) {
          var p = c.id || Zt(i.id, u);
          return Qt(A(A({}, c), {
            id: p,
            src: c.src
          }));
        } else if (Le(c.src) || K(c.src)) {
          var p = c.id || Zt(i.id, u);
          return i.machine.options.services = A((f = {}, f[p] = c.src, f), i.machine.options.services), Qt(A(A({
            id: p
          }, c), {
            src: p
          }));
        } else {
          var h = c.src;
          return Qt(A(A({
            id: Zt(i.id, u)
          }, c), {
            src: h
          }));
        }
      }), this.activities = Pe(this.config.activities).concat(this.invoke).map(function(c) {
        return $n(c);
      }), this.transition = this.transition.bind(this), this.tags = Pe(this.config.tags);
    }
    return e.prototype._init = function() {
      this.__cache.transitions || Ji(this).forEach(function(t) {
        return t.on;
      });
    }, e.prototype.withConfig = function(t, n) {
      var r = this.options, o = r.actions, i = r.activities, a = r.guards, s = r.services, l = r.delays;
      return new e(this.config, {
        actions: A(A({}, o), t.actions),
        activities: A(A({}, i), t.activities),
        guards: A(A({}, a), t.guards),
        services: A(A({}, s), t.services),
        delays: A(A({}, l), t.delays)
      }, n ?? this.context);
    }, e.prototype.withContext = function(t) {
      return new e(this.config, this.options, t);
    }, Object.defineProperty(e.prototype, "context", {
      get: function() {
        return K(this._context) ? this._context() : this._context;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "definition", {
      /**
       * The well-structured state node definition.
       */
      get: function() {
        return {
          id: this.id,
          key: this.key,
          version: this.version,
          context: this.context,
          type: this.type,
          initial: this.initial,
          history: this.history,
          states: Ut(this.states, function(t) {
            return t.definition;
          }),
          on: this.on,
          transitions: this.transitions,
          entry: this.onEntry,
          exit: this.onExit,
          activities: this.activities || [],
          meta: this.meta,
          order: this.order || -1,
          data: this.doneData,
          invoke: this.invoke,
          description: this.description,
          tags: this.tags
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.toJSON = function() {
      return this.definition;
    }, Object.defineProperty(e.prototype, "on", {
      /**
       * The mapping of events to transitions.
       */
      get: function() {
        if (this.__cache.on)
          return this.__cache.on;
        var t = this.transitions;
        return this.__cache.on = t.reduce(function(n, r) {
          return n[r.eventType] = n[r.eventType] || [], n[r.eventType].push(r), n;
        }, {});
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "after", {
      get: function() {
        return this.__cache.delayedTransitions || (this.__cache.delayedTransitions = this.getDelayedTransitions(), this.__cache.delayedTransitions);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "transitions", {
      /**
       * All the transitions that can be taken from this state node.
       */
      get: function() {
        return this.__cache.transitions || (this.__cache.transitions = this.formatTransitions(), this.__cache.transitions);
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getCandidates = function(t) {
      if (this.__cache.candidates[t])
        return this.__cache.candidates[t];
      var n = t === ct, r = this.transitions.filter(function(o) {
        var i = o.eventType === t;
        return n ? i : i || o.eventType === Pt;
      });
      return this.__cache.candidates[t] = r, r;
    }, e.prototype.getDelayedTransitions = function() {
      var t = this, n = this.config.after;
      if (!n)
        return [];
      var r = function(i, a) {
        var s = K(i) ? "".concat(t.id, ":delay[").concat(a, "]") : i, l = ji(s, t.id);
        return t.onEntry.push(vt(l, {
          delay: i
        })), t.onExit.push(Li(l)), l;
      }, o = yt(n) ? n.map(function(i, a) {
        var s = r(i.delay, a);
        return A(A({}, i), {
          event: s
        });
      }) : te(Object.keys(n).map(function(i, a) {
        var s = n[i], l = Y(s) ? {
          target: s
        } : s, c = isNaN(+i) ? i : +i, u = r(c, a);
        return Pe(l).map(function(m) {
          return A(A({}, m), {
            event: u,
            delay: c
          });
        });
      }));
      return o.map(function(i) {
        var a = i.delay;
        return A(A({}, t.formatTransition(i)), {
          delay: a
        });
      });
    }, e.prototype.getStateNodes = function(t) {
      var n, r = this;
      if (!t)
        return [];
      var o = t instanceof ke ? t.value : Rt(t, this.delimiter);
      if (Y(o)) {
        var i = this.getStateNode(o).initial;
        return i !== void 0 ? this.getStateNodes((n = {}, n[o] = i, n)) : [this, this.states[o]];
      }
      var a = Object.keys(o), s = [this];
      return s.push.apply(s, Q([], H(te(a.map(function(l) {
        return r.getStateNode(l).getStateNodes(o[l]);
      }))), !1)), s;
    }, e.prototype.handles = function(t) {
      var n = ki(t);
      return this.events.includes(n);
    }, e.prototype.resolveState = function(t) {
      var n = t instanceof ke ? t : ke.create(t), r = Array.from(Ft([], this.getStateNodes(n.value)));
      return new ke(A(A({}, n), {
        value: this.resolve(n.value),
        configuration: r,
        done: un(r, this),
        tags: ho(r),
        machine: this.machine
      }));
    }, e.prototype.transitionLeafNode = function(t, n, r) {
      var o = this.getStateNode(t), i = o.next(n, r);
      return !i || !i.transitions.length ? this.next(n, r) : i;
    }, e.prototype.transitionCompoundNode = function(t, n, r) {
      var o = Object.keys(t), i = this.getStateNode(o[0]), a = i._transition(t[o[0]], n, r);
      return !a || !a.transitions.length ? this.next(n, r) : a;
    }, e.prototype.transitionParallelNode = function(t, n, r) {
      var o, i, a = {};
      try {
        for (var s = V(Object.keys(t)), l = s.next(); !l.done; l = s.next()) {
          var c = l.value, u = t[c];
          if (u) {
            var m = this.getStateNode(c), f = m._transition(u, n, r);
            f && (a[c] = f);
          }
        }
      } catch (g) {
        o = {
          error: g
        };
      } finally {
        try {
          l && !l.done && (i = s.return) && i.call(s);
        } finally {
          if (o)
            throw o.error;
        }
      }
      var p = Object.keys(a).map(function(g) {
        return a[g];
      }), h = te(p.map(function(g) {
        return g.transitions;
      })), v = p.some(function(g) {
        return g.transitions.length > 0;
      });
      if (!v)
        return this.next(n, r);
      var b = te(Object.keys(a).map(function(g) {
        return a[g].configuration;
      }));
      return {
        transitions: h,
        exitSet: te(p.map(function(g) {
          return g.exitSet;
        })),
        configuration: b,
        source: n,
        actions: te(Object.keys(a).map(function(g) {
          return a[g].actions;
        }))
      };
    }, e.prototype._transition = function(t, n, r) {
      return Y(t) ? this.transitionLeafNode(t, n, r) : Object.keys(t).length === 1 ? this.transitionCompoundNode(t, n, r) : this.transitionParallelNode(t, n, r);
    }, e.prototype.getTransitionData = function(t, n) {
      return this._transition(t.value, t, de(n));
    }, e.prototype.next = function(t, n) {
      var r, o, i = this, a = n.name, s = [], l = [], c;
      try {
        for (var u = V(this.getCandidates(a)), m = u.next(); !m.done; m = u.next()) {
          var f = m.value, p = f.cond, h = f.in, v = t.context, b = h ? Y(h) && st(h) ? (
            // Check if in state by ID
            t.matches(Rt(this.getStateNodeById(h).path, this.delimiter))
          ) : (
            // Check if in state by relative grandparent
            $r(Rt(h, this.delimiter), wc(this.path.slice(0, -2))(t.value))
          ) : !0, g = !1;
          try {
            g = !p || Fi(this.machine, p, v, n, t);
          } catch (S) {
            throw new Error("Unable to evaluate guard '".concat(p.name || p.type, "' in transition for event '").concat(a, "' in state node '").concat(this.id, `':
`).concat(S.message));
          }
          if (g && b) {
            f.target !== void 0 && (l = f.target), s.push.apply(s, Q([], H(f.actions), !1)), c = f;
            break;
          }
        }
      } catch (S) {
        r = {
          error: S
        };
      } finally {
        try {
          m && !m.done && (o = u.return) && o.call(u);
        } finally {
          if (r)
            throw r.error;
        }
      }
      if (c) {
        if (!l.length)
          return {
            transitions: [c],
            exitSet: [],
            configuration: t.value ? [this] : [],
            source: t,
            actions: s
          };
        var w = te(l.map(function(S) {
          return i.getRelativeStateNodes(S, t.historyValue);
        })), y = !!c.internal;
        return {
          transitions: [c],
          exitSet: y ? [] : te(l.map(function(S) {
            return i.getPotentiallyReenteringNodes(S);
          })),
          configuration: w,
          source: t,
          actions: s
        };
      }
    }, e.prototype.getPotentiallyReenteringNodes = function(t) {
      if (this.order < t.order)
        return [this];
      for (var n = [], r = this, o = t; r && r !== o; )
        n.push(r), r = r.parent;
      return r !== o ? [] : (n.push(o), n);
    }, e.prototype.getActions = function(t, n, r, o, i, a, s) {
      var l, c, u, m, f = this, p = a ? Ft([], this.getStateNodes(a.value)) : [], h = /* @__PURE__ */ new Set();
      try {
        for (var v = V(Array.from(t).sort(function(O, B) {
          return O.order - B.order;
        })), b = v.next(); !b.done; b = v.next()) {
          var g = b.value;
          (!Ot(p, g) || Ot(r.exitSet, g) || g.parent && h.has(g.parent)) && h.add(g);
        }
      } catch (O) {
        l = {
          error: O
        };
      } finally {
        try {
          b && !b.done && (c = v.return) && c.call(v);
        } finally {
          if (l)
            throw l.error;
        }
      }
      try {
        for (var w = V(p), y = w.next(); !y.done; y = w.next()) {
          var g = y.value;
          (!Ot(t, g) || Ot(r.exitSet, g.parent)) && r.exitSet.push(g);
        }
      } catch (O) {
        u = {
          error: O
        };
      } finally {
        try {
          y && !y.done && (m = w.return) && m.call(w);
        } finally {
          if (u)
            throw u.error;
        }
      }
      r.exitSet.sort(function(O, B) {
        return B.order - O.order;
      });
      var S = Array.from(h).sort(function(O, B) {
        return O.order - B.order;
      }), I = new Set(r.exitSet), T = te(S.map(function(O) {
        var B = [];
        if (O.type !== "final")
          return B;
        var G = O.parent;
        if (!G.parent)
          return B;
        B.push(
          $t(O.id, O.doneData),
          // TODO: deprecate - final states should not emit done events for their own state.
          $t(G.id, O.doneData ? mn(O.doneData, o, i) : void 0)
        );
        var ae = G.parent;
        return ae.type === "parallel" && Gt(ae).every(function(be) {
          return un(r.configuration, be);
        }) && B.push($t(ae.id)), B;
      })), P = S.map(function(O) {
        var B = O.onEntry, G = O.activities.map(function(ae) {
          return Gi(ae);
        });
        return {
          type: "entry",
          actions: Be(s ? Q(Q([], H(B), !1), H(G), !1) : Q(Q([], H(G), !1), H(B), !1), f.machine.options.actions)
        };
      }).concat({
        type: "state_done",
        actions: T.map(function(O) {
          return Ri(O);
        })
      }), k = Array.from(I).map(function(O) {
        return {
          type: "exit",
          actions: Be(Q(Q([], H(O.onExit), !1), H(O.activities.map(function(B) {
            return zi(B);
          })), !1), f.machine.options.actions)
        };
      }), $ = k.concat({
        type: "transition",
        actions: Be(r.actions, this.machine.options.actions)
      }).concat(P);
      if (n) {
        var F = Be(te(Q([], H(t), !1).sort(function(O, B) {
          return B.order - O.order;
        }).map(function(O) {
          return O.onExit;
        })), this.machine.options.actions).filter(function(O) {
          return !fr(O);
        });
        return $.concat({
          type: "stop",
          actions: F
        });
      }
      return $;
    }, e.prototype.transition = function(t, n, r, o) {
      t === void 0 && (t = this.initialState);
      var i = de(n), a;
      if (t instanceof ke)
        a = r === void 0 ? t : this.resolveState(ke.from(t, r));
      else {
        var s = Y(t) ? this.resolve(pn(this.getResolvedPath(t))) : this.resolve(t), l = r ?? this.machine.context;
        a = this.resolveState(ke.from(s, l));
      }
      if (!ne && i.name === Pt)
        throw new Error("An event cannot have the wildcard type ('".concat(Pt, "')"));
      if (this.strict && !this.events.includes(i.name) && !bc(i.name))
        throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(i.name, "'"));
      var c = this._transition(a.value, a, i) || {
        transitions: [],
        configuration: [],
        exitSet: [],
        source: a,
        actions: []
      }, u = Ft([], this.getStateNodes(a.value)), m = c.configuration.length ? Ft(u, c.configuration) : u;
      return c.configuration = Q([], H(m), !1), this.resolveTransition(c, a, a.context, o, i);
    }, e.prototype.resolveRaisedTransition = function(t, n, r, o) {
      var i, a = t.actions;
      return t = this.transition(t, n, void 0, o), t._event = r, t.event = r.data, (i = t.actions).unshift.apply(i, Q([], H(a), !1)), t;
    }, e.prototype.resolveTransition = function(t, n, r, o, i) {
      var a, s, l, c, u = this;
      i === void 0 && (i = et);
      var m = t.configuration, f = !n || t.transitions.length > 0, p = f ? t.configuration : n ? n.configuration : [], h = un(p, this), v = f ? jc(this.machine, m) : void 0, b = n ? n.historyValue ? n.historyValue : t.source ? this.machine.historyValue(n.value) : void 0 : void 0, g = this.getActions(new Set(p), h, t, r, i, n, o), w = n ? A({}, n.activities) : {};
      try {
        for (var y = V(g), S = y.next(); !S.done; S = y.next()) {
          var I = S.value;
          try {
            for (var T = (l = void 0, V(I.actions)), P = T.next(); !P.done; P = T.next()) {
              var k = P.value;
              k.type === dn ? w[k.activity.id || k.activity.type] = k : k.type === Tn && (w[k.activity.id || k.activity.type] = !1);
            }
          } catch (he) {
            l = {
              error: he
            };
          } finally {
            try {
              P && !P.done && (c = T.return) && c.call(T);
            } finally {
              if (l)
                throw l.error;
            }
          }
        }
      } catch (he) {
        a = {
          error: he
        };
      } finally {
        try {
          S && !S.done && (s = y.return) && s.call(y);
        } finally {
          if (a)
            throw a.error;
        }
      }
      var $ = H(Lt(this, n, r, i, g, o, this.machine.config.predictableActionArguments || this.machine.config.preserveActionOrder), 2), F = $[0], O = $[1], B = H(Ac(F, fr), 2), G = B[0], ae = B[1], be = F.filter(function(he) {
        var We;
        return he.type === dn && ((We = he.activity) === null || We === void 0 ? void 0 : We.type) === fn;
      }), Te = be.reduce(function(he, We) {
        return he[We.activity.id] = Gc(We.activity, u.machine, O, i), he;
      }, n ? A({}, n.children) : {}), fe = new ke({
        value: v || n.value,
        context: O,
        _event: i,
        // Persist _sessionid between states
        _sessionid: n ? n._sessionid : null,
        historyValue: v ? b ? Ic(b, v) : void 0 : n ? n.historyValue : void 0,
        history: !v || t.source ? n : void 0,
        actions: v ? ae : [],
        activities: v ? w : n ? n.activities : {},
        events: [],
        configuration: p,
        transitions: t.transitions,
        children: Te,
        done: h,
        tags: ho(p),
        machine: this
      }), ge = r !== O;
      fe.changed = i.name === Nn || ge;
      var ve = fe.history;
      ve && delete ve.history;
      var ot = !h && (this._transient || m.some(function(he) {
        return he._transient;
      }));
      if (!f && (!ot || i.name === ct))
        return fe;
      var _e = fe;
      if (!h)
        for (ot && (_e = this.resolveRaisedTransition(_e, {
          type: Ai
        }, i, o)); G.length; ) {
          var L = G.shift();
          _e = this.resolveRaisedTransition(_e, L._event, i, o);
        }
      var ao = _e.changed || (ve ? !!_e.actions.length || ge || typeof ve.value != typeof _e.value || !Qi(_e.value, ve.value) : void 0);
      return _e.changed = ao, _e.history = ve, _e;
    }, e.prototype.getStateNode = function(t) {
      if (st(t))
        return this.machine.getStateNodeById(t);
      if (!this.states)
        throw new Error("Unable to retrieve child state '".concat(t, "' from '").concat(this.id, "'; no child states exist."));
      var n = this.states[t];
      if (!n)
        throw new Error("Child state '".concat(t, "' does not exist on '").concat(this.id, "'"));
      return n;
    }, e.prototype.getStateNodeById = function(t) {
      var n = st(t) ? t.slice(gr.length) : t;
      if (n === this.id)
        return this;
      var r = this.machine.idMap[n];
      if (!r)
        throw new Error("Child state node '#".concat(n, "' does not exist on machine '").concat(this.id, "'"));
      return r;
    }, e.prototype.getStateNodeByPath = function(t) {
      if (typeof t == "string" && st(t))
        try {
          return this.getStateNodeById(t.slice(1));
        } catch {
        }
      for (var n = dr(t, this.delimiter).slice(), r = this; n.length; ) {
        var o = n.shift();
        if (!o.length)
          break;
        r = r.getStateNode(o);
      }
      return r;
    }, e.prototype.resolve = function(t) {
      var n, r = this;
      if (!t)
        return this.initialStateValue || at;
      switch (this.type) {
        case "parallel":
          return Ut(this.initialStateValue, function(i, a) {
            return i ? r.getStateNode(a).resolve(t[a] || i) : at;
          });
        case "compound":
          if (Y(t)) {
            var o = this.getStateNode(t);
            return o.type === "parallel" || o.type === "compound" ? (n = {}, n[t] = o.initialStateValue, n) : t;
          }
          return Object.keys(t).length ? Ut(t, function(i, a) {
            return i ? r.getStateNode(a).resolve(i) : at;
          }) : this.initialStateValue || {};
        default:
          return t || at;
      }
    }, e.prototype.getResolvedPath = function(t) {
      if (st(t)) {
        var n = this.machine.idMap[t.slice(gr.length)];
        if (!n)
          throw new Error("Unable to find state node '".concat(t, "'"));
        return n.path;
      }
      return dr(t, this.delimiter);
    }, Object.defineProperty(e.prototype, "initialStateValue", {
      get: function() {
        var t;
        if (this.__cache.initialStateValue)
          return this.__cache.initialStateValue;
        var n;
        if (this.type === "parallel")
          n = po(this.states, function(r) {
            return r.initialStateValue || at;
          }, function(r) {
            return r.type !== "history";
          });
        else if (this.initial !== void 0) {
          if (!this.states[this.initial])
            throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
          n = yn(this.states[this.initial]) ? this.initial : (t = {}, t[this.initial] = this.states[this.initial].initialStateValue, t);
        } else
          n = {};
        return this.__cache.initialStateValue = n, this.__cache.initialStateValue;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getInitialState = function(t, n) {
      this._init();
      var r = this.getStateNodes(t);
      return this.resolveTransition({
        configuration: r,
        exitSet: [],
        transitions: [],
        source: void 0,
        actions: []
      }, void 0, n ?? this.machine.context, void 0);
    }, Object.defineProperty(e.prototype, "initialState", {
      /**
       * The initial State instance, which includes all actions to be executed from
       * entering the initial state.
       */
      get: function() {
        var t = this.initialStateValue;
        if (!t)
          throw new Error("Cannot retrieve initial state from simple state '".concat(this.id, "'."));
        return this.getInitialState(t);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "target", {
      /**
       * The target state value of the history state node, if it exists. This represents the
       * default state value to transition to if no history value exists yet.
       */
      get: function() {
        var t;
        if (this.type === "history") {
          var n = this.config;
          Y(n.target) ? t = st(n.target) ? pn(this.machine.getStateNodeById(n.target).path.slice(this.path.length - 1)) : n.target : t = n.target;
        }
        return t;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getRelativeStateNodes = function(t, n, r) {
      return r === void 0 && (r = !0), r ? t.type === "history" ? t.resolveHistory(n) : t.initialStateNodes : [t];
    }, Object.defineProperty(e.prototype, "initialStateNodes", {
      get: function() {
        var t = this;
        if (yn(this))
          return [this];
        if (this.type === "compound" && !this.initial)
          return ne || ce(!1, "Compound state node '".concat(this.id, "' has no initial state.")), [this];
        var n = ln(this.initialStateValue);
        return te(n.map(function(r) {
          return t.getFromRelativePath(r);
        }));
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getFromRelativePath = function(t) {
      if (!t.length)
        return [this];
      var n = H(t), r = n[0], o = n.slice(1);
      if (!this.states)
        throw new Error("Cannot retrieve subPath '".concat(r, "' from node with no states"));
      var i = this.getStateNode(r);
      if (i.type === "history")
        return i.resolveHistory();
      if (!this.states[r])
        throw new Error("Child state '".concat(r, "' does not exist on '").concat(this.id, "'"));
      return this.states[r].getFromRelativePath(o);
    }, e.prototype.historyValue = function(t) {
      if (Object.keys(this.states).length)
        return {
          current: t || this.initialStateValue,
          states: po(this.states, function(n, r) {
            if (!t)
              return n.historyValue();
            var o = Y(t) ? void 0 : t[r];
            return n.historyValue(o || n.initialStateValue);
          }, function(n) {
            return !n.history;
          })
        };
    }, e.prototype.resolveHistory = function(t) {
      var n = this;
      if (this.type !== "history")
        return [this];
      var r = this.parent;
      if (!t) {
        var o = this.target;
        return o ? te(ln(o).map(function(a) {
          return r.getFromRelativePath(a);
        })) : r.initialStateNodes;
      }
      var i = Sc(r.path, "states")(t).current;
      return Y(i) ? [r.getStateNode(i)] : te(ln(i).map(function(a) {
        return n.history === "deep" ? r.getFromRelativePath(a) : [r.states[a[0]]];
      }));
    }, Object.defineProperty(e.prototype, "stateIds", {
      /**
       * All the state node IDs of this state node and its descendant state nodes.
       */
      get: function() {
        var t = this, n = te(Object.keys(this.states).map(function(r) {
          return t.states[r].stateIds;
        }));
        return [this.id].concat(n);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "events", {
      /**
       * All the event types accepted by this state node and its descendants.
       */
      get: function() {
        var t, n, r, o;
        if (this.__cache.events)
          return this.__cache.events;
        var i = this.states, a = new Set(this.ownEvents);
        if (i)
          try {
            for (var s = V(Object.keys(i)), l = s.next(); !l.done; l = s.next()) {
              var c = l.value, u = i[c];
              if (u.states)
                try {
                  for (var m = (r = void 0, V(u.events)), f = m.next(); !f.done; f = m.next()) {
                    var p = f.value;
                    a.add("".concat(p));
                  }
                } catch (h) {
                  r = {
                    error: h
                  };
                } finally {
                  try {
                    f && !f.done && (o = m.return) && o.call(m);
                  } finally {
                    if (r)
                      throw r.error;
                  }
                }
            }
          } catch (h) {
            t = {
              error: h
            };
          } finally {
            try {
              l && !l.done && (n = s.return) && n.call(s);
            } finally {
              if (t)
                throw t.error;
            }
          }
        return this.__cache.events = Array.from(a);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "ownEvents", {
      /**
       * All the events that have transitions directly from this state node.
       *
       * Excludes any inert events.
       */
      get: function() {
        var t = new Set(this.transitions.filter(function(n) {
          return !(!n.target && !n.actions.length && n.internal);
        }).map(function(n) {
          return n.eventType;
        }));
        return Array.from(t);
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.resolveTarget = function(t) {
      var n = this;
      if (t !== void 0)
        return t.map(function(r) {
          if (!Y(r))
            return r;
          var o = r[0] === n.delimiter;
          if (o && !n.parent)
            return n.getStateNodeByPath(r.slice(1));
          var i = o ? n.key + r : r;
          if (n.parent)
            try {
              var a = n.parent.getStateNodeByPath(i);
              return a;
            } catch (s) {
              throw new Error("Invalid transition definition for state node '".concat(n.id, `':
`).concat(s.message));
            }
          else
            return n.getStateNodeByPath(i);
        });
    }, e.prototype.formatTransition = function(t) {
      var n = this, r = kc(t.target), o = "internal" in t ? t.internal : r ? r.some(function(l) {
        return Y(l) && l[0] === n.delimiter;
      }) : !0, i = this.machine.options.guards, a = this.resolveTarget(r), s = A(A({}, t), {
        actions: Be(Pe(t.actions)),
        cond: $i(t.cond, i),
        target: a,
        source: this,
        internal: o,
        eventType: t.event,
        toJSON: function() {
          return A(A({}, s), {
            target: s.target ? s.target.map(function(l) {
              return "#".concat(l.id);
            }) : void 0,
            source: "#".concat(n.id)
          });
        }
      });
      return s;
    }, e.prototype.formatTransitions = function() {
      var t, n, r = this, o;
      if (!this.config.on)
        o = [];
      else if (Array.isArray(this.config.on))
        o = this.config.on;
      else {
        var i = this.config.on, a = Pt, s = i[a], l = s === void 0 ? [] : s, c = kr(i, [typeof a == "symbol" ? a : a + ""]);
        o = te(Object.keys(c).map(function(w) {
          !ne && w === ct && ce(!1, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + 'Please check the `on` configuration for "#'.concat(r.id, '".'));
          var y = it(w, c[w]);
          return ne || iu(r, w, y), y;
        }).concat(it(Pt, l)));
      }
      var u = this.config.always ? it("", this.config.always) : [], m = this.config.onDone ? it(String($t(this.id)), this.config.onDone) : [];
      ne || ce(!(this.config.onDone && !this.parent), 'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id, '".'));
      var f = te(this.invoke.map(function(w) {
        var y = [];
        return w.onDone && y.push.apply(y, Q([], H(it(String(xt(w.id)), w.onDone)), !1)), w.onError && y.push.apply(y, Q([], H(it(String(ut(w.id)), w.onError)), !1)), y;
      })), p = this.after, h = te(Q(Q(Q(Q([], H(m), !1), H(f), !1), H(o), !1), H(u), !1).map(function(w) {
        return Pe(w).map(function(y) {
          return r.formatTransition(y);
        });
      }));
      try {
        for (var v = V(p), b = v.next(); !b.done; b = v.next()) {
          var g = b.value;
          h.push(g);
        }
      } catch (w) {
        t = {
          error: w
        };
      } finally {
        try {
          b && !b.done && (n = v.return) && n.call(v);
        } finally {
          if (t)
            throw t.error;
        }
      }
      return h;
    }, e;
  }()
), vo = !1;
function _t(e, t) {
  return !ne && !("predictableActionArguments" in e) && !vo && (vo = !0, console.warn("It is highly recommended to set `predictableActionArguments` to `true` when using `createMachine`. https://xstate.js.org/docs/guides/actions.html")), new au(e, t);
}
var De = Vi, Fn = Di, su = Hi, Xt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ea(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function lu(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var ta = lu;
function cu() {
  this.__data__ = [], this.size = 0;
}
var uu = cu;
function du(e, t) {
  return e === t || e !== e && t !== t;
}
var Vt = du, fu = Vt;
function pu(e, t) {
  for (var n = e.length; n--; )
    if (fu(e[n][0], t))
      return n;
  return -1;
}
var On = pu, mu = On, gu = Array.prototype, hu = gu.splice;
function yu(e) {
  var t = this.__data__, n = mu(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : hu.call(t, n, 1), --this.size, !0;
}
var vu = yu, _u = On;
function wu(e) {
  var t = this.__data__, n = _u(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var Su = wu, bu = On;
function Cu(e) {
  return bu(this.__data__, e) > -1;
}
var Au = Cu, Iu = On;
function Eu(e, t) {
  var n = this.__data__, r = Iu(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var Tu = Eu, Pu = uu, ku = vu, Nu = Su, Uu = Au, $u = Tu;
function wt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
wt.prototype.clear = Pu;
wt.prototype.delete = ku;
wt.prototype.get = Nu;
wt.prototype.has = Uu;
wt.prototype.set = $u;
var Rn = wt, Fu = Rn;
function Ou() {
  this.__data__ = new Fu(), this.size = 0;
}
var Ru = Ou;
function xu(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var Mu = xu;
function Du(e) {
  return this.__data__.get(e);
}
var Bu = Du;
function Lu(e) {
  return this.__data__.has(e);
}
var Gu = Lu, zu = typeof Xt == "object" && Xt && Xt.Object === Object && Xt, na = zu, Wu = na, Vu = typeof self == "object" && self && self.Object === Object && self, ju = Wu || Vu || Function("return this")(), Fe = ju, Hu = Fe, Yu = Hu.Symbol, xn = Yu, _o = xn, ra = Object.prototype, Ku = ra.hasOwnProperty, qu = ra.toString, kt = _o ? _o.toStringTag : void 0;
function Ju(e) {
  var t = Ku.call(e, kt), n = e[kt];
  try {
    e[kt] = void 0;
    var r = !0;
  } catch {
  }
  var o = qu.call(e);
  return r && (t ? e[kt] = n : delete e[kt]), o;
}
var Zu = Ju, Qu = Object.prototype, Xu = Qu.toString;
function ed(e) {
  return Xu.call(e);
}
var td = ed, wo = xn, nd = Zu, rd = td, od = "[object Null]", id = "[object Undefined]", So = wo ? wo.toStringTag : void 0;
function ad(e) {
  return e == null ? e === void 0 ? id : od : So && So in Object(e) ? nd(e) : rd(e);
}
var St = ad;
function sd(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ge = sd, ld = St, cd = Ge, ud = "[object AsyncFunction]", dd = "[object Function]", fd = "[object GeneratorFunction]", pd = "[object Proxy]";
function md(e) {
  if (!cd(e))
    return !1;
  var t = ld(e);
  return t == dd || t == fd || t == ud || t == pd;
}
var xr = md, gd = Fe, hd = gd["__core-js_shared__"], yd = hd, er = yd, bo = function() {
  var e = /[^.]+$/.exec(er && er.keys && er.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function vd(e) {
  return !!bo && bo in e;
}
var _d = vd, wd = Function.prototype, Sd = wd.toString;
function bd(e) {
  if (e != null) {
    try {
      return Sd.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var oa = bd, Cd = xr, Ad = _d, Id = Ge, Ed = oa, Td = /[\\^$.*+?()[\]{}|]/g, Pd = /^\[object .+?Constructor\]$/, kd = Function.prototype, Nd = Object.prototype, Ud = kd.toString, $d = Nd.hasOwnProperty, Fd = RegExp(
  "^" + Ud.call($d).replace(Td, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Od(e) {
  if (!Id(e) || Ad(e))
    return !1;
  var t = Cd(e) ? Fd : Pd;
  return t.test(Ed(e));
}
var Rd = Od;
function xd(e, t) {
  return e == null ? void 0 : e[t];
}
var Md = xd, Dd = Rd, Bd = Md;
function Ld(e, t) {
  var n = Bd(e, t);
  return Dd(n) ? n : void 0;
}
var nt = Ld, Gd = nt, zd = Fe, Wd = Gd(zd, "Map"), Mr = Wd, Vd = nt, jd = Vd(Object, "create"), Mn = jd, Co = Mn;
function Hd() {
  this.__data__ = Co ? Co(null) : {}, this.size = 0;
}
var Yd = Hd;
function Kd(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var qd = Kd, Jd = Mn, Zd = "__lodash_hash_undefined__", Qd = Object.prototype, Xd = Qd.hasOwnProperty;
function ef(e) {
  var t = this.__data__;
  if (Jd) {
    var n = t[e];
    return n === Zd ? void 0 : n;
  }
  return Xd.call(t, e) ? t[e] : void 0;
}
var tf = ef, nf = Mn, rf = Object.prototype, of = rf.hasOwnProperty;
function af(e) {
  var t = this.__data__;
  return nf ? t[e] !== void 0 : of.call(t, e);
}
var sf = af, lf = Mn, cf = "__lodash_hash_undefined__";
function uf(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = lf && t === void 0 ? cf : t, this;
}
var df = uf, ff = Yd, pf = qd, mf = tf, gf = sf, hf = df;
function bt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
bt.prototype.clear = ff;
bt.prototype.delete = pf;
bt.prototype.get = mf;
bt.prototype.has = gf;
bt.prototype.set = hf;
var yf = bt, Ao = yf, vf = Rn, _f = Mr;
function wf() {
  this.size = 0, this.__data__ = {
    hash: new Ao(),
    map: new (_f || vf)(),
    string: new Ao()
  };
}
var Sf = wf;
function bf(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Cf = bf, Af = Cf;
function If(e, t) {
  var n = e.__data__;
  return Af(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var Dn = If, Ef = Dn;
function Tf(e) {
  var t = Ef(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Pf = Tf, kf = Dn;
function Nf(e) {
  return kf(this, e).get(e);
}
var Uf = Nf, $f = Dn;
function Ff(e) {
  return $f(this, e).has(e);
}
var Of = Ff, Rf = Dn;
function xf(e, t) {
  var n = Rf(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var Mf = xf, Df = Sf, Bf = Pf, Lf = Uf, Gf = Of, zf = Mf;
function Ct(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Ct.prototype.clear = Df;
Ct.prototype.delete = Bf;
Ct.prototype.get = Lf;
Ct.prototype.has = Gf;
Ct.prototype.set = zf;
var Dr = Ct, Wf = Rn, Vf = Mr, jf = Dr, Hf = 200;
function Yf(e, t) {
  var n = this.__data__;
  if (n instanceof Wf) {
    var r = n.__data__;
    if (!Vf || r.length < Hf - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new jf(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
var Kf = Yf, qf = Rn, Jf = Ru, Zf = Mu, Qf = Bu, Xf = Gu, ep = Kf;
function At(e) {
  var t = this.__data__ = new qf(e);
  this.size = t.size;
}
At.prototype.clear = Jf;
At.prototype.delete = Zf;
At.prototype.get = Qf;
At.prototype.has = Xf;
At.prototype.set = ep;
var Br = At, tp = "__lodash_hash_undefined__";
function np(e) {
  return this.__data__.set(e, tp), this;
}
var rp = np;
function op(e) {
  return this.__data__.has(e);
}
var ip = op, ap = Dr, sp = rp, lp = ip;
function vn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new ap(); ++t < n; )
    this.add(e[t]);
}
vn.prototype.add = vn.prototype.push = sp;
vn.prototype.has = lp;
var cp = vn;
function up(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
var dp = up;
function fp(e, t) {
  return e.has(t);
}
var pp = fp, mp = cp, gp = dp, hp = pp, yp = 1, vp = 2;
function _p(e, t, n, r, o, i) {
  var a = n & yp, s = e.length, l = t.length;
  if (s != l && !(a && l > s))
    return !1;
  var c = i.get(e), u = i.get(t);
  if (c && u)
    return c == t && u == e;
  var m = -1, f = !0, p = n & vp ? new mp() : void 0;
  for (i.set(e, t), i.set(t, e); ++m < s; ) {
    var h = e[m], v = t[m];
    if (r)
      var b = a ? r(v, h, m, t, e, i) : r(h, v, m, e, t, i);
    if (b !== void 0) {
      if (b)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!gp(t, function(g, w) {
        if (!hp(p, w) && (h === g || o(h, g, n, r, i)))
          return p.push(w);
      })) {
        f = !1;
        break;
      }
    } else if (!(h === v || o(h, v, n, r, i))) {
      f = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), f;
}
var ia = _p, wp = Fe, Sp = wp.Uint8Array, aa = Sp;
function bp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
var Cp = bp;
function Ap(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var Ip = Ap, Io = xn, Eo = aa, Ep = Vt, Tp = ia, Pp = Cp, kp = Ip, Np = 1, Up = 2, $p = "[object Boolean]", Fp = "[object Date]", Op = "[object Error]", Rp = "[object Map]", xp = "[object Number]", Mp = "[object RegExp]", Dp = "[object Set]", Bp = "[object String]", Lp = "[object Symbol]", Gp = "[object ArrayBuffer]", zp = "[object DataView]", To = Io ? Io.prototype : void 0, tr = To ? To.valueOf : void 0;
function Wp(e, t, n, r, o, i, a) {
  switch (n) {
    case zp:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Gp:
      return !(e.byteLength != t.byteLength || !i(new Eo(e), new Eo(t)));
    case $p:
    case Fp:
    case xp:
      return Ep(+e, +t);
    case Op:
      return e.name == t.name && e.message == t.message;
    case Mp:
    case Bp:
      return e == t + "";
    case Rp:
      var s = Pp;
    case Dp:
      var l = r & Np;
      if (s || (s = kp), e.size != t.size && !l)
        return !1;
      var c = a.get(e);
      if (c)
        return c == t;
      r |= Up, a.set(e, t);
      var u = Tp(s(e), s(t), r, o, i, a);
      return a.delete(e), u;
    case Lp:
      if (tr)
        return tr.call(e) == tr.call(t);
  }
  return !1;
}
var Vp = Wp;
function jp(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var sa = jp, Hp = Array.isArray, ze = Hp, Yp = sa, Kp = ze;
function qp(e, t, n) {
  var r = t(e);
  return Kp(e) ? r : Yp(r, n(e));
}
var la = qp;
function Jp(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, i = []; ++n < r; ) {
    var a = e[n];
    t(a, n, e) && (i[o++] = a);
  }
  return i;
}
var Zp = Jp;
function Qp() {
  return [];
}
var ca = Qp, Xp = Zp, em = ca, tm = Object.prototype, nm = tm.propertyIsEnumerable, Po = Object.getOwnPropertySymbols, rm = Po ? function(e) {
  return e == null ? [] : (e = Object(e), Xp(Po(e), function(t) {
    return nm.call(e, t);
  }));
} : em, ua = rm;
function om(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var im = om;
function am(e) {
  return e != null && typeof e == "object";
}
var rt = am, sm = St, lm = rt, cm = "[object Arguments]";
function um(e) {
  return lm(e) && sm(e) == cm;
}
var dm = um, ko = dm, fm = rt, da = Object.prototype, pm = da.hasOwnProperty, mm = da.propertyIsEnumerable, gm = ko(/* @__PURE__ */ function() {
  return arguments;
}()) ? ko : function(e) {
  return fm(e) && pm.call(e, "callee") && !mm.call(e, "callee");
}, Lr = gm, _n = { exports: {} };
function hm() {
  return !1;
}
var ym = hm;
_n.exports;
(function(e, t) {
  var n = Fe, r = ym, o = t && !t.nodeType && t, i = o && !0 && e && !e.nodeType && e, a = i && i.exports === o, s = a ? n.Buffer : void 0, l = s ? s.isBuffer : void 0, c = l || r;
  e.exports = c;
})(_n, _n.exports);
var Gr = _n.exports, vm = 9007199254740991, _m = /^(?:0|[1-9]\d*)$/;
function wm(e, t) {
  var n = typeof e;
  return t = t ?? vm, !!t && (n == "number" || n != "symbol" && _m.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Bn = wm, Sm = 9007199254740991;
function bm(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Sm;
}
var zr = bm, Cm = St, Am = zr, Im = rt, Em = "[object Arguments]", Tm = "[object Array]", Pm = "[object Boolean]", km = "[object Date]", Nm = "[object Error]", Um = "[object Function]", $m = "[object Map]", Fm = "[object Number]", Om = "[object Object]", Rm = "[object RegExp]", xm = "[object Set]", Mm = "[object String]", Dm = "[object WeakMap]", Bm = "[object ArrayBuffer]", Lm = "[object DataView]", Gm = "[object Float32Array]", zm = "[object Float64Array]", Wm = "[object Int8Array]", Vm = "[object Int16Array]", jm = "[object Int32Array]", Hm = "[object Uint8Array]", Ym = "[object Uint8ClampedArray]", Km = "[object Uint16Array]", qm = "[object Uint32Array]", ee = {};
ee[Gm] = ee[zm] = ee[Wm] = ee[Vm] = ee[jm] = ee[Hm] = ee[Ym] = ee[Km] = ee[qm] = !0;
ee[Em] = ee[Tm] = ee[Bm] = ee[Pm] = ee[Lm] = ee[km] = ee[Nm] = ee[Um] = ee[$m] = ee[Fm] = ee[Om] = ee[Rm] = ee[xm] = ee[Mm] = ee[Dm] = !1;
function Jm(e) {
  return Im(e) && Am(e.length) && !!ee[Cm(e)];
}
var Zm = Jm;
function Qm(e) {
  return function(t) {
    return e(t);
  };
}
var Xm = Qm, wn = { exports: {} };
wn.exports;
(function(e, t) {
  var n = na, r = t && !t.nodeType && t, o = r && !0 && e && !e.nodeType && e, i = o && o.exports === r, a = i && n.process, s = function() {
    try {
      var l = o && o.require && o.require("util").types;
      return l || a && a.binding && a.binding("util");
    } catch {
    }
  }();
  e.exports = s;
})(wn, wn.exports);
var eg = wn.exports, tg = Zm, ng = Xm, No = eg, Uo = No && No.isTypedArray, rg = Uo ? ng(Uo) : tg, Wr = rg, og = im, ig = Lr, ag = ze, sg = Gr, lg = Bn, cg = Wr, ug = Object.prototype, dg = ug.hasOwnProperty;
function fg(e, t) {
  var n = ag(e), r = !n && ig(e), o = !n && !r && sg(e), i = !n && !r && !o && cg(e), a = n || r || o || i, s = a ? og(e.length, String) : [], l = s.length;
  for (var c in e)
    (t || dg.call(e, c)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    lg(c, l))) && s.push(c);
  return s;
}
var fa = fg, pg = Object.prototype;
function mg(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || pg;
  return e === n;
}
var Vr = mg;
function gg(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var pa = gg, hg = pa, yg = hg(Object.keys, Object), vg = yg, _g = Vr, wg = vg, Sg = Object.prototype, bg = Sg.hasOwnProperty;
function Cg(e) {
  if (!_g(e))
    return wg(e);
  var t = [];
  for (var n in Object(e))
    bg.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var Ag = Cg, Ig = xr, Eg = zr;
function Tg(e) {
  return e != null && Eg(e.length) && !Ig(e);
}
var Ln = Tg, Pg = fa, kg = Ag, Ng = Ln;
function Ug(e) {
  return Ng(e) ? Pg(e) : kg(e);
}
var ma = Ug, $g = la, Fg = ua, Og = ma;
function Rg(e) {
  return $g(e, Og, Fg);
}
var xg = Rg, $o = xg, Mg = 1, Dg = Object.prototype, Bg = Dg.hasOwnProperty;
function Lg(e, t, n, r, o, i) {
  var a = n & Mg, s = $o(e), l = s.length, c = $o(t), u = c.length;
  if (l != u && !a)
    return !1;
  for (var m = l; m--; ) {
    var f = s[m];
    if (!(a ? f in t : Bg.call(t, f)))
      return !1;
  }
  var p = i.get(e), h = i.get(t);
  if (p && h)
    return p == t && h == e;
  var v = !0;
  i.set(e, t), i.set(t, e);
  for (var b = a; ++m < l; ) {
    f = s[m];
    var g = e[f], w = t[f];
    if (r)
      var y = a ? r(w, g, f, t, e, i) : r(g, w, f, e, t, i);
    if (!(y === void 0 ? g === w || o(g, w, n, r, i) : y)) {
      v = !1;
      break;
    }
    b || (b = f == "constructor");
  }
  if (v && !b) {
    var S = e.constructor, I = t.constructor;
    S != I && "constructor" in e && "constructor" in t && !(typeof S == "function" && S instanceof S && typeof I == "function" && I instanceof I) && (v = !1);
  }
  return i.delete(e), i.delete(t), v;
}
var Gg = Lg, zg = nt, Wg = Fe, Vg = zg(Wg, "DataView"), jg = Vg, Hg = nt, Yg = Fe, Kg = Hg(Yg, "Promise"), qg = Kg, Jg = nt, Zg = Fe, Qg = Jg(Zg, "Set"), Xg = Qg, eh = nt, th = Fe, nh = eh(th, "WeakMap"), rh = nh, hr = jg, yr = Mr, vr = qg, _r = Xg, wr = rh, ga = St, It = oa, Fo = "[object Map]", oh = "[object Object]", Oo = "[object Promise]", Ro = "[object Set]", xo = "[object WeakMap]", Mo = "[object DataView]", ih = It(hr), ah = It(yr), sh = It(vr), lh = It(_r), ch = It(wr), Xe = ga;
(hr && Xe(new hr(new ArrayBuffer(1))) != Mo || yr && Xe(new yr()) != Fo || vr && Xe(vr.resolve()) != Oo || _r && Xe(new _r()) != Ro || wr && Xe(new wr()) != xo) && (Xe = function(e) {
  var t = ga(e), n = t == oh ? e.constructor : void 0, r = n ? It(n) : "";
  if (r)
    switch (r) {
      case ih:
        return Mo;
      case ah:
        return Fo;
      case sh:
        return Oo;
      case lh:
        return Ro;
      case ch:
        return xo;
    }
  return t;
});
var uh = Xe, nr = Br, dh = ia, fh = Vp, ph = Gg, Do = uh, Bo = ze, Lo = Gr, mh = Wr, gh = 1, Go = "[object Arguments]", zo = "[object Array]", en = "[object Object]", hh = Object.prototype, Wo = hh.hasOwnProperty;
function yh(e, t, n, r, o, i) {
  var a = Bo(e), s = Bo(t), l = a ? zo : Do(e), c = s ? zo : Do(t);
  l = l == Go ? en : l, c = c == Go ? en : c;
  var u = l == en, m = c == en, f = l == c;
  if (f && Lo(e)) {
    if (!Lo(t))
      return !1;
    a = !0, u = !1;
  }
  if (f && !u)
    return i || (i = new nr()), a || mh(e) ? dh(e, t, n, r, o, i) : fh(e, t, l, n, r, o, i);
  if (!(n & gh)) {
    var p = u && Wo.call(e, "__wrapped__"), h = m && Wo.call(t, "__wrapped__");
    if (p || h) {
      var v = p ? e.value() : e, b = h ? t.value() : t;
      return i || (i = new nr()), o(v, b, n, r, i);
    }
  }
  return f ? (i || (i = new nr()), ph(e, t, n, r, o, i)) : !1;
}
var vh = yh, _h = vh, Vo = rt;
function ha(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !Vo(e) && !Vo(t) ? e !== e && t !== t : _h(e, t, n, r, ha, o);
}
var ya = ha, wh = Br, Sh = ya, bh = 1, Ch = 2;
function Ah(e, t, n, r) {
  var o = n.length, i = o, a = !r;
  if (e == null)
    return !i;
  for (e = Object(e); o--; ) {
    var s = n[o];
    if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++o < i; ) {
    s = n[o];
    var l = s[0], c = e[l], u = s[1];
    if (a && s[2]) {
      if (c === void 0 && !(l in e))
        return !1;
    } else {
      var m = new wh();
      if (r)
        var f = r(c, u, l, e, t, m);
      if (!(f === void 0 ? Sh(u, c, bh | Ch, r, m) : f))
        return !1;
    }
  }
  return !0;
}
var Ih = Ah, Eh = Ge;
function Th(e) {
  return e === e && !Eh(e);
}
var va = Th, Ph = va, kh = ma;
function Nh(e) {
  for (var t = kh(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, Ph(o)];
  }
  return t;
}
var Uh = Nh;
function $h(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
var _a = $h, Fh = Ih, Oh = Uh, Rh = _a;
function xh(e) {
  var t = Oh(e);
  return t.length == 1 && t[0][2] ? Rh(t[0][0], t[0][1]) : function(n) {
    return n === e || Fh(n, e, t);
  };
}
var Mh = xh, Dh = St, Bh = rt, Lh = "[object Symbol]";
function Gh(e) {
  return typeof e == "symbol" || Bh(e) && Dh(e) == Lh;
}
var jr = Gh, zh = ze, Wh = jr, Vh = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, jh = /^\w*$/;
function Hh(e, t) {
  if (zh(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Wh(e) ? !0 : jh.test(e) || !Vh.test(e) || t != null && e in Object(t);
}
var Hr = Hh, wa = Dr, Yh = "Expected a function";
function Yr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Yh);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], i = n.cache;
    if (i.has(o))
      return i.get(o);
    var a = e.apply(this, r);
    return n.cache = i.set(o, a) || i, a;
  };
  return n.cache = new (Yr.Cache || wa)(), n;
}
Yr.Cache = wa;
var Kh = Yr, qh = Kh, Jh = 500;
function Zh(e) {
  var t = qh(e, function(r) {
    return n.size === Jh && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Qh = Zh, Xh = Qh, ey = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ty = /\\(\\)?/g, ny = Xh(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ey, function(n, r, o, i) {
    t.push(o ? i.replace(ty, "$1") : r || n);
  }), t;
}), ry = ny, jo = xn, oy = ta, iy = ze, ay = jr, sy = 1 / 0, Ho = jo ? jo.prototype : void 0, Yo = Ho ? Ho.toString : void 0;
function Sa(e) {
  if (typeof e == "string")
    return e;
  if (iy(e))
    return oy(e, Sa) + "";
  if (ay(e))
    return Yo ? Yo.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -sy ? "-0" : t;
}
var ly = Sa, cy = ly;
function uy(e) {
  return e == null ? "" : cy(e);
}
var dy = uy, fy = ze, py = Hr, my = ry, gy = dy;
function hy(e, t) {
  return fy(e) ? e : py(e, t) ? [e] : my(gy(e));
}
var Gn = hy, yy = jr, vy = 1 / 0;
function _y(e) {
  if (typeof e == "string" || yy(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -vy ? "-0" : t;
}
var jt = _y, wy = Gn, Sy = jt;
function by(e, t) {
  t = wy(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Sy(t[n++])];
  return n && n == r ? e : void 0;
}
var Kr = by, Cy = Kr;
function Ay(e, t, n) {
  var r = e == null ? void 0 : Cy(e, t);
  return r === void 0 ? n : r;
}
var Iy = Ay;
function Ey(e, t) {
  return e != null && t in Object(e);
}
var Ty = Ey, Py = Gn, ky = Lr, Ny = ze, Uy = Bn, $y = zr, Fy = jt;
function Oy(e, t, n) {
  t = Py(t, e);
  for (var r = -1, o = t.length, i = !1; ++r < o; ) {
    var a = Fy(t[r]);
    if (!(i = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return i || ++r != o ? i : (o = e == null ? 0 : e.length, !!o && $y(o) && Uy(a, o) && (Ny(e) || ky(e)));
}
var Ry = Oy, xy = Ty, My = Ry;
function Dy(e, t) {
  return e != null && My(e, t, xy);
}
var By = Dy, Ly = ya, Gy = Iy, zy = By, Wy = Hr, Vy = va, jy = _a, Hy = jt, Yy = 1, Ky = 2;
function qy(e, t) {
  return Wy(e) && Vy(t) ? jy(Hy(e), t) : function(n) {
    var r = Gy(n, e);
    return r === void 0 && r === t ? zy(n, e) : Ly(t, r, Yy | Ky);
  };
}
var Jy = qy;
function Zy(e) {
  return e;
}
var qr = Zy;
function Qy(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var Xy = Qy, ev = Kr;
function tv(e) {
  return function(t) {
    return ev(t, e);
  };
}
var nv = tv, rv = Xy, ov = nv, iv = Hr, av = jt;
function sv(e) {
  return iv(e) ? rv(av(e)) : ov(e);
}
var lv = sv, cv = Mh, uv = Jy, dv = qr, fv = ze, pv = lv;
function mv(e) {
  return typeof e == "function" ? e : e == null ? dv : typeof e == "object" ? fv(e) ? uv(e[0], e[1]) : cv(e) : pv(e);
}
var gv = mv, hv = nt, yv = function() {
  try {
    var e = hv(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), ba = yv, Ko = ba;
function vv(e, t, n) {
  t == "__proto__" && Ko ? Ko(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var Jr = vv, _v = Jr, wv = Vt, Sv = Object.prototype, bv = Sv.hasOwnProperty;
function Cv(e, t, n) {
  var r = e[t];
  (!(bv.call(e, t) && wv(r, n)) || n === void 0 && !(t in e)) && _v(e, t, n);
}
var Ca = Cv, Av = Ca, Iv = Gn, Ev = Bn, qo = Ge, Tv = jt;
function Pv(e, t, n, r) {
  if (!qo(e))
    return e;
  t = Iv(t, e);
  for (var o = -1, i = t.length, a = i - 1, s = e; s != null && ++o < i; ) {
    var l = Tv(t[o]), c = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (o != a) {
      var u = s[l];
      c = r ? r(u, l, s) : void 0, c === void 0 && (c = qo(u) ? u : Ev(t[o + 1]) ? [] : {});
    }
    Av(s, l, c), s = s[l];
  }
  return e;
}
var kv = Pv, Nv = Kr, Uv = kv, $v = Gn;
function Fv(e, t, n) {
  for (var r = -1, o = t.length, i = {}; ++r < o; ) {
    var a = t[r], s = Nv(e, a);
    n(s, a) && Uv(i, $v(a, e), s);
  }
  return i;
}
var Ov = Fv, Rv = pa, xv = Rv(Object.getPrototypeOf, Object), Zr = xv, Mv = sa, Dv = Zr, Bv = ua, Lv = ca, Gv = Object.getOwnPropertySymbols, zv = Gv ? function(e) {
  for (var t = []; e; )
    Mv(t, Bv(e)), e = Dv(e);
  return t;
} : Lv, Wv = zv;
function Vv(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var jv = Vv, Hv = Ge, Yv = Vr, Kv = jv, qv = Object.prototype, Jv = qv.hasOwnProperty;
function Zv(e) {
  if (!Hv(e))
    return Kv(e);
  var t = Yv(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !Jv.call(e, r)) || n.push(r);
  return n;
}
var Qv = Zv, Xv = fa, e_ = Qv, t_ = Ln;
function n_(e) {
  return t_(e) ? Xv(e, !0) : e_(e);
}
var Qr = n_, r_ = la, o_ = Wv, i_ = Qr;
function a_(e) {
  return r_(e, i_, o_);
}
var s_ = a_, l_ = ta, c_ = gv, u_ = Ov, d_ = s_;
function f_(e, t) {
  if (e == null)
    return {};
  var n = l_(d_(e), function(r) {
    return [r];
  });
  return t = c_(t), u_(e, n, function(r, o) {
    return t(r, o[0]);
  });
}
var p_ = f_;
const m_ = /* @__PURE__ */ ea(p_), g_ = !0, h_ = "", zn = (e, t) => `${e}${t}`.replace(/[^A-Z0-9+]/gi, ""), y_ = (e, t) => {
  switch (t) {
    case "address":
    case "birthdate":
    case "email":
    case "family_name":
    case "gender":
    case "given_name":
    case "locale":
    case "middle_name":
    case "name":
    case "nickname":
    case "phone_number":
    case "picture":
    case "preferred_username":
    case "profile":
    case "updated_at":
    case "website":
    case "zoneinfo":
      return !0;
    default:
      return t.startsWith("custom:");
  }
}, v_ = (e) => {
  const { phone_number: t, ...n } = m_(e, y_);
  if (_i(t) && t !== h_) {
    const { country_code: r } = e;
    return {
      ...n,
      phone_number: zn(r, t)
    };
  }
  return n;
}, __ = (e, t, n) => {
  const { password: r, ...o } = t, i = v_(o), a = {
    autoSignIn: g_,
    userAttributes: {
      // use `username` value for `phone_number`
      ...n === "phone_number" ? { ...i, phone_number: e } : i
    }
  };
  return { username: e, password: r, options: a };
}, w_ = ({ formValues: e, loginMechanisms: t }) => {
  const n = t[0];
  if (n === "phone_number") {
    const { country_code: r, phone_number: o } = e;
    return zn(r, o);
  }
  return e[n];
}, { assign: J } = Yi, S_ = J({ actorDoneData: void 0 }), b_ = J({ challengeName: void 0 }), C_ = J({ missingAttributes: void 0 }), A_ = J({ remoteError: void 0 }), I_ = J({ formValues: {} }), E_ = J({ touched: {} }), T_ = J({ user: void 0 }), P_ = J({ validationError: {} }), k_ = J({
  totpSecretCode: (e, { data: t }) => {
    var r;
    const { sharedSecret: n } = ((r = t.nextStep) == null ? void 0 : r.totpSetupDetails) ?? {};
    return n;
  }
}), N_ = J({ step: "SIGN_IN" }), U_ = J({
  step: "SHOULD_CONFIRM_USER_ATTRIBUTE"
}), $_ = J({
  step: "CONFIRM_ATTRIBUTE_COMPLETE"
}), F_ = J({
  challengeName: (e, { data: t }) => {
    const { signInStep: n } = t.nextStep;
    return n === "CONFIRM_SIGN_IN_WITH_SMS_CODE" ? "SMS_MFA" : n === "CONFIRM_SIGN_IN_WITH_TOTP_CODE" ? "SOFTWARE_TOKEN_MFA" : void 0;
  }
}), O_ = J({
  username: ({ formValues: e, loginMechanisms: t }) => {
    const n = t[0], { username: r, country_code: o } = e;
    return n === "phone_number" ? zn(o, r) : r;
  }
}), R_ = J({ username: w_ }), x_ = J({
  username: ({ formValues: e, loginMechanisms: t }) => {
    const n = t[0], { username: r, country_code: o } = e;
    return n === "phone_number" ? zn(o, r) : r;
  }
}), M_ = J({
  step: (e, { data: t }) => t.nextStep.signInStep === "DONE" ? "SIGN_IN_COMPLETE" : t.nextStep.signInStep
}), D_ = J({
  step: (e, { data: t }) => t.nextStep.signUpStep === "DONE" ? "SIGN_UP_COMPLETE" : t.nextStep.signUpStep
}), B_ = J({
  step: (e, { data: t }) => t.nextStep.resetPasswordStep === "DONE" ? "RESET_PASSWORD_COMPLETE" : t.nextStep.resetPasswordStep
}), L_ = J({
  missingAttributes: (e, { data: t }) => {
    var n;
    return (n = t.nextStep) == null ? void 0 : n.missingAttributes;
  }
}), G_ = J({
  validationError: (e, { data: t }) => t
}), z_ = J({
  remoteError: (e, { data: t }) => t.name === "NoUserPoolError" ? "Configuration error (see console) – please contact the administrator" : (t == null ? void 0 : t.message) || t
}), W_ = J({ user: (e, { data: t }) => t }), Jo = (e) => ({
  Destination: e.destination,
  DeliveryMedium: e.deliveryMedium,
  AttributeName: e.attributName
}), V_ = J({
  codeDeliveryDetails: (e, { data: t }) => {
    var n;
    return (n = t == null ? void 0 : t.nextStep) != null && n.codeDeliveryDetails ? Jo(t.nextStep.codeDeliveryDetails) : Jo(t);
  }
}), j_ = J({
  formValues: (e, { data: t }) => {
    const { name: n, value: r } = t;
    return { ...e.formValues, [n]: r };
  }
}), H_ = J({
  formValues: (e, { data: t }) => (
    // do not trim password
    ll({ ...e.formValues, ...t }, "password")
  )
}), Y_ = J({
  touched: (e, { data: t }) => ({
    ...e.touched,
    [t.name]: !0
  })
}), K_ = J({
  unverifiedUserAttributes: (e, { data: t }) => {
    const { email: n, phone_number: r } = t;
    return {
      ...n && { email: n },
      ...r && { phone_number: r }
    };
  }
}), q_ = J({ selectedUserAttribute: void 0 }), J_ = J({
  selectedUserAttribute: (e) => {
    var t;
    return (t = e.formValues) == null ? void 0 : t.unverifiedAttr;
  }
}), Z_ = J({ step: "CONFIRM_SIGN_UP" }), Ht = {
  clearActorDoneData: S_,
  clearChallengeName: b_,
  clearError: A_,
  clearFormValues: I_,
  clearMissingAttributes: C_,
  clearSelectedUserAttribute: q_,
  clearTouched: E_,
  clearUser: T_,
  clearValidationError: P_,
  handleBlur: Y_,
  handleInput: j_,
  handleSubmit: H_,
  setChallengeName: F_,
  setCodeDeliveryDetails: V_,
  setFieldErrors: G_,
  setMissingAttributes: L_,
  setNextResetPasswordStep: B_,
  setNextSignInStep: M_,
  setNextSignUpStep: D_,
  setRemoteError: z_,
  setConfirmAttributeCompleteStep: $_,
  setConfirmSignUpSignUpStep: Z_,
  setShouldVerifyUserAttributeStep: U_,
  setSelectedUserAttribute: J_,
  setSignInStep: N_,
  setTotpSecretCode: k_,
  setUser: W_,
  setUnverifiedUserAttributes: K_,
  setUsernameForgotPassword: O_,
  setUsernameSignIn: x_,
  setUsernameSignUp: R_
}, Q_ = [
  "CONFIRM_SIGN_IN_WITH_SMS_CODE",
  "CONFIRM_SIGN_IN_WITH_TOTP_CODE"
], X_ = (e, { data: t }) => (t == null ? void 0 : t.nextStep.signInStep) === "CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED", ew = (e, { data: t }) => {
  var n;
  return ((n = t == null ? void 0 : t.nextStep) == null ? void 0 : n.signInStep) === "RESET_PASSWORD";
}, tw = (e, { data: t }) => (t == null ? void 0 : t.nextStep.signInStep) === "CONFIRM_SIGN_UP", nw = (e, { data: t }) => (t == null ? void 0 : t.nextStep.signUpStep) === "COMPLETE_AUTO_SIGN_IN", rw = (e, { data: t }) => (t == null ? void 0 : t.nextStep.signInStep) === "DONE", ow = (e, { data: t }) => (t == null ? void 0 : t.nextStep.signUpStep) === "DONE", iw = (e, { data: t }) => (t == null ? void 0 : t.nextStep.resetPasswordStep) === "DONE", aw = (e, { data: t }) => (t == null ? void 0 : t.step) === "CONFIRM_ATTRIBUTE_COMPLETE", sw = (e, { data: t }) => (t == null ? void 0 : t.step) === "CONFIRM_ATTRIBUTE_WITH_CODE", lw = (e, { data: t }) => (t == null ? void 0 : t.step) === "SHOULD_CONFIRM_USER_ATTRIBUTE", cw = (e, { data: t }) => (t == null ? void 0 : t.step) === "RESET_PASSWORD", uw = (e, { data: t }) => (t == null ? void 0 : t.step) === "CONFIRM_SIGN_UP", dw = ({ step: e }) => Q_.includes(e), fw = ({ step: e }) => e === "CONTINUE_SIGN_IN_WITH_TOTP_SETUP", pw = ({ step: e }) => e === "RESET_PASSWORD", mw = ({ step: e }) => e === "CONFIRM_RESET_PASSWORD_WITH_CODE", gw = ({ step: e }) => e === "CONFIRM_SIGN_UP", hw = (e, { data: t }) => {
  const { phone_number_verified: n, email_verified: r } = t;
  return (r === void 0 || r === "false") && (n === void 0 || n === "false");
}, yw = (e, { data: t }) => t.message === "User is already confirmed.", Wn = {
  hasCompletedAttributeConfirmation: aw,
  hasCompletedResetPassword: iw,
  hasCompletedSignIn: rw,
  hasCompletedSignUp: ow,
  isConfirmSignUpStep: uw,
  isConfirmUserAttributeStep: sw,
  isResetPasswordStep: cw,
  isShouldConfirmUserAttributeStep: lw,
  isUserAlreadyConfirmed: yw,
  shouldAutoSignIn: nw,
  shouldConfirmResetPassword: mw,
  shouldConfirmSignIn: dw,
  shouldConfirmSignInWithNewPassword: X_,
  shouldConfirmSignUp: gw,
  shouldConfirmSignUpFromSignIn: tw,
  shouldResetPassword: pw,
  shouldResetPasswordFromSignIn: ew,
  shouldSetupTotp: fw,
  shouldVerifyAttribute: hw
};
var vw = Jr, _w = Vt;
function ww(e, t, n) {
  (n !== void 0 && !_w(e[t], n) || n === void 0 && !(t in e)) && vw(e, t, n);
}
var Aa = ww;
function Sw(e) {
  return function(t, n, r) {
    for (var o = -1, i = Object(t), a = r(t), s = a.length; s--; ) {
      var l = a[e ? s : ++o];
      if (n(i[l], l, i) === !1)
        break;
    }
    return t;
  };
}
var bw = Sw, Cw = bw, Aw = Cw(), Iw = Aw, Sn = { exports: {} };
Sn.exports;
(function(e, t) {
  var n = Fe, r = t && !t.nodeType && t, o = r && !0 && e && !e.nodeType && e, i = o && o.exports === r, a = i ? n.Buffer : void 0, s = a ? a.allocUnsafe : void 0;
  function l(c, u) {
    if (u)
      return c.slice();
    var m = c.length, f = s ? s(m) : new c.constructor(m);
    return c.copy(f), f;
  }
  e.exports = l;
})(Sn, Sn.exports);
var Ew = Sn.exports, Zo = aa;
function Tw(e) {
  var t = new e.constructor(e.byteLength);
  return new Zo(t).set(new Zo(e)), t;
}
var Pw = Tw, kw = Pw;
function Nw(e, t) {
  var n = t ? kw(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var Uw = Nw;
function $w(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var Fw = $w, Ow = Ge, Qo = Object.create, Rw = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!Ow(t))
      return {};
    if (Qo)
      return Qo(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}(), xw = Rw, Mw = xw, Dw = Zr, Bw = Vr;
function Lw(e) {
  return typeof e.constructor == "function" && !Bw(e) ? Mw(Dw(e)) : {};
}
var Gw = Lw, zw = Ln, Ww = rt;
function Vw(e) {
  return Ww(e) && zw(e);
}
var jw = Vw, Hw = St, Yw = Zr, Kw = rt, qw = "[object Object]", Jw = Function.prototype, Zw = Object.prototype, Ia = Jw.toString, Qw = Zw.hasOwnProperty, Xw = Ia.call(Object);
function eS(e) {
  if (!Kw(e) || Hw(e) != qw)
    return !1;
  var t = Yw(e);
  if (t === null)
    return !0;
  var n = Qw.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Ia.call(n) == Xw;
}
var tS = eS;
function nS(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var Ea = nS, rS = Ca, oS = Jr;
function iS(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var i = -1, a = t.length; ++i < a; ) {
    var s = t[i], l = r ? r(n[s], e[s], s, n, e) : void 0;
    l === void 0 && (l = e[s]), o ? oS(n, s, l) : rS(n, s, l);
  }
  return n;
}
var aS = iS, sS = aS, lS = Qr;
function cS(e) {
  return sS(e, lS(e));
}
var uS = cS, Xo = Aa, dS = Ew, fS = Uw, pS = Fw, mS = Gw, ei = Lr, ti = ze, gS = jw, hS = Gr, yS = xr, vS = Ge, _S = tS, wS = Wr, ni = Ea, SS = uS;
function bS(e, t, n, r, o, i, a) {
  var s = ni(e, n), l = ni(t, n), c = a.get(l);
  if (c) {
    Xo(e, n, c);
    return;
  }
  var u = i ? i(s, l, n + "", e, t, a) : void 0, m = u === void 0;
  if (m) {
    var f = ti(l), p = !f && hS(l), h = !f && !p && wS(l);
    u = l, f || p || h ? ti(s) ? u = s : gS(s) ? u = pS(s) : p ? (m = !1, u = dS(l, !0)) : h ? (m = !1, u = fS(l, !0)) : u = [] : _S(l) || ei(l) ? (u = s, ei(s) ? u = SS(s) : (!vS(s) || yS(s)) && (u = mS(l))) : m = !1;
  }
  m && (a.set(l, u), o(u, l, r, i, a), a.delete(l)), Xo(e, n, u);
}
var CS = bS, AS = Br, IS = Aa, ES = Iw, TS = CS, PS = Ge, kS = Qr, NS = Ea;
function Ta(e, t, n, r, o) {
  e !== t && ES(t, function(i, a) {
    if (o || (o = new AS()), PS(i))
      TS(e, t, a, n, Ta, r, o);
    else {
      var s = r ? r(NS(e, a), i, a + "", e, t, o) : void 0;
      s === void 0 && (s = i), IS(e, a, s);
    }
  }, kS);
}
var US = Ta;
function $S(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var FS = $S, OS = FS, ri = Math.max;
function RS(e, t, n) {
  return t = ri(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, i = ri(r.length - t, 0), a = Array(i); ++o < i; )
      a[o] = r[t + o];
    o = -1;
    for (var s = Array(t + 1); ++o < t; )
      s[o] = r[o];
    return s[t] = n(a), OS(e, this, s);
  };
}
var xS = RS;
function MS(e) {
  return function() {
    return e;
  };
}
var DS = MS, BS = DS, oi = ba, LS = qr, GS = oi ? function(e, t) {
  return oi(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: BS(t),
    writable: !0
  });
} : LS, zS = GS, WS = 800, VS = 16, jS = Date.now;
function HS(e) {
  var t = 0, n = 0;
  return function() {
    var r = jS(), o = VS - (r - n);
    if (n = r, o > 0) {
      if (++t >= WS)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var YS = HS, KS = zS, qS = YS, JS = qS(KS), ZS = JS, QS = qr, XS = xS, eb = ZS;
function tb(e, t) {
  return eb(XS(e, t, QS), e + "");
}
var nb = tb, rb = Vt, ob = Ln, ib = Bn, ab = Ge;
function sb(e, t, n) {
  if (!ab(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? ob(n) && ib(t, n.length) : r == "string" && t in n) ? rb(n[t], e) : !1;
}
var lb = sb, cb = nb, ub = lb;
function db(e) {
  return cb(function(t, n) {
    var r = -1, o = n.length, i = o > 1 ? n[o - 1] : void 0, a = o > 2 ? n[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (o--, i) : void 0, a && ub(n[0], n[1], a) && (i = o < 3 ? void 0 : i, o = 1), t = Object(t); ++r < o; ) {
      var s = n[r];
      s && e(t, s, r, i);
    }
    return t;
  });
}
var fb = db, pb = US, mb = fb, gb = mb(function(e, t, n) {
  pb(e, t, n);
}), hb = gb;
const yb = /* @__PURE__ */ ea(hb), Vn = async (e, t, n, r) => {
  const o = await Promise.all(r.map((a) => a(e, t, n))), i = yb({}, ...o);
  return wi(i) ? Promise.resolve() : Promise.reject(i);
}, vb = 8, _b = (e) => Array.isArray(e), wb = (e) => {
  if (e)
    return _b(e) ? Object.entries(e).map(([t, n]) => Object.keys(n)[0]) : Object.keys(e);
}, qe = {
  async getAmplifyConfig() {
    var s, l, c, u;
    const e = Ps.getConfig(), t = (s = e.Auth) == null ? void 0 : s.Cognito, { loginWith: n, userAttributes: r } = ((l = e.Auth) == null ? void 0 : l.Cognito) ?? {}, o = n ? Object.entries(n).filter(([m, f]) => m !== "oauth").filter(([m, f]) => !!f).map((m) => m[0] === "phone" ? "phone_number" : m[0]) : void 0, i = wb(r), a = (c = n == null ? void 0 : n.oauth) != null && c.providers ? (u = n.oauth.providers) == null ? void 0 : u.map((m) => m.toString().toLowerCase()) : void 0;
    return {
      ...t,
      loginMechanisms: o,
      signUpAttributes: i,
      socialProviders: a
    };
  },
  getCurrentUser: fi,
  handleSignIn: _s,
  handleSignUp: ws,
  handleConfirmSignIn: pi,
  handleConfirmSignUp: Ss,
  handleForgotPasswordSubmit: bs,
  handleForgotPassword: mi,
  // Validation hooks for overriding
  async validateCustomSignUp(e, t) {
  },
  async validateFormPassword(e, t, n) {
    const { password: r } = e, { password: o } = t;
    if (!o || !n)
      return null;
    const i = [], a = n.minLength ?? vb;
    return r.length < a && i.push(`Password must have at least ${a} characters`), n.requireLowercase && !/[a-z]/.test(r) && i.push("Password must have lower case letters"), n.requireUppercase && !/[A-Z]/.test(r) && i.push("Password must have upper case letters"), n.requireNumbers && !/[0-9]/.test(r) && i.push("Password must have numbers"), n.requireSpecialCharacters && !al(r) && i.push("Password must have special characters"), i.length !== 0 ? { password: i } : null;
  },
  async validateConfirmPassword(e, t) {
    const { password: n, confirm_password: r } = e, { confirm_password: o, password: i } = t;
    if (!n && !r)
      return null;
    if ((n || r) && n !== r && (o && i || (n == null ? void 0 : n.length) >= 6 && (r == null ? void 0 : r.length) >= 6))
      return {
        confirm_password: "Your passwords must match"
      };
  },
  async validatePreferredUsername(e, t) {
  }
};
function Sb({ services: e }) {
  return _t({
    id: "forgotPasswordActor",
    initial: "init",
    predictableActionArguments: !0,
    states: {
      init: {
        always: [
          {
            cond: "shouldResetPassword",
            target: "confirmResetPassword"
          },
          {
            cond: "shouldConfirmResetPassword",
            target: "confirmResetPassword"
          },
          {
            target: "forgotPassword"
          }
        ]
      },
      forgotPassword: {
        initial: "edit",
        entry: "sendUpdate",
        exit: ["clearError", "clearTouched"],
        states: {
          edit: {
            entry: "sendUpdate",
            on: {
              SUBMIT: { actions: "handleSubmit", target: "submit" },
              CHANGE: { actions: "handleInput" },
              BLUR: { actions: "handleBlur" }
            }
          },
          submit: {
            tags: "pending",
            entry: ["sendUpdate", "clearError", "setUsernameForgotPassword"],
            invoke: {
              src: "handleResetPassword",
              onDone: {
                actions: [
                  "setCodeDeliveryDetails",
                  "setNextResetPasswordStep"
                ],
                target: "#forgotPasswordActor.confirmResetPassword"
              },
              onError: {
                actions: "setRemoteError",
                target: "edit"
              }
            }
          }
        }
      },
      confirmResetPassword: {
        type: "parallel",
        exit: ["clearFormValues", "clearError", "clearTouched"],
        states: {
          validation: {
            initial: "pending",
            states: {
              pending: {
                invoke: {
                  src: "validateFields",
                  onDone: {
                    target: "valid",
                    actions: "clearValidationError"
                  },
                  onError: {
                    target: "invalid",
                    actions: "setFieldErrors"
                  }
                }
              },
              valid: { entry: "sendUpdate" },
              invalid: { entry: "sendUpdate" }
            },
            on: {
              CHANGE: {
                actions: "handleInput",
                target: ".pending"
              },
              BLUR: {
                actions: "handleBlur",
                target: ".pending"
              }
            }
          },
          submission: {
            initial: "idle",
            states: {
              idle: {
                entry: "sendUpdate",
                on: {
                  SUBMIT: { actions: "handleSubmit", target: "validate" },
                  RESEND: "resendCode",
                  CHANGE: { actions: "handleInput" },
                  BLUR: { actions: "handleBlur" }
                }
              },
              validate: {
                entry: "sendUpdate",
                invoke: {
                  src: "validateFields",
                  onDone: {
                    target: "pending",
                    actions: "clearValidationError"
                  },
                  onError: {
                    target: "idle",
                    actions: "setFieldErrors"
                  }
                }
              },
              resendCode: {
                tags: "pending",
                entry: ["clearError", "sendUpdate"],
                invoke: {
                  src: "handleResetPassword",
                  onDone: { target: "idle" },
                  onError: { actions: "setRemoteError", target: "idle" }
                }
              },
              pending: {
                tags: "pending",
                entry: ["clearError", "sendUpdate"],
                invoke: {
                  src: "handleConfirmResetPassword",
                  onDone: [
                    {
                      cond: "hasCompletedResetPassword",
                      actions: "setNextResetPasswordStep",
                      target: "#forgotPasswordActor.resolved"
                    },
                    {
                      actions: "setSignInStep",
                      target: "#forgotPasswordActor.resolved"
                    }
                  ],
                  onError: { actions: "setRemoteError", target: "idle" }
                }
              }
            }
          }
        }
      },
      resolved: {
        type: "final",
        data: ({ step: t }) => ({ step: t })
      }
    }
  }, {
    // sendUpdate is a HOC
    actions: { ...Ht, sendUpdate: Fn() },
    guards: Wn,
    services: {
      handleResetPassword({ username: t }) {
        return e.handleForgotPassword({ username: t });
      },
      handleConfirmResetPassword({ formValues: t, username: n }) {
        const { confirmation_code: r, password: o } = t;
        return e.handleForgotPasswordSubmit({
          confirmationCode: r,
          newPassword: o,
          username: n
        });
      },
      validateFields(t) {
        return Vn(t.formValues, t.touched, t.passwordSettings, [
          qe.validateFormPassword,
          qe.validateConfirmPassword
        ]);
      }
    }
  });
}
const Pa = (e) => ({
  entry: ["sendUpdate", "clearError"],
  invoke: {
    src: "signInWithRedirect",
    onDone: { target: e },
    onError: { actions: "setRemoteError", target: e }
  }
}), tn = {
  onDone: [
    {
      cond: "hasCompletedSignIn",
      actions: "setNextSignInStep",
      target: "#signInActor.fetchUserAttributes"
    },
    {
      cond: "shouldConfirmSignInWithNewPassword",
      actions: ["setMissingAttributes", "setNextSignInStep"],
      target: "#signInActor.forceChangePassword"
    },
    {
      cond: "shouldResetPasswordFromSignIn",
      actions: "setNextSignInStep",
      target: "#signInActor.resetPassword"
    },
    {
      cond: "shouldConfirmSignUpFromSignIn",
      actions: "setNextSignInStep",
      target: "#signInActor.resendSignUpCode"
    },
    {
      actions: [
        "setChallengeName",
        "setMissingAttributes",
        "setNextSignInStep",
        "setTotpSecretCode"
      ],
      target: "#signInActor.init"
    }
  ],
  onError: { actions: "setRemoteError", target: "edit" }
}, bb = {
  onDone: [
    {
      cond: "shouldVerifyAttribute",
      actions: [
        "setShouldVerifyUserAttributeStep",
        "setUnverifiedUserAttributes"
      ],
      target: "#signInActor.resolved"
    },
    {
      actions: "setConfirmAttributeCompleteStep",
      target: "#signInActor.resolved"
    }
  ],
  onError: {
    actions: "setConfirmAttributeCompleteStep",
    target: "#signInActor.resolved"
  }
};
function Cb({ services: e }) {
  return _t({
    id: "signInActor",
    initial: "init",
    predictableActionArguments: !0,
    states: {
      init: {
        always: [
          {
            cond: "shouldConfirmSignIn",
            target: "confirmSignIn"
          },
          {
            cond: "shouldSetupTotp",
            target: "setupTotp"
          },
          {
            cond: ({ step: t }) => t === "CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED",
            actions: "setActorDoneData",
            target: "forceChangePassword"
          },
          { target: "signIn" }
        ]
      },
      federatedSignIn: Pa("signIn"),
      fetchUserAttributes: {
        invoke: {
          src: "fetchUserAttributes",
          ...bb
        }
      },
      resendSignUpCode: {
        invoke: {
          src: "handleResendSignUpCode",
          onDone: {
            actions: "setCodeDeliveryDetails",
            target: "#signInActor.resolved"
          },
          onError: {
            actions: "setRemoteError",
            target: "#signInActor.signIn"
          }
        }
      },
      resetPassword: {
        invoke: {
          src: "resetPassword",
          onDone: [
            {
              actions: "setCodeDeliveryDetails",
              target: "#signInActor.resolved"
            }
          ],
          onError: { actions: ["setRemoteError", "sendUpdate"] }
        }
      },
      signIn: {
        initial: "edit",
        exit: "clearTouched",
        states: {
          edit: {
            entry: "sendUpdate",
            on: {
              CHANGE: { actions: "handleInput" },
              FEDERATED_SIGN_IN: { target: "#signInActor.federatedSignIn" },
              SUBMIT: { actions: "handleSubmit", target: "submit" }
            }
          },
          submit: {
            tags: "pending",
            entry: ["clearError", "sendUpdate", "setUsernameSignIn"],
            exit: "clearFormValues",
            invoke: { src: "handleSignIn", ...tn }
          }
        }
      },
      confirmSignIn: {
        initial: "edit",
        exit: [
          "clearChallengeName",
          "clearFormValues",
          "clearError",
          "clearTouched"
        ],
        states: {
          edit: {
            entry: "sendUpdate",
            on: {
              SUBMIT: { actions: "handleSubmit", target: "submit" },
              SIGN_IN: "#signInActor.signIn",
              CHANGE: { actions: "handleInput" }
            }
          },
          submit: {
            tags: "pending",
            entry: ["clearError", "sendUpdate"],
            invoke: {
              src: "confirmSignIn",
              ...tn
            }
          }
        }
      },
      forceChangePassword: {
        entry: "sendUpdate",
        type: "parallel",
        exit: ["clearFormValues", "clearError", "clearTouched"],
        states: {
          validation: {
            initial: "pending",
            states: {
              pending: {
                invoke: {
                  src: "validateFields",
                  onDone: {
                    target: "valid",
                    actions: "clearValidationError"
                  },
                  onError: {
                    target: "invalid",
                    actions: "setFieldErrors"
                  }
                }
              },
              valid: { entry: "sendUpdate" },
              invalid: { entry: "sendUpdate" }
            },
            on: {
              SIGN_IN: {
                actions: "setSignInStep",
                target: "#signInActor.resolved"
              },
              CHANGE: {
                actions: "handleInput",
                target: ".pending"
              },
              BLUR: {
                actions: "handleBlur",
                target: ".pending"
              }
            }
          },
          submit: {
            initial: "edit",
            entry: "clearError",
            states: {
              edit: {
                entry: "sendUpdate",
                on: {
                  SUBMIT: { actions: "handleSubmit", target: "validate" }
                }
              },
              validate: {
                entry: "sendUpdate",
                invoke: {
                  src: "validateFields",
                  onDone: {
                    actions: "clearValidationError",
                    target: "pending"
                  },
                  onError: { actions: "setFieldErrors", target: "edit" }
                }
              },
              pending: {
                tags: "pending",
                entry: ["sendUpdate", "clearError"],
                invoke: {
                  src: "handleForceChangePassword",
                  ...tn
                }
              }
            }
          }
        }
      },
      setupTotp: {
        initial: "edit",
        exit: ["clearFormValues", "clearError", "clearTouched"],
        states: {
          edit: {
            entry: "sendUpdate",
            on: {
              SUBMIT: { actions: "handleSubmit", target: "submit" },
              SIGN_IN: "#signInActor.signIn",
              CHANGE: { actions: "handleInput" }
            }
          },
          submit: {
            tags: "pending",
            entry: ["sendUpdate", "clearError"],
            invoke: { src: "confirmSignIn", ...tn }
          }
        }
      },
      resolved: {
        type: "final",
        data: (t) => ({
          codeDeliveryDetails: t.codeDeliveryDetails,
          remoteError: t.remoteError,
          step: t.step,
          unverifiedUserAttributes: t.unverifiedUserAttributes,
          username: t.username
        })
      }
    }
  }, {
    // sendUpdate is a HOC
    actions: { ...Ht, sendUpdate: Fn() },
    guards: Wn,
    services: {
      async fetchUserAttributes() {
        return gi();
      },
      resetPassword({ username: t }) {
        return mi({ username: t });
      },
      handleResendSignUpCode({ username: t }) {
        return hi({ username: t });
      },
      handleSignIn({ formValues: t, username: n }) {
        const { password: r } = t;
        return e.handleSignIn({ username: n, password: r });
      },
      confirmSignIn({ formValues: t }) {
        const { confirmation_code: n } = t;
        return e.handleConfirmSignIn({ challengeResponse: n });
      },
      async handleForceChangePassword({ formValues: t }) {
        let {
          password: n,
          phone_number: r,
          country_code: o,
          // destructure and toss UI confirm_password field
          // to prevent error from sending to confirmSignIn
          confirm_password: i,
          ...a
        } = t, s;
        return r && (s = `${o}${r}`.replace(/[^A-Z0-9+]/gi, ""), a = {
          ...a,
          phone_number: s
        }), pi({
          challengeResponse: n,
          options: { userAttributes: a }
        });
      },
      signInWithRedirect(t, { data: n }) {
        return yi(n);
      },
      async validateFields(t) {
        return Vn(t.formValues, t.touched, t.passwordSettings, [
          qe.validateFormPassword,
          qe.validateConfirmPassword
        ]);
      }
    }
  });
}
const Ab = {
  onDone: [
    { actions: "setCodeDeliveryDetails", target: "#signUpActor.resolved" }
  ],
  onError: { actions: ["setRemoteError", "sendUpdate"] }
}, Ib = {
  onDone: [
    {
      cond: "hasCompletedSignIn",
      actions: "setNextSignInStep",
      target: "#signUpActor.fetchUserAttributes"
    },
    {
      cond: "shouldConfirmSignInWithNewPassword",
      actions: "setNextSignInStep",
      target: "#signUpActor.resolved"
    },
    {
      cond: "shouldResetPasswordFromSignIn",
      actions: "setNextSignInStep",
      target: "#signUpActor.resetPassword"
    },
    {
      cond: "shouldConfirmSignUpFromSignIn",
      actions: "setNextSignInStep",
      target: "#signUpActor.resendSignUpCode"
    },
    {
      actions: [
        "setNextSignInStep",
        "setChallengeName",
        "setMissingAttributes",
        "setTotpSecretCode"
      ],
      target: "#signUpActor.resolved"
    }
  ],
  onError: {
    actions: "setRemoteError",
    target: "#signUpActor.resolved"
  }
}, Eb = {
  onDone: [
    {
      cond: "shouldVerifyAttribute",
      actions: [
        "setShouldVerifyUserAttributeStep",
        "setUnverifiedUserAttributes"
      ],
      target: "#signUpActor.resolved"
    },
    {
      actions: "setConfirmAttributeCompleteStep",
      target: "#signUpActor.resolved"
    }
  ],
  onError: {
    actions: "setConfirmAttributeCompleteStep",
    target: "#signUpActor.resolved"
  }
};
function Tb({ services: e }) {
  return _t({
    id: "signUpActor",
    initial: "init",
    predictableActionArguments: !0,
    states: {
      init: {
        always: [
          { cond: "shouldConfirmSignUp", target: "confirmSignUp" },
          { target: "signUp" }
        ]
      },
      autoSignIn: {
        tags: "pending",
        invoke: { src: "autoSignIn", ...Ib }
      },
      fetchUserAttributes: {
        invoke: {
          src: "fetchUserAttributes",
          ...Eb
        }
      },
      federatedSignIn: Pa("signUp"),
      resetPassword: {
        invoke: { src: "resetPassword", ...Ab }
      },
      resendSignUpCode: {
        tags: "pending",
        entry: "sendUpdate",
        exit: "sendUpdate",
        invoke: {
          src: "resendSignUpCode",
          onDone: {
            actions: ["setCodeDeliveryDetails", "sendUpdate"],
            target: "#signUpActor.confirmSignUp"
          },
          onError: [
            {
              cond: "isUserAlreadyConfirmed",
              target: "#signUpActor.resolved"
            },
            { actions: ["setRemoteError", "sendUpdate"] }
          ]
        }
      },
      signUp: {
        type: "parallel",
        exit: "clearTouched",
        on: {
          FEDERATED_SIGN_IN: { target: "federatedSignIn" }
        },
        states: {
          validation: {
            initial: "pending",
            states: {
              pending: {
                invoke: {
                  src: "validateSignUp",
                  onDone: {
                    actions: "clearValidationError",
                    target: "valid"
                  },
                  onError: { actions: "setFieldErrors", target: "invalid" }
                }
              },
              valid: { entry: "sendUpdate" },
              invalid: { entry: "sendUpdate" }
            },
            on: {
              BLUR: { actions: "handleBlur", target: ".pending" },
              CHANGE: { actions: "handleInput", target: ".pending" }
            }
          },
          submission: {
            initial: "idle",
            states: {
              idle: {
                entry: ["sendUpdate"],
                on: {
                  SUBMIT: { actions: "handleSubmit", target: "validate" }
                }
              },
              validate: {
                entry: "sendUpdate",
                invoke: {
                  src: "validateSignUp",
                  onDone: {
                    target: "handleSignUp",
                    actions: "clearValidationError"
                  },
                  onError: { actions: "setFieldErrors", target: "idle" }
                }
              },
              handleSignUp: {
                tags: "pending",
                entry: ["setUsernameSignUp", "clearError"],
                exit: "sendUpdate",
                invoke: {
                  src: "handleSignUp",
                  onDone: [
                    {
                      cond: "hasCompletedSignUp",
                      actions: "setNextSignUpStep",
                      target: "#signUpActor.resolved"
                    },
                    {
                      cond: "shouldAutoSignIn",
                      actions: "setNextSignUpStep",
                      target: "#signUpActor.autoSignIn"
                    },
                    {
                      actions: [
                        "setCodeDeliveryDetails",
                        "setNextSignUpStep"
                      ],
                      target: "#signUpActor.init"
                    }
                  ],
                  onError: {
                    actions: ["sendUpdate", "setRemoteError"],
                    target: "idle"
                  }
                }
              }
            }
          }
        }
      },
      confirmSignUp: {
        initial: "edit",
        entry: "sendUpdate",
        states: {
          edit: {
            on: {
              SUBMIT: { actions: "handleSubmit", target: "submit" },
              CHANGE: { actions: "handleInput" },
              BLUR: { actions: "handleBlur" },
              RESEND: "#signUpActor.resendSignUpCode"
            }
          },
          submit: {
            tags: "pending",
            entry: ["clearError", "sendUpdate"],
            invoke: {
              src: "confirmSignUp",
              onDone: [
                {
                  cond: "shouldAutoSignIn",
                  actions: ["setNextSignUpStep", "clearFormValues"],
                  target: "#signUpActor.autoSignIn"
                },
                {
                  actions: "setNextSignUpStep",
                  target: "#signUpActor.init"
                }
              ],
              onError: {
                actions: ["setRemoteError", "sendUpdate"],
                target: "edit"
              }
            }
          }
        }
      },
      resolved: {
        type: "final",
        data: (t) => ({
          challengeName: t.challengeName,
          missingAttributes: t.missingAttributes,
          remoteError: t.remoteError,
          step: t.step,
          totpSecretCode: t.totpSecretCode,
          username: t.username,
          unverifiedUserAttributes: t.unverifiedUserAttributes
        })
      }
    }
  }, {
    // sendUpdate is a HOC
    actions: { ...Ht, sendUpdate: Fn() },
    guards: Wn,
    services: {
      autoSignIn() {
        return Cs();
      },
      async fetchUserAttributes() {
        return gi();
      },
      confirmSignUp({ formValues: t, username: n }) {
        const { confirmation_code: r } = t, o = { username: n, confirmationCode: r };
        return e.handleConfirmSignUp(o);
      },
      resendSignUpCode({ username: t }) {
        return hi({ username: t });
      },
      signInWithRedirect(t, { data: n }) {
        return yi(n);
      },
      handleSignUp(t) {
        const { formValues: n, loginMechanisms: r, username: o } = t, i = r[0], a = __(o, n, i);
        return e.handleSignUp(a);
      },
      async validateSignUp(t) {
        return Vn(t.formValues, t.touched, t.passwordSettings, [
          // Validation of password
          e.validateFormPassword,
          // Validation for default form fields
          e.validateConfirmPassword,
          e.validatePreferredUsername,
          // Validation for any custom Sign Up fields
          e.validateCustomSignUp
        ]);
      }
    }
  });
}
const Pb = () => _t({
  initial: "pending",
  id: "signOutActor",
  predictableActionArguments: !0,
  states: {
    pending: {
      tags: "pending",
      invoke: {
        src: "signOut",
        onDone: "resolved",
        onError: "rejected"
      }
    },
    resolved: { type: "final" },
    rejected: { type: "final" }
  }
}, {
  services: {
    signOut: () => As()
  }
});
function kb() {
  return _t({
    id: "verifyUserAttributesActor",
    initial: "selectUserAttributes",
    predictableActionArguments: !0,
    states: {
      selectUserAttributes: {
        initial: "edit",
        exit: ["clearError", "clearTouched", "sendUpdate"],
        states: {
          edit: {
            entry: "sendUpdate",
            on: {
              SUBMIT: { actions: "handleSubmit", target: "submit" },
              SKIP: { target: "#verifyUserAttributesActor.resolved" },
              CHANGE: { actions: "handleInput" }
            }
          },
          submit: {
            tags: "pending",
            entry: ["clearError", "sendUpdate"],
            invoke: {
              src: "sendUserAttributeVerificationCode",
              onDone: {
                actions: [
                  "setSelectedUserAttribute",
                  "setCodeDeliveryDetails"
                ],
                target: "#verifyUserAttributesActor.confirmVerifyUserAttribute"
              },
              onError: {
                actions: "setRemoteError",
                target: "edit"
              }
            }
          }
        }
      },
      confirmVerifyUserAttribute: {
        initial: "edit",
        exit: ["clearError", "clearFormValues", "clearTouched"],
        states: {
          edit: {
            entry: "sendUpdate",
            on: {
              SUBMIT: { actions: "handleSubmit", target: "submit" },
              SKIP: "#verifyUserAttributesActor.resolved",
              CHANGE: { actions: "handleInput" }
            }
          },
          submit: {
            tags: "pending",
            entry: ["clearError", "sendUpdate"],
            invoke: {
              src: "confirmVerifyUserAttribute",
              onDone: {
                actions: [
                  "setConfirmAttributeCompleteStep",
                  "clearSelectedUserAttribute"
                ],
                target: "#verifyUserAttributesActor.resolved"
              },
              onError: {
                actions: "setRemoteError",
                target: "edit"
              }
            }
          }
        }
      },
      resolved: { type: "final", data: ({ step: e }) => ({ step: e }) }
    }
  }, {
    // sendUpdate is a HOC
    actions: { ...Ht, sendUpdate: Fn() },
    services: {
      sendUserAttributeVerificationCode({ formValues: { unverifiedAttr: e } }) {
        return Is({
          userAttributeKey: e
        });
      },
      async confirmVerifyUserAttribute({ formValues: { confirmation_code: e }, selectedUserAttribute: t }) {
        return Es({
          confirmationCode: e,
          userAttributeKey: t
        });
      },
      async validateFields(e) {
        return Vn(e.formValues, e.touched, e.passwordSettings, [
          qe.validateFormPassword,
          qe.validateConfirmPassword
        ]);
      }
    }
  });
}
const nn = (e, t) => {
  var n, r, o, i, a, s;
  return {
    ...e.actorDoneData,
    step: ((n = e == null ? void 0 : e.actorDoneData) == null ? void 0 : n.step) ?? t,
    // initialize empty objects on actor start
    formValues: {},
    touched: {},
    validationError: {},
    // values included on `context.config` that should be available in actors
    formFields: (r = e.config) == null ? void 0 : r.formFields,
    loginMechanisms: (o = e.config) == null ? void 0 : o.loginMechanisms,
    passwordSettings: (i = e.config) == null ? void 0 : i.passwordSettings,
    signUpAttributes: (a = e.config) == null ? void 0 : a.signUpAttributes,
    socialProviders: (s = e.config) == null ? void 0 : s.socialProviders
  };
}, { choose: Nb, stop: Ub } = Yi, Nt = (e) => Ub(e), $b = {
  on: {
    INIT: {
      actions: "configure",
      target: "getConfig"
    },
    SIGN_OUT: "#authenticator.signOut"
  }
}, Fb = {
  always: { actions: "configure", target: "getConfig" }
};
function Ob(e) {
  const { useNextWaitConfig: t, ...n } = {};
  return _t({
    id: "authenticator",
    initial: "idle",
    context: {
      user: void 0,
      config: {},
      services: qe,
      actorRef: void 0,
      hasSetup: !1
    },
    predictableActionArguments: !0,
    states: {
      // See: https://xstate.js.org/docs/guides/communication.html#invoking-promises
      idle: {
        invoke: {
          src: "handleGetCurrentUser",
          onDone: { actions: "setUser", target: "setup" },
          onError: { target: "setup" }
        }
      },
      setup: {
        initial: "initConfig",
        states: {
          initConfig: t ? Fb : $b,
          getConfig: {
            invoke: {
              src: "getAmplifyConfig",
              onDone: [
                {
                  actions: ["applyAmplifyConfig", "setHasSetup"],
                  cond: "hasUser",
                  target: "#authenticator.authenticated"
                },
                {
                  actions: ["applyAmplifyConfig", "setHasSetup"],
                  target: "goToInitialState"
                }
              ]
            }
          },
          goToInitialState: {
            always: [
              {
                cond: "isInitialStateSignUp",
                target: "#authenticator.signUpActor"
              },
              {
                cond: "isInitialStateResetPassword",
                target: "#authenticator.forgotPasswordActor"
              },
              { target: "#authenticator.signInActor" }
            ]
          }
        }
      },
      getCurrentUser: {
        invoke: {
          src: "handleGetCurrentUser",
          onDone: {
            actions: "setUser",
            target: "#authenticator.authenticated"
          },
          onError: { target: "#authenticator.setup" }
        }
      },
      signInActor: {
        initial: "spawnActor",
        states: {
          spawnActor: {
            always: { actions: "spawnSignInActor", target: "runActor" }
          },
          runActor: {
            entry: "clearActorDoneData",
            exit: Nt("signInActor")
          }
        },
        on: {
          FORGOT_PASSWORD: "forgotPasswordActor",
          SIGN_IN: "signInActor",
          SIGN_UP: "signUpActor",
          "done.invoke.signInActor": [
            {
              cond: "hasCompletedAttributeConfirmation",
              target: "#authenticator.getCurrentUser"
            },
            {
              cond: "isShouldConfirmUserAttributeStep",
              actions: "setActorDoneData",
              target: "#authenticator.verifyUserAttributesActor"
            },
            {
              cond: "isResetPasswordStep",
              actions: "setActorDoneData",
              target: "#authenticator.forgotPasswordActor"
            },
            {
              cond: "isConfirmSignUpStep",
              actions: "setActorDoneData",
              target: "#authenticator.signUpActor"
            }
          ]
        }
      },
      signUpActor: {
        initial: "spawnActor",
        states: {
          spawnActor: {
            always: { actions: "spawnSignUpActor", target: "runActor" }
          },
          runActor: {
            entry: "clearActorDoneData",
            exit: Nt("signUpActor")
          }
        },
        on: {
          SIGN_IN: "signInActor",
          "done.invoke.signUpActor": [
            {
              cond: "hasCompletedAttributeConfirmation",
              target: "#authenticator.getCurrentUser"
            },
            {
              cond: "isShouldConfirmUserAttributeStep",
              actions: "setActorDoneData",
              target: "#authenticator.verifyUserAttributesActor"
            },
            {
              cond: "isConfirmUserAttributeStep",
              target: "#authenticator.verifyUserAttributesActor"
            },
            {
              actions: "setActorDoneData",
              target: "#authenticator.signInActor"
            }
          ]
        }
      },
      forgotPasswordActor: {
        initial: "spawnActor",
        states: {
          spawnActor: {
            always: {
              actions: "spawnForgotPasswordActor",
              target: "runActor"
            }
          },
          runActor: {
            entry: "clearActorDoneData",
            exit: Nt("forgotPasswordActor")
          }
        },
        on: {
          SIGN_IN: "signInActor",
          "done.invoke.forgotPasswordActor": [
            { target: "#authenticator.signInActor" }
          ]
        }
      },
      verifyUserAttributesActor: {
        initial: "spawnActor",
        states: {
          spawnActor: {
            always: {
              actions: "spawnVerifyUserAttributesActor",
              target: "runActor"
            }
          },
          runActor: {
            entry: "clearActorDoneData",
            exit: Nt("verifyUserAttributesActor")
          }
        },
        on: {
          "done.invoke.verifyUserAttributesActor": [
            {
              actions: "setActorDoneData",
              target: "#authenticator.getCurrentUser"
            }
          ]
        }
      },
      authenticated: {
        initial: "idle",
        states: {
          idle: { on: { TOKEN_REFRESH: "refreshUser" } },
          refreshUser: {
            invoke: {
              src: "#authenticator.getCurrentUser",
              onDone: { actions: "setUser", target: "idle" },
              onError: { target: "#authenticator.signOut" }
            }
          }
        },
        on: { SIGN_OUT: "signOut" }
      },
      signOut: {
        initial: "spawnActor",
        states: {
          spawnActor: {
            always: { actions: "spawnSignOutActor", target: "runActor" }
          },
          runActor: {
            entry: "clearActorDoneData",
            exit: Nt("signOutActor")
          }
        },
        on: {
          "done.invoke.signOutActor": {
            actions: "clearUser",
            target: "setup.getConfig"
          }
        }
      }
    },
    on: {
      SIGN_IN_WITH_REDIRECT: { target: "#authenticator.getCurrentUser" },
      CHANGE: { actions: "forwardToActor" },
      BLUR: { actions: "forwardToActor" },
      SUBMIT: { actions: "forwardToActor" },
      FEDERATED_SIGN_IN: { actions: "forwardToActor" },
      RESEND: { actions: "forwardToActor" },
      SIGN_IN: { actions: "forwardToActor" },
      SKIP: { actions: "forwardToActor" }
    }
  }, {
    actions: {
      ...Ht,
      forwardToActor: Nb([
        { cond: "hasActor", actions: su(({ actorRef: o }) => o) }
      ]),
      setActorDoneData: De({
        actorDoneData: (o, i) => ({
          challengeName: i.data.challengeName,
          codeDeliveryDetails: i.data.codeDeliveryDetails,
          missingAttributes: i.data.missingAttributes,
          remoteError: i.data.remoteError,
          username: i.data.username,
          step: i.data.step,
          totpSecretCode: i.data.totpSecretCode,
          unverifiedUserAttributes: i.data.unverifiedUserAttributes
        })
      }),
      applyAmplifyConfig: De({
        config(o, { data: i }) {
          const { loginMechanisms: a = i.loginMechanisms ?? [], signUpAttributes: s = i.signUpAttributes ?? [], socialProviders: l = i.socialProviders ?? [], initialState: c, formFields: u, passwordSettings: m = i.passwordFormat ?? {} } = o.config;
          return a.length === 0 && a.push("username"), {
            formFields: Rb(u) ?? {},
            initialState: c,
            loginMechanisms: a,
            passwordSettings: m,
            signUpAttributes: s,
            socialProviders: l
          };
        }
      }),
      spawnSignInActor: De({
        actorRef: (o, i) => {
          const { services: a } = o, s = Cb({ services: a }).withContext(nn(o, "SIGN_IN"));
          return Tt(s, { name: "signInActor" });
        }
      }),
      spawnSignUpActor: De({
        actorRef: (o, i) => {
          const { services: a } = o, s = Tb({ services: a }).withContext(nn(o, "SIGN_UP"));
          return Tt(s, { name: "signUpActor" });
        }
      }),
      spawnForgotPasswordActor: De({
        actorRef: (o, i) => {
          const { services: a } = o, s = Sb({ services: a }).withContext(nn(o, "FORGOT_PASSWORD"));
          return Tt(s, { name: "forgotPasswordActor" });
        }
      }),
      spawnVerifyUserAttributesActor: De({
        actorRef: (o) => {
          const i = kb().withContext(nn(o));
          return Tt(i, { name: "verifyUserAttributesActor" });
        }
      }),
      spawnSignOutActor: De({
        actorRef: (o) => {
          const i = Pb().withContext({ user: o == null ? void 0 : o.user });
          return Tt(i, { name: "signOutActor" });
        }
      }),
      configure: De((o, i) => {
        const { services: a, ...s } = Gs(n) ? i.data ?? {} : n;
        return {
          services: { ...qe, ...a },
          config: s
        };
      }),
      setHasSetup: De({ hasSetup: !0 })
    },
    guards: {
      ...Wn,
      hasActor: ({ actorRef: o }) => !!o,
      isInitialStateSignUp: ({ config: o }) => o.initialState === "signUp",
      isInitialStateResetPassword: ({ config: o }) => o.initialState === "forgotPassword",
      shouldSetup: ({ hasSetup: o }) => !o,
      hasUser: ({ user: o }) => !!o
    },
    services: {
      getAmplifyConfig: ({ services: o }) => o.getAmplifyConfig(),
      handleGetCurrentUser: ({ services: o }) => o.getCurrentUser()
    }
  });
}
function Rb(e) {
  return e && Object.keys(e).forEach((t) => {
    Object.keys(e[t]).forEach((n) => {
      let r = e[t][n];
      r.required = r.isRequired;
    });
  }), e;
}
const pe = {
  Accordion: "amplify-accordion",
  AccordionItem: "amplify-accordion__item",
  AccordionItemTrigger: "amplify-accordion__item__trigger",
  AccordionItemContent: "amplify-accordion__item__content",
  AccordionItemIcon: "amplify-accordion__item__icon",
  Alert: "amplify-alert",
  AlertIcon: "amplify-alert__icon",
  AlertHeading: "amplify-alert__heading",
  AlertBody: "amplify-alert__body",
  AlertDismiss: "amplify-alert__dismiss",
  Autocomplete: "amplify-autocomplete",
  AutocompleteMenu: "amplify-autocomplete__menu",
  AutocompleteMenuEmpty: "amplify-autocomplete__menu--empty",
  AutocompleteMenuFooter: "amplify-autocomplete__menu__footer",
  AutocompleteMenuHeader: "amplify-autocomplete__menu__header",
  AutocompleteMenuLoading: "amplify-autocomplete__menu--loading",
  AutocompleteMenuOption: "amplify-autocomplete__menu__option",
  AutocompleteMenuOptions: "amplify-autocomplete__menu__options",
  Avatar: "amplify-avatar",
  AvatarIcon: "amplify-avatar__icon",
  AvatarImage: "amplify-avatar__image",
  AvatarLoader: "amplify-avatar__loader",
  AIConversation: "amplify-ai-conversation",
  AIConversationAttachment: "amplify-ai-conversation__attachment",
  AIConversationAttachmentList: "amplify-ai-conversation__attachment__list",
  AIConversationAttachmentImage: "amplify-ai-conversation__attachment__image",
  AIConversationAttachmentName: "amplify-ai-conversation__attachment__name",
  AIConversationAttachmentSize: "amplify-ai-conversation__attachment__size",
  AIConversationAttachmentRemove: "amplify-ai-conversation__attachment__remove",
  AIConversationForm: "amplify-ai-conversation__form",
  AIConversationFormAttach: "amplify-ai-conversation__form__attach",
  AIConversationFormSend: "amplify-ai-conversation__form__send",
  AIConversationFormField: "amplify-ai-conversation__form__field",
  AIConversationFormDropzone: "amplify-ai-conversation__form__dropzone",
  AIConversationMessage: "amplify-ai-conversation__message",
  AIConversationMessageAvatar: "amplify-ai-conversation__message__avatar",
  AIConversationMessageSender: "amplify-ai-conversation__message__sender",
  AIConversationMessageSenderUsername: "amplify-ai-conversation__message__sender__username",
  AIConversationMessageSenderTimestamp: "amplify-ai-conversation__message__sender__timestamp",
  AIConversationMessageBody: "amplify-ai-conversation__message__body",
  AIConversationMessageContent: "amplify-ai-conversation__message__content",
  AIConversationMessageActions: "amplify-ai-conversation__message__actions",
  AIConversationMessageList: "amplify-ai-conversation__message__list",
  AIConversationPrompt: "amplify-ai-conversation__prompt",
  Badge: "amplify-badge",
  Breadcrumbs: "amplify-breadcrumbs",
  BreadcrumbsList: "amplify-breadcrumbs__list",
  BreadcrumbsItem: "amplify-breadcrumbs__item",
  BreadcrumbsSeparator: "amplify-breadcrumbs__separator",
  BreadcrumbsLink: "amplify-breadcrumbs__link",
  Button: "amplify-button",
  ButtonGroup: "amplify-buttongroup",
  ButtonLoaderWrapper: "amplify-button__loader-wrapper",
  Card: "amplify-card",
  Checkbox: "amplify-checkbox",
  CheckboxButton: "amplify-checkbox__button",
  CheckboxIcon: "amplify-checkbox__icon",
  CheckboxInput: "amplify-checkbox__input",
  CheckboxLabel: "amplify-checkbox__label",
  CheckboxField: "amplify-checkboxfield",
  Collection: "amplify-collection",
  CollectionItems: "amplify-collection-items",
  CollectionSearch: "amplify-collection-search",
  CollectionPagination: "amplify-collection-pagination",
  CountryCodeSelect: "amplify-countrycodeselect",
  DialCodeSelect: "amplify-dialcodeselect",
  Divider: "amplify-divider",
  DividerLabel: "amplify-divider--label",
  DropZone: "amplify-dropzone",
  Field: "amplify-field",
  FieldDescription: "amplify-field__description",
  FieldErrorMessage: "amplify-field__error-message",
  FieldGroup: "amplify-field-group",
  FieldGroupControl: "amplify-field-group__control",
  FieldGroupOuterEnd: "amplify-field-group__outer-end",
  FieldGroupOuterStart: "amplify-field-group__outer-start",
  FieldGroupInnerEnd: "amplify-field-group__inner-end",
  FieldGroupInnerStart: "amplify-field-group__inner-start",
  FieldGroupIcon: "amplify-field-group__icon",
  FieldGroupIconButton: "amplify-field-group__icon-button",
  FieldGroupHasInnerEnd: "amplify-field-group--has-inner-end",
  FieldGroupHasInnerStart: "amplify-field-group--has-inner-start",
  FieldShowPassword: "amplify-field__show-password",
  FieldGroupFieldWrapper: "amplify-field-group__field-wrapper",
  Fieldset: "amplify-fieldset",
  FieldsetLegend: "amplify-fieldset__legend",
  FileUploader: "amplify-fileuploader",
  FileUploaderDropZone: "amplify-fileuploader__dropzone",
  FileUploaderDropZoneIcon: "amplify-fileuploader__dropzone__icon",
  FileUploaderDropZoneText: "amplify-fileuploader__dropzone__text",
  FileUploaderFilePicker: "amplify-fileuploader__file__picker",
  FileUploaderFile: "amplify-fileuploader__file",
  FileUploaderFileWrapper: "amplify-fileuploader__file__wrapper",
  FileUploaderFileList: "amplify-fileuploader__file__list",
  FileUploaderFileName: "amplify-fileuploader__file__name",
  FileUploaderFileSize: "amplify-fileuploader__file__size",
  FileUploaderFileInfo: "amplify-fileuploader__file__info",
  FileUploaderFileImage: "amplify-fileuploader__file__image",
  FileUploaderFileMain: "amplify-fileuploader__file__main",
  FileUploaderFileStatus: "amplify-fileuploader__file__status",
  FileUploaderLoader: "amplify-fileuploader__loader",
  FileUploaderPreviewer: "amplify-fileuploader__previewer",
  FileUploaderPreviewerText: "amplify-fileuploader__previewer__text",
  FileUploaderPreviewerActions: "amplify-fileuploader__previewer__actions",
  FileUploaderPreviewerFooter: "amplify-fileuploader__previewer__footer",
  Flex: "amplify-flex",
  Grid: "amplify-grid",
  Heading: "amplify-heading",
  HighlightMatch: "amplify-highlightmatch",
  HighlightMatchHighlighted: "amplify-highlightmatch__highlighted",
  Icon: "amplify-icon",
  Image: "amplify-image",
  Input: "amplify-input",
  Label: "amplify-label",
  Link: "amplify-link",
  Loader: "amplify-loader",
  LoaderLabel: "amplify-loader__label",
  MenuContent: "amplify-menu__content",
  MenuItem: "amplify-menu__content__item",
  MenuTrigger: "amplify-menu__trigger",
  MenuWrapper: "amplify-menu__wrapper",
  Message: "amplify-message",
  MessageIcon: "amplify-message__icon",
  MessageHeading: "amplify-message__heading",
  MessageBody: "amplify-message__body",
  MessageContent: "amplify-message__content",
  MessageDismiss: "amplify-message__dismiss",
  Pagination: "amplify-pagination",
  PaginationItem: "amplify-pagination__item",
  PasswordField: "amplify-passwordfield",
  PhoneNumberField: "amplify-phonenumberfield",
  Placeholder: "amplify-placeholder",
  Radio: "amplify-radio",
  RadioButton: "amplify-radio__button",
  RadioInput: "amplify-radio__input",
  RadioLabel: "amplify-radio__label",
  RadioGroupField: "amplify-radiogroupfield",
  RadioGroup: "amplify-radiogroup",
  Rating: "amplify-rating",
  RatingItem: "amplify-rating__item",
  RatingIcon: "amplify-rating__icon",
  RatingLabel: "amplify-rating__label",
  ScrollView: "amplify-scrollview",
  SearchField: "amplify-searchfield",
  SearchFieldClear: "amplify-searchfield__clear",
  SearchFieldSearch: "amplify-searchfield__search",
  Select: "amplify-select",
  SelectField: "amplify-selectfield",
  SelectWrapper: "amplify-select__wrapper",
  SelectIcon: "amplify-select__icon",
  SliderField: "amplify-sliderfield",
  SliderFieldGroup: "amplify-sliderfield__group",
  SliderFieldLabel: "amplify-sliderfield__label",
  SliderFieldRange: "amplify-sliderfield__range",
  SliderFieldRoot: "amplify-sliderfield__root",
  SliderFieldThumb: "amplify-sliderfield__thumb",
  SliderFieldTrack: "amplify-sliderfield__track",
  StepperField: "amplify-stepperfield",
  StepperFieldButtonDecrease: "amplify-stepperfield__button--decrease",
  StepperFieldButtonIncrease: "amplify-stepperfield__button--increase",
  StepperFieldInput: "amplify-stepperfield__input",
  StorageImage: "amplify-storageimage",
  StorageManager: "amplify-storagemanager",
  StorageManagerDropZone: "amplify-storagemanager__dropzone",
  StorageManagerDropZoneIcon: "amplify-storagemanager__dropzone__icon",
  StorageManagerDropZoneText: "amplify-storagemanager__dropzone__text",
  StorageManagerFilePicker: "amplify-storagemanager__file__picker",
  StorageManagerFile: "amplify-storagemanager__file",
  StorageManagerFileWrapper: "amplify-storagemanager__file__wrapper",
  StorageManagerFileList: "amplify-storagemanager__file__list",
  StorageManagerFileName: "amplify-storagemanager__file__name",
  StorageManagerFileSize: "amplify-storagemanager__file__size",
  StorageManagerFileInfo: "amplify-storagemanager__file__info",
  StorageManagerFileImage: "amplify-storagemanager__file__image",
  StorageManagerFileMain: "amplify-storagemanager__file__main",
  StorageManagerFileStatus: "amplify-storagemanager__file__status",
  StorageManagerLoader: "amplify-storagemanager__loader",
  StorageManagerPreviewer: "amplify-storagemanager__previewer",
  StorageManagerPreviewerText: "amplify-storagemanager__previewer__text",
  StorageManagerPreviewerActions: "amplify-storagemanager__previewer__actions",
  StorageManagerPreviewerFooter: "amplify-storagemanager__previewer__footer",
  SwitchField: "amplify-switchfield",
  SwitchLabel: "amplify-switch__label",
  SwitchThumb: "amplify-switch__thumb",
  SwitchTrack: "amplify-switch__track",
  SwitchWrapper: "amplify-switch__wrapper",
  Table: "amplify-table",
  TableCaption: "amplify-table__caption",
  TableBody: "amplify-table__body",
  TableTd: "amplify-table__td",
  TableTh: "amplify-table__th",
  TableFoot: "amplify-table__foot",
  TableHead: "amplify-table__head",
  TableRow: "amplify-table__row",
  Tabs: "amplify-tabs",
  TabsList: "amplify-tabs__list",
  TabsItem: "amplify-tabs__item",
  TabsPanel: "amplify-tabs__panel",
  Text: "amplify-text",
  Textarea: "amplify-textarea",
  TextAreaField: "amplify-textareafield",
  TextField: "amplify-textfield",
  ToggleButton: "amplify-togglebutton",
  ToggleButtonGroup: "amplify-togglebuttongroup",
  VisuallyHidden: "amplify-visually-hidden"
}, xb = ({ componentName: e, packageName: t, version: n }) => {
  const r = [`ui-${t}`, n];
  switch (e) {
    case "Authenticator": {
      Qe({
        ...Fs,
        additionalDetails: [[e], r]
      });
      break;
    }
    case "ChangePassword":
    case "DeleteUser": {
      Qe({
        ...$s,
        additionalDetails: [["AccountSettings"], r]
      });
      break;
    }
    case "FileUploader": {
      Qe({
        ...Os,
        additionalDetails: [[e], r]
      });
      break;
    }
    case "InAppMessaging": {
      Qe({
        ...Rs,
        additionalDetails: [[e], r]
      });
      break;
    }
    case "LocationSearch": {
      Qe({
        ...xs,
        additionalDetails: [[e], r]
      });
      break;
    }
    case "MapView": {
      Qe({
        ...Ms,
        additionalDetails: [[e], r]
      });
      break;
    }
    case "StorageManager": {
      Qe({
        ...Ds,
        additionalDetails: [[e], r]
      });
      break;
    }
  }
  return Ws;
}, Mb = {
  key: 0,
  class: "amplify-flex amplify-alert amplify-alert--error amplify-authenticator__base",
  "data-variation": "error",
  role: "alert"
}, Db = { class: "amplify-flex amplify-authenticator__icon-wrapper" }, Bb = /* @__PURE__ */ x("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "amplify-icon",
  "aria-hidden": "true",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, [
  /* @__PURE__ */ x("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" })
], -1), Lb = /* @__PURE__ */ x("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "amplify-icon",
  "aria-hidden": "true",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, [
  /* @__PURE__ */ x("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
], -1), Oe = /* @__PURE__ */ q({
  __name: "base-alert",
  setup(e) {
    const t = le(!0), n = N("Dismiss alert");
    function r() {
      t.value = !1;
    }
    return (o, i) => {
      const a = we;
      return t.value ? (U(), X("div", Mb, [
        x("div", Db, [
          Bb,
          x("div", null, [
            E(o.$slots, "default")
          ])
        ]),
        C(a, {
          class: "amplify-field-group__control amplify-alert__dismiss",
          "aria-label": d(n),
          fullwidth: !1,
          variation: "link",
          type: "button",
          onClick: r
        }, {
          default: _(() => [
            Lb
          ]),
          _: 1
        }, 8, ["aria-label"])
      ])) : j("", !0);
    };
  }
}), Re = /* @__PURE__ */ q({
  __name: "base-field-set",
  setup(e) {
    const t = Ir();
    return (n, r) => E(n.$slots, "fieldSetI", Ie(n.$attrs, {
      slotData: d(t).default && d(t).default()
    }), () => [
      x("fieldset", Ie(n.$attrs, { "data-amplify-fieldset": "" }), [
        E(n.$slots, "default")
      ], 16)
    ]);
  }
});
function Gb(e) {
  return us() ? (ci(e), !0) : !1;
}
function ka(e) {
  let t = 0, n, r;
  const o = () => {
    t -= 1, r && t <= 0 && (r.stop(), n = void 0, r = void 0);
  };
  return (...i) => (t += 1, n || (r = cs(!0), n = r.run(() => e(...i))), Gb(o), n);
}
function zb(e) {
  return "state" in e;
}
var ii = function() {
};
function Wb(e) {
  return "getSnapshot" in e ? e.getSnapshot() : zb(e) ? e.state : void 0;
}
function Vb(e, t) {
  t === void 0 && (t = Wb);
  var n = ds(e) ? e : so(e), r = so(t(n.value)), o = function(i) {
    n.value.send(i);
  };
  return fs(n, function(i, a, s) {
    r.value = t(i);
    var l = i.subscribe({
      next: function(c) {
        return r.value = c;
      },
      error: ii,
      complete: ii
    }).unsubscribe;
    s(function() {
      return l();
    });
  }, {
    immediate: !0
  }), { state: r, send: o };
}
const jb = (e) => {
  var t, n, r;
  return {
    ...(r = (n = (t = Tr(e)) == null ? void 0 : t.formFields) == null ? void 0 : n.setupTotp) == null ? void 0 : r.QR
  };
}, Xr = ka(() => {
  const e = Ob(), t = Xi(e).start(), n = le("configuring"), { state: r, send: o } = Vb(t), i = () => {
    n.value = "authenticated";
  }, a = () => {
    n.value = "unauthenticated";
  }, s = Vs(
    t,
    (l, c) => Si(l, c, { onSignIn: i, onSignOut: a })
  );
  return fi().then(() => {
    n.value = "authenticated";
  }).catch(() => {
    n.value = "unauthenticated";
  }), ci(() => {
    s();
  }), { authStatus: n, service: t, send: o, state: r };
}), ye = ka(() => {
  const { authStatus: e, state: t, send: n } = Xr(), r = ui({});
  return ps(() => {
    const o = Js({ send: n, state: t.value });
    for (const a of Object.keys(o))
      r[a] = o[a];
    const i = o.route === "setupTotp" ? jb(t.value) : null;
    r.QRFields = i, r.authStatus = e.value, r.send = n, r.state = t;
  }), r;
});
let Hb = (e = 21) => {
  let t = "", n = crypto.getRandomValues(new Uint8Array(e));
  for (; e--; ) {
    let r = n[e] & 63;
    r < 36 ? t += r.toString(36) : r < 62 ? t += (r - 26).toString(36).toUpperCase() : r < 63 ? t += "_" : t += "-";
  }
  return t;
};
const jn = /* @__PURE__ */ q({
  __name: "base-input",
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = (r) => {
      t("update:modelValue", r.target.value);
    };
    return (r, o) => (U(), X("input", {
      onChange: o[0] || (o[0] = (i) => n(i)),
      "data-amplify-input": ""
    }, null, 32));
  }
}), Yb = {}, Kb = { "data-amplify-label": "" };
function qb(e, t) {
  return U(), X("label", Kb, [
    E(e.$slots, "default")
  ]);
}
const Hn = /* @__PURE__ */ In(Yb, [["render", qb]]), Jb = ["aria-label", "aria-checked"], Zb = /* @__PURE__ */ x("path", { d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" }, null, -1), Qb = [
  Zb
], Xb = /* @__PURE__ */ x("path", {
  d: "M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z",
  fill: "none"
}, null, -1), e1 = /* @__PURE__ */ x("path", { d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" }, null, -1), t1 = [
  Xb,
  e1
], n1 = {
  inheritAttrs: !1
}, Na = /* @__PURE__ */ q({
  ...n1,
  __name: "password-control",
  props: {
    name: null,
    label: null,
    autocomplete: { default: "new-password" },
    hasError: { type: Boolean, default: !1 },
    labelHidden: { type: Boolean },
    placeholder: null,
    required: { type: Boolean, default: !0 },
    describedBy: null
  },
  setup(e) {
    const t = e, n = N("Show password"), r = N("Hide password"), o = le("password"), i = le(n), a = Math.floor(Math.random() * 999999), { name: s, label: l, autocomplete: c, hasError: u, labelHidden: m, placeholder: f, required: p } = re(t), h = le("");
    function v() {
      i.value = i.value === n ? r : n, o.value = o.value === "password" ? "text" : "password";
    }
    const b = N((f == null ? void 0 : f.value) ?? l.value), g = N(l.value);
    return (w, y) => {
      const S = Hn, I = jn, T = me;
      return U(), W(T, {
        class: Ae([
          d(pe).Flex,
          d(pe).Field,
          d(pe).TextField,
          d(pe).PasswordField
        ])
      }, {
        default: _(() => [
          C(S, {
            class: Ae(["amplify-label", { "amplify-visually-hidden": d(m) }]),
            for: "amplify-field-" + d(a)
          }, {
            default: _(() => [
              M(R(d(g)), 1)
            ]),
            _: 1
          }, 8, ["class", "for"]),
          C(T, {
            class: Ae([d(pe).Flex, d(pe).FieldGroup])
          }, {
            default: _(() => [
              C(T, {
                class: Ae(d(pe).FieldGroupFieldWrapper)
              }, {
                default: _(() => [
                  C(I, Ie(w.$attrs, {
                    modelValue: h.value,
                    "onUpdate:modelValue": y[0] || (y[0] = (P) => h.value = P),
                    class: [
                      d(pe).Input,
                      d(pe).FieldGroupControl
                    ],
                    id: "amplify-field-" + d(a),
                    "data-amplify-password": "true",
                    name: d(s),
                    autocomplete: d(c),
                    required: d(p) ?? !0,
                    placeholder: d(b),
                    type: o.value,
                    "aria-invalid": d(u),
                    "aria-describedBy": e.describedBy,
                    autocapitalize: "off"
                  }), null, 16, ["modelValue", "class", "id", "name", "autocomplete", "required", "placeholder", "type", "aria-invalid", "aria-describedBy"])
                ]),
                _: 1
              }, 8, ["class"]),
              C(T, {
                class: Ae(d(pe).FieldGroupOuterEnd)
              }, {
                default: _(() => [
                  x("button", {
                    "aria-label": i.value,
                    "aria-checked": o.value !== "password",
                    class: Ae([
                      d(pe).Button,
                      d(pe).FieldGroupControl,
                      d(pe).FieldShowPassword
                    ]),
                    "data-fullwidth": "false",
                    type: "button",
                    role: "switch",
                    onClick: v
                  }, [
                    o.value === "password" ? (U(), X("svg", {
                      key: 0,
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "currentColor",
                      viewBox: "0 0 24 24",
                      class: Ae(d(pe).Icon)
                    }, Qb, 2)) : (U(), X("svg", {
                      key: 1,
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "currentColor",
                      viewBox: "0 0 24 24",
                      class: Ae(d(pe).Icon)
                    }, t1, 2))
                  ], 10, Jb)
                ]),
                _: 1
              }, 8, ["class"])
            ]),
            _: 1
          }, 8, ["class"])
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
}), r1 = ["value", "selected"], o1 = /* @__PURE__ */ q({
  __name: "base-select",
  props: {
    selectValue: { default: "" },
    options: null
  },
  emits: ["update:selectValue"],
  setup(e, { emit: t }) {
    const n = e, { options: r, selectValue: o } = re(n), i = (a) => {
      t("update:selectValue", a.target.value);
    };
    return (a, s) => (U(), X("select", {
      onChange: s[0] || (s[0] = (l) => i(l))
    }, [
      (U(!0), X(He, null, An(d(r), (l, c) => (U(), X("option", {
        key: c,
        value: l,
        selected: l == d(o) ? !0 : void 0
      }, R(l), 9, r1))), 128))
    ], 32));
  }
}), i1 = /* @__PURE__ */ x("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  class: "amplify-icon"
}, [
  /* @__PURE__ */ x("path", { d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" })
], -1), a1 = /* @__PURE__ */ q({
  __name: "alias-control",
  props: {
    label: { default: "Username" },
    name: { default: "username" },
    placeholder: { default: "" },
    autocomplete: { default: "" },
    labelHidden: { type: Boolean },
    required: { type: Boolean, default: !0 },
    dialCode: null,
    dialCodeList: null,
    type: { default: "text" },
    hasError: { type: Boolean },
    describedBy: null
  },
  setup(e) {
    const t = e, { label: n, name: r, placeholder: o, autocomplete: i, labelHidden: a, required: s, dialCode: l, dialCodeList: c } = re(t), u = Math.floor(Math.random() * 999999), m = Math.floor(Math.random() * 999999);
    return (f, p) => {
      const h = Hn, v = o1, b = me, g = jn;
      return U(), W(b, { class: "amplify-flex amplify-field amplify-textfield amplify-phonenumberfield" }, {
        default: _(() => [
          C(h, Ie({
            for: "amplify-field-" + d(u),
            class: ["amplify-label", { "amplify-visually-hidden": d(a) }]
          }, f.$attrs), {
            default: _(() => [
              M(R(d(n)), 1)
            ]),
            _: 1
          }, 16, ["for", "class"]),
          C(b, { class: "amplify-flex amplify-field-group" }, {
            default: _(() => [
              C(b, { class: "amplify-field-group__outer-start" }, {
                default: _(() => [
                  e.type === "tel" ? (U(), W(b, {
                    key: 0,
                    class: "amplify-flex amplify-field amplify-selectfield amplify-countrycodeselect amplify-dialcodeselect amplify-authenticator__column"
                  }, {
                    default: _(() => [
                      C(h, Ie({
                        for: "amplify-field-" + d(m),
                        class: "amplify-label amplify-visually-hidden"
                      }, f.$attrs), {
                        default: _(() => [
                          M(R("Country Code"))
                        ]),
                        _: 1
                      }, 16, ["for"]),
                      C(b, { class: "amplify-select__wrapper" }, {
                        default: _(() => [
                          C(v, {
                            class: "amplify-select amplify-field-group__control",
                            id: "amplify-field-" + d(m),
                            autocomplete: "tel-country-code",
                            "aria-label": "country code",
                            name: "country_code",
                            options: d(c),
                            "select-value": d(l)
                          }, null, 8, ["id", "options", "select-value"]),
                          C(b, { class: "amplify-flex amplify-select__icon" }, {
                            default: _(() => [
                              i1
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : j("", !0)
                ]),
                _: 1
              }),
              C(b, { class: "amplify-field-group__field-wrapper" }, {
                default: _(() => [
                  C(g, {
                    class: "amplify-input amplify-field-group__control",
                    id: "amplify-field-" + d(u),
                    autocomplete: d(i),
                    name: d(r),
                    required: d(s) ?? !0,
                    type: e.type,
                    placeholder: d(o),
                    "aria-invalid": e.hasError,
                    "aria-describedBy": e.describedBy,
                    autocapitalize: "off"
                  }, null, 8, ["id", "autocomplete", "name", "required", "type", "placeholder", "aria-invalid", "aria-describedBy"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
}), s1 = ["id"], Ua = /* @__PURE__ */ q({
  __name: "base-form-field",
  props: {
    name: { default: "" },
    formField: { default: () => ({}) }
  },
  setup(e) {
    const t = e, { name: n, formField: r } = re(t), { validationErrors: o } = re(ye()), { type: i } = r.value, a = i === "password", s = Hb(12), l = D(() => tl(o.value[n.value])), c = D(() => {
      var m;
      return ((m = l.value) == null ? void 0 : m.length) > 0;
    }), u = D(() => c.value ? s : void 0);
    return (m, f) => (U(), X(He, null, [
      a ? (U(), W(Na, {
        key: 0,
        name: d(n),
        label: d(r).label,
        placeholder: d(r).placeholder,
        required: d(r).isRequired,
        "label-hidden": d(r).labelHidden,
        autocomplete: d(r).autocomplete,
        hasError: d(c),
        describedBy: d(u)
      }, null, 8, ["name", "label", "placeholder", "required", "label-hidden", "autocomplete", "hasError", "describedBy"])) : (U(), W(a1, {
        key: 1,
        name: d(n),
        label: d(r).label,
        placeholder: d(r).placeholder,
        required: d(r).isRequired,
        "label-hidden": d(r).labelHidden,
        autocomplete: d(r).autocomplete,
        "dial-code": d(r).dialCode,
        "dial-code-list": d(r).dialCodeList,
        type: d(r).type,
        hasError: d(c),
        describedBy: d(u)
      }, null, 8, ["name", "label", "placeholder", "required", "label-hidden", "autocomplete", "dial-code", "dial-code-list", "type", "hasError", "describedBy"])),
      d(c) ? (U(), X("div", {
        key: 2,
        id: d(u)
      }, [
        (U(!0), X(He, null, An(d(l), (p, h) => (U(), X("p", {
          key: h,
          role: "alert",
          "data-variation": "error",
          class: "amplify-text amplify-text--error"
        }, R(d(N)(p)), 1))), 128))
      ], 8, s1)) : j("", !0)
    ], 64));
  }
}), xe = /* @__PURE__ */ q({
  __name: "base-form-fields",
  props: {
    route: null
  },
  setup(e) {
    const t = e, { route: n } = re(t), { state: r } = Xr();
    let o = [];
    return ms(() => {
      o = lc(n.value, r.value);
    }), (i, a) => (U(!0), X(He, null, An(d(o), ([s, l]) => (U(), W(Ua, {
      name: s,
      key: s,
      formField: l
    }, null, 8, ["name", "formField"]))), 128));
  }
}), rn = /* @__PURE__ */ q({
  __name: "federated-sign-in-button",
  props: {
    provider: null
  },
  setup(e) {
    const t = e, { provider: n } = re(t), { toFederatedSignIn: r } = ye(), o = () => {
      r({ provider: n.value });
    };
    return (i, a) => {
      const s = we;
      return U(), W(s, {
        class: "amplify-authenticator__federated-button",
        type: "button",
        onClick: o
      }, {
        default: _(() => [
          E(i.$slots, "default")
        ]),
        _: 3
      });
    };
  }
}), l1 = /* @__PURE__ */ x("svg", {
  "aria-label": "Amazon icon",
  class: "amplify-icon",
  viewBox: "0 0 248 268"
}, [
  /* @__PURE__ */ x("path", {
    d: "M139.056521,147.024612 C133.548808,156.744524 124.782731,162.726926 115.087401,162.726926 C101.790721,162.726926 93.9937779,152.612964 93.9937779,137.68681 C93.9937779,108.224571 120.447551,102.879017 145.533369,102.879017 L145.533369,110.365976 C145.533369,123.831358 145.876354,135.063787 139.056521,147.024612 M207.206992,162.579655 C209.400505,165.692256 209.887066,169.437725 207.063416,171.770186 C199.996315,177.653081 187.429476,188.590967 180.513926,194.716661 L180.46208,194.621133 C178.176838,196.663031 174.862638,196.810303 172.27828,195.445057 C160.780281,185.9162 158.686473,181.494078 152.405048,172.403055 C133.405233,191.751331 119.909143,197.534719 95.309886,197.534719 C66.1281801,197.534719 43.4791563,179.599451 43.4791563,143.669212 C43.4791563,115.616003 58.6782107,96.5105248 80.4019706,87.1727225 C99.2063636,78.9096034 125.464714,77.4528107 145.533369,75.1641337 L145.533369,70.694248 C145.533369,62.4749122 146.167493,52.7510201 141.297893,45.6541312 C137.110277,39.2856386 129.018206,36.6586354 121.859376,36.6586354 C108.658413,36.6586354 96.9171331,43.4171982 94.0416364,57.4199213 C93.4593582,60.532522 91.1701278,63.5933787 88.003492,63.7406501 L54.4387473,60.1424518 C51.6150972,59.5095829 48.4484614,57.2248862 49.2740201,52.8982915 C56.9712583,12.2553679 93.7983558,0 126.732964,0 C143.587124,0 165.606011,4.47386604 178.902691,17.2148315 C195.760839,32.917146 194.149604,53.8694866 194.149604,76.6726704 L194.149604,130.542157 C194.149604,146.734049 200.87372,153.830938 207.206992,162.579655 Z M233.826346,208.038962 C230.467669,203.683255 211.550709,205.9821 203.056405,206.998432 C200.470662,207.321077 200.076227,205.042397 202.406981,203.404973 C217.475208,192.664928 242.201125,195.766353 245.081698,199.363845 C247.966255,202.981502 244.336653,228.071183 230.172839,240.049379 C228.001452,241.888455 225.929671,240.904388 226.89783,238.468418 C230.077218,230.430525 237.204944,212.418868 233.826346,208.038962 Z M126.768855,264 C74.0234043,264 42.0764048,241.955028 17.7852554,217.541992 C12.9733903,212.705982 6.71799208,206.295994 3.31151296,200.690918 C1.90227474,198.372135 5.59096074,195.021875 8.0442063,196.84375 C38.2390146,219.267578 82.1011654,239.538304 125.529506,239.538304 C154.819967,239.538304 191.046475,227.469543 220.66851,214.867659 C225.146771,212.966167 225.146771,219.180222 224.511585,221.060516 C224.183264,222.03242 209.514625,236.221149 189.247207,247.047411 C170.304273,257.166172 146.397132,264 126.768855,264 Z",
    fill: "#FF9900"
  })
], -1), c1 = { class: "amplify-text" }, u1 = /* @__PURE__ */ x("svg", {
  "aria-label": "Apple icon",
  class: "amplify-icon",
  fill: "#000",
  preserveAspectRatio: "xMidYMid",
  stroke: "#000",
  strokeWidth: "0",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ x("path", { d: "M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z" })
], -1), d1 = { class: "amplify-text" }, f1 = /* @__PURE__ */ x("svg", {
  "aria-label": "Facebook icon",
  class: "amplify-icon",
  viewBox: "0 0 279 538"
}, [
  /* @__PURE__ */ x("path", {
    d: "M82.3409742,538 L82.3409742,292.936652 L0,292.936652 L0,196.990154 L82.2410458,196.990154 L82.2410458,126.4295 C82.2410458,44.575144 132.205229,0 205.252865,0 C240.227794,0 270.306232,2.59855099 279,3.79788222 L279,89.2502322 L228.536175,89.2502322 C188.964542,89.2502322 181.270057,108.139699 181.270057,135.824262 L181.270057,196.89021 L276.202006,196.89021 L263.810888,292.836708 L181.16913,292.836708 L181.16913,538 L82.3409742,538 Z",
    fill: "#1877F2"
  })
], -1), p1 = { class: "amplify-text" }, m1 = /* @__PURE__ */ x("svg", {
  "aria-label": "Google icon",
  class: "amplify-icon",
  viewBox: "0 0 256 262",
  xmlns: "http://www.w3.org/2000/svg",
  preserveAspectRatio: "xMidYMid"
}, [
  /* @__PURE__ */ x("path", {
    d: "M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027",
    fill: "#4285F4"
  }),
  /* @__PURE__ */ x("path", {
    d: "M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1",
    fill: "#34A853"
  }),
  /* @__PURE__ */ x("path", {
    d: "M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782",
    fill: "#FBBC05"
  }),
  /* @__PURE__ */ x("path", {
    d: "M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251",
    fill: "#EB4335"
  })
], -1), g1 = { class: "amplify-text" }, h1 = ["data-label"], eo = /* @__PURE__ */ q({
  __name: "federated-sign-in",
  setup(e) {
    const t = ye(), { route: n, socialProviders: r } = t, o = r == null ? void 0 : r.includes("amazon"), i = r == null ? void 0 : r.includes("apple"), a = r == null ? void 0 : r.includes("facebook"), s = r == null ? void 0 : r.includes("google"), l = a || s || o || i, { getSignInWithFederationText: c, getOrText: u } = Ee, m = D(() => lr), f = D(() => c(n, "amazon")), p = D(() => c(n, "apple")), h = D(() => c(n, "facebook")), v = D(() => c(n, "google")), b = D(() => u());
    return (g, w) => {
      const y = me;
      return d(l) ? (U(), W(y, {
        key: 0,
        class: "amplify-flex amplify-authenticator__federated-buttons"
      }, {
        default: _(() => [
          d(o) ? (U(), W(rn, {
            key: 0,
            provider: d(m).Amazon
          }, {
            default: _(() => [
              l1,
              x("span", c1, R(d(f)), 1)
            ]),
            _: 1
          }, 8, ["provider"])) : j("", !0),
          d(i) ? (U(), W(rn, {
            key: 1,
            provider: d(m).Apple
          }, {
            default: _(() => [
              u1,
              x("span", d1, R(d(p)), 1)
            ]),
            _: 1
          }, 8, ["provider"])) : j("", !0),
          d(a) ? (U(), W(rn, {
            key: 2,
            provider: d(m).Facebook
          }, {
            default: _(() => [
              f1,
              x("span", p1, R(d(h)), 1)
            ]),
            _: 1
          }, 8, ["provider"])) : j("", !0),
          d(s) ? (U(), W(rn, {
            key: 3,
            provider: d(m).Google
          }, {
            default: _(() => [
              m1,
              x("span", g1, R(d(v)), 1)
            ]),
            _: 1
          }, 8, ["provider"])) : j("", !0),
          x("hr", {
            class: "amplify-divider amplify-divider--horizontal amplify-divider--small",
            "aria-orientation": "horizontal",
            "data-label": d(b)
          }, null, 8, h1)
        ]),
        _: 1
      })) : j("", !0);
    };
  }
}), y1 = /* @__PURE__ */ x("legend", { class: "amplify-visually-hidden" }, "Sign in", -1), v1 = { "data-amplify-footer": "" }, $a = /* @__PURE__ */ q({
  __name: "sign-in",
  setup(e) {
    const t = ye(), { submitForm: n, updateForm: r, toForgotPassword: o } = t, { error: i, isPending: a } = re(t), { getForgotPasswordText: s, getSignInText: l, getSigningInText: c } = Ee, u = D(() => s()), m = D(() => l()), f = D(() => c()), p = (b) => {
      const { name: g, value: w } = b.target;
      r({ name: g, value: w });
    }, h = (b) => {
      n($e(b));
    }, v = () => {
      o();
    };
    return (b, g) => {
      const w = Re, y = Oe, S = we, I = me, T = Ue, P = Ne;
      return E(b.$slots, "signInSlotI", oe(ie(b.$attrs)), () => [
        E(b.$slots, "header"),
        C(I, oe(ie(b.$attrs)), {
          default: _(() => [
            C(T, {
              "data-amplify-authenticator-signin": "",
              onInput: p,
              onSubmit: ue(h, ["prevent"]),
              method: "post"
            }, {
              formt: _(({ slotData: k }) => [
                E(b.$slots, "form", {
                  info: k,
                  onSignInSubmit: h,
                  onInput: p,
                  onForgotPasswordClicked: v
                })
              ]),
              default: _(() => [
                C(eo),
                C(I, { class: "amplify-flex amplify-authenticator__column" }, {
                  default: _(() => [
                    C(w, {
                      disabled: d(a),
                      class: "amplify-flex amplify-authenticator__column"
                    }, {
                      fieldSetI: _(({ slotData: k }) => [
                        E(b.$slots, "signin-fields", { info: k })
                      ]),
                      default: _(() => [
                        y1,
                        C(xe, { route: "signIn" })
                      ]),
                      _: 3
                    }, 8, ["disabled"]),
                    d(i) ? (U(), W(y, { key: 0 }, {
                      default: _(() => [
                        M(R(d(N)(d(i))), 1)
                      ]),
                      _: 1
                    })) : j("", !0),
                    C(S, {
                      disabled: d(a),
                      class: "amplify-field-group__control amplify-authenticator__font",
                      fullwidth: !0,
                      loading: !1,
                      variation: "primary"
                    }, {
                      default: _(() => [
                        M(R(d(a) ? d(f) : d(m)), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["onSubmit"])
          ]),
          _: 3
        }, 16),
        C(P, null, {
          default: _(() => [
            E(b.$slots, "footer", {}, () => [
              x("div", v1, [
                C(S, {
                  onClick: v,
                  class: "amplify-field-group__control amplify-authenticator__font",
                  variation: "link",
                  fullwidth: !0,
                  size: "small",
                  style: { "font-weight": "normal" },
                  type: "button"
                }, {
                  default: _(() => [
                    M(R(d(u)), 1)
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 3
        })
      ]);
    };
  }
}), Fa = /* @__PURE__ */ q({
  __name: "authenticator-sign-up-form-fields",
  setup(e) {
    return (t, n) => (U(), W(xe, { route: "signUp" }));
  }
}), Oa = /* @__PURE__ */ q({
  __name: "sign-up",
  setup(e) {
    const t = ye(), { submitForm: n, updateBlur: r, updateForm: o } = t, { error: i, hasValidationErrors: a, isPending: s } = re(t), { getCreateAccountText: l } = Ee, c = D(() => l()), u = (p) => {
      const { checked: h, name: v, type: b, value: g } = p.target;
      o({
        name: v,
        value: b === "checkbox" && !h ? void 0 : g
      });
    };
    function m(p) {
      const { name: h } = p.target;
      r({ name: h });
    }
    const f = (p) => {
      n($e(p));
    };
    return (p, h) => {
      const v = Re, b = Oe, g = we, w = me, y = Ue, S = Ne;
      return E(p.$slots, "signUpSlotI", oe(ie(p.$attrs)), () => [
        E(p.$slots, "header"),
        C(w, oe(ie(p.$attrs)), {
          default: _(() => [
            C(y, {
              onInput: u,
              onBlurCapture: m,
              onSubmit: ue(f, ["prevent"])
            }, {
              default: _(() => [
                C(eo),
                C(w, { class: "amplify-flex amplify-authenticator__column" }, {
                  default: _(() => [
                    C(v, {
                      class: "amplify-flex amplify-authenticator__column",
                      disabled: d(s)
                    }, {
                      fieldSetI: _(({ slotData: I }) => [
                        E(p.$slots, "signup-fields", { info: I })
                      ]),
                      default: _(() => [
                        C(Fa)
                      ]),
                      _: 3
                    }, 8, ["disabled"]),
                    d(i) ? (U(), W(b, { key: 0 }, {
                      default: _(() => [
                        M(R(d(N)(d(i))), 1)
                      ]),
                      _: 1
                    })) : j("", !0),
                    C(g, {
                      class: "amplify-field-group__control amplify-authenticator__font",
                      fullwidth: !0,
                      loading: !1,
                      variation: "primary",
                      style: { "border-radius": "0px", "font-weight": "normal" },
                      disabled: d(s) || d(a)
                    }, {
                      default: _(() => [
                        M(R(d(c)), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["onSubmit"])
          ]),
          _: 3
        }, 16),
        C(S, null, {
          default: _(() => [
            E(p.$slots, "footer")
          ]),
          _: 3
        })
      ]);
    };
  }
}), _1 = {};
function w1(e, t) {
  const n = me;
  return U(), W(n, {
    tabindex: "0",
    "aria-orientation": "horizontal",
    "data-orientation": "horizontal",
    class: "amplify-authenticator__tabs amplify-tabs"
  }, {
    default: _(() => [
      C(n, {
        class: "amplify-tabs__list amplify-tabs__list--top amplify-tabs__list--equal amplify-authenticator__tabs-wrapper",
        role: "tablist"
      }, {
        default: _(() => [
          E(e.$slots, "default")
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
const S1 = /* @__PURE__ */ In(_1, [["render", w1]]), b1 = ["tabindex", "aria-selected", "id", "aria-controls"], C1 = /* @__PURE__ */ q({
  __name: "base-two-tab-item",
  props: {
    label: null,
    id: null,
    active: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, { active: n, id: r, label: o } = re(t);
    return (i, a) => (U(), X("button", {
      tabindex: d(n) ? 0 : -1,
      "aria-selected": d(n) ? "true" : "false",
      class: Ae([{ "amplify-tabs__item--active": d(n) }, "amplify-tabs__item"]),
      id: `${d(r)}-tab`,
      "aria-controls": `${d(r)}-panel`,
      role: "tab"
    }, R(d(o)), 11, b1));
  }
}), A1 = "4.2.17", I1 = {};
function E1(e, t) {
  return E(e.$slots, "textI", oe(ie(e.$attrs)), () => [
    x("span", Ie(e.$attrs, { "data-amplify-text": "" }), [
      E(e.$slots, "default")
    ], 16)
  ]);
}
const Ra = /* @__PURE__ */ In(I1, [["render", E1]]), Je = q({
  props: {
    level: {
      type: Number,
      default: 1
    }
  },
  inheritAttrs: !1,
  setup(e, { slots: t, attrs: n }) {
    var a, s;
    const r = t.default ? t.default() : [], o = t.headingI ? t.headingI() : [], i = `${n.class || ""} amplify-heading--${e.level}`;
    if (((s = (a = o[0]) == null ? void 0 : a.children) == null ? void 0 : s.length) === 0)
      o[0].children = [
        qt(`h${e.level}`, { ...n, class: i }, [r])
      ];
    else
      return () => qt(`h${e.level}`, { "data-amplify-heading": "", ...n, class: i }, [
        //@ts-ignore
        o[0] ? qt(o[0].children[0]) : qt(r[0])
      ]);
    return () => o;
  }
}), xa = /* @__PURE__ */ q({
  __name: "confirm-sign-up",
  setup(e) {
    const t = ye(), { codeDeliveryDetails: n, error: r, isPending: o } = re(t), { resendCode: i, submitForm: a, updateForm: s } = t, { getDeliveryMethodText: l, getDeliveryMessageText: c, getResendCodeText: u, getConfirmText: m } = Ee, f = D(() => l(n.value)), p = D(() => u()), h = D(() => m()), v = D(() => c(n.value)), b = (S) => {
      const { name: I, value: T } = S.target;
      s({ name: I, value: T });
    }, g = (S) => {
      w(S);
    }, w = (S) => {
      a($e(S));
    }, y = () => {
      i();
    };
    return (S, I) => {
      const T = Je, P = Ra, k = Re, $ = Oe, F = we, O = Ne, B = me, G = Ue;
      return E(S.$slots, "confirmSignUpSlotI", oe(ie(S.$attrs)), () => [
        C(B, oe(ie(S.$attrs)), {
          default: _(() => [
            C(G, {
              onInput: b,
              onSubmit: ue(g, ["prevent"])
            }, {
              default: _(() => [
                C(B, { class: "amplify-flex amplify-authenticator__column" }, {
                  default: _(() => [
                    E(S.$slots, "header", {}, () => [
                      C(T, {
                        class: "amplify-heading amplify-authenticator__heading",
                        level: 3
                      }, {
                        default: _(() => [
                          M(R(d(f)), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    C(P, { class: "amplify-authenticator__subtitle" }, {
                      default: _(() => [
                        M(R(d(v)), 1)
                      ]),
                      _: 1
                    }),
                    C(k, {
                      class: "amplify-flex amplify-authenticator__column",
                      disabled: d(o)
                    }, {
                      default: _(() => [
                        C(xe, { route: "confirmSignUp" })
                      ]),
                      _: 1
                    }, 8, ["disabled"]),
                    C(O, { class: "amplify-flex amplify-authenticator__column" }, {
                      default: _(() => [
                        d(r) ? (U(), W($, { key: 0 }, {
                          default: _(() => [
                            M(R(d(N)(d(r))), 1)
                          ]),
                          _: 1
                        })) : j("", !0),
                        C(F, {
                          class: "amplify-field-group__control amplify-authenticator__font",
                          fullwidth: !1,
                          loading: !1,
                          variation: "primary",
                          type: "submit",
                          disabled: d(o)
                        }, {
                          default: _(() => [
                            M(R(d(h)), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        C(F, {
                          class: "amplify-field-group__control amplify-authenticator__font",
                          fullwidth: !1,
                          variation: "default",
                          style: { "font-weight": "normal" },
                          type: "button",
                          onClick: ue(y, ["prevent"])
                        }, {
                          default: _(() => [
                            M(R(d(p)), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        E(S.$slots, "footer")
                      ]),
                      _: 3
                    })
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["onSubmit"])
          ]),
          _: 3
        }, 16)
      ]);
    };
  }
}), Ma = /* @__PURE__ */ q({
  __name: "confirm-sign-in",
  setup(e) {
    const t = ye(), { submitForm: n, toSignIn: r, updateForm: o } = t, { error: i, isPending: a, challengeName: s } = re(t), l = D(() => s.value), { getBackToSignInText: c, getConfirmText: u, getChallengeText: m } = Ee, f = D(() => m(l.value)), p = D(() => c()), h = D(() => u()), v = (w) => {
      const { name: y, value: S } = w.target;
      o({ name: y, value: S });
    }, b = (w) => {
      n($e(w));
    }, g = () => {
      r();
    };
    return (w, y) => {
      const S = Je, I = me, T = Oe, P = we, k = Ne, $ = Re, F = Ue;
      return E(w.$slots, "confirmSignInSlotI", oe(ie(w.$attrs)), () => [
        C(I, oe(ie(w.$attrs)), {
          default: _(() => [
            C(F, {
              "data-amplify-authenticator-confirmsignin": "",
              onInput: v,
              onSubmit: ue(b, ["prevent"])
            }, {
              default: _(() => [
                C($, {
                  class: "amplify-flex amplify-authenticator__column",
                  disabled: d(a)
                }, {
                  default: _(() => [
                    E(w.$slots, "header", {}, () => [
                      C(S, {
                        level: 3,
                        class: "amplify-heading"
                      }, {
                        default: _(() => [
                          M(R(d(f)), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    C(I, { class: "amplify-flex amplify-authenticator__column" }, {
                      default: _(() => [
                        C(xe, { route: "confirmSignIn" })
                      ]),
                      _: 1
                    }),
                    C(k, { class: "amplify-flex amplify-authenticator__column" }, {
                      default: _(() => [
                        d(i) ? (U(), W(T, { key: 0 }, {
                          default: _(() => [
                            M(R(d(N)(d(i))), 1)
                          ]),
                          _: 1
                        })) : j("", !0),
                        C(P, {
                          class: "amplify-field-group__control amplify-authenticator__font",
                          fullwidth: !1,
                          loading: !1,
                          variation: "primary",
                          style: { "font-weight": "normal" },
                          disabled: d(a)
                        }, {
                          default: _(() => [
                            M(R(d(h)), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        C(P, {
                          class: "amplify-field-group__control amplify-authenticator__font",
                          fullwidth: !1,
                          size: "small",
                          variation: "link",
                          style: { "font-weight": "normal" },
                          type: "button",
                          onClick: ue(g, ["prevent"])
                        }, {
                          default: _(() => [
                            M(R(d(p)), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        E(w.$slots, "footer")
                      ]),
                      _: 3
                    })
                  ]),
                  _: 3
                }, 8, ["disabled"])
              ]),
              _: 3
            }, 8, ["onSubmit"])
          ]),
          _: 3
        }, 16)
      ]);
    };
  }
});
var Yt = {}, T1 = function() {
  return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
}, Da = {}, Se = {};
let to;
const P1 = [
  0,
  // Not used
  26,
  44,
  70,
  100,
  134,
  172,
  196,
  242,
  292,
  346,
  404,
  466,
  532,
  581,
  655,
  733,
  815,
  901,
  991,
  1085,
  1156,
  1258,
  1364,
  1474,
  1588,
  1706,
  1828,
  1921,
  2051,
  2185,
  2323,
  2465,
  2611,
  2761,
  2876,
  3034,
  3196,
  3362,
  3532,
  3706
];
Se.getSymbolSize = function(t) {
  if (!t)
    throw new Error('"version" cannot be null or undefined');
  if (t < 1 || t > 40)
    throw new Error('"version" should be in range from 1 to 40');
  return t * 4 + 17;
};
Se.getSymbolTotalCodewords = function(t) {
  return P1[t];
};
Se.getBCHDigit = function(e) {
  let t = 0;
  for (; e !== 0; )
    t++, e >>>= 1;
  return t;
};
Se.setToSJISFunction = function(t) {
  if (typeof t != "function")
    throw new Error('"toSJISFunc" is not a valid function.');
  to = t;
};
Se.isKanjiModeEnabled = function() {
  return typeof to < "u";
};
Se.toSJIS = function(t) {
  return to(t);
};
var Yn = {};
(function(e) {
  e.L = { bit: 1 }, e.M = { bit: 0 }, e.Q = { bit: 3 }, e.H = { bit: 2 };
  function t(n) {
    if (typeof n != "string")
      throw new Error("Param is not a string");
    switch (n.toLowerCase()) {
      case "l":
      case "low":
        return e.L;
      case "m":
      case "medium":
        return e.M;
      case "q":
      case "quartile":
        return e.Q;
      case "h":
      case "high":
        return e.H;
      default:
        throw new Error("Unknown EC Level: " + n);
    }
  }
  e.isValid = function(r) {
    return r && typeof r.bit < "u" && r.bit >= 0 && r.bit < 4;
  }, e.from = function(r, o) {
    if (e.isValid(r))
      return r;
    try {
      return t(r);
    } catch {
      return o;
    }
  };
})(Yn);
function Ba() {
  this.buffer = [], this.length = 0;
}
Ba.prototype = {
  get: function(e) {
    const t = Math.floor(e / 8);
    return (this.buffer[t] >>> 7 - e % 8 & 1) === 1;
  },
  put: function(e, t) {
    for (let n = 0; n < t; n++)
      this.putBit((e >>> t - n - 1 & 1) === 1);
  },
  getLengthInBits: function() {
    return this.length;
  },
  putBit: function(e) {
    const t = Math.floor(this.length / 8);
    this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++;
  }
};
var k1 = Ba;
function Kt(e) {
  if (!e || e < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  this.size = e, this.data = new Uint8Array(e * e), this.reservedBit = new Uint8Array(e * e);
}
Kt.prototype.set = function(e, t, n, r) {
  const o = e * this.size + t;
  this.data[o] = n, r && (this.reservedBit[o] = !0);
};
Kt.prototype.get = function(e, t) {
  return this.data[e * this.size + t];
};
Kt.prototype.xor = function(e, t, n) {
  this.data[e * this.size + t] ^= n;
};
Kt.prototype.isReserved = function(e, t) {
  return this.reservedBit[e * this.size + t];
};
var N1 = Kt, La = {};
(function(e) {
  const t = Se.getSymbolSize;
  e.getRowColCoords = function(r) {
    if (r === 1)
      return [];
    const o = Math.floor(r / 7) + 2, i = t(r), a = i === 145 ? 26 : Math.ceil((i - 13) / (2 * o - 2)) * 2, s = [i - 7];
    for (let l = 1; l < o - 1; l++)
      s[l] = s[l - 1] - a;
    return s.push(6), s.reverse();
  }, e.getPositions = function(r) {
    const o = [], i = e.getRowColCoords(r), a = i.length;
    for (let s = 0; s < a; s++)
      for (let l = 0; l < a; l++)
        s === 0 && l === 0 || // top-left
        s === 0 && l === a - 1 || // bottom-left
        s === a - 1 && l === 0 || o.push([i[s], i[l]]);
    return o;
  };
})(La);
var Ga = {};
const U1 = Se.getSymbolSize, ai = 7;
Ga.getPositions = function(t) {
  const n = U1(t);
  return [
    // top-left
    [0, 0],
    // top-right
    [n - ai, 0],
    // bottom-left
    [0, n - ai]
  ];
};
var za = {};
(function(e) {
  e.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  const t = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
  };
  e.isValid = function(o) {
    return o != null && o !== "" && !isNaN(o) && o >= 0 && o <= 7;
  }, e.from = function(o) {
    return e.isValid(o) ? parseInt(o, 10) : void 0;
  }, e.getPenaltyN1 = function(o) {
    const i = o.size;
    let a = 0, s = 0, l = 0, c = null, u = null;
    for (let m = 0; m < i; m++) {
      s = l = 0, c = u = null;
      for (let f = 0; f < i; f++) {
        let p = o.get(m, f);
        p === c ? s++ : (s >= 5 && (a += t.N1 + (s - 5)), c = p, s = 1), p = o.get(f, m), p === u ? l++ : (l >= 5 && (a += t.N1 + (l - 5)), u = p, l = 1);
      }
      s >= 5 && (a += t.N1 + (s - 5)), l >= 5 && (a += t.N1 + (l - 5));
    }
    return a;
  }, e.getPenaltyN2 = function(o) {
    const i = o.size;
    let a = 0;
    for (let s = 0; s < i - 1; s++)
      for (let l = 0; l < i - 1; l++) {
        const c = o.get(s, l) + o.get(s, l + 1) + o.get(s + 1, l) + o.get(s + 1, l + 1);
        (c === 4 || c === 0) && a++;
      }
    return a * t.N2;
  }, e.getPenaltyN3 = function(o) {
    const i = o.size;
    let a = 0, s = 0, l = 0;
    for (let c = 0; c < i; c++) {
      s = l = 0;
      for (let u = 0; u < i; u++)
        s = s << 1 & 2047 | o.get(c, u), u >= 10 && (s === 1488 || s === 93) && a++, l = l << 1 & 2047 | o.get(u, c), u >= 10 && (l === 1488 || l === 93) && a++;
    }
    return a * t.N3;
  }, e.getPenaltyN4 = function(o) {
    let i = 0;
    const a = o.data.length;
    for (let l = 0; l < a; l++)
      i += o.data[l];
    return Math.abs(Math.ceil(i * 100 / a / 5) - 10) * t.N4;
  };
  function n(r, o, i) {
    switch (r) {
      case e.Patterns.PATTERN000:
        return (o + i) % 2 === 0;
      case e.Patterns.PATTERN001:
        return o % 2 === 0;
      case e.Patterns.PATTERN010:
        return i % 3 === 0;
      case e.Patterns.PATTERN011:
        return (o + i) % 3 === 0;
      case e.Patterns.PATTERN100:
        return (Math.floor(o / 2) + Math.floor(i / 3)) % 2 === 0;
      case e.Patterns.PATTERN101:
        return o * i % 2 + o * i % 3 === 0;
      case e.Patterns.PATTERN110:
        return (o * i % 2 + o * i % 3) % 2 === 0;
      case e.Patterns.PATTERN111:
        return (o * i % 3 + (o + i) % 2) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + r);
    }
  }
  e.applyMask = function(o, i) {
    const a = i.size;
    for (let s = 0; s < a; s++)
      for (let l = 0; l < a; l++)
        i.isReserved(l, s) || i.xor(l, s, n(o, l, s));
  }, e.getBestMask = function(o, i) {
    const a = Object.keys(e.Patterns).length;
    let s = 0, l = 1 / 0;
    for (let c = 0; c < a; c++) {
      i(c), e.applyMask(c, o);
      const u = e.getPenaltyN1(o) + e.getPenaltyN2(o) + e.getPenaltyN3(o) + e.getPenaltyN4(o);
      e.applyMask(c, o), u < l && (l = u, s = c);
    }
    return s;
  };
})(za);
var Kn = {};
const je = Yn, on = [
  // L  M  Q  H
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  2,
  1,
  2,
  2,
  4,
  1,
  2,
  4,
  4,
  2,
  4,
  4,
  4,
  2,
  4,
  6,
  5,
  2,
  4,
  6,
  6,
  2,
  5,
  8,
  8,
  4,
  5,
  8,
  8,
  4,
  5,
  8,
  11,
  4,
  8,
  10,
  11,
  4,
  9,
  12,
  16,
  4,
  9,
  16,
  16,
  6,
  10,
  12,
  18,
  6,
  10,
  17,
  16,
  6,
  11,
  16,
  19,
  6,
  13,
  18,
  21,
  7,
  14,
  21,
  25,
  8,
  16,
  20,
  25,
  8,
  17,
  23,
  25,
  9,
  17,
  23,
  34,
  9,
  18,
  25,
  30,
  10,
  20,
  27,
  32,
  12,
  21,
  29,
  35,
  12,
  23,
  34,
  37,
  12,
  25,
  34,
  40,
  13,
  26,
  35,
  42,
  14,
  28,
  38,
  45,
  15,
  29,
  40,
  48,
  16,
  31,
  43,
  51,
  17,
  33,
  45,
  54,
  18,
  35,
  48,
  57,
  19,
  37,
  51,
  60,
  19,
  38,
  53,
  63,
  20,
  40,
  56,
  66,
  21,
  43,
  59,
  70,
  22,
  45,
  62,
  74,
  24,
  47,
  65,
  77,
  25,
  49,
  68,
  81
], an = [
  // L  M  Q  H
  7,
  10,
  13,
  17,
  10,
  16,
  22,
  28,
  15,
  26,
  36,
  44,
  20,
  36,
  52,
  64,
  26,
  48,
  72,
  88,
  36,
  64,
  96,
  112,
  40,
  72,
  108,
  130,
  48,
  88,
  132,
  156,
  60,
  110,
  160,
  192,
  72,
  130,
  192,
  224,
  80,
  150,
  224,
  264,
  96,
  176,
  260,
  308,
  104,
  198,
  288,
  352,
  120,
  216,
  320,
  384,
  132,
  240,
  360,
  432,
  144,
  280,
  408,
  480,
  168,
  308,
  448,
  532,
  180,
  338,
  504,
  588,
  196,
  364,
  546,
  650,
  224,
  416,
  600,
  700,
  224,
  442,
  644,
  750,
  252,
  476,
  690,
  816,
  270,
  504,
  750,
  900,
  300,
  560,
  810,
  960,
  312,
  588,
  870,
  1050,
  336,
  644,
  952,
  1110,
  360,
  700,
  1020,
  1200,
  390,
  728,
  1050,
  1260,
  420,
  784,
  1140,
  1350,
  450,
  812,
  1200,
  1440,
  480,
  868,
  1290,
  1530,
  510,
  924,
  1350,
  1620,
  540,
  980,
  1440,
  1710,
  570,
  1036,
  1530,
  1800,
  570,
  1064,
  1590,
  1890,
  600,
  1120,
  1680,
  1980,
  630,
  1204,
  1770,
  2100,
  660,
  1260,
  1860,
  2220,
  720,
  1316,
  1950,
  2310,
  750,
  1372,
  2040,
  2430
];
Kn.getBlocksCount = function(t, n) {
  switch (n) {
    case je.L:
      return on[(t - 1) * 4 + 0];
    case je.M:
      return on[(t - 1) * 4 + 1];
    case je.Q:
      return on[(t - 1) * 4 + 2];
    case je.H:
      return on[(t - 1) * 4 + 3];
    default:
      return;
  }
};
Kn.getTotalCodewordsCount = function(t, n) {
  switch (n) {
    case je.L:
      return an[(t - 1) * 4 + 0];
    case je.M:
      return an[(t - 1) * 4 + 1];
    case je.Q:
      return an[(t - 1) * 4 + 2];
    case je.H:
      return an[(t - 1) * 4 + 3];
    default:
      return;
  }
};
var Wa = {}, qn = {};
const Mt = new Uint8Array(512), bn = new Uint8Array(256);
(function() {
  let t = 1;
  for (let n = 0; n < 255; n++)
    Mt[n] = t, bn[t] = n, t <<= 1, t & 256 && (t ^= 285);
  for (let n = 255; n < 512; n++)
    Mt[n] = Mt[n - 255];
})();
qn.log = function(t) {
  if (t < 1)
    throw new Error("log(" + t + ")");
  return bn[t];
};
qn.exp = function(t) {
  return Mt[t];
};
qn.mul = function(t, n) {
  return t === 0 || n === 0 ? 0 : Mt[bn[t] + bn[n]];
};
(function(e) {
  const t = qn;
  e.mul = function(r, o) {
    const i = new Uint8Array(r.length + o.length - 1);
    for (let a = 0; a < r.length; a++)
      for (let s = 0; s < o.length; s++)
        i[a + s] ^= t.mul(r[a], o[s]);
    return i;
  }, e.mod = function(r, o) {
    let i = new Uint8Array(r);
    for (; i.length - o.length >= 0; ) {
      const a = i[0];
      for (let l = 0; l < o.length; l++)
        i[l] ^= t.mul(o[l], a);
      let s = 0;
      for (; s < i.length && i[s] === 0; )
        s++;
      i = i.slice(s);
    }
    return i;
  }, e.generateECPolynomial = function(r) {
    let o = new Uint8Array([1]);
    for (let i = 0; i < r; i++)
      o = e.mul(o, new Uint8Array([1, t.exp(i)]));
    return o;
  };
})(Wa);
const Va = Wa;
function no(e) {
  this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree);
}
no.prototype.initialize = function(t) {
  this.degree = t, this.genPoly = Va.generateECPolynomial(this.degree);
};
no.prototype.encode = function(t) {
  if (!this.genPoly)
    throw new Error("Encoder not initialized");
  const n = new Uint8Array(t.length + this.degree);
  n.set(t);
  const r = Va.mod(n, this.genPoly), o = this.degree - r.length;
  if (o > 0) {
    const i = new Uint8Array(this.degree);
    return i.set(r, o), i;
  }
  return r;
};
var $1 = no, ja = {}, Ze = {}, ro = {};
ro.isValid = function(t) {
  return !isNaN(t) && t >= 1 && t <= 40;
};
var Me = {};
const Ha = "[0-9]+", F1 = "[A-Z $%*+\\-./:]+";
let zt = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
zt = zt.replace(/u/g, "\\u");
const O1 = "(?:(?![A-Z0-9 $%*+\\-./:]|" + zt + `)(?:.|[\r
]))+`;
Me.KANJI = new RegExp(zt, "g");
Me.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
Me.BYTE = new RegExp(O1, "g");
Me.NUMERIC = new RegExp(Ha, "g");
Me.ALPHANUMERIC = new RegExp(F1, "g");
const R1 = new RegExp("^" + zt + "$"), x1 = new RegExp("^" + Ha + "$"), M1 = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
Me.testKanji = function(t) {
  return R1.test(t);
};
Me.testNumeric = function(t) {
  return x1.test(t);
};
Me.testAlphanumeric = function(t) {
  return M1.test(t);
};
(function(e) {
  const t = ro, n = Me;
  e.NUMERIC = {
    id: "Numeric",
    bit: 1,
    ccBits: [10, 12, 14]
  }, e.ALPHANUMERIC = {
    id: "Alphanumeric",
    bit: 2,
    ccBits: [9, 11, 13]
  }, e.BYTE = {
    id: "Byte",
    bit: 4,
    ccBits: [8, 16, 16]
  }, e.KANJI = {
    id: "Kanji",
    bit: 8,
    ccBits: [8, 10, 12]
  }, e.MIXED = {
    bit: -1
  }, e.getCharCountIndicator = function(i, a) {
    if (!i.ccBits)
      throw new Error("Invalid mode: " + i);
    if (!t.isValid(a))
      throw new Error("Invalid version: " + a);
    return a >= 1 && a < 10 ? i.ccBits[0] : a < 27 ? i.ccBits[1] : i.ccBits[2];
  }, e.getBestModeForData = function(i) {
    return n.testNumeric(i) ? e.NUMERIC : n.testAlphanumeric(i) ? e.ALPHANUMERIC : n.testKanji(i) ? e.KANJI : e.BYTE;
  }, e.toString = function(i) {
    if (i && i.id)
      return i.id;
    throw new Error("Invalid mode");
  }, e.isValid = function(i) {
    return i && i.bit && i.ccBits;
  };
  function r(o) {
    if (typeof o != "string")
      throw new Error("Param is not a string");
    switch (o.toLowerCase()) {
      case "numeric":
        return e.NUMERIC;
      case "alphanumeric":
        return e.ALPHANUMERIC;
      case "kanji":
        return e.KANJI;
      case "byte":
        return e.BYTE;
      default:
        throw new Error("Unknown mode: " + o);
    }
  }
  e.from = function(i, a) {
    if (e.isValid(i))
      return i;
    try {
      return r(i);
    } catch {
      return a;
    }
  };
})(Ze);
(function(e) {
  const t = Se, n = Kn, r = Yn, o = Ze, i = ro, a = 7973, s = t.getBCHDigit(a);
  function l(f, p, h) {
    for (let v = 1; v <= 40; v++)
      if (p <= e.getCapacity(v, h, f))
        return v;
  }
  function c(f, p) {
    return o.getCharCountIndicator(f, p) + 4;
  }
  function u(f, p) {
    let h = 0;
    return f.forEach(function(v) {
      const b = c(v.mode, p);
      h += b + v.getBitsLength();
    }), h;
  }
  function m(f, p) {
    for (let h = 1; h <= 40; h++)
      if (u(f, h) <= e.getCapacity(h, p, o.MIXED))
        return h;
  }
  e.from = function(p, h) {
    return i.isValid(p) ? parseInt(p, 10) : h;
  }, e.getCapacity = function(p, h, v) {
    if (!i.isValid(p))
      throw new Error("Invalid QR Code version");
    typeof v > "u" && (v = o.BYTE);
    const b = t.getSymbolTotalCodewords(p), g = n.getTotalCodewordsCount(p, h), w = (b - g) * 8;
    if (v === o.MIXED)
      return w;
    const y = w - c(v, p);
    switch (v) {
      case o.NUMERIC:
        return Math.floor(y / 10 * 3);
      case o.ALPHANUMERIC:
        return Math.floor(y / 11 * 2);
      case o.KANJI:
        return Math.floor(y / 13);
      case o.BYTE:
      default:
        return Math.floor(y / 8);
    }
  }, e.getBestVersionForData = function(p, h) {
    let v;
    const b = r.from(h, r.M);
    if (Array.isArray(p)) {
      if (p.length > 1)
        return m(p, b);
      if (p.length === 0)
        return 1;
      v = p[0];
    } else
      v = p;
    return l(v.mode, v.getLength(), b);
  }, e.getEncodedBits = function(p) {
    if (!i.isValid(p) || p < 7)
      throw new Error("Invalid QR Code version");
    let h = p << 12;
    for (; t.getBCHDigit(h) - s >= 0; )
      h ^= a << t.getBCHDigit(h) - s;
    return p << 12 | h;
  };
})(ja);
var Ya = {};
const Sr = Se, Ka = 1335, D1 = 21522, si = Sr.getBCHDigit(Ka);
Ya.getEncodedBits = function(t, n) {
  const r = t.bit << 3 | n;
  let o = r << 10;
  for (; Sr.getBCHDigit(o) - si >= 0; )
    o ^= Ka << Sr.getBCHDigit(o) - si;
  return (r << 10 | o) ^ D1;
};
var qa = {};
const B1 = Ze;
function ft(e) {
  this.mode = B1.NUMERIC, this.data = e.toString();
}
ft.getBitsLength = function(t) {
  return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0);
};
ft.prototype.getLength = function() {
  return this.data.length;
};
ft.prototype.getBitsLength = function() {
  return ft.getBitsLength(this.data.length);
};
ft.prototype.write = function(t) {
  let n, r, o;
  for (n = 0; n + 3 <= this.data.length; n += 3)
    r = this.data.substr(n, 3), o = parseInt(r, 10), t.put(o, 10);
  const i = this.data.length - n;
  i > 0 && (r = this.data.substr(n), o = parseInt(r, 10), t.put(o, i * 3 + 1));
};
var L1 = ft;
const G1 = Ze, rr = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  " ",
  "$",
  "%",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":"
];
function pt(e) {
  this.mode = G1.ALPHANUMERIC, this.data = e;
}
pt.getBitsLength = function(t) {
  return 11 * Math.floor(t / 2) + 6 * (t % 2);
};
pt.prototype.getLength = function() {
  return this.data.length;
};
pt.prototype.getBitsLength = function() {
  return pt.getBitsLength(this.data.length);
};
pt.prototype.write = function(t) {
  let n;
  for (n = 0; n + 2 <= this.data.length; n += 2) {
    let r = rr.indexOf(this.data[n]) * 45;
    r += rr.indexOf(this.data[n + 1]), t.put(r, 11);
  }
  this.data.length % 2 && t.put(rr.indexOf(this.data[n]), 6);
};
var z1 = pt, W1 = function(t) {
  for (var n = [], r = t.length, o = 0; o < r; o++) {
    var i = t.charCodeAt(o);
    if (i >= 55296 && i <= 56319 && r > o + 1) {
      var a = t.charCodeAt(o + 1);
      a >= 56320 && a <= 57343 && (i = (i - 55296) * 1024 + a - 56320 + 65536, o += 1);
    }
    if (i < 128) {
      n.push(i);
      continue;
    }
    if (i < 2048) {
      n.push(i >> 6 | 192), n.push(i & 63 | 128);
      continue;
    }
    if (i < 55296 || i >= 57344 && i < 65536) {
      n.push(i >> 12 | 224), n.push(i >> 6 & 63 | 128), n.push(i & 63 | 128);
      continue;
    }
    if (i >= 65536 && i <= 1114111) {
      n.push(i >> 18 | 240), n.push(i >> 12 & 63 | 128), n.push(i >> 6 & 63 | 128), n.push(i & 63 | 128);
      continue;
    }
    n.push(239, 191, 189);
  }
  return new Uint8Array(n).buffer;
};
const V1 = W1, j1 = Ze;
function mt(e) {
  this.mode = j1.BYTE, this.data = new Uint8Array(V1(e));
}
mt.getBitsLength = function(t) {
  return t * 8;
};
mt.prototype.getLength = function() {
  return this.data.length;
};
mt.prototype.getBitsLength = function() {
  return mt.getBitsLength(this.data.length);
};
mt.prototype.write = function(e) {
  for (let t = 0, n = this.data.length; t < n; t++)
    e.put(this.data[t], 8);
};
var H1 = mt;
const Y1 = Ze, K1 = Se;
function gt(e) {
  this.mode = Y1.KANJI, this.data = e;
}
gt.getBitsLength = function(t) {
  return t * 13;
};
gt.prototype.getLength = function() {
  return this.data.length;
};
gt.prototype.getBitsLength = function() {
  return gt.getBitsLength(this.data.length);
};
gt.prototype.write = function(e) {
  let t;
  for (t = 0; t < this.data.length; t++) {
    let n = K1.toSJIS(this.data[t]);
    if (n >= 33088 && n <= 40956)
      n -= 33088;
    else if (n >= 57408 && n <= 60351)
      n -= 49472;
    else
      throw new Error(
        "Invalid SJIS character: " + this.data[t] + `
Make sure your charset is UTF-8`
      );
    n = (n >>> 8 & 255) * 192 + (n & 255), e.put(n, 13);
  }
};
var q1 = gt, Ja = { exports: {} };
(function(e) {
  var t = {
    single_source_shortest_paths: function(n, r, o) {
      var i = {}, a = {};
      a[r] = 0;
      var s = t.PriorityQueue.make();
      s.push(r, 0);
      for (var l, c, u, m, f, p, h, v, b; !s.empty(); ) {
        l = s.pop(), c = l.value, m = l.cost, f = n[c] || {};
        for (u in f)
          f.hasOwnProperty(u) && (p = f[u], h = m + p, v = a[u], b = typeof a[u] > "u", (b || v > h) && (a[u] = h, s.push(u, h), i[u] = c));
      }
      if (typeof o < "u" && typeof a[o] > "u") {
        var g = ["Could not find a path from ", r, " to ", o, "."].join("");
        throw new Error(g);
      }
      return i;
    },
    extract_shortest_path_from_predecessor_list: function(n, r) {
      for (var o = [], i = r; i; )
        o.push(i), n[i], i = n[i];
      return o.reverse(), o;
    },
    find_path: function(n, r, o) {
      var i = t.single_source_shortest_paths(n, r, o);
      return t.extract_shortest_path_from_predecessor_list(
        i,
        o
      );
    },
    /**
     * A very naive priority queue implementation.
     */
    PriorityQueue: {
      make: function(n) {
        var r = t.PriorityQueue, o = {}, i;
        n = n || {};
        for (i in r)
          r.hasOwnProperty(i) && (o[i] = r[i]);
        return o.queue = [], o.sorter = n.sorter || r.default_sorter, o;
      },
      default_sorter: function(n, r) {
        return n.cost - r.cost;
      },
      /**
       * Add a new item to the queue and ensure the highest priority element
       * is at the front of the queue.
       */
      push: function(n, r) {
        var o = { value: n, cost: r };
        this.queue.push(o), this.queue.sort(this.sorter);
      },
      /**
       * Return the highest priority element in the queue.
       */
      pop: function() {
        return this.queue.shift();
      },
      empty: function() {
        return this.queue.length === 0;
      }
    }
  };
  e.exports = t;
})(Ja);
var J1 = Ja.exports;
(function(e) {
  const t = Ze, n = L1, r = z1, o = H1, i = q1, a = Me, s = Se, l = J1;
  function c(g) {
    return unescape(encodeURIComponent(g)).length;
  }
  function u(g, w, y) {
    const S = [];
    let I;
    for (; (I = g.exec(y)) !== null; )
      S.push({
        data: I[0],
        index: I.index,
        mode: w,
        length: I[0].length
      });
    return S;
  }
  function m(g) {
    const w = u(a.NUMERIC, t.NUMERIC, g), y = u(a.ALPHANUMERIC, t.ALPHANUMERIC, g);
    let S, I;
    return s.isKanjiModeEnabled() ? (S = u(a.BYTE, t.BYTE, g), I = u(a.KANJI, t.KANJI, g)) : (S = u(a.BYTE_KANJI, t.BYTE, g), I = []), w.concat(y, S, I).sort(function(P, k) {
      return P.index - k.index;
    }).map(function(P) {
      return {
        data: P.data,
        mode: P.mode,
        length: P.length
      };
    });
  }
  function f(g, w) {
    switch (w) {
      case t.NUMERIC:
        return n.getBitsLength(g);
      case t.ALPHANUMERIC:
        return r.getBitsLength(g);
      case t.KANJI:
        return i.getBitsLength(g);
      case t.BYTE:
        return o.getBitsLength(g);
    }
  }
  function p(g) {
    return g.reduce(function(w, y) {
      const S = w.length - 1 >= 0 ? w[w.length - 1] : null;
      return S && S.mode === y.mode ? (w[w.length - 1].data += y.data, w) : (w.push(y), w);
    }, []);
  }
  function h(g) {
    const w = [];
    for (let y = 0; y < g.length; y++) {
      const S = g[y];
      switch (S.mode) {
        case t.NUMERIC:
          w.push([
            S,
            { data: S.data, mode: t.ALPHANUMERIC, length: S.length },
            { data: S.data, mode: t.BYTE, length: S.length }
          ]);
          break;
        case t.ALPHANUMERIC:
          w.push([
            S,
            { data: S.data, mode: t.BYTE, length: S.length }
          ]);
          break;
        case t.KANJI:
          w.push([
            S,
            { data: S.data, mode: t.BYTE, length: c(S.data) }
          ]);
          break;
        case t.BYTE:
          w.push([
            { data: S.data, mode: t.BYTE, length: c(S.data) }
          ]);
      }
    }
    return w;
  }
  function v(g, w) {
    const y = {}, S = { start: {} };
    let I = ["start"];
    for (let T = 0; T < g.length; T++) {
      const P = g[T], k = [];
      for (let $ = 0; $ < P.length; $++) {
        const F = P[$], O = "" + T + $;
        k.push(O), y[O] = { node: F, lastCount: 0 }, S[O] = {};
        for (let B = 0; B < I.length; B++) {
          const G = I[B];
          y[G] && y[G].node.mode === F.mode ? (S[G][O] = f(y[G].lastCount + F.length, F.mode) - f(y[G].lastCount, F.mode), y[G].lastCount += F.length) : (y[G] && (y[G].lastCount = F.length), S[G][O] = f(F.length, F.mode) + 4 + t.getCharCountIndicator(F.mode, w));
        }
      }
      I = k;
    }
    for (let T = 0; T < I.length; T++)
      S[I[T]].end = 0;
    return { map: S, table: y };
  }
  function b(g, w) {
    let y;
    const S = t.getBestModeForData(g);
    if (y = t.from(w, S), y !== t.BYTE && y.bit < S.bit)
      throw new Error('"' + g + '" cannot be encoded with mode ' + t.toString(y) + `.
 Suggested mode is: ` + t.toString(S));
    switch (y === t.KANJI && !s.isKanjiModeEnabled() && (y = t.BYTE), y) {
      case t.NUMERIC:
        return new n(g);
      case t.ALPHANUMERIC:
        return new r(g);
      case t.KANJI:
        return new i(g);
      case t.BYTE:
        return new o(g);
    }
  }
  e.fromArray = function(w) {
    return w.reduce(function(y, S) {
      return typeof S == "string" ? y.push(b(S, null)) : S.data && y.push(b(S.data, S.mode)), y;
    }, []);
  }, e.fromString = function(w, y) {
    const S = m(w, s.isKanjiModeEnabled()), I = h(S), T = v(I, y), P = l.find_path(T.map, "start", "end"), k = [];
    for (let $ = 1; $ < P.length - 1; $++)
      k.push(T.table[P[$]].node);
    return e.fromArray(p(k));
  }, e.rawSplit = function(w) {
    return e.fromArray(
      m(w, s.isKanjiModeEnabled())
    );
  };
})(qa);
const Jn = Se, or = Yn, Z1 = k1, Q1 = N1, X1 = La, eC = Ga, br = za, Cr = Kn, tC = $1, Cn = ja, nC = Ya, rC = Ze, ir = qa;
function oC(e, t) {
  const n = e.size, r = eC.getPositions(t);
  for (let o = 0; o < r.length; o++) {
    const i = r[o][0], a = r[o][1];
    for (let s = -1; s <= 7; s++)
      if (!(i + s <= -1 || n <= i + s))
        for (let l = -1; l <= 7; l++)
          a + l <= -1 || n <= a + l || (s >= 0 && s <= 6 && (l === 0 || l === 6) || l >= 0 && l <= 6 && (s === 0 || s === 6) || s >= 2 && s <= 4 && l >= 2 && l <= 4 ? e.set(i + s, a + l, !0, !0) : e.set(i + s, a + l, !1, !0));
  }
}
function iC(e) {
  const t = e.size;
  for (let n = 8; n < t - 8; n++) {
    const r = n % 2 === 0;
    e.set(n, 6, r, !0), e.set(6, n, r, !0);
  }
}
function aC(e, t) {
  const n = X1.getPositions(t);
  for (let r = 0; r < n.length; r++) {
    const o = n[r][0], i = n[r][1];
    for (let a = -2; a <= 2; a++)
      for (let s = -2; s <= 2; s++)
        a === -2 || a === 2 || s === -2 || s === 2 || a === 0 && s === 0 ? e.set(o + a, i + s, !0, !0) : e.set(o + a, i + s, !1, !0);
  }
}
function sC(e, t) {
  const n = e.size, r = Cn.getEncodedBits(t);
  let o, i, a;
  for (let s = 0; s < 18; s++)
    o = Math.floor(s / 3), i = s % 3 + n - 8 - 3, a = (r >> s & 1) === 1, e.set(o, i, a, !0), e.set(i, o, a, !0);
}
function ar(e, t, n) {
  const r = e.size, o = nC.getEncodedBits(t, n);
  let i, a;
  for (i = 0; i < 15; i++)
    a = (o >> i & 1) === 1, i < 6 ? e.set(i, 8, a, !0) : i < 8 ? e.set(i + 1, 8, a, !0) : e.set(r - 15 + i, 8, a, !0), i < 8 ? e.set(8, r - i - 1, a, !0) : i < 9 ? e.set(8, 15 - i - 1 + 1, a, !0) : e.set(8, 15 - i - 1, a, !0);
  e.set(r - 8, 8, 1, !0);
}
function lC(e, t) {
  const n = e.size;
  let r = -1, o = n - 1, i = 7, a = 0;
  for (let s = n - 1; s > 0; s -= 2)
    for (s === 6 && s--; ; ) {
      for (let l = 0; l < 2; l++)
        if (!e.isReserved(o, s - l)) {
          let c = !1;
          a < t.length && (c = (t[a] >>> i & 1) === 1), e.set(o, s - l, c), i--, i === -1 && (a++, i = 7);
        }
      if (o += r, o < 0 || n <= o) {
        o -= r, r = -r;
        break;
      }
    }
}
function cC(e, t, n) {
  const r = new Z1();
  n.forEach(function(l) {
    r.put(l.mode.bit, 4), r.put(l.getLength(), rC.getCharCountIndicator(l.mode, e)), l.write(r);
  });
  const o = Jn.getSymbolTotalCodewords(e), i = Cr.getTotalCodewordsCount(e, t), a = (o - i) * 8;
  for (r.getLengthInBits() + 4 <= a && r.put(0, 4); r.getLengthInBits() % 8 !== 0; )
    r.putBit(0);
  const s = (a - r.getLengthInBits()) / 8;
  for (let l = 0; l < s; l++)
    r.put(l % 2 ? 17 : 236, 8);
  return uC(r, e, t);
}
function uC(e, t, n) {
  const r = Jn.getSymbolTotalCodewords(t), o = Cr.getTotalCodewordsCount(t, n), i = r - o, a = Cr.getBlocksCount(t, n), s = r % a, l = a - s, c = Math.floor(r / a), u = Math.floor(i / a), m = u + 1, f = c - u, p = new tC(f);
  let h = 0;
  const v = new Array(a), b = new Array(a);
  let g = 0;
  const w = new Uint8Array(e.buffer);
  for (let P = 0; P < a; P++) {
    const k = P < l ? u : m;
    v[P] = w.slice(h, h + k), b[P] = p.encode(v[P]), h += k, g = Math.max(g, k);
  }
  const y = new Uint8Array(r);
  let S = 0, I, T;
  for (I = 0; I < g; I++)
    for (T = 0; T < a; T++)
      I < v[T].length && (y[S++] = v[T][I]);
  for (I = 0; I < f; I++)
    for (T = 0; T < a; T++)
      y[S++] = b[T][I];
  return y;
}
function dC(e, t, n, r) {
  let o;
  if (Array.isArray(e))
    o = ir.fromArray(e);
  else if (typeof e == "string") {
    let c = t;
    if (!c) {
      const u = ir.rawSplit(e);
      c = Cn.getBestVersionForData(u, n);
    }
    o = ir.fromString(e, c || 40);
  } else
    throw new Error("Invalid data");
  const i = Cn.getBestVersionForData(o, n);
  if (!i)
    throw new Error("The amount of data is too big to be stored in a QR Code");
  if (!t)
    t = i;
  else if (t < i)
    throw new Error(
      `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + i + `.
`
    );
  const a = cC(t, n, o), s = Jn.getSymbolSize(t), l = new Q1(s);
  return oC(l, t), iC(l), aC(l, t), ar(l, n, 0), t >= 7 && sC(l, t), lC(l, a), isNaN(r) && (r = br.getBestMask(
    l,
    ar.bind(null, l, n)
  )), br.applyMask(r, l), ar(l, n, r), {
    modules: l,
    version: t,
    errorCorrectionLevel: n,
    maskPattern: r,
    segments: o
  };
}
Da.create = function(t, n) {
  if (typeof t > "u" || t === "")
    throw new Error("No input text");
  let r = or.M, o, i;
  return typeof n < "u" && (r = or.from(n.errorCorrectionLevel, or.M), o = Cn.from(n.version), i = br.from(n.maskPattern), n.toSJISFunc && Jn.setToSJISFunction(n.toSJISFunc)), dC(t, o, r, i);
};
var Za = {}, oo = {};
(function(e) {
  function t(n) {
    if (typeof n == "number" && (n = n.toString()), typeof n != "string")
      throw new Error("Color should be defined as hex string");
    let r = n.slice().replace("#", "").split("");
    if (r.length < 3 || r.length === 5 || r.length > 8)
      throw new Error("Invalid hex color: " + n);
    (r.length === 3 || r.length === 4) && (r = Array.prototype.concat.apply([], r.map(function(i) {
      return [i, i];
    }))), r.length === 6 && r.push("F", "F");
    const o = parseInt(r.join(""), 16);
    return {
      r: o >> 24 & 255,
      g: o >> 16 & 255,
      b: o >> 8 & 255,
      a: o & 255,
      hex: "#" + r.slice(0, 6).join("")
    };
  }
  e.getOptions = function(r) {
    r || (r = {}), r.color || (r.color = {});
    const o = typeof r.margin > "u" || r.margin === null || r.margin < 0 ? 4 : r.margin, i = r.width && r.width >= 21 ? r.width : void 0, a = r.scale || 4;
    return {
      width: i,
      scale: i ? 4 : a,
      margin: o,
      color: {
        dark: t(r.color.dark || "#000000ff"),
        light: t(r.color.light || "#ffffffff")
      },
      type: r.type,
      rendererOpts: r.rendererOpts || {}
    };
  }, e.getScale = function(r, o) {
    return o.width && o.width >= r + o.margin * 2 ? o.width / (r + o.margin * 2) : o.scale;
  }, e.getImageWidth = function(r, o) {
    const i = e.getScale(r, o);
    return Math.floor((r + o.margin * 2) * i);
  }, e.qrToImageData = function(r, o, i) {
    const a = o.modules.size, s = o.modules.data, l = e.getScale(a, i), c = Math.floor((a + i.margin * 2) * l), u = i.margin * l, m = [i.color.light, i.color.dark];
    for (let f = 0; f < c; f++)
      for (let p = 0; p < c; p++) {
        let h = (f * c + p) * 4, v = i.color.light;
        if (f >= u && p >= u && f < c - u && p < c - u) {
          const b = Math.floor((f - u) / l), g = Math.floor((p - u) / l);
          v = m[s[b * a + g] ? 1 : 0];
        }
        r[h++] = v.r, r[h++] = v.g, r[h++] = v.b, r[h] = v.a;
      }
  };
})(oo);
(function(e) {
  const t = oo;
  function n(o, i, a) {
    o.clearRect(0, 0, i.width, i.height), i.style || (i.style = {}), i.height = a, i.width = a, i.style.height = a + "px", i.style.width = a + "px";
  }
  function r() {
    try {
      return document.createElement("canvas");
    } catch {
      throw new Error("You need to specify a canvas element");
    }
  }
  e.render = function(i, a, s) {
    let l = s, c = a;
    typeof l > "u" && (!a || !a.getContext) && (l = a, a = void 0), a || (c = r()), l = t.getOptions(l);
    const u = t.getImageWidth(i.modules.size, l), m = c.getContext("2d"), f = m.createImageData(u, u);
    return t.qrToImageData(f.data, i, l), n(m, c, u), m.putImageData(f, 0, 0), c;
  }, e.renderToDataURL = function(i, a, s) {
    let l = s;
    typeof l > "u" && (!a || !a.getContext) && (l = a, a = void 0), l || (l = {});
    const c = e.render(i, a, l), u = l.type || "image/png", m = l.rendererOpts || {};
    return c.toDataURL(u, m.quality);
  };
})(Za);
var Qa = {};
const fC = oo;
function li(e, t) {
  const n = e.a / 255, r = t + '="' + e.hex + '"';
  return n < 1 ? r + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : r;
}
function sr(e, t, n) {
  let r = e + t;
  return typeof n < "u" && (r += " " + n), r;
}
function pC(e, t, n) {
  let r = "", o = 0, i = !1, a = 0;
  for (let s = 0; s < e.length; s++) {
    const l = Math.floor(s % t), c = Math.floor(s / t);
    !l && !i && (i = !0), e[s] ? (a++, s > 0 && l > 0 && e[s - 1] || (r += i ? sr("M", l + n, 0.5 + c + n) : sr("m", o, 0), o = 0, i = !1), l + 1 < t && e[s + 1] || (r += sr("h", a), a = 0)) : o++;
  }
  return r;
}
Qa.render = function(t, n, r) {
  const o = fC.getOptions(n), i = t.modules.size, a = t.modules.data, s = i + o.margin * 2, l = o.color.light.a ? "<path " + li(o.color.light, "fill") + ' d="M0 0h' + s + "v" + s + 'H0z"/>' : "", c = "<path " + li(o.color.dark, "stroke") + ' d="' + pC(a, i, o.margin) + '"/>', u = 'viewBox="0 0 ' + s + " " + s + '"', f = '<svg xmlns="http://www.w3.org/2000/svg" ' + (o.width ? 'width="' + o.width + '" height="' + o.width + '" ' : "") + u + ' shape-rendering="crispEdges">' + l + c + `</svg>
`;
  return typeof r == "function" && r(null, f), f;
};
const mC = T1, Ar = Da, Xa = Za, gC = Qa;
function io(e, t, n, r, o) {
  const i = [].slice.call(arguments, 1), a = i.length, s = typeof i[a - 1] == "function";
  if (!s && !mC())
    throw new Error("Callback required as last argument");
  if (s) {
    if (a < 2)
      throw new Error("Too few arguments provided");
    a === 2 ? (o = n, n = t, t = r = void 0) : a === 3 && (t.getContext && typeof o > "u" ? (o = r, r = void 0) : (o = r, r = n, n = t, t = void 0));
  } else {
    if (a < 1)
      throw new Error("Too few arguments provided");
    return a === 1 ? (n = t, t = r = void 0) : a === 2 && !t.getContext && (r = n, n = t, t = void 0), new Promise(function(l, c) {
      try {
        const u = Ar.create(n, r);
        l(e(u, t, r));
      } catch (u) {
        c(u);
      }
    });
  }
  try {
    const l = Ar.create(n, r);
    o(null, e(l, t, r));
  } catch (l) {
    o(l);
  }
}
Yt.create = Ar.create;
Yt.toCanvas = io.bind(null, Xa.render);
Yt.toDataURL = io.bind(null, Xa.renderToDataURL);
Yt.toString = io.bind(null, function(e, t, n) {
  return gC.render(e, n);
});
const hC = { key: 0 }, yC = ["src"], vC = { "data-amplify-copy-tooltip": "" }, _C = /* @__PURE__ */ x("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ x("path", { d: "M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM15 5H8C6.9 5 6.01 5.9 6.01 7L6 21C6 22.1 6.89 23 7.99 23H19C20.1 23 21 22.1 21 21V11L15 5ZM8 21V7H14V12H19V21H8Z" })
], -1), wC = /* @__PURE__ */ q({
  __name: "setup-totp",
  setup(e) {
    const t = new vs("SetupTotp-logger"), n = ye(), { updateForm: r, submitForm: o, toSignIn: i, totpSecretCode: a, username: s, QRFields: l } = n, { error: c, isPending: u } = re(n), { totpIssuer: m = "AWSCognito", totpUsername: f = s } = l ?? {}, p = sl(m, f, a), h = ui({
      qrCodeImageSource: "",
      isLoading: !0
    }), { getCopyText: v, getCopiedText: b, getBackToSignInText: g, getConfirmText: w } = Ee, y = le(v());
    function S() {
      a && navigator.clipboard.writeText(a), y.value = b();
    }
    di(async () => {
      try {
        h.qrCodeImageSource = await Yt.toDataURL(p);
      } catch (F) {
        t.error(F);
      } finally {
        h.isLoading = !1;
      }
    });
    const I = D(() => g()), T = D(() => w()), P = (F) => {
      const { name: O, value: B } = F.target;
      r({ name: O, value: B });
    }, k = (F) => {
      o($e(F));
    }, $ = () => {
      i();
    };
    return (F, O) => {
      const B = Je, G = me, ae = Oe, be = we, Te = Ne, fe = Re, ge = Ue;
      return E(F.$slots, "confirmSetupTotpI", oe(ie(F.$attrs)), () => [
        C(G, oe(ie(F.$attrs)), {
          default: _(() => [
            C(ge, {
              "data-amplify-authenticator-setup-totp": "",
              onInput: P,
              onSubmit: ue(k, ["prevent"])
            }, {
              default: _(() => [
                C(fe, {
                  class: "amplify-flex amplify-authenticator__column",
                  disabled: d(u)
                }, {
                  default: _(() => [
                    C(G, { class: "amplify-flex amplify-authenticator__column" }, {
                      default: _(() => [
                        E(F.$slots, "header", {}, () => [
                          C(B, {
                            class: "amplify-heading",
                            level: 3
                          }, {
                            default: _(() => [
                              M(" Setup TOTP ")
                            ]),
                            _: 1
                          })
                        ]),
                        C(G, { class: "amplify-flex amplify-authenticator__column" }, {
                          default: _(() => [
                            h.isLoading ? (U(), X("p", hC, "Loading...")) : (U(), X("img", {
                              key: 1,
                              class: "amplify-image",
                              "data-amplify-qrcode": "",
                              src: h.qrCodeImageSource,
                              alt: "qr code",
                              width: "228",
                              height: "228"
                            }, null, 8, yC)),
                            C(G, {
                              class: "amplify-flex",
                              "data-amplify-copy": ""
                            }, {
                              default: _(() => [
                                x("div", null, R(d(a)), 1),
                                C(G, {
                                  "data-amplify-copy-svg": "",
                                  onClick: S
                                }, {
                                  default: _(() => [
                                    x("div", vC, R(y.value), 1),
                                    _C
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            C(xe, { route: "setupTotp" })
                          ]),
                          _: 1
                        }),
                        C(Te, { class: "amplify-flex amplify-authenticator__column" }, {
                          default: _(() => [
                            d(c) ? (U(), W(ae, { key: 0 }, {
                              default: _(() => [
                                M(R(d(N)(d(c))), 1)
                              ]),
                              _: 1
                            })) : j("", !0),
                            C(be, {
                              class: "amplify-field-group__control amplify-authenticator__font",
                              fullwidth: !1,
                              loading: !1,
                              variation: "primary",
                              type: "submit",
                              disabled: d(u)
                            }, {
                              default: _(() => [
                                M(R(d(T)), 1)
                              ]),
                              _: 1
                            }, 8, ["disabled"]),
                            C(be, {
                              class: "amplify-field-group__control amplify-authenticator__font",
                              fullwidth: !1,
                              size: "small",
                              variation: "link",
                              style: { "font-weight": "normal" },
                              type: "button",
                              onClick: ue($, ["prevent"])
                            }, {
                              default: _(() => [
                                M(R(d(I)), 1)
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            E(F.$slots, "footer")
                          ]),
                          _: 3
                        })
                      ]),
                      _: 3
                    })
                  ]),
                  _: 3
                }, 8, ["disabled"])
              ]),
              _: 3
            }, 8, ["onSubmit"])
          ]),
          _: 3
        }, 16)
      ]);
    };
  }
}), es = /* @__PURE__ */ q({
  __name: "authenticator-force-new-password-form-fields",
  setup(e) {
    return (t, n) => (U(), W(xe, { route: "forceNewPassword" }));
  }
}), ts = /* @__PURE__ */ q({
  __name: "force-new-password",
  setup(e) {
    const t = ye(), { submitForm: n, toSignIn: r, updateBlur: o, updateForm: i } = t, { error: a, isPending: s } = re(t), { getChangePasswordText: l, getChangingText: c, getBackToSignInText: u } = Ee, m = D(() => l()), f = D(() => c()), p = D(() => u()), h = () => {
      r();
    }, v = (y) => {
      b(y);
    }, b = (y) => {
      n($e(y));
    }, g = (y) => {
      const { name: S, value: I } = y.target;
      i({ name: S, value: I });
    };
    function w(y) {
      const { name: S } = y.target;
      o({ name: S });
    }
    return (y, S) => {
      const I = Je, T = me, P = Oe, k = we, $ = Ne, F = Re, O = Ue;
      return E(y.$slots, "forceNewPasswordI", oe(ie(y.$attrs)), () => [
        C(T, oe(ie(y.$attrs)), {
          default: _(() => [
            C(O, {
              "data-amplify-authenticator-forcenewpassword": "",
              onInput: g,
              onBlurCapture: w,
              onSubmit: ue(v, ["prevent"])
            }, {
              default: _(() => [
                C(F, {
                  class: "amplify-flex amplify-authenticator__column",
                  disabled: d(s)
                }, {
                  default: _(() => [
                    E(y.$slots, "header", {}, () => [
                      C(I, {
                        level: 3,
                        class: "amplify-heading"
                      }, {
                        default: _(() => [
                          M(R(d(m)), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    C(T, { class: "amplify-flex amplify-authenticator__column" }, {
                      default: _(() => [
                        E(y.$slots, "force-new-password-form-fields", {}, () => [
                          C(es)
                        ])
                      ]),
                      _: 3
                    }),
                    C($, { class: "amplify-flex amplify-authenticator__column" }, {
                      default: _(() => [
                        d(a) ? (U(), W(P, {
                          key: 0,
                          "data-ui-error": ""
                        }, {
                          default: _(() => [
                            M(R(d(N)(d(a))), 1)
                          ]),
                          _: 1
                        })) : j("", !0),
                        C(k, {
                          class: "amplify-field-group__control amplify-authenticator__font",
                          fullwidth: !1,
                          loading: !1,
                          variation: "primary",
                          style: { "font-weight": "normal" },
                          disabled: d(s)
                        }, {
                          default: _(() => [
                            M(R(d(s) ? d(f) + "…" : d(m)), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        C(k, {
                          class: "amplify-field-group__control amplify-authenticator__font",
                          fullwidth: !1,
                          size: "small",
                          variation: "link",
                          style: { "font-weight": "normal" },
                          type: "button",
                          onClick: ue(h, ["prevent"])
                        }, {
                          default: _(() => [
                            M(R(d(p)), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        E(y.$slots, "footer", {
                          onHaveAccountClicked: h,
                          onForceNewPasswordSubmit: v
                        })
                      ]),
                      _: 3
                    })
                  ]),
                  _: 3
                }, 8, ["disabled"])
              ]),
              _: 3
            }, 8, ["onSubmit"])
          ]),
          _: 3
        }, 16)
      ]);
    };
  }
}), ns = /* @__PURE__ */ q({
  __name: "forgot-password",
  setup(e) {
    const t = ye(), { submitForm: n, toSignIn: r, updateForm: o } = t, { error: i, isPending: a } = re(t), { getBackToSignInText: s, getResetYourPasswordText: l, getSendCodeText: c } = Ee, u = D(() => s()), m = D(() => l()), f = D(() => c()), p = (b) => {
      n($e(b));
    }, h = (b) => {
      const { name: g, value: w } = b.target;
      o({ name: g, value: w });
    }, v = () => {
      r();
    };
    return (b, g) => {
      const w = Je, y = Re, S = Oe, I = we, T = Ne, P = me, k = Ue;
      return E(b.$slots, "forgotPasswordSlotI", oe(ie(b.$attrs)), () => [
        C(k, Ie(b.$attrs, {
          "data-amplify-authenticator-forgotpassword": "",
          onInput: h,
          onSubmit: ue(p, ["prevent"])
        }), {
          default: _(() => [
            C(P, { class: "amplify-flex amplify-authenticator__column" }, {
              default: _(() => [
                E(b.$slots, "header", {}, () => [
                  C(w, {
                    class: "amplify-heading",
                    level: 3
                  }, {
                    default: _(() => [
                      M(R(d(m)), 1)
                    ]),
                    _: 1
                  })
                ]),
                C(y, {
                  class: "amplify-flex amplify-authenticator__column",
                  disabled: d(a)
                }, {
                  default: _(() => [
                    C(xe, { route: "forgotPassword" })
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                C(T, { class: "amplify-flex amplify-authenticator__column" }, {
                  default: _(() => [
                    d(i) ? (U(), W(S, { key: 0 }, {
                      default: _(() => [
                        M(R(d(N)(d(i))), 1)
                      ]),
                      _: 1
                    })) : j("", !0),
                    C(I, {
                      class: "amplify-field-group__control amplify-authenticator__font",
                      fullwidth: !1,
                      variation: "primary",
                      type: "submit",
                      disabled: d(a)
                    }, {
                      default: _(() => [
                        M(R(d(f)), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled"]),
                    C(I, {
                      class: "amplify-field-group__control amplify-authenticator__font",
                      fullwidth: !1,
                      size: "small",
                      variation: "link",
                      style: { "font-weight": "normal" },
                      type: "button",
                      onClick: ue(v, ["prevent"])
                    }, {
                      default: _(() => [
                        M(R(d(u)), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    E(b.$slots, "footer", {
                      onBackToSignInClicked: v,
                      onResetPasswordSubmit: p
                    })
                  ]),
                  _: 3
                })
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 16, ["onSubmit"])
      ]);
    };
  }
}), rs = /* @__PURE__ */ q({
  __name: "confirm-reset-password",
  setup(e) {
    const t = ye(), { resendCode: n, submitForm: r, updateBlur: o, updateForm: i } = t, { error: a, isPending: s } = re(t), { getResendCodeText: l, getResetYourPasswordText: c, getSubmitText: u } = Ee, m = D(() => l()), f = D(() => c()), p = D(() => u()), h = (y) => {
      v(y);
    }, v = (y) => {
      r($e(y));
    }, b = () => {
      n();
    }, g = (y) => {
      const { name: S, value: I } = y.target;
      i({ name: S, value: I });
    };
    function w(y) {
      const { name: S } = y.target;
      o({ name: S });
    }
    return (y, S) => {
      const I = Je, T = me, P = Oe, k = we, $ = Ne, F = Re, O = Ue;
      return E(y.$slots, "confirmResetPasswordSlotI", oe(ie(y.$attrs)), () => [
        C(T, oe(ie(y.$attrs)), {
          default: _(() => [
            C(O, {
              "data-amplify-authenticator-confirmResetpassword": "",
              onInput: g,
              onBlurCapture: w,
              onSubmit: ue(h, ["prevent"])
            }, {
              default: _(() => [
                C(F, {
                  class: "amplify-flex amplify-authenticator__column",
                  disabled: d(s)
                }, {
                  default: _(() => [
                    E(y.$slots, "header", {}, () => [
                      C(I, {
                        class: "amplify-heading",
                        level: 3
                      }, {
                        default: _(() => [
                          M(R(d(f)), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    C(T, { class: "amplify-flex amplify-authenticator__column" }, {
                      default: _(() => [
                        C(xe, { route: "confirmResetPassword" })
                      ]),
                      _: 1
                    }),
                    C($, { class: "amplify-flex amplify-authenticator__column" }, {
                      default: _(() => [
                        d(a) ? (U(), W(P, { key: 0 }, {
                          default: _(() => [
                            M(R(d(N)(d(a))), 1)
                          ]),
                          _: 1
                        })) : j("", !0),
                        C(k, {
                          class: "amplify-field-group__control amplify-authenticator__font",
                          variation: "primary",
                          fullwidth: !1,
                          type: "submit",
                          disabled: d(s)
                        }, {
                          default: _(() => [
                            M(R(d(p)), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        C(k, {
                          class: "amplify-field-group__control amplify-authenticator__font",
                          variation: "link",
                          fullwidth: !1,
                          size: "small",
                          type: "button",
                          onClick: ue(b, ["prevent"])
                        }, {
                          default: _(() => [
                            M(R(d(m)), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        E(y.$slots, "footer")
                      ]),
                      _: 3
                    })
                  ]),
                  _: 3
                }, 8, ["disabled"])
              ]),
              _: 3
            }, 8, ["onSubmit"])
          ]),
          _: 3
        }, 16)
      ]);
    };
  }
}), os = /* @__PURE__ */ q({
  __name: "verify-user",
  setup(e) {
    const t = ye(), { isPending: n, unverifiedUserAttributes: r, error: o } = re(t), { skipVerification: i, submitForm: a, updateForm: s } = t, { getAccountRecoveryInfoText: l, getSkipText: c, getVerifyText: u, getVerifyContactText: m } = Ee, f = D(() => l()), p = D(() => c()), h = D(() => u()), v = D(() => m()), b = (S) => {
      const { name: I, value: T } = S.target;
      s({ name: I, value: T });
    }, g = (S) => {
      w(S);
    }, w = (S) => {
      a($e(S));
    }, y = () => {
      i();
    };
    return (S, I) => {
      const T = Je, P = Hn, k = Ra, $ = jn, F = me, O = Oe, B = we, G = Ne, ae = Re, be = Ue;
      return E(S.$slots, "verifyUserSlotI", {}, () => [
        C(F, null, {
          default: _(() => [
            C(be, {
              onInput: b,
              onSubmit: ue(g, ["prevent"])
            }, {
              default: _(() => [
                C(ae, {
                  disabled: d(n),
                  class: "amplify-flex amplify-authenticator__column"
                }, {
                  default: _(() => [
                    E(S.$slots, "header", {}, () => [
                      C(T, {
                        class: "amplify-heading",
                        level: 3
                      }, {
                        default: _(() => [
                          M(R(d(f)), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    C(F, { class: "amplify-flex amplify-field amplify-radiogroupfield amplify-authenticator__column" }, {
                      default: _(() => [
                        C(P, {
                          class: "amplify-visually-hidden amplify-label",
                          id: "amplify-field-493c"
                        }, {
                          default: _(() => [
                            M(R(d(v)), 1)
                          ]),
                          _: 1
                        }),
                        C(F, {
                          class: "amplify-flex amplify-field amplify-radiogroupfield amplify-authenticator__column",
                          "aria-labelledby": "amplify-field-493c"
                        }, {
                          default: _(() => [
                            (U(!0), X(He, null, An(d(r), (Te, fe, ge) => (U(), X(He, { key: Te }, [
                              Te ? (U(), W(P, {
                                key: 0,
                                class: "amplify-flex amplify-radio",
                                "data-amplify-verify-label": ""
                              }, {
                                default: _(() => [
                                  C(k, { class: "amplify-text amplify-radio__label" }, {
                                    default: _(() => [
                                      M(R(d(N)(d(Bt)[fe].label)) + ": " + R(d(il)(d(Bt)[fe].label, Te)), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  C($, {
                                    class: "amplify-input amplify-field-group__control amplify-visually-hidden amplify-radio__input",
                                    "aria-invalid": "false",
                                    "data-amplify-verify-input": "",
                                    name: "unverifiedAttr",
                                    type: "radio",
                                    checked: ge === 0,
                                    value: fe
                                  }, null, 8, ["checked", "value"]),
                                  C(k, {
                                    class: "amplify-flex amplify-radio__button",
                                    "aria-hidden": "true"
                                  })
                                ]),
                                _: 2
                              }, 1024)) : j("", !0)
                            ], 64))), 128))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    C(G, { class: "amplify-flex amplify-authenticator__column" }, {
                      default: _(() => [
                        d(o) ? (U(), W(O, { key: 0 }, {
                          default: _(() => [
                            M(R(d(N)(d(o))), 1)
                          ]),
                          _: 1
                        })) : j("", !0),
                        C(B, {
                          class: "amplify-field-group__control amplify-authenticator__font",
                          fullwidth: !1,
                          variation: "primary",
                          type: "submit",
                          disabled: d(n)
                        }, {
                          default: _(() => [
                            M(R(d(h)), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        C(B, {
                          class: "amplify-field-group__control amplify-authenticator__font",
                          fullwidth: !1,
                          size: "small",
                          variation: "link",
                          style: { "font-weight": "normal" },
                          type: "button",
                          onClick: ue(y, ["prevent"])
                        }, {
                          default: _(() => [
                            M(R(d(p)), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        E(S.$slots, "footer")
                      ]),
                      _: 3
                    })
                  ]),
                  _: 3
                }, 8, ["disabled"])
              ]),
              _: 3
            }, 8, ["onSubmit"])
          ]),
          _: 3
        })
      ]);
    };
  }
}), is = /* @__PURE__ */ q({
  __name: "confirm-verify-user",
  setup(e) {
    const t = ye(), { error: n, isPending: r } = re(t), { skipVerification: o, submitForm: i, updateForm: a } = t, { getAccountRecoveryInfoText: s, getSkipText: l, getSubmitText: c } = Ee, u = D(() => s()), m = D(() => l()), f = D(() => c()), p = (g) => {
      const { name: w, value: y } = g.target;
      a({ name: w, value: y });
    }, h = (g) => {
      v(g);
    }, v = (g) => {
      i($e(g));
    }, b = () => {
      o();
    };
    return (g, w) => {
      const y = Je, S = me, I = Oe, T = we, P = Ne, k = Re, $ = Ue;
      return E(g.$slots, "confirmVerifyUserSlotI", oe(ie(g.$attrs)), () => [
        C(S, oe(ie(g.$attrs)), {
          default: _(() => [
            C($, {
              onInput: p,
              onSubmit: ue(h, ["prevent"])
            }, {
              default: _(() => [
                C(k, {
                  class: "amplify-flex amplify-authenticator__column",
                  disabled: d(r)
                }, {
                  default: _(() => [
                    E(g.$slots, "header", {}, () => [
                      C(y, {
                        level: 3,
                        class: "amplify-heading"
                      }, {
                        default: _(() => [
                          M(R(d(u)), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    C(S, { class: "amplify-flex amplify-authenticator__column" }, {
                      default: _(() => [
                        C(xe, { route: "confirmVerifyUser" })
                      ]),
                      _: 1
                    }),
                    C(P, { class: "amplify-flex amplify-authenticator__column" }, {
                      default: _(() => [
                        d(n) ? (U(), W(I, { key: 0 }, {
                          default: _(() => [
                            M(R(d(N)(d(n))), 1)
                          ]),
                          _: 1
                        })) : j("", !0),
                        C(T, {
                          class: "amplify-field-group__control amplify-authenticator__font",
                          fullwidth: !1,
                          variation: "primary",
                          type: "submit",
                          disabled: d(r)
                        }, {
                          default: _(() => [
                            M(R(d(f)), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        C(T, {
                          class: "amplify-field-group__control amplify-authenticator__font",
                          fullwidth: !1,
                          size: "small",
                          variation: "link",
                          style: { "font-weight": "normal" },
                          type: "button",
                          onClick: ue(b, ["prevent"])
                        }, {
                          default: _(() => [
                            M(R(d(m)), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        E(g.$slots, "footer")
                      ]),
                      _: 3
                    })
                  ]),
                  _: 3
                }, 8, ["disabled"])
              ]),
              _: 3
            }, 8, ["onSubmit"])
          ]),
          _: 3
        }, 16)
      ]);
    };
  }
}), SC = ["data-variation"], bC = { "data-amplify-container": "" }, CC = ["data-amplify-router-content"], AC = {
  key: 1,
  "data-amplify-router-content": ""
}, IC = /* @__PURE__ */ q({
  __name: "authenticator",
  props: {
    hideSignUp: { type: Boolean },
    initialState: null,
    loginMechanisms: null,
    services: null,
    signUpAttributes: null,
    variation: { default: "default" },
    socialProviders: null,
    formFields: null
  },
  setup(e) {
    const t = e, { initialState: n, loginMechanisms: r, variation: o, services: i, signUpAttributes: a, socialProviders: s, hideSignUp: l, formFields: c } = re(t);
    let u;
    const m = le(!1), { service: f, send: p, state: h } = Xr(), v = f.subscribe((L) => {
      L.matches("setup") && !m.value && (p({
        type: "INIT",
        data: {
          /**
           * There's a type inference bug with prop refs that incorrectly assume
           * they can be undefined. Adding `!` until this is resolved from Vue's end.
           *
           * https://github.com/vuejs/core/issues/6420
           */
          initialState: n.value,
          loginMechanisms: r.value,
          socialProviders: s.value,
          signUpAttributes: a.value,
          services: i.value,
          formFields: c.value
        }
      }), m.value = !0);
    }).unsubscribe, b = ye(), { route: g, signOut: w, toSignIn: y, toSignUp: S, user: I } = re(b);
    di(() => {
      u = xb({
        componentName: "Authenticator",
        packageName: "vue",
        version: A1
      });
    }), gs(() => {
      u(), v();
    });
    const T = le(), P = le(), k = le(), $ = le(), F = le(), O = le(), B = le(), G = le(), ae = le(), be = le(), { getSignInTabText: Te, getSignUpTabText: fe } = Ee, ge = D(() => Te()), ve = D(() => fe()), ot = D(() => g.value === "signIn" || g.value === "signUp"), _e = D(() => [
      "confirmResetPassword",
      "confirmSignIn",
      "confirmSignUp",
      "confirmVerifyUser",
      "forceNewPassword",
      "forgotPassword",
      "setupTotp",
      "signIn",
      "signUp",
      "verifyUser"
    ].includes(g.value));
    return (L, ao) => {
      const he = C1, We = S1;
      return U(), X(He, null, [
        d(_e) ? (U(), X("div", Ie({ key: 0 }, L.$attrs, {
          "data-amplify-authenticator": "",
          "data-variation": d(o)
        }), [
          x("div", bC, [
            E(L.$slots, "header"),
            x("div", {
              "data-amplify-router": "",
              "data-amplify-router-content": d(ot) ? void 0 : ""
            }, [
              d(ot) && !d(l) ? (U(), W(We, { key: 0 }, {
                default: _(() => [
                  C(he, {
                    active: d(g) === "signIn",
                    id: "signIn",
                    label: d(ge),
                    onClick: d(y)
                  }, null, 8, ["active", "label", "onClick"]),
                  C(he, {
                    active: d(g) === "signUp",
                    id: "signUp",
                    label: d(ve),
                    onClick: d(S)
                  }, null, 8, ["active", "label", "onClick"])
                ]),
                _: 1
              })) : j("", !0),
              d(ot) ? (U(), X("div", AC, [
                d(g) === "signIn" ? (U(), W($a, {
                  key: 0,
                  id: "signIn-panel",
                  role: "tabpanel",
                  class: "amplify-tabs__panel amplify-tabs__panel--active",
                  "aria-labelledby": "signIn-tab",
                  ref_key: "signInComponent",
                  ref: T
                }, {
                  signInSlotI: _(() => [
                    E(L.$slots, "sign-in")
                  ]),
                  form: _(({ info: Zn, onSignInSubmit: as, onForgotPasswordClicked: ss, onInput: ls }) => [
                    E(L.$slots, "sign-in-form", {
                      info: Zn,
                      onInput: ls,
                      onSignInSubmit: as,
                      onForgotPasswordClicked: ss
                    })
                  ]),
                  header: _(() => [
                    E(L.$slots, "sign-in-header")
                  ]),
                  footer: _(() => [
                    E(L.$slots, "sign-in-footer")
                  ]),
                  _: 3
                }, 512)) : j("", !0),
                d(g) === "signUp" && !d(l) ? (U(), W(Oa, {
                  key: 1,
                  id: "signUp-panel",
                  class: "amplify-tabs__panel amplify-tabs__panel--active",
                  role: "tabpanel",
                  "aria-labelledby": "signUp-tab",
                  ref_key: "signUpComponent",
                  ref: P
                }, {
                  signUpSlotI: _(() => [
                    E(L.$slots, "sign-up")
                  ]),
                  header: _(() => [
                    E(L.$slots, "sign-up-header")
                  ]),
                  "signup-fields": _(({ info: Zn }) => [
                    E(L.$slots, "sign-up-fields", { info: Zn })
                  ]),
                  footer: _(() => [
                    E(L.$slots, "sign-up-footer")
                  ]),
                  _: 3
                }, 512)) : j("", !0)
              ])) : j("", !0),
              d(g) === "confirmSignUp" ? (U(), W(xa, {
                key: 2,
                ref_key: "confirmSignUpComponent",
                ref: k
              }, {
                confirmSignUpSlotI: _(() => [
                  E(L.$slots, "confirm-sign-up")
                ]),
                header: _(() => [
                  E(L.$slots, "confirm-sign-up-header")
                ]),
                footer: _(() => [
                  E(L.$slots, "confirm-sign-up-footer")
                ]),
                _: 3
              }, 512)) : j("", !0),
              d(g) === "forgotPassword" ? (U(), W(ns, {
                key: 3,
                ref_key: "ForgotPasswordComponent",
                ref: B
              }, {
                forgotPasswordSlotI: _(() => [
                  E(L.$slots, "forgot-password")
                ]),
                header: _(() => [
                  E(L.$slots, "forgot-password-header")
                ]),
                footer: _(() => [
                  E(L.$slots, "forgot-password-footer")
                ]),
                _: 3
              }, 512)) : j("", !0),
              d(g) === "confirmResetPassword" ? (U(), W(rs, {
                key: 4,
                ref_key: "confirmResetPasswordComponent",
                ref: G
              }, {
                confirmResetPasswordSlotI: _(() => [
                  E(L.$slots, "confirm-reset-password")
                ]),
                header: _(() => [
                  E(L.$slots, "confirm-reset-password-header")
                ]),
                footer: _(() => [
                  E(L.$slots, "confirm-reset-password-footer")
                ]),
                _: 3
              }, 512)) : j("", !0),
              d(g) === "confirmSignIn" ? (U(), W(Ma, {
                key: 5,
                ref_key: "confirmSignInComponent",
                ref: $
              }, {
                confirmSignInSlotI: _(() => [
                  E(L.$slots, "confirm-sign-in")
                ]),
                header: _(() => [
                  E(L.$slots, "confirm-sign-in-header")
                ]),
                footer: _(() => [
                  E(L.$slots, "confirm-sign-in-footer")
                ]),
                _: 3
              }, 512)) : j("", !0),
              d(g) === "setupTotp" ? (U(), W(wC, {
                key: 6,
                ref_key: "confirmSetupTotpComponent",
                ref: F
              }, {
                confirmSetupTotpI: _(() => [
                  E(L.$slots, "setup-totp")
                ]),
                header: _(() => [
                  E(L.$slots, "setup-totp-header")
                ]),
                footer: _(() => [
                  E(L.$slots, "setup-totp-footer")
                ]),
                _: 3
              }, 512)) : j("", !0),
              d(g) === "forceNewPassword" ? (U(), W(ts, {
                key: 7,
                ref_key: "forceNewPasswordComponent",
                ref: O
              }, {
                forceNewPasswordI: _(() => [
                  E(L.$slots, "force-new-password")
                ]),
                header: _(() => [
                  E(L.$slots, "force-new-password-header")
                ]),
                "force-new-password-form-fields": _(() => [
                  E(L.$slots, "force-new-password-form-fields")
                ]),
                footer: _(() => [
                  E(L.$slots, "force-new-password-footer")
                ]),
                _: 3
              }, 512)) : j("", !0),
              d(g) === "verifyUser" ? (U(), W(os, {
                key: 8,
                ref_key: "verifyUserComponent",
                ref: ae
              }, {
                verifyUserSlotI: _(() => [
                  E(L.$slots, "verify-user")
                ]),
                header: _(() => [
                  E(L.$slots, "verify-user-header")
                ]),
                footer: _(() => [
                  E(L.$slots, "verify-user-footer")
                ]),
                _: 3
              }, 512)) : j("", !0),
              d(g) === "confirmVerifyUser" ? (U(), W(is, {
                key: 9,
                ref_key: "confirmVerifyUserComponent",
                ref: be
              }, {
                confirmVerifyUserSlotI: _(() => [
                  E(L.$slots, "confirm-verify-user")
                ]),
                header: _(() => [
                  E(L.$slots, "confirm-verify-user-header")
                ]),
                footer: _(() => [
                  E(L.$slots, "confirm-verify-user-footer")
                ]),
                _: 3
              }, 512)) : j("", !0)
            ], 8, CC),
            E(L.$slots, "footer")
          ])
        ], 16, SC)) : j("", !0),
        d(g) === "authenticated" ? E(L.$slots, "default", {
          key: 1,
          user: d(I),
          state: d(h),
          signOut: d(w),
          send: d(p)
        }) : j("", !0)
      ], 64);
    };
  }
}), EC = q({
  props: {
    info: {
      type: Object
    }
  },
  setup(e) {
    return () => e.info;
  }
}), TC = /* @__PURE__ */ q({
  __name: "amplify-text-field",
  props: {
    label: { default: "" },
    id: { default: "" },
    autocomplete: { default: "" },
    placeholder: { default: "" },
    required: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    name: { default: "" },
    type: { default: "text" },
    hideLabel: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, { label: n, id: r, autocomplete: o, placeholder: i, required: a, name: s, type: l } = re(t);
    return (c, u) => {
      const m = Hn, f = jn, p = me;
      return U(), X(He, null, [
        C(m, {
          class: Ae(["amplify-label", { "amplify-visually-hidden": e.hideLabel }]),
          for: d(r)
        }, {
          default: _(() => [
            M(R(d(n)), 1)
          ]),
          _: 1
        }, 8, ["class", "for"]),
        C(p, { class: "amplify-field-group__field-wrapper" }, {
          default: _(() => [
            C(f, {
              class: "amplify-input amplify-field-group__control",
              id: d(r),
              "aria-invalid": "false",
              autocomplete: d(o),
              placeholder: d(i),
              required: d(a),
              name: d(s),
              disabled: e.disabled,
              type: d(l)
            }, null, 8, ["id", "autocomplete", "placeholder", "required", "name", "disabled", "type"])
          ]),
          _: 1
        })
      ], 64);
    };
  }
}), PC = { class: "amplify-flex amplify-field amplify-checkboxfield" }, kC = { class: "amplify-flex amplify-checkbox" }, NC = { class: "amplify-visually-hidden" }, UC = ["data-error", "data-checked"], $C = ["data-checked"], FC = /* @__PURE__ */ x("path", { d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" }, null, -1), OC = [
  FC
], RC = { class: "amplify-text amplify-checkbox__label" }, xC = {
  key: 0,
  class: "amplify-text amplify-field__error-message"
}, MC = /* @__PURE__ */ q({
  __name: "amplify-check-box",
  props: {
    errorMessage: { default: "" }
  },
  setup(e) {
    const t = e, n = le(!1), r = le(N("I agree with the Terms and Conditions")), { errorMessage: o } = re(t);
    return (i, a) => (U(), X("div", PC, [
      x("label", kC, [
        x("span", NC, [
          x("input", {
            onClick: a[0] || (a[0] = (s) => n.value = !n.value),
            class: "amplify-input amplify-field-group__control amplify-checkbox__input",
            "aria-invalid": "false",
            type: "checkbox",
            name: "acknowledgement",
            value: "yes"
          })
        ]),
        x("span", {
          class: Ae(["amplify-flex amplify-checkbox__button", {
            "amplify-checkbox__button--error": !n.value
          }]),
          "aria-hidden": "true",
          "data-focus": "false",
          "data-error": !n.value,
          "data-checked": n.value
        }, [
          (U(), X("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: Ae(["amplify-icon amplify-checkbox__icon", {
              "amplify-checkbox__icon--checked": n.value
            }]),
            viewBox: "0 0 24 24",
            fill: "currentColor",
            "data-checked": n.value
          }, OC, 10, $C))
        ], 10, UC),
        x("span", RC, R(r.value), 1)
      ]),
      n.value ? j("", !0) : (U(), X("p", xC, R(d(o)), 1))
    ]));
  }
}), VC = {
  install: (e) => {
    e.component("SignIn", $a), e.component("SignUp", Oa), e.component("FederatedSignIn", eo), e.component("Authenticator", IC), e.component("RenderInfo", EC), e.component("PasswordControl", Na), e.component("ForceNewPassword", ts), e.component("ForgotPassword", ns), e.component("ConfirmResetPassword", rs), e.component("ConfirmSignUp", xa), e.component("ConfirmSignIn", Ma), e.component("VerifyUser", os), e.component("ConfirmVerifyUser", is), e.component("AmplifyTextField", TC), e.component("AmplifyCheckBox", MC), e.component("AmplifyButton", we), e.component("BaseFormField", Ua), e.component("BaseFormFields", xe), e.component(
      "AuthenticatorSignUpFormFields",
      Fa
    ), e.component(
      "AuthenticatorForceNewPasswordFormFields",
      es
    );
  }
};
export {
  we as AmplifyButton,
  MC as AmplifyCheckBox,
  TC as AmplifyTextField,
  IC as Authenticator,
  es as AuthenticatorForceNewPasswordFormFields,
  Fa as AuthenticatorSignUpFormFields,
  rs as ConfirmResetPassword,
  Ma as ConfirmSignIn,
  xa as ConfirmSignUp,
  is as ConfirmVerifyUser,
  eo as FederatedSignIn,
  ts as ForceNewPassword,
  ns as ForgotPassword,
  Na as PasswordControl,
  EC as RenderInfo,
  $a as SignIn,
  Oa as SignUp,
  os as VerifyUser,
  VC as default,
  WC as translations,
  ye as useAuthenticator
};
