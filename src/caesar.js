// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    var n = 26;
    if (encode === false) {
      return caesar(input, -1 * shift);
    }    
    if (shift < 0) {
      return caesar(input, shift + n);
    }
    return input
      .split("")
      .map(function (c) {
        if (c.match(/[a-z]/i)) {
          var code = c.charCodeAt();
          var move = code >= 65 && code <= 90 ? 65 : code >= 97 && code <= 122 ? 97 : 0;
          return String.fromCharCode(((code - move + shift) % n) + move);
        }
        return c;
      })
      .join("")
      .toLowerCase();
  }
  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
