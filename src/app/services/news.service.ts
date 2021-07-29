import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

import { map } from 'rxjs/operators';
import { Author, NewsResponse } from '../blog-news/models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  baseUrl: string = environment.baseUrl;
  apiKey: string = environment.apiKey;
  country: string = 'mx'
  category: string = 'sports'
  totalPages: number[] = [];
  page: number = 1;

  authors: Author[] = []

  constructor(private http: HttpClient) { 
    
  }

  public get url() : string {
    return `${this.baseUrl}top-headlines?country=${this.country}&category=${this.category}&apiKey=${this.apiKey}&pageSize=10&page=${this.page}`;
  }
  

  topNewsSportsMx(){
    return this.http.get<NewsResponse>( this.url )
      .pipe(
        map( (res: NewsResponse) =>  {
          
         const names: any[] = [];

          this.authors.map((author: any) => {
            names.push(author.name);
          })
          
          for( let i = 0; i < res.articles.length; i++ ){
            res.articles[i].author = names[i];
          }
          
          return res.articles
        })
      )
  }

  getTotalPages(){
    return this.http.get<NewsResponse>( this.url )
      .pipe(
        map( (res: NewsResponse) => {
          
          const num = Math.ceil(res.totalResults/10);
          for(let i = 1; i<=num; i++){
            this.totalPages.push(i);
          }
          return this.totalPages
          }
          )
      )
  }

  getAuthor(){
    return this.http.get<any>(`https://randomuser.me/api/?page=${this.page}&results=10&nat=es&inc=name`)
      .pipe(
        map( res => res.results)
      ).subscribe(
        authors => {
          this.authors = authors
        }
      );
  }
}
