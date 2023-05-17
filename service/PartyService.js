'use strict';


/**
 * 유저별 가입한 파티 목록 - 내림차순
 *
 * pageable Pageable 
 * userId String 
 * returns List
 **/
exports.getUserJoinParty = function(pageable,userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "board" : {
    "writeDate" : "2000-01-23T04:56:07.000+00:00",
    "boardId" : 0,
    "title" : "title",
    "partyId" : 6,
    "userId" : "userId",
    "content" : "content",
    "views" : 1
  },
  "tags" : [ {
    "tagId" : 0,
    "tagName" : "tagName"
  }, {
    "tagId" : 0,
    "tagName" : "tagName"
  } ]
}, {
  "board" : {
    "writeDate" : "2000-01-23T04:56:07.000+00:00",
    "boardId" : 0,
    "title" : "title",
    "partyId" : 6,
    "userId" : "userId",
    "content" : "content",
    "views" : 1
  },
  "tags" : [ {
    "tagId" : 0,
    "tagName" : "tagName"
  }, {
    "tagId" : 0,
    "tagName" : "tagName"
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 파티 가입
 *
 * body PartyUserRequest 
 * returns Integer
 **/
exports.joinParty = function(body) {
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


/**
 * 파티 탈퇴
 *
 * body PartyUserRequest 
 * no response value expected for this operation
 **/
exports.leaveParty = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

