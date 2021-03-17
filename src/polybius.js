// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    var n = 65;
    let decode = decodePolybius(input);
    if (encode === false) {
      return decode;
    }

    return input
      .toUpperCase()
      .split("")
      .map(function (c) {
        if (c.match(/[a-z]/i)) {
          const code = c.charCodeAt();
          let vertical = null;
          let horizontal = null;
          if (code >= 65 && code <= 72) {
            vertical = Math.floor((code - n) / 5 + 1);
            horizontal = code - (n + 5 * (vertical - 1) - 1);
          } else if (code === 73 || code === 74) {
            vertical = 2;
            horizontal = 4;
          } else if (code >= 75 && code <= 90) {
            vertical = Math.floor((code - n - 1) / 5 + 1);
            horizontal = code - (n + 5 * (vertical - 1));
          }
          return `${horizontal}${vertical}`;
        }
        return c;
      })
      .join("")
      .toLowerCase();
  }

  function decodePolybius(input) {
    var res2 = input.split(" ");
    for (let i = 0; i < res2.length; i++) {
      if (res2[i].length % 2 != 0) {
        return false;
      }
    }
    return input
      .split(" ")
      .map(function (c) {
        let a = "";
        for (let j = 0; j < c.length; j += 2) {
          let v = parseInt(c[j]);
          let h = parseInt(c[j + 1]);
          let ch = String.fromCharCode((h - 1) * 5 + v + 96);
          if (ch.charCodeAt() - 96 === 9) {
            ch = "(i/j)";
          }
          if (ch.charCodeAt() - 96 >= 10) {
            ch = String.fromCharCode((h - 1) * 5 + v + 96 + 1);
          }
          a += ch;
        }
        return a;
      })
      .join(" ");
  }
  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
