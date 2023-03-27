export const environment = {
  production: true,
  urlApi: "https://localhost:5001",
  authConfig: {
    domain: "snippetshare.eu.auth0.com",
    clientId: "QNXZMRVESsbPlWdiAnXSh8nGHST2n5XJ",
    audience: "https://snippet-share-api.azurewebsites.net/",
    redirectUri : window.location.origin
  }
};
