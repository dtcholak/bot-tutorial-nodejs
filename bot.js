var HTTPS = require('https');

var botID = process.env.BOT_ID;


function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy$/;
      var ping = /(Ping)/;
      var free = /(free)/;
      
if(request.name != "Sanders") {      

  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(request.name + ", rise up Wall Street and take back your country!");
    this.res.end();
  }
  else if(request.text && ping.test(request.text)) {
    this.res.writeHead(200);
    postMessage("pong");
    this.res.end();
  }
  else if(request.text && free.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://img.ifcdn.com/images/7e88ddeaa016dd05aa366a4685d7978da73997648a0bb388e083d9908be3c93a_1.jpg");
    this.res.end();
  }
  else if(request.name == "Tristen Mejias-Thompson") {
    this.res.writeHead(200);
    postMessage("said the homosexual individual struggling against the greed of the Wall Street elite");
    this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}
else {
  console.log("don't care");
  this.res.writeHead(200);
  this.res.end();
  }
}

function postMessage(response) {
  var botResponse, options, body, botReq;

  botResponse = response;

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}


exports.respond = respond;
