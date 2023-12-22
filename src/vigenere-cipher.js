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
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    return this._processMessage(message, key, "encrypt");
  }

  decrypt(encryptedMessage, key) {
    return this._processMessage(encryptedMessage, key, "decrypt");
  }

  _processMessage(input, key, mode) {
    if (!input || !key) {
      throw new Error("Incorrect arguments!");
    }

    const inputUpper = input.toUpperCase();
    const keyUpper = key.toUpperCase();
    let processedMessage = "";
    let keyIndex = 0;

    for (let i = 0; i < inputUpper.length; i++) {
      const currentChar = inputUpper[i];
      if (this._isLetter(currentChar)) {
        const encryptedChar = this._shiftCharacter(
          currentChar,
          keyUpper[keyIndex % keyUpper.length],
          mode
        );
        processedMessage += encryptedChar;
        keyIndex++;
      } else {
        processedMessage += currentChar;
      }
    }

    return this.isDirect
      ? processedMessage
      : this._reverseString(processedMessage);
  }

  _isLetter(char) {
    return char.match(/[A-Z]/);
  }

  _shiftCharacter(char, keyChar, mode) {
    const charCodeOffset = char.charCodeAt(0) - "A".charCodeAt(0);
    const keyCharCodeOffset = keyChar.charCodeAt(0) - "A".charCodeAt(0);

    return String.fromCharCode(
      mode === "encrypt"
        ? ((charCodeOffset + keyCharCodeOffset) % 26) + "A".charCodeAt(0)
        : ((charCodeOffset - keyCharCodeOffset + 26) % 26) + "A".charCodeAt(0)
    );
  }

  // Reverse a string
  _reverseString(str) {
    return str.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
