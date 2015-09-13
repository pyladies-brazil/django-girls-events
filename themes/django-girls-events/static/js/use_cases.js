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


var listEventsUseCase = function() {
  var service = new eventService();

  var getHandleBarsTemplate = function() {
    var source = $("#events-template").html();
    return Handlebars.compile(source);
  };

  var setHandleBarsContext = function(template, context) {
    var html = template(context);
    $("#events-list").html(html);
  };

  this.execute = function() {
    var events = service.getEvents();
    var template = getHandleBarsTemplate();
    setHandleBarsContext(template, events);
  };
};
