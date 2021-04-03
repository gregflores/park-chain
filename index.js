// Make a barcode
// Barcode will be a hashed string
// Hashed string contains the following
// - Generate pseudo random 12-16 character alphanumeric string
// - timestamp
// - Company name
// - Previous Hash value
// The hashed string will then be appended to a blockchain

// My approach follows the typical "Basic" blockchain implementation.
// All data is added into the block, then a hash is created of the data
// Which is then also added into the block
// This block is then added into the chain

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

// Initialize the chain and print out to view the genesis block
const parkChain = new Chain();
console.log(JSON.stringify(parkChain, null, 2));

// Create a parking pass for the company 'ParkHub'
console.log(createParkingPass('ParkHub'));
console.log(JSON.stringify(parkChain, null, 2));

// Test code for creating QR codes from hash of parking pass
// const generateQR = async (text) => {
// 	try {
// 		console.log(await QRCode.toString(text, { type: 'terminal' }));
// 	} catch (err) {
// 		console.error(err);
// 	}
// };
const generateQR = async (text) => {
	try {
		await QRCode.toFile('./testqr.png', text);
	} catch (err) {
		console.error(err);
	}
};

generateQR(createParkingPass('ParkHub'));
console.log(parkChain.lastBlock);
