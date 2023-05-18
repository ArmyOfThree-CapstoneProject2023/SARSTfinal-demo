import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SetupServicesComponent } from './components/setup-services/setup-services.component';
import { NewResidentComponent } from './components/new-resident/new-resident.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'register', component: SignupComponent},
  { path: 'setupService', component: SetupServicesComponent},
  { path: 'newResident', component: NewResidentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
