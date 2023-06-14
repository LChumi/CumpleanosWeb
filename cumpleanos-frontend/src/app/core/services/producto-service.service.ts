import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/assets/config';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {

  private baseUrl:String =API_URL+"productos/";

  private httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type':'aplication/json'})

  constructor(private http:HttpClient) { }

  getProducto(pro_id:any,bod_id:any):Observable<Producto>{
    return this.http.get<Producto>(this.baseUrl+'Buscar/'+pro_id+'/'+bod_id+'/barra/bodega');
  }

}
