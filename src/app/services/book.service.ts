import {Injectable} from "@angular/core";
import {BaseService} from "./base.service";
import {BookDetails} from "../models/Details/BookDetails";
import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError, map, retry} from "rxjs/operators";
import {BookCreation} from "../models/Creation/BookCreation";
import {Observable} from "rxjs";
import {BookLookUp} from "../models/LookUp/BookLookUp";

@Injectable()
export class BookService extends BaseService {
  protected path = "api/books";

  constructor(http: HttpClient) {
    super(http);
  }



  public getById(id: string): Observable<BookDetails> {
    return this.http.get(`${this.url}/${this.path}/${id}`, { responseType: "text" }).pipe(
      map(responce => this.getMap(responce)),
      retry(3),
      catchError(this.HandleError)
    );
  }

  public getMany(queryParams: HttpParams): Observable<BookLookUp[]> {
    return this.http.get(`${this.url}/${this.path}/search`, { responseType: "text", params: queryParams }).pipe(
      map(responce => this.getManyMap(responce)),
      retry(3),
      catchError(this.HandleError)
    );
  }

  public create(snippet: any) {
    return this.http.post<BookCreation>(`${this.url}/${this.path}/create`, snippet).pipe(
      catchError(this.HandleError)
    );
  }

  public update(book: BookDetails) {
    return this.http.put<BookCreation>(`${this.url}/${this.path}/update`, book).pipe(
      catchError(this.HandleError)
    );
  }

  public delete(bookId: string) {
    return this.http.delete(`${this.url}/${this.path}/delete/${bookId}`).pipe(
      retry(3),
      catchError(this.HandleError)
    );
  }
}
