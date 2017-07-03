import { Component } from '@angular/core';
import {GraphicNovelComponent} from './graphic-novel/graphic-novel.component'
declare var JQuery: any;
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {

  }
  ngOnInit(){
    $(document).ready(function()
    {
      var scroll_start = 0;
        var startchange = $('#title');
        var offset = startchange.offset();

$(document).scroll(function()
    {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top)
            {
                $('.navbar-default').css('background-color','rgba(104, 1, 2,0.95)');
                $('.navbar-brand').css('font-size','30px').css('transition','font-size .5s');
                $('.navbar-nav>li> a').css('font-size','18px').css('transition','font-size .5s');
                $('.navbar-default').css('box-shadow','0px 0px 8px 2px #000000');
             }
         else
             {
                 $('.navbar-default').css('background-color','rgba(104, 1, 2, 0)');
                 $('.navbar-brand').css('font-size','34px').css('transition','font-size .5s');
                 $('.navbar-nav>li> a').css('font-size','20px').css('transition','font-size .5s');
                $('.navbar-default').css('box-shadow','0px 0px 0px 0px #000000');
            }
    });
    });
}
}
