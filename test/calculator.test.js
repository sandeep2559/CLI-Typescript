const add = require('../src/addition');
const sub = require('../src/subtraction');
const mul = require('../src/multiplication');
const div = require('../src/division');

// test case for add operator

test('adds 1 + 2 to equal 3', () => {
    expect(add.add(1,2)).toBe(3);
  });
test('adds -5 + -6 to equal -11', () => {
    expect(add.add(-5,-6)).toBe(-11);
  });
test('adds -5 + 6 to equal 1', () => {
    expect(add.add(-5,6)).toBe(1);
  });
test('adds  1562356958 + 3625458698 to equal 3', () => {
    expect(add.add(1562356958,3625458698)).toBe(5187815656);
  });



// test case of subtraction
test('subtraction: 2 - 1 to equal 1', () => {
  expect(sub.sub(2,1)).toBe(1);
});

test('subtraction: -2 - -1 to equal -1', () => {
  expect(sub.sub(-2,-1)).toBe(-1);
});

test('subtraction: -2 - 1 to equal -3', () => {
  expect(sub.sub(-2,1)).toBe(-3);
});



// // test case of Multiplication

test('multiplication: 2 * 3 to equal 6', () => {
  expect(mul.mul(2,3)).toBe(6);
});

test('multiplication: -2 * -3 to equal 6', () => {
  expect(mul.mul(-2,-3)).toBe(6);
});

test('multiplication: -2 * 3 to equal -6', () => {
  expect(mul.mul(-2,3)).toBe(-6);
});

test('multiplication: 0.3 * 3 to equal 0.9', () => {
  expect(mul.mul(0.3,0.3)).toBe(0.09);
});

test('multiplication: -2 * 0 to equal 0', () => {
  expect(mul.mul(-2,0)).toBe(-0);
});

test('multiplication: 1562356958 * 3625458698 to equal 5664260622761920000', () => {
  expect(mul.mul(1562356958,3625458698)).toBe(5664260622761920000);
});



// // Test case of Division

test('division: 6 / 3 to equal 2', () => {
  expect(div.div(6,3)).toBe(2);
});

test('division: -6 / -3 to equal 2', () => {
  expect(div.div(-6,-3)).toBe(2);
});

test('division: -6 / 3 to equal -2', () => {
  expect(div.div(-6,3)).toBe(-2);
});



test("Division: Divide with zero", () => {
  expect(div.div(6, 0)).toBe(Infinity);
});

test('division: 1000 / 0.000000001 to equal 999999999999.9999', () => {
  expect(div.div(1000,0.000000001)).toBe(999999999999.9999);
});

test('division: 789659842563 / 4596 to equal 171814587.15469974', () => {
  expect(div.div(789659842563,4596)).toBe(171814587.15469974);
});

test('division: 789659842563 / 4596 to equal 171814587.15469974', () => {
  expect(div.div("4",4)).toBe(1);
});