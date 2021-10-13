/*import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'https://localhost:44310',
  //responseType: 'id_token token',
  postLogoutRedirectUri: 'http://localhost:4200',

  // URL of the SPA to redirect the user to after login
  redirectUri: 'http://localhost:4200',
  logoutUrl: 'https://localhost:44310/Account/Logout',
  // The SPA's id. The SPA is registered with this id at the auth-server
  clientId: 'AppClient',
  loginUrl: 'https://localhost:44310/Account/Login',
  //dummyClientSecret: '00d48e22-101d-2c83-fece-358c93993917',
  //jwks_uri: 'https://localhost:44310/.well-known/openid-configuration/jwks',
  //authorization_endpoint: "https://localhost:44310/connect/authorize",
  //token_endpoint: "https://localhost:44310/connect/token",
  //userinfo_endpoint: "https://localhost:44310/connect/userinfo",
  //end_session_endpoint: "https://localhost:44310/connect/endsession",
  //"check_session_iframe": "https://localhost:44310/connect/checksession",
  //"revocation_endpoint": "https://localhost:44310/connect/revocation",
  //"introspection_endpoint": "https://localhost:44310/connect/introspect",
  //"device_authorization_endpoint": "https://localhost:44310/connect/deviceauthorization",
  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'openid profile email voucher given_name',
  showDebugInformation: true,
}*/

import {AuthConfig} from "angular-oauth2-oidc";
import {environment} from "../../environments/environment";

export const authConfig: AuthConfig = environment.authentication;

