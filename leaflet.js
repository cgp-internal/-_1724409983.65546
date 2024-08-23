(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' ? define((define => {
    define(exports);
  })) : (factory((global.L = {})));
}(this, (function (exports) {
  'use strict';

  var VERSION = '1.7.1';

  function extend 대상对象) {
    for (var i = 1, len = arguments.length; i < len; i++) {
      var args = arguments[i];
      for (var key in args) {
        if (args.hasOwnProperty(key)) {
          대상对象[key] = args[key];
        }
      }
    }
    return 대상对象;
  }

  function bind(fn, context) {
    return function () {
      return fn.apply(context, arguments);
    };
  }

  function inherits子类, 父类) {
    子类.prototype = Object.create(父类.prototype);
    子类.prototype.constructor = 子类;
  }

  var Util = {
    extend: extend,
    bind: bind,
    inherits: inherits
  };

  var Class = function () {
    this.initialize.apply(this, arguments);
  };

  Class.extend = function (props) {
    var 子类 = function () {
      this.constructor = 子类;
    };
    inherits(子类, this);
   extend(子类.prototype, props);
    return 子类;
  };

  var Map = Class.extend({
    initialize: function (element, options) {
      this.element = element;
      this.options = Util.extend({}, this.getDefaultOptions(), options);
      this._layers = {};
      this._zoomBoundLayers = {};
      this._fadeLayer = null;
      this._bounds = new Bounds(
        [0, 0],
        [0, 0]
      );
      this._center = [0, 0];
      this._zoom = this.options.zoom;
    },

    getDefaultOptions: function () {
      return {
        zoom: 1,
        center: [0, 0],
        minZoom: 1,
        maxZoom: 18
      };
    },

    addLayer: function (layer) {
      this._layers[layer._tilePane] = layer;
      this._update();
    },

    removeLayer: function (layer) {
      delete this._layers[layer._tilePane];
      this._update();
    },

    _update: function () {
      this._updateGridSize();
      this._updateTileLevels();
      this._updateLayers();
    },

    _updateGridSize: function () {
      this._gridSize = this.getContainerSize();
    },

    _updateTileLevels: function () {
      this._tileLevels = this._getZoomLevels();
    },

    _updateLayers: function () {
      for (var i in this._layers) {
        this._layers[i]._update();
      }
    },

    _getZoomLevels: function () {
      var minZoom = this.options.minZoom,
        maxZoom = this.options.maxZoom,
        zoomLevels = [];

      for (var i = minZoom; i <= maxZoom; i++) {
        zoomLevels.push(Math.pow(2, i));
      }

      return zoomLevels;
    }
  });

  exports.Map = Map;
  exports.util = Util;
  exports.version = VERSION;
})));