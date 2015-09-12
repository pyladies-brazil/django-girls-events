describe('mapService TestCase', function() {
  var service;
  var mocked_lib;
  var L = {
    mapbox: {
      accessToken: '',
      map: function(map, mapbox_type){},
      featureLayer: function(){
        return {
          addTo: function(map){}
        };
      }
    }
  };

  beforeEach(function() {
    service = new mapService();
    mocked_lib = jasmine.createSpy('L');
    mocked_lib.mapbox = jasmine.createSpy('mapbox');
    mocked_lib.mapbox.accessToken = jasmine.createSpy('accessToken');
    mocked_lib.mapbox.featureLayer = jasmine.createSpy('featureLayer');
    mocked_lib.mapbox.featureLayer.addTo = jasmine.createSpy('addTo');
    mocked_lib.mapbox.map = jasmine.createSpy('map');
  });

  it('Test loadMap calls map method correctly', function() {
    var map, layer = service.loadMap(mocked_lib);

    expect(mocked_lib.mapbox.accessToken).toEqual('pk.eyJ1IjoicGdyYW5nZWlybyIsImEiOiJiYzI1ZTViNDI1OTc5M2U0Yzg3MzY4NDNlYmY2OGNjOCJ9.5W7JSJ5qlHO61_j-1NrZuw');
    expect(mocked_lib.mapbox.map).toHaveBeenCalledWith('map', 'mapbox.streets');
  });
});
