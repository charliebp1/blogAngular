import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {

  public title: string;
  public articles: Article[];

  constructor(
    private _articleService: ArticleService
  ) { 

    this.title = 'Últimos artículos';

  }

  ngOnInit() {
    this._articleService.getArticles(true).subscribe(
      response => {
        if(response.articles){
          this.articles = response.articles;
          console.log(this.articles);
        }else {
          alert('Error cargando los articulos!!!');
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
