import { Depositos } from "./depositos.model";


export class DepositoServiço{
  depositos:Depositos[]=[
    new Depositos("Salario",1000),
    new Depositos("Venda de carro",5000)
  ];

  eliminar(depositos:Depositos){
    const indice: number = this.depositos.indexOf(depositos);
    this.depositos.splice(indice,1);
  }

}
