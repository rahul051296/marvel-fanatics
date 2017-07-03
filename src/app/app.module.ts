import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { DataService } from './dataservice.service';
import { SmoothScrollToDirective, SmoothScrollDirective } from '../../node_modules/ng2-smooth-scroll';
import { AppComponent } from './app.component';
import { ComicsComponent } from './comics/comics.component';
import { GraphicNovelComponent } from './graphic-novel/graphic-novel.component';


@NgModule({
  declarations: [
    AppComponent,
    SmoothScrollToDirective,
    SmoothScrollDirective,
    ComicsComponent,
    GraphicNovelComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ComicsComponent
      },
      {
        path: 'graphic-novel',
        component: GraphicNovelComponent
      }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
