import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Symfony } from '../model/symfony';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SymfonyService {
  private baseUrl = 'http://localhost:8000/api/projects';

  list !: Symfony[];
  public formData !: FormGroup;

  constructor(private http: HttpClient) { }

  getData(id: string): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
