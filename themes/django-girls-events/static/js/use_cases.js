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
