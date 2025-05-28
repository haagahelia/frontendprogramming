---
title: 'Custom Hooks'
sidebar_position: 3
---

You have learnt that React provides built-in hooks such as `useState` and `useEffect`. You can also create your own hook functions for your own purposes. Custom hooks allow you to extract and reuse logic across multiple components, making your code more modular and maintainable. 

As React built-in hooks, your own hooks names must start with `use` followed by a capital letter. 

In the State sectio, we created counter example. Let' see how counter can be done using the custom hooks. Create a new file named `useCounter.ts`. Create a function named `useCounter` and export that using `default export`:

```ts title="useCounter.ts"
export default function useCounter() {

}
```
Next, we define a `count` state in the hook function and implement functions to increment, decrement, and reset the state:
```ts
import { useState } from 'react';

function useCounter() {
  const [count, setCount] = useState(0);

  const increment = (prevCount) => setCount(prevCount + 1);
  const decrement = (prevCount) => setCount(prevCount - 1);
  const reset = () => setCount(0);
}

export default useCounter;
```
Finally, the `useCounter` hook returns an object containing:
- `count`: The current value of the counter.
- `increment`: A function to increase the counter.
- `decrement`: A function to decrease the counter.
- `reset`: A function to reset the counter to its initial value.

This allows the consuming component to access and use these values and functions.

To test the `useCounter` hook, we can call it within the component where we want to utilize its functionality:
```ts
import useCounter from './useCounter'

function App() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <>
     <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
```
You can also provide an initial value for the `count` state when using the `useCounter` hook. This can be done by modifying the hook to accept a parameter for the initial value:
```ts
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}
```
Now, when calling the `useCounter` hook, you can pass a specific initial value for the counter:
```ts
const { count, increment, decrement, reset } = useCounter(5);
```
---
### Further reading
- https://react.dev/learn/reusing-logic-with-custom-hooks