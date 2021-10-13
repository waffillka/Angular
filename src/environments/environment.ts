// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {AuthConfig} from "angular-oauth2-oidc";
import {EnvironmentConfig} from "./environment-config";

const authentication: AuthConfig = {
  issuer: "https://localhost:44310",
  redirectUri: window.location.origin,
  clientId: "Bookcrossing",
  scope: "openid email profile Bookcrossing_api roles",
  postLogoutRedirectUri: window.location.origin + "/authors",
  requireHttps: false,
  silentRefreshRedirectUri: window.location.origin + "/assets/silent-refresh.html",
  silentRefreshShowIFrame: true,
  showDebugInformation: false,
  loginUrl: "https://localhost:44310/account/login"
};

export const environment: EnvironmentConfig = {
  production: false,
  urlApi: "https://localhost:5001",

  authentication: authentication,
  name: "LOCAL",
  issuer: "http://localhost:5000",
  clientPortalApiConfig: {
    host: "http://localhost:5001",
    baseUrl: "api"
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
