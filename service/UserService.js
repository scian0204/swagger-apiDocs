'use strict';


/**
 * 회원 탈퇴
 *
 * body LoginRequest 
 * returns String
 **/
exports.deleteUser = function(body) {
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
 * 아이디 중복 체크
 *
 * userId String 
 * returns Boolean
 **/
exports.isIdDup = function(userId) {
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
 * 로그인 여부 확인
 *
 * returns Object
 **/
exports.isLogin = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
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
 * returns String
 **/
exports.login = function(body) {
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
 * 로그아웃
 *
 * no response value expected for this operation
 **/
exports.logout = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * 회원가입
 *
 * body UserRequest 
 * returns String
 **/
exports.signUp = function(body) {
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
 * 유저 정보 수정
 *
 * body UserRequest 
 * no response value expected for this operation
 **/
exports.updateUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

