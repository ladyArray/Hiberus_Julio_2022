import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MuseosComponent } from './components/museos/museos.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { MuseoDetalleComponent } from './components/museo-detalle/museo-detalle.component';
import { MuseosService } from './services/museos.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const misRutas: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'museos', component: MuseosComponent},
  {path: 'museo_detalle/:codigo', component: MuseoDetalleComponent},
  {path: 'rutas', component: RutasComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},  // si no hay ruta va a home
  {path: '**', component: ErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    MuseosComponent,
    RutasComponent,
    ContactoComponent,
    ErrorComponent,
    MuseoDetalleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(misRutas),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MuseosService, MatPaginatorIntl],
  bootstrap: [AppComponent]
})
export class AppModule { }
