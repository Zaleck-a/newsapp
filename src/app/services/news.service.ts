import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

import { map } from 'rxjs/operators';
import { NewsResponse } from '../blog-news/models/news.model';

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
    const url = `${this.baseUrl}top-headlines?country=${this.country}&category=${this.category}&apiKey=${this.apiKey}&pageSize=10&page=2`
    return this.http.get<NewsResponse>( url )
      .pipe(
        map( (res: NewsResponse) => res.articles)
      )
  }
}
