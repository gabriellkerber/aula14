import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-nomes',
  templateUrl: './cadastrar-nomes.component.html',
  styleUrls: ['./cadastrar-nomes.component.scss']
})
export class CadastrarNomesComponent implements OnInit {

  nome: string;

  constructor(public appService: AppService, private router: Router) { }

  ngOnInit(): void {
  }

  cadastrar(){

    if(!this.nome){
      return;
    }

    this.appService.nomes.push(this.nome);

    this.nome = null;

    this.router.navigateByUrl('lista');
  }

}
