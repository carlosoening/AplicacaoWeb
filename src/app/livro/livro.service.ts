import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { of } from 'rxjs';
import { Livro } from './livro.interface';

const url = 'http://localhost:3000/livros'

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private livros: Livro[];
  
  constructor(private httpClient: HttpClient) { 
  }

  getLivros() {
    return this.httpClient.get<Livro[]>(url)
  }

  excluir(livro: Livro) {
    return this.httpClient.delete(`${url}/${livro.id}`)
  }

  salvar(livro: Livro) {
    if (livro.id) {
      return this.httpClient.put(`${url}/${livro.id}`, livro)
    } else {
      return this.httpClient.post(`${url}`, livro)
    }
  }

  getLivro(id: number) {
    return this.httpClient.get<Livro>(`${url}/${id}`)
  }
}
