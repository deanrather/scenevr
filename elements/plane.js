var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

var Element = require("../lib/element");

var Plane;

__extends(Plane, Element);

function Plane() {
  Plane.__super__.constructor.call(this, "plane");
}

Plane.prototype.reflect = true;

module.exports = Plane;
