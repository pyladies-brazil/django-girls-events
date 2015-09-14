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

describe('eventsRepository TestCase', function() {
  var service;

  beforeEach(function() {
    repository = new eventRepository();
  });

  it('Test getEvents return sorted events data', function() {
    var d = $.Deferred();
    d.resolve([
      {
        id: 'XPTOid',
        title: 'XPTOTitle',
        description: 'XPTODescription',
        color: 'XPTOColor',
        coordinates: ["1", "2"],
        date: '2015-01-01'
      },
      {
        id: 'XPTOid',
        title: 'XPTOTitle',
        description: 'XPTODescription',
        color: 'XPTOColor',
        coordinates: ["1", "2"],
        date: '2015-01-02'
      }
    ]);

    spyOn($, 'ajax').and.returnValue(d.promise());

    var events = repository.getEvents();

    expect(events.length).toEqual(2);
    expect(events[0].date).toBeGreaterThan(events[1].date);
  });
});
