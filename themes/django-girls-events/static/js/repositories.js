var mapRepository = function () {
  var service = new eventService();

  this.getPins = function() {
    var events = collectionFactory();
    $.each(service.getEvents(), function(index, item) {
      events.features.push(pinFactory(item));
    });
    return events;
  };
};
