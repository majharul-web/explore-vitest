import { describe, expect, it } from "vitest";
import { add } from "./Math";

describe("Success case test()", () => {
  it("should be return correct sum of provided array", () => {
    // Arrange
    const numbers = [1, 2, 3];
    const exceptedResult = numbers.reduce((acc, cur) => acc + cur);

    // Actions
    const result = add(numbers);

    // Assertions
    expect(result).toBe(exceptedResult);
  });
});

describe("Error handling test()", () => {
  it("should be return error if array is empty", () => {
    try {
      add();
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should be return error if array is empty", () => {
    const resultFunction = () => {
      add();
    };

    expect(resultFunction).toThrow();
  });

  // regular expression
  it("should be return error if array is empty", () => {
    const resultFunction = () => {
      add();
    };

    expect(resultFunction).toThrow(/is not iterable/i);
  });
});
