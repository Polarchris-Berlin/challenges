import { add, subtract, multiply, divide } from "./index.js";

// tests for add function
test("add(2, 3) returns 5", () => {
  expect(add(2, 3)).toBe(5);
});

test("add(-8, 3) returns a negative value", () => {
  expect(add(-8, 3)).toBeLessThan(0);
});

test("add(0.5, 0.4) returns a value close to 0.9", () => {
  expect(add(0.5, 0.4)).toBeCloseTo(0.9);
});

// tests for subtract function
test("subtract(15, 5) returns 10", () => {
  expect(subtract(15, 5)).toBe(10);
});

test("subtract(5, 15) returns a negative value", () => {
  expect(subtract(5, 15)).toBeLessThan(0);
});

//tests for multiply function
test("multiply(2, 4) returns 8", () => {
  expect(multiply(2, 4)).toBe(8);
});

test("multiply(-8, 4) returns a negative value", () => {
  expect(multiply(-8, 4)).toBeLessThan(0);
});

test("multiply(4, -8) returns a negative value", () => {
  expect(multiply(4, -8)).toBeLessThan(0);
});

test("multiply(-4, -8) returns a positive value", () => {
  expect(multiply(-4, -8)).toBeGreaterThan(0);
});

//tests for divide function
test("divide(9, 3) returns 3", () => {
  expect(divide(9, 3)).toBe(3);
});

test("divide(0, 5) returns 'You should not do this!'", () => {
  expect(divide(5, 0)).toBe("You should not do this!");
});
