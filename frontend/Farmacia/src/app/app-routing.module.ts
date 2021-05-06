import { ClientesComponent } from './clientes/clientes.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PanelComponent } from './panel/panel.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  { path: 'items', component: ItemsComponent },
  { path: 'colaboradores', component: ColaboradoresComponent  },
  { path: 'panel', component: PanelComponent},
  { path: 'servicios', component: ServiciosComponent  },
  { path: 'clientes', component: ClientesComponent},
  { path: '**', component: ItemsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
