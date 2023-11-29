import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FestivosComponent }    from './paginas/festivos/festivos.component';

const routes: Routes = [
  { path: '', component: FestivosComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FestivoRoutingModule { }
