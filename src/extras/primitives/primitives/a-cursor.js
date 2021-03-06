var getMeshMixin = require('../getMeshMixin');
var registerPrimitive = require('../registerPrimitive');
var utils = require('../../../utils/');

registerPrimitive('a-cursor', utils.extendDeep({}, getMeshMixin(), {
  defaultAttributes: {
    cursor: {},
    geometry: {
      primitive: 'ring',
      radiusOuter: 0.016,
      radiusInner: 0.01,
      segmentsTheta: 64
    },
    material: {
      color: '#000',
      shader: 'flat',
      opacity: 0.8
    },
    position: {
      x: 0,
      y: 0,
      z: -1
    },
    raycaster: {}
  },

  mappings: {
    far: 'raycaster.far',
    fuse: 'cursor.fuse',
    interval: 'raycaster.interval',
    objects: 'raycaster.objects',
    timeout: 'cursor.timeout'
  }
}));
