import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Livro } from './livro.interface';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private livros: Livro[];
  
  constructor() { 
    this.livros = [
      {
        id: 1,
        titulo: 'As crônicas de Nárnia: O leão, a feiticeira e o guarda-roupa',
        autor: 'C. S. Lewis',
        qtdPaginas: 100,
        descricao: 'O leão, a feiticeira e o guarda-roupa',
        preco: 20
      },
      {
        id: 2,
        titulo: 'As crônicas de Nárnia: O cavalo e seu menino',
        autor: 'C. S. Lewis',
        qtdPaginas: 200,
        descricao: 'O cavalo e seu menino',
        preco: 20
      },
      {
        id: 3,
        titulo: 'As crônicas de Nárnia: A cadeira de prata',
        autor: 'C. S. Lewis',
        qtdPaginas: 300,
        descricao: 'A cadeira de prata',
        preco: 20
      },
      {
        id: 4,
        titulo: 'As crônicas de Nárnia: Príncipe Caspian',
        autor: 'C. S. Lewis',
        qtdPaginas: 400,
        descricao: 'Príncipe Caspian',
        preco: 20
      },
    ];
  }

  getLivros() {
    console.log('getLivros')
    return of(this.livros);
  }

  excluir(livro: Livro) {
    this.livros = this.livros.filter((l) => l.id !== livro.id)
    return of({});
  }

  salvar(livro: Livro) {
    livro.id = this.livros[this.livros.length -1].id + 1;
    this.livros.push(livro);
    return of({})
  }
}
