// Make a barcode
// Barcode will be a hashed string

// Hashed string contains the following
// - Generate pseudo random 12-16 character alphanumeric string
// - timestamp
// - Company name
// - Previous Hash value

// The string will then be appended to a blockchain

// import { randBetween, randString } from './utilities/default_rng.js';
// import { randBetween, randString } from './utilities/seeded_rng.js';
// const rand = require('./utilities/default_rng.js');
const rand = require('./utilities/seeded_rng.js');

const MIN_LEN = 12;
const MAX_LEN = 16;

console.log(rand.randString(rand.randBetween(12, 16), '#aA'));
