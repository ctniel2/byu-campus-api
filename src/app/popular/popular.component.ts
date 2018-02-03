import { Component, OnInit } from '@angular/core';
import {Router}     from '@angular/router';

import { Link } from '../link';
import { LinkService } from '../link.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
  providers: [LinkService]
})
export class PopularComponent implements OnInit {

  links: Link[] = [];

  constructor(private router: Router, private linkService: LinkService) { }

  ngOnInit() {
    this.getLinks();
  }

  getLinks(): void {
    this.linkService.getLinks()
      .subscribe(links => this.links = links);
  }

}
