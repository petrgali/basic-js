import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(type = true) {
    this.direct = type
    this._mod = 26
    this._base = 65
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!')
    message = message.toUpperCase()
    key = key.toUpperCase()
    let encrypted = ''
    let i = 0
    for (let char of message) {
      if (i === key.length) i = 0
      switch (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
        case true:
          encrypted += String.fromCharCode(
            ((char.charCodeAt(0) - this._base + key.charCodeAt(i) - this._base) % this._mod) + this._base
          )
          i++
          break
        default: encrypted += char
      }
    }
    return this.direct ? encrypted : encrypted.split('').reverse().join('')
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!')
    message = message.toUpperCase()
    key = key.toUpperCase()
    let decrypted = ''
    let i = 0
    for (let char of message) {
      if (i === key.length) i = 0
      switch (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
        case true:
          decrypted += String.fromCharCode(
            ((char.charCodeAt(0) - key.charCodeAt(i) + this._mod) % this._mod) + this._base
          )
          i++
          break
        default:
          decrypted += char
      }
    }
    return this.direct ? decrypted : decrypted.split('').reverse().join('')
  }
}