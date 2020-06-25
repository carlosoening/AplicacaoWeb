import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroListagemComponent } from './livro/livro-listagem/livro-listagem.component';
import { LivroCadastroComponent } from './livro/livro-cadastro/livro-cadastro.component';
import { LoginComponent } from './login/login-component/login.component';
import { LivroEditarComponent } from './livro/livro-editar/livro-editar.component';
import { CadastroUsuarioComponent } from './login/cadastro-usuario/cadastro-usuario.component';

const routes: Routes = [
  {
    path: 'livro-lista', component: LivroListagemComponent
   },
   {
     path: 'livro-cadastro', component: LivroCadastroComponent
   },
   {
    path: '', component: LoginComponent
  },
  {
    path: 'editar/:id', component: LivroEditarComponent
  },
  {
    path: 'usuario-cadastro', component: CadastroUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }