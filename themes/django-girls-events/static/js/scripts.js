/*! django-girls-events - v0.0.0 - 2015-09-12
* Copyright (c) 2015 ; Licensed  */
var pinFactory = function(pin_data) {
  var pin_size = 'medium';
  var pin_symbol = 'heart';
  var pin_type = 'Point';

  return {
    type: 'Feature',
    geometry: {
      type: pin_type,
      coordinates: pin_data.coordinates
    },
    properties: {
      'id': pin_data.id,
      'title': pin_data.title,
      'description': pin_data.description,
      'marker-size': pin_size,
      'marker-color': pin_data.color,
      'marker-symbol': pin_symbol
    }
  };
};

var collectionFactory = function() {
  return {
    type: 'FeatureCollection',
    features: []
  };
};

var eventService = function () {
  var geo_data_url = 'data/events.json';

  this.getEvents = function() {
    var events = collectionFactory();
    $.ajax({
      url: geo_data_url,
      async: false
    }).done(function(response) {
      $.each(response, function(index, item) {
        events.features.push(pinFactory(item));
      });
    });
    return events;
  };
};

var mapService = function () {
  var token = 'pk.eyJ1IjoicGdyYW5nZWlybyIsImEiOiJiYzI1ZTViNDI1OTc5M2U0Yzg3MzY4NDNlYmY2OGNjOCJ9.5W7JSJ5qlHO61_j-1NrZuw';

  this.loadMap = function() {
    L.mapbox.accessToken = token;
    var map = L.mapbox.map('map', 'mapbox.streets').setView([-15, -55], 4);
    var layer = L.mapbox.featureLayer().addTo(map);
    return map, layer;
  };
};

var mapUseCase = function() {
  var map_service = new mapService();
  var event_service = new eventService();

  var prepareMap = function() {
    var map, layer = map_service.loadMap();
    return map, layer;
  };

  var setEventsOnLayer = function(layer) {
    var events = event_service.getEvents();
    layer.setGeoJSON(events);
  };

  this.execute = function() {
    var map, layer = prepareMap();
    setEventsOnLayer(layer);
  };
};

$(document).ready(function() {
  var use_case = new mapUseCase();
  use_case.execute();
});
