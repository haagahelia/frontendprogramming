---
title: 'Context API'
sidebar_position: 2
---
- The **Context API** in React is a way to manage and share state across multiple components without the need to pass props down the component tree. It is useful for handling global or shared state, such as user authentication status, theme, or any data that multiple components need access to.

Using the props vs Context API:
![](./img/context.png)

- To start using context, you need to create if first. You typically define this in a separate file.

```js title="ThemeContext.js"
import { createContext } from 'react';

const ThemeContext = createContext();

export default ThemeContext;
```
- Next, you have to create **context provider** that holds the shared state provide it to its child components.

```js title="ThemeProvider.js"
import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
```
- Now, any component within theme provider can access the context usint the React `useContext` hook function.  
```jsx
import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const MyComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <button onClick={toggleTheme}>Change theme</button>
      <p>Current theme is: {theme}</p>
    </>
  );
};

export default MyComponent;
```
