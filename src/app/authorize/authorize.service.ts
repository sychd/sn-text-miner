import {Injectable, Inject} from "@angular/core";
import {Http, Response, Jsonp, URLSearchParams} from '@angular/http';
import {APP_CONFIG} from "../config/AppConfig";
import {IAppConfig} from "../config/IAppConfig";
import {Observable} from "rxjs";

@Injectable()
export class AuthorizeService {
  constructor(private http: Http, private jsonp: Jsonp, @Inject(APP_CONFIG) private config: IAppConfig) {
  }

  public get tokenlink() {
    return `${this.config.VK.OAUTH_AUTHORIZE_URI}?${this.authorizeParams.toString()}`;
  }

  public get needToRefreshToken(): boolean {
    const value = localStorage.getItem('needToRefreshToken');
    return value == null ? true : JSON.parse(value);
  }

  public set needToRefreshToken(value: boolean) {
    localStorage.setItem('needToRefreshToken', value.toString());
  }

  public get token(): string {
    const value = localStorage.getItem('token');
    return value;
  }

  public set token(value: string) {
    localStorage.setItem('token', value);
  }

  public makeTokenRequest() {
      window.location.href= this.tokenlink;
      this.needToRefreshToken = false;
  }

  public resolveToken(url: string) {
    return url.match(/access_token=[A-Za-z0-9_]*/g)[0]
      .replace(/access_token=/g, '');
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
