'use strict';

var utils = require('../utils/writer.js');
var Sensor = require('../service/SensorService');

module.exports.regSensor = function regSensor (req, res, next, body) {
  Sensor.regSensor(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.reportNoise = function reportNoise (req, res, next, body) {
  Sensor.reportNoise(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
