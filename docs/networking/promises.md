---
title: 'Promises'
sidebar_position: 3
---
### Handling Promise objects
- `fetch` calls are **asynchronous** and they return **Promise** objects.
- A promise is an object representing the completion of an asynchronous operation in future: the operation either succeeds (_fulfilled_) of fails (_rejected_).
- The end result of a promise is not immediately available, and we do not know if the operation will succeed or not, nor do we know when it will be available. 
- For that reason, promise objects need special handling:
    - The handling needs to be launched when the value of the promise is available
    - We need to handle both successful results as well as failures
-  JavaScript provides two ways to handle promises

### then-catch
- Promises can be handled using the Promise `then` and `catch` methods:
```js
fetch('https://mydomain.com/api')
    .then(response => response.json())  // handle Promise success, handling returns Promise
    .then(data => {                     // handle the latter Promise
        // process response
    })
    .catch(error) { error => console.error(error) }   // handle failures
  }
}
```
- When the promise resolves successfully, the result is passed as an argument to the handler function passed in the `then` call.
- `then` calls can be chained; the previous handler returns another promise.
- If the promise fails or there is any other error during the handling, the handler function passed in the `catch` call is called.
---
### async-await
- ECMAScript 2017 added a new syntax for handling Promise objects. 
- The purpose of the addition was to make asynchronous code easier to write and to read afterwards by making async code look more like old-school synchronous code.
- `async` keyword put in front of a function declaration makes the function return a Promise instead of returning the value directly 
- `await` can be put in front of any async function call to pause your code on that line until the promise fulfills, then return the resulting value
- Errors are handled as exceptions, that is using `try-catch` blocks

### async-await example
```js
fetchData = async () => {
  try {
    // execution is paused until the fetch call result is available
    const response = await fetch('https://mydomain.com/api');
    // execution is paused until the json call result is available
    const data = await response.json();
  }
  catch(error) {    // any error results in exception, handled here
    console.error(error);
  }
}
```
- asynchronous code is within a `try` block. If any failure occurs, it will be handled in the `catch` handler
- __Note__: `await` only works inside `async` functions! Even though the code looks like synchronous it is still asynchronous.
---
### Using async-await in React code
- Both syntaxes are equally valid and usable, you can use either.
- Note that the function passed to `useEffect` may not be `async`. 
- If you need to call an async function with useEffect, pass it a sychronous function that calls your asynchronous function, e.g.
```js
useEffect(() => {   // regular non-async function passed to useEffect
    // define async function that makes the asyncronous calls
    const doFetch = async () => {   
        const result = await fetchData();  // call my async function 
        setData(result);
    };
    // call the async function
    doFetch();
  }, []);
```
---
###  Immediate invokation
- You can do the same as previously also using immediate invokation (calling) of the newly declared function:

```js
useEffect(() => {   // regular non-async function passed to useEffect
    // define async function expression that makes the asynchronous calls...
    (async () => {   
        const result = await fetchData();  // call my async function 
        setData(result);
    })(); // ...and call it immediately

  }, []);
```
- Because the precedence of the function call operator `()` is so high, the function expression (arrow function) needs to be in brackets
---
### Further reading
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table