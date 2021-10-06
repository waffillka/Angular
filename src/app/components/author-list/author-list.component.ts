import { Component, OnInit } from '@angular/core';
import {Author} from "../../models/Author";
import {HttpParams} from "@angular/common/http";
import {AuthorService} from "../../services/author.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css'],
  providers: [AuthorService]
})
export class AuthorListComponent implements OnInit {

  public authors: Author[] | undefined;
  public errorMessage: string | undefined;
  public loadingState = false;

  private currPage = 1;
  private httpParams!: HttpParams;

  constructor(
    private service: AuthorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.authors = [];
      this.currPage = 1;
      this.setHttpParams(params);
      this.getAuthors();
    });
  }

  public getAuthors() {
    this.errorMessage = undefined;
    this.loadingState = true;

    this.service.getMany(this.httpParams).subscribe(
      responce => {
        this.authors = this.authors?.concat(responce);
        this.httpParams = this.httpParams.set("page", ++this.currPage);
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
      page: this.currPage,
      pageSize: 20
    };

    if (params.get('sortOption')) {
      paramsObject.sortOption = params.get('sortOption');
    }
    else {
      paramsObject.sortOption = "abc";
    }

    this.httpParams = new HttpParams({
      fromObject: paramsObject
    });
  }
}
