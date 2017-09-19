import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { WeatherComponent } from './components/Weather/weather.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        WeatherComponent,
        FetchDataComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'weather', pathMatch: 'full' },
            { path: 'counter', component: HomeComponent },
            { path: 'weather', component: WeatherComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: '**', redirectTo: 'weather' }
        ])
    ]
})
export class AppModuleShared {
}
