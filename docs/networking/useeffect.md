---
title: 'useEffect hook'
sidebar_position: 2
---
### useEffect
- The `useEffect` hook function can be used to perform side-effects in React function component. The side-effect can be for example, fetch request. 
#### Syntax
The `useEffect` hook function takes two arguments:
```js
React.useEffect(callback, [dependencies])
```
where,
- `callback` contains the code for the side effect you want to perform.
- `dependencies` is an optional dependency array that contains values that `useEffect` hook depends on.

#### Without dependency array
- Without the dependency array, side-effect is automatically executed each time after component has been rendered.
```js
React.useEffect(() => {
  // Code here is executed after each re-render
});
```
#### Using dependency array
- We can pass an array as the second argument to the `useEffect` hook (dependency array).
- In the following example, we pass `count` state to the `useEffect` hook. In that case, side-effect re-runs only if the `count` state value changes.

```js
React.useEffect(() => {
  // Code here is executed only if the count state changes
}, [count]);
```
#### Empty dependency array
- You can also pass an empty array to `useEffect` hook. Then side-effect runs only after the **first** render. This is good for example, when we make calls to REST APIs.

```js
React.useEffect(() => {
  // Code here is executed only after the first render
}, []);
```
---
### useEffect cleanup
- One example of a side effect is connection to some external system. You can use `useEffect` to connect after the first render. 
- The `useEffect` hook has optional **cleanup** functionality that you can use. It is `return` statement, and the code is invoked after the component has been removed from the page (unmounted).
```js
useEffect(() => {
  // Side effect code

  return () => {
    // Clean up code
  }
}, [dependencies])
```
---
- Example: Component connects to a chat room after the first render. When component is unmounted, it disconnects from a chat room. 
```js
// Example from https://react.dev
import { useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom() {
  useEffect(() => {
    const connection = createConnection('https://localhost:1234/room1');
    connection.connect();
    // Cleanup --> disconnect
    return () => {
        connection.disconnect(); // Invoked when component is unmounted
    };
  }, []);
  // ...
}
```
---
### React hooks rules
- There are some general rules when using React hooks (useState, useEffect, etc.):
  1.  Use hooks only at the top level of your component function.
  2.  Don’t use hooks inside the loops, if statements or nested functions.

:::tip CORRECT
```js
function MyComponent() {
  React.useEffect(() => {
    // Some code
  })
  ...
}
```
:::
:::danger WRONG
```js
function MyComponent() {    
  function fetchData() {
    // useEffect is called inside a nested function
    React.useEffect(() => {
      // Some code
    })
  }
  ...
}
```
:::