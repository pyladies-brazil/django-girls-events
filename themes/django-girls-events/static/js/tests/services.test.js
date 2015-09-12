describe('mapService TestCase', function() {
  var service;

  beforeEach(function() {
    service = new mapService();
  });

  it('Test loadMap calls map method correctly', function() {
    L = {
      mapbox: {
        accessToken: '',
        map: function(map, mapbox_type){ return null; },
        featureLayer: function() {
          return {addTo: function(map) { return null; }};
        }
      }
    };

    var mocked_lib = L;

    spyOn(mocked_lib.mapbox, 'map');
    spyOn(mocked_lib.mapbox, 'featureLayer').and.callThrough();

    var map, layer = service.loadMap();

    expect(mocked_lib.mapbox.accessToken).toEqual('pk.eyJ1IjoicGdyYW5nZWlybyIsImEiOiJiYzI1ZTViNDI1OTc5M2U0Yzg3MzY4NDNlYmY2OGNjOCJ9.5W7JSJ5qlHO61_j-1NrZuw');
    expect(mocked_lib.mapbox.map).toHaveBeenCalledWith('map', 'mapbox.streets');
    expect(mocked_lib.mapbox.featureLayer).toHaveBeenCalled();
  });
});
