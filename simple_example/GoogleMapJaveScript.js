var map ;
var st = 'Test';
var myLacat ={lat:23.858,lng:120.917};
var markerlocat ={lat:24.0442,lng:120.6996};
var contorl = -1;
function initMap() {
    //creat Map
    map = new google.maps.Map(document.getElementById('map'),{
        center:myLacat,
        zoom:7,

        //unable 地圖與衛星類型 UI，位置預設左上方
        mapTypeControl:false,
        //unable 全螢幕地圖 UI，位置預設右上方
        fullscreenControl:false,
        //unable 旋轉 45 度地圖 UI，位置預設右下方
        rotataeControl:false,
        //unable 比例尺 UI，位置預設右下方
        scaleControl:false,
        //unable 地圖與街景切換 UI，位置預設右下方
        streetViewControl:false,
        //unable放大縮小地圖 UI，位置預設右下方
        zoomControl:false

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
