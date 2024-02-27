// Your code here


export function isPalindrome(word) {
    const reversedWord = word.split("").reverse().join("")

    // Tests case-insensitive palindrome
    word.toLowerCase() === reversedWord.toLowerCase() ? true : false

    // Tests for empty string
    if (word === "") {
        return false
    }
}

