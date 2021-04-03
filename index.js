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

// Option to import a seeded number generator or to use default Math.Random
// const rand = require('./utilities/default_rng.js');
const rand = require('./utilities/seeded_rng.js');

const SHA256 = require('crypto-js/sha256');

// Create the 12 - 16 character alphanumeric string
const alphaNumString12_16 = () => {
	const MIN_LEN = 12;
	const MAX_LEN = 16;
	return rand.randString(rand.randBetween(MIN_LEN, MAX_LEN), '#aA');
};

class Block {
	constructor(randString, timestamp, company, previousHash = '') {
		this.randString = randString;
		this.timestamp = timestamp;
		this.company = company;
		this.previousHash = previousHash;
		this.hash = this.createHash();
	}
	createHash() {
		return SHA256(
			this.randString + this.timestamp + this.company + this.previousHash
		).toString();
	}
}

class Chain {
	constructor() {
		this.chain = [this.startGenesisBlock()];
	}
	startGenesisBlock() {
		return new Block('GENESIS', '0', 'GENESIS');
	}
	get lastBlock() {
		return this.chain[this.chain.length - 1];
	}
	addBlock(newBlock) {
		newBlock.previousHash = this.lastBlock.hash;
		newBlock.hash = newBlock.createHash();
		this.chain.push(newBlock);
		return newBlock.hash;
	}
}

const createParkingPass = (company) => {
	const randString = alphaNumString12_16();
	const timestamp = Date.now();
	return parkChain.addBlock(new Block(randString, timestamp, company));
};

const parkChain = new Chain();
console.log(JSON.stringify(parkChain, null, 2));

console.log(createParkingPass('ParkHub'));
console.log(JSON.stringify(parkChain, null, 2));
