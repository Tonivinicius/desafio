import { Component, Input, OnInit } from '@angular/core';
import { Levantamentos } from './levantamentos.model';
import { LevantamentoServiço } from './levantamentos.service';

@Component({
  selector: 'app-levantamentos',
  templateUrl: './levantamentos.component.html',
  styleUrls: ['./levantamentos.component.css']
})
export class LevantamentosComponent implements OnInit {

  levantamentos:Levantamentos[]=[];
  @Input() levantamentoTotal:number;

  constructor(private levantamentoServiço:LevantamentoServiço){}

  ngOnInit(): void {
    this.levantamentos = this.levantamentoServiço.levantamentos;
  }

  eliminarLevantamentos(levantamentos:Levantamentos){
    this.levantamentoServiço.eliminar(levantamentos);
  }

  calcularPorcentagem(levantamentos:Levantamentos){
    return levantamentos.valor/this.levantamentoTotal;
  }

}
