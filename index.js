// describe('#buildHistogram', function() {
// 	let magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
// 	"e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t"]
// 	it("collects assigns each letter as a key and the number of occurrences as the value", function() {
// 		let result = {"a": 1, "c": 2, "e": 6, "h": 2, "i": 1, "l": 1, "m": 1, "n": 1, "o": 2, "r": 2, "s": 2, "t": 2}
// 		let functionResult = buildHistogram(magazine)
// 		expect(functionResult["e"]).toEqual(6)
// 		expect(functionResult["h"]).toEqual(2)
// 	})
// })

const buildHistogram = (mag) => {
    let answer = {}
    for (let i = 0; i < mag.length; i++) {
        const element = mag[i];
        if (element in answer) {
            answer[element] = answer[element] + 1
        } else {
            answer[element] = 1
        }
    }
    return answer
}

// describe('#canBuildNote', function() {
// 	it("returns false if cannot build the note", function() {
// 		let magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
// 		"e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t"]
// 		let note = "handitover"
// 		expect(canBuildNote(magazine, note)).toEqual(false)
// 	})

// 	it("returns false if cannot build the note with repeated letters", function() {
// 		let magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
// 		"e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t"]
// 		let note = "iisat"
// 		expect(canBuildNote(magazine, note)).toEqual(false)
// 	})

// 	it("returns true if can build the note", function() {
// 		let magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
// 		"e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t"]
// 		let note = "hereisat"
// 		expect(canBuildNote(magazine, note)).toEqual(true)
// 	})
// })

const canBuildNote = (mag, note) => {
    let dictionary = buildHistogram(mag)
    let finalNote = note.split("")
    for (let i = 0; i < finalNote.length; i++) {
        if (finalNote[i] in dictionary) {
            if (dictionary[finalNote[i]] < 1) {
                return false
            } else {
                dictionary[finalNote[i]] = dictionary[finalNote[i]] - 1
            }
        } else {
            return false
        }
    }
    return true
}











