bla = process.cwd()

var fs = require('fs')
var hx = require('hxz-api');
var axios = require('axios')
var zrapi = require('zrapi')
var jpeg = require('jpeg-js')
var gimage = require('g-i-s')
var yts = require('yt-search')
var multer = require('multer')
var Ddos = require('ddos')
var express = require('express')
var request = require('request');
var cheerio = require('cheerio');
var fetch = require('node-fetch')
var FormData = require('form-data')
var canvacord = require("canvacord")
var canvasx = require('discord-canvas')
var { fromBuffer } = require('file-type')
var aexm = require('@lolikillers/aexm-api');
var gerarnick = require('./lib/gerarnick.js')
var { mediafireDl } = require('./lib/mediafire.js');
var buffer = require('./lib/upload.js')
var exec = require('child_process').exec;
var { Maker } = require('imagemaker.js')
var download = require('@phaticusthiccy/open-apis')
var thiccysapi = require('textmaker-thiccy');
var { pinterest } = require('./lib/funções.js')
var { ytplay3 } = require('./lib/yt-down/lib/yt.js')
var trans = require('@vitalets/google-translate-api')

cors = require('cors')

const PORT = process.env.PORT || 3000
var { color } = require('./lib/color.js')
const {
  ytDonlodMp32,
  ytDonlodMp4,
  ytPlayMp42,
  ytSearch2
} = require("./lib/youtube");

//var knights = require("knights-canvas");
//"knights-canvas": "^1.0.0",
//var nsfw = require('nsfwjs')
//"nsfwjs": "^2.4.1",

var { ytMp3, ytMp4, ytPlay, ytPlayMp4, ytSearch} = require('./lib/yt.js')

var { ytMp3_2, ytMp4_2, ytPlay_2} = require('./youtubev2.js')

const { y2mateV, y2mateA} = require('./lib/y2mate');

const { aiovideodl, umma, ytPlay_3, wikimedia, ringtone, wallpaper} = require('./scraper-2.js');

const { ytDonlodMp3,  ytPlayMp3} = require('./youtube.js')

const { igstalk, hentaikk, pornhub, xvideos, uptodown, hentaistube, apkmodhacker, wiki, letra} = request('./api.js');

const { st, soundl } = request('./scraper.js');




var translate = (text, lang) => { return new Promise(async (resolve, reject) => { trans(text, { conn: 'gtx', to: lang }).then((res) => resolve(res.text)).catch((err) => reject(err)) });}

async function getBuffer(url) {
he = await fetch(url)
.then(c => c.buffer())
return he
}


var ddos = new Ddos({burst:4,limit:30,testmode:true,whitelist:['177.200.119.217']});

/////\\\\

var key = ["ale203", "key-expr"] 



/////\\\\
const router = express.Router();

var upload = multer()

var app = express()

app.use(cors())
app.set("json spaces",2)
app.use(express.static("public"))

////PAGINA INICIAL Q IRA REDIRECIONAR PRA /DOC
 
router.use(ddos.express);
router.get("/", (req,res,next) => {
console.log("Beep");
res.end("Boop");
})
app.use(router);
 
app.get('/api/keyerrada',(req, res) => {
apikey = req.query.apikey
if(!key.includes(apikey)) {
return res.json({status:false,msg:'apikey invalida, adquira a sua comigo : https://wa.me/558592492932'})
} else {
return res.json({status:false, msg:'Apikey Funcionando perfeitamente ✔️'})
}})


app.get('/welcome', async (req, res, next) => {
if (!req.query.titulo) return res.json({ status: 404, error: 'Insira o parametro: titulo'})
if (!req.query.nome) return res.json({ status: 404, error: 'Insira o parametro: nome'})
if (!req.query.perfil) return res.json({ status: 404, error: 'Insira o parametro: perfil'})
if (!req.query.fundo) return res.json({ status: 404, error: 'Insira o parametro: fundo'})
if (!req.query.grupo) return res.json({ status: 404, error: 'Insira o parametro: grupo'})

let welcomer = await new canvasx.Welcome()
.setUsername(req.query.nome)
.setDiscriminator("2022")
.setText("title", req.query.titulo)
.setText("message", req.query.grupo)
.setAvatar(req.query.perfil)
.setColor('border', '#00100C')
.setColor('username-box', '#00100C')
.setColor('discriminator-box', '#00100C')
.setColor('message-box', '#00100C')
.setColor('title', '#00FFFF')
.setBackground(req.query.fundo)
.toAttachment()
let base64 = `${welcomer.toBuffer().toString('base64')}`
require('fs').writeFileSync('welkom.png', base64, 'base64')
res.sendFile(bla+'/welkom.png')
})

app.get('/api/eletronica1.mp3', (req, res) => {
json = fs.readFileSync('./lib/audios/eletronica.mp3')
res.type('mp3')
res.send(json)
})

app.get('/lolis', (req, res) => {
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('lib/lolis.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/hentai', (req, res) => { //HENTAI
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('lib/hentai.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/onlyfans', (req, res) => {  //HENTAI
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('lib/onlyfans').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/porno', (req, res) => { //HENTAI
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('lib/porno.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/shota', (req, res) => {
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('lib/shotas.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/loli+18', (req, res) => {   //HENTAI
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('lib/nsfwlolis.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/akame', (req, res) => {
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('lib/akame.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/anya', (req, res) => {
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('lib/anya.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/asuna', (req, res) => {
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('lib/asuna.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/chizuru', (req, res) => {
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('lib/chizuru.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/hinata', (req, res) => {
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('lib/hinata.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/itsuki', (req, res) => {
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('lib/itsuki.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/kaguya', (req, res) => {
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('lib/kaguya.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/komi', (req, res) => {
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('lib/komi.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/megumin', (req, res) => {
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('lib/megumin.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/nagatoro', (req, res) => {
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('lib/nagatoro.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/naruto', (req, res) => {
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('lib/naruto.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/nekonsfw', (req, res) => {    //HENTAI
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('lib/nekonsfw.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/nezuko', (req, res) => {
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('lib/nezuko.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/sakura', (req, res) => {
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('lib/sakura.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})



app.get('/sakurajimi', (req, res) => {
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('lib/sakurajima.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/saycat', (req, res) => {
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('lib/saycat.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/suzuya', (req, res) => {
 apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'}) 
(async() => {
json = JSON.parse(fs.readFileSync('lib/suzuya.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/tanjiro', (req, res) => {
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('lib/tanjiro.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/trap', (req, res) => {      //HENTAI
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('lib/trap.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/Kawaii', (req, res) => {
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('lib/Kawaii.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/zerotwo', (req, res) => {
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('lib/zero.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/zoro', (req, res) => {
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('lib/zoro.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/aesthetic', (req, res) => {     //necessário 
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/aesthetic.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/ahegao', (req, res) => { //HENTAI
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/ahegao.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/akira', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/akira.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/akiyama', (req, res) => { 
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/akiyama.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/ana', (req, res) => { 
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/ana.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/caozinho', (req, res) => { //necessário
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/anjing.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/ass', (req, res) => { //HENTAI
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/ass.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/ayuzawa', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/ayuzawa.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/bdsm', (req, res) => { //HENTAI
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/bdsm.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/blowjob', (req, res) => { //HENTAI
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/blowjob.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/boruto', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/boruto.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/chiho', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/chiho.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/chitoge', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/chitoge.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/cosplay', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/cosplay.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/cosplayloli', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/cosplayloli.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/cosplaysagiri', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/cosplaysagiri.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/cuckold', (req, res) => { //hentai
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/cuckold.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/cum', (req, res) => { //hentai
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/cum.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/deidara', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/deidara.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/elaina', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/elaina.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/emilia', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/emilia.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/ero', (req, res) => { //hentai
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/ero.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/erza', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/erza.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/femdom', (req, res) => { //hentai
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/femdom.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/gamewallp', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/GameWallp.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/gangbang', (req, res) => { //hentai
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/gangbang.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/glasses', (req, res) => { //hentai
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/glasses.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})



app.get('/gremory', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/gremory.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/hestia', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/hestia.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/inori', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/inori.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/isuzu', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/isuzu.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})



app.get('/itachi', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/itachi.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/itori', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/itori.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/kaga', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/kaga.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/kagura', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/kagura.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/kakashi', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/kakashi.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/kaori', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/kaori.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})



app.get('/gatinho', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/kucing.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})



app.get('/madara', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/madara.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/manga', (req, res) => {  //hentai
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/manga.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/masturbation', (req, res) => { //hentai
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/masturbation.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/mikasa', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/mikasa.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})



app.get('/miku', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/miku.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/minato', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/minato.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/neko', (req, res) => { //hentai
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/neko.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})



app.get('/neko2', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/neko2.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/orgy', (req, res) => { //hentai
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/orgy.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/panties', (req, res) => { //hentai
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/panties.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/sagiri', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/sagiri.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/sasuke', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/sasuke.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/shina', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/shina.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/shinka', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/shinka.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/thighs', (req, res) => { //HENTAI
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/thighs.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/toukachan', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/toukachan.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/tsunade', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/tsunade.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/wallpaper1', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/wallhp.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/wallpaper2', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/wallhp2.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})



app.get('/wallpaperAnime', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/wallpaper.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})



app.get('/yotsuba', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/yotsuba.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


app.get('/yumeko', (req, res) => { 
  apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/yumeko.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})



app.get('/yuri', (req, res) => { //HENTAI
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/yuri.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/zettai', (req, res) => { //HENTAI
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
(async() => {
json = JSON.parse(fs.readFileSync('data/zettai.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})




app.get('/api/pinterest', (req, res) => {
(async() => {
apikey = req.query.apikey
text = req.query.text
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
if (!text) return res.json({ status : false, creator : `Aleatory Ofc`, message : "Cade o parametro text?"})
pin = await pinterest(text)
ac = pin[Math.floor(Math.random() * pin.length)]
res.type('jpg')
res.send(await getBuffer(ac))
})()
})

app.get('/api/test5', async (req, res) => {
text = req.query.text
if(!text) return res.json({msg: 'Cade o parametro text?'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
download.glowtext({text: text, font_style: "discodiva", font_size: "s"})
.then(async (data) => {
res.send(data)
});
})

app.get('/api/fazernick', async (req, res) => {
apikey = req.query.apikey  
let nome = req.query.nome || res.json({msg: 'insira o parâmetro: ?nome='})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
await gerarnick(nome)
.then(nicks => {
res.send(nicks) 
})
})

app.get('/api/facebook', async (req, res, next) => {
apikey = req.query.apikey
link = req.query.link
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
if (!link) return res.json({ status : false, creator : `you love`, message : "Cade o parametro link?"})
fbdown(link)
.then(data => {
var resultado = data;
res.json({
resultado
})
})
.catch(e => {
console.log(e);
res.json(e)
})
})

app.get('/api/instagram', async (req, res, next) => {
apikey = req.query.apikey
url = req.query.url
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
if (!url) return res.json({ status : false, creator : `Aleatory Ofc`, message : "Cade o parametro url?"})
aexm.igdl(url)
.then(data => {
var resultado = data;
res.json({
resultado
})
})
.catch(e => {
console.log(e);
res.json(e)
})
})

app.get('/api/mediafire', async (req, res, next) => {
apikey = req.query.apikey
url = req.query.url
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
if (!url) return res.json({ status : false, creator : `Aleatory Ofc`, message : "Cade o parametro url?"})
mediafireDl(url)
.then(data => {
var resultado = data;
res.json({
resultado
})
})
.catch(e => {
console.log(e);
res.json(e)
})
})

app.get('/api/wallpaper',(req,res) => {
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
gimage(`Wallpaper`, async (error, results) => {
if (error) {
console.log(error)
res.json({
status:false,
msg:'Não encontrei imagem'
})
} else {
bala = await getBuffer(results[1].url)
res.type('jpg')
res.send(bala)
}
})
})

app.get('/api/twitter', async (req, res, next) => {
apikey = req.query.apikey
link = req.query.link
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
if (!link) return res.json({ status : false, creator : `Aleatory Ofc`, message : "Cade o parametro link?"})
aexm.twitter(link)
.then(data => {
var resultado = data;
res.json({
resultado
})
})
.catch(e => {
console.log(e);
res.json(e)
})
})



app.get('/api/tiktok-2', async (req, res, next) => {
apikey = req.query.apikey
url = req.query.url
if (!url) return res.json({ status : false, creator : `Aleatory Ofc`, message : "Cade o parametro url?"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
download.tiktok(url).then(data => {
var resultado = data;
res.json({
resultado
})
})
.catch(e => {
console.log(e);
res.json(e)
})
})

// LOGOS 2 TEXTO

app.get('/api/marvel', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/pornhub', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/space',  async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!texto2) return res.json({status:false,msg:'cade o parametro texto2'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/stone', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/create-a-stone-text-effect-online-982.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/steel', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/3d-steel-text-effect-877.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/grafity', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/glitch3', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/america', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/create-a-captain-america-text-effect-free-online-1039.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})


// LOGOS 1 TEXTO

app.get('/api/angelwing', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().Ephoto360("https://en.ephoto360.com/create-colorful-angel-wing-avatars-731.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/hackneon', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().Ephoto360("https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/fpsmascote', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().Ephoto360("https://en.ephoto360.com/free-gaming-logo-maker-for-fps-game-team-546.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/equipemascote', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().Ephoto360("https://en.ephoto360.com/make-team-logo-online-free-432.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/txtquadrinhos', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().Ephoto360("https://en.ephoto360.com/boom-text-comic-style-text-effect-675.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/ffavatar', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().Ephoto360("https://en.ephoto360.com/create-free-fire-avatar-online-572.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/ffbanner', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!texto2) return res.json({msg: "Cade o parametro texto2"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().Ephoto360("https://en.ephoto360.com/make-your-own-free-fire-youtube-banner-online-free-562.html", [`${texto}`, `${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/mascotegame', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().Ephoto360("https://en.ephoto360.com/create-a-gaming-mascot-logo-free-560.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/mascoteavatar', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!texto2) return res.json({msg: "Cade o parametro texto2"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().Ephoto360("https://en.ephoto360.com/create-logo-avatar-mascot-style-364.html", [`${texto}`, `${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/wingeffect', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().Ephoto360("https://en.ephoto360.com/the-effect-of-galaxy-angel-wings-289.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/angelglx', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().Ephoto360("https://en.ephoto360.com/wings-galaxy-206.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/gizquadro', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().Ephoto360("https://en.ephoto360.com/writing-chalk-on-the-blackboard-30.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/blackpink', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().Ephoto360("https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/girlmascote', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().Ephoto360("https://en.ephoto360.com/create-cute-girl-gamer-mascot-logo-online-687.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/logogame', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().Ephoto360("https://en.ephoto360.com/create-logo-team-logo-gaming-assassin-style-574.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/romantic', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/fire', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/smoke', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/papel', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/narutologo', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/lovemsg', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/lovemsg2', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/lovemsg3', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/love-text-effect-372.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/coffecup', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/coffecup2', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/florwooden', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/writing-on-wooden-boards-368.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/madeira', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/carved-wood-effect-online-171.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/gameplay', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!texto2) return res.json({msg: "Cade o parametro texto2"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/8-bit-text-on-arcade-rift-175.html", [`${texto}`, `${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/googlesg', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
texto3 = req.query.texto3;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!texto2) return res.json({msg: "Cade o parametro texto2"})
if(!texto3) return res.json({msg: "Cade o parametro texto3"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/other-design/make-google-suggestion-photos-238.html", [`${texto}`, `${texto2}`, `${texto3}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/neon2', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/lobometal', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/harryp', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/cup', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/txtborboleta', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/butterfly-text-with-reflection-effect-183.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/shadow', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/cemiterio', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/metalgold', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/other-design/create-metallic-text-glow-online-188.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/efeitoneon', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/transformer', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/glitch2', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/glitch', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!texto2) return res.json({status:false,msg:'cade o parametro texto2'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [`${texto}`, `${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})


app.get('/api/lapis', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/3dgold', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/halloween', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/halloween-fire-text-effect-940.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/lava', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/lava-text-effect-online-914.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/toxic', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/toxic-text-effect-online-901.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/demongreen', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/metalfire', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/hot-metal-text-effect-843.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/thunder', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/create-thunder-text-effect-online-881.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/thunderv2', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/neongreen', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/green-neon-text-effect-874.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/neon', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/neon1', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/free-advanced-glow-text-effect-873.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/neon3d', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/rainbow', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

app.get('/api/gelo', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
zrapi.textpro("https://textpro.me/ice-cold-text-effect-862.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `_Youht_Dev_`,
resultado: data
})})
.catch((err) =>
console.log(err));
})

// FIM LOGOS


app.get('/canvas/trigger',(req, res) => {
(async() => {
url = req.query.url
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
res.type('gif')
res.send(await canvacord.Canvas.trigger(url))
})() 
})

app.get('/canvas/phub',(req, res) => {
(async() => {
nome = req.query.nome
msg = req.query.msg
foto = req.query.foto
if (!foto) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
if (!msg) return res.status(408).send({ status: 408, menssagem: 'Coloque a msg no parametrô'})
if (!nome) return res.status(408).send({ status: 408, menssagem: 'Coloque o nome no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
bla = { username: nome, message: msg, image:foto}
res.type('jpg')
res.send(await canvacord.Canvas.phub(bla))
})()
})

app.get('/canvas/youtube',(req, res) => {
(async() => {
nome = req.query.nome
msg = req.query.msg
foto = req.query.foto
if (!foto) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
if (!msg) return res.status(408).send({ status: 408, menssagem: 'Coloque a msg no parametrô'})
if (!nome) return res.status(408).send({ status: 408, menssagem: 'Coloque o nome no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
bla = { username: nome, content: msg, avatar: foto, dark:false }
res.type('jpg')
res.send(await canvacord.Canvas.youtube(bla))
})()
})

app.get('/canvas/wasted',(req, res) => {
(async() => {
url = req.query.url
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
res.type('jpg')
res.send(await canvacord.Canvas.wasted(url))
})()
})

app.get('/canvas/invert',(req, res) => {
(async() => {
url = req.query.url
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
res.type('jpg')
res.send(await canvacord.Canvas.invert(url))
})()
})

app.get('/canvas/lgbt',(req, res) => {
(async() => {
url = req.query.url
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
res.type('jpg')
res.send(await canvacord.Canvas.rainbow(url))
})()
})

app.get('/canvas/procurado',(req, res) => {
(async() => {
url = req.query.url
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
res.type('jpg')
res.send(await canvacord.Canvas.wanted(url))
})()
})


app.get('/canvas/delete',(req, res) => {
(async() => {
url = req.query.url
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
res.type('jpg')
res.send(await canvacord.Canvas.delete(url))
})()
})

app.get('/canvas/hitler',(req, res) => {
(async() => {
 url = req.query.url
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
res.type('jpg')
res.send(await canvacord.Canvas.hitler(url))
})()
})

app.get('/canvas/trash',(req, res) => {
(async() => {
url = req.query.url
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
res.type('gif')
res.send(await canvacord.Canvas.trash(url))
})()
})

app.get('/canvas/shit',(req, res) => {
(async() => {
url = req.query.url
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
res.type('jpg')
res.send(await canvacord.Canvas.shit(url))
})()
})

app.get('/canvas/blur',(req, res) => {
(async() => {
 url = req.query.url
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
res.type('jpg')
res.send(await canvacord.Canvas.blur(url))
})()
})

app.get('/canvas/rip',(req, res) => {
(async() => {
url = req.query.url
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
res.type('jpg')
  res.send(await canvacord.Canvas.rip(url))
})()
})

app.get('/canvas/jail',(req, res) => {
(async() => {
 url = req.query.url
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
res.type('jpg')
res.send(await canvacord.Canvas.jail(url))
})()
})

app.get('/canvas/kiss',(req, res) => {
(async() => {
 url = req.query.url
url2 = req.query.url2
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
if (!url2) return res.status(408).send({ status: 408, menssagem: 'Coloque a url2 no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
  res.type('jpg')
  res.send(await canvacord.Canvas.kiss(url, url2))
})()
})

app.get('/about',(req, res) => {
res.json({
status:true,
dono:'_Youht_Dev_ </>',
msg:'Projeto em beta'
})
})

app.get('/api/playstore',(req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
msg:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
down.playstore(q)
.then(e => {
res.json({
status:true,
criador: '_Youht_Dev_ </>',
resultados: e
})
})
})

app.get('/api/telegraph',(req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
msg:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
buffer(q)
.then(e => {
res.json({
status:true,
criador: '_Youht_Dev_ </>',
resultados: e
})
})
})

app.get('/api/ttp',  async (req, res) => {
texto = req.query.texto
if(!texto)return res.json({
status:false,
msg:'Cade o parametro texto??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
cor = ["f702ff","ff0202","00ff2e","efff00","00ecff","3100ff","ffb400","ff00b0","00ff95","efff00"] //CORES COLOQUE QUALQUER UMA MAS EM CODE
fonte = ["Days%20One","Domine","Exo","Fredoka%20One","Gentium%20Basic","Gloria%20Hallelujah","Great%20Vibes","Orbitron","PT%20Serif","Pacifico"]//FONTS NÃO MEXA
cores = cor[Math.floor(Math.random() * (cor.length))]	 				 
fontes = fonte[Math.floor(Math.random() * (fonte.length))]	 		
sitee = `https://huratera.sirv.com/PicsArt_08-01-10.00.42.png?profile=Example-Text&text.0.text=${texto}&text.0.outline.color=000000&text.0.outline.blur=0&text.0.outline.opacity=55&text.0.color=${cores}&text.0.font.family=${fontes}&text.0.background.color=ff0000`
res.type('jpg')
res.send(await getBuffer(sitee))
})

app.get('/api/fbdown',(req,res) => {
url = req.query.url
if(!url)return res.json({
status:false,
msg:'Cade o parametro url??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
down.fbdown(url)
.then(e => {
res.json({
status:true,
criador: '_Youht_Dev_',
resultado: e})
})
})

app.get('/api/photooxy',(req,res) => {
url = req.query.url
text = req.query.text
if(!url)return res.json({
status:false,
msg:'Cade o parametro url??'
})
if(!text)return res.json({
status:false,
msg:'Cade o parametro text??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
photooxy(url, text)
.then(e => {
res.json({
status:true,
criador: '_Youht_Dev_',
resultado: e})
})
})


app.get('/api/gimage',(req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
msg:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
gimage(q, async (error, results) => {
if (error) {
console.log(error)
res.json({
status:false,
msg:'Não encontrei imagem'
})
} else {
bala = await getBuffer(results[1].url)
res.type('jpg')
res.send(bala)
}
})
})

app.get('/api/wallpaperanime',(req,res) => {
apikey = req.query.apikey
q = 'Wallpaper anime'
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
gimage(q, async (error, results) => {
if (error) {
console.log(error)
res.json({
status:false,
msg:'Não encontrei imagem'
})
} else {
bala = await getBuffer(results[1].url)
res.type('jpg')
res.send(bala)
}
})
})

app.get('/api/ssweb',async (req,res,next) => {
url = req.query.url
if(!url)return res.json({
status:false,
motivo:'nao_tem_url'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
fetch('https://mnazria.herokuapp.com/api/screenshotweb?url='+url, async(error, results) => {
if(error){
console.log(error)
res.json({
status:false,
msg:'Não encontrei o site'
})
} else { 
resultado = results
bala = await getBuffer(resultado.gambar)
res.type('jpg')
res.send(bala)
}
})
})

app.get('/api/avatar',(req,res,next) => {
fetch(encodeURI(`https://nekos.life/api/v2/img/avatar`))
.then(response => response.json())
.then(async (data) => {
resultado =  data
bala = await getBuffer(resultado.url)
res.type('jpg')
res.send(bala)
})
.catch(e => {
res.json({erro:'erro'})
})
})

app.get('/api/legenda',async (req,res,next) => {
url = req.query.url
texto1 = req.query.texto1
texto2 = req.query.texto2
if(!url)return res.json({
status:false,
motivo:'nao_tem_url'
})
if(!texto1)return res.json({
status:false,
motivo:'nao_tem_texto_1'
})
if(!texto2)return res.json({
status:false,
motivo:'nao_tem_texto_2'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
bala = await getBuffer(`https://api.memegen.link/images/custom/${texto1}/${texto2}.png?background=${url}`)
res.type('jpg')
res.send(bala)
})

app.get('/api/github',(req,res,next) => {
pessoa = req.query.usuario
if(!pessoa)return res.json({
status:false,
motivo:'cade_o_usuario'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
fetch(encodeURI(`https://api.github.com/users/`+pessoa))
.then(response => response.json())
.then(date => {
gitData =  date;
res.json({
criador:"_Youht_Dev_",
status:true,
resultado:{
username: gitData.login,
id: gitData.id,
Node_ID: gitData.node_id,
url: gitData.html_url,
local: (gitData.location == null) ? 'não_tem' : gitData.location,
bio: (gitData.bio == null) ? 'não_tem' : gitData.bio,
twitter:  (gitData.twitter_username == null) ? 'não_tem' : gitData.twitter_username,
seguidores: gitData.followers,
seguindo: gitData.following,
criado: gitData.created_at,
atualizado: gitData.updated_at,
procura_trabalho: (gitData.hireable == null) ? 'Não' : gitData.hireable,
Site: (gitData.blog == "") ? 'Não' : gitData.blog,
repositorios: gitData.public_repos,
admin_de_Site: (gitData.site_admin == false) ? 'Não' : gitData.site_admin,
tipo: gitData.type,
empresa: (gitData.company == null) ? 'Não' : gitData.company,
email: (gitData.email == null) ? 'Não' : gitData.email
} 
})
})
.catch(e => {
res.json({erro:e})
})
})

app.get('/api/tradutor',(req,res) => {
lang = req.query.lang
text = req.query.text
if(!lingua)return res.json({
status:false,
msg:'Cade o parametro lang??'
})
if(!text)return res.json({
status:false,
msg:'Cade o parametro texto??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
translate(text, lang)
.then(re => {
    res.json({
status:true,
criador:'_Youht_Dev_ </>',
traducao: re
    })
}).catch(err => {
    console.error(err);
})
})







//////YTS

app.get('/api/play', async (req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
msg:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
ytPlay(q)
.then(e => {
res.json(e)
})
})

app.get('/api/playv1', async (req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
msg:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
ytPlay_2(q)
.then(e => {
res.json(e)
})
})

app.get('/api/playv2', async (req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
msg:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
ytPlay_3(q).then(res => {
res.send(res)
})
})

app.get('/api/playmp4',(req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
msg:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
ytPlayMp4(q)
.then(e => {
res.json({
status:true,
criador:'_Youht_Dev_</>',
resultado:e
})
})
})

app.get('/api/playmp4-2',(req,res) => {
link = req.query.link
if(!link)return res.json({
status:false,
msg:'Cade o parametro link??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
hx.youtube(link)
.then(e => {
res.json({
status:true,
criador:'_Youht_Dev_</>',
resultado:e
})
})
})

app.get('/api/ytsrc',(req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
msg:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
ytSearch(q)
.then(e => {
res.json({
status:true,
criador:'_Youht_Dev_</>',
resultado:e
})
})
})

app.get('/api/ytMp4',(req,res) => {
url = req.query.url
if(!url)return res.json({
status:false,
msg:'Cade o parametro url??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
ytMp4(url)
.then(e => {
res.json({
status:true,
criador:'_Youht_Dev_</>',
resultado:e
})
})
})


app.get('/api/ytMp3',(req,res) => {
url = req.query.url
if(!url)return res.json({
status:false,
msg:'Cade o parametro url??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
ytMp3(url)
.then(e => {
res.json({
status:true,
criador:'_Youht_Dev_</>',
resultado:e
})
})
})

app.get('/api/ytMp3_2',(req,res) => {
url = req.query.url
if(!url)return res.json({
status:false,
msg:'Cade o parametro url??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
aiovideodl(url)
.then(e => {
res.json({
status:true,
criador:'_Youht_Dev_</>',
resultado:e
})
})
})

app.get('/api/ytmp3-2', async (req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
msg:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
y2mateA(q).then(e => {
res.json(e)
})
})

app.get('/api/ytmp4-2', async (req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
msg:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
y2mateV(q).then(e => {
res.json(e)
})
})


app.get('/api/download/ytmp3', async(req, res, next) => {
 apikey = req.query.apikey
 link = req.query.link          
if(!apikey)return res.json({status:false,msg:'cade o paramento apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
 if (!link) return res.json({ status : false, criador : `𓅓➪☕︎Տͥamuël𝚝al✞☜︎︎︎`, mensagem : "Coloque o link"})
 ytDonlodMp32(link).then((akk) => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: akk
})}).catch(e => {
res.sendFile(error)})})


router.get('/api/download/ytmp4', async(req, res, next) => {
 apikey = req.query.apikey
 link = req.query.link          
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
 if (!link) return res.json({ status : false, criador : `𓅓➪☕︎Տͥamuël𝚝al✞☜︎︎︎`, mensagem : "Coloque o link"})
 ytDonlodMp4(link).then((akk) => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: akk
})}).catch(e => {
res.sendFile(error)})})



app.get('/api/download/play', async(req, res, next) => {
  apikey = req.query.apikey
 nome = req.query.nome
 if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
 if (!nome) return res.json({ status : false, criador : `𓅓➪☕︎Տͥamuël𝚝al✞☜︎︎︎`, mensagem : "Coloque o nome"})
 ytPlayMp3(nome).then((akk) => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: akk
})}).catch(e => {
res.sendFile(error)})})



app.get('/api/download/playv', async(req, res, next) => {
 apikey = req.query.apikey
 nome = req.query.nome
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
 if (!nome) return res.json({ status : false, criador : `𓅓➪☕︎Տͥamuël𝚝al✞☜︎︎︎`, mensagem : "Coloque o nome"})
 ytPlayMp4(nome).then((akk) => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: akk
})}).catch(e => {
res.sendFile(error)})})


app.get('/api/igstalk', async(req, res, next) => {
 apikey = req.query.apikey
 nome = req.query.nome
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
 if (!nome) return res.json({ status : false, criador : `𓅓➪☕︎Տͥamuël𝚝al✞☜︎︎︎`, mensagem : "Coloque o perfil"})
 igstalk(nome).then((res) => {
res.json({
criador: '𓅓➪☕︎Տͥamuël𝚝al✞☜︎︎︎',
status: 'online',
code: 200,
nome: res.username,
nome_todo: res.full_name,
verificado: res.is_verified,
videos: res.highlight_reel_count,
seguidores: res.edge_followed_by.count,
seguindo: res.edge_follow.count,
conta_business: res.is_business_account,
conta_profissional: res.is_professional_account,
categoria: res.category_name,
capa: res.profile_pic_url_hd,
bio: res.biography,
info_conta: data.seo_category_infos
})}).catch(e => {
res.sendFile(error)})})



app.get('/api/hentaikk', async(req, res, next) => {
 apikey = req.query.apikey
 nome = req.query.nome
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
 if (!nome) return res.json({ status : false, criador : `𓅓➪☕︎Տͥamuël𝚝al✞☜︎︎︎`, mensagem : "Coloque o nome"})
 hentaikk(nome).then((res) => {
res.json({
titulo: res.titulo,
img: res.img,
gif: res.gif
})}).catch(e => {
res.sendFile(error)})})



app.get('/api/soundl', async(req, res, next) => {
 apikey = req.query.apikey
 nome = req.query.nome
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'apikey invalida'})
 if (!nome) return res.json({ status : false, criador : `𓅓➪☕︎Տͥamuël𝚝al✞☜︎︎︎`, mensagem : "Coloque o link"})
 hentaikk(link).then((res) => {
res.json({
titulo: res.titulo,
total_downloads:res,
capa:res,
link_dl:res
})}).catch(e => {
res.sendFile(error)})})






////FUNÇAO DE PAGINA Q NAO TEM FUNÇÃO SOBRE ELA
app.get('*', function(req, res) {
res.status(404).json({
status:false,
msg: 'PAGINA NÃO ENCONTRADA'
})
})
 
//////MOSTRA SE O APP FOI ABERTO
app.listen(PORT, () => {
console.log('App aberto na porta: ' + PORT)
})


module.exports = app