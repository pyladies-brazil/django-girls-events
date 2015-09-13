describe('mapRepository TestCase', function() {
  var service;

  beforeEach(function() {
    repository = new mapRepository();
  });

  it('Test getPins return events data', function() {
    var d = $.Deferred();
    d.resolve([{
      id: 'XPTOid',
      title: 'XPTOTitle',
      description: 'XPTODescription',
      color: 'XPTOColor',
      coordinates: ["1", "2"]
    }]);

    spyOn($, 'ajax').and.returnValue(d.promise());

    var events = repository.getPins();

    expect(events.features.length).toEqual(1);
    expect(events.type).toEqual('FeatureCollection');

    expect('Feature', events.features[0].type);
    expect({
      type: 'Point',
      coordinates: ["1", "2"]
    }, events.features[0].geometry);
    expect({
      'id': 'XPTOid',
      'title': 'XPTOTitle',
      'description': 'XPTODescription',
      'marker-size': 'medium',
      'marker-color': 'XPTOColor',
      'marker-symbol': 'heart',
    }, events.features[0].properties);
  });
});
