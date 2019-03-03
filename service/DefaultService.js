'use strict';


/**
 * Adds numbers!
 *
 * num1 Integer num1.
 * num2 Integer num2.
 * returns Integer
 **/
exports.addNum1Num2GET = function(num1,num2) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = 
    {
      result:num1 + num2
    }
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

exports.multiplyNum1Num2GET = function(num1,num2) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = 
    {
      result:num1 * num2
    }
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}
