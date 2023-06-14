import { Injectable } from '@angular/core';
import { API_URL } from 'src/assets/config';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  private baseUrl:string = API_URL+'usuarios/'

  private httpHeaders =new HttpHeaders({'Content-Type':'aplication/json'})

  constructor(private http:HttpClient) { }

  login(username:any,password:any): Observable<any>{
    return this.http.get<any>(this.baseUrl+'login/'+username+'/'+password);
  }
  
}
