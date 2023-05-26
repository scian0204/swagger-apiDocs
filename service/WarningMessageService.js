'use strict';


/**
 * 유저별 경고메시지 목록 API
 *
 * userId String 
 * returns ResponseListWarningMessage
 **/
exports.getMessage = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "regDate" : "2000-01-23T04:56:07.000+00:00",
    "idx" : 0,
    "message" : "message",
    "userId" : "userId"
  }, {
    "regDate" : "2000-01-23T04:56:07.000+00:00",
    "idx" : 0,
    "message" : "message",
    "userId" : "userId"
  } ],
  "error" : {
    "errorId" : 0,
    "message" : "message"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

