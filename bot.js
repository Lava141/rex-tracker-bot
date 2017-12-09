const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready",  message => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log('Rex Tracker Bot has started sucessfully'); 
});

client.on('message', message => {
    if (message.content === '!help') {
message.channel.send({embed: {
    color: 3447003,
    description: "Here are all the commands you can execute!",
    fields: [{
        name: "!help",
        value: "Displays all commands"
      },
      {
        name: "!new-update",
        value: "Notify went new updates arrive!"
      },
      {
        name: "!hello",
        value: "A fun command, try it!"
      },
      {
        name: "!rex-connection",
        value: "Test the php Rex Tracker API connection!"
      }
    ],
  }
});
  	}
});

client.on('message', message => {
    if (message.content === '!hello') {
    	message.reply('Hello, my name is Rex Tracker and i will respond to all your questions and notify you went new updates arrive!');
  	}
});

client.on('message', message => {
    if (message.content === '!rex-connection') {
      //START
var http = require('http');

var options = {
    host: 'rex-tracker.wcksoft.com/',
    path: '/version.php'
}
var request = http.request(options, function (res) {
    var data = '';
    res.on('data', function (chunk) {
        data += chunk;
    });
    res.on('end', function () {
        message.reply(data);
    });
});
request.on('error', function (e) {
    message.reply(e.message);
});
request.end();
      //END
  	}
});

client.on('message', message => {
    if (message.content === '!new-update') {
      if(message.author === "Blackrock") {
        message.channel.send(":x: Failed to get data from http://rex-tracker.wcksoft.com");        
      } else {
        message.channel.send(":x: You are not allowed to run this command! Action will be logged!");
        console.log('User message.author tryed to execute !new-update')
      }
  	}
});

client.on('message', message => {
    if (message.content === 'What is the most recent update?') {
    	message.reply('The current update is : v{{ $current_update }}');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
