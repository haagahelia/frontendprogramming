---
sidebar_position: 3
---

# Modern JavaScript

## ES6 and beyond
				
- JavaScript language got several new features when the **ECMAScript 2015 (ES6)** version of the language standard was released. The previous version before ES6 was ES5 from year 2009.
- Many more new features have been introduced in the ECMAScript versions.
- In React programming many modern JavaScript features are used extensively.
- This material, like all recent React documentation and tutorials, uses the ES6+ syntax.

### Classes

Class declaration:

```javascript
class Shape { 
  constructor (id, x, y) { 
    this.id = id 
    this.move(x, y) 
  } 
  // a method that all Shape objects will have
  move (x, y) {	 
    this.x = x 
    this.y = y  
  } 
}							
```
Classes were used in React class components. Nowadays, React components are created using functions and in this material we use only functional components.

Inheritance:

```javascript
class Circle extends Shape { 
  constructor (id, x, y, radius) { 
    super(id, x, y) 
    this.radius = radius 
  } 
}								
```

 ### Variables

**`let`** keyword (block scope)
```	js
let age = 24;
```
**`const`** keyword (constants, block scope)
```js
const PI = 3.141593;
````
**Note!** Using `var` keyword is considered obsolete.
		
## String Interpolation (template literals)
- Template literals can be used to concatenate strings easily and with  more readable syntax.

```js
let person = { firstname: 'Jack', lastname: 'Russell' };

// Traditional way
let msg = "Hello " + person.firstname + " " + person.lastname;

// Using ES6 template literals
let msg = `Hello ${person.firstname} ${person.lastname}`;
```

**Note!**  Use backticks (``)	with template literals.			

### Arrow functions

- Arrow function expression is more compact way to declare functions.

Syntax: `params => expression`

```javascript
// anonymous arrow function
x => x + 1;
					
// equivalent to
function(x) {
  return x + 1;
}
```

- In the case of multiple parameters, you have to use parenthesis.
```js
(x, y) => x * y;
```
- If there are no parameters, you have to use empty parenthesis.
```js
() => "Hello World";
```
---
- If there are several statements in the function body, you need the curly braces and the return statement.
```js
(x, y) => {
  console.log(x, y); 
  return x * y;
}					
```
- To call an arrow function, you can save function to a variable.
```js
const calc = (x, y) => x * y;

// Call function
calc(5, 3); // Returns 15
```

### Object destructuring

- You can use object destructuring to extract object properties and bind these to variables.

```js
// Object destructuring assignment
const coords = {     
  latitude: 61.4977517,
  longitude: 23.7609533
};

// define variables latitude and longitude
// assign values from the similarly named attributes of object coords
const { latitude, longitude } = coords;
```
- We will use object destructuring later with React component `props`.

### Array destructuring
- You can use array destructuring to extract elements and bind these to variables.

```js
// Array destructuring assignment
const myArray = ["first", "second", "third"];

const [a, b, c] = myArray; // const a = "first", b = "second", c = "third";

// used e.g. here
const [address, setAddress] = useState('');
```

- We will use array destructuring later with React component `states` like shown in the example above:

### Spread operator (...)

```js
// Spread operator expands an iterable object into a list of arguments.
// can be used to concatenate arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// can be used to make shallow copy of array or object
const newArray = [...arr3];
const newPerson = {...person};

// can be used to make a partial update on an object
const newPerson = {...person, firstname: 'William'};
// 'William' overrides the previous value of 
// firstname, other attributes remain as they were 
```

### Property intializer shorthand

```js
// Property initializer shorthand
let length = 12;
let width = 23;

let dimensions = { length, width };
// same as
let dimensions = {
  length: length,
  width: width
};
```
