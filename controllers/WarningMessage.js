'use strict';

var utils = require('../utils/writer.js');
var WarningMessage = require('../service/WarningMessageService');

module.exports.getMessage = function getMessage (req, res, next, userId) {
  WarningMessage.getMessage(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
