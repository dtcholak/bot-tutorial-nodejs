var HTTPS = require('https');

var botID = process.env.BOT_ID;


function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy$/;
      var wall = /(wall)/i;
      var ping = /(Ping)/;
      var mexican = /(mexican|mexicans|mexico)/i;
      var clinton = /(clinton)/i;
      var anime = /(anime)/i;
      var salt = /^\/salt$/;
      
if(request.name != "Trump") {      

  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(request.name + ", you can help make America great again by voting Trump.");
    this.res.end();
  }
  else if(request.text && wall.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/IdvRpeU.png");
    this.res.end();
  }
  else if(request.text && ping.test(request.text)) {
    this.res.writeHead(200);
    postMessage("pong");
    this.res.end();
  }
  else if(request.text && mexican.test(request.text)) {
    this.res.writeHead(200);
    postMessage("When Mexico sends its people, they’re not sending the best. They’re sending people that have lots of problems and they’re bringing those problems. They’re bringing drugs, they’re bringing crime. They’re rapists and some, I assume, are good people, but I speak to border guards and they’re telling us what we’re getting.");
    this.res.end();
  }
  else if(request.text && clinton.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/ernqWWP.png");
    this.res.end();
  }
  else if(request.text && anime.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/7JQ2auJ.jpg");
    this.res.end();
  }
  else if(request.text && salt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/K6DzqWd.jpg");
    this.res.end();
  }
  else if(request.name == "Dillan Nayee") {
    this.res.writeHead(200);
    //postMessage("TERRORIST!");
    this.res.end();
  }
  else if(request.name == "Tristen Mejias-Thompson") {
    this.res.writeHead(200);
    //postMessage("said the faggot");
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
