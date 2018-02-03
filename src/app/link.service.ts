import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Link } from './link';


@Injectable()
export class LinkService {

  private linksUrl = 'api/links'; // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

  constructor(
    private http: HttpClient) { }

  getLinks(): Observable<Link[]> {
    // Todo: send the message _after_ fetching the links
    return this.http.get<Link[]>(this.linksUrl)
      .pipe(
        catchError(this.handleError('getLinks', []))
      );
  }

  getLink(id: number): Observable<Link> {
    const url = `${this.linksUrl}/${id}`;
    return this.http.get<Link>(url).pipe(
      catchError(this.handleError<Link>(`getLink id=${id}`))
    );
  }

  updateLink (link: Link): Observable<any> {
    return this.http.put(this.linksUrl, link, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateLink'))
    );
  }

  addLink (link: Link): Observable<Link> {
    return this.http.post<Link>(this.linksUrl, link, this.httpOptions).pipe(
      catchError(this.handleError<Link>('addLink'))
    );
  }

  deleteLink (link: Link | number): Observable<Link> {
    const id = typeof link === 'number' ? link : link.id;
    const url = `${this.linksUrl}/${id}`;

    return this.http.delete<Link>(url, this.httpOptions).pipe(
      catchError(this.handleError<Link>('deleteLink'))
    );
  }

  searchLinks(term: string): Observable<Link[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Link[]>(`api/links/?name=${term}`).pipe(
      catchError(this.handleError<Link[]>('searchLinks', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
