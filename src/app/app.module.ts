import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NewsPageComponent } from './blogNews/news-page/news-page.component';
import { NewsListComponent } from './blog-news/news-list/news-list.component';
import { NewsItemComponent } from './blog-news/news-item/news-item.component';
import { NewsFooterComponent } from './blog-news/news-footer/news-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NewsPageComponent,
    NewsListComponent,
    NewsItemComponent,
    NewsFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
