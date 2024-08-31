const { suiteConway, suiteConwaySequence } = require("./script.js");

describe("suiteConway", () => {
  it("a returns 1a", () => {
    expect(suiteConway("a")).toBe("1a");
  });

  it("b returns 1b", () => {
    expect(suiteConway("b")).toBe("1b");
  });

  it("ab returns 1a1b", () => {
    expect(suiteConway("ab")).toBe("1a1b");
  });

  it("111 returns 31", () => {
    expect(suiteConway("111")).toBe("31");
  });
});
