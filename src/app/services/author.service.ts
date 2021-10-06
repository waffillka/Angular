import {Injectable} from "@angular/core";
import {BaseService} from "./base.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Author} from "../models/Author";
import {catchError, map, retry} from "rxjs/operators";

@Injectable()
export class AuthorService extends BaseService<Author> {
  protected path = "lang";

  constructor(http: HttpClient) {
    super(http);
  }

  public getById(id: string): Observable<Author> {
    return this.http.get(`${this.url}/${this.path}/${id}`, { responseType: "text" }).pipe(
      map(responce => this.getMap(responce)),
      retry(3),
      catchError(this.HandleError)
    );
  }
}
