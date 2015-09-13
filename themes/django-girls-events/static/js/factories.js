var pinFactory = function(pin_data) {
  var pin_size = 'medium';
  var pin_symbol = 'heart';
  var pin_type = 'Point';

  return {
    type: 'Feature',
    geometry: {
      type: pin_type,
      coordinates: pin_data.coordinates
    },
    properties: {
      'id': pin_data.id,
      'title': pin_data.title,
      'description': pin_data.description,
      'marker-size': pin_size,
      'marker-color': pin_data.color,
      'marker-symbol': pin_symbol
    }
  };
};

var collectionFactory = function() {
  return {
    type: 'FeatureCollection',
    features: []
  };
};
