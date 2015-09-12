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
