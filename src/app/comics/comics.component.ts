import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservice.service'

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
    cms: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
      this.getComics();

  }
    getComics(){
    this.dataService.getComics().subscribe(response => {
        this.cms = response.data.results;
    });
}
}
