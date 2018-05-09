import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  @Input() childArticleList: Article[];
  @Output() clickSender = new EventEmitter();

  viewsColor(currentArticle) {
    if (currentArticle.views > 5) {
      return "high-views";
    } else {
      return "low-views";
    }
  }

  viewButtonClicked(articleToView: Article) {
    this.clickSender.emit(articleToView);
  }

  constructor() { }

  ngOnInit() {
  }

}
