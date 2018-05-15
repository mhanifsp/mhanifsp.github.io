    
      function initMap() {
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
          center: {lat: -7.7754451 , lng: 110.3718704},
          zoom: 15
        });
        
        var image = 'image/gpsnew.png';
        var beachMarker = new google.maps.Marker({
        position: {
            lat: -7.7754451,
            lng: 110.3718704
        },
        map: map,
        icon: image,
        title: 'Ice PoconK'
        });
        
        var styles = [
          {
            featureType: "all",
            stylers: [
              { saturation: -100 }
            ]
          },{
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [
              { hue: "#f3ca27" },
              { saturation: 100 }
            ]
          },//*{
            //featureType: "poi.business",
            //elementType: "labels",
            //stylers: [
              //{ visibility: "off" }
            //*]
          //}
        ];
        map.setOptions({styles: styles});

      }