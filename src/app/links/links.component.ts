import { Component, OnInit } from '@angular/core';

import { Link } from '../link';

import { LinkService } from '../link.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  links: Link[];

  constructor(private linkService: LinkService) { }

  ngOnInit() {
    this.getLinks();
  }

  getLinks(): void {
    this.linkService.getLinks()
      .subscribe(links => this.links = links);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.linkService.addLink({ name } as Link)
      .subscribe(link => {
        this.links.push(link);
      });
  }

  delete(link: Link): void {
    this.links = this.links.filter(l => l !== link);
    this.linkService.deleteLink(link).subscribe();
  }
}
