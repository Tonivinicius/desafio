import { Component, OnInit } from '@angular/core';
import { DepositoServiço } from '../depositos/depositos.service';
import { LevantamentoServiço } from '../levantamentos/levantamentos.service';
import { Depositos } from '../depositos/depositos.model';
import { Levantamentos } from '../levantamentos/levantamentos.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  tipo:string = "depositoOeracao";
  descricaoInput:string;
  valorInput:number;

  constructor(private depositoServiço:DepositoServiço,
              private levantamentoServiço:LevantamentoServiço){}

  ngOnInit(): void {
  }

  tipoOperacao(evento){
    this.tipo = evento.target.value;
  }

  addValor(){
    if(this.tipo === "depositoOperacao")
        this.depositoServiço.depositos.push(new Depositos(this.descricaoInput, this.valorInput))
    else
    this.levantamentoServiço.levantamentos.push(new Levantamentos(this.descricaoInput, this.valorInput))
  }

}
