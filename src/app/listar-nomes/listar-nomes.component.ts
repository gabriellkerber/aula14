import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-nomes',
  templateUrl: './listar-nomes.component.html',
  styleUrls: ['./listar-nomes.component.scss']
})
export class ListarNomesComponent implements OnInit {


  constructor(public appService: AppService, private router: Router) { }

  ngOnInit(): void {

  }

  navegarParaCadastro(){
    this.router.navigateByUrl('cadastro');
  }

}
