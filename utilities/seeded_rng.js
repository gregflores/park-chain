const seedrandom = require('seedrandom');

// Random string and number generators using seedrandom created by davidbau
// https://github.com/davidbau/seedrandom

const SEED = 'testSeed';
// Create a seeded random number generator
const prng = seedrandom(SEED);

// Generate random string of given length
// using a choice of alphanumeric characters
// chars param should be string made up of the following options
// a -> lowercase letters
// A -> uppercase letters
// # -> numbers
const randString = (len, chars) => {
	let mask = '';
	if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
	if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	if (chars.indexOf('#') > -1) mask += '0123456789';
	let result = '';
	for (let i = len; i > 0; i--) {
		result += mask[Math.floor(prng() * mask.length)];
	}
	return result;
};

// Generate random number in range inclusive
const randBetween = (min, max) => {
	return Math.floor(prng() * (max - min + 1) + min);
};

exports.randBetween = randBetween;
exports.randString = randString;
