---
title: 'Todolist Example'
sidebar_position: 4
---
- Create a new React App using **Vite** (Select React and JavaScript).
- Create a new file called **TodoList.jsx** inside the **src** folder. Add the following code into the file.
```jsx title="TodoList.jsx"
function TodoList() {
  return(
    <></>
  );
}

export default TodoList;
```
- The todo item has one description field called `desc`.
- We need one state for the description and one array state for all todos. Let’s declare states using the `useState` hook function.

```js title="TodoList.jsx"
// Import useState from react
import { useState } from "react";

// Declare states
const [desc, setDesc] = useState("");
const [todos, setTodos] = useState([]);
```
- The `input` element is used to collect data from a user
- The `addTodo` function is invoked when the `button` is pressed

```jsx title="TodoList.jsx"
  return(
    <>
      //highlight-next-line
      <input type="text" onChange={handleChange} value={desc} />
      //highlight-next-line
      <button onClick={addTodo}>Add</button>    
    </>
  );
```
- The `addTodo` function adds a new todo item to the `todos` array state. We use spread notation (`…`) to add a new item at the end of the existing array.
- The `handleChange` function store entered data to the `desc` state.

```jsx title="TodoList.jsx"
const handleChange = (event) => {
  setDesc(event.target.value);
};

// Remember to call preventDefault() if using form
const addTodo = () => {
  setTodos([...todos, desc]);
};
```
- Next, we add the `table` element to the `return` statement and render all todos inside the table using the `map()` function.

```jsx title="TodoList.jsx"
return (
  <>
    <input type="text" onChange={handleChange} value={desc} />
    <button onClick={addTodo}>Add</button>
    //highlight-start
    <table>
      <tbody>
        {todos.map((todo, index) => (
          <tr key={index}>
            <td>{todo}</td>
          </tr>
        ))}
      </tbody>
    </table>
    //highlight-end
  </>
);
```
- You also have to export the `TodoList` component.

```js
export default TodoList;
```
- Finally, we render the `TodoList` component inside the `App` component's `return` statement

```jsx title="App.jsx"
import "./App.css";
//highlight-next-line
import TodoList from "./TodoList";

function App() {
  return (
    <>
      //highlight-next-line
      <TodoList />
    </>
  );
}

export default App;
```
- Now, you can run the project using the following npm command:
```bash
npm run dev
```
- Type some todos and see that they are displayed in the table. 
---
### Styling

- Styles are defined in the App.css and index.css files.
- These are Vite's default styles, and you can use your own instead.
- For example, the button style can be found in the index.css file

```css
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
```
---
- The todolist is now in the center of screen because the `body` style contains the following setting `place-items: center;`. You can remove that line from the `index.css` file.

Now, your todolist should look the following:
![Todolist](./img/todolist1.png)

`***Tasks***: Try to implement the following features to your Todolist app.
1. Clear the input element after the Add button is pressed.
2. Add validation that an  `alert` is shown, if the `desc` state value is empty.
---
## Split components
- Let’s split todolist example application into multiple components.
- We will add a new stateless component called `TodoTable` and separate it from the `TodoList` component.
- Add a new file called **TodoTable.jsx** into the **src** folder. The skeleton code of the component is shown below.

```jsx
import React from "react";

function TodoTable(props) {
  return <></>;
}

export default TodoTable;
```
:::note
The `TodoTable` component will be a **stateless component**. The stateless components are easy to test because they are pure functions. They are also simple to understand because they are just functions that takes props as input and returns JSX.
:::

- Finally, import the `TodoTable` component into `TodoList` component.

```js title="TodoList.jsx"
import TodoTable from "./TodoTable";
```

- Remove the HTML table element from the `TodoList` component's `return` statement and add the `TodoTable` component there.

```js title="TodoList.jsx"
return (
  <>
    <input type="text" onChange={handleChange} value={desc} />
    <button onClick={addTodo}>Add</button>
    //highlight-next-line
    <TodoTable />
  </>
);
```
In this phase, our React app's component tree is the following:

![](./img/todolist_tree.png)

- React dataflow is one-way from top to bottom in the component tree.
- The `TodoTable` component will be a child component of the `TodoList` component. Therefore, we can send data from the `TodoList` to `TodoTable` component by using the props.

- Now, we can pass the `todos` state to the `TodoTable` component using props.
```js title="TodoList.jsx"
<TodoTable todos={todos} />
```

- Finally, we use `map` to render todos in the `TodoTable` component.

```jsx title="TodoTable.jsx"
return (
  <>
    <table>
      <tbody>
        <tr>
          <th>Date</th>
          <th>Description</th>
        </tr>
        {props.todos.map((item, index) => (
          <tr key={index}>
            <td>{item.date}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);
```
---
### Vite and ESLint

- **Linters** in programming are tools designed to analyze source code and identify potential issues, coding style violations, and error
- **ESLint** is popular linter for JavaScript and TypeScript. Vite is using ESLint by default.
- You can find the ESLint configuration file `.eslintrc.cjs` from the root folder of your Vite project.
- You can define ESLint rules in this file to specify coding standards and guidelines for your project. 
- You might have seen that ESLint is giving a warning about missing `PropTypes`. We introduced PropTypes at the beginning of the course, but we haven't used them. React recommends using TypeScript instead of checking prop types at runtime.  

- You can exclude PropTypes check by adding the following line in your `.eslintrc.cjs` file:
```js title=".eslintrc.cjs"
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/prop-types': 0  // ADD THIS LINE 
  },
}
```
