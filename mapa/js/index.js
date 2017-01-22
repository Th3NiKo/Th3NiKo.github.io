var gastronomia = L.icon({
    iconUrl: 'https://www.dropbox.com/s/tzy5yoiyt8nzc1l/gastronomia.png?raw=1',
    //iconRetinaUrl: 'my-icon@2x.png',
    iconSize: [32, 37],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    //shadowUrl: 'my-icon-shadow.png',
    //shadowRetinaUrl: 'my-icon-shadow@2x.png',
    //shadowSize: [68, 95],
    //shadowAnchor: [22, 94]
});

var mariny = L.icon({
    iconUrl: 'https://www.dropbox.com/s/21b653wyeju3irr/marina.png?raw=1',
    //iconRetinaUrl: 'my-icon@2x.png',
    iconSize: [32, 37],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    //shadowUrl: 'my-icon-shadow.png',
    //shadowRetinaUrl: 'my-icon-shadow@2x.png',
    //shadowSize: [68, 95],
    //shadowAnchor: [22, 94]
});


var zaglowki = L.icon({
    iconUrl: 'https://www.dropbox.com/s/p5wrreksvv3b06d/%C5%BCagl%C3%B3wka.png?raw=1',
    //iconRetinaUrl: 'my-icon@2x.png',
    iconSize: [32, 37],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    //shadowUrl: 'my-icon-shadow.png',
    //shadowRetinaUrl: 'my-icon-shadow@2x.png',
    //shadowSize: [68, 95],
    //shadowAnchor: [22, 94]
});

var wypozyczalnia = L.icon({
    iconUrl: 'https://www.dropbox.com/s/b2fv0lcb5gon4yc/kajak.png?raw=1',
    //iconRetinaUrl: 'my-icon@2x.png',
    iconSize: [32, 37],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    //shadowUrl: 'my-icon-shadow.png',
    //shadowRetinaUrl: 'my-icon-shadow@2x.png',
    //shadowSize: [68, 95],
    //shadowAnchor: [22, 94]
});



// PODKŁAD 1       
	 mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
  	var podklad1 = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
            		
            		maxZoom: 18,
            	}),//addTo(map); 
//KONIEC PODKŁAD 1

//PODKŁAD 2 
podklad2 = L.tileLayer(
    'http://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png', {
  //      minZoom:13,
        maxZoom: 18,
    });//addTo(map);

// KONIEC PODKŁAD 2 

// KONIEC - FUNKCJA ŁADUJĄCA MAPĘ


//DODAWANIE MARKERA
//###### Gastronomia #####
 var marker1 = L.marker([52.334237, 18.305102], { icon:gastronomia}).bindPopup('<div ><p align="center"><font face="Cambria"><font size="5"><font color="BLUE"><b>LEŚNA PRZYSTAŃ</b></font></font></font></p></div> <img style="width: 120px" src="https://www.dropbox.com/s/9pi0xcilmpqmi7y/Zdjecia.png?raw=1" align="right">  <font face="Cambria"><font size="3"<b> <b>Adres: ul. Mikorzyn (1d)  62-561 Ślesin,   <br/> Telefon: 663 830 601<br/> <a href="http://lesna-przystan.com.pl/">lesna-przystan.com.pl</a></b> </br>  </br> <p><img style="width: 150px" src="https://www.dropbox.com/s/xvlnmn6z5m4oggd/mapa1.png?raw=1" align="left"> <img style="width: 120px" src="https://www.dropbox.com/s/v4p876eoltm2obb/Filmy.png?raw=1" > <b></B>',{maxWidth: 500, minWidth: 50, maxhight:500,  autoPanPadding: [100, 100]}),//.addTo(map);
     
 marker2 = L.marker([52.370009, 18.307774], { icon:gastronomia}).bindPopup 
  ('<div ><p align="center"><font face="Cambria"><font size="5"><font color="blue"><b>OBERŻA "POD KULAWĄ GĘSIĄ"</b></font></font></font></p></div> <img style="width: 120px" src="https://www.dropbox.com/s/9pi0xcilmpqmi7y/Zdjecia.png?raw=1" align="right">  <font face="Cambria"><font size="3"<b> <b>Adres: ul. Napoleona 14</br> 62 - 561 Ślesin,<br/> Telefon: (63) 270-43-41<br/> <a href="http://www.oberzaslesin.pl/">www.oberzaslesin.pl</a></b> </br> </br> <p><img style="width: 150px" src="https://www.dropbox.com/s/o69a4bk93ukhp01/mapa2.png?raw=1" align="left"> <img style="width: 120px" src="https://www.dropbox.com/s/v4p876eoltm2obb/Filmy.png?raw=1"  <b></B>',{maxWidth: 450, minWidth: 50,  autoPanPadding: [100, 100]}),//.addTo(map); 

 marker3 = L.marker([52.370303, 18.309180],{ icon:gastronomia}).bindPopup 
('<div ><p align="center"><font face="Cambria"><font size="5"><font color="blue"><b>Restauracja "U STACHA"</b></font></font></font></p></div> <img style="width: 120px" src="https://www.dropbox.com/s/9pi0xcilmpqmi7y/Zdjecia.png?raw=1" align="right">  <font face="Cambria"><font size="3"<b> <b>Adres: ul. Napoleona 15 ,   62-561 Ślesin,  <br/> Telefon: 606 779 657 <br/> <a href="http://www.przystanslesin.pl/">www.przystanslesin.pl</a></b> </br></br> <p><img style="width: 160px" src="https://www.dropbox.com/s/0lv999ok3eu06p8/mapa3.png?raw=1" align="left">  <img style="width: 120px" src="https://www.dropbox.com/s/v4p876eoltm2obb/Filmy.png?raw=1" <b></B>',{maxWidth: 450,  minWidth: 50 , autoPanPadding: [100, 100]});//.addTo(map); 
    
var gastronomia = L.layerGroup([marker1, marker2, marker3]);

//###### Przystan żeglarska#####
var marker4 = L.marker([52.300957, 18.273008], { icon:zaglowki}).bindPopup 
  ('<div ><p align="center"><font face="Cambria"><font size="5"><font color="blue"><b>PRZYSTAŃ GOSŁAWICE</b></font></font></font></p></div> <img style="width: 120px" src="https://www.dropbox.com/s/9pi0xcilmpqmi7y/Zdjecia.png?raw=1" align="right">  <font face="Cambria"><font size="3"<b> <b>Adres: ul. Rybacka, 62-506 Gosławice,<br/> Telefon: 885 636 300<br/> <a href="http://mosirkonin.pl/">mosirkonin.pl</a></b> </br> </br> <p>  <img style="width: 150px" src="https://www.dropbox.com/s/ydguz8h2mcqr97o/mapa4.png?raw=1" align="left">  <img style="width: 120px" src="https://www.dropbox.com/s/v4p876eoltm2obb/Filmy.png?raw=1" <b></B>',{maxWidth: 500, minWidth: 50,  autoPanPadding: [100, 100]}),//.addTo(map); 
    
    marker5 = L.marker([52.307654, 18.269519], { icon:zaglowki}).bindPopup 
  ('<div ><p align="center"><font face="Cambria"><font size="5"><font color="blue"><b>PRZYSTAŃ ŻEGLARSKA </b></font></font></font></p></div> <img style="width: 120px" src="https://www.dropbox.com/s/9pi0xcilmpqmi7y/Zdjecia.png?raw=1" align="right">  <font face="Cambria"><font size="3"<b> <b>Adres: ul. Ślesińska 17, 62-500 Konin,  <br/> Telefon: 885 636 300 <br/> <a href="http://lotmarina.pl/">lotmarina.pl</a></b> </br>  </br> <p> <img style="width: 150px" src="https://www.dropbox.com/s/c48ng305x8o5ti2/mapa5.png?raw=1" align="left">   <img style="width: 120px" src="https://www.dropbox.com/s/v4p876eoltm2obb/Filmy.png?raw=1"  <b></B>',{maxWidth: 450, minWidth: 50,  autoPanPadding: [100, 100]}),//.addTo(map); 
    
    marker6 = L.marker([52.346191, 18.303364], { icon:zaglowki}).bindPopup('<div ><p align="center"><font face="Cambria"><font size="5"><font color="blue"><b>PRZYSTAŃ MARINA KONIN</b></font></font></font></p></div> <img style="width: 120px" src="https://www.dropbox.com/s/9pi0xcilmpqmi7y/Zdjecia.png?raw=1" align="right">  <font face="Cambria"><font size="3"<b> <b>Adres: Mikorzyn 1A 62-561 Ślesin,  <br/> Telefon: 63 270 70 21 <br/> <a href="http://wityng.pl/">wityng.pl</a></b> </br> </br> <p><img style="width: 150px" src="https://www.dropbox.com/s/9mub4m28p6yhif9/mapa6.png?raw=1" align="left">   <img style="width: 120px" src="https://www.dropbox.com/s/v4p876eoltm2obb/Filmy.png?raw=1" >  <b></B>',{maxWidth: 450, minWidth: 50,  autoPanPadding: [100, 100]});//.addTo(map); 
       
    var zaglowki = L.layerGroup([marker4, marker5, marker6]);

//###### wypozyczalnia kajaków #####
var marker7= L.marker([52.345092, 18.301131], {icon:wypozyczalnia}).bindPopup('<div ><p align="center"><font face="Cambria"><font size="5"><font color="BLUE"><b>WYPOŻYCZALNIA KAJAKÓW</b></font></font></font></p></div> <img style="width: 120px" src="https://www.dropbox.com/s/9pi0xcilmpqmi7y/Zdjecia.png?raw=1" align="right">  <font face="Cambria"><font size="3"<b> <b> „Wityng" </br> Adres: ul. Mikorzyn 1A, 62-561 Ślesin,   <br/> Telefon: (63) 270-60-60<br/> <a href="http://www.wityng.pl/">www.wityng.pl</a></b> </br>  </br><img style="width: 150px" src="https://www.dropbox.com/s/ix4ls55eer9vh6o/mapa7.png?raw=1"  </br><b></B>',{maxWidth: 500, minWidth: 50,  autoPanPadding: [100, 100]}),//.addTo(map);
    
    marker8 = L.marker([52.337745, 18.305827], {icon:wypozyczalnia}).bindPopup('<div ><p align="center"><font face="Cambria"><font size="5"><font color="BLUE"><b>WYPOŻYCZALNIA KAJAKÓW</b></font></font></font></p></div> <img style="width: 120px" src="https://www.dropbox.com/s/9pi0xcilmpqmi7y/Zdjecia.png?raw=1" align="right">  <font face="Cambria"><font size="3"<b> <b>  HOTEL „Mikorzyn" </br> Adres: Napoleona 15B     62-561 Ślesin,   <br/> Telefon: 881 921 911<br/> <a href="http://hotelmikorzyn.com.pl/">hotelmikorzyn.com.pl</a></b> </br>  </br><img style="width: 150px" src="https://www.dropbox.com/s/mdgn5v80x7r9ozg/mapa8.png?raw=1"   <b></B>',{maxWidth: 500, minWidth: 50,  autoPanPadding: [100, 100]}),//.addTo(map);
    
    marker9 = L.marker([52.374944, 18.322878], { icon:wypozyczalnia}).bindPopup('<div ><p align="center"><font face="Cambria"><font size="5"><font color="BLUE"><b>WYPOŻYCZALNIA KAJAKÓW</b></font></font></font></p></div> <img style="width: 120px" src="https://www.dropbox.com/s/9pi0xcilmpqmi7y/Zdjecia.png?raw=1" align="right">  <font face="Cambria"><font size="3"<b> <b>  „Gwarek" </br> Adres: ul. Leśna 5, </br> 62-561 Ślesin-Tokary   <br/> Telefon: (63) 270-41-32<br/> <a href="http://www.gwarekslesin.pl/"> www.gwarekslesin.pl</a></b> </br>  </br><img style="width: 150px" src="https://www.dropbox.com/s/p95enihtod2rjwq/mapa9.png?raw=1" <br/> <b></B>',{maxWidth: 500, minWidth: 50,  autoPanPadding: [100, 100]});//addTo(map);
 
var wypozyczalnia = L.layerGroup([marker7, marker8, marker9]);


    
var marker10 = L.marker([52.371963, 18.312479], { icon:mariny}).bindPopup ('<div ><p align="center"><font face="Cambria"><font size="5"><font color="BLUE"><b>  PRZYSTAŃ JACHTOWA W ŚLESINIE </b></font></font></font></div> <a href="galeriazdjec.html"><img style="width: 120px" src="https://www.dropbox.com/s/9pi0xcilmpqmi7y/Zdjecia.png?raw=1" align="right"><font face="Cambria"><font size="3"<b> <b>  „Przystań Wodna w Ślesinie" </br> Adres:  ul. Napoleona 15 D </br> 62-561 Ślesin <br/> Telefon: 797 512 392 <br/> <a href="http://www.marina.slesin.pl/"> www.marina.slesin.pl</a></b> </br>  </br><img style="width: 150px" src="https://www.dropbox.com/s/p95enihtod2rjwq/mapa9.png?raw=1"  <br/> <b> </B>',{maxWidth: 500, autoPanPadding: [100, 100] });//.addTo(map);


    
var mariny = L.layerGroup([marker10]);

var map = L.map('map', {layers: [podklad1, gastronomia, zaglowki, wypozyczalnia, mariny]}).setView([52.324049, 18.304586],12);




var mapyPodkladowe = {
    "Mapa Jezior": podklad1,
    "Ślesin": podklad2,
  };

  var warstwy = {
    "Gastronomia": gastronomia,
    "Przystań żeglarska": zaglowki,
    "Wypożyczalnia kajaków": wypozyczalnia,
    "Mariny": mariny,
  };
L.control.layers(mapyPodkladowe, warstwy).addTo(map);

//DODAWANIE POLILINI
var polilinia = L.polyline ([
[52.228914, 18.292413],
[52.238253, 18.304982],
[52.239620, 18.306942],
[52.242155, 18.309829],
[52.246423, 18.312007],
[52.251458, 18.312225],
[52.254225, 18.310428],
[52.271034, 18.299374],
[52.275733, 18.296542],
[52.292058, 18.296106],
[52.298487, 18.295943],
[52.305114, 18.298067],
[52.319098, 18.303894],
[52.325656, 18.306182],
[52.327986, 18.309885],
[52.329983, 18.310865],
[52.339900, 18.309014],
[52.351312, 18.300518],
[52.356202, 18.301117],
[52.361424, 18.303459],
[52.362654, 18.308088],
[52.363619, 18.309885],
[52.370236, 18.311791],
[52.380776, 18.314296],
[52.384145, 18.318479],
[52.385173, 18.322785],
[52.394084, 18.335702],
[52.400652, 18.341037],
[52.405164, 18.343938],
[52.408704, 18.349554],
[52.422006, 18.354234],
[52.424436, 18.362691],
[52.428542, 18.369111],
[52.431111, 18.373697],
[52.454609, 18.380898],
[52.459942, 18.386758],
[52.465179, 18.388946],
[52.468654, 18.387071],
[52.472700, 18.381992],
[52.475651, 18.380741],
[52.486739, 18.385664]


], {color: 'blue', weight: 3,})
.bindPopup('Kanał Ślesiński').addTo(map);
// KONIEC DODAWANIA POLILINI  

 //### FUNKCJA WYSZUKIWANIA MIEJSCOWOŚCI ###

 var osmGeocoder = new L.Control.OSMGeocoder({text: 'Szukaj',collapsed: true, position: 'topright',bounds: null});
        map.addControl(osmGeocoder);

//KONIEC FUNKCJA WYSZUKIWANIA MIEJSCOWOŚCI



 //#########FUNKCJA GEOLOKALIZACJI ##########

L.control.locate({
    position: 'topright',  // set the location of the control
    setView: false, // automatically sets the map view to the user's location, enabled if `follow` is true
    keepCurrentZoomLevel: true, // keep the current map zoom level when displaying the user's location. (if `false`, use maxZoom)
     locateOptions: {
      showPopup: true, // display a popup when the user click on the inner marker
}  // define location options e.g enableHighAccuracy: true or maxZoom: 10
}).addTo(map);  // WSTAWIENIE FUNKCJI GEOLOKALIZACJI Z IKONY
// KONIEC FUNKCJI GEOLOKALIZACJI Z IKONY