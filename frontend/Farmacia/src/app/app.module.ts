import { ServiciosService } from './servicios.service';
import { ColaboradoresService } from './colaboradores.service';
import { ClientesService } from './clientes.service';
import { BaseDatosService } from './base-datos.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ItemsComponent } from './items/items.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { HttpClientModule } from '@angular/common/http';
import { PanelComponent } from './panel/panel.component';
import { BarchartComponent } from './panel/barchart/barchart.component';
import { ChartsModule } from 'ng2-charts';
import { GananciaComponent } from './panel/ganancia/ganancia.component';
import { GananciaClienteComponent } from './panel/ganancia-cliente/ganancia-cliente.component';
import { ClientesComponent } from './clientes/clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ItemsComponent,
    ServiciosComponent,
    ColaboradoresComponent,
    PanelComponent,
    BarchartComponent,
    GananciaComponent,
    GananciaClienteComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [BaseDatosService, ClientesService, ColaboradoresService, ServiciosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
