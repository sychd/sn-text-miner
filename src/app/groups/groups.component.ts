import {Component, OnInit} from '@angular/core';
import {GroupsService} from "app/groups/groups.service";
import {Group} from "./entity/Group";
@Component({
  selector: 'snm-groups',
  templateUrl: './groups.component.html',
  providers: [GroupsService]
})
export class GroupsComponent implements OnInit{
  private groups: Group[];

  constructor(private groupsService: GroupsService) {

  }

  public ngOnInit() {
    this.groupsService.getVKGroupsByStringQuery().subscribe(
      result => {
        this.groups = result;
      },
      error => {
        console.log('error: '+ error)
      }
    );
  }
}
