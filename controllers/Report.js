'use strict';

var utils = require('../utils/writer.js');
var Report = require('../service/ReportService');

module.exports.deleteBoardPost = function deleteBoardPost (req, res, next, body) {
  Report.deleteBoardPost(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllBoardsASC = function getAllBoardsASC (req, res, next, pageable) {
  Report.getAllBoardsASC(pageable)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllBoardsDESC = function getAllBoardsDESC (req, res, next, pageable) {
  Report.getAllBoardsDESC(pageable)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.insertBoard = function insertBoard (req, res, next, body, file) {
  Report.insertBoard(body, file)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateBoard = function updateBoard (req, res, next, body) {
  Report.updateBoard(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.viewBoard = function viewBoard (req, res, next, idx) {
  Report.viewBoard(idx)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
