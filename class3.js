const fs = require('fs');
const dateTimeET = require('./src/dateET');
//const dateET = require('./src/dateET.js');
const textRef = 'txt/vanasonad.txt';


	

function showText(rawText){
	//console.log(rawText);
	//teeme teksist listi, kasutame eraldajana ';' märki
	let folkWisdom = rawText.split(';');
	//console.log(folkWisdom);
	//loosin kas 1 või kõik 
	if(Math.round(Math.random()) == 0){
		//väljastan ühe juhusliku vanasõna
		let wisdomNum = Math.round(Math.random() * (folkWisdom.length - 1));
		//console.log('Täna on: ' + dateET.dateFormattedET());
		console.log('Tänane vanasõna: ' + folkWisdom[wisdomNum]);
		console.log(dateTimeET.dateET());
		console.log(dateTimeET.timeET());
	} else {
		//väljastan kõik vanasõnad nummerdatult
		for(let i = 0; i < folkWisdom.length; i ++){
		console.log((i + 1) + '. ' + folkWisdom[i]);
		}
	}
}

function readTextFile(fileRef){
	fs.readFile(fileRef, 'utf8', (err, data)=>{
		if(err){
			console.log('Viga: ' + err);
		} else {
			showText(data);
		}
	});
}

readTextFile(textRef);