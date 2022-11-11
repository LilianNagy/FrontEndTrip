import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { StationComponent } from './station/station.component';
import { CreateStationComponent } from './create-station/create-station.component';
import { UpdateStationComponent } from './update-station/update-station.component';
import { DeleteStationComponent } from './delete-station/delete-station.component';
import { ShowallStationsComponent } from './showall-stations/showall-stations.component';

 
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CreateTripComponent,
    StationComponent,
    CreateStationComponent,
    UpdateStationComponent,
    DeleteStationComponent,
    ShowallStationsComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
