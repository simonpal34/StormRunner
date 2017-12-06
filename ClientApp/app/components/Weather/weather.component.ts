import { Component } from '@angular/core';
import { WeatherService } from '../Services/WeatherService';
import { WeatherModel } from '../app/Model';
import { Http } from '@angular/http';

@Component({
    selector: 'weather',
    templateUrl: './weather.component.html',
})
export class WeatherComponent {
    svc: WeatherService;
    forecast: WeatherModel;
    weather: boolean;
    weekday: string[]=[];
    caption: string;
    precipProb: string[]=[];

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
            console.log(this.forecast.daily.data[i].icon);
        }

        for(var i = 0; i < 5; i++) {
            
            var p = this.forecast.daily.data[i].precipProbability*100;

            this.precipProb.push(p.toFixed());
        }

        if(typeof this.forecast.alerts === "undefined")             this.caption = "No Current Alerts";         else             this.caption = this.forecast.alerts.title;

        for (var i = 0; i < 5; i++) {
            console.log(this.weekday[i]);
        }



    }
}


