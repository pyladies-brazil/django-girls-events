describe('pinFactory TestCase', function() {
  var factory;
  var pin_data = {};

  beforeEach(function() {
    pin_data = {
      id: 'XPTOid',
      title: 'XPTOTitle',
      description: 'XPTODescription',
      color: 'XPTOColor',
      coordinates: ["1", "2"]
    };
    factory = pinFactory;
  });

  it('Construct pin object correctly', function() {
    var pin = factory(pin_data);

    expect('Feature', pin.type);
    expect({
      type: 'Point',
      coordinates: pin_data.coordinates
    }, pin.geometry);
    expect({
      'id': pin_data.id,
      'title': pin_data.title,
      'description': pin_data.description,
      'marker-size': 'medium',
      'marker-color': pin_data.color,
      'marker-symbol': 'heart',
    }, pin.properties);

  });
});

describe('collectionFactory TestCase', function() {
  var factory;

  beforeEach(function() {
    factory = collectionFactory;
  });

  it('Construct collection of pins correctly', function() {
    var pin_collection = factory();

    expect(pin_collection.type).toEqual('FeatureCollection');
    expect(pin_collection.features.length).toEqual(0);
  });
});
