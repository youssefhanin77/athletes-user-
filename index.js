const { Client } = require('discord.js-selfbot-v13');
const client = new Client({checkUpdate:false}); 

client.on('ready', async () => {
  console.log(`${client.user.username} is Ready For Working 24/7!`);
})

const express = require("express")
const app = express();
var listener = app.listen(process.env.PORT || 2000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Bot 24H ON!</h1></center
  </body>`)
});


    const statuses = [
        ' Athletes for you !'
    ];
    let i = 0;
    setInterval(() => {
        client.user.setActivity(statuses[i], {
            type: 'STREAMING',
            url: 'https://www.twitch.tv/athletesmena'
        });
        i = ++i % statuses.length;
    }, 1e4);


client.login(process.env.token);
