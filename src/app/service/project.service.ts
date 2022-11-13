import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../model/project';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private baseUrl = 'https://portfolio.cyrisa02.fr/api/projects';

  list !: Project[];
  public formData !: FormGroup;

  constructor(private http: HttpClient) { }

  getData(id: string): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
