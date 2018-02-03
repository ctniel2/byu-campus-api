import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Link } from '../link';
import { LinkService } from '../link.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [LinkService]
})
export class DashboardComponent implements OnInit {

  links: Link[] = [];
  showDescription: number;


  constructor(private router: Router, private linkService: LinkService) { }

  ngOnInit() {
    this.getLinks();
  }

  getLinks(): void {
    this.linkService.getLinks()
      .subscribe(links => this.links = links);
  }

  toggleDescription(i: number) {
    if (this.showDescription != i) {
      this.showDescription = i;
    } else {
      this.showDescription = -1;
    }
  }

  gotoCreate() {
    this.router.navigate(['/create']);
  }

}
