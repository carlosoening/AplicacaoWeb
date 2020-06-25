import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.interface';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario
  ok: boolean
  invalid: boolean

  constructor(
    private loginService: LoginService,
    private router: Router) { 

      this.usuario = {
        nome: '',
        username: '',
        email: '',
        senha: '',
      }

      this.invalid = false
    }

  ngOnInit(): void {
  }

  validarUsuario() {
    this.loginService.validarLogin(this.usuario).subscribe((dados) => {
      this.ok = !!dados;
      if(this.ok) {
        this.router.navigate(['livro-lista'])
      }
    }, e => console.log(e))
  }

  navegar() {
    this.router.navigate(['usuario-cadastro'])
  }

}
