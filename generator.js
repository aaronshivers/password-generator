const shuffleString = require('./shuffleString')

const passwordLength = 10
const hasUppercase = true
const hasLowercase = true
const hasNumbers = true
const hasSymbols = true
const MIN_NUMBERS = 1
const MIN_SPECIAL = 1

// TODO: create method to avoid ambiguous chars
// const AVOID_AMBIGUOUS = false

const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
const numberChars = '0123456789'
const specialChars = '!@#$%^&*'

const generatePassword = () => {
  let password = ''
  let charset = ''

  if (hasUppercase) charset += uppercaseChars
  if (hasLowercase) charset += lowercaseChars
  if (hasNumbers) charset += numberChars
  if (hasSymbols) charset += specialChars

  const addCharsToPassword = (amount, chars) => {
    for (let i = 0; i < amount; i++) {
      const randomNumber = Math.floor(Math.random() * chars.length)

      password += chars[randomNumber]
    }
  }

  // TODO: add conditional checks for password length after adding chars
  if (MIN_NUMBERS) addCharsToPassword(MIN_NUMBERS, numberChars)
  if (MIN_SPECIAL) addCharsToPassword(MIN_SPECIAL, specialChars)
  addCharsToPassword(passwordLength - MIN_NUMBERS - MIN_SPECIAL, charset)

  return shuffleString(password)
}

const pass = generatePassword()
console.log(pass)
