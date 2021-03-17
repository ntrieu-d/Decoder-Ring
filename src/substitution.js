// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!alphabet) {
      return false;
    }
    if (alphabet.length != 26) {
      return false;
    }
    if (encode === false) {
      return decodeSubstitution(input, alphabet);
    }
    for (let i = 0; i < alphabet.length; i++) {
      let temp = alphabet[i];
      for (let j = i + 1; j <= alphabet.length - 1; j++) {
        if (temp == alphabet[j]) {
          return false;
        }
      }
    }
    let n = 97;
    return input
      .toLowerCase()
      .split(" ")
      .map(function (c) {
        let enAnswer = "";
        for (let i = 0; i < c.length; i++) {
          for (let j = 0; j < alphabet.length; j++) {
            if (c[i].charCodeAt() - n == j) enAnswer += alphabet[j];
          }
        }
        return enAnswer;
      })
      .join(" ");
  }

  function decodeSubstitution(input, alphabet) {
    let n = 97;
    return input
      .split(" ")
      .map(function (c) {
        let deAnswer = "";
        for (let i = 0; i < c.length; i++) {
          for (let j = 0; j < alphabet.length; j++) {
            if (alphabet[j] == c[i]) {
              deAnswer += String.fromCharCode(j + 97);
            }
          }
        }
        return deAnswer;
      })
      .join(" ");
  }
  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
