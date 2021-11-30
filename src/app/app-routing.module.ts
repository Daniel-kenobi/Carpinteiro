import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./home/home.module').then( x => x.HomeModule)},
  {path: 'contato', loadChildren: () => import('./contato/contato.module').then(x => x.ContatoModule)},
  {path: 'quem-somos', loadChildren: () => import('./quem-somos/quem-somos.module').then(x => x.QuemSomosModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
