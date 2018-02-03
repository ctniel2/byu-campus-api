import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Link } from '../link';
import { LinkService } from '../link.service';

@Component({
  selector: 'app-link-search',
  templateUrl: './link-search.component.html',
  styleUrls: ['./link-search.component.css']
})
export class LinkSearchComponent implements OnInit {
  links$: Observable<Link[]>;
  private searchTerms = new Subject<string>();

  constructor(private linkService: LinkService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.links$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.linkService.searchLinks(term))
    );
  }

}
