import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

import { Link } from '../link';
import { LinkService } from '../link.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  providers: [LinkService]
})
export class SettingsComponent implements OnInit {

  mobileSettings: boolean = true;
  titles: boolean = true;
  linkAdd: boolean = false;
  linkSet: boolean = false;
  linkManage: boolean = false;
  BYUSets: boolean = true;
  OtherSets: boolean = false;
  defaultIconList: boolean = false;
  selectedIcon: string = "";
  selectedTitle: string = "";
  selectedCategory: string = "";
  selectedURL: string = "";

  defaultIcons =  [
    "star",
    "whatshot",
    "mood",
    "poll",
    "school",
    "location_city",
    "time_to_leave",
    "live_tv",
    "train",
    "local_post_office",
    "directions_walk",
    "panorama",
    "headset",
    "attach_money",
    "add_shopping_cart",
    "alarm",
    "build",
    "gavel",
    "thumb_up",
    "work"
  ];

  links: Link[] = [];

  constructor(private router: Router, private location: Location, private linkService: LinkService) { }

  ngOnInit() {
    this.getLinks();
  }

  getLinks(): void {
    this.linkService.getLinks()
      .subscribe(links => this.links = links);
  }

}
