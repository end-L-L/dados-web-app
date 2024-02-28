import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';

const routes: Routes = [
  { path: '', component: LoginScreenComponent, pathMatch:'full' },
  { path: 'home', component: HomeScreenComponent, pathMatch:'full' },
  { path: 'registro-usuario', component: RegistroScreenComponent, pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
