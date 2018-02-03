import { Component, OnInit } from '@angular/core';
import {Router}     from '@angular/router';

import { Link } from '../link';
import {LinkService} from '../link.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
  providers: [LinkService]
})
export class ExploreComponent implements OnInit {

  links: Link[] = [];

  constructor(private router: Router, private linkService: LinkService) { }

  ngOnInit() {
    this.getLinks();
  }

  getLinks(): void {
    this.linkService.getLinks()
      .subscribe(links => this.links = links.slice(1,5));
  }

  activeTag: string;
  menu: boolean = true;

  tagLinks(tag: string) {
    this.activeTag = tag;
    this.menu = false;
  }

  returnToMenu() {
    this.menu = true;
  }

}
