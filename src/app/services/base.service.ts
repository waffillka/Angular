import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, map, retry} from "rxjs/operators";
import { OidcSecurityService } from 'angular-auth-oidc-client';

export abstract class BaseService<T> {
  protected path = "anyPath";
  protected url = environment.urlApi;


  constructor(protected http: HttpClient) { }

  public get(id: string): Observable<T> {
    return this.http.get(`${this.url}/${this.path}/${id}`, { responseType: "text" }).pipe(
      map(responce => this.getMap(responce)),
      retry(3),
      catchError(this.HandleError)
    );
  }

  protected getMap(responce: string) {
    return JSON.parse(responce);
  }

  public getMany(queryParams: HttpParams): Observable<T[]> {
    return this.http.get(`${this.url}/${this.path}/search`, { responseType: "text", params: queryParams }).pipe(
      map(responce => this.getManyMap(responce)),
      retry(3),
      catchError(this.HandleError)
    );
  }

  protected getManyMap(responce: string) {
    return JSON.parse(responce);
  }

  protected HandleError(error: HttpErrorResponse) {
    switch (error.message) {
      case "Login required":
        return throwError("Нет доступа. Убедитесь, что вы авторизованы.");
    }
    switch (error.status) {
      case 400:
        return throwError("Неверные данные. Убедитесь, что данные введены верно.");
      case 401:
        return throwError("Сервер отказал вам в доступе.");
      case 404:
        return throwError("Не удалось найти подходящий ресурс.");
      case 422:
        return throwError("Сервер не смог обработать данные.");
      default:
        return throwError("Сервер не отвечает. Попробуйте повторить попытку позже.");
    }
  }
}
