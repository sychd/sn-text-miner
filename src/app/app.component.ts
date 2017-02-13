import {Component, OnInit} from '@angular/core';
import {AppService} from "app/app.service";
import {AuthorizeService} from "app/authorize/authorize.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService, AuthorizeService]
})
export class AppComponent implements OnInit {
  private title = 'Mine \'em all!';
  constructor(private appService: AppService, private authorizeService: AuthorizeService){

  }
  public ngOnInit() {
    this.refreshToken();
  }

  private refreshToken() {
    setTimeout(() => {
      if (this.authorizeService.needTokenUpdate) {
        this.authorizeService.makeTokenRequest();
      }
    }, 100);
  }
}
