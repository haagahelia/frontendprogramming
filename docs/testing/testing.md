---
title: 'JavaScript Testing'
sidebar_position: 2
---

#### Jest

- **Jest** is one of the most popular testing library for JavaScript (https://jestjs.io/).
- Jest is not fully supported by Vite but it is good to know some basics of Jest.
- For example, if we have a simple function:

```js
function multiply(x, y) {
  return x * y;
}
```
- Test case for the `multiply` function looks like the following:

```js
test("test 2 * 3", () => {
  expect(multiply(2, 3)).toBe(6);
});
```
- `test` function takes two arguments: a unique name and a test case. You can also use the alias `it`.
- `expect` function is used when you want to test some values. It is normally used with matchers.
- `toBe` is a Jest matcher that checks the value that function returns.
- Find more information about matchers in the Jest documentation.

- You can use the `describe` to group together related test cases.

```js
describe("App component tests", () => {
  test("component renders", () => {
    // 1st test case
  });

  test("header text is shown", () => {
    // 2nd test case
  });
});
```