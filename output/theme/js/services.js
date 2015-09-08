var mapService = function () {
  var token = 'pk.eyJ1IjoicGdyYW5nZWlybyIsImEiOiJiYzI1ZTViNDI1OTc5M2U0Yzg3MzY4NDNlYmY2OGNjOCJ9.5W7JSJ5qlHO61_j-1NrZuw';
  var geo_data_url = 'data/events.json';

  this.getEvents = function() {
    return $.getJSON(geo_data_url, function(){});
  };

  this.loadMap = function(libMap) {
    libMap.mapbox.accessToken = token;
    var map = libMap.mapbox.map('map', 'mapbox.streets');
    var layer = libMap.mapbox.featureLayer().addTo(map);
    this.setEventsOnMap(layer);
  };

  this.setEventsOnMap = function(layerMap) {
    this.getEvents().done(function(data){
      $.each(data, function(index, item) {
        layerMap.setGeoJSON({
          type: 'FeatureCollection',
          features: [{
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: item.coordinates
            },
            properties: {
              'id': item.id,
              'title': item.title,
              'description': item.description,
              'marker-size': 'medium',
              'marker-color': item.color,
              'marker-symbol': 'heart',
            }
          }]
        });
      });
    });
  };
};
