import { Component, OnInit } from '@angular/core';
import {Router}     from '@angular/router';

import { Link } from '../link';
import { LinkService } from '../link.service';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css'],
  providers: [LinkService]
})
export class FriendComponent implements OnInit {

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
