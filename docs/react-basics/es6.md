---
sidebar_position: 3
---

# Modern JavaScript

## ES6 and beyond
- **ECMAScript** (ES), is a scripting language specification that serves as the foundation for several programming languages, such as JavaScript (https://www.ecma-international.org/technical-committees/tc39/?tab=general.) 				
- JavaScript language got several new features when the **ECMAScript 2015 (ES6)** version of the language standard was released. The previous version before ES6 was ES5 from year 2009.
- Many more new features have been introduced in the ECMAScript versions.
- In React programming many modern JavaScript features are used extensively.
- This material, like all recent React documentation and tutorials, uses the ES6+ syntax.

### Classes

#### Class declaration
You can declare classes using the `class` keyword. The `constructor` method is a special method that gets called when a new instance of the class is created. It initializes the object's properties.

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
:::note
Classes were used in React to declare components before React version 16.8. Nowadays, React components are created using functions, and in this material, we use only functional components.
:::

#### Inheritance

You can achieve inheritance using the `extends` keyword. The following example demonstrates how to create a subclass `Circle` that inherits from the parent class `Shape`.

```javascript
class Circle extends Shape { 
  constructor (id, x, y, radius) { 
    super(id, x, y) 
    this.radius = radius 
  } 
}								
```
 ### Variables

#### `let` keyword 

The scope of `let` variables is **block** (`{ }`) in which they are defined. 
- Block scope is different from the function scope of variables declared with `var`, as let variables are scoped to the nearest block, statement, or expression.
```	js
let age = 24;
```
#### `const` keyword
The `const` declaration declares block-scoped local constant variable. 
- Constant variables must be initialized.
- The value of a constant can't be changed using the assignment operator after initialization
- If a constant is an object, its properties can be added, updated, or removed.
```js
const PI = 3.141593;
````
:::note
Using `var` keyword is considered obsolete.
:::

### String Interpolation (template literals)

Template literals can be used to concatenate strings easily and to get more readable syntax.

```js
let person = { firstname: 'Jack', lastname: 'Russell' };

// Traditional way
let msg = "Hello " + person.firstname + " " + person.lastname;

// Using ES6 template literals
let msg = `Hello ${person.firstname} ${person.lastname}`;
```
:::note
You must use backticks (``)	with template literals.			
:::

### Arrow functions

Arrow function expression is more compact way to declare functions.

Syntax: `params => expression`

```js
// anonymous arrow function
x => x + 1;
					
// equivalent to
function(x) {
  return x + 1;
}
```
- The return value of the function is the value of the expression, 

:::note
_Expression_ is a valid unit of code that resolves to a value
:::

#### Multiple parameters
In the case of multiple parameters, you have to use parenthesis.
```js
(x, y) => x * y;.
```
- The parentheses can only be omitted if the function has a single parameter.

#### No parameters
If there are no parameters, you have to use empty parenthesis.
```js
() => "Hello World";
```
#### Many statements in body
If there are several statements in the function body, you need the curly braces and the `return` statement.
```js
(x, y) => {
  console.log(x, y); 
  return x * y;
}					
```
#### Calling an arrow function
To call an arrow function, you can save function to a variable.
```js
const calc = (x, y) => x * y;

// Call function
calc(5, 3); // Returns 15
```

### Object destructuring

You can use object destructuring to extract object properties and bind these to variables.

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

You can use array destructuring to extract array elements and bind these to variables.

```js
// Array destructuring assignment
const myArray = ["first", "second", "third"];

const [a, b, c] = myArray; // const a = "first", b = "second", c = "third";

```

- We will use array destructuring later with React component states like shown in the example:
```js
const [address, setAddress] = useState('');
```

### Spread operator (...)

Spread operator expands an iterable object into a list of arguments.

- It can be used to concatenate arrays

```js
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
```
- It can be used to make shallow copy of array or object
```js
const newArray = [...arr3];
const newPerson = {...person};
```
- It can be used to make a partial update on an object
```js
const newPerson = {...person, firstname: 'William'};
// 'William' overrides the previous value of 
// firstname, other attributes remain as they were 
```
### Property initializer shorthand
Property initializerr shorthand is a shorter syntax for common task of defining object properties.
```js
// Property initializer shorthand
let length = 12;
let width = 23;

let dimensions = { length, width };

// same as in ES5
let dimensions = {
  length: length,
  width: width
};
```
---
### Further reading
- http://es6-features.org/

