import { Component, OnInit } from '@angular/core';
import { AppService } from './app.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  
  parseLink: any;
  searchName: any;
  constructor(private apiService: AppService) { }
  
  ngOnInit() {
	  this.searchName = 'olive';
    this.apiService.getParseData().subscribe((data)=>{
        console.log(data);
		this.parseLink = data[0].download_link;
    });
    this.apiService.getCountName(this.searchName).subscribe((data)=>{
        console.log(data);
    });
  }
}
