import { NewsService } from 'src/app/services/news.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-news-footer',
  templateUrl: './news-footer.component.html',
  styleUrls: ['./news-footer.component.css']
})
export class NewsFooterComponent implements OnInit {

 
  totalPages: number[] = [];
  @Output() page = new EventEmitter<number>();
  disabled:boolean = false;

  constructor( public newsService: NewsService) { }

  ngOnInit(): void {
    this.getTotalPages();
  }

  getTotalPages(){
    this.newsService.getTotalPages().subscribe( total => this.totalPages = total);
  }

  selectPage(pageSelected: number){
    this.page.emit(pageSelected);
  }

  previousPage(){
    if(this.newsService.page <= 1){return;}
    
    this.page.emit(this.newsService.page - 1);
  }

  nextPage(){
    if(this.newsService.page >= this.totalPages.length){return;}

    this.page.emit(this.newsService.page + 1);
  }
}
