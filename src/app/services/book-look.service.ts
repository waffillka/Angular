import {Injectable} from "@angular/core";
import {BaseService} from "./base.service";
import {BookDetails} from "../models/Details/BookDetails";
import {HttpClient} from "@angular/common/http";
import {catchError, retry} from "rxjs/operators";
import {BookLookUp} from "../models/LookUp/BookLookUp";

@Injectable()
export class BookLookService extends BaseService<BookLookUp> {
  protected path = "api/books";

  constructor(http: HttpClient) {
    super(http);
  }

  protected getMap(responce: string) {
    return JSON.parse(responce, (key, value) => {
      if (key === "date") {
        return new Date(value);
      }
      else {
        return value;
      }
    });
  }

 /* public create(snippet: any) {
    return this.http.post<BookDetails>(`${this.url}/${this.path}/create`, snippet).pipe(
      catchError(this.HandleError)
    );
  }

  public update(book: BookDetails) {
    return this.http.put<BookDetails>(`${this.url}/${this.path}/update`, book).pipe(
      catchError(this.HandleError)
    );
  }

  public delete(bookId: string) {
    return this.http.delete(`${this.url}/${this.path}/delete/${bookId}`).pipe(
      retry(3),
      catchError(this.HandleError)
    );
  }*/
}
