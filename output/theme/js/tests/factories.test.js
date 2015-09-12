describe('pinFactory TestCase', function() {
  var factory;
  var pin_data;

  beforeEach(function() {
    factory = new pinFactory();
    pin_data = {
      id: 'XPTOid',
      title: 'XPTOTitle',
      description: 'XPTODescription',
      color: 'XPTOColor',
      coordinates: ["1", "2"]
    };
  });

  it('Construct pin object correctly', function() {
    var pin = factory(pin_data);

    expect('FeatureCollection', pin.type);

    pin_options = pin.feature[0];
    expect('Feature', pin_options.type);
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
