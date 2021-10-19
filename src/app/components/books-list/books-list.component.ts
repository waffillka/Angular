import { Component, OnInit } from '@angular/core';
import {HttpParams} from "@angular/common/http";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {BookDetails} from "../../models/Details/BookDetails";
import {BookDetailsService} from "../../services/book-details.service";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
  providers: [BookDetailsService]
})
export class BooksListComponent implements OnInit {
  public books: BookDetails[] | undefined;
  public errorMessage: string | undefined;
  public loadingState = false;

  private currPage = 1;
  private httpParams!: HttpParams;

  constructor(
    private service: BookDetailsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.books = [];
      this.currPage = 1;
      this.setHttpParams(params);
      this.getBooks();
    });
  }

  public getBooks() {
    this.errorMessage = undefined;
    this.loadingState = true;

    this.service.getMany(this.httpParams).subscribe(
      responce => {
        this.books = this.books?.concat(responce);
        this.httpParams = this.httpParams.set("PageNumber", ++this.currPage);
        this.loadingState = false;
      },
      error => {
        this.errorMessage = error;
        this.loadingState = false;
      }
    );
  }

  private setHttpParams(params: ParamMap) {
    var paramsObject: { [key: string]: any } = {
      PageNumber: this.currPage,
      pageSize: 10
    };

    /*if (params.get('sortOption')) {
      paramsObject.sortOption = params.get('sortOption');
    }
    if (params.get('langName')) {
      paramsObject.langs = [params.get('langName')];
    }
    if (params.get('tagName')) {
      paramsObject.tags = [params.get('tagName')];
    }*/

    this.httpParams = new HttpParams({
      fromObject: paramsObject
    });
  }
}
