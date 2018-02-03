import { Component, OnInit, Input } from '@angular/core';
import {Router}     from '@angular/router';

import { Link } from '../link';
import {LinkService} from '../link.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [LinkService]
})
export class SidebarComponent implements OnInit {

  links: Link[] = [];

  constructor(private router: Router, private linkService: LinkService) { }

  ngOnInit() {
    this.getLinks();
  }

  @Input()
  currentPage: number;

  getLinks(): void {
    this.linkService.getLinks()
      .subscribe(links => this.links = links);
  }

  gotoDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

  gotoExplore(): void {
    this.router.navigate(['/explore']);
  }

  gotoPopular(): void {
    this.router.navigate(['/popular']);
  }

  gotoSet(): void {
    this.router.navigate(['/set']);
  }

  gotoFriend(): void {
    this.router.navigate(['/friend']);
  }

  gotoCreate(): void {
    this.router.navigate(['/create']);
  }

}
