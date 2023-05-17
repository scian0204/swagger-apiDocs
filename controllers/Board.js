'use strict';

var utils = require('../utils/writer.js');
var Board = require('../service/BoardService');

module.exports.deleteBoardPost = function deleteBoardPost (req, res, next, body) {
  Board.deleteBoardPost(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllBoardsASC = function getAllBoardsASC (req, res, next, pageable) {
  Board.getAllBoardsASC(pageable)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllBoardsDESC = function getAllBoardsDESC (req, res, next, pageable) {
  Board.getAllBoardsDESC(pageable)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBoardsByUserId = function getBoardsByUserId (req, res, next, pageable, userId) {
  Board.getBoardsByUserId(pageable, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.insertBoard = function insertBoard (req, res, next, body) {
  Board.insertBoard(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchBoard = function searchBoard (req, res, next, pageable, text) {
  Board.searchBoard(pageable, text)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchBoardByTagId = function searchBoardByTagId (req, res, next, pageable, tagId) {
  Board.searchBoardByTagId(pageable, tagId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateBoard = function updateBoard (req, res, next, body) {
  Board.updateBoard(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.viewBoard = function viewBoard (req, res, next, boardId) {
  Board.viewBoard(boardId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
