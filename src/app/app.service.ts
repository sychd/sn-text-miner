import {Injectable, Inject} from "@angular/core";
import {Http, Response, Jsonp, URLSearchParams} from '@angular/http';
import {APP_CONFIG} from "./config/AppConfig";
import {IAppConfig} from "./config/IAppConfig";
import {Observable} from "rxjs";
import "rxjs/add/operator/delay";

@Injectable()
export class AppService {
  constructor(private http: Http, private jsonp: Jsonp, @Inject(APP_CONFIG) private config: IAppConfig) {
  }

}
