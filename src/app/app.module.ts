import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SuperiorComponent } from './superior/superior.component';
import { DepositosComponent } from './depositos/depositos.component';
import { LevantamentosComponent } from './levantamentos/levantamentos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LevantamentoServiço } from './levantamentos/levantamentos.service';
import { DepositoServiço } from './depositos/depositos.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SuperiorComponent,
    DepositosComponent,
    LevantamentosComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LevantamentoServiço,DepositoServiço],
  bootstrap: [AppComponent]
})
export class AppModule { }
