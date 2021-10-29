import {Injectable} from "@angular/core";
import {BaseService} from "./base.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError, map, retry} from "rxjs/operators";
import {UserDetails} from "../models/Details/UserDetails";

@Injectable()
export class UserService extends BaseService {
  protected path = "api/user";

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

  public getById(id: string | null): Observable<UserDetails> {
    return this.http.get(`${this.url}/${this.path}/${id}`, { responseType: "text" }).pipe(
      map(responce => this.getMap(responce)),
      retry(3),
      catchError(this.HandleError)
    );
  }

  public getByAuthId(id: string | null): Observable<UserDetails> {
    return this.http.get(`${this.url}/${this.path}/authId/${id}`, { responseType: "text" }).pipe(
      map(responce => this.getMap(responce)),
      retry(3),
      catchError(this.HandleError)
    );
  }
}
