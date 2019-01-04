var ResponsePayload = function(code, payload) {
  this.code = code;
  this.payload = payload;
}

exports.respondWithCode = function(code, payload) {
  return new ResponsePayload(code, payload);
}

var writeJson = exports.writeJson = function(response, arg1, arg2) {
  
  console.log("11111111111111111111")
  console.trace("I am here")
  
  var code;
  var payload;

  if(arg1 && arg1 instanceof ResponsePayload) {
    console.log("case1")
    writeJson(response, arg1.payload, arg1.code);
    return;
  }

  console.log("22222222222222222")

  if(arg2 && Number.isInteger(arg2)) {
    console.log("case2")
    code = arg2;
  }
  
  
  
  if(code && arg1) {
    console.log("case4")
    payload = arg1;
    if (payload) console.log("payload1 is " + payload)
  }
  
  

  else if(arg1) {
    if(arg1 && Number.isInteger(arg1)) {
      
      payload = JSON.stringify(arg1);
    } 
    else {
      payload = arg1;
    }
    
    if (payload) console.log("payload2 is " + payload)
  }
  
  if(!code) {
    // if no response code given, we default to 200
    console.log("case6")
    code = 200;
  }
  if(typeof payload === 'object') {
    console.log("case7")
    payload = JSON.stringify(payload, null, 2);
    if (payload) console.log("payload3 is " + payload)
  }
  
  

  console.log("hmmmmmmmm")
  console.log("payload is " + payload + " code is " + code)
  response.writeHead(code, {'Content-Type': 'application/json'});
  console.log("bummmmmmmmm")
  response.end(payload);
  console.log("mehhhhhhhhhhhh")
}
