

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: djpradeepkumawat" //ur yt chanel name
global.socialm = "GitHub: itspradeep_kmt" //ur github or insta name
global.location = "India, Rajasthan, Jaipur" //ur location

//new
global.botname = '🅟🅡🅐🅓🅔🅔🅟 🅑🅞🅣' //ur bot name
global.ownernumber = ['917073837465'] //ur owner number, dont add more than one
global.ownername = '🅟🅡🅐🅓🅔🅔🅟 🅑🅞🅣' //ur owner name
global.websitex = "https://youtube.com/djpradeepkumawat"
global.wagc = "https://chat.whatsapp.com/EahiUgnSRTy8WgxaMXsR3T"
global.themeemoji = '🪀'
global.wm = "🅟🅡🅐🅓🅔🅔🅟 🅑🅞🅣."
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD15' //script link
global.packname = "🅟🅡🅐🅓🅔🅔🅟 🅑🅞🅣"
global.author = "🅟🅡🅐🅓🅔🅔🅟 🅑🅞🅣\n\n+6289653858443"
global.creator = "6289653858443@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["6289653858443"] // Premium User

//channel id
global.xchannel = {
	jid: '120363319098372999@newsletter'
	}

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '92' //set anti foreign number country code

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
