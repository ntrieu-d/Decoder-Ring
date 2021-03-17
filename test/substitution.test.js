const substitution = require("../src/substitution.js");
const expect = require("chai").expect;

describe("substitution", () => {
  it("should return false if the substitution alphabet is missing", () => {
    const expected = false;
    const actual = substitution("thinkful");
    expect(actual).to.equal(expected);
  });
  it("should return false if the substitution alphabet is not exactly 26 character", () => {
    const expected = false;
    const actual = substitution("thinkful", "short");
    expect(actual).to.equal(expected);
  });
  it("should return false if the substitution alphabet does not contain unique characters", () => {
    const expected = false;
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    expect(actual).to.equal(expected);
  });
  it("should encode a message by using the given substitution alphabet", () => {
    const expected = "jrufscpw";
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal(expected);
  });
  it("should work with any kind of key with unique characters", () => {
    const expected = "y&ii$r&";
    const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
    expect(actual).to.equal(expected);
  });
  it("should preserve spaces", () => {
    const expected = "elp xhm xf mbymwwmfj dne";
    const actual = substitution(
      "You are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibev"
    );
    expect(actual).to.equal(expected);
  });
  it("should decode a message by using the given substitution alphabet", () => {
    const expected = "thinkful";
    const actual = substitution(
      "jrufscpw",
      "xoyqmcgrukswaflnthdjpzibev",
      false
    );
    expect(actual).to.equal(expected);
  });
  it("should work with any kind of key with unique charadters when decoding", () => {
    const expected = "message";
    const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    expect(actual).to.equal(expected);
  });
  it("should preserve spaces when decoding", () => {
    const expected = "you are an excellent spy";
    const actual = substitution(
      "elp xhm xf mbymwwmfj dne",
      "xoyqmcgrukswaflnthdjpzibev",
      false
    );
    expect(actual).to.equal(expected);
  });
});
