import {Injectable} from "@angular/core";
import {BaseService} from "./base.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError, map, retry} from "rxjs/operators";
import {AuthorDetails} from "../models/Details/AuthorDetails";
import {AuthorLookUp} from "../models/LookUp/AuthorLookUp";

@Injectable()
export class AuthorService extends BaseService {
  protected path = "api/Authors";

  constructor(http: HttpClient) {
    super(http);
  }

  protected getMap(responce: string) {
    return JSON.parse(responce, (key, value) => {
      if (key === "birthday") {
        return new Date(value);
      }
      else {
        return value;
      }
    });
  }

  public getById(id: string): Observable<AuthorDetails> {
    return this.http.get(`${this.url}/${this.path}/${id}`, { responseType: "text" }).pipe(
      map(responce => this.getMap(responce)),
      retry(3),
      catchError(this.HandleError)
    );
  }

  public getMany(queryParams: HttpParams): Observable<AuthorLookUp[]> {
    return this.http.get(`${this.url}/${this.path}/search`, { responseType: "text", params: queryParams }).pipe(
      map(responce => this.getManyMap(responce)),
      retry(3),
      catchError(this.HandleError)
    );
  }

  public getCount(): Observable<number> {
    return this.http.get(`${this.url}/${this.path}/count`, { responseType: "text" }).pipe(
      map(responce => this.getMap(responce)),
      retry(3),
      catchError(this.HandleError)
    );
  }

  public getManyWithParams(sortOrder : string, pageNumber : number, pageSize : number): Observable<AuthorLookUp[]> {
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
}
