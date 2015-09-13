describe('mapService TestCase', function() {
  var service;

  beforeEach(function() {
    service = new mapService();
  });

  it('Test loadMap calls map method correctly', function() {
    L = {
      mapbox: {
        accessToken: '',
        map: function(map, mapbox_type){
          return {setView: function(map) { return null; }};
        },
        featureLayer: function() {
          return {addTo: function(map) { return null; }};
        }
      }
    };

    var mocked_lib = L;

    spyOn(mocked_lib.mapbox, 'map').and.callThrough();
    spyOn(mocked_lib.mapbox, 'featureLayer').and.callThrough();

    var map, layer = service.loadMap();

    expect(mocked_lib.mapbox.accessToken).toEqual('pk.eyJ1IjoicGdyYW5nZWlybyIsImEiOiJiYzI1ZTViNDI1OTc5M2U0Yzg3MzY4NDNlYmY2OGNjOCJ9.5W7JSJ5qlHO61_j-1NrZuw');
    expect(mocked_lib.mapbox.map).toHaveBeenCalledWith('map', 'mapbox.streets');
    expect(mocked_lib.mapbox.featureLayer).toHaveBeenCalled();
  });
});

describe('eventService TestCase', function() {
  var service;

  beforeEach(function() {
    service = new eventService();
  });

  it('Test getEvents calls correct data json url', function() {
    spyOn($, 'ajax').and.callThrough();
    service.getEvents();

    expect($.ajax).toHaveBeenCalledWith({
      url: 'data/events.json',
      async: false
    });
  });

  it('Test getEvents successfully if it not has events', function() {
    var d = $.Deferred();
    d.resolve([]);

    spyOn($, 'ajax').and.returnValue(d.promise());

    var events = service.getEvents();
    expect(events.features.length).toEqual(0);
  });

  it('Test getEvents successfully', function() {
    var d = $.Deferred();
    d.resolve([{
      id: 'XPTOid',
      title: 'XPTOTitle',
      description: 'XPTODescription',
      color: 'XPTOColor',
      coordinates: ["1", "2"]
    }]);

    spyOn($, 'ajax').and.returnValue(d.promise());

    var events = service.getEvents();
    expect(events.features.length).toEqual(1);
  });
});
