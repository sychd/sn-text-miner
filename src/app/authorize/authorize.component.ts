import {Component, OnInit} from '@angular/core';
import {AuthorizeService} from "app/authorize/authorize.service";
import {ActivatedRoute, Router} from "@angular/router";

const ACCESS_TOKEN: string = 'access_token';
@Component({
  selector: 'snm-authorize',
  template: `<b>Auth component</b><br><a href="{{tokenlink}}">Do token request manually</a>`
})
export class AuthorizeComponent implements OnInit {
  private tokenlink: string;

  constructor(private authorizeService: AuthorizeService, private route: ActivatedRoute, private router: Router){
  }

  public ngOnInit() {
    this.tokenlink = this.authorizeService.tokenlink;

    if(this.authorizeService.needTokenUpdate) {
      this.authorizeService.updateToken();
      this.router.navigate(['/groups']);
    }
  }
}
