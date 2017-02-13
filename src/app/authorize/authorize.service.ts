import {Injectable, Inject} from "@angular/core";
import {URLSearchParams} from '@angular/http';
import {APP_CONFIG} from "../config/AppConfig";
import {IAppConfig} from "../config/IAppConfig";

@Injectable()
export class AuthorizeService {
  // for autoupdate set true
  public needTokenUpdate: boolean = false;

  public get tokenlink() {
    return `${this.config.VK.OAUTH_AUTHORIZE_URI}?${this.authorizeParams.toString()}`;
  }

  public get token(): string {
    const value = localStorage.getItem('token');
    return value;
  }

  public set token(value: string) {
    localStorage.setItem('token', value);
  }

  constructor(@Inject(APP_CONFIG) private config: IAppConfig) {
  }

  public makeTokenRequest() {
      window.location.href= this.tokenlink;
  }

  public updateToken() {
    this.needTokenUpdate = false;
    const url = window.location.href;
    const token = this.resolveToken(url);
    if (token) {
      this.token = token;
    }
  }

  public resolveToken(url: string) {
    let token: any = url.match(/access_token=[A-Za-z0-9_]*/g);
    token = token ? token[0] : '';
    return token.replace(/access_token=/g, '');
  }

  private get authorizeParams(): URLSearchParams {
    let params: URLSearchParams = new URLSearchParams();

    params.set('client_id', this.config.VK.APP.APP_ID);
    params.set('client_secret', this.config.VK.APP.APP_SECRET);
    params.set('redirect_uri', this.config.VK.APP.REDIRECT_URL);
    params.set('display', this.config.VK.APP.DISPLAY);
    params.set('response_type', 'token');

    return params;
  }


}
