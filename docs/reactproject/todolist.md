---
title: 'Todolist Example'
sidebar_position: 4
---
### Create Todolist project
We will create a simple todolist app where the user enters tasks and all tasks are listed in a table.

- Create a new React App using **Vite** (Select React and JavaScript).
- Create a new file called **TodoList.tsx** inside the **src** folder. Add the following code into the file.
```jsx title="TodoList.tsx"
function TodoList() {
  return(
    <></>
  );
}

export default TodoList;
```
- The todo item has one description field named `description`.
- We need one state for the description and one array state for all todos. Let’s declare states using the `useState` hook function but first, we have to declare interface for our todo item. The `interface Todo` in TypeScript is used to define the shape of the `Todo` object.

```tsx
interface Todo {
  description: string;
}

function TodoList() {
  return(
    <></>
  );
}

export default TodoList;
```

Now, we can declare states:

```tsx title="TodoList.tsx"
import { useState } from "react";

interface Todo {
  description: string;
}

function TodoList() {
  // Declare states
  const [todo, setTodo] = useState<Todo>({description: ''});
  const [todos, setTodos] = useState<Todo[]>([]);

  return(
    <></>
  );
}

export default TodoList;
```
- The type of `todo` is `Todo` object. It is an object with a single property `description` initialized to an empty string ('').
- The type of `todos` is an array of `Todo` objects (`Todo[]`), where `Todo` is an interface that defines the shape of a todo item.

Next, we render the necessary elements to gather information and call the function that adds a new todo.
- The `input` element is used to collect data from a user.
- The `addTodo` function is called when the `button` is pressed.

```tsx title="TodoList.tsx"
  return(
    <>
      <input 
        placeholder="Description" 
        onChange={event => setTodo({...todo, description: event.target.value})} 
        value={todo.description} 
      />
      <button onClick={addTodo}>Add</button>    
    </>
  );
```
- The `addTodo` function adds a new todo object to the `todos` array state. We use spread notation (`…`) to add a new item at the beginning of the existing array.
- The `onChange` handler updates the `todo` state with the typed value. The `event` type is inferred automatically by the TypeScript compiler, so it is not explicitly required.
- When creating a separate function to handle input data, you need to define the type of the function parameter, as demonstrated in the following example:
```tsx title="TodoList.tsx"
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ description: event.target.value });
};
```
- The `event` is typed as `ChangeEvent<HTMLInputElement>`, indicating that this function handles change events from an HTML input element.

### Display todos
- Next, we add the `table` element to the `return` statement and display all todos inside the table using the `map()` function.

```tsx title="TodoList.tsx"
return (
  <>
    <input 
      placeholder="Description" 
      onChange={event => setTodo({...todo, description: event.target.value})} 
      value={todo.description} 
    />
    <button onClick={addTodo}>Add</button>
    //highlight-start
    <table>
      <tbody>
        {todos.map((todo, index) => (
          <tr key={index}>
            <td>{todo.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
    //highlight-end
  </>
);
```
- You also have to export the `TodoList` component.

```ts
export default TodoList;
```
- Finally, the complete `TodoList.tsx` source code looks the following:
```tsx title="TodoList.tsx"
import { useState } from "react";

interface Todo {
  description: string;
}

function TodoList() {
  const [todo, setTodo] = useState<Todo>({description: ''});
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const addTodo = () => {
    setTodos([...todos, todo]);
  };

  return(
    <>
      <input 
        placeholder="Description" 
        onChange={event => setTodo({...todo, description: event.target.value})} 
        value={todo.description} 
      />
      <button onClick={addTodo}>Add</button>
      <table>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.description}</td>
            </tr>
          ))}
        </tbody>
      </table>   
    </>
  );
}

export default TodoList;
```
- Finally, we render the `TodoList` component inside the `App` component's `return` statement
```jsx title="App.tsx"
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

- Styles are defined in the App.css and index.css files. These are Vite's default styles, and you can use your own instead.
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
- The todolist is currently centered on the screen due to the body style setting `place-items: center;`. To move the todolist to the top of the screen, change this value to `flex-start` in the `index.css` file.

Now, your todolist should look the following:
![Todolist](./img/todolist1.png)

:::info[TASKS]
Try to implement the following features to your Todolist app.
1. Clear the input element after the Add button is pressed.
2. Add validation that an `alert` is shown if the `desc` state value is empty when new todo is added..
:::

You can also add some styling to your table. For example, add the following styling to the `App.css` file:
```css
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

table th,
table td {
  border: 1px solid black;
  padding: 6px; 
}
```
---
### Split components
- Let's refactor the todolist example application by breaking it into multiple components.  **Note:** We'll use the todo item from the assignment, which also includes a date.
- We will add a new stateless component called `TodoTable` and separate it from the `TodoList` component.
- After splitting the components, our component tree is the following:

![](./img/todolist_tree.png)

- React data flow is one-way, from top to bottom, in the component tree.
- The `TodoTable` component will be a child component of the `TodoList` component. Therefore, we can send data from the `TodoList` to `TodoTable` component by using the props. We can pass the `todos` state to the `TodoTable` component using props.

- Add a new file called **TodoTable.tsx** into the **src** folder. The starter code of the component is shown below.

```tsx
function TodoTable(props) {
  return <></>;
}

export default TodoTable;
```
- We need to define the type for the `props`, which is an array of `todo` objects. Therefore, we define a new interface called `TodoTableProps`.

```tsx
interface Todo {
  description: string;
}

interface TodoTableProps {
  todos: Todo[];
}

function TodoTable(props: TodoTableProps) {
  return(
    <></>
  );
}

export default TodoTable;
```
- You will notice that we have defined the same `Todo` interface in two files. Instead of doing that, it is better to create a separate file for defining interfaces and then import these interfaces into the files where they are needed. Create a new file called `types.ts` in the `src` folder and define the interfaces there.

```ts title="types.ts"
export interface Todo {
  description: string;
  date: string;
}

export interface TodoTableProps {
  todos: Todo[];
}
```
- Then, we import the interface into the TodoTable component where they are needed.
```tsx title="TodoTable.tsx"
import { TodoTableProps } from './types';

function TodoTable(props: TodoTableProps) {
  return (
    <></>
  );
}

export default TodoTable;
```
- Now, you can also remove `todo` interface definition in the `TodoList` component and import if from the `types.ts` file.
- Next, we render table in the `TodoTable` component.
```tsx title="TodoTable.tsx"
import { TodoTableProps } from "./types";

function TodoTable(props: TodoTableProps) {
  return(
    <>
      <table>
        <tbody>
        <tr>
          <th>Description</th>
          <th>Date</th>
        </tr>
          {props.todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.description}</td>
              <td>{todo.date}</td>
            </tr>
          ))}
        </tbody>
      </table>       
    </>
  );
}

export default TodoTable;
```
:::note
The `TodoTable` component will be a **stateless component**. The stateless components are easy to test because they are pure functions. They are also simple to understand because they are just functions that takes props as input and returns JSX.
:::

- Finally, import the `TodoTable` component into the `TodoList` component.

```js title="TodoList.tsx"
import TodoTable from "./TodoTable";
```
- Remove the HTML table element from the `TodoList` component's `return` statement and add the `TodoTable` component there and pass `todos` state using props.

```jsx title="TodoList.tsx"
return (
  <>
    <input 
      placeholder="Description" 
      onChange={event => setTodo({...todo, description: event.target.value})} 
      value={todo.description} 
    />
    <button onClick={addTodo}>Add</button>
    //highlight-next-line
    <TodoTable todos={todos} />
  </>
);
```
---
### Vite and ESLint

- **Linters** in programming are tools designed to analyze source code and identify potential issues, coding style violations, and error
- **ESLint** is popular linter for JavaScript and TypeScript. Vite is using ESLint by default.
- You can find the ESLint configuration file `eslint.config.cjs` from the root folder of your Vite project. You can define ESLint rules in this file to specify coding standards and guidelines for your project. 
- You might have seen that ESLint is giving a warning about missing `PropTypes`. We introduced PropTypes at the beginning of the course, but we haven't used them. React recommends using TypeScript instead of checking prop types at runtime.  

- You can exclude the PropTypes check by adding the highlighted line in your `.eslint.config.cjs` file:
```js title="eslint.config.cjs"
export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      //highlight-next-line
      'react/prop-types': 0 
    },
  },
]
```