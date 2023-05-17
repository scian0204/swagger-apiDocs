'use strict';


/**
 * 아파트 목록 API
 * 아파트 이름으로 아파트 목록 검색하는 API
 *
 * apartName String 
 * returns ResponseListApartInfo
 **/
exports.getApartList = function(apartName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "apartName" : "apartName",
    "apartId" : 0,
    "location" : "location"
  }, {
    "apartName" : "apartName",
    "apartId" : 0,
    "location" : "location"
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


/**
 * 아파트별 동 목록 API
 * 아파트ID로 동 목록 검색하는 API
 *
 * apartId Integer 
 * returns List
 **/
exports.getDongList = function(apartId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 아파트 동 별 호 목록 API
 * 아파트ID와 동으로 호 목록 검색하는 API
 *
 * body HoRequest 
 * returns List
 **/
exports.getHoList = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * body ApartInfoRequest 
 * returns ApartInfo
 **/
exports.registApart = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "apartName" : "apartName",
  "apartId" : 0,
  "location" : "location"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

