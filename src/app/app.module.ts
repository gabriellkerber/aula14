import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarNomesComponent } from './listar-nomes/listar-nomes.component';
import { CadastrarNomesComponent } from './cadastrar-nomes/cadastrar-nomes.component';

import { FormsModule } from '@angular/forms';
import { AppService } from './app.service';


@NgModule({
  declarations: [
    AppComponent,
    ListarNomesComponent,
    CadastrarNomesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
