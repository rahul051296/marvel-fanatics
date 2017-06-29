import { Component } from '@angular/core';
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
        var startchange = $('#button1');
        var offset = startchange.offset();

$(document).scroll(function()
    {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top)
            {
                $('.navbar-default').css('background-color','rgba(104, 1, 2,0.95)');
                $('.navbar-brand').css('transform','scale(1)').css('transition','transform .5s');
                $('.navbar-nav>li> a').css('transform','scale(1)').css('transition','transform .5s');
                $('.navbar-default').css('box-shadow','0px 0px 8px 2px #000000').css('padding','10px').css('transition','padding .5s');
             }
         else
             {
                 $('.navbar-default').css('background-color','rgba(0, 0, 0, 0.1)');
                 $('.navbar-brand').css('transform','scale(1.2)').css('transition','transform .5s');
                 $('.navbar-nav>li> a').css('transform','scale(1.2)').css('transition','transform .5s');
                $('.navbar-default').css('box-shadow','0px 0px 0px 0px #000000').css('padding','20px 10px 20px 10px').css('transition','padding .5s');
            }
    });
    });
}
}
