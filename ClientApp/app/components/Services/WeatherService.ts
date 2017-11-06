import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { WeatherModel } from '../app/Model';
import 'rxjs/add/operator/toPromise';

export class WeatherService {

    http: Http;
    forecast : WeatherModel[];

    constructor(http: Http) {
        this.http = http;
    }

    public async getWeather(): Promise<WeatherModel[]> {

        var headers = new Headers();

        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return await this.http.get("https://api.darksky.net/forecast/2d451954e99d3db65a8dc448c4d37e0f/38.3365,-75.0849", options).toPromise()
            .then(response => response.json() as WeatherModel[]);


    }

}  
