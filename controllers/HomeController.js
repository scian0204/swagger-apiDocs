'use strict';

var utils = require('../utils/writer.js');
var HomeController = require('../service/HomeControllerService');

module.exports.test = function test (req, res, next) {
  HomeController.test()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
