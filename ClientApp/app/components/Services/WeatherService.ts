import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { WeatherModel } from '../app/Model';


export class WeatherService {

    http: Http;
    forecast : WeatherModel[];

    constructor(http: Http) {
        this.http = http;
    }

    public getWeather() {
    this.http.get("https://api.darksky.net/forecast/2d451954e99d3db65a8dc448c4d37e0f/38.3365,-75.0849").subscribe(result => {
        this.forecast = result.json();
    });  
    }

}  
