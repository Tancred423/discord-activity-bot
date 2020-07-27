const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === `${process.env.PREFIX}ping`) {
        msg.reply('pong!');
    } else if (msg.content == `${process.env.PREFIX}online`) {
        client.user.setPresence({
            activity: {
                name: "I'm online!",
                type: 'PLAYING'
            },
            status: 'online'
        })
            .then(msg.reply('I switched to **online** status!'))
            .catch(console.error);
    } else if (msg.content == `${process.env.PREFIX}streaming 1`) {
        client.user.setPresence({
            activity: {
                name: "I'm streaming 1!",
                type: 'STREAMING',
                url: 'https://www.twitch.tv/twitch'
            },
            status: 'online'
        })
            .then(msg.reply('I switched to **streaming 1** status!'))
            .catch(console.error);
    } else if (msg.content == `${process.env.PREFIX}streaming 2`) {
        client.user.setPresence({
            activity: {
                name: "I'm streaming 2!",
                type: 'STREAMING',
                url: 'https://www.twitch.tv/twitch'
            },
            status: 'online'
        })
            .then(msg.reply('I switched to **streaming 2** status!'))
            .catch(console.error);
    } else if (msg.content == `${process.env.PREFIX}none`) {
        client.user.setPresence({
            activity: {
                name: '',
                type: 'CUSTOM_STATUS'
            },
            status: 'online'
        })
            .then(msg.reply('I **reset** my status!'))
            .catch(console.error);
    } else if (msg.content == `${process.env.PREFIX}shutdown`) {
        client.destroy();
    }
});

client.login(process.env.TOKEN);
