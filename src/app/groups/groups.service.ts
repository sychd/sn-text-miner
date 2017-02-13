import {Injectable, Inject} from "@angular/core";
import {Http, Response, Jsonp, RequestOptions, Headers} from '@angular/http';
import {HttpRequestsService} from "app/http.requests.service";
import {APP_CONFIG} from "../config/AppConfig";
import {IAppConfig} from "app/config/IAppConfig";
import {AuthorizeService} from "app/authorize/authorize.service";
import {Group} from "app/groups/entity/Group";
import {Observable} from "rxjs";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GroupsService extends HttpRequestsService {
  constructor(private http: Http, private jsonp: Jsonp, @Inject(APP_CONFIG) private config: IAppConfig,
              private authorizeService: AuthorizeService) {
    super();
  }

  public getVKGroupsByStringQuery(searchQuery: string = 'новости'): Observable<Group[]> {
    return this.jsonp.get(this.composeVKRequest('groups.search',
      `q="${searchQuery}"&sort=2&access_token=${this.authorizeService.token}`))
      .map(this.extractData)
      .map((result: Group[]) =>  {
        return result.splice(1);
      });
  }

  public postGroups(groups: Group[]): Promise<any> {
    let args: RequestOptions = new RequestOptions();
    args.body = JSON.stringify(groups);
    args.headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.config.API.GROUPS, args).toPromise();
  }
}
