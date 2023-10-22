---
title: 'React Component'
sidebar_position: 3
---
- In the past the most common way to create components was using classes. You might see class components still, if you look some older React code.
- `React.Component` is abstract base class that will be typically subclassed by your own components.

```js
class HelloComponent extends React.Component {
  render() {
    return <div>Hello World</div>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HelloComponent />);
```
- Nowadays, the React components are created using the functions and this is the way we are using in this course.
```jsx
// React component
function HelloComponent() {
  return <div>Hello World</div>;
}

// Create root element
const root = ReactDOM.createRoot(document.getElementById("root"));
// Initial render
root.render(<HelloComponent />);
```
- `return` statement defines how component is rendered (How it looks like).
- `ReactDOM.createRoot` creates a 'root element' that is rendered into a html page. 
- In this example, `createRoot` is used to create a root at the DOM element with the id `root` and then the render method is used to render a React component (in this case, `HelloComponent`) into that root. 
- What does **render** means in React? Before your components are displayed on screen, they must be rendered by React. You can read more about rendering in https://react.dev/learn/render-and-commit#.

:::note
React component's name must start with an uppercase letter. Use PascalCase in naming for example, MyComponent.
:::
- You can also use ES6 arrow function:
```js
const HelloComponent = () => {
  return <div>Hello World</div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HelloComponent />);
```
### How to start coding?
- At the beginning of this course, we are using HTML file where we include React library. That is fast way to start learning React and it doesn't require any installations.
- We recommend to use proper IDE, such as VS Code (https://code.visualstudio.com/). 
- **Task**: Use the following steps and create your first React component that renders hello message and your name.

To start coding examples and assignments from the first part of this course:
1. Create a new HTML file using the VS Code and copy the following code into the file. 
2. Then, you can create React component inside the last `<script>` tags.
3. Open the file in a Web browser to see how your component looks.
3. After you have modified the HTML file, refresh the browser to see changes.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Front End Programming / React</title>
  </head>
  <body>
    <!-- We will put our React component inside this div. -->
    <div id="root"></div>

    <!-- Load React & Babel -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6.26.0/babel.min.js"></script>

    <!-- React component code -->
    <script type="text/babel">
    </script>
  </body>
</html>
```
:::tip 
Remeber to keep browser console open to see errors
:::
---
### Return statement
- React component’s `return` statement returns elements or components that are rendered to the screen.
- The `return` statement must return a **single element** but you can wrap multiple elements inside one parent element. Or you can use fragments (since React v 16.x).

:::tip CORRECT
```js
return (
  <div>
    <h1>This is main header</h1>
    <p>Main text paragraph</p>
  </div>
);
```
:::

:::danger WRONG
```js
return (
  <h1>This is main header</h1>
  <p>Main text paragraph</p>
);
```
:::
- Now, you can use your first component that you just coded. Try to add multiple elements into your component's `return` statement and see what kind of error you got. Then, wrap elements inside parent element to fix code. 


- The example below is using React `Fragment`: React fragments doesn't add any extra nodes to the DOM.

```js
return (
  <React.Fragment>
    <h1>This is main header</h1>
    <p>Main text paragraph</p>
  </React.Fragment>
);
```

- You can also use short syntax with fragment: `<>` `</>`.

---
### Conditional rendering

- You can use conditional rendering when rendered content depends on the current state of your component. For example:

```jsx
if (iconurl) {
  return <img alt="icon" src={iconurl} />;
} else {
  return <div>No image found</div>;
}
```
- The example above renders image element if the `iconurl` state is defined, otherwise it renders **_No image found_** text.
- You can also use ternary operator and now, we can have only one `return` statement.
```jsx
return (
  iconurl ? 
  <img alt="icon" src={iconurl} /> :
  <div>No image found</div>
);
```
---
### Further reading

-  https://react.dev/learn/conditional-rendering


