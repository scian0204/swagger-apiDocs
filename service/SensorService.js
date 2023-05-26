'use strict';


/**
 * 센서 등록 API
 *
 * body Sensor 
 * returns ResponseSensor
 **/
exports.regSensor = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "apartIdx" : 0,
    "location" : "location",
    "sensorId" : "sensorId"
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
 * 센서 감지 데이터 등록 API
 * 센서에서 감지된 소음 데이터 DB에 저장 및 해당 유저 경고 메시지 전송 처리
 *
 * body SensorReportRequest 
 * returns ResponseObject
 **/
exports.reportNoise = function(body) {
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

