export abstract class WeatherModel
{
    daily : Days
}

export abstract class Days
{
    data: DailyData[]
}

export abstract class DailyData
{
    percipitationIntensityMax: number;
}