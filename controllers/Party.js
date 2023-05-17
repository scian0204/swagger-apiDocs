'use strict';

var utils = require('../utils/writer.js');
var Party = require('../service/PartyService');

module.exports.getUserJoinParty = function getUserJoinParty (req, res, next, pageable, userId) {
  Party.getUserJoinParty(pageable, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.joinParty = function joinParty (req, res, next, body) {
  Party.joinParty(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.leaveParty = function leaveParty (req, res, next, body) {
  Party.leaveParty(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
