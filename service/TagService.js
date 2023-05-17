'use strict';


/**
 * 해당 태그이름이 포함된 태그 목록
 *
 * tagName String 
 * returns List
 **/
exports.getListbyTagName = function(tagName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "tagId" : 0,
  "tagName" : "tagName"
}, {
  "tagId" : 0,
  "tagName" : "tagName"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 가장 많이 사용된 태그 순위
 *
 * returns List
 **/
exports.getTagsByRank = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "cnt" : 0,
  "tag" : {
    "tagId" : 0,
    "tagName" : "tagName"
  }
}, {
  "cnt" : 0,
  "tag" : {
    "tagId" : 0,
    "tagName" : "tagName"
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

