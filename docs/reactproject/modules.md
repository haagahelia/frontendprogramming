---
title: 'JavaScript Modules'
sidebar_position: 2
---
Before we start to create React projects, it is important to understand how JavaScript modules works.

- Scripts can be split into several files using modules. A module can provide classes, library functions, and variables for other modules to use.
- There are several different JavaScript module systems. In React programming, we use **ES6 modules**.
- CommonJS modules are imported using require-function. It is the default in Node.js even though ES6 modules are supported too. 
- In brief
  - A module is simply a JavaScript file.
  - A module exports the variables and functions that it offers to be used outside the file.
  - Another module that uses the services of another module imports them from the module.

---
### JavaScript modules / Export

#### Named export
- You can export an identifier by adding the keyword `export` in front of the declaration. This is so called **named export**, and module can have multiple named exports. Named exports are useful for exporting variables and functions. 
```js
export const myPi = 3.14;

export function circleArea(r) {
  return myPi*r*r;
}
```
- Alternatively, you can export all the items you want to export in a single export statement at the end of your module file.
```js
export { myPi, circleArea };
```
- The exported items can be imported into other files. The imported features can be used just like they were defined inside the same file. 
- Note: imported variables are always considered `const`, no matter how they were declared.
```js
import { myPi, circleArea } from './mylib.js';

console.log('The value of pi is', myPi);
console.log(circleArea(1.0));
```
#### Default export
- Another way of exporting is to define a `default export` in the module. This is so called **default export** and you can have only one default export in module. In React, components are exported using the default export.

```js
const myPi = 3.14;
const area = r => myPi * r * r;
const circumference = r => 2 * myPi * r;
export default { area, circumference }; // an object with two attributes
```
- You can import the default like this: 
```js
import c from './mydefault.js' // default export is assigned to c

console.log(c.area(4));
console.log(c.circumference(4));
```
---
### JavaScript modules / Import
- You can import everything from a module by importing the module as an object. The exported items are accessible as properties of the module object.
```js
import * as c from './mylib.js';
console.log('The value of pi is', c.myPi);
console.log(c.circleArea(1.0));
```
---
### Further Reading
- MDN - JavaScript modules: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
