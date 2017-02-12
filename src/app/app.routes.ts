import {Routes} from "@angular/router";
import {GroupsComponent} from "app/groups/groups.component";
import {AuthorizeComponent} from "app/authorize/authorize.component";
import {PageNotFoundComponent} from "app/page-not-found/page-not-found.component";
export const appRoutes: Routes = [
  {
    path: 'groups',
    component: GroupsComponent,
  },
  {
    path: 'auth',
    component: AuthorizeComponent,
  },
  { path: '',
    redirectTo: 'groups',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];
