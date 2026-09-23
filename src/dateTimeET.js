const folkMonthNamesET = [
	'näärikuu', 'radokuu', 'paastukuu', 'jürikuu', 'lehekuu', 'pärnakuu',
	'heinakuu', 'lõikuskuu', 'mihklikuu', 'viinakuu', 'talvekuu', 'jõulukuu'
];

const dayNamesET = [
	'pühapäev', 'esmaspäev', 'teisipäev', 'kolmapäev',
	'neljapäev', 'reede', 'laupäev'
];

const monthNamesET = ['jaanuar', 'veebruar', 'märts', 'aprill', 'mai', 'juuni', 'juuli', 'august',
	'september', 'oktoober', 'november', 'detsember'
];

const dateFormattedET = function(formatType = 0){
	let timeNow = new Date();
	
	let monthIndex = timeNow.getMonth();
	let monthName = (formatType === 1) ? folkMonthNamesET[monthIndex] : monthNamesET[monthIndex];
	return timeNow.getDate() + '.' + monthName + '.' + timeNow.getFullYear();
};

const weekDayET = function(){
	let timeNow = new Date();
	return dayNamesET[timeNow.getDay()]
};

function addLeadZero(numValue){
	if(numValue < 10){
		numValue = '0' + numValue;
	}
	return numValue;
}

const timeFormattedET = function(){
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

module.exports = {dateET: dateFormattedET, timeET: timeFormattedET, weekDayET: weekDayET}