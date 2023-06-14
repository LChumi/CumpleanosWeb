import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioServiceService } from 'src/app/core/services/usuario-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm=this.formBuilder.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })

  constructor(private formBuilder:FormBuilder,private router:Router,private userService:UsuarioServiceService) { }

  ngOnInit(): void {
  }

  get username(){
    return this.loginForm.controls.username
  }
  get password(){
    return this.loginForm.controls.password
  }

  login() {
    if (this.loginForm.valid) {
      const username = this.loginForm.controls.username.value;
      const password = this.loginForm.controls.password.value;
  
      this.userService.login(username, password).subscribe(
        data => {
          console.log(data);
          if (data != null) {
            localStorage.setItem('id_usuario', String(data.usr_codigo));
            localStorage.setItem('id_empresa',String(data.usr_empresa_def));
            location.replace('/bodegas');
            console.log('OK');
            this.loginForm.reset();
          } else {
            alert('err');
          }
        },
        error => {
          console.error(error);
          let code:any;
          code=error.status;
          switch(code){
            case 401:{
              Swal.fire({
                icon:'error',
                text:'Credenciales invalidos',
                footer:'<a href="">Importadora Cumpleaños</a>'
              });
              break;
            }
            case 500:{
              Swal.fire({
                icon: 'info',
                title: 'Error en el servidor',
                text: 'Vuelve a intentar mas tarde',
                footer:'<a href="">Importadora Cumpleaños</a>'
              });
              break;
            }
          }
        }
      );
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
