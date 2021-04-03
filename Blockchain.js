const SHA256 = require('crypto-js/sha256');

// Block class which is basically the creation of a parking pass
// Will get created then added to the end of the chain
class Block {
	constructor(randString, timestamp, company, previousHash = '') {
		this.randString = randString;
		this.timestamp = timestamp;
		this.company = company;
		this.previousHash = previousHash;
		this.hash = this.createHash();
	}
	// Hashing is done us SHA256
	// Consists of all pieces of data in the block
	createHash() {
		return SHA256(
			this.randString + this.timestamp + this.company + this.previousHash
		).toString();
	}
}

class Chain {
	// Chain is initialized with a genesis block
	// Genesis block does not follow the typical structure because it always needs to be the same
	constructor() {
		this.chain = [this.startGenesisBlock()];
	}
	startGenesisBlock() {
		return new Block('GENESIS', '0', 'GENESIS');
	}
	get lastBlock() {
		return this.chain[this.chain.length - 1];
	}
	// When adding a new block, we assign it's previous hash to be the current last blocks hash
	// Then we make sure to create the hash for the new block
	// The block is then added to the chain
	// Currently the function also returns the hash of the new block
	addBlock(newBlock) {
		newBlock.previousHash = this.lastBlock.hash;
		newBlock.hash = newBlock.createHash();
		this.chain.push(newBlock);
		return newBlock.hash;
	}
}

exports.Chain = Chain;
exports.Block = Block;
