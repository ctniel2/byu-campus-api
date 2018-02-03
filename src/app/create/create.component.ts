import { Component, OnInit } from '@angular/core';
import {Router}     from '@angular/router';

import { Link } from '../link';
import {LinkService} from '../link.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [LinkService]
})
export class CreateComponent implements OnInit {

  links: Link[];

  constructor(private router: Router, private linkService: LinkService) { }

  ngOnInit() {
    this.getLinks();
  }

  getLinks(): void {
    this.linkService.getLinks()
      .subscribe(links => this.links = links);
  }

  add(name: string, description: string, url: string): void {
    name = name.trim();
    description = description.trim();
    url = url.trim();
    if (!name) {
      return;
    }
    this.linkService.addLink({ name, description, url } as Link)
      .subscribe(link => {
        this.links.push(link);
      });
  }

  delete(link: Link): void {
    this.links = this.links.filter(l => l !== link);
    this.linkService.deleteLink(link).subscribe();
  }
}
