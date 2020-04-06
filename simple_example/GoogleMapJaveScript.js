var map ;
var st = 'Test';
var myLacat ={lat:23.858,lng:120.917};
var markerlocat ={lat:24.0442,lng:120.6996};
var contorl = -1;
function initMap() {
    //creat Map
    map = new google.maps.Map(document.getElementById('map'),{
        center:myLacat,
        zoom:7
    });
    //creat marker
    var marker = new google.maps.Marker({
        position:markerlocat,
        map:map,
        title:'This is Test'
    });
    //marker mouse listener
    var infowindow = new google.maps.InfoWindow({
        content:st
    });
    marker.addListener('click',function () {
        contorl = contorl*-1;
        if(contorl>0){
            infowindow.open(map,marker);
        }else{
            infowindow.close();
        }
    });
}