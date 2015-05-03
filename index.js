'use strict';

var path = require('path');
var fs = require('fs');
var shp2stl = require('shp2stl');

var config = require('./config.js');

var transFile = path.join(__dirname, 'data', 'sfmta_50m_polys.shp');
var stlFile = path.join(__dirname, 'stl', 'sfmta_50m.stl');

shp2stl.shp2stl(transFile, config.sfmta.buffer50m, function(err, stl) {
  if (err) {
    process.exit(1);
    throw new Error(err);
  }

  fs.writeFile(stlFile, stl, function(error) {
    if (error) {
      process.exit(1);
      throw new Error(error);
    }

    console.log('Complete.');
  });
});
