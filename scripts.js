const testString = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nobis odit, perferendis voluptates vero quas nisi doloribus ducimus et! Odit officiis deleniti in autem enim eius nihil rerum animi ducimus."

function decodeText(text) {
	const words = text.split(" ")

	let result = [] //ez azért kell, mert a forEach nem return-öl

	words.forEach(word => {
		let wordLength = word.length
		let found = false  //Ez az írásjelet nézi, hogy van-e

		if (word[wordLength - 1] === "!" || word[wordLength - 1] === "," || word[wordLength - 1] === ".") {
			wordLength--
			found = true
		}

		if (wordLength % 2 === 0) {
			let newWord = ""

			if (found == true) {
				newWord = word.substring(0, wordLength).split('').reverse().join('')
			} else {
				newWord = word.split('').reverse().join('')
			}

			/*  -------------- ÍGY HÁTULRÓL FUT VÉGIG A SZAVAKON: -----------
			
			for (let i = wordLength - 1; i >= 0; i--) {
				newWord += word[i]	
			} */

			if (found === true) {
				newWord += word[word.length - 1]
			}

			result.push(newWord)
		}

		if (wordLength % 2 !== 0) {
			let newWord = word.toUpperCase()

			result.push(newWord)
		}
	})

	return result.join(" ")
}

console.log(decodeText(testString))
console.log(decodeText("The quick brown fox jumps over the lazy dog."))

/* 

TASKS:
RUN THROUGH THE TEXT, AND MAKE THE FOLLOWING CHANGES:
 - IF THE WORDS LENGTH IS EVEN -> REVERSE THE WORD
 - IF THE WORDS LENGTH IS ODD -> MAKE THE WORD UPPERCASE

*/