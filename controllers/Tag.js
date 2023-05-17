'use strict';

var utils = require('../utils/writer.js');
var Tag = require('../service/TagService');

module.exports.getListbyTagName = function getListbyTagName (req, res, next, tagName) {
  Tag.getListbyTagName(tagName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTagsByRank = function getTagsByRank (req, res, next) {
  Tag.getTagsByRank()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
