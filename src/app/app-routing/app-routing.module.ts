import { NgModule } from '@angular/core';
//import { RouterModule, Routes } from '@angular/router';
//import { AuthGuard } from '../auth/auth-guard.service';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('../auth/auth.modul').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('../admin/admin.modul').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
