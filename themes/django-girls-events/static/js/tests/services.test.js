describe('Testing mapService', function() {
  var service;
  var mocked_lib;

  beforeEach(function() {
    service = new mapService();
    mocked_lib = jasmine.createSpy('libMap');
    mocked_lib.mapbox = jasmine.createSpy('mapbox');
    mocked_lib.mapbox.accessToken = jasmine.createSpy('accessToken');
    mocked_lib.mapbox.map = jasmine.createSpy('map');
  });

  it('Test loadMap calls map method correctly', function() {
    service.loadMap(mocked_lib);
    expect(mocked_lib.mapbox.accessToken).toEqual('pk.eyJ1IjoicGdyYW5nZWlybyIsImEiOiJiYzI1ZTViNDI1OTc5M2U0Yzg3MzY4NDNlYmY2OGNjOCJ9.5W7JSJ5qlHO61_j-1NrZuw');
    expect(mocked_lib.mapbox.map).toHaveBeenCalledWith('map', 'pgrangeiro.nclnl4ag');
  });
});
