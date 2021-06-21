const readlineSync = require('readline-sync');

const places = {
	1: { name: 'Mahamakut Building', people: 0 },
	2: { name: 'Sara Phra Keaw', people: 0 },
	3: { name: 'CU Sport Complex', people: 0 },
	4: { name: 'Sanam Jubb', people: 0 },
	5: { name: 'Samyan Mitr Town', people: 0 }
};

const people = {};

const printPlaces = () => {
	for (num in places) console.log('\t' + num + '. ' + places[num]['name']);
};

const checkIn = () => {
	console.log('Check In!');
	const phoneNum = readlineSync.question('Enter phone number: ');
	printPlaces();
	const selectedPlace = readlineSync.question('Select the place: ');
	if (!(selectedPlace in places)) {
		console.log('Please select a valid place!!!');
		return;
	}
	const placeName = places[selectedPlace]['name'];
	console.log('Checking in ' + phoneNum + ' into ' + placeName);
	if (phoneNum in people) {
		if (people[phoneNum]['place_num'] !== selectedPlace) {
			places[people[phoneNum]['place_num']]['people'] -= 1;
			console.log(
				'Automatically check out at ' +
					people[phoneNum]['place_name'] +
					' and checked in at ' +
					placeName
			);
			people[phoneNum]['place_name'] = placeName;
			people[phoneNum]['place_num'] = selectedPlace;
			places[selectedPlace]['people'] += 1;
		} else console.log('You have already checked in this place!');
	} else {
		people[phoneNum] = {};
		people[phoneNum]['place_name'] = placeName;
		people[phoneNum]['place_num'] = selectedPlace;
		places[selectedPlace]['people'] += 1;
		console.log('Checked in!!');
	}
};

const checkOut = () => {
	console.log('Check Out!');
	const phoneNum = readlineSync.question('Enter phone number: ');
	if (phoneNum in people) {
		places[people[phoneNum]['place_num']]['people'] -= 1;
		delete people[phoneNum];
		console.log('Checked out!!');
	} else console.log("You haven't checked in to any place yet!");
};

const report = () => {
	console.log('Current Population');
	for (num in places)
		console.log(
			'\t' + num + '. ' + places[num]['name'] + ': ' + places[num]['people']
		);
	console.log('All population: ' + Object.keys(people).length);
};

const addPlace = () => {
	console.log('Add a place!');
	const placeName = readlineSync.question('Enter place name: ');
	const placeSize = Object.keys(places).length;
	places[placeSize + 1] = {};
	places[placeSize + 1]['name'] = placeName;
	places[placeSize + 1]['people'] = 0;
};

while (true) {
	console.log('Welcome to Chula Chana!!!');
	console.log('Available commands:');
	console.log('\t1. Check in user');
	console.log('\t2. Check out user');
	console.log('\t3. Print people count');
	console.log('\t4. Add more place');
	const menu = readlineSync.question('Please input any number: ');
	console.log('-------------------------------------------');
	switch (Number.parseInt(menu)) {
		case 1:
			checkIn();
			break;
		case 2:
			checkOut();
			break;
		case 3:
			report();
			break;
		case 4:
			addPlace();
			break;
		default:
			console.log('Please enter a valid choice!');
			break;
	}
	console.log('-------------------------------------------');
}
