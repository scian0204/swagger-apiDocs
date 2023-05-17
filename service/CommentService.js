'use strict';


/**
 * 댓글 삭제
 *
 * body CommentDeleteRequest 
 * returns Boolean
 **/
exports.deleteComment = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = true;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 댓글 수정
 *
 * body CommentUpdateRequest 
 * no response value expected for this operation
 **/
exports.updateComment = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * 게시글별 댓글 목록
 *
 * pageable Pageable 
 * boardId Integer 
 * returns List
 **/
exports.viewComment = function(pageable,boardId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "cmtId" : 0,
  "writeDate" : "2000-01-23T04:56:07.000+00:00",
  "boardId" : 6,
  "isPublic" : true,
  "comment" : "comment",
  "userId" : "userId",
  "target" : 1
}, {
  "cmtId" : 0,
  "writeDate" : "2000-01-23T04:56:07.000+00:00",
  "boardId" : 6,
  "isPublic" : true,
  "comment" : "comment",
  "userId" : "userId",
  "target" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 댓글 작성
 *
 * body CommentWriteRequest target에는 답글에 대상이 되는 cmtId를 넣거나 일반 댓글이라면 해당 항목을 제외하고 요청
 * returns Integer
 **/
exports.writeComment = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = 0;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

