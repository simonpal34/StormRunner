import { Component } from '@angular/core';
import { WeatherService } from '../Services/WeatherService';
import { WeatherModel } from '../app/Model';
import { Http } from '@angular/http';

@Component({
    selector: 'weather',
    templateUrl: './weather.component.html'
})
export class WeatherComponent {
    svc: WeatherService;

    constructor(http : Http){
        this.svc = new WeatherService(http);
    }

    ngOnInit()
    {
        this.svc.getWeather();
    }
}
