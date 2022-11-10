import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SymfonylistService {

  endpointURL = baseUrl + '/symfonylist';

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return new Observable(() => {
      this.httpClient.get(this.endpointURL).subscribe(result =>)
    }
}
