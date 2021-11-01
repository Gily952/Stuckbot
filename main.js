const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-'

client.once('ready', () => {
    console.log('Gilybot is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === "hey"){
        message.channel.send('Go fuck yourself!');
    }

    if(command === 'abby'){
        message.channel.send('Gamer speed!');
    }

    if(command === 'rickroll'){
        message.channel.send('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }

    if(command === 'grant'){
        message.channel.send('Die');
    }

    if(command === 'boys'){
        message.channel.send('Boys');
    }
});

client.login('NzI5NDI5NDA1NjU4Nzc1NjYy.XwI0Eg.P00wkf8sX9_xoAt44Uf4VRsdjI8');
