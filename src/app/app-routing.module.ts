import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home';
import { LoginComponent } from './account';
import { RegisterComponent } from './account';
import { StarshipListComponent } from './components/starship-list/starship-list.component';
import { AuthGuard } from './_helpers/auth.guard';
import { StarshipDetailComponent } from './components/starship-detail/starship-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'account/login', component: LoginComponent },
  { path: 'account/register', component: RegisterComponent },
  { path: 'starships', component: StarshipListComponent, canActivate: [AuthGuard] },
  { path: 'starships/:id', component: StarshipDetailComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
