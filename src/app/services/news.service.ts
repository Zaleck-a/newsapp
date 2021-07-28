import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  baseUrl: string = environment.baseUrl;
  apiKey: string = environment.apiKey;
  country: string = 'mx'
  category: string = 'sports'

  constructor(private http: HttpClient) { 

  }

  topNewsSportsMx(){
    return this.http.get(
      `${this.baseUrl}top-headlines?country=${this.country}&category=${this.category}&apiKey=${this.apiKey}`
      );
  }
}
