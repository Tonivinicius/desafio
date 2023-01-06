import { Levantamentos } from './levantamentos/levantamentos.model';
import { Depositos } from './depositos/depositos.model';
import { Component } from '@angular/core';
import { LevantamentoServiço } from './levantamentos/levantamentos.service';
import { DepositoServiço } from './depositos/depositos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
getdepositoTotal(): number {
throw new Error('Method not implemented.');
}

  deposito:Depositos[]=[];
  levantamento:Levantamentos[]=[];


  constructor(private depositoServiço:DepositoServiço,
              private levantamentoServiço:LevantamentoServiço){
                this.deposito = depositoServiço.depositos;
                this.levantamento = levantamentoServiço.levantamentos;
              }

  getDepositoTotal(){
    let depositoTotal:number = 0;
    this.deposito.forEach(deposito => {
      depositoTotal += deposito.valor;
    }
    );
    return depositoTotal;
  }

  getLevantamentoTotal(){
    let levantamentoTotal:number = 0;
    this.levantamento.forEach(levantamento => {
      levantamentoTotal += levantamento.valor
    }
    );
    return levantamentoTotal;
  }

  getPorcentagemTotal()
    {
      return this.getLevantamentoTotal()/this.getDepositoTotal();
    }

  getOrcamentoTotal()
    {
      return this.getDepositoTotal() - this.getLevantamentoTotal();
    }

}
