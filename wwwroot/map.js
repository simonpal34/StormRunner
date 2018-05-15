var l;
var interval;
function getAddr(id){
        
        l=document.getElementById("location").value=id;
        localStorage.setItem("l", l);
        location.href ="http://localhost:54954/evac-map";
        //l=document.getElementById("location").value=id;
}
function getIntervalPlease(){
    interval=document.getElementById("interval").value;
    localStorage.setItem("interval", interval);
    //alert(interval);

}

require([
    "esri/map",
    "esri/layers/FeatureLayer",
    "esri/urlUtils", "esri/dijit/Directions", "esri/symbols/SimpleLineSymbol",
    "esri/symbols/SimpleFillSymbol",
    "esri/Color",
    "esri/geometry/Point", "esri/SpatialReference","esri/tasks/RouteTask",            
        "esri/tasks/RouteParameters",
        "esri/tasks/FeatureSet",            
        "esri/symbols/SimpleMarkerSymbol",
        "esri/geometry", "esri/graphic"

], function (
    Map, FeatureLayer, urlUtils, Directions, SimpleLineSymbol, SimpleFillSymbol, Color, Point, SpatialReference, RouteTask,
RouteParameters, FeatureSet, SimpleMarkerSymbol, Geometry, Graphic
) {
/*
//added this
var routeParams=[];
var barrierSymbol;
    routeParams = new RouteParameters();s
     routeParams.barriers = new FeatureSet();
        routeParams.outSpatialReference = {"wkid":102100};

 barrierSymbol = new SimpleMarkerSymbol().setStyle(SimpleMarkerSymbol.STYLE_X).setSize(10);
        barrierSymbol.outline.setWidth(3).setColor(new Color([255,0,0]));
*/

        l = localStorage.getItem("l");
        interval = localStorage.getItem("interval");
        var clear="";
         var point1 = new Point(-75.075793, 38.356461, new SpatialReference({ wkid: 4326 }));
         var point2 = new Point(-75.062644, 38.395349, new SpatialReference({ wkid: 4326 }));
         var point3 = new Point(-75.053054, 38.447388, new SpatialReference({ wkid: 4326 }));
         var point4 = new Point(-75.066986, 38.388399, new SpatialReference({ wkid: 4326 }));
         var point5 = new Point(-75.067880, 38.383138, new SpatialReference({ wkid: 4326 }));
         var point6 = new Point(-75.069253, 38.377789, new SpatialReference({ wkid: 4326 }));
         var point7 = new Point(-75.080494, 38.345557, new SpatialReference({ wkid: 4326 }));
         var point8 = new Point(-75.087576, 38.332022, new SpatialReference({ wkid: 4326 }));
         var point9 = new Point(-75.105007, 38.335679, new SpatialReference({ wkid: 4326 }));

    //var m = document.getElementById("map");
        var map = new Map("map", {
            basemap: "streets",
            center: [-75.070529, 38.385861],
            zoom: 12

            //layers: [featureLayer]

        });

        var featureLayer = new FeatureLayer("https://services1.arcgis.com/jjVcwHv9AQEq3DH3/arcgis/rest/services/Evacuation_Zones/FeatureServer/0");
        //map.addLayer(featureLayer);
        var flood10 = new FeatureLayer("https://services1.arcgis.com/X3lKekbdaBmNjCHu/arcgis/rest/services/flood10_danger/FeatureServer/0?token=OVDNTKAJhXH8QDp7W78e2wMkAO7EBiBdmVt1typYCyBCdAXFrRPGAwhqQNmRg_144Hx9Wei8n6bozFhwnDMLQRwKG5S2kgHG_MEYkEkM_pnlZkneQYK2oDyk3eiEL37en1xA5-XYjjTbHE5DNQXZHghYUbvHBdkFnavbdY2nJxVtWa89HFhSWW7JatmSN-N7kbYrFPpNAoD5rbME7jrQImqyrWlOrooPebokZI0nmx0eCS6RdEYN463QEdJ8FxnS");
       

        var d = document.getElementById("dir");


        var directions = new Directions({
            map: map
            
        }, d);
        directions.startup();


/*
var point = new Point(-75.062644, 38.395349);

    routeParams.barriers.features.push(
            map.graphics.add(
              new esri.Graphic(
                (-75.062644, 38.395349), barrierSymbol
                )
            )
    );

*/

        if(interval==10){
            map.addLayer(flood10);
        }

        if(l=="2611 N Philadelphia Ave, Ocean City, MD 21842"){
            directions.addStop(point1, 1);
            localStorage.setItem("l", clear);
            //alert("close");
        }
        else if(l=="7408 Coastal Hwy, Ocean City, MD 21842"){
            directions.addStop(point2, 1);
            localStorage.setItem("l", clear);
        }
        else if(l=="14107 Coastal Hwy, Ocean City, MD 21842"){
            directions.addStop(point3, 1);
            localStorage.setItem("l", clear);
        }
        else if(l=="6501 Coastal Hwy, Ocean City, MD 21842"){
            directions.addStop(point4, 1);
            localStorage.setItem("l", clear);
        }
        else if(l=="5809 Coastal Hwy, Ocean City, MD 21842"){
            directions.addStop(point5, 1);
            localStorage.setItem("l", clear);
        }
        else if(l=="5201 Coastal Hwy, Ocean City, MD 21842"){
            directions.addStop(point6, 1);
            localStorage.setItem("l", clear);
        }
        else if(l=="1409 Philadelphia Ave, Ocean City, MD 21842"){
            directions.addStop(point7, 1);
            localStorage.setItem("l", clear);
        }
        else if(l=="5 Philadelphia Ave, Ocean City, MD 21842"){
            directions.addStop(point8, 1);
            localStorage.setItem("l", clear);
        }
        else if(l=="12826A Ocean Gateway, Ocean City, MD 21842"){
            directions.addStop(point9, 1);
            localStorage.setItem("l", clear);
        }
        else{
            direction.removeStop(1);
        }
    });