import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservice.service'
@Component({
  selector: 'app-graphic-novel',
  templateUrl: './graphic-novel.component.html',
  styleUrls: ['./graphic-novel.component.css']
})
export class GraphicNovelComponent implements OnInit {
chs: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getGraphicNovel();
  }
  getGraphicNovel(){
    this.dataService.getGraphicNovel().subscribe(response => {
      this.chs = response.data.results;
      console.log(response.data.results);
  });
}
}
