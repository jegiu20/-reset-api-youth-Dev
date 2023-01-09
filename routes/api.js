__path = process.cwd()

// Jan asal ubah ngab
var express = require('express');
var db = require(__path + '/database/db');
try {
var kuhong = db.get('ojan'); // jan diubah
} catch (e) {
	console.log('WELCOME TO ZyxMapLe API!') // boleh diubah
}

var creatorList = ['@BRENO']; // Nama Lu Ngab
var creator = creatorList[Math.floor(Math.random() * creatorList.length)]; // Ini jan diubah
var key = 'akame' // Apikey Lu Ngab
const listkey = ["akame", "sayoez"];

// Required Modules :
var ffmpeg = require('fluent-ffmpeg');
var brainly = require('brainly-scraper-v2');
var imageToBase64 = require('image-to-base64');
var upload = require(__path + '/lib/upload.js');
var axios = require('axios');
var FormData = require('form-data');
var ytdl = require('ytdl-core');
var ytpl = require('ytpl');
var qrcode = require('qrcode');
var secure = require('ssl-express-www');
var cors = require('cors');
var scrapeYt = require('scrape-yt');
var gtts = require('node-gtts');
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var TikTokScraper = require('tiktok-scraper');
var yts = require('yt-search');
var fs = require('fs');
var zrapi = require("zrapi");
var knights = require('knights-canvas');
var kanpas = require('kanvas-wea');
var yuricanvas = require("yuri-canvas");
var DIG = require('discord-image-generation');
var Caxinha = require('caxinha');
var canvas = require('canvas');
var util = require('util');
var router  = express.Router();

var { tts, wait, simih, getBuffer, h2k, banner, getRandom, start, info, success, close, pickRandom } = require(__path + '/lib/functions.js');
var { RemoveBg } = require('remove.bg');
var { tahta } = require(__path + '/lib/tahta.js');
var { createHash } = require('crypto')
var { spawn, exec } = require('child_process');
var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js')
var { recognize } = require(__path + '/lib/ocr.js')
var options = require(__path + '/lib/options.js');
var { Vokal, Base, Searchnabi, Gempa } = require('./../lib');
var cookie = "HSID=A7EDzLn3kae2B1Njb;SSID=AheuwUjMojTWvA5GN;APISID=cgfXh13rQbb4zbLP/AlvlPJ2xBJBsykmS_;SAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;__Secure-3PAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;VISITOR_INFO1_LIVE=RgZLnZtCoPU;LOGIN_INFO=AFmmF2swRQIhAOXIXsKVou2azuz-kTsCKpbM9szRExAMUD-OwHYiuB6eAiAyPm4Ag3O9rbma7umBK-AG1zoGqyJinh4ia03csp5Nkw:QUQ3MjNmeXJ0UHFRS3dzaTNGRmlWR2FfMDRxa2NRYTFiN3lfTEdOVTc4QUlwbUI4S2dlVngxSG10N3ZqcHZwTHBKano5SkN2dDlPSkhRMUtReE42TkhYeUVWS3kyUE1jY2I1QzA1MDZBaktwd1llWU9lOWE4NWhoZV92aDkxeE9vMTNlcG1uMU9rYjhOaDZWdno2ZzN3TXl5TVNhSjNBRnJaMExrQXpoa2xzRVUteFNWZDI5S0Fn;PREF=app=desktop&f4=4000000&al=id;SID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1njBpLTOpxSfN-EaYCRSiDg.;YSC=HCowA1fmvzo;__Secure-3PSID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1dajgWzlBh9TgKapGOwuXfA.;SIDCC=AJi4QfFK0ri9fSfMjMQ4tOJNp6vOb9emETXB_nf2S05mvr2jBlmeEvlSsQSzPMuJl_V0wcbL1r8;__Secure-3PSIDCC=AJi4QfGeWHx-c4uTpU1rXCciO1p0s2fJWU07KrkZhWyD1Tqi8LyR-kHuBwHY9mViVYu1fRh2PA";
var {
  ytDonlodMp3,
  ytDonlodMp4,
  ytPlayMp3,
  ytPlayMp4,
  ytSearch
} = require("./../lib/utils/yt");

// loghandler :
loghandler = {
    notparam: {
        status: false,
        criador: `${creator}`,
        código: 406,
        menssagem: 'Insira a apikey'
    },
    notnama: {
        status: false,
        criador: `${creator}`,
        código: 406,
        menssagem: 'Insira o nome'
    },
    notimg: {
        status: false,
        criador: `${creator}`,
        código: 406,
        menssagem: 'Insira a img'
    },
    notemoji: {
        status: false,
        criador: `${creator}`,
        código: 406,
        menssagem: 'Insira o emoji'
    },
    notangka: {
        status: false,
        criador: `${creator}`,
        código: 406,
        menssagem: 'Insira os números'
    },
    notnomor: {
        status: false,
        criador: `${creator}`,
        código: 406,
        menssagem: 'Insira o número'
    },
    notjumlah: {
        status: false,
        criador: `${creator}`,
        código: 406,
        menssagem: 'Insira a quantidade'
    },
    notkey: {
        status: false,
        criador: `${creator}`,
        código: 406,
        menssagem: 'Insira a key'
    },
    noturl: {
        status: false,
        criador: `${creator}`,
        código: 406,
        menssagem: 'Insira a url'
    },
    notquery: {
        status: false,
        criador: `${creator}`,
        código: 406,
        menssagem: 'Insira a msg'
    },
    notkata: {
        status: false,
        criador: `${creator}`,
        código: 406,
        menssagem: 'Insira o parâmetro da palavra'
    },
    notlang: {
        status: false,
        criador: `${creator}`,
        código: 406,
        menssagem: 'Insira o código do país'
    },
    nottext: {
        status: false,
        criador: `${creator}`,
        código: 406,
        menssagem: 'Coloque o parâmetro no text="parâmetro"'
    },
    nottext2: {
        status: false,
        criador: `${creator}`,
        código: 406,
        menssagem: 'Coloque o parâmetro no text2="parâmetro"'
    },
    notnabi: {
        status: false,
        criador: `${creator}`,
        código: 406,
        menssagem: 'Insira o nabi'
    },
    nottext3: {
        status: false,
        criador: `${creator}`,
        código: 406,
        menssagem: 'Coloque o parâmetro no text3="parâmetro"'
    },
    nottheme: {
        status: false,
        criador: `${creator}`,
        código: 406,
        menssagem: 'Insira o tema'
    },
    notusername: {
        status: false,
        criador: `${creator}`,
        código: 406,
        menssagem: 'Insira o nome de usuário'
    },
    notvalue: {
        status: false,
        criador: `${creator}`,
        código: 406,
        menssagem: 'Insira o valor'
    },
    notheme: {
    	status: false,
        criador: `${creator}`,
        código: 406,
        menssagem: 'Tema não encontrado'
     },
    invalidKey: {
        status: false,
        criador: `${creator}`,
        código: 406,
        menssagem: `Apikey inválida fale com o breno para obter uma`
    },
    invalidLink: {
        status: false,
        criador: `${creator}`,
        menssagem: 'Coloque um link válido!'
    },
    invalidkata: {
        status: false,
        criador: `${creator}`,
        menssagem: 'Palavra inválida'
    },
    invalidtext: {
    	status: false,
        criador: `${creator}`,
        menssagem: 'Texto inválido'
    },
    notAddApiKey: {
        status: false,
        criador: `${creator}`,
        código: 406,
        menssagem: 'OFF'
    },
    notbase64: {
        status: false,
        criador: `${creator}`,
        código: 406,
        menssagem: 'Insira o texto para a base64'
    },
    number: {
        status: false,
        criador: `${creator}`,
        código: 406,
        menssagem: 'O texto deve ser um número!'
    },
    error: {
        status: false,
        criador: `${creator}`,
        menssagem: 'Erro!  Talvez em reparo'
    }
}

var error = __path + '/views/error.html' // Error
var invalidKey = __path + '/views/invalidKey.html' // Apikey Invalid

// Api Features :
        var len = 15
        var arr = '123456789abcdefghijklmnopqrstuvwxyz'
        var random = '';

        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }

        var lenn = 5
        var randomlagi = '';

        for (var i = lenn; i > 0; i--) {
            randomlagi += arr[Math.floor(Math.random() * arr.length)];
        }

        var randomTextNumber = random+randomlagi+'---------kuhong-api-storage'+'ojan';


router.get('/cekapikey', async (req, res, next) => {
    var apikeyInput = req.query.apikey;

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
	var limit = 'undefined'
        if (apikeyInput == `${key}`) { limit = 'Unlimited!' }

try {
	res.json({
               status : `online`,
                apikey : apikeyInput,
                limit : limit
            })
 
} catch (e) {
	res.sendFile(error)
   }
})

router.get('/changekey', (req, res, next) => {
    var apikeyInput = req.query.apikey;

    if (!apikeyInput) return res.json(loghandler.notparam)
    if (apikeyInput !== `${key}`) return res.sendFile(invalidKey)

    try {
        kuhong.insert({
            apikey: apikeyInput
        })
        .then(() => {
              res.json({
                  status: true,
                  result: `Apikey "${apikeyInput}" Berhasil ditambahkan!`
              })
        })
    } catch (e) {
        console.log(e)
        res.sendFile(error)
    }
})


router.get('/removekey', (req, res, next) => {
    var apikeyInput = req.query.apikey;

    if (!apikeyInput) return res.json(loghandler.notparam)
    if (apikeyInput !== `${key}`) return res.sendFile(invalidKey)

    try {
        kuhong.remove({
            apikey: apikeyInput
        })
        .then(() => {
             res.json({
                  status: true,
                  result: `Apikey "${apikeyInput}" Berhasil dihapus!`
              })
        })
    } catch (e) {
        console.log(e)
        res.sendFile(error)
    }
})

router.get('/tiktod', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url


	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
     if (!url) return res.json(loghandler.noturl)

     TikTokScraper.getVideoMeta(url, options)
         .then(vid => {
             console.log(vid)
             res.json({
                 status: true,
                 criador: `${creator}`,
                 videoNoWm: vid
             })
         })
         .catch(e => {
             res.json(loghandler.invalidLink)
         })
})

router.get('/tiktod/stalk', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        username = req.query.username

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!username) return res.json(loghandler.notusername)


    TikTokScraper.getUserProfileInfo(username)
        .then(user => {
            res.json({
                status : true,
                criador : `${creator}`,
                resultado : user
            })
        })
        .catch(e => {
             res.json({
                 status : false,
                 criador : `${creator}`,
                 messagem : "Nome invalido!"
             })
         })
})

router.get('/randomquote', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://api.zeks.xyz/api/quote?apikey=alpin1234567`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})

//CANVAS.

router.get('/canvas/bemvindo', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            nome = req.query.nome,
            nomegp = req.query.nomegp,
            membros = req.query.membros,
            perfil = req.query.perfil,
            fundo = req.query.fundo            

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!nome) return res.json({ status : false, criasor : `${creator}`, message : "coloque o parametrô nome"})
    if (!nomegp) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô nomedogp"})
    if (!membros) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô membros"})
    if (!perfil) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô perfil"})
    if (!fundo) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô fundo"})
       
var image = await new knights.Welcome2()
    .setAvatar(`${perfil}`)
    .setUsername(`${nome}`) 
    .setBg(`${fundo}`) 
    .setGroupname(`${nomegp}`) 
    .setMember(`${membros}`) 
    .toAttachment();
    
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/bemvindo.png', data)
  res.sendFile(__path +'/tmp/bemvindo.png')
  .catch(e => {
         	res.sendFile(error)
})
})

router.get('/canvas/adeus', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            nome = req.query.nome,
            membros = req.query.membros,
            perfil = req.query.perfil,
            fundo = req.query.fundo           

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!nome) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô nome"})
    if (!membros) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô membros"})
    if (!perfil) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô perfil"})
    if (!fundo) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô fundo"})
       
var image = await new knights.Goodbye2()
    .setAvatar(`${perfil}`)
    .setUsername(`${nome}`) 
    .setBg(`${fundo}`) 
    .setMember(`${membros}`) 
    .toAttachment();
    
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/adeus.png', data)
  res.sendFile(__path +'/tmp/adeus.png')
  .catch(e => {
         	res.sendFile(error)
})
})

router.get('/canvas/bemvindo2', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            nome = req.query.nome,
            nomegp = req.query.nomegp,
            fotogp = req.query.fotogp,
            membros = req.query.membros,
            perfil = req.query.perfil,
            fundo = req.query.fundo


	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!nome) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô nome"})
    if (!nomegp) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô nomegp"})
    if (!membros) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô membros"})
    if (!fotogp) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô fotogp"})
    if (!perfil) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô perfil"})
    if (!fundo) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô fundo"})
    
    
var image = await new knights.Welcome()
    .setUsername(`${nome}`)
    .setGuildName(`${nomegp}`)
    .setGuildIcon(`${fotogp}`)
    .setMemberCount(`${membros}`)
    .setAvatar(`${perfil}`)
    .setBackground(`${fundo}`)
    .toAttachment();
  

  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/bemvindo2.png', data)
  res.sendFile(__path +'/tmp/bemvindo2.png')
  .catch(e => {
         	res.sendFile(error)
})
})


router.get('/canvas/adeus2', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            nome = req.query.nome,
            nomegp = req.query.nomegp,
            fotogp = req.query.fotogp,
            membros = req.query.membros,
            perfil = req.query.perfil,
            fundo = req.query.fundo


	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!nome) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô nome"})
    if (!nomegp) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô nomegp"})
    if (!membros) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô membros"})
    if (!fotogp) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô fotogp"})
    if (!perfil) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô perfil"})
    if (!fundo) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô fundo"})
    
    
var image = await new knights.Goodbye()
    .setUsername(`${nome}`)
    .setGuildName(`${nomegp}`)
    .setGuildIcon(`${fotogp}`)
    .setMemberCount(`${membros}`)
    .setAvatar(`${perfil}`)
    .setBackground(`${fundo}`)
    .toAttachment();
  

  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/adeus2.png', data)
  res.sendFile(__path +'/tmp/adeus2.png')
  .catch(e => {
         	res.sendFile(error)
})
})

router.get('/canvas/bemvindo3', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            nome = req.query.nome,
            nomegp = req.query.nomegp,
            perfil = req.query.perfil,
            fundo = req.query.fundo

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!nome) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô nome"})
    if (!nomegp) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô nomegp"})
    if (!perfil) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô perfil"})
    if (!fundo) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô fundo"})
    
var image = await new kanpas.Welcome()
  .setGuildIcon(`${perfil}`)
  .setGuildName(`${nome}`)
  .setMemberCount(`${nomegp}`)
  .setBackground(`${fundo}`)
  .toAttachment();
  

  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/bemvindo3.png', data)
  res.sendFile(__path+'/tmp/bemvindo3.png')
  .catch(e => {
         	res.sendFile(error)
})
})


router.get('/canvas/adeus3', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            nome = req.query.nome,
            nomegp = req.query.nomegp,
            perfil = req.query.perfil,
            fundo = req.query.fundo

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!nome) return res.json({ status : false, creator : `${creator}`, message : "coloque o parametrô nome"})
    if (!nomegp) return res.json({ status : false, creator : `${creator}`, message : "coloque o parametrô nomegp"})
    if (!perfil) return res.json({ status : false, creator : `${creator}`, message : "coloque o parametrô perfil"})
    if (!fundo) return res.json({ status : false, creator : `${creator}`, message : "coloque o parametrô fundo"})
    
var image = await new kanpas.Goodbye()
  .setGuildIcon(`${perfil}`)
  .setGuildName(`${nome}`)
  .setMemberCount(`${nomegp}`)
  .setBackground(`${fundo}`)
  .toAttachment();
  

  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/adeus3.png', data)
  res.sendFile(__path+'/tmp/adeus3.png')
  .catch(e => {
         	res.sendFile(error)
})
})

router.get('/canvas/rank', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            username = req.query.nome,
            perfil = req.query.perfil,
            fundo = req.query.fundo,           
            xp = req.query.xp,           
            fullxp = req.query.fullxp,           
            level = req.query.level,
            rank = req.query.rank,
            discrim = req.query.contagem
            
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!username) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô nome"})
    if (!perfil) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô perfil"})
    if (!fundo) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô fundo"})
    if (!xp) return res.json({ status : false, creator : `${creator}`, message : "coloque o parametrô xp"})
    if (!fullxp) return res.json({ status : false, creator : `${creator}`, message : "coloque o parametrô fullxp"})
    if (!level) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô level"})
    if (!rank) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô rank"})
    if (!discrim) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô contagem"})
        
     let img = await yuricanvas.rank({ 
            username, 
            discrim, 
            level: level, 
            rank: rank, 
            neededXP: xp, 
            currentXP: fullxp, 
            avatarURL: perfil, 
            color: "white", 
            background: `${fundo}`
        });
        await fs.writeFileSync(__path +'/tmp/rank.png', img)
  res.sendFile(__path+'/tmp/rank.png')
         .catch(e => {
         	res.sendFile(error)
})
})

router.get('/canvas/levelup', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            perfil = req.query.perfil
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
 if (!perfil) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô perfil"})       
var image = await new knights.Up()
    .setAvatar(`${perfil}`)
    .toAttachment();
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/levelup.png', data)
  res.sendFile(__path +'/tmp/levelup.png')
  .catch(e => {
         	res.sendFile(error)
})
})

router.get('/canvas/gay', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            image = req.query.img
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!image) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô img"})

       img = await new DIG.Gay().getImage(`${image}`)
        await fs.writeFileSync(__path +'/tmp/gay.png', img)
  res.sendFile(__path+'/tmp/gay.png')
         .catch(e => {
         	res.sendFile(error)
})
})

router.get('/canvas/delete', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            image = req.query.img
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!image) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô img"})

       img = await new DIG.Delete().getImage(`${image}`)
        await fs.writeFileSync(__path +'/tmp/delete.png', img)
        res.sendFile(__path+'/tmp/delete.png')
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/canvas/beautiful', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            image = req.query.img
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!image) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô img"})

       img = await new DIG.Beautiful().getImage(`${image}`)
        await fs.writeFileSync(__path +'/tmp/beautiful.png', img)
  res.sendFile(__path+'/tmp/beautiful.png')
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/canvas/bobross', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            image = req.query.img
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!image) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô img"})

       img = await new DIG.Bobross().getImage(`${image}`)
        await fs.writeFileSync(__path +'/tmp/bobros.png', img)
  res.sendFile(__path+'/tmp/bobros.png')
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/canvas/hitler', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            image = req.query.img
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!image) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô img"})

       img = await new DIG.Hitler().getImage(`${image}`)
        await fs.writeFileSync(__path +'/tmp/hitler.png', img)
  res.sendFile(__path+'/tmp/hitler.png')
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/canvas/notstonk', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            image = req.query.img
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!image) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô img"})

       img = await new DIG.NotStonk().getImage(`${image}`)
        await fs.writeFileSync(__path +'/tmp/notstonk.png', img)
  res.sendFile(__path+'/tmp/notstonk.png')
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/canvas/poutine', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            image = req.query.img
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!image) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô img"})

       img = await new DIG.Poutine().getImage(`${image}`)
        await fs.writeFileSync(__path +'/tmp/poutine.png', img)
  res.sendFile(__path+'/tmp/poutine.png')
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/canvas/rip', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            image = req.query.img
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!image) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô img"})

       img = await new DIG.Rip().getImage(`${image}`)
        await fs.writeFileSync(__path +'/tmp/rip.png', img)
        res.sendFile(__path+'/tmp/rip.png')
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/canvas/trash', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            image = req.query.img
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!image) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô img"})

       img = await new DIG.Trash().getImage(`${image}`)
        await fs.writeFileSync(__path +'/tmp/trash.png', img)
        res.sendFile(__path+'/tmp/trash.png')
         .catch(e => {
         	res.sendFile(error)
})
})




router.get('/canvas/lisa', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            image = req.query.img
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!image) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô img"})
       img = await new DIG.LisaPresentation().getImage(`${image}`)
        await fs.writeFileSync(__path +'/tmp/lisa.png', img)
  res.sendFile(__path+'/tmp/lisa.png')
         .catch(e => {
         	res.sendFile(error)
})
})

router.get('/canvas/komunis', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            image = req.query.img
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!image) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô img"})

       img = await Caxinha.canvas.comunism(`${image}`);
        await fs.writeFileSync(__path +'/tmp/komunis.png', img)
  res.sendFile(__path+'/tmp/komunis.png')
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/canvas/wasted', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            image = req.query.img
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!image) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô img"})

       img = await Caxinha.canvas.wasted(`${image}`);
        await fs.writeFileSync(__path +'/tmp/wasted.png', img)
  res.sendFile(__path+'/tmp/wasted.png')
         .catch(e => {
         	res.sendFile(error)
})
})

router.get('/canvas/bolsonaro', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            image = req.query.img
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!image) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô img"})

       img = await Caxinha.canvas.bolsonaro(`${image}`);
        await fs.writeFileSync(__path +'/tmp/bolsonaro.png', img)
  res.sendFile(__path+'/tmp/bolsonaro.png')
         .catch(e => {
         	res.sendFile(error)
})
})

router.get('/canvas/circulo', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            image = req.query.img
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!image) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô img"})

       img = await new DIG.Circle().getImage(`${image}`)
        await fs.writeFileSync(__path +'/tmp/circulo.png', img)
  res.sendFile(__path+'/tmp/circulo.png')
         .catch(e => {
         	res.sendFile(error)
})
})

router.get('/infonpm', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            query = req.query.query
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!query) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter query"})

       fetch(encodeURI(`https://registry.npmjs.org/${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result,
                 message : `jangan lupa Subscribe Youtube ${creator}`
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})

router.get('/jadwal-bioskop', (req, res) => {
var apikeyInput = req.query.apikey

if(!apikeyInput) return res.json(loghandler.notparam)
if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
const cheerio = require('cheerio')

axios.get('https://jadwalnonton.com/now-playing')
.then(({ data }) => {
     const $ = cheerio.load(data)
     var title = []
     var url = []
     var img = []
 	$('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a').get().map((rest) => {
         url.push($(rest).attr('href'))
         })
         $('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a > img').get().map((rest) => {
        	title.push($(rest).attr('alt'))
         })
         $('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a > img').get().map((rest) => {
        	img.push($(rest).attr('src'))
         })
     var result = []
     for (var i = 0; i < url.length; i++) {
          result.push({
               	url: url[i],
               	title: title[i],
               	img: img[i]
          })
     }
     res.send({
     creator:  `${creator}`,
     status: true,
     result: result
     })
  })
})


router.get('/short/tiny', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
     if (!url) return res.json(loghandler.noturl)

     request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
         try {
             res.json({
                 status : true,
                 criador : `${creator}`,
                 resultado : {
                     link : `${body}`,
                 },
             })
         } catch (e) {
             console.log('Error :', color(e,'red'))
             res.json(loghandler.invalidLink)
         }
     })
})

router.get('/base', async (req, res, next) => {
	var type = req.query.type,
		encode = req.query.encode,
		decode = req.query.decode,
		apikeyInput = req.query.apikey;
		if (!apikeyInput) return res.json(loghandler.notparam)
		if (apikeyInput !== `${key}`) return res.sendFile(invalidKey)
		if (!type) return res.json({status: false, creator, code: 404, message: 'Masukan parameter type, type yang tersedia : base4 , base32'})
		if (type == 'base64' && encode){
				Base("b64enc", encode)
				.then(result => {
					res.json({
						status:true,
						criador: `${creator}`,
						result
					})
				})
			} else if (type == 'base64' && decode){
				Base("b64dec", decode)
				.then(result => {
					res.json({
						status: true,
						criador: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && encode){
				Base('b32enc', encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
					result
					})
				})
			} else if (type == 'base32' && decode){
				Base('b32dec', decode)
				.then(result => {
					res.json({
						status:true,
						criador: `${creator}`,
						result
					})
				})
			} else if(!(encode || decode)){
				res.json({
					status:false,
					creator: `${creator}`,
					message: "insira o parametro encode/decode"
				})
			} else {
				res.sendFile(error)
			}
})

router.get('/textmaker', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'glitch' && theme != 'google-suggestion') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'glitch') {
        	if (!text2) return res.json(loghandler.nottext2)
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
			    fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    res.json({
                                              status : true,
                                              criador : creator,
                                              resultado : data.data.url
                                       })
                                })
                           })
                       }
                   })
     } catch (e) {
          console.log(e);
        res.sendFile(error)
            }
        } else if (theme == 'google-suggestion') {
        	if (!text2) return res.json(loghandler.nottext2)
        if (!text3) return res.json(loghandler.nottext3)
            request.post({
                url: "https://photooxy.com/other-design/make-google-suggestion-photos-238.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&text_3=${text3}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        devare_url = data.data.devare_url;
                                        res.json({
                                            status : true,
                                            criador : `${creator}`,                       
                                            result:{
                                                url:urlnya,
                                                devare_url: devare_url,
                                                info: 'url irá desaparecer após 2 minutos'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.sendFile(error)
        }
})

router.get('/textmaker/game', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'pubg' && theme != 'battlefield') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'pubg') {
        	if (!text2) return rs.jso(loghandler.nottext2)
            try {
            request.post({
                url: "https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h =$(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        devare_url = data.data.devare_url;
                                        res.json({
                                            status : true,
                                            criador : `${creator}`,
                                            resultado:{
                                                url:urlnya,
                                                devare_url: devare_url,
                                                info: 'url irá desaparecer após 2 minutos'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(error)
                }
        } else if (theme == 'battlefield') {
        	if (!text2) return res.json(loghandler.nottext2)
            request.post({
                url: "https://photooxy.com/fps-game-effect/create-battlefield-4-rising-effect-152.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        devare_url = data.data.devare_url;
                                        res.json({
                                            status : true,
                                            criador : `${creator}`,
                                            resultado:{
                                                url:urlnya,
                                                devare_url: devare_url,
                                                info: 'url irá desaparecer após 2 minutos'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.sendFile(error)
        }
})

router.get('/textmaker/senja', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'coffee-cup' && theme != 'coffee-cup2') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'coffee-cup') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effcts/put-any-text-in-to-coffee-cup-371.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        devare_url = data.data.devare_url;
                                        res.json({
                                            status : true,
                                            criador : `${creator}`,
                                            resultado:{
                                                url:urlnya,
                                                devare_url: devare_url,
                                                info: 'url irá desaparecer após 2 minutos'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(error)
                }
        } else if (theme == 'coffee-cup2') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        devare_url = data.data.devare_url;
                                        res.json({
                                            status : true,
                                            criadpr : `${creator}`,                                            
                                            resultado:{
                                                url:urlnya,
                                                devare_url: devare_url,
                                                info: 'url irá desaparecer após 2 minutos'
                                            }
                                        })
                               })
                       })
                    }
                }) 
        } else {
            res.sendFile(error)
        }
})

router.get('/kisahnabi', async (req, res, next) => {
	var nabi = req.query.nabi,
		apikeyInput = req.query.apikey;

		if (!apikeyInput) return res.json(loghandler.notparam)
		if (apikeyInput !== `${key}`) return res.sendFile(invalidKey)
		Searchnabi(nabi)
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.sendFile(error)
		})
})

router.get('/infogempa', async (req, res, next) => {
	        var apikeyInput = req.query.apikey

		if (!apikeyInput) return res.json(loghandler.notparam)
		if (apikeyInput !== `${key}`) return res.sendFile(invalidKey)
		Gempa()
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.sendFile(error)
		})
})

router.get('/hadits', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kitab = req.query.kitab,
            nomor = req.query.nomor
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!kitab) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter kitab"})
    if (!nomor) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter nomor"})

       fetch(encodeURI(`https://hadits-api-zhirrr.vercel.app/books/${kitab}/${nomor}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
     })
})
 
router.get('/quran', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            surah = req.query.surah,
            ayat = req.query.ayat
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!surah) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter surah"})
    if (!ayat) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter ayat"})

       fetch(encodeURI(`https://alquran-apiii.vercel.app/surah/${surah}/${ayat}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/fbdown', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter url"})

       fetch(encodeURI(`https://fb-api-zhirrr.vercel.app/?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/textmaker/metallic', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'neon' && theme != 'glow') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'neon') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.om/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        devare_url = data.data.devare_url;
                                        res.json({
                                            status : true,
                                            criador : `${creator}`,                                            
                                            resultado:{
                                                url:urlnya,
                                                devare_url: devare_url,
                                                info: 'url irá desaparecer após 2 minutos'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(error)
                }
        } else if (theme == 'glow') {
            request.post({
                url: "https://photooxy.com/other-design/create-metallic-text-glow-online-188.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        devare_url = data.data.devare_url;
                                        res.json({
                                            status : true,
                                            criador : `${creator}`,
                                            resultado:{
                                                url:urlnya,
                                                devare_url: devare_url,
                                                info: 'url irá desaparecer após 2 minutos'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.sendFile(error)
        }
})

router.get('/textmaker/alam', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'summer' && theme != 'flower') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'summer') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnai").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        devare_url = data.data.devare_url;
                                        res.json({
                                            status : true,
                                            criador : `${creator}`,
                                            resultado:{
                                                url:urlnya,
                                                devare_url: devare_url,
                                                info: 'url irá desaparecer após 2 minutos'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(error)
                }
        } else if (theme == 'flower') {
            request.post({
                url: "https://photooxy.com/art-effects/flower-typography-text-effect-164.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        devare_url = data.data.devare_url;
                                        res.json({
                                            status : true,
                                            criador : `${creator}`,
                                            resultado:{
                                                url:urlnya,
                                                devare_url: devare_url,
                                                info: 'url irá desaparecer após 2 minutos'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.sendFile(error)
        }
})

router.get('/flaming', async (req, res, next) => {
         var text = req.query.text,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if (!text) return res.json(loghandler.nottext)

  try {
         var json = await (await fetch(`http://zekais-api.herokuapp.com/photooxy/flaming?text=${text}`)).json()
	 var buffer = await (await fetch(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${json.result}&name=ojan`)).json()
	   await fs.writeFileSync(__path + '/tmp/flaming.png', await getBuffer(buffer.data.url))
	  
	res.sendFile(__path + '/tmp/flaming.png')
   } catch (e) {
       console.log(e);
     res.sendFile(error)
       }
})

router.get('/neon', async (req, res, next) => {
         var text = req.query.text,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if (!text) return res.json(loghandler.nottext)

  try {
         var json = await (await fetch(`http://zekais-api.herokuapp.com/photooxy/neon?text=${text}`)).json()
	 var buffer = await (await fetch(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${json.result}&name=ojan`)).json()
	   await fs.writeFileSync(__path + '/tmp/neon.png', await getBuffer(buffer.data.url))
	  
	res.sendFile(__path + '/tmp/neon.png')
   } catch (e) {
       console.log(e);
     res.sendFile(error)
       }
})

router.get('/muslim/tahlil', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataTahlil.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/muslim/wirid', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataWirid.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/muslim/ayatkursi', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAyatKursi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/muslim/doaharian', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataDoaHarian.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/muslim/bacaanshalat', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataBacaanShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/muslim/niatshalat', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataNiatShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/muslim/kisahnabi', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataKisahNabi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
            })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/muslim/asmaulhusna', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAsmaulHusna.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/muslim/niatshubuh', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.jon(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatShubuh.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/muslim/niatdzuhur', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatDzuhur.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/muslim/niatmaghrib', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatMaghrib.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/muslim/niatisya', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatIsya.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/muslim/niatashar', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatAshar.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})

router.all('/loli', async (req, res) => {
 var apikeyInput = req.query.apikey            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
   try {
   json = JSON.parse(fs.readFileSync('lib/anime/lolis.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send({ status: 400, msg: 'Deu erro :/ tente novamente!' })
   }
   })
   router.all('/nsfwloli', async (req, res) => {
 var apikeyInput = req.query.apikey            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
   try {
   json = JSON.parse(fs.readFileSync('lib/anime/nsfwlolis.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send({ status: 400, msg: 'Deu erro :/ tente novamente!' })
   }
   })
    router.all('/shotas', async (req, res) => {
 var apikeyInput = req.query.apikey            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
   try {
   json = JSON.parse(fs.readFileSync('lib/anime/shotas.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send({ status: 400, msg: 'Deu erro :/ tente novamente!' })
   }
   })
   router.all('/ahegao', async (req, res) => {
 var apikeyInput = req.query.apikey            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
   try {
   json = JSON.parse(fs.readFileSync('lib/anime/ahegao.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send({ status: 400, msg: 'Deu erro :/ tente novamente!' })
   }
   })
   router.all('/ass', async (req, res) => {
 var apikeyInput = req.query.apikey            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
   try {
   json = JSON.parse(fs.readFileSync('lib/anime/ass.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send({ status: 400, msg: 'Deu erro :/ tente novamente!' })
   }
   })
    router.all('/bdsm', async (req, res) => {
 var apikeyInput = req.query.apikey            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
   try {
   json = JSON.parse(fs.readFileSync('lib/anime/bdsm.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send({ status: 400, msg: 'Deu erro :/ tente novamente!' })
   }
   })
      router.all('/blowjob', async (req, res) => {
 var apikeyInput = req.query.apikey            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
   try {
   json = JSON.parse(fs.readFileSync('lib/anime/blowjob.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send({ status: 400, msg: 'Deu erro :/ tente novamente!' })
   }
   })
   router.all('/cuckold', async (req, res) => {
 var apikeyInput = req.query.apikey            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
   try {
   json = JSON.parse(fs.readFileSync('lib/anime/cuckold.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send({ status: 400, msg: 'Deu erro :/ tente novamente!' })
   }
   })
    router.all('/cum', async (req, res) => {
 var apikeyInput = req.query.apikey            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
   try {
   json = JSON.parse(fs.readFileSync('lib/anime/cum.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send({ status: 400, msg: 'Deu erro :/ tente novamente!' })
   }
   })
      router.all('/ero', async (req, res) => {
 var apikeyInput = req.query.apikey            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
   try {
   json = JSON.parse(fs.readFileSync('lib/anime/ero.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send({ status: 400, msg: 'Deu erro :/ tente novamente!' })
   }
   })
   router.all('/femdom', async (req, res) => {
 var apikeyInput = req.query.apikey            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
   try {
   json = JSON.parse(fs.readFileSync('lib/anime/femdom.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send({ status: 400, msg: 'Deu erro :/ tente novamente!' })
   }
   })
    router.all('/gangbang', async (req, res) => {
 var apikeyInput = req.query.apikey            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
   try {
   json = JSON.parse(fs.readFileSync('lib/anime/gangbang.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send({ status: 400, msg: 'Deu erro :/ tente novamente!' })
   }
   })
      router.all('/foot', async (req, res) => {
 var apikeyInput = req.query.apikey            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
   try {
   json = JSON.parse(fs.readFileSync('lib/anime/foot.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send({ status: 400, msg: 'Deu erro :/ tente novamente!' })
   }
   })
   router.all('/glasses', async (req, res) => {
 var apikeyInput = req.query.apikey            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
   try {
   json = JSON.parse(fs.readFileSync('lib/anime/glasses.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send({ status: 400, msg: 'Deu erro :/ tente novamente!' })
   }
   })
    router.all('/hentai', async (req, res) => {
 var apikeyInput = req.query.apikey            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
   try {
   json = JSON.parse(fs.readFileSync('lib/anime/hentai.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send({ status: 400, msg: 'Deu erro :/ tente novamente!' })
   }
   })
      router.all('/hnt_gifs', async (req, res) => {
 var apikeyInput = req.query.apikey            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
   try {
   json = JSON.parse(fs.readFileSync('lib/anime/hnt_gifs.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('gif')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send({ status: 400, msg: 'Deu erro :/ tente novamente!' })
   }
   })
   router.all('/jahy', async (req, res) => {
 var apikeyInput = req.query.apikey            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
   try {
   json = JSON.parse(fs.readFileSync('lib/anime/jahy.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send({ status: 400, msg: 'Deu erro :/ tente novamente!' })
   }
   })
    router.all('/masturbation', async (req, res) => {
 var apikeyInput = req.query.apikey            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
   try {
   json = JSON.parse(fs.readFileSync('lib/anime/masturbation.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send({ status: 400, msg: 'Deu erro :/ tente novamente!' })
   }
   })
      router.all('/nsfwNeko', async (req, res) => {
 var apikeyInput = req.query.apikey            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
   try {
   json = JSON.parse(fs.readFileSync('lib/anime/nsfwNeko.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send({ status: 400, msg: 'Deu erro :/ tente novamente!' })
   }
   })
   router.all('/orgy', async (req, res) => {
 var apikeyInput = req.query.apikey            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
   try {
   json = JSON.parse(fs.readFileSync('lib/anime/orgy.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send({ status: 400, msg: 'Deu erro :/ tente novamente!' })
   }
   })
    router.all('/panties', async (req, res) => {
 var apikeyInput = req.query.apikey            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
   try {
   json = JSON.parse(fs.readFileSync('lib/anime/panties.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send({ status: 400, msg: 'Deu erro :/ tente novamente!' })
   }
   })
      router.all('/pussy', async (req, res) => {
 var apikeyInput = req.query.apikey            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
   try {
   json = JSON.parse(fs.readFileSync('lib/anime/pussy.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send({ status: 400, msg: 'Deu erro :/ tente novamente!' })
   }
   })
   router.all('/sfwNeko', async (req, res) => {
 var apikeyInput = req.query.apikey            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
   try {
   json = JSON.parse(fs.readFileSync('lib/anime/sfwNeko.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send({ status: 400, msg: 'Deu erro :/ tente novamente!' })
   }
   })
    router.all('/tentacles', async (req, res) => {
 var apikeyInput = req.query.apikey            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
   try {
   json = JSON.parse(fs.readFileSync('lib/anime/tentacles.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send({ status: 400, msg: 'Deu erro :/ tente novamente!' })
   }
   })
      router.all('/thighs', async (req, res) => {
 var apikeyInput = req.query.apikey            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
   try {
   json = JSON.parse(fs.readFileSync('lib/anime/thighs.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send({ status: 400, msg: 'Deu erro :/ tente novamente!' })
   }
   })
   router.all('/yuri', async (req, res) => {
 var apikeyInput = req.query.apikey            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
   try {
   json = JSON.parse(fs.readFileSync('lib/anime/yuri.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send({ status: 400, msg: 'Deu erro :/ tente novamente!' })
   }
   })
    router.all('/zettaiRyouiki', async (req, res) => {
 var apikeyInput = req.query.apikey            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
   try {
   json = JSON.parse(fs.readFileSync('lib/anime/zettaiRyouiki.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send({ status: 400, msg: 'Deu erro :/ tente novamente!' })
   }
   })


router.get('/textmaker/random', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'text-burn' && theme != 'art-quote') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'text-burn') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        devare_url = data.data.devare_url;
                                        res.json({
                                            status : true,
                                            criador : `${creator}`,
                                            resultado:{
                                                url:urlnya,
                                                devare_url: devare_url,
                                                info: 'url irá desaparecer após 2 minutos'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(error)
                }
        } else if (theme == 'art-quote') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html",
               headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
			    fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        devare_url = data.data.devare_url;
                                        res.json({
                                            status : true,
                                            criador : `${creator}`,
                                            resultado:{
                                                url:urlnya,
                                                devare_url: devare_url,
                                                info: 'url irá desaparecer após 2 minutos'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.sendFile(error)
        }
})

router.get('/textmaker/roses', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'wooden-boarch' && theme != 'golden') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'wooden-boarch') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/writing-on-wooden-boards-368.html",
               headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        devare_url = data.data.devare_url;
                                        res.json({
                                            status : true,
                                            criador : `${creator}`,
                                            resultado:{
                                                url:urlnya,
                                                devare_url: devare_url,
                                                info: 'url irá desaparecer após 2 minutos'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(error)
                }
        } else if (theme == 'golden') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = heerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        devare_url = data.data.devare_url;
                                        res.json({
                                            status : true,
                                            criador : `${creator}`,
                                            resultado:{
                                                url:urlnya,
                                                devare_url: devare_url,
                                                info: 'url irá desaparecer após 2 minutos'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.sendFile(error)
        }
})

router.get('/download/ytmp3', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 url = req.query.url            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "Coloque o link"})
  ytDonlodMp3(url)
    .then((result) => {
      res.json({
        status: true,
        código: 200,
        criador: `${creator}`,
        result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})

router.get('/download/ytmp4', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 url = req.query.url            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "Coloque o link"})
  ytDonlodMp4(url)
    .then((result) => {
      res.json({
        status: true,
        código: 200,
        criador: `${creator}`,
          result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})

router.get("/yt/playmp3", async(req, res, next) => {
  var apikeyInput = req.query.apikey,
 query = req.query.query
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!query) return res.json({ status : false, creator : `${creator}`, message : "Coloque o nome da música"})
    ytPlayMp3(query)
      .then((result) => {
      res.json({
        status: true,
        código: 200,
        criador: `${creator}`,
          result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})

router.get("/yt/playmp4", async(req, res, next) => {
  var apikeyInput = req.query.apikey,
 query = req.query.query
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!query) return res.json({ status : false, creator : `${creator}`, message : "Coloque o nome da música"})
    ytPlayMp4(query)
    .then((result) => {
      res.json({
        status: true,
        código: 200,
        criador: `${creator}`,
          result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/yt/search', async(req, res, next) => {
   var apikeyInput = req.query.apikey,
 query = req.query.query
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!query) return res.json({ status : false, creator : `${creator}`, message : "Coloque o nome da música"})
    ytSearch(query)
     .then((result) => {
      res.json({
        status: true,
        código: 200,
        criador: `${creator}`,
          result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})

router.get('/yutub/video', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter url"})

       fetch(encodeURI(`https://api.zeks.xyz/api/ytmp4?url=${url}&apikey=alpin1234567`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'ojan',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/yutub/audio', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter url"})

       fetch(encodeURI(`https://api.zeks.xyz/api/ytmp3?url=${url}&apikey=alpin1234567`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'ojan',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/ig/stalk', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            username = req.query.username
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!username) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter username"})

       fetch(encodeURI(`https://mhankbarbar.herokuapp.com/api/stalk?username=${username}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'ojan',
                 result
            })
         })
         .catch(e => {
         	res.sendFile(error)
})
})

router.get('/comik', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            search = req.query.search
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!search) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter username"})

       fetch(encodeURI(`https://api.zeks.xyz/api/bacakomik?apikey=alpin1234567&q=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'ojan',
                 result
            })
         })
         .catch(e => {
         	res.sendFile(error)
})
})

router.get('/dork', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            dork = req.query.dork
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!dork) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter dork"})

       fetch(encodeURI(`https://api-anoncybfakeplayer.herokuapp.com/dorking?dork=${dork}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	criador: '@BRENO',
                 result
            })
         })
         .catch(e => {
         	res.sendFile(error)
})
})

router.get('/pastebin', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter text"})

       fetch(encodeURI(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	criador: '@BRENO',
                 result
            })
         })
         .catch(e => {
         	res.sendFile(error)
})
})

router.get('/tomp4', async (req, res, next) => {
        var url = req.query.url,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if (!url) return res.json(loghandler.noturl)
	if (!url.startsWith('http')) return res.json(loghandler.invalidLink)

try {
   axios.get(`https://ezgif.com/webp-to-mp4?url=${url}`).then(({ data }) => {
           var $ = cheerio.load(data)
           var bodyFormThen = new FormData()
           var file = $('input[name="file"]').attr('value')
	   var token = $('input[name="token"]').attr('value')
           var convert = $('input[name="file"]').attr('value')
           var gotdata = {
                         file: file,
                         token: token,
                         convert: convert
                         }
                         bodyFormThen.append('file', gotdata.file)
                         bodyFormThen.append('token', gotdata.token)
                         bodyFormThen.append('convert', gotdata.convert)
                         axios({
                         method: 'post',
                         url: 'https://ezgif.com/webp-to-mp4/' + gotdata.file,
                         data: bodyFormThen,
                         headers: {
                         'Content-Type': `multipart/form-data; boundary=${bodyFormThen._boundary}`
                         }}).then(({ data }) => {
                         var $ = cheerio.load(data)
                         var result = 'https:' + $('div#output > p.outfile > video > source').attr('src')

	                       res.json({
                                            status : true,
                                            criador : `${creator}`,
                                            resultado : result
                                        })
                             })
                     })

 } catch (e) {
          console.log(e);
      res.sendFile(error)
   }
})

router.get('/ocr', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
        img = req.query.img;
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!img) return res.json(loghandler.notimg)
	if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

  try {
	var enc = await imageToBase64(img)
	var media = Buffer.from(enc, 'base64')
	  await fs.writeFileSync(__path + '/tmp/ocr.png', media)
   await recognize(`${__path}/tmp/ocr.png`, { lang: 'eng+ind', oem: 1, psm: 3 })
        .then(hasil => {

             res.json({
                status : true,
                creator : `${creator}`,
                message : `jangan lupa Subscribe Youtube ${creator}`,
                result : `${hasil}`
             })
       })
          .catch(err => {
                res.sendFile(error)
   })
  } catch (e) {
        console.log(e);
      res.sendFile(error)
   }
})

router.get('/removebg', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
        img = req.query.img;

  try {
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!img) return res.json(loghandler.notimg)
	if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

	var encmedia = await imageToBase64(img)
	var media = Buffer.from(encmedia, 'base64')
	   await fs.writeFileSync(__path + '/tmp/nobg.png', media)
	      var rbg = RemoveBg('HCVrssExQw8DuaWpj2vE5359', 'error.log')
              rbg.remove_background_from_img_file(__path + '/tmp/nobg.png')

	  res.sendFile(__path + '/tmp/nobg.png')
 } catch (e) {
          console.log(e);
      res.sendFile(error)
   }
})

router.get('/simsimi', async (req, res, next) => {
        var kata = req.query.kata,
	apikeyInput = req.query.apikey;

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if (!kata) return res.json(loghandler.notkata)

 try {
       var json = await (await fetch(`https://api.zeks.xyz/api/simi?apikey=apivinz&text=${kata}`)).json()
        var result = json.success
             res.json({
             	status : true,
                creator : `${creator}`,
                result : result
             })
} catch (e) {
	console.log(e)
    res.sendFile(error)
   }
})

router.get('/binary', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
       text = req.query.encode

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if (!text) return res.json(loghandler.nottext)

 try {
       var json = await (await fetch(`https://some-random-api.ml/binary?encode=${text}`)).json()
        var result = json.binary
             res.json({
             	status : true,
                creator : `${creator}`,
                result : result
             })
} catch (e) {
    res.sendFile(error)
   }
})

router.get('/binary', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
        text = req.query.decode;

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if (!text) return res.json(loghandler.nottext)

 try {
       var json = await (await fetch(`https://some-random-api.ml/binary?decode=${text}`)).json()
        var result = json.text
             res.json({
             	status : true,
                creator : `${creator}`,
                result : result
             })
} catch (e) {
    res.sendFile(error)
   }
})

router.get('/tobase64', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
        img = req.query.img;

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if (!img) return res.json(loghandler.notimg)

 try {
           var result = await imageToBase64(img)
                res.json({
                   	status : true,
                       creator : `${creator}`,
                       result : result
             })
} catch (e) {
    res.sendFile(error)
   }
})

router.get('/tomedia', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
        base64 = req.query.base64;

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!base64) return res.json(loghandler.notbase64)
    if (base64.startsWith('data')) return res.json({ message : `Gunakan teks base64 tanpa data:image/jpeg!` })

 try {
           var result = Buffer.from(base64, 'base64')
                res.sendFile(result)
} catch (e) {
    res.sendFile(error)
   }
})

router.get('/ttp', async (req, res, next) => {
     var text = req.query.text,
     apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

 try {
         var json = await (await fetch(`https://api.areltiyan.site/sticker_maker?text=${text}`)).json()
         var hasil = json.base64.split`,`[1]
         await fs.writeFileSync(__path + `/tmp/ttp.png`, hasil, 'base64')

    res.sendFile(__path + '/tmp/ttp.png')
  } catch (e) {
  	console.log(e)
    res.sendFile(error)
      }
})

router.get('/dadu', async (req, res, next) => {
	var apikeyInput = req.query.apikey

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

      var random = Math.floor(Math.random() * 6) + 1
      var hasil = 'https://www.random.org/dice/dice' + random + '.png'
      var data = await (await fetch(hasil)).buffer()

         await fs.writeFileSync(__path + '/tmp/dadu.png', data)
   res.sendFile(__path + '/tmp/dadu.png')
})

router.get('/repeat', (req, res, next) => {

const repeat = (text, total) => {
		return text.repeat(total)
	}
      var text = req.query.text,
             jumlah = req.query.jumlah,
            apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if (!jumlah) return res.json(loghandler.notjumlah)
  if (isNaN(jumlah)) return res.json(loghandler.number)
  if (jumlah > 10000) return res.json({ message: `No máximo 10k de vezes` })

  var result = repeat(text, jumlah)
       res.json({
             status: true,
             criador: `${creator}`,
             resultado: result
       })
})

router.get('/reverse', async (req, res, next) => {
       var text = req.query.text,
	   apikeyInput = req.query.apikey;

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
    if (!text) return res.json(loghandler.nottext)

 try {
       var json = await (await fetch(`https://videfikri.com/api/hurufterbalik/?query=${text}`)).json()
        var result = json.result.kata
             res.json({
             	status : true,
                creator : `${creator}`,
                result : result
             })
} catch (e) {
    res.sendFile(error)
   }
})


router.get('/bokep', async (req, res, next) => {
     var apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

 try {
         var json = await (await fetch(`https://mhankbarbar.herokuapp.com/api/pussy`)).json()
	 var hasil = await getBuffer(json.result)
            await fs.writeFileSync(__path + '/tmp/bokep.png', hasil)

    res.sendFile(__path + '/tmp/bokep.png')
  } catch (e) {
  	console.log(e)
    res.sendFile(error)
      }
})

router.get('/googleimage', async (req, res, next) => {
	var q = req.query.q,
     apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!q) return res.json(loghandler.notquery)

 try {
         var json = await (await fetch(`https://api.fdci.se/rep.php?gambar=${q}`)).json()
         var body = JSON.parse(JSON.stringify(json))
         var tada =  body[Math.floor(Math.random() * body.length)]
	 var hasil = await getBuffer(tada)
            await fs.writeFileSync(__path + '/tmp/image.png', hasil)

    res.sendFile(__path + '/tmp/image.png')
  } catch (e) {
  	console.log(e)
    res.sendFile(error)
      }
})

router.get('/say', async (req, res, next) => {
     var apikeyInput = req.query.apikey,
            text = req.query.text;

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       res.json({
       	status : true,
           creator : `${creator}`,
       	result : text
       })
})

router.get('/md5', async (req, res, next) => {
     var apikeyInput = req.query.apikey,
            text = req.query.text;

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var result = await createHash('md5').update(text).digest('hex')
       res.json({
       	status : true,
           criador : `${creator}`,
           result : result
       })
})

router.get('/tahta', async (req, res, next) => {
   var text = req.query.text,
          apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await (await fetch(`https://api.zeks.xyz/api/hartatahta?text=${text}&apikey=apivinz`)).buffer()
       await fs.writeFileSync(__path + '/tmp/tahta.png', hasil)

    res.sendFile(__path + '/tmp/tahta.png')
})

router.get('/customtahta', async (req, res, next) => {
   var text = req.query.text,
          apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await (await fetch(`https://api.zeks.xyz/api/tahta?text=${text}&apikey=apivinz`)).buffer()
       await fs.writeFileSync(__path + '/tmp/cstahta.png', hasil)

    res.sendFile(__path + '/tmp/cstahta.png')
})

router.get('/anime/random', async (req, res, next) => {
     var apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

 try {
         var json = await (await fetch(`https://api.fdci.se/rep.php?gambar=anime`)).json()
         var body = JSON.parse(JSON.stringify(json))
         var tada =  body[Math.floor(Math.random() * body.length)]
	 var hasil = await getBuffer(tada)
            await fs.writeFileSync(__path + '/tmp/anime.png', hasil)

    res.sendFile(__path + '/tmp/anime.png')
  } catch (e) {
  	console.log(e)
    res.sendFile(error)
      }
})

router.get('/kpop/random', async (req, res, next) => {
     var apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

 try {
         var json = await (await fetch(`https://api.fdci.se/rep.php?gambar=kpop`)).json()
         var body = JSON.parse(JSON.stringify(json))
         var tada =  body[Math.floor(Math.random() * body.length)]
	 var hasil = await getBuffer(tada)
            await fs.writeFileSync(__path + '/tmp/kpop.png', hasil)

    res.sendFile(__path + '/tmp/kpop.png')
  } catch (e) {
  	console.log(e)
    res.sendFile(error)
      }
})

router.get('/random/manga', async (req, res, next) => {
     var apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

 try {
         var json = await (await fetch(`https://api.fdci.se/rep.php?gambar=manga`)).json()
         var body = JSON.parse(JSON.stringify(json))
         var tada =  body[Math.floor(Math.random() * body.length)]
	 var hasil = await getBuffer(tada)
            await fs.writeFileSync(__path + '/tmp/manga.png', hasil)

    res.sendFile(__path + '/tmp/manga.png')
  } catch (e) {
  	console.log(e)
    res.sendFile(error)
      }
})

router.get('/triggered', async (req, res, next) => {
       var img = req.query.img,
	   apikeyInput = req.query.apikey;
	
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!img) return res.json(loghandler.notimg)
  if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

 try {
	 var result = await imageToBase64(`http://zekais-api.herokuapp.com/trigger?url=${img}`)
	 var hasil = Buffer.from(result, 'base64')
            await fs.writeFileSync(__path + '/tmp/trigger.gif', hasil)

    res.sendFile(__path + '/tmp/trigger.gif')
  } catch (e) {
  	console.log(e)
    res.sendFile(error)
      }
})

router.get('/emojitopng', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
               emoji = req.query.emoji;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!emoji) return res.json(loghandler.notemoji)

     var hasil = await (await fetch(`https://api.zeks.xyz/api/emoji-image?apikey=apivinz&emoji=${encodeURIComponent(emoji)}`)).buffer()
        await fs.writeFileSync(__path + '/tmp/emojitopng.png', hasil)

         res.sendFile(__path + '/tmp/emojitopng.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)   }
})

router.get('/brainly', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
               text = req.query.text;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var json = await (await fetch(`https://api.zeks.xyz/api/brainly?apikey=apivinz&q=${text}&count=5`)).json()
       res.json(json)
     
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/pantun', async (req, res, next) => {
        var apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

     var json = await (await fetch(`https://api.zeks.xyz/api/pantun?apikey=apivinz`)).json()
         res.json(json)

} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/memeindo', async (req, res, next) => {
        var apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

     var json = await (await fetch(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`)).json()
     var hasil = await getBuffer(json.result)
       await fs.writeFileSync(__path + '/tmp/memeindo.png', hasil)

         res.sendFile(__path + '/tmp/memeindo.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})	

router.get('/artinama', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
               nama = req.query.nama;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!nama) return res.json(loghandler.notnama)	

 request.get({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url: 'http://www.primbon.com/arti_nama.php?nama1=' + nama + '&proses=+Submit%21+',
      }, function(error, response, body){
          let $ = cheerio.load(body);
          var y = $.html().split('arti:')[1];
          var t = y.split('method="get">')[1];
          var f = y.replace(t ," ");
          var x = f.replace(/<br\s*[\/]?>/gi, "\n");
          var h  = x.replace(/<[^>]*>?/gm, '');

var result = `Arti dari namamu adalah\n\nNama *${nama}*\n${h}`
         res.json({
	        status : true,
                creator : `${creator}`,
                result : result
             })
   })

} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/cekjodoh', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            nama = req.query.nama,
	    pasangan = req.query.pasangan;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!nama) return res.json(loghandler.notnama)
  if (!pasangan) return res.json({ message : `Masukan nama pacarmu,, ehh pasangan :v` })

 request.get({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url: 'http://www.primbon.com/kecocokan_nama_pasangan.php?nama1=' + nama + '&nama2='+ pasangan +'&proses=+Submit%21+',

    }, function(error, response, body){
        let $ = cheerio.load(body);
      var y = $.html().split('<b>KECOCOKAN JODOH BERDASARKAN NAMA PASANGAN</b><br><br>')[1];
        var t = y.split('.<br><br>')[1];
        var f = y.replace(t ," ");
        var x = f.replace(/<br\s*[\/]?>/gi, "\n");
        var h  = x.replace(/<[^>]*>?/gm, '');
        var d = h.replace("&amp;", '&')

var result = `Kecocokan Berdasarkan Nama :\n\n${d}`
         res.json({
	        status : true,
                creator : `${creator}`,
                result : result
             })
   })

} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/kuis/caklontong', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://api-yogipw.herokuapp.com/api/kuis/caklontong?apikey=yogipw`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'ojan',
                result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})

router.get('/asupan', async (req, res, next) => {
        var apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

     var json = await (await fetch(`http://zekais-api.herokuapp.com/ptlvid`)).json()
         res.json(json)

} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/cerpen', async (req, res, next) => {
        var apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

     var json = await (await fetch(`http://zekais-api.herokuapp.com/cerpen`)).json()
         res.json({
		 status : true,
		 creator : creator,
		 judul : json.title,
		 pengarang : json.pengarang,
		 kategori : json.category,
		 cerpen : json.post
      })

} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/mediafire', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    url = req.query.url;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!url) return res.json(loghandler.noturl)
  if (!url.startsWith('http')) return res.json(loghandler.invalidLink)

     var json = await (await fetch(`https://api.zeks.xyz/api/mediafire?apikey=apivinz&url=${url}`)).json()
         res.json(json)

} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/tts', async (req, res, next) => {
       var text = req.query.text,
	   lang = req.query.lang,
	   apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if (!lang) return res.json(loghandler.notlang)
  if (lang > 4) return res.json({ error : `Kode bahasa tidak valid!` })

  try {
         var ress = await imageToBase64(`http://zekais-api.herokuapp.com/speech?lang=${lang}&text=${text}`)
	 var tts = Buffer.from(ress, 'base64')
	   await fs.writeFileSync(__path + '/tmp/tts.opus', tts)

       res.sendFile(__path + '/tmp/tts.opus')
  } catch (e) {
	console.log(e)
	  res.sendFile(error)
     }
})

router.get('/darkjokes', async (req, res, next) => {
        var apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

     var json = await (await fetch(`https://api.zeks.xyz/api/darkjokes?apikey=apivinz`)).json()
     var hasil = await getBuffer(json.result)
       await fs.writeFileSync(__path + '/tmp/darkjokes.png', hasil)

         res.sendFile(__path + '/tmp/darkjokes.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/splaybutton', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    text = req.query.text;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/splaybutton?text=${text}&apikey=apivinz`)
       await fs.writeFileSync(__path + '/tmp/playbutton.png', hasil)

         res.sendFile(__path + '/tmp/playbutton.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/gplaybutton', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    text = req.query.text;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${text}&apikey=apivinz`)
       await fs.writeFileSync(__path + '/tmp/playbutton2.png', hasil)

         res.sendFile(__path + '/tmp/playbutton2.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/textpantai', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    text = req.query.text;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/sandw?apikey=apivinz&text=${text}`)
       await fs.writeFileSync(__path + '/tmp/pantai.png', hasil)

         res.sendFile(__path + '/tmp/pantai.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/textsalju', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    t1 = req.query.t1,
	    t2 = req.query.t2;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!t1) return res.json(loghandler.nottext)
  if (!t2) return res.json(loghandler.nottext2)

     var json = await (await fetch(`https://api.zeks.xyz/api/snowwrite?text1=${t1}&text2=${t2}&apikey=apivinz`)).json()
       await fs.writeFileSync(__path + '/tmp/salju.png', await getBuffer(json.result))

         res.sendFile(__path + '/tmp/salju.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})


router.get('/firework', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    text = req.query.text;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/tfire?text=${text}&apikey=apivinz`)
       await fs.writeFileSync(__path + '/tmp/firework.png', hasil)

         res.sendFile(__path + '/tmp/firework.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/retro', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    t1 = req.query.t1,
	    t2 = req.query.t2,
	    t3 = req.query.t3;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!t1) return res.json(loghandler.nottext)
  if (!t2) return res.json(loghandler.nottext2)
  if (!t3) return res.json(loghandler.nottext3)

     var json = await (await fetch(`https://api.zeks.xyz/api/retro?text1=${t1}&text2=${t2}&text3=${t3}&apikey=apivinz`)).json()
       await fs.writeFileSync(__path + '/tmp/retro.png', await getBuffer(json.result))

         res.sendFile(__path + '/tmp/retro.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/matrix', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    text = req.query.text;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/matrix?apikey=apivinz&text=${text}`)
       await fs.writeFileSync(__path + '/tmp/matrix.png', hasil)

         res.sendFile(__path + '/tmp/matrix.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/text3d', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    text = req.query.text;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=apivinz&text=${text}`)
       await fs.writeFileSync(__path + '/tmp/3d.png', hasil)

         res.sendFile(__path + '/tmp/3d.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/kuis/family100', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/reyhangans/Zhirrr-Api/main/lib/family100.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	 result  
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})

//@ TEXTPROME


router.get('/textpro/natural-leaves', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/black-pink', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/drop-water', async(req, res, next) => {


 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/dropwater-text-effect-872.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/christmas', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/3d-gradient', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/3d-gradient-text-effect-online-free-1002.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});
router.get('/textpro/metallic', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-a-metallic-text-effect-free-online-1041.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/glossymetalic', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/sciencefiction', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-science-fiction-text-effect-online-free-1038.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/greenhorror', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/transformer', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/berry', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-berry-text-effect-online-free-1033.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/layered', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-layered-text-effects-online-free-1032.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/thunder', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/magmahot', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/3Dstone', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/3Dneonlight', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/impressiveglitch', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/HarryPotter', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/embossed', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-embossed-text-effect-on-cracked-surface-1024.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/Brokenglass', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/broken-glass-text-effect-free-online-1023.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/artpaper', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/3Dglossy', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/3Drealistic', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-3d-realistic-text-effect-on-the-beach-online-1018.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/foggy', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/neondevilwings', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/3Dunderwater', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/3d-underwater-text-effect-generator-online-1013.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/bearmascot', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/wonderfulgraffiti', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/futuristicneon', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/snow', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/cloud', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/luxurygold', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/3d-luxury-gold-text-effect-online-1003.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/3Dgradient', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/3d-gradient-text-effect-online-free-1002.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/realisticcloud', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-realistic-cloud-text-effect-online-free-999.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/SandSummer', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/write-in-sand-summer-beach-free-online-991.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/SandWriting', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/sand-writing-text-effect-online-990.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/Sandengraved', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/sand-engraved-3d-text-effect-989.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/summerysand', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-a-summery-sand-writing-text-effect-988.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/3dglue', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/MetalDarkGold', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/metal-dark-gold-text-effect-984.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/NeonLight', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/1917Style', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/1917-style-text-effect-online-980.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/XmasCards3D', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/xmas-cards-3d-online-942.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/Blood', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/blood-text-on-the-frosted-glass-941.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/HalloweenFire', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/halloween-fire-text-effect-940.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/Lava', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/lava-text-effect-online-914.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/SteelText', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/steel-text-effect-online-921.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/Toxic', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/toxic-text-effect-online-901.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/Chocolate', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/chocolate-cake-text-effect-890.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/Matrix', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/HorrorBlood', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/horror-blood-text-effect-online-883.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/Thunder2', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-thunder-text-effect-online-881.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/3DBox', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/GreenNeon', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/green-neon-text-effect-874.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/CaptainAmerica', async(req, res, next) => {
 var apikeyInput = req.query.apikey,
 text = req.query.text;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/captain-america-text-effect-905.html", [
    text,
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
     })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/porn-hub', async(req, res, next) => {
  const apikeyInput = req.query.apikey;
  const text = req.query.text;
  const text2 = req.query.text2;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)  
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.sendFile(error)
  }
});

router.get('/textpro/video-game', async(req, res, next) => {
  const apikeyInput = req.query.apikey;
  const text = req.query.text;
  const text2 = req.query.text2;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)  
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
    })
  })
  .catch((err) => console.log(err));
  } else {
 res.sendFile(error)
  }
});

router.get('/textpro/glitch', async(req, res, next) => {
  const apikeyInput = req.query.apikey;
  const text = req.query.text;
  const text2 = req.query.text2;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)  
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
    })
  })
  .catch((err) => console.log(err));
  } else {
 res.sendFile(error)
  }
});

router.get('/textpro/glitchtk', async(req, res, next) => {
  const apikeyInput = req.query.apikey;
  const text = req.query.text;
  const text2 = req.query.text2;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)  
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
    })
  })
  .catch((err) => console.log(err));
  } else {
 res.sendFile(error)
  }
});

router.get('/textpro/america', async(req, res, next) => {
  const apikeyInput = req.query.apikey;
  const text = req.query.text;
  const text2 = req.query.text2;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)  
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-a-captain-america-text-effect-free-online-1039.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
    })
  })
  .catch((err) => console.log(err));
  } else {
 res.sendFile(error)
  }
});

router.get('/textpro/silver', async(req, res, next) => {
  const apikeyInput = req.query.apikey;
  const text = req.query.text;
  const text2 = req.query.text2;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)  
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/text-logo-3d-metal-silver-946.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
    })
  })
  .catch((err) => console.log(err));
  } else {
 res.sendFile(error)
  }
});

router.get('/textpro/silvergalax', async(req, res, next) => {
  const apikeyInput = req.query.apikey;
  const text = req.query.text;
  const text2 = req.query.text2;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)  
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/text-logo-3d-metal-galaxy-943.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
    })
  })
  .catch((err) => console.log(err));
  } else {
 res.sendFile(error)
  }
});

router.get('/textpro/3dsteal', async(req, res, next) => {
  const apikeyInput = req.query.apikey;
  const text = req.query.text;
  const text2 = req.query.text2;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)  
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/3d-steel-text-effect-877.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
    })
  })
  .catch((err) => console.log(err));
  } else {
 res.sendFile(error)
  }
});

router.get('/textpro/stone', async(req, res, next) => {
  const apikeyInput = req.query.apikey;
  const text = req.query.text;
  const text2 = req.query.text2;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)  
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-a-stone-text-effect-online-982.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
    })
  })
  .catch((err) => console.log(err));
  } else {
 res.sendFile(error)
  }
});

router.get('/textpro/wallgraffiti', async(req, res, next) => {
  const apikeyInput = req.query.apikey;
  const text = req.query.text;
  const text2 = req.query.text2;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)  
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
    })
  })
  .catch((err) => console.log(err));
  } else {
 res.sendFile(error)
  }
});

router.get('/textpro/lightbulb', async(req, res, next) => {
  const apikeyInput = req.query.apikey;
  const text = req.query.text;
  const text2 = req.query.text2;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)  
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-realistic-vintage-style-light-bulb-1000.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
    })
  })
  .catch((err) => console.log(err));
  } else {
 res.sendFile(error)
  }
});

router.get('/textpro/space3D', async(req, res, next) => {
  const apikeyInput = req.query.apikey;
  const text = req.query.text;
  const text2 = req.query.text2;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)  
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
    })
  })
  .catch((err) => console.log(err));
  } else {
 res.sendFile(error)
  }
});

router.get('/textpro/Marvelstudios', async(req, res, next) => {
  const apikeyInput = req.query.apikey;
  const text = req.query.text;
  const text2 = req.query.text2;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)  
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
    })
  })
  .catch((err) => console.log(err));
  } else {
 res.sendFile(error)
  }
});

router.get('/textpro/Marvelstudios2', async(req, res, next) => {
  const apikeyInput = req.query.apikey;
  const text = req.query.text;
  const text2 = req.query.text2;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)  
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
    })
  })
  .catch((err) => console.log(err));
  } else {
 res.sendFile(error)
  }
});

router.get('/textpro/LionLogo', async(req, res, next) => {
  const apikeyInput = req.query.apikey;
  const text = req.query.text;
  const text2 = req.query.text2;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)  
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
    })
  })
  .catch((err) => console.log(err));
  } else {
 res.sendFile(error)
  }
});

router.get('/textpro/WolfLogo', async(req, res, next) => {
  const apikeyInput = req.query.apikey;
  const text = req.query.text;
  const text2 = req.query.text2;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)  
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-wolf-logo-black-white-937.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
    })
  })
  .catch((err) => console.log(err));
  } else {
 res.sendFile(error)
  }
});

router.get('/textpro/WolfLogoGalaxy', async(req, res, next) => {
  const apikeyInput = req.query.apikey;
  const text = req.query.text;
  const text2 = req.query.text2;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)  
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
    })
  })
  .catch((err) => console.log(err));
  } else {
 res.sendFile(error)
  }
});

router.get('/textpro/NinjaLogo', async(req, res, next) => {
  const apikeyInput = req.query.apikey;
  const text = req.query.text;
  const text2 = req.query.text2;
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)  
  if(key.includes(apikeyInput)){
    zrapi 
  .textpro("https://textpro.me/create-ninja-logo-online-935.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
       status: true,
      código: 200,
      criador: `${creator}`,
      resultado: data
    })
  })
  .catch((err) => console.log(err));
  } else {
 res.sendFile(error)
  }
});

//OUTROS


router.get('/news', async (req, res) => {
     var apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

	var data = fs.readFileSync(__path + '/lib/utils/news.js')
	var json = JSON.parse(data)

     res.json(json)
})

router.get('/ssweb', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    url = req.query.url;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!url) return res.json(loghandler.noturl)
  if (!url.startsWith('http')) return res.json(loghandler.invalidLink)

     var hasil = await getBuffer(`http://nurutomo.herokuapp.com/api/ssweb?url=${url}`)
       await fs.writeFileSync(__path + '/tmp/screenshot.png', hasil)

         res.sendFile(__path + '/tmp/screenshot.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/calculator', async (req, res) => {
    var número = req.query.número,
	apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!angka) return res.json(loghanlder.notangka)

    var val = número
    .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/π|pi/gi, 'Math.PI')
    .replace(/e/gi, 'Math.E')
    .replace(/\/+/g, '/')
    .replace(/\++/g, '+')
    .replace(/-+/g, '-')
  var format = val
    .replace(/Math\.PI/g, 'π')
    .replace(/Math\.E/g, 'e')
    .replace(/\//g, '÷')
    .replace(/\*×/g, '×')
  try {
    console.log(val)
    var result = (new Function('return ' + val))()
    if (!result) res.json({ message : result })

	res.json({
		status : true,
		criador : creator,
		resultado : result
	  })
  } catch (e) {
    if (e == undefined) res.json({ error : `Ocorreu um erro!` })
        res.json({ message : `Formato incorreto, apenas 0-9 e símbolo -, +, *, /, ×, ÷, π, e, (, ) não suporta` })
  }
})

router.get('/hd', async (req, res) => {
    var img = req.query.img,
        apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!img) return res.json(loghandler.notimg)
  if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

try {
     var media = await getBuffer(img)
     var body = new FormData
         body.append('image', media, 'image')
         var ress = await fetch('http://max-image-resolution-enhancer.codait-prod-41208c73af8fca213512856c7a09db52-0000.us-east.containers.appdomain.cloud/model/predict', {
            method: 'POST',
            body
            })
  if (ress.status !== 200) return await res.json(ress)
    await fs.writeFileSync(__path + '/tmp/hd.png', await ress.buffer())

    res.sendFile(__path + '/tmp/hd.png')
   } catch (e) {
	 console.log(e)
    res.sendFile(error)
  }
})

router.get('/dare', async (req, res, next) => {
        var apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

     var json = await (await fetch(`https://xptnbotapinew.herokuapp.com/?dare&apikey=xptn`)).json()

     res.json({
	     status : true,
	     creator : creator,
	     result : json.Dare
       })
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/quotemaker', async (req, res, next) => {
        var quote = req.query.quote,
	    author = req.query.author,
	    theme = req.query.theme,
	    apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!quote) return res.json({ message : `Masukan parameter quote (kata quotes)` })
  if (!author) return res.json({ message : `Masukan parameter author` })
  if (!theme) return res.json(loghandler.nottheme)

     var json = await (await fetch(`https://terhambar.com/aw/qts/?kata=${quote}&author=${author}&tipe=${theme}`)).json()
       await fs.writeFileSync(__path + '/tmp/quotemaker.png', await getBuffer(json.result))

         res.sendFile(__path + '/tmp/quotemaker.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/attp', async (req, res, next) => {
       var text = req.query.text,
	   apikeyInput = req.query.apikey;
	
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

 try {
	 var result = await imageToBase64(`https://api.xteam.xyz/attp?file&text=${text}`)
	 var hasil = Buffer.from(result, 'base64')
            await fs.writeFileSync(__path + '/tmp/attp.webp', hasil)

    res.sendFile(__path + '/tmp/attp.webp')
  } catch (e) {
  	console.log(e)
    res.sendFile(error)
      }
})

router.get('/ttp2', async (req, res, next) => {
       var text = req.query.text,
	   apikeyInput = req.query.apikey;
	
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

 try {
	 var result = await imageToBase64(`https://api.xteam.xyz/ttp?file&text=${text}`)
	 var hasil = Buffer.from(result, 'base64')
            await fs.writeFileSync(__path + '/tmp/ttp.webp', hasil)

    res.sendFile(__path + '/tmp/ttp.webp')
  } catch (e) {
  	console.log(e)
    res.sendFile(error)
      }
})


router.get('/spotify', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    q = req.query.q;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!q) return res.json(loghandler.notquery)

     var json = await (await fetch(`https://api.zeks.xyz/api/spotify?apikey=apivinz&q=${q}`)).json()

     res.json(json)
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/instagram', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    url = req.query.url;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!url) return res.json(loghandler.noturl)
  if (!url.startsWith('http')) return res.json(logahndler.invalidLink)

     var json = await (await fetch(`https://api-anoncybfakeplayer.herokuapp.com/igdown?url=${url}`)).json()

     res.json(json)
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/towebp', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    url = req.query.url;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!url) return res.json(loghandler.noturl)
  if (!url.startsWith('http')) return res.json(logahndler.invalidLink)

     var json = await (await fetch(`http://zekais-api.herokuapp.com/pngtowebp?url=${url}`)).json()

     res.json({
	     status : true,
	     creator : creator,
	     result : json.result
       })
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})


router.get('/math2', async (req, res, next) => {
        var apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

     var json = await (await fetch(`https://salism3api.pythonanywhere.com/math`)).json()

     res.json({
	     status : true,
	     criador : creator,
	     img : json.image,
	     resposta : json.answer,
	     pontos : 50000
       })
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/toimg', async (req, res, next) => {
        var webp = req.query.webp,
	    apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!webp) return res.json(loghandler.notimg)
  if (!webp.startsWith('http')) return res.json(loghandler.invalidLink)

    var img = await getBuffer(webp)
    var bufs = []
    var im = spawn('convert', ['webp:-', 'png:-'])
    im.on('error',e => res.sendFile(error))
    im.stdout.on('data', chunk => bufs.push(chunk))
    im.stdin.write(img)
    im.stdin.end()
    im.on('exit', () => {
      var encmedia = imageToBase64(Buffer.concat(bufs))
      var media = Buffer.from(encmedia, 'base64')
        fs.writeFileSync(__path + '/tmp/toimg.png', media)

     res.sendFile(__path + '/tmp/toimg.png')
   })
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/qrcode', async (req, res, next) => {
        var text = req.query.text,
	    apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var qr = await qrcode.toDataURL(text.slice(0, 2048), { scale: 8 })
     var hasil = qr.split`,`[1]
        await fs.writeFileSync(__path + '/tmp/qr.png', hasil, 'base64')
          res.sendFile(__path + '/tmp/qr.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/imgbb', async (req, res, next) => {
        var url = req.query.url,
	    apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!url) return res.json(loghandler.noturl)
  if (!url.startsWith('http')) return res.json(loghandler.invalidLink)

     var json = await (await fetch(`https://api.imgbb.com/1/upload?expiration=180&key=761ea2d5575581057a799d14e9c78e28&image=${url}&name=imgbb-uploader`)).json()

     res.json({
	     status : true,
	     creator : creator,
	     info : 'url otomatis akan hilang dalam 3 menit',
	     url : json.data.url_viewer,
	     display_url : json.data.url,
	     delete_url : json.data.delete_url
       })
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/createcode', async (req, res, next) => {
        var text = req.query.text,
	    apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

  var len = 25
  var arr = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ9876543210'
  var random = ''
  var random2 = ''

        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }
        var lenn = 10
        var code = '';
        for (var i = lenn; i > 0; i--) {
            random2 += arr[Math.floor(Math.random() * arr.length)];
        }
   var encode = random + random2 + code

       res.json({
       	     status : true,
             criador : creator,
             texto : text,
             código : encode
        })
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/bucin', async (req, res, next) => {
	    apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)

     var json = await (await fetch(`http://zekais-api.herokuapp.com/bucin`)).json()

     res.json({
	     status : true,
	     creator : creator,
	     bucin : json.result
       })
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/memegen', async (req, res, next) => {
  var img = req.query.img,
      t1 = req.query.t1,
      t2 = req.query.t2;
      apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(!img) return res.json(loghandler.notimg)
  if(!t1) return res.json(loghandler.nottext)
  if(!t2) return res.json(loghandler.nottext2)
  if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

     var hasil = await (await fetch(`http://zekais-api.herokuapp.com/mgen?text1=${t1}&text2=${t2}&url=${img}`)).buffer()
   await fs.writeFileSync(__path + '/tmp/memegen.png', hasil)

     res.sendFile(__path + '/tmp/memegen.png')
     
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})


// End of script
module.exports = router
