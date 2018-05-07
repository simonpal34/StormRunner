require([
    "esri/map",
    "esri/layers/FeatureLayer",
    "esri/urlUtils", "esri/dijit/Directions",

], function (
    Map, FeatureLayer, urlUtils, Directions,
    parser
) {
    //document.getElementById("ok").value = "hello";
    var m = document.getElementById("map");
        var map = new Map("map", {
            basemap: "streets",
            center: [-75.070529, 38.385861],
            zoom: 12
            //layers: [featureLayer]
        });

        var featureLayer = new FeatureLayer("https://services1.arcgis.com/jjVcwHv9AQEq3DH3/arcgis/rest/services/Evacuation_Zones/FeatureServer/0");
        map.addLayer(featureLayer);
        var d = document.getElementById("dir");
        var directions = new Directions({
            map: map

        }, d);
        directions.startup();
    });