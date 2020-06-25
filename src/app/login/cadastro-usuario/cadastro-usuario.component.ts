import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.interface';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  usuario: Usuario

  constructor(private loginService: LoginService,
    private router: Router) { 
    this.usuario = {
      nome: '',
      username: '',
      email: '',
      senha: '',
    }
  }

  ngOnInit(): void {
  }

  salvar() {
    if(this.usuario.nome && this.usuario.email && this.usuario.username && this.usuario.senha){
      this.loginService.salvar(this.usuario).subscribe(() => this.router.navigate(['']), e => console.log(e));
    } else {
      return
    }
  }
}
