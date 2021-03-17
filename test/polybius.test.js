const polybius = require("../src/polybius.js");
const expect = require("chai").expect;

describe("polybius", () => {
  it("should encode a message by translating each letter to number pairs", () => {
    const expected = "4432423352125413";
    const actual = polybius("thinkful");
    expect(actual).to.equal(expected);
  });
  it("should translate both 'i' and 'j' to 42", () => {
    const expected = "4432423352125413";
    const actual = polybius("thjnkful");
    expect(actual).to.equal(expected);
  });
  it("should leave spaces as is", () => {
    const expected = "3251131343 2543241341";
    const actual = polybius("Hello world");
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters", () => {
    const expected = "3251131343 2543241341";
    const actual = polybius("Hello WoRLd");
    expect(actual).to.equal(expected);
  });
  it("should return false if the length of all numbers is odd", () => {
    const expected = false;
    const actual = polybius("3251131343 25432413241", false);
    expect(actual).to.equal(expected);
  });
  it("should decode a message by translating each pair of numbers into a letter", () => {
    const expected = "hello world";
    const actual = polybius("3251131343 2543241341", false);
    expect(actual).to.equal(expected);
  });
  it("should translate 42 to both 'i' and 'j'", () => {
    const expected = "th(i/j)nkful";
    const actual = polybius("4432423352125413", false);
    expect(actual).to.equal(expected);
  });
  it("should let spaces as is when decoding", () => {
    const expected = "hello world";
    const actual = polybius("3251131343 2543241341", false);
    expect(actual).to.equal(expected);
  });
});
