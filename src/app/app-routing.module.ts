import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { TripComponent} from "./trip/trip.component";
import { DeleteTripComponent } from './delete-trip/delete-trip.component';
import { UpdateTripComponent } from './update-trip/update-trip.component';
import { ShowallTripsComponent } from './showall-trips/showall-trips.component';
import { StationComponent } from './station/station.component';
import { CreateStationComponent } from './create-station/create-station.component';
import { DeleteStationComponent } from './delete-station/delete-station.component';
import { UpdateStationComponent } from './update-station/update-station.component';
import { ShowallStationsComponent } from './showall-stations/showall-stations.component';
const routes: Routes = [
{path:'signup',component:SignupComponent},
{path:'signin',component:SigninComponent},
{path:'createtrip',component: CreateTripComponent},
{path:'deletetrip',component:DeleteTripComponent},
{path:'updatetrip',component: UpdateTripComponent},
{path:'showalltrips',component: ShowallTripsComponent},
{path:'trip',component: TripComponent},
{path:'station',component: StationComponent},
{path:'createstation',component: CreateStationComponent},
{path:'deletestation',component:DeleteStationComponent},
{path:'updatestation',component: UpdateStationComponent},
{path:'showallstations',component: ShowallStationsComponent},
{path:'**',redirectTo:'signup',pathMatch:'full'},
{path:'',redirectTo:'signup',pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[SignupComponent,SigninComponent,CreateTripComponent,DeleteTripComponent,UpdateTripComponent,StationComponent,CreateStationComponent,DeleteStationComponent,UpdateStationComponent,ShowallStationsComponent]