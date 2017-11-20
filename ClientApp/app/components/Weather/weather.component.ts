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
    forecast: WeatherModel;
    weather: boolean;
    weekday: string[]=[];

    constructor(http : Http){
        this.svc = new WeatherService(http);
    }

    async ngOnInit()
    {
        await this.svc.getWeather().then(async response => {
            this.forecast = await response
        });

        for(var i = 0; i < 5; i++) {
            var Wday: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            var xx = new Date();
            xx.setTime((this.forecast.daily.data[i].time)*1000);
            this.weekday.push(Wday[xx.getDay()]);
        }

        for (var i = 0; i < 5; i++) {
            console.log(this.weekday[i]);
        }



    }
}


