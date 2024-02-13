import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionario } from '../../models/Funcionario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  funcionarios: Funcionario[] = [];
  funcionariosGeral: Funcionario[] = [];

  constructor( private funcionarioService: FuncionarioService ){}

  // a partir que o componente Home for renderizado na tela, o que tiver dentro desse metodo, pimeira coisa que vai ser a primeira coisa a ser executada
  // no Home, a primeira coisa q queremos executar é o GET pra pegar todas os funcionarios
  ngOnInit(): void {
    //subscribe pra pegar os istens q tão dentro da requisição
    this.funcionarioService.GetFuncionarios().subscribe(data => {
      console.log(data);
    });
  }
}
