import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Link } from '../link';
import { LinkService } from '../link.service';

@Component({
  selector: 'app-link-detail',
  templateUrl: './link-detail.component.html',
  styleUrls: ['./link-detail.component.css']
})
export class LinkDetailComponent implements OnInit {

  @Input() link: Link;

  constructor(
    private route: ActivatedRoute,
    private linkService: LinkService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getLink();
  }

  getLink(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.linkService.getLink(id)
      .subscribe(link => this.link = link);
  }

  save(): void {
    this.linkService.updateLink(this.link)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
