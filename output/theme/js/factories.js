var pinFactory = function (pin_data) {
  return {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: pin_data.coordinates
      },
      properties: {
        'id': pin_data.id,
        'title': pin_data.title,
        'description': pin_data.description,
        'marker-size': 'medium',
        'marker-color': pin_data.color,
        'marker-symbol': 'heart'
      }
    }]
  };
};
