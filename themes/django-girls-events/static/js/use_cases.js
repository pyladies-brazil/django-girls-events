var mapUseCase = function() {
  var service = new mapService();
  var repository = new mapRepository();

  var prepareMap = function() {
    var map, layer = service.loadMap();
    return map, layer;
  };

  var setEventsOnLayer = function(layer) {
    var events = repository.getPins();
    layer.setGeoJSON(events);
  };

  this.execute = function() {
    var map, layer = prepareMap();
    setEventsOnLayer(layer);
  };
};
