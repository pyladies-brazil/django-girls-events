describe('mapUseCase TestCase', function() {
  var use_case;

  beforeEach(function() {
    use_case = new mapUseCase();
  });

  it('Test prepareMap successfully', function() {
    spyOn(mapService, 'loadMap').and.returnValue(1, 2);


  });

  it('Test setEventsOnLayer successfully', function() {
  });

  it('Test execute successfully', function() {
  });
});
