export interface IAppConfig {
  VK: {
    APP: {
      APP_ID: string,
      APP_SECRET: string,
      REDIRECT_URL: string,
      DISPLAY: string,
      SCOPE: string
    },
    API: {
      GROUPS_SEARCH: string
    },
    OAUTH_AUTHORIZE_URI: string,
    OAUTH_GET_TOKEN_URI: string
  };
  API: {
    GROUPS: string;
  }
}
