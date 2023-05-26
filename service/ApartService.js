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
 * returns ResponseListString
 **/
exports.getDongList = function(apartId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ "data", "data" ],
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
 * 아파트 동 별 호 목록 API
 * 아파트ID와 동으로 호 목록 검색하는 API
 *
 * apartId Integer 
 * dong String 
 * returns ResponseListString
 **/
exports.getHoList = function(apartId,dong) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ "data", "data" ],
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
 * 아파트별 동, 호 일괄등록 API
 * 아파트 등록 API에서 아파트 등록을 먼저 하고 해당 apartId를 넣을 것
 *
 * body ApartAllRequest apartId: 등록할 아파트 id<br>dongs: 동 리스트<br>numOfFloor: 층수<br>numOfHo: 층별 호 수
 * returns ResponseListApart
 **/
exports.registAll = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "apartIdx" : 0,
    "ho" : "ho",
    "apartId" : 6,
    "dong" : "dong"
  }, {
    "apartIdx" : 0,
    "ho" : "ho",
    "apartId" : 6,
    "dong" : "dong"
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
 * 아파트 등록 API
 *
 * body ApartInfoRequest 
 * returns ResponseApartInfo
 **/
exports.registApart = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "apartName" : "apartName",
    "apartId" : 0,
    "location" : "location"
  },
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

