import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Article } from '../models/news.model';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {

  news: Article[] = [];

  constructor( private newsService: NewsService) { }

  ngOnInit(): void {
    this.getNewsSportsMx();
  }

  getNewsSportsMx(){
    this.newsService.topNewsSportsMx()
      .subscribe( (news: Article[]) => {
        this.news = news;
      });
  }

  changePage(page: number){
    this.newsService.page = page;
    this.getNewsSportsMx();
  }

}
