import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {throwError} from "rxjs";

export abstract class BaseService {
  protected path = "anyPath";
  protected url = environment.urlApi;

  constructor(protected http: HttpClient) { }

  protected getMap(responce: string) {
    return JSON.parse(responce);
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
