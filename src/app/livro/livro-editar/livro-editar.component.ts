import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro.interface';
import { LivroService } from '../livro.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-livro-editar',
  templateUrl: './livro-editar.component.html',
  styleUrls: ['./livro-editar.component.css']
})
export class LivroEditarComponent implements OnInit {

  livro: Livro;

  constructor(private livroService: LivroService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              ) {
    this.livro = {
      titulo: '',
      autor: '',
      qtdPaginas: 0,
      descricao: '',
      preco: 0
    };
  }

  ngOnInit() {
    const id = parseInt(this.activatedRoute.snapshot.params.id);
    console.log(id);
    if(id) {
      this.livroService.getLivro(id).subscribe((livro) => this.livro = livro, e => console.log(e))
    }
  }

  salvar() {
     this.livroService.salvar(this.livro).subscribe(() => this.router.navigate(['livro-lista']), e => console.log(e));
  }
}
