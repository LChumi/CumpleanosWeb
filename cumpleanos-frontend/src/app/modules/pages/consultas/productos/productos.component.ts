import { Component, OnInit,Renderer2 } from '@angular/core';
import { Producto } from 'src/app/core/models/producto';
import { ProductoServiceService } from 'src/app/core/services/producto-service.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  producto:Producto=new Producto();

  constructor(private productoServie:ProductoServiceService,private renderer:Renderer2) { }

  ngOnInit(): void {
    this.id_bod=localStorage.getItem('bod_id');
  }

  id_bod:any;


  mostrarProducto(): void {
    console.log(this.id_bod);
    console.log(this.barra);
    this.productoServie.getProducto(this.barra, this.id_bod).subscribe(
      (producto: Producto) => {
        this.producto = producto;
        console.log(this.producto); 
      }
    );
  }
  

  barra: string = '';

  clearInput(event: any) {
    if (event.keyCode === 13) {
      const input = event.target;
      if (input.value) {
        this.barra = input.value;
        input.value = ''; 
      }
    }
  }
  
  

}
