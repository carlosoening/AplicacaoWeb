import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro.interface';
import { LivroService } from '../livro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-listagem',
  templateUrl: './livro-listagem.component.html',
  styleUrls: ['./livro-listagem.component.css']
})
export class LivroListagemComponent implements OnInit {

  livros: Livro[]
  constructor(
    private livroService: LivroService,
  ) { 

  }

  ngOnInit(): void {
    this.listar();
  }

  excluir(livro: Livro) {
    this.livroService.excluir(livro).subscribe(() => this.listar(), e => console.log(e))
  }

  listar() {
    this.livroService.getLivros()
    .subscribe((dados) => {
      this.livros = dados;
    }, e => console.log(e));
  }

}
