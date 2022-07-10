import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Category } from '../interfaces/CategoryInterface';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private urlApi: string = environment.urlApi;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.urlApi}/category`);
  }
}
