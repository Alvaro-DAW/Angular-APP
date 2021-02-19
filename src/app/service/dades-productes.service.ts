import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from "@angular/common/http";

import { IProducte } from "../interfaces/iproducte";
import { ICategoria } from "../interfaces/icategoria";



@Injectable({
  providedIn: "root",
})
export class DadesProductesService {
  //incorporar al producte service un servei http
  constructor(private _http: HttpClient) {}
  getDades(): Observable<IProducte[]> {
    return this._http.get<IProducte[]>(
      "http://localhost/M14/M14_Ac3/public/index.php/api/productes"
    );
    //get retorna un observablee
  }
  getCategories(): Observable<ICategoria[]> {
    return this._http.get<ICategoria[]>(
      "http://localhost/M14/M14_Ac3/public/index.php/api/categories"
    );
    //get retorna un observablee
  }
  
 
 
  
}
