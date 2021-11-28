import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseEndpoint = environment.endpoint;
  collectionName = '';
  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http
      .get(this.baseEndpoint + '/' + this.collectionName + url)
      .toPromise();
  }

  post(url: string, body: any) {
    return this.http
      .post(this.baseEndpoint + '/' + this.collectionName + url, body)
      .toPromise();
  }

  put(url: string, body: any) {
    return this.http
      .put(this.baseEndpoint + '/' + this.collectionName + url, body)
      .toPromise();
  }

  delete(url: string) {
    return this.http
      .delete(this.baseEndpoint + '/' + this.collectionName + url)
      .toPromise();
  }
}
