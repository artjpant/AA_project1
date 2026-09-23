const fs = require('fs');
const textRef = 'txt/vanasonad.txt';


	

function showText(rawText){
	//console.log(rawText);
	//teeme teksist listi, kasutame eraldajana ';' märki
	let folkWisdom = rawText.split(';');
	//console.log(folkWisdom);
	//loosin kas 1 või kõik 
	if(Math.round(Math.random()) == 0){
		//väljastan ühe juhusliku vanasõna
		let wisdomNum = Math.round(Math.random() * (folkWisdom.length - 1))
		console.log('Tänane vanasõna: ' + folkWisdom[wisdomNum]);
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
console.log('Hakkame vanasonadega tutvuma.');