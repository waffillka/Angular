import { Component, OnInit } from '@angular/core';
import {Author} from "../../models/Author";
import {HttpParams} from "@angular/common/http";
import {AuthorDetailsService} from "../../services/author-details.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css'],
  providers: [AuthorDetailsService]
})
export class AuthorListComponent implements OnInit {

  public authors: Author[] | undefined;
  public errorMessage: string | undefined;
  public loadingState = false;

  private currPage = 1;
  private httpParams!: HttpParams;

  constructor(
    private service: AuthorDetailsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.authors = [];
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
        this.httpParams = this.httpParams.set("PageNumber", this.currPage);
        if (responce.length != 0)
          this.currPage += 1;
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
      PageNumber: 1,
      PageSize: 20
    };

    if (params.get('OrderBy')) {
      paramsObject.OrderBy = 1;
    }
    else {
      paramsObject.OrderBy = 0; //"abc";
    }

    this.httpParams = new HttpParams({
      fromObject: paramsObject
    });
  }
}
