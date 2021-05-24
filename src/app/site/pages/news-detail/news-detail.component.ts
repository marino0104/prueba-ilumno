import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SiteService } from '../../services/site.service';
import { NewsInterface } from '../../interfaces/site';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  itemId:string;
  currentNews: NewsInterface;

  constructor(
    private activatedRoute: ActivatedRoute,
    private siteService: SiteService
    ) { }

  ngOnInit(): void {
    this.showSelectedNews();

  }
  showSelectedNews(): void{
    this.activatedRoute.paramMap.subscribe(newsId=>{
        this.itemId=newsId.get('id');
        this.getCurrentNews();
    })
  }
  getCurrentNews(): void{
    this.siteService.getNews().subscribe(news=>{
      this.currentNews= news.filter(currentItem=>currentItem.id==this.itemId)[0];
    })
  }
}
