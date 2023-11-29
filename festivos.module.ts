import { NgModule }                   from '@angular/core';
import { CommonModule }               from '@angular/common';
import { FormsModule }                from '@angular/forms';
import { FestivoRoutingModule }       from './festivo-routing.module';
import { NgxDatatableModule }         from '@swimlane/ngx-datatable';
import { ReferenciasMaterialModule }  from 'src/app/referencias-material.module';
import { FestivosComponent }          from './paginas/festivos/festivos.component';
import { FestivosService }            from 'src/app/services/festivos.service';



@NgModule({
  declarations: [
    FestivosComponent,
  ],
  imports: [
    CommonModule, 
    FestivoRoutingModule,
    ReferenciasMaterialModule,
    FormsModule,
    NgxDatatableModule,
  ], 
  providers: [FestivosService],
})
export class FestivosModule { }
