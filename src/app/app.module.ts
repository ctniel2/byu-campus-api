import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LinkService } from './link.service';

import { AppComponent } from './app.component';
import { LinksComponent } from './links/links.component';
import { LinkDetailComponent } from './link-detail/link-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { LinkSearchComponent } from './link-search/link-search.component';
import { ExploreComponent } from './explore/explore.component';
import { FriendComponent } from './friend/friend.component';
import { PopularComponent } from './popular/popular.component';
import { SetComponent } from './set/set.component';
import { SettingsComponent } from './settings/settings.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AccountComponent } from './account/account.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    LinksComponent,
    LinkDetailComponent,
    DashboardComponent,
    LinkSearchComponent,
    ExploreComponent,
    FriendComponent,
    PopularComponent,
    SetComponent,
    SettingsComponent,
    SidebarComponent,
    AccountComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, //{ dataEncapsulation: false }
    )
  ],
  providers: [ LinkService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
