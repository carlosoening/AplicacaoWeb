import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { LivroListagemComponent } from './livro/livro-listagem/livro-listagem.component';
import { LivroCadastroComponent } from './livro/livro-cadastro/livro-cadastro.component';
import { LoginComponent } from './login/login-component/login.component';
import { FormsModule } from '@angular/forms';
import { LivroEditarComponent } from './livro/livro-editar/livro-editar.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastroUsuarioComponent } from './login/cadastro-usuario/cadastro-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    LivroListagemComponent,
    LivroCadastroComponent,
    LoginComponent,
    LivroEditarComponent,
    CadastroUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
