// Your tests here

//We'll give users double the amount of points if their word is a palindromeLinks to an external site.: a word that reads the same forwards and backwards, like "mom" or "racecar".

import { isPalindrome } from "../utils"

describe("isPalindrome", () => {
    it("returns true if the string is a palindrome, false if it isn't", () => {
        const word = "RACECAR"
        const truthiness = isPalindrome(word)
        expect(truthiness).toBe()
    })
    it("returns false for an empty string", () => {
        const word = ""
        const truthiness = isPalindrome(word)
        expect(truthiness).toBe(false)
    })
})