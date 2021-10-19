import {Injectable} from "@angular/core";
import {BaseService} from "./base.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError, map, retry} from "rxjs/operators";
import {PublisherDetails} from "../models/Details/PublisherDetails";

@Injectable()
export class PublisherDetailsService extends BaseService<PublisherDetails> {
  protected path = "api/authors";

  constructor(http: HttpClient) {
    super(http);
  }

  public getById(id: string): Observable<PublisherDetails> {
    return this.http.get(`${this.url}/${this.path}/${id}`, { responseType: "text" }).pipe(
      map(responce => this.getMap(responce)),
      retry(3),
      catchError(this.HandleError)
    );
  }
}
