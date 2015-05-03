'use strict';

var path = require('path');
var fs = require('fs');
var shp2stl = require('shp2stl');

var transFile = path.join(__dirname, 'data', 'sfmta_25m_polys.shp');
var stlFile = path.join(__dirname, 'stl', 'sfmta_25m.stl');

shp2stl.shp2stl(transFile, {
  width: 100,
  height: 3,
  extraBaseHeight: 0,
  extrudeBy: 'thickness',
  simplification: .8,
  binary: true,
  cutoutHoles: false,
  verbose: true,
  extrusionMode: 'smooth'
}, function(err, stl) {
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
