import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro.interface';
import { LivroService } from '../livro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-cadastro',
  templateUrl: './livro-cadastro.component.html',
  styleUrls: ['./livro-cadastro.component.css']
})
export class LivroCadastroComponent implements OnInit {

  livro: Livro;

  constructor(private livroService: LivroService,
              private router: Router) {
    this.livro = {
      titulo: '',
      autor: '',
      qtdPaginas: 0,
      descricao: '',
      preco: 0
    };
  }

  ngOnInit(): void {
  }

  salvar() {
     this.livroService.salvar(this.livro).subscribe(() => this.router.navigate(['livro-lista']), e => console.log(e));
  }
}
