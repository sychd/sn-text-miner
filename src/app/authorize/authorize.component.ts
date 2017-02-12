import {Component, OnInit} from '@angular/core';
import {AuthorizeService} from "app/authorize/authorize.service";
import {ActivatedRoute} from "@angular/router";

const ACCESS_TOKEN: string = 'access_token';
@Component({
  selector: 'snm-authorize',
  template: `<b>Auth component</b><a [href]="tokenlink">Do token request</a>`})
export class AuthorizeComponent implements OnInit {
  private tokenlink: string;

  constructor(private authorizeService: AuthorizeService, private route: ActivatedRoute){
  }

  public ngOnInit() {
    const url = window.location.href;
    const token = this.authorizeService.resolveToken(url);
    if (token) {
      this.authorizeService.token = token;
    }
  }
}
