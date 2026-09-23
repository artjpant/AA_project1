const firstName = 'Artjom';
const lastName = 'Pant';
//vanasti olid muutujad var
let value1 = 7;
let value2 = 6;

function authorsName(){
	console.log(firstName + ' ' + lastName);
	//see polegi õige funktsioon vaid hoopis protseduur
}

function totalValue(){
	return value1 + value2;
}

function randomValue(limit){
	return Math.round(Math.random() * limit);
}

function myMath(limit){
	//lokaalsed muutujad
	let value1 = randomValue(limit);
	let value2 = randomValue(limit);
	return value1 + value2;
}

function timeFormattedET(){
	let timeNow = new Date();
	let hourNow = timeNow.getHours();
	let minuteNow = timeNow.getMinutes();
	let secondNow = timeNow.getSeconds();
	if(hourNow < 10){
		hourNow = '0' + hourNow;
	}
	if(minuteNow < 10){
		minuteNow = '0' + minuteNow;
	}
	if(secondNow < 10){
		secondNow = '0' + secondNow;
	}
	return hourNow + ':' + minuteNow + ':' + secondNow;
}

function dateFormattedET(){
	let timeNow = new Date();
	let dateNow = timeNow.getDate();
	let monthNow = timeNow.getMonth();
	let yearNow = timeNow.getFullYear();
	const monthNamesET = ['jaanuar', 'veeb', 'mart', 'aprill', 'mai', 'juuni', 'juuli', 'august', 'sept', 'okt', 'november', 'detsember'];
	return dateNow + '.' + monthNamesET[monthNow] + '.' + yearNow;
}

function dayPart(){
	let partOfday = 'suvaline hetk';
	let hourNow = new Date().getHours();
	let dayNow = weekday();
	
	if(dayNow == 'laupäev' || dayNow == 'pühapäev'){
		if(hourNow < 12){
		partOfday = 'uneaeg';
		}
		if(hourNow >= 12){
		partOfday = 'Vabaaeg';
		}
	}
	if(dayNow != 'laupäev' && dayNow != 'pühapäev'){
		if(hourNow < 6){
		partOfday = 'uneaeg';
		}
		if(hourNow >= 6 && hourNow < 10){
		partOfday = 'Hommik';
		}
		if(hourNow >= 10 && hourNow < 18){
		partOfday = 'koolipäev';
		}
		if(hourNow >= 18){
		partOfday = 'Vabaaeg';
		}
	}	
	return partOfday;	
}

function weekday(){
	let timeNow = new Date();
	let dayNow = timeNow.getDay();
	const dayNamesET = ['pühapäev', 'esmaspäev', 'teisipäev', 'kolmapäev', 'neljapäev', 'reede', 'laupäev'];
	return dayNamesET[dayNow];
}

authorsName();
console.log('Kahe eelnevalt määratud arvu summa on ' + totalValue() + '.');
console.log('Juhuslik arv: ' + randomValue(5));
console.log('Loositud arvude summa on: ' + myMath(10));
authorsName();
console.log('Kahe eelnevalt määratud arvu summa on ' + totalValue() + '.');
console.log('Kell on: ' + timeFormattedET());
console.log('Täna on: ' + dateFormattedET());
console.log('Praegu on: ' + dayPart() + '.');
console.log('Täna on: ' + weekday() + '.');
