import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario.interface';

const url = 'http://localhost:8080/api/resources/usuario'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { 
  }

  validarLogin(usuario: Usuario) {
    return this.httpClient.put<Boolean>(`${url}/${usuario.username}`, usuario);
  }

  salvar(usuario: Usuario) {
    if (usuario.id) {
      return this.httpClient.put(`${url}/${usuario.id}`, usuario)
    } else {
      return this.httpClient.post(`${url}`, usuario)
    }
  }
}
