const expect = require('chai').expect;
const rand = require('../utilities/seeded_rng.js');

describe('Random Generation of numbers and strings', () => {
	describe('Random Number Generation', () => {
		it('Generates random numbers between 0 and 10', () => {
			let staysBetween = true;
			const min = 0;
			const max = 10;
			for (let i = 0; i < 1000; i++) {
				let randNum = rand.randNumBetween(min, max);
				if (!(randNum >= min && randNum <= max)) staysBetween = false;
			}
			expect(staysBetween).to.equal(true);
		});
		it('Generates random numbers between 10 and 100', () => {
			let staysBetween = true;
			const min = 10;
			const max = 100;
			for (let i = 0; i < 1000; i++) {
				let randNum = rand.randNumBetween(min, max);
				if (!(randNum >= min && randNum <= max)) staysBetween = false;
			}
			expect(staysBetween).to.equal(true);
		});
		it('Generates random numbers between -15 and 10', () => {
			let staysBetween = true;
			const min = -15;
			const max = 10;
			for (let i = 0; i < 1000; i++) {
				let randNum = rand.randNumBetween(min, max);
				if (!(randNum >= min && randNum <= max)) staysBetween = false;
			}
			expect(staysBetween).to.equal(true);
		});
		it('Generates even spread of numbers (within 3% of expected average)', () => {
			const min = 0;
			const max = 9;
			const samples = 1000000;
			const numMap = new Map();
			for (let i = 0; i < samples; i++) {
				let randNum = rand.randNumBetween(min, max);
				if (numMap.has(randNum))
					numMap.set(randNum, numMap.get(randNum) + 1);
				else numMap.set(randNum, 1);
			}
			const expectedCount = samples / numMap.size;
			const belowPercent = true;
			for (let [key, value] of numMap) {
				let percent = Math.abs(value - expectedCount) / expectedCount;
				// console.log(percent);
				if (percent > 0.03) belowPercent = false;
			}
			// console.log(numMap);
			expect(belowPercent).to.equal(true);
		});
	});
	describe('Random String Generation', () => {
		it('Generates strings of given lengths', () => {
			const strLen20 = rand.randString(20, '#aA');
			const strLen200 = rand.randString(200, '#aA');
			const strLen10 = rand.randString(10, '#aA');
			const strLen2 = rand.randString(2, '#aA');
			const strLen50 = rand.randString(50, '#aA');
			const strLen67 = rand.randString(67, '#aA');
			const strLen0 = rand.randString(0, '#aA');
			expect(strLen20.length).to.equal(20);
			expect(strLen200.length).to.equal(200);
			expect(strLen10.length).to.equal(10);
			expect(strLen2.length).to.equal(2);
			expect(strLen50.length).to.equal(50);
			expect(strLen67.length).to.equal(67);
			expect(strLen0.length).to.equal(0);
		});
		it('Generates strings of only numbers', () => {
			const strLen20 = rand.randString(20, '#');
			const strLen200 = rand.randString(200, '#');
			const strLen10 = rand.randString(10, '#');
			const strLen2 = rand.randString(2, '#');
			const strLen50 = rand.randString(50, '#');
			const strLen67 = rand.randString(67, '#');
			const strLen0 = rand.randString(0, '#');
			const regexExp = /^[0-9]+$/;
			expect(strLen20.match(regexExp).length).to.equal(1);
			expect(strLen200.match(regexExp).length).to.equal(1);
			expect(strLen10.match(regexExp).length).to.equal(1);
			expect(strLen2.match(regexExp).length).to.equal(1);
			expect(strLen50.match(regexExp).length).to.equal(1);
			expect(strLen67.match(regexExp).length).to.equal(1);
			expect(strLen0.match(regexExp)).to.equal(null);
		});
		it('Generates strings of numbers and uppercase letters', () => {
			const strLen20 = rand.randString(20, '#A');
			const strLen200 = rand.randString(200, '#A');
			const strLen10 = rand.randString(10, '#A');
			const strLen2 = rand.randString(2, '#A');
			const strLen50 = rand.randString(50, '#A');
			const strLen67 = rand.randString(67, '#A');
			const strLen0 = rand.randString(0, '#A');
			const regexExp = /^[0-9A-Z]+$/;
			expect(strLen20.match(regexExp).length).to.equal(1);
			expect(strLen200.match(regexExp).length).to.equal(1);
			expect(strLen10.match(regexExp).length).to.equal(1);
			expect(strLen2.match(regexExp).length).to.equal(1);
			expect(strLen50.match(regexExp).length).to.equal(1);
			expect(strLen67.match(regexExp).length).to.equal(1);
			expect(strLen0.match(regexExp)).to.equal(null);
		});
		it('Generates strings of lowercase and uppercase letters', () => {
			const strLen20 = rand.randString(20, 'aA');
			const strLen200 = rand.randString(200, 'aA');
			const strLen10 = rand.randString(10, 'aA');
			const strLen2 = rand.randString(2, 'aA');
			const strLen50 = rand.randString(50, 'aA');
			const strLen67 = rand.randString(67, 'aA');
			const strLen0 = rand.randString(0, 'aA');
			const regexExp = /^[a-zA-Z]+$/;
			expect(strLen20.match(regexExp).length).to.equal(1);
			expect(strLen200.match(regexExp).length).to.equal(1);
			expect(strLen10.match(regexExp).length).to.equal(1);
			expect(strLen2.match(regexExp).length).to.equal(1);
			expect(strLen50.match(regexExp).length).to.equal(1);
			expect(strLen67.match(regexExp).length).to.equal(1);
			expect(strLen0.match(regexExp)).to.equal(null);
		});
	});
});
