'use strict';


/**
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

