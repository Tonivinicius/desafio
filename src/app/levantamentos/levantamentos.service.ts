import { Levantamentos } from './levantamentos.model';


export class LevantamentoServi├žo{
  levantamentos:Levantamentos[]=[
    new Levantamentos("Despesas gerais",900),
    new Levantamentos("compras",300)
  ];

  eliminar(levantamentos:Levantamentos){
    const indice: number = this.levantamentos.indexOf(levantamentos);
    this.levantamentos.splice(indice,1);
  }

}
