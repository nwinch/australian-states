'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.all = exports.capitals = exports.short = exports.long = undefined;

var _states = require('../data/states.json');

var _states2 = _interopRequireDefault(_states);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var get = function get(key) {
  return _states2.default.map(function (item) {
    return item[key];
  });
};
var capitalize = function capitalize(str) {
  return str.replace(/\b\w/g, function (f) {
    return f.toUpperCase();
  });
};
var capitalizor = function capitalizor(items) {
  return items.map(function (item) {
    return capitalize(item);
  });
};

var long = exports.long = function long(opts) {
  return run(opts, 'name');
};
var short = exports.short = function short(opts) {
  return run(opts, 'abbreviation');
};
var capitals = exports.capitals = function capitals(opts) {
  return run(opts, 'capital');
};
var all = exports.all = function all() {
  return _states2.default;
};

function run(opts, prop) {
  var items = get(prop);
  if (opts && opts.capitalize) return capitalizor(items);
  return items;
}