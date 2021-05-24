import { Component, OnInit } from '@angular/core';
import { SiteService } from '../../services/site.service';
import { NewsInterface } from '../../interfaces/site';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newsList:NewsInterface[];

  constructor(private siteServices: SiteService) { }

  ngOnInit(): void {
    this.getAllNews();
  }
  getAllNews(){
    this.siteServices.getNews().subscribe(news=>{
      this.newsList=news;
    })
  }

}
