const caesar = require("../src/caesar.js");
const expect = require("chai").expect;

describe("caesar", () => {
  it("should return 'false' if shift value is not present", () => {
    const expected = false;
    const actual = caesar("thinkful");
    expect(actual).to.equal(expected);
  });
  it("should return 'false' if shift value is equal to 0", () => {
    const expected = false;
    const actual = caesar("thinkful", 0);
    expect(actual).to.equal(expected);
  });
  it("should return 'false' if shift value is less than -25", () => {
    const expected = false;
    const actual = caesar("thinkful", -26);
    expect(actual).to.equal(expected);
  });
  it("should return 'false' if shift value is greater than 25", () => {
    const expected = false;
    const actual = caesar("thinkful", 26);
    expect(actual).to.equal(expected);
  });
  it("should shift letters to the right if shift value is positive", () => {
    const expected = "wklqnixo";
    const actual = caesar("thinkful", 3);
    expect(actual).to.equal(expected);
  });
  it("should shift letters to the left if shift value is negative", () => {
    const expected = "qefkhcri";
    const actual = caesar("thinkful", -3);
    expect(actual).to.equal(expected);
  });
  it("should decode message if encode is false", () => {
    const expected = "thinkful";
    const actual = caesar("wklqnixo", 3, false);
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters", () => {
    const expected = "def";
    const actual = caesar("ABC", 3);
    expect(actual).to.equal(expected);
  });
  it("should wrap around letters", () => {
    const expected = "bpqa qa i amkzmb umaaiom!";
    const actual = caesar("This is a secret message!", 8);
    expect(actual).to.equal(expected);
  });
  it("should also applying wrap around to decoding", () => {
    const expected = "this is a secret message!";
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    expect(actual).to.equal(expected);
  });
});
