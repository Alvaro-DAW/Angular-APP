import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from "@angular/common/http";

import { IProducte } from "../interfaces/iproducte";



@Injectable({
  providedIn: "root",
})
export class DadesProductesService {
  //incorporar al producte service un servei http
  constructor(private _http: HttpClient) {}
  getDades(): Observable<IProducte[]> {
    return this._http.get<IProducte[]>(
      "http://localhost/M14/M14_Ac3_get_post/public/index.php/api/productes"
    );
    //get retorna un observablee
  }

  productes: IProducte[] = [];

  post(body: Object = {}): Observable<any> {
    return this._http.post(
      `http://localhost/M14/M14_Ac3_get_post/public/index.php/api/producte`,
      JSON.stringify(body)
    );
  }
}
