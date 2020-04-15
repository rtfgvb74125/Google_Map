var map;
var myLocat =  {lat:23.858,lng:120.917};
var levl = [5,10,15,20,25,30];
function initMap() {
    map = new google.maps.Map(document.getElementById('map'),{
        center:myLocat,
        zoom:8
    });
    map.data.loadGeoJson('Taiwan_map.geojson');
    //設定區塊style
    map.data.setStyle(function (feature) {
        //依照地區做標籤選擇
        if(feature.getProperty('COUNTY')=='Taipei'){
            if((feature.getProperty('SORT')<=levl[0]) && (feature.getProperty('SORT')>0)){
                return{
                    //標寫style：strokeweight=周邊線條寬度，storkopacity=線條透明度，strokeColor=線條顏色，fillColor=區塊顏色，fillOpacity=區塊透明度
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor:'#FFFF77',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[1]) && (feature.getProperty('SORT')>levl[0])){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FFCC22',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[2]) && (feature.getProperty('SORT')>levl[1])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF8800',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[3]) && (feature.getProperty('SORT')>levl[2])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF5511',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[4]) && (feature.getProperty('SORT')>levl[3])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#FF0000',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[5]) && (feature.getProperty('SORT')>levl[4])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#CC0000',
                    fillOpacity:1
                }
            }
        }else if(feature.getProperty('COUNTY')=='Keelung'){
            if((feature.getProperty('SORT')<=levl[0]) && (feature.getProperty('SORT')>0)){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor:'#FFFF77',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[1]) && (feature.getProperty('SORT')>levl[0])){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FFCC22',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[2]) && (feature.getProperty('SORT')>levl[1])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF8800',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[3]) && (feature.getProperty('SORT')>levl[2])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF5511',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[4]) && (feature.getProperty('SORT')>levl[3])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#FF0000',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[5]) && (feature.getProperty('SORT')>levl[4])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#CC0000',
                    fillOpacity:1
                }
            }
        }else if(feature.getProperty('COUNTY')=='New_Taipei'){
            if((feature.getProperty('SORT')<=levl[0]) && (feature.getProperty('SORT')>0)){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor:'#FFFF77',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[1]) && (feature.getProperty('SORT')>levl[0])){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FFCC22',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[2]) && (feature.getProperty('SORT')>levl[1])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF8800',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[3]) && (feature.getProperty('SORT')>levl[2])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF5511',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[4]) && (feature.getProperty('SORT')>levl[3])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#FF0000',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[5]) && (feature.getProperty('SORT')>levl[4])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#CC0000',
                    fillOpacity:1
                }
            }
        }else if(feature.getProperty('COUNTY')=='Taoyuan'){
            if((feature.getProperty('SORT')<=levl[0]) && (feature.getProperty('SORT')>0)){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor:'#FFFF77',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[1]) && (feature.getProperty('SORT')>levl[0])){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FFCC22',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<levl[2]) && (feature.getProperty('SORT')>levl[1])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF8800',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<levl[3]) && (feature.getProperty('SORT')>levl[2])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF5511',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[4]) && (feature.getProperty('SORT')>levl[3])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#FF0000',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[5]) && (feature.getProperty('SORT')>levl[4])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#CC0000',
                    fillOpacity:1
                }
            }
        }else if(feature.getProperty('COUNTY')=='Hsinchu_City'){
            if((feature.getProperty('SORT')<=levl[0]) && (feature.getProperty('SORT')>0)){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor:'#FFFF77',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[1]) && (feature.getProperty('SORT')>levl[0])){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FFCC22',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[2]) && (feature.getProperty('SORT')>levl[1])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF8800',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[3]) && (feature.getProperty('SORT')>levl[2])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF5511',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[4]) && (feature.getProperty('SORT')>levl[3])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#FF0000',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[5]) && (feature.getProperty('SORT')>levl[4])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#CC0000',
                    fillOpacity:1
                }
            }
        }else if(feature.getProperty('COUNTY')=='Hsinchu'){
            if((feature.getProperty('SORT')<=levl[0]) && (feature.getProperty('SORT')>0)){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor:'#FFFF77',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[1]) && (feature.getProperty('SORT')>levl[0])){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FFCC22',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[2]) && (feature.getProperty('SORT')>levl[1])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF8800',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[3]) && (feature.getProperty('SORT')>levl[2])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF5511',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[4]) && (feature.getProperty('SORT')>levl[3])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#FF0000',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[5]) && (feature.getProperty('SORT')>levl[4])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#CC0000',
                    fillOpacity:1
                }
            }
        }else if(feature.getProperty('COUNTY')=='Miaoli'){
            if((feature.getProperty('SORT')<=levl[0]) && (feature.getProperty('SORT')>0)){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor:'#FFFF77',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[1]) && (feature.getProperty('SORT')>levl[0])){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FFCC22',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[2]) && (feature.getProperty('SORT')>levl[1])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF8800',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[3]) && (feature.getProperty('SORT')>levl[2])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF5511',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[4]) && (feature.getProperty('SORT')>levl[3])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#FF0000',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[5]) && (feature.getProperty('SORT')>levl[4])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#CC0000',
                    fillOpacity:1
                }
            }
        }else if(feature.getProperty('COUNTY')=='Taichung'){
            if((feature.getProperty('SORT')<=levl[0]) && (feature.getProperty('SORT')>0)){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor:'#FFFF77',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[1]) && (feature.getProperty('SORT')>levl[0])){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FFCC22',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[2]) && (feature.getProperty('SORT')>levl[1])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF8800',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[3]) && (feature.getProperty('SORT')>levl[2])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF5511',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[4]) && (feature.getProperty('SORT')>levl[3])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#FF0000',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[5]) && (feature.getProperty('SORT')>levl[4])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#CC0000',
                    fillOpacity:1
                }
            }
        }else if(feature.getProperty('COUNTY')=='Changhua'){
            if((feature.getProperty('SORT')<=levl[0]) && (feature.getProperty('SORT')>0)){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor:'#FFFF77',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[1]) && (feature.getProperty('SORT')>levl[0])){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FFCC22',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[2]) && (feature.getProperty('SORT')>levl[1])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF8800',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[3]) && (feature.getProperty('SORT')>levl[2])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF5511',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[4]) && (feature.getProperty('SORT')>levl[3])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#FF0000',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[5]) && (feature.getProperty('SORT')>levl[4])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#CC0000',
                    fillOpacity:1
                }
            }
        }else if(feature.getProperty('COUNTY')=='Nantou'){
            if((feature.getProperty('SORT')<=levl[0]) && (feature.getProperty('SORT')>0)){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor:'#FFFF77',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[1]) && (feature.getProperty('SORT')>levl[0])){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FFCC22',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[2]) && (feature.getProperty('SORT')>levl[1])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF8800',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[3]) && (feature.getProperty('SORT')>levl[2])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF5511',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[4]) && (feature.getProperty('SORT')>levl[3])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#FF0000',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[5]) && (feature.getProperty('SORT')>levl[4])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#CC0000',
                    fillOpacity:1
                }
            }
        }else if(feature.getProperty('COUNTY')=='Yunlin'){
            if((feature.getProperty('SORT')<=levl[0]) && (feature.getProperty('SORT')>0)){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor:'#FFFF77',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[1]) && (feature.getProperty('SORT')>levl[0])){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FFCC22',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[2]) && (feature.getProperty('SORT')>levl[1])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF8800',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[3]) && (feature.getProperty('SORT')>levl[2])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF5511',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[4]) && (feature.getProperty('SORT')>levl[3])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#FF0000',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[5]) && (feature.getProperty('SORT')>levl[4])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#CC0000',
                    fillOpacity:1
                }
            }
        }else if(feature.getProperty('COUNTY')=='Chiayi_City'){
            if((feature.getProperty('SORT')<=levl[0]) && (feature.getProperty('SORT')>0)){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor:'#FFFF77',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[1]) && (feature.getProperty('SORT')>levl[0])){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FFCC22',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[2]) && (feature.getProperty('SORT')>levl[1])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF8800',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[3]) && (feature.getProperty('SORT')>levl[2])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF5511',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[4]) && (feature.getProperty('SORT')>levl[3])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#FF0000',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[5]) && (feature.getProperty('SORT')>levl[4])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#CC0000',
                    fillOpacity:1
                }
            }
        }else if(feature.getProperty('COUNTY')=='Chiayi'){
            if((feature.getProperty('SORT')<=levl[0]) && (feature.getProperty('SORT')>0)){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor:'#FFFF77',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[1]) && (feature.getProperty('SORT')>levl[0])){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FFCC22',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[2]) && (feature.getProperty('SORT')>levl[1])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF8800',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[3]) && (feature.getProperty('SORT')>levl[2])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF5511',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[4]) && (feature.getProperty('SORT')>levl[3])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#FF0000',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[5]) && (feature.getProperty('SORT')>levl[4])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#CC0000',
                    fillOpacity:1
                }
            }
        }else if(feature.getProperty('COUNTY')=='Tainan'){
            if((feature.getProperty('SORT')<=levl[0]) && (feature.getProperty('SORT')>0)){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor:'#FFFF77',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[1]) && (feature.getProperty('SORT')>levl[0])){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FFCC22',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[2]) && (feature.getProperty('SORT')>levl[1])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF8800',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[3]) && (feature.getProperty('SORT')>levl[2])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF5511',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[4]) && (feature.getProperty('SORT')>levl[3])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#FF0000',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[5]) && (feature.getProperty('SORT')>levl[4])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#CC0000',
                    fillOpacity:1
                }
            }
        }else if(feature.getProperty('COUNTY')=='Kaohsiung'){
            if((feature.getProperty('SORT')<=levl[0]) && (feature.getProperty('SORT')>0)){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor:'#FFFF77',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[1]) && (feature.getProperty('SORT')>levl[0])){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FFCC22',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[2]) && (feature.getProperty('SORT')>levl[1])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF8800',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[3]) && (feature.getProperty('SORT')>levl[2])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF5511',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[4]) && (feature.getProperty('SORT')>levl[3])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#FF0000',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[5]) && (feature.getProperty('SORT')>levl[4])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#CC0000',
                    fillOpacity:1
                }
            }
        }else if(feature.getProperty('COUNTY')=='Pingtung'){
            if((feature.getProperty('SORT')<=levl[0]) && (feature.getProperty('SORT')>0)){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor:'#FFFF77',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[1]) && (feature.getProperty('SORT')>levl[0])){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FFCC22',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[2]) && (feature.getProperty('SORT')>levl[1])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF8800',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[3]) && (feature.getProperty('SORT')>levl[2])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF5511',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[4]) && (feature.getProperty('SORT')>levl[3])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#FF0000',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[5]) && (feature.getProperty('SORT')>levl[4])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#CC0000',
                    fillOpacity:1
                }
            }
        }else if(feature.getProperty('COUNTY')=='Taitung'){
            if((feature.getProperty('SORT')<=levl[0]) && (feature.getProperty('SORT')>0)){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor:'#FFFF77',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[1]) && (feature.getProperty('SORT')>levl[0])){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FFCC22',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[2]) && (feature.getProperty('SORT')>levl[1])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF8800',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[3]) && (feature.getProperty('SORT')>levl[2])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF5511',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[4]) && (feature.getProperty('SORT')>levl[3])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#FF0000',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[5]) && (feature.getProperty('SORT')>levl[4])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#CC0000',
                    fillOpacity:1
                }
            }
        }else if(feature.getProperty('COUNTY')=='Hualien'){
            if((feature.getProperty('SORT')<=levl[0]) && (feature.getProperty('SORT')>0)){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor:'#FFFF77',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[1]) && (feature.getProperty('SORT')>levl[0])){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FFCC22',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[2]) && (feature.getProperty('SORT')>levl[1])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF8800',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[3]) && (feature.getProperty('SORT')>levl[2])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF5511',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[4]) && (feature.getProperty('SORT')>levl[3])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#FF0000',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[5]) && (feature.getProperty('SORT')>levl[4])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#CC0000',
                    fillOpacity:1
                }
            }
        }else if(feature.getProperty('COUNTY')=='Kinmen'){
            if((feature.getProperty('SORT')<=levl[0]) && (feature.getProperty('SORT')>0)){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor:'#FFFF77',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[1]) && (feature.getProperty('SORT')>levl[0])){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FFCC22',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[2]) && (feature.getProperty('SORT')>levl[1])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF8800',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[3]) && (feature.getProperty('SORT')>levl[2])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF5511',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[4]) && (feature.getProperty('SORT')>levl[3])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#FF0000',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[5]) && (feature.getProperty('SORT')>levl[4])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#CC0000',
                    fillOpacity:1
                }
            }
        }else if(feature.getProperty('COUNTY')=='Penghu'){
            if((feature.getProperty('SORT')<=levl[0]) && (feature.getProperty('SORT')>0)){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor:'#FFFF77',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[1]) && (feature.getProperty('SORT')>levl[0])){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FFCC22',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[2]) && (feature.getProperty('SORT')>levl[1])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF8800',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[3]) && (feature.getProperty('SORT')>levl[2])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF5511',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[4]) && (feature.getProperty('SORT')>levl[3])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#FF0000',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[5]) && (feature.getProperty('SORT')>levl[4])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#CC0000',
                    fillOpacity:1
                }
            }
        }else if(feature.getProperty('COUNTY')=='Lienchiang'){
            if((feature.getProperty('SORT')<=levl[0]) && (feature.getProperty('SORT')>0)){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor:'#FFFF77',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[1]) && (feature.getProperty('SORT')>levl[0])){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FFCC22',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[2]) && (feature.getProperty('SORT')>levl[1])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF8800',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[3]) && (feature.getProperty('SORT')>levl[2])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF5511',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[4]) && (feature.getProperty('SORT')>levl[3])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#FF0000',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[5]) && (feature.getProperty('SORT')>levl[4])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#CC0000',
                    fillOpacity:1
                }
            }
        }else if(feature.getProperty('COUNTY')=='Yilan'){
            if((feature.getProperty('SORT')<=levl[0]) && (feature.getProperty('SORT')>0)){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor:'#FFFF77',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[1]) && (feature.getProperty('SORT')>levl[0])){
                return{
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FFCC22',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[2]) && (feature.getProperty('SORT')>levl[1])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF8800',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[3]) && (feature.getProperty('SORT')>levl[2])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#FFFFFF',
                    fillColor: '#FF5511',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[4]) && (feature.getProperty('SORT')>levl[3])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#FF0000',
                    fillOpacity:1
                }
            }else if((feature.getProperty('SORT')<=levl[5]) && (feature.getProperty('SORT')>levl[4])){
                return {
                    strokeWeight:0.3,
                    strokeOpacity:.1,
                    strokeColor:'#000',
                    fillColor: '#CC0000',
                    fillOpacity:1
                }
            }
        }
    });
}
