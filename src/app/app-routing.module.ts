import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeladosservidorComponent } from './components/heladosservidor/heladosservidor.component';
import { HomeComponent } from './../app/components/home/home.component';
import { SaboresservidorComponent } from './components/saboresservidor/saboresservidor.component';
import { LoginComponent } from './components/login/login.component';
import { HeladoscliComponent } from './components/heladoscli/heladoscli.component';
import { SaborescliComponent } from './components/saborescli/saborescli.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'helado', component: HeladosservidorComponent },
  { path: 'sabor', component: SaboresservidorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'heladosCli', component: HeladoscliComponent  },  
  { path: 'saboresCli', component: SaborescliComponent },
  
  
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
