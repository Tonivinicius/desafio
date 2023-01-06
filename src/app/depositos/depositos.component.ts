import { Component, OnInit } from '@angular/core';
import { Depositos } from './depositos.model';
import { DepositoServiço } from './depositos.service';

@Component({
  selector: 'app-depositos',
  templateUrl: './depositos.component.html',
  styleUrls: ['./depositos.component.css']
})
export class DepositosComponent implements OnInit {

  depositos:Depositos[]=[];

  constructor(private depositoServico:DepositoServiço){}

  ngOnInit(): void {
    this.depositos = this.depositoServico.depositos;
  }

  eliminarRegistro(depositos:Depositos){
    this.depositoServico.eliminar(depositos)
  }

}
