import { Component, OnInit } from '@angular/core';
import { Bodega } from 'src/app/core/models/bodega';
import { BodegaServiceService } from 'src/app/core/services/bodega-service.service';

@Component({
  selector: 'app-bodegas',
  templateUrl: './bodegas.component.html',
  styleUrls: ['./bodegas.component.css']
})
export class BodegasComponent implements OnInit {

  selectedBodega: Bodega=new Bodega();
  lista_bodegas:Bodega[]=[];

  constructor(private bodegaService:BodegaServiceService) { }

  ngOnInit(): void {
    this.id_usuario=localStorage.getItem('id_usuario');
    this.id_empresa=localStorage.getItem('id_empresa');
    this.listarBodegas()
  }

  id_usuario:any;
  id_empresa:any;

  listarBodegas():void{
    this.bodegaService.getBodegas(this.id_usuario,this.id_empresa).subscribe(
      (listaBodegas:Bodega[]) =>this.lista_bodegas=listaBodegas
    )
  }

  id_bod:any
  seleccionarBod(bodega:Bodega):void{
    this.selectedBodega=bodega;
    this.id_bod=this.selectedBodega.bod_codigo;
    console.log(this.id_bod)
    localStorage.setItem('bod_id',String(this.selectedBodega.bod_codigo));
    location.replace('/consulta');
  }

}
