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

  constructor(private router: Router, private linkService: LinkService) { }

  ngOnInit() {
    this.getLinks();
  }

  getLinks(): void {
    this.linkService.getLinks()
      .subscribe(links => this.links = links);
  }

}
