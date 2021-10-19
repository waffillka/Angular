import {Injectable} from "@angular/core";
import {BaseService} from "./base.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError, map, retry} from "rxjs/operators";
import {PublisherLookUp} from "../models/LookUp/PublisherLookUp";

@Injectable()
export class PublisherLookService extends BaseService<PublisherLookUp> {
  protected path = "api/authors";

  constructor(http: HttpClient) {
    super(http);
  }

  public getById(id: string): Observable<PublisherLookUp> {
    return this.http.get(`${this.url}/${this.path}/${id}`, { responseType: "text" }).pipe(
      map(responce => this.getMap(responce)),
      retry(3),
      catchError(this.HandleError)
    );
  }
}
