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

describe("suiteConwaySequence", () => {
  it("a, 0 returns empty ", () => {
    expect(suiteConwaySequence("a", 0)).toBe("");
  });

  it("a, 1 returns 1a", () => {
    expect(suiteConwaySequence("a", 1)).toBe("1a\n");
  });

  it("a, 5 returns 1a111a311a13211a111312211a", () => {
    expect(suiteConwaySequence("a", 5)).toBe(
      "1a\n111a\n311a\n13211a\n111312211a\n"
    );
  });
});
