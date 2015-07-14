if (Meteor.isClient) {
  Meteor.startup(function() {
    GoogleMaps.load({ v: '3', key: 'AIzaSyCzTJ8r6Q7xg0AsI3NHkSWKir-K4W8lkcI', libraries: 'geometry,places' });
  });
}



Template.home.helpers({
  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(-7.127605,112.3937185),
        zoom: 12
      };
    }
  }
  
});

//<h3>Sukorame</h3><br><h5>Blewah</h5><br>8.780 Ton/Tahun<button id="popSukorame" class="button button-block button-stable">details</a>
Template.home.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('exampleMap', function(map) {
    // Add a marker to the map once it's ready
                   var locations = [
                                    ['Sukorame', -7.344954,112.110199, 'Blewah<br>12323 Ton/Tahun'],
                                    ['Bluluk', -7.3014585,112.1256415, 'Blewah<br>12323 Ton/Tahun'],
                                    ['Ngimbang', -7.2967426,112.1936549, 'Blewah<br>12323 Ton/Tahun'],
                                    ['Sambeng', -7.289334,112.28577, 'Blewah<br>12323 Ton/Tahun'],
                                    ['Mantup', -7.27292,112.354698, 'Blewah<br>12323 Ton/Tahun'],
                                    ['Kembangbahu', -7.2083896,112.35756, 'Blewah<br>12323 Ton/Tahun'],
                                    ['Sugio', -7.18593,112.27823, 'Blewah<br>12323 Ton/Tahun'],
                                    ['Kedungpring', -7.1916677,112.199654, 'Blewah<br>12323 Ton/Tahun'],
                                    ['Modo', -7.2016595,112.1320051, 'Blewah<br>12323 Ton/Tahun'],
                                    ['Babat', -7.109076,112.209705, 'Blewah<br>12323 Ton/Tahun'],
                                    ['Pucuk', -7.091127,112.29506, 'Blewah<br>12323 Ton/Tahun'],
                                    ['Sukodadi', -7.112755,112.34011, 'Blewah<br>12323 Ton/Tahun'],
                                    ['Tikung', -7.1888362,112.410303, 'Blewah<br>12323 Ton/Tahun'],
                                    ['Sarirejo', -7.1721341,112.4611965, 'Blewah<br>12323 Ton/Tahun'],
                                    ['Deket', -7.0957664,112.4586849, 'Blewah<br>12323 Ton/Tahun'],
                                    ['Glagah', -7.078613,112.5022179, 'Blewah<br>12323 Ton/Tahun'],
                                    ['Karangbinangun', -7.033743,112.4645379, 'Blewah<br>12323 Ton/Tahun'],
                                    ['Turi', -7.06851,112.3868205, 'Blewah<br>12323 Ton/Tahun'],
                                    ['Kalitengah', -7.0212931,112.393738, 'Blewah<br>12323 Ton/Tahun'],
                                    ['Karanggeneng', -6.997649,112.3715464, 'Blewah<br>12323 Ton/Tahun'],
                                    ['Sekaran', -7.051962,112.2746015, 'Blewah<br>12323 Ton/Tahun'],
                                    ['Maduran', -7.0050665,112.2715306, 'Blewah<br>12323 Ton/Tahun'],
                                    ['Laren', -6.978902,112.28871, 'Blewah<br>12323 Ton/Tahun'],
                                    ['Solokuro', -6.928627,112.3520349, 'Blewah<br>12323 Ton/Tahun'],
                                    ['Paciran', -6.8894135,112.374247, 'Blewah<br>12323 Ton/Tahun'],
                                    ['Brondong', -6.8827199,112.271004, 'Blewah<br>12323 Ton/Tahun'],
                                    ['Lamongan', -7.1228674,112.3941885, 'Blewah<br>12323 Ton/Tahun'],
                                    
                                    ];
                   var infowindow = new google.maps.InfoWindow();
                   var marker, i;
/* kode untuk menampilkan banyak marker */
                  for (i = 0; i < locations.length; i++) {
                    marker = new google.maps.Marker({
                                                   position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                                                   map: map.instance,
                                                   //icon: 'grad-icon.png'
                    });

                    google.maps.event.addListener(marker, 'click', (function(marker, i) {
                      return function() {
                        IonPopup.show({
                          title: locations[i][0],
                          template: locations[i][3],
                          buttons: [{
                            text: 'Detail',
                            type: 'button-positive',
                            onTap: function() {
                              IonPopup.close();
                            }
                          }]
                        });
                        /*infowindow.setContent({{> popSukorame}});
                        infowindow.open(map.instance, marker);*/
                      }
                    })(marker, i));

                    var infowindow = new google.maps.InfoWindow({
                        content: locations[i][0],
                        disableAutoPan: true
                    });
                    infowindow.open(map.instance, marker);
                  };

                   //var marker = new google.maps.Marker({
      //position: map.options.center,
      //map: map.instance
    //});
    navigator.geolocation.watchPosition(function (pos) {
       //Every time we get a new location from the gps, make a new marker on the map
        new google.maps.Marker({
           position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
           map: map.instance,
           animation: google.maps.Animation.BOUNCE,
       });
    }),
    
    function (err) {
       console.log("GPS ERROR", err);
    };
  });
});

Template.home.rendered = function(){
   $( "#popSukorame" ).click(function() {
                    alert('asdasds');
                  });
};