var mapService = function () {
  var token = 'pk.eyJ1IjoicGdyYW5nZWlybyIsImEiOiJiYzI1ZTViNDI1OTc5M2U0Yzg3MzY4NDNlYmY2OGNjOCJ9.5W7JSJ5qlHO61_j-1NrZuw';
  var identifier = 'pgrangeiro.nclnl4ag';

  this.loadMap = function(libMap) {
    libMap.mapbox.accessToken = token;
    libMap.mapbox.map('map', identifier);
  };
};
