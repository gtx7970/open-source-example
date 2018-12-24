"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uniqueRandomArray = _interopRequireDefault(require("unique-random-array"));

var _names = _interopRequireDefault(require("./names.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getRandomItems = (0, _uniqueRandomArray.default)(_names.default);

var random = function random(num) {
  if (num === undefined) {
    return getRandomItems();
  } else {
    var randomItems = [];

    for (var i = 0; i < num; i++) {
      randomItems.push(getRandomItems());
    }

    return randomItems;
  }
};

var _default = {
  all: _names.default,
  random: random
};
exports.default = _default;