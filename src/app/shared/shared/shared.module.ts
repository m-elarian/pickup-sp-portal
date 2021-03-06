import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicSelectableModule } from 'ionic-selectable';
import { LoginComponent } from 'src/app/home/login/login.component';
import { VehicleComponent } from 'src/app/setup/vehicle/vehicle/vehicle.component';
import { SpJobComponent } from 'src/app/setup/sp-job/sp-job/sp-job.component';
import { MembersComponent } from 'src/app/setup/members/members/members.component';
import { TeamComponent } from 'src/app/setup/team/team/team.component';
import { UsersComponent } from 'src/app/setup/users/users/users.component';

@NgModule({
  declarations: [LoginComponent, VehicleComponent,SpJobComponent,MembersComponent,TeamComponent,UsersComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    IonicModule,
    ReactiveFormsModule,
    IonicSelectableModule,
    TranslateModule,
  ],
  exports:[
    LoginComponent,
    FormsModule,
    HttpClientModule,
    IonicModule,
    ReactiveFormsModule,
    TranslateModule,
    IonicSelectableModule,
    VehicleComponent,
    SpJobComponent,
    MembersComponent,
    TeamComponent,
    UsersComponent
  ]
})
export class SharedModule {}
