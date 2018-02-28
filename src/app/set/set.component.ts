import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Link } from '../link';
import { LinkService } from '../link.service';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.css'],
  providers: [LinkService]
})
export class SetComponent implements OnInit {

  links: Link[] = [];
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

  constructor(private router: Router, private linkService: LinkService) { }

  ngOnInit() {
    this.getLinks();
  }

  getLinks(): void {
    this.linkService.getLinks()
      .subscribe(links => this.links = links);
  }

  addLink() {
    this.linkAdd = true;
    if (this.linkSet == true) {
      this.linkSet = false;
    }
    if (this.linkManage == true) {
      this.linkManage = false;
    }
    if (this.defaultIconList == true) {
      this.defaultIconList = false;
    }
  }

  addSet() {
    this.linkSet = true;
    if (this.linkAdd == true) {
      this.linkAdd = false;
    }
    if (this.linkManage == true) {
      this.linkManage = false;
    }
    if (this.defaultIconList == true) {
      this.defaultIconList = false;
    }
  }

  addLinkMobile() {
    this.mobileSettings = false;
    this.linkAdd = true;
  }

  addSetMobile() {
    this.mobileSettings = false;
    this.linkSet = true;
  }

  addedLink() {
    this.linkAdd = false;
  }

  addedSet() {
    this.linkSet = false;
  }

  addedSetMobile() {
    this.linkSet = false;
    this.mobileSettings = true;
  }

  addedLinkMobile() {
    this.linkAdd = false;
    this.mobileSettings = true;
  }

  manageLink() {
    this.linkManage = true;
    if (this.linkAdd == true){
      this.linkAdd = false;
    }
    if (this.linkSet == true) {
      this.linkSet = false;
    }
    if (this.defaultIconList == true) {
      this.defaultIconList = false;
    }
  }

  manageLinkMobile() {
    this.mobileSettings = false;
    this.linkManage = true;
  }

  managedLink() {
    this.linkManage = false;
  }

  managedLinkMobile() {
    this.linkManage = false;
    this.mobileSettings = true;
  }

  toggleBYUSets() {
    if (this.BYUSets == false) {
      this.BYUSets = true;
    }
    if (this.OtherSets == true) {
      this.OtherSets = false;
    }
  }

  toggleOtherSets() {
    if (this.OtherSets == false) {
      this.OtherSets = true;
    }
    if (this.BYUSets == true) {
      this.BYUSets = false;
    }
  }

  toggleDefaultIcons() {
    if (this.linkAdd == true) {
      this.linkAdd = false;
    }
    this.defaultIconList = true;
  }

  selectIcon(icon) {
    this.selectedIcon = icon;
    this.defaultIconList = false;
    this.linkAdd = true;
  }

  submitLink() {
    console.log(this.selectedCategory + ", " + this.selectedTitle + ", " + this. selectedIcon + ", " + this.selectedURL);
  }

  toggleIcons() {

  }

  toggleTitles() {

  }

}
