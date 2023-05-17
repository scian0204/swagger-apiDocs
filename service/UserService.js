'use strict';


/**
 * 회원 탈퇴
 *
 * body LoginRequest 
 * returns ResponseObject
 **/
exports.deleteUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : { },
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
 * 아이디 중복 체크
 *
 * userId String 
 * returns ResponseBoolean
 **/
exports.isIdDup = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : true,
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
 * 로그인 여부 확인
 *
 * returns ResponseString
 **/
exports.isLogin = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : "data",
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
 * 로그인
 *
 * body LoginRequest 
 * returns ResponseString
 **/
exports.login = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : "data",
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
 * 로그아웃
 *
 * returns ResponseString
 **/
exports.logout = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : "data",
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
 * 회원가입
 *
 * body UserRequest 
 * returns ResponseUser
 **/
exports.signUp = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "password" : "password",
    "telNum" : "telNum",
    "regDate" : "2000-01-23T04:56:07.000+00:00",
    "isAdmin" : 6,
    "userName" : "userName",
    "userId" : "userId"
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


/**
 * 유저 정보 수정
 *
 * body UserRequest 
 * returns ResponseUser
 **/
exports.updateUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "password" : "password",
    "telNum" : "telNum",
    "regDate" : "2000-01-23T04:56:07.000+00:00",
    "isAdmin" : 6,
    "userName" : "userName",
    "userId" : "userId"
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

