import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LinksComponent }       from './links/links.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { LinkDetailComponent }  from './link-detail/link-detail.component';
import { AccountComponent }     from './account/account.component';
import { SettingsComponent }    from './settings/settings.component';
import { ExploreComponent }     from './explore/explore.component';
import { PopularComponent }     from './popular/popular.component';
import { SetComponent }         from './set/set.component';
import { FriendComponent }      from './friend/friend.component';
import { CreateComponent }      from './create/create.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'links',      component: LinksComponent },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: LinkDetailComponent },
  { path: 'account',    component: AccountComponent },
  { path: 'settings',   component: SettingsComponent },
  { path: 'explore',    component: ExploreComponent },
  { path: 'popular',    component: PopularComponent },
  { path: 'set',        component: SetComponent },
  { path: 'friend',     component: FriendComponent },
  { path: 'create',     component: CreateComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
