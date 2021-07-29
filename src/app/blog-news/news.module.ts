import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsPageComponent } from './news-page/news-page.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { NewsFooterComponent } from './news-footer/news-footer.component';
import { NoimgPipe } from './pipes/noimg.pipe';


@NgModule({
  declarations: [
    NewsPageComponent,
    NewsListComponent,
    NewsItemComponent,
    NewsFooterComponent,
    NoimgPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NewsPageComponent
  ]
})
export class NewsModule { }
