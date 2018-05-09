import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {
  @Input() childSelectedArticle: Article;
  @Output() clickedDone = new EventEmitter();

  constructor() { }

  finishedReading() {
    this.clickedDone.emit();
  }

  ngOnInit() {
  }

}
