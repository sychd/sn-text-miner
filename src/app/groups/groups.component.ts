import {Component, OnInit} from '@angular/core';
import {GroupsService} from "app/groups/groups.service";
import {Group} from "./entity/Group";
import {Http, RequestOptions} from "@angular/http";
@Component({
  selector: 'snm-groups',
  templateUrl: './groups.component.html',
  providers: [GroupsService]
})
export class GroupsComponent implements OnInit {
  private groups: Group[];

  constructor(private groupsService: GroupsService, private http: Http) {

  }

  public ngOnInit() {
    this.groupsService.getVKGroupsByStringQuery().subscribe(
      result => {
        this.groups = result;
      },
      error => {
        console.log('[error]: ' + error)
      }
    );
  }

  private sendGroups(groups: Group[] = this.groups) {
    this.groupsService.postGroups(groups).then(
        succ => console.log('success'),
        err => console.error(err));
  }
}
