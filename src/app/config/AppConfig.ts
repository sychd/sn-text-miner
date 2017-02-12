import { OpaqueToken } from "@angular/core";
import {IAppConfig} from "./IAppConfig";

export let APP_CONFIG = new OpaqueToken("app.config");

export const AppConfig: IAppConfig = {
  VK: {
    APP: {
      APP_ID: '5794707',
      APP_SECRET: 'Q49Y1TJkOZJk00aQRcKx',
      REDIRECT_URL: 'http://localhost:4200/auth',// /%23/auth,
      DISPLAY: 'popup',
      SCOPE: 'groups'
    },
    API: {
      GROUPS_SEARCH: 'groups.search'
    },
    OAUTH_AUTHORIZE_URI: 'https://oauth.vk.com/authorize',
    OAUTH_GET_TOKEN_URI: 'https://oauth.vk.com/access'
  }
};
//IGNOREPLIS AAAAAA
