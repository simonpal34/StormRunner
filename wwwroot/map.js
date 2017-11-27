require([
    "esri/map",
    "esri/layers/FeatureLayer",
    "esri/urlUtils", "esri/dijit/Directions",
    "dojo/parser",
    "dijit/layout/BorderContainer", "dijit/layout/ContentPane",
    "dojo/domReady!"
], function (
    Map, FeatureLayer, urlUtils, Directions,
    parser
) {
        parser.parse();

        var map = new Map("map", {
            basemap: "streets",
            center: [-75.070529, 38.385861],
            zoom: 12
            //layers: [featureLayer]
        });

        var featureLayer = new FeatureLayer("https://services1.arcgis.com/jjVcwHv9AQEq3DH3/arcgis/rest/services/Evacuation_Zones/FeatureServer/0");
        map.addLayer(featureLayer);

        var directions = new Directions({
            map: map

        }, "dir");
        directions.startup();
    });