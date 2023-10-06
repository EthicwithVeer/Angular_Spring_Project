import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { AdminComponent } from './admin/admin.component';
import { DonateComponent } from './donate/donate.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PaymentComponent } from './payment/payment.component';
import { ViewbookComponent } from './viewbook/viewbook.component';

const routes: Routes = [
  { path: '1', redirectTo: 'admindashboard/tutorials', pathMatch: 'full' },
  { path: 'admindashboard/tutorials', component: TutorialsListComponent },
  { path: 'admindashboard/tutorials/:id', component: TutorialDetailsComponent },
  { path: 'admindashboard/add', component: AddTutorialComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'admindashboard', component: AdmindashboardComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'viewbook', component: ViewbookComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }