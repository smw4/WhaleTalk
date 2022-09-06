let input = 'I am fluent in Beluga';
input = input.toLowerCase();

const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
	if (input[i] === 'e' || input[i] === 'u') {
		resultArray.push(input[i]);
	}

	for (let j = 0; j < vowels.length; j++) {
		if (input[i] === vowels[j]) {
			resultArray.push(vowels[j]);

			// testing to see the vowels from input    console.log(vowels[j]);
		}
	}
	//	console.log(i);
}

// console.log(resultArray);

let resultString = resultArray.join('').toUpperCase();

console.log('"' + resultString + '!"');
