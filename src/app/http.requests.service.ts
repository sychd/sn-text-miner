import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export abstract class HttpRequestsService {

  public extractData(res: Response) {
    let body = res.json();
    return body.response || {};
  }

  public handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  public composeVKRequest(methodType: string, params: string, callbackType: string = 'JSONP'): string {
    return `https://api.vk.com/method/${methodType}?${params}&callback=${callbackType}_CALLBACK`;
  }
}
