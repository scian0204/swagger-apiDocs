'use strict';


/**
 *
 * body Map 
 * returns String
 **/
exports.deleteBoardPost = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * pageable Pageable 
 * returns PageReport
 **/
exports.getAllBoardsASC = function(pageable) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "number" : 5,
  "size" : 1,
  "last" : true,
  "numberOfElements" : 5,
  "totalPages" : 6,
  "pageable" : {
    "paged" : true,
    "pageNumber" : 9,
    "offset" : 2,
    "pageSize" : 7,
    "unpaged" : true
  },
  "sort" : {
    "unsorted" : true,
    "sorted" : true,
    "empty" : true
  },
  "content" : [ {
    "isCheck" : "isCheck",
    "reportDate" : "2000-01-23T04:56:07.000+00:00",
    "detail" : "detail",
    "idx" : 0,
    "userId" : "userId",
    "occurDate" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "isCheck" : "isCheck",
    "reportDate" : "2000-01-23T04:56:07.000+00:00",
    "detail" : "detail",
    "idx" : 0,
    "userId" : "userId",
    "occurDate" : "2000-01-23T04:56:07.000+00:00"
  } ],
  "first" : true,
  "totalElements" : 0,
  "empty" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * pageable Pageable 
 * returns PageReport
 **/
exports.getAllBoardsDESC = function(pageable) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "number" : 5,
  "size" : 1,
  "last" : true,
  "numberOfElements" : 5,
  "totalPages" : 6,
  "pageable" : {
    "paged" : true,
    "pageNumber" : 9,
    "offset" : 2,
    "pageSize" : 7,
    "unpaged" : true
  },
  "sort" : {
    "unsorted" : true,
    "sorted" : true,
    "empty" : true
  },
  "content" : [ {
    "isCheck" : "isCheck",
    "reportDate" : "2000-01-23T04:56:07.000+00:00",
    "detail" : "detail",
    "idx" : 0,
    "userId" : "userId",
    "occurDate" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "isCheck" : "isCheck",
    "reportDate" : "2000-01-23T04:56:07.000+00:00",
    "detail" : "detail",
    "idx" : 0,
    "userId" : "userId",
    "occurDate" : "2000-01-23T04:56:07.000+00:00"
  } ],
  "first" : true,
  "totalElements" : 0,
  "empty" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * body Map 
 * file byte[] 
 * no response value expected for this operation
 **/
exports.insertBoard = function(body,file) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * body Map 
 * no response value expected for this operation
 **/
exports.updateBoard = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * idx Integer 
 * returns Report
 **/
exports.viewBoard = function(idx) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "isCheck" : "isCheck",
  "reportDate" : "2000-01-23T04:56:07.000+00:00",
  "detail" : "detail",
  "idx" : 0,
  "userId" : "userId",
  "occurDate" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

