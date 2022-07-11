import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Content } from '../interfaces/ContentInterface';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {}

  getByCategory(category: number): Observable<Content[]> {
    if (category > 0) {
      return this.http
        .get<Content[]>(`${this.urlApi}/content/category/${category}`)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            return of([]);
          })
        );
    }

    return this.getAll();
  }

  getById(id: number): Observable<Content[] | null> {
    return this.http.get<Content[] | null>(`${this.urlApi}/content/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        return of(null);
      })
    );
  }

  getAll(): Observable<Content[]> {
    return this.http.get<Content[]>(`${this.urlApi}/content`);
  }
}
