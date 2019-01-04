'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.addNum1Num2GET = function addNum1Num2GET (req, res, next) {
  var num1 = req.swagger.params['num1'].value;
  var num2 = req.swagger.params['num2'].value;
  Default.addNum1Num2GET(num1,num2)
    .then(function (result) {

      console.log("response is "+ result)
      utils.writeJson(res, result);
    })
    .catch(function (result) {
      console.log("an error occurred")
      utils.writeJson(res, result);
    });
};

