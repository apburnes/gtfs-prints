'use strict';

module.exports.sfmta = {
  buffer50m: {
    width: 100,
    height: 2,
    extraBaseHeight: 0,
    extrudeBy: 'thickness',
    simplification: .9,
    binary: true,
    cutoutHoles: false,
    verbose: true,
    extrusionMode: 'smooth'
  },
  buffer25m: {
    width: 100,
    height: 3,
    extraBaseHeight: 0,
    extrudeBy: 'thickness',
    simplification: .8,
    binary: true,
    cutoutHoles: false,
    verbose: true,
    extrusionMode: 'smooth'
  }
}
