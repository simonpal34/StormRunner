export abstract class WeatherModel
{
    daily: Days;
    currently: currentData;
}

export abstract class Days
{
    data: dailyData[];
}

export abstract class currentData
{
    time: number;
    summary: string;
    icon: string;
    precipIntensity: number;
    precipProbability: number;
    temperature: number;
    apparentTemperature: number;
    humidity: number;
    windSpeed: number;
    windGust: number;
    windBearing: number;
    cloudCover: number;
    uvIndex: number;
    visibility: number;
}

export abstract class dailyData
{
    time: number;
    summary: string;
    icon: string;
    precipIntensity: number;
    precipIntensityMax: number;
    precipProbability: number;
    precipType: string;
    temperatureHigh: number;
    temperatureLow: number;
    windSpeed: number;
    windGust: number;
    windBearing: number;
    cloudCover: number;
    uvIndex: number;
    visibility: number;
}

