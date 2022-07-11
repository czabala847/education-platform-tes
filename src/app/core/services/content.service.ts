import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Content } from '../interfaces/ContentInterface';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {}

  getByCategory(category: number): Observable<Content[]> {
    let urlFetch = `${this.urlApi}/content`;
    if (category > 0) urlFetch = `${urlFetch}/category/${category}`;

    return this.http.get<Content[]>(urlFetch).pipe(
      catchError((error: HttpErrorResponse) => {
        return of([]);
      })
    );
  }
}
