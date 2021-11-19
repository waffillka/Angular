import {Injectable} from "@angular/core";
import {BaseService} from "./base.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError, map, retry} from "rxjs/operators";
import {PublisherDetails} from "../models/Details/PublisherDetails";
import {PublisherLookUp} from "../models/LookUp/PublisherLookUp";
import {AuthorLookUp} from "../models/LookUp/AuthorLookUp";

@Injectable()
export class PublisherService extends BaseService {
  protected path = "api/publisher";

  constructor(http: HttpClient) {
    super(http);
  }

  public getById(id: string | null): Observable<PublisherDetails> {
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

  public getCount(searchString: string): Observable<number> {
    if(searchString == '' || searchString == null) {
      return this.http.get(`${this.url}/${this.path}/count`, {responseType: "text"})
        .pipe(
          map(responce => this.getManyMap(responce)),
          retry(3),
          catchError(this.HandleError)
        );
    }
    else {
      return this.http.get(`${this.url}/${this.path}/count`, {
        responseType: "text",
        params: new HttpParams()
          .set('SearchString', searchString)
      }).pipe(
        map(responce => this.getManyMap(responce)),
        retry(3),
        catchError(this.HandleError)
      );
    }
  }

  public getManyWithParams(sortOrder: string, pageNumber: number, pageSize: number, searchString: string): Observable<PublisherLookUp[]> {
    if(searchString == '' || searchString == null) {
      return this.http.get(`${this.url}/${this.path}/search`, {
        responseType: "text",
        params: new HttpParams()
          .set('PageNumber', pageNumber)
          .set('OrderBy', sortOrder)
          .set('PageSize', pageSize)
      }).pipe(
        map(responce => this.getManyMap(responce)),
        retry(3),
        catchError(this.HandleError)
      );
    }
    else {
      return this.http.get(`${this.url}/${this.path}/search`, {
        responseType: "text",
        params: new HttpParams()
          .set('PageNumber', pageNumber)
          .set('OrderBy', sortOrder)
          .set('PageSize', pageSize)
          .set('SearchString', searchString)
      }).pipe(
        map(responce => this.getManyMap(responce)),
        retry(3),
        catchError(this.HandleError)
      );
    }
  }
}
