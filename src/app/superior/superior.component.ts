import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-superior',
  templateUrl: './superior.component.html',
  styleUrls: ['./superior.component.css']
})
export class SuperiorComponent implements OnInit {

  @Input() depositoTotal:number;
  @Input() levantamentoTotal:number;
  @Input() orcamentoTotal:number;
  @Input() porcentagemTotal:number;


  constructor() { }

  ngOnInit(): void {
  }

}
