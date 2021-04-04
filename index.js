const QRCode = require('qrcode');
const { Block, Chain } = require('./Blockchain.js');
// Option to import a seeded number generator or to use default Math.Random
// const rand = require('./utilities/default_rng.js');
const rand = require('./utilities/seeded_rng.js');

// Create the 12 - 16 character alphanumeric string
const alphaNumString12_16 = () => {
	const MIN_LEN = 12;
	const MAX_LEN = 16;
	return rand.randString(rand.randNumBetween(MIN_LEN, MAX_LEN), '#aA');
};

// Create a parking pass for the given company
const createParkingPass = (company) => {
	const randString = alphaNumString12_16();
	const timestamp = Date.now();
	return parkChain.addBlock(new Block(randString, timestamp, company));
};

// Test code for creating QR codes from hash of parking pass
const generateQR = async (text) => {
	try {
		await QRCode.toFile('./testqr.png', text);
	} catch (err) {
		console.error(err);
	}
};

// Initialize the chain
const parkChain = new Chain();

// Create a parking pass for the company 'ParkHub'
createParkingPass('ParkHub');

generateQR(createParkingPass('ParkHub'));
createParkingPass('ParkHub');
createParkingPass('ParkHub');
createParkingPass('ParkHub');
createParkingPass('ParkHub');
createParkingPass('ParkHub');
createParkingPass('ParkHub');
createParkingPass('ParkHub');
createParkingPass('ParkHub');
console.log(JSON.stringify(parkChain, null, 2));
