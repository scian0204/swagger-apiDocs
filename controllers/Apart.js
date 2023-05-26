'use strict';

var utils = require('../utils/writer.js');
var Apart = require('../service/ApartService');

module.exports.getApartList = function getApartList (req, res, next, apartName) {
  Apart.getApartList(apartName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDongList = function getDongList (req, res, next, apartId) {
  Apart.getDongList(apartId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getHoList = function getHoList (req, res, next, apartId, dong) {
  Apart.getHoList(apartId, dong)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registAll = function registAll (req, res, next, body) {
  Apart.registAll(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registApart = function registApart (req, res, next, body) {
  Apart.registApart(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
