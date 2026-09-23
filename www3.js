const http = require('http');
const dateTimeET = require('./src/dateTimeET')
const pageHead = '<!DOCTYPE html>\n<html lang="et">\n<head>\n\t<meta charset="utf-8">\n\t<title>Artjom Pantepajev, veevbiprogrammeerimine</title>\n</head>\n<body>\n';
const pageBody = '\t<h1>Artjom Pantepajev, veebiprogrammeerimine</h1>\n\t <p>See leht on loodud veebiprogrammeerimise kursusel <a href="https://www.tlu.ee">Tallinna أœlikoolis</a> ning ei sislda tأµsiseltvأµetavat sisu!</p>\n\t<p>Esialgu tutvusime lihtsalt HTML keelega, peatselt programmeerime.</p>\n\t<hr>';
const pageFoot = '\n</body>\n</html>';



http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
	//res.write('Meie veeb kaivitus');
	let currentDay = dateTimeET.weekDayET();
	let currentDate = dateTimeET.dateET(1);
	let currentTime = dateTimeET.timeET();
	let timeInfo = 'Täna on: ' + currentDay + ' ' +'Kuupäev: ' + currentDate + ' ' +'Leht avati kell: ' + currentTime + '.';
	res.write(pageHead);
	res.write(pageBody);
	res.write(timeInfo)
	res.write(pageFoot);
	return res.end();
}).listen(5314);