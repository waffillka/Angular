import {Injectable} from "@angular/core";
import {BaseService} from "./base.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError, map, retry} from "rxjs/operators";
import {PublisherDetails} from "../models/Details/PublisherDetails";
import {PublisherLookUp} from "../models/LookUp/PublisherLookUp";

@Injectable()
export class PublisherService extends BaseService {
  protected path = "api/publisher";

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

  public getMany(queryParams: HttpParams): Observable<PublisherLookUp[]> {
    return this.http.get(`${this.url}/${this.path}/search`, { responseType: "text", params: queryParams }).pipe(
      map(responce => this.getManyMap(responce)),
      retry(3),
      catchError(this.HandleError)
    );
  }
}
