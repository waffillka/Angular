import {AuthConfig} from "angular-oauth2-oidc";

export interface EnvironmentConfig {
  urlApi : string;
  production: boolean;
  authentication: AuthConfig;
  name: string;
  issuer: string;
  clientPortalApiConfig: ApiConfiguration;
}

export interface ApiConfiguration {
  host: string;
  baseUrl: string;
}
