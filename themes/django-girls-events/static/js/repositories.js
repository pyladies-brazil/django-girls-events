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

var eventRepository = function() {
  var service = new eventService();

  var dec_events_bubble_sort = function(previus, next) {
    var previus_date = new Date(previus.date + 'T23:59:00Z');
    var next_date = new Date(next.date + 'T23:59:00Z');
    if (previus_date < next_date)
      return 1;
    if (previus_date > next_date)
      return -1;
    return 0;
  };

  this.getEvents = function() {
    var events = service.getEvents();
    return events.sort(dec_events_bubble_sort);
  };
};
