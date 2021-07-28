import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {



  constructor( private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.topNewsSportsMx()
      .subscribe(e => console.log(e));
  }

}
