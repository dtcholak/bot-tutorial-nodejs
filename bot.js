var HTTPS = require('https');

var botID = process.env.BOT_ID;


function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy$/;
      var ping = /(Ping)/;
      var free = /(free)/i;
      var meme = /(meme)/i;
      var election = /(election)/i;
      
if(request.name != "Sanders") {      
  var memeselect = Math.floor(Math.random() * 10)
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(request.name + ", rise up against Wall Street and take back your country!");
    this.res.end();
  }
  else if(request.text && election.test(request.text)) {
    this.res.writeHead(200);
    var voteLeft = 0;
    var voteRight = 0;
    var numVoters = 0;
    var distance = 0;
    var tie = 0;
    var utilityRight;
    var utilityLeft;
    
    while(numVoters != 100) {
      var x1 = Random.nextGaussian();
      var y1 = Random.nextGaussian();
      distanceLeft = Math.sqrt((x1 + 1) * (x1 + 1) + (y1 + 1) * (y1 + 1));
      distanceRight = Math.sqrt((x1 - 1) * (x1 - 1) + (y1 - 1) * (y1 - 1));
      if(distanceLeft < distanceRight) {
        voteLeft = voteLeft + 1;
      }
      else if(distanceRight < distanceLeft) {
          voteRight = voteRight + 1;
      }
      numVoters = numVoters + 1;
    }
    if(voteRight > voteLeft) {
      postMessage("Right wins with " + voteRight + " votes!");
    }
    else if(voteLeft > voteRight) {
      postMessage("Left wins with " + voteLeft + " votes!");
    }
    else {
      postMessage("Tie");
    }
    this.res.end();
  }
  else if(request.text && meme.test(request.text)) {
    if(memeselect == 0) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/XCOkDKE.jpg");
    this.res.end();
    }
    else if(memeselect == 1) {
    this.res.writeHead(200);
    postMessage("http://img.ifcdn.com/images/c4d5097bdc95619de54f7316efbff177f7b4c3d12808a094dff5a87a53f795fb_1.jpg");
    this.res.end();
    }    
    else if(memeselect == 1) {
    this.res.writeHead(200);
    postMessage("http://3.bp.blogspot.com/-vor5AQ0zilc/VcwzKamXwpI/AAAAAAAAEls/RjL_a4Mf7S4/s1600/11822621_1102603493086525_2387580299811241335_n.jpg");
    this.res.end();
    }
    else if(memeselect == 2) {
    this.res.writeHead(200);
    postMessage("http://img.ifcdn.com/images/faa68fad752d34e943ab397effce54fea772dabe67ca3a31fcb227d376fec22f_1.jpg");
    this.res.end();
    }
    else if(memeselect == 3) {
    this.res.writeHead(200);
    postMessage("http://i0.kym-cdn.com/photos/images/newsfeed/001/067/893/198.jpg");
    this.res.end();
    }
    else if(memeselect == 4) {
    this.res.writeHead(200);
    postMessage("https://pbs.twimg.com/media/CXwpE54WYAA0ED9.png");
    this.res.end();
    }
    else if(memeselect == 5) {
    this.res.writeHead(200);
    postMessage("http://www.timrusso.org/wp-content/uploads/2016/02/12696530_10207185431852206_791550899_o.jpg");
    this.res.end();
    }
    else if(memeselect == 6) {
    this.res.writeHead(200);
    postMessage("https://thoughtcatalog.files.wordpress.com/2016/01/screen-shot-2016-01-29-at-2-29-27-pm.png?w=800");
    this.res.end();
    }
    else if(memeselect == 7) {
    this.res.writeHead(200);
    postMessage("https://s.yimg.com/ny/api/res/1.2/eQY9JY1bGg0WnNR9hgj4Ew--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/http://l.yimg.com/cd/resizer/2.0/FIT_TO_WIDTH-w960/1dc0008549eacb825ff50cf5d63a3b0b81d33057.jpg");
    this.res.end();
    }
    else if(memeselect == 8) {
    this.res.writeHead(200);
    postMessage("http://img.ifcdn.com/images/5f43be8ce780f7206d2362be6a996b470631b26c424c97ac8a9041a30dc23934_1.jpg");
    this.res.end();
    }
    else {
    this.res.writeHead(200);
    postMessage("http://reverbpress.com/wp-content/uploads/2016/01/pennywise.jpg");
    this.res.end();
    }
  }
  else if(request.text && ping.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Pong");
    this.res.end();
  }
  else if(request.text && free.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://img.ifcdn.com/images/7e88ddeaa016dd05aa366a4685d7978da73997648a0bb388e083d9908be3c93a_1.jpg");
    this.res.end();
  }
  else if(request.name == "Tristen Mejias-Thompson") {
    this.res.writeHead(200);
    //postMessage("said the homosexual individual struggling against the greed of the Wall Street elite");
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
