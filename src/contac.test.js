const concat = require("./contac");
const concatFull = require("./contacFull");

test("Testando função concat", () => {
  expect(concat("abc", "123")).toBe("abc-123");
});

test("Testando função concatFull", () => {
  expect(concatFull("abc", "123")).toBe("abc123");
});
