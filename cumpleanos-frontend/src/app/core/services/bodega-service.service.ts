import { Injectable } from '@angular/core';
import { Bodega } from '../models/bodega';
import { Observable,of } from 'rxjs';
import { HttpClient , HttpHeaders} from '@angular/common/http'
import { API_URL } from 'src/assets/config';

@Injectable({
  providedIn: 'root'
})
export class BodegaServiceService {

  private baseUrl:string=API_URL+'bodegas/';

  private httpHeaders :HttpHeaders =new HttpHeaders({'Content-Type':'aplication/json'})

  constructor(private http:HttpClient) { }

  getBodegas(bod_usuario:any,bod_empresa:any): Observable<Bodega[]>{
    return this.http.get<Bodega[]>(this.baseUrl+'listBodegas/'+bod_usuario+'/'+bod_empresa);
  }
}
