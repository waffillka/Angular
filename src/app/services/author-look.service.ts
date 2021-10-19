import {Injectable} from "@angular/core";
import {BaseService} from "./base.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError, map, retry} from "rxjs/operators";
import {AuthorLookUp} from "../models/LookUp/AuthorLookUp";

@Injectable()
export class AuthorLookService extends BaseService<AuthorLookUp> {
  protected path = "api/authors";

  constructor(http: HttpClient) {
    super(http);
  }

  public getById(id: string): Observable<AuthorLookUp> {
    return this.http.get(`${this.url}/${this.path}/${id}`, { responseType: "text" }).pipe(
      map(responce => this.getMap(responce)),
      retry(3),
      catchError(this.HandleError)
    );
  }
}
