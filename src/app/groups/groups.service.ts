import {Injectable, Inject} from "@angular/core";
import { Http, Response, Jsonp } from '@angular/http';
import {HttpRequestsService} from "app/http.requests.service";
import {APP_CONFIG} from "../config/AppConfig";
import {IAppConfig} from "app/config/IAppConfig";
import {AuthorizeService} from "app/authorize/authorize.service";
import {Group} from "app/groups/entity/Group";
import {Observable} from "rxjs";

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
      .map((result: Group[]) =>  result.splice(1));
  }

}
