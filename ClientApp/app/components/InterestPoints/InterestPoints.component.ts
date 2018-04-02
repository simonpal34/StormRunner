import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularEsriModule } from 'angular-esri-components';

/*also import the "angular2-esri-loader" to be able to load JSAPI modules*/
import { EsriLoaderService } from 'angular2-esri-loader';

import { Http } from '@angular/http';
@Component({
    selector: 'points_of_interest',
    templateUrl: './InterestPoints.component.html', 
})
export class InterestPointsComponent {

    public mapView: any;
    // this is needed to be able to create the MapView at the DOM element in this component
    @ViewChild('mapViewNode') private mapViewEl: ElementRef;
    constructor(http: Http, private esriLoader: EsriLoaderService) {
        
    }
public ngOnInit() {
    // only load the ArcGIS API for JavaScript when this component is loaded
    return this.esriLoader.load({
        // use a specific version of the JSAPI
        url: 'https://js.arcgis.com/4.3/'
    }).then(() => {
        // load the needed Map and MapView modules from the JSAPI
        this.esriLoader.loadModules([
            'esri/Map',
            'esri/views/MapView',
            'esri/geometry/Geometry',
            'esri/geometry/Point',
            'esri/Color',
            'esri/symbols/SimpleMarkerSymbol',
            'esri/Graphic',
            'esri/PopupTemplate',
            'esri/layers/GraphicsLayer'

        ]).then(([
            Map,
            MapView,
            Geometry,
            Point,
            Color,
            SimpleMarkerSymbol,
            Graphic,
            PopupTemplate,
            GraphicsLayer,

        ]) => {
            /*Medical symbol*/
            var pointSymbol = new SimpleMarkerSymbol();
            pointSymbol.color = new Color("red");


            var point = new Point();
            point = {
                latitude: -75.062644,
                longitude: 38.395349
            };
            var pointAttributes = { Address: "7408 Coastal Hwy, Ocean City, MD 21842" };
            var pointInfoTemplate = new PopupTemplate("75th St. Medical Center");
            var pointGraphic = new Graphic(point, pointSymbol, pointAttributes, pointInfoTemplate);
            var PointsCollection = new Array<any>();
            PointsCollection.push(pointGraphic);



            var PointsLayer = new GraphicsLayer();
            PointsLayer = {
                graphics: PointsCollection
            };

            const mapProperties: any = {
                basemap: "streets",
                
            };
            

            const map: any = new Map(mapProperties);
            const mapViewProperties: any = {
                // create the map view at the DOM element in this component
                container: this.mapViewEl.nativeElement,
                // supply additional options
                center: [-75.070529, 38.385861],
                zoom: 13,
                map // property shorthand for object literal
            };


            this.mapView = new MapView(mapViewProperties);


            
            });

    });
    }


}
