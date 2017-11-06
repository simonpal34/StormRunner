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
    forecast: WeatherModel[];

    constructor(http : Http){
        this.svc = new WeatherService(http);
    }

    async ngOnInit()
    {
        await this.svc.getWeather().then(async response => {
            this.forecast = await response
        });
    }
}
