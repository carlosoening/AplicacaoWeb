import { Component, OnInit } from '@angular/core';
import { LivroService } from '../livro.service';
import { Livro } from '../livro.interface';

@Component({
  selector: 'app-livro-listagem',
  templateUrl: './livro-listagem.component.html',
  styleUrls: ['./livro-listagem.component.css']
})
export class LivroListagemComponent implements OnInit {

  livros: Livro[]
  constructor(
    private livroService: LivroService
  ) { 

  }

  ngOnInit(): void {
    this.listar();
  }

  excluir(livro: Livro) {
    this.livroService.excluir(livro).subscribe(() => this.listar())
  }

  listar() {
    this.livroService.getLivros()
    .subscribe((dados) => {
      this.livros = dados;
    });
  }

}
