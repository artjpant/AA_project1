const http = require('http');
const url = require('url');
const navHome = '<p><a href="/tlu">Miks TLU?</a> | <a href="/vanasona">Tänase päeva vanasõna</a></p><hr>';
const navBack = '<p><a href="/">Tagasi avalehele</a></p><hr>';
//moodul failitee haldamiseks
const path = require('path');
const fs = require ('fs').promises;
//const fs = require ('fs').promises;
const dateTimeET = require('./src/dateTimeET')
const pageHead = '<!DOCTYPE html>\n<html lang="et">\n<head>\n\t<meta charset="utf-8">\n\t<title>Artjom Pantepajev, veevbiprogrammeerimine</title>\n</head>\n<body>\n' ;
const pageBanner = '<img src="bannerAA.png" alt="banner">';
const pageTlu = '<img src="tlubanner.jpg" alt="banner">';
const pageBody = '\t<h1>Artjom Pantepajev, veebiprogrammeerimine</h1>\n\t <p>See leht on loodud veebiprogrammeerimise kursusel <a href="https://www.tlu.ee">Tallinna أœlikoolis</a> ning ei sislda tأµsiseltvأµetavat sisu!</p>\n\t<p>Esialgu tutvusime lihtsalt HTML keelega, peatselt programmeerime.</p>\n\t<hr>';
const pageFoot = '\n</body>\n</html>';



http.createServer(async function(req, res){
	console.log(req.url);
	let currentURL = url.parse(req.url, true)
	console.log('Parsituna: ' + currentURL.pathname);
	
	if(currentURL.pathname === '/'){
		res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
		//res.write('Meie veeb kaivitus');
		let currentDay = dateTimeET.weekDayET();
		let currentDate = dateTimeET.dateET(1);
		let currentTime = dateTimeET.timeET();
		let timeInfo = 'Täna on: ' + currentDay + ' ' +'Kuupäev: ' + currentDate + ' ' +'Leht avati kell: ' + currentTime + '.';
		res.write(pageHead);
		res.write(navHome);
		res.write(pageBanner);
		res.write(pageBody);
		res.write(timeInfo);
		res.write(pageFoot);
		return res.end();
	}
	
	else if(currentURL.pathname === '/tlu'){
		res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
		res.write(pageHead);
		res.write(navBack)
		res.write(pageTlu);
		res.write('\n\t<h1>Miks valisin TLU?</h1>\n\t<p>Valisin TLU andmeanalüütika õppekava, sest mind huvitab andmete analüüsimine ja nende abil probleemidele lahenduste leidmine. Samuti soovin omandada praktilisi teadmisi ja oskusi, mida saan tulevikus oma karjääris kasutada.</p>');
		res.write(pageFoot);
		return res.end()
	}

	
	else if(currentURL.pathname === '/vanasona'){
		res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
		let rawText = await fs.readFile('txt/vanasonad.txt', 'utf8');
		let folkWisdom = rawText.split(';');
		let wisdomNum = Math.round(Math.random() * (folkWisdom.length - 1));
    let valitudVanasona = folkWisdom[wisdomNum];
		res.write(pageHead);
		res.write(navBack)
		res.write('\n\t<h1>Tänase päeva vanasõna</h1>');
		res.write(valitudVanasona)
		res.write(pageFoot);
		return res.end()
	}
	else if (currentURL.pathname.endsWith('.jpg') || currentURL.pathname.endsWith('.png')) {
    let filePath = path.join(__dirname, 'pic', currentURL.pathname);
    try {
      let data = await fs.readFile(filePath);
      let contentType = currentURL.pathname.endsWith('.png') ? 'image/png' : 'image/jpeg';
      res.writeHead(200, { "Content-Type": contentType });
      return res.end(data);
    } catch (err) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      return res.end('Pilti ei leitud');
    }
  }
	
	
	/*else if(currentURL.pathname === '/bannerAA.png'){
		//liidame virtuaalse serveri paris lataloogidega
		let bannerPath = path.join(__dirname, 'pic', currentURL.pathname);
		try {
			const data = await fs.readFile(bannerPath);
			res.writeHead(200, {"Content-type": "image/png"});
			return res.end(data);
		} catch (err){
			res.writeHead(404, {"Content-type": "text/plain; charset=utf8"});
			return res.end('Pilti ei leitud');
		}
	}*/
	

	
	
	
}).listen(5314);