import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllAppointmentsComponent } from './customer/all-appointments/all-appointments.component';
import { AppointmentHistoryComponent } from './customer/appointment-history/appointment-history.component';
import { ApprovedAppointmentsComponent } from './customer/approved-appointments/approved-appointments.component';
import { MakeAppointmentComponent } from './customer/make-appointment/make-appointment.component';
import { MenuComponent } from './customer/menu/menu.component';
import { PendingAppointmentsComponent } from './customer/pending-appointments/pending-appointments.component';
import { ProfileComponent } from './customer/profile/profile.component';
import { UpdateProfileComponent } from './customer/update-profile/update-profile.component';
import { ViewAppointmentsComponent } from './customer/view-appointments/view-appointments.component';
import { ViewApprovedAppointmentsComponent } from './customer/view-approved-appointments/view-approved-appointments.component';
import { ViewPendingAppointmentsComponent } from './customer/view-pending-appointments/view-pending-appointments.component';

const routes: Routes = [
  
  {path:'menu',component:MenuComponent},
  {path:'make-appointment',component:MakeAppointmentComponent},
  {path:'all-appointments',component:AllAppointmentsComponent},
  {path:'appointment-history',component:AppointmentHistoryComponent},
  {path:'approved-appointment',component:ApprovedAppointmentsComponent},
  {path:'pending-appointment',component:PendingAppointmentsComponent},
  {path:'profile',component:ProfileComponent},
  {path:'view-pending-appointment/:appointment', component:ViewPendingAppointmentsComponent},
  {path:'view-approved-appointment/:appointment', component:ViewApprovedAppointmentsComponent},
  {path:'view-appointment/:appointment', component:ViewAppointmentsComponent},
  {path:'view-pending-appointment', component:ViewPendingAppointmentsComponent},
  {path:'view-approved-appointment', component:ViewApprovedAppointmentsComponent},
  {path:'view-appointment', component:ViewAppointmentsComponent},
  {path:'update-profile',component:UpdateProfileComponent},
  {path:'update-profile/:user',component:UpdateProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
