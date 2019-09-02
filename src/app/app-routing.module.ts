import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
 
  { path: 'herramientas', loadChildren: './herramientas/herramientas.module#HerramientasPageModule' },
  { path: 'inicio', loadChildren: './inicio/inicio.module#InicioPageModule' },  { path: 'alert', loadChildren: './alert/alert.module#AlertPageModule' },
  { path: 'action', loadChildren: './action/action.module#ActionPageModule' },
  { path: 'avatar', loadChildren: './avatar/avatar.module#AvatarPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
