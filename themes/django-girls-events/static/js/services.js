var eventService = function () {
  var geo_data_url = 'data/events.json';

  this.getEvents = function() {
    var events = [];
    $.ajax({
      url: geo_data_url,
      async: false
    }).done(function(response) {
      $.each(response, function(index, item) {
        events.push(item);
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




















