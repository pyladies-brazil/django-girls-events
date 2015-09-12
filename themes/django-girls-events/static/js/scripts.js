/*! django-girls-events - v0.0.0 - 2015-09-12
* Copyright (c) 2015 ; Licensed  */
var pinFactory = function (pin_data) {
  return {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: pin_data.coordinates
      },
      properties: {
        'id': pin_data.id,
        'title': pin_data.title,
        'description': pin_data.description,
        'marker-size': 'medium',
        'marker-color': pin_data.color,
        'marker-symbol': 'heart'
      }
    }]
  };
};

var eventService = function () {
  var geo_data_url = 'data/events.json';

  this.getEvents = function() {
    var events = [];
    $.getJSON(geo_data_url).done(function(response) {
      $.each(response, function(index, item) {
        events.push(pinFactory(item));
      });
    });
    return events;
  };
};

var mapService = function () {
  var token = 'pk.eyJ1IjoicGdyYW5nZWlybyIsImEiOiJiYzI1ZTViNDI1OTc5M2U0Yzg3MzY4NDNlYmY2OGNjOCJ9.5W7JSJ5qlHO61_j-1NrZuw';

  this.loadMap = function() {
    libMap.mapbox.accessToken = token;
    var map = libMap.mapbox.map('map', 'mapbox.streets');
    var layer = libMap.mapbox.featureLayer().addTo(map);
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
    $.each(events, function(index, item) {
      layer.setGeoJSON(item);
    });
  };

  this.execute = function() {
    var map, layer = prepareMap();
    setEventsOnLayer(layer);
  };
};
