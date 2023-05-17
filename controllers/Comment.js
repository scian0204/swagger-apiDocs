'use strict';

var utils = require('../utils/writer.js');
var Comment = require('../service/CommentService');

module.exports.deleteComment = function deleteComment (req, res, next, body) {
  Comment.deleteComment(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateComment = function updateComment (req, res, next, body) {
  Comment.updateComment(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.viewComment = function viewComment (req, res, next, pageable, boardId) {
  Comment.viewComment(pageable, boardId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.writeComment = function writeComment (req, res, next, body) {
  Comment.writeComment(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
