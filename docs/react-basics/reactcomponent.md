---
title: 'React Component'
sidebar_position: 5
---
If you look at some older React code, you might still see class components. The `React.Component` is abstract base class that will be typically subclassed by your own components.

```js
// Obsolete, don't use.
class HelloComponent extends React.Component {
  render() {
    return <div>Hello World</div>;
  }
}
```
### Functional component
Nowadays, React components are created using functions, and this is how we create components in this course.
```jsx
// React component
function HelloComponent() {
  return <div>Hello World</div>;
}
```
The `return` statement defines how component is rendered (How it looks like). It can contain HTML elements (https://react.dev/reference/react-dom/components), other React components or JavaScript expressions (JSX).

What does **render** mean in React? 
Before your components are displayed on screen, they must be rendered by React. The rendering process can be divided into three phases:
1) Trigger: There are two reasons that trigger the rendering process. The first one is intial render which is the first time a React component is rendered and displayed on the web page. The re-render is triggered when component's state changes (state comes later).
2) Render: After the render process is triggered, React calls components to find out what to display on screen.
3) Commit: Once React determines the minimal set of changes required, it updates the actual DOM.

You can read more about rendering in https://react.dev/learn/render-and-commit#.

:::info
React component's name must start with an **uppercase** letter. Use PascalCase in naming for example, MyComponent.
:::
You can also use ES6 arrow function:
```jsx
const HelloComponent = () => {
  return <div>Hello World</div>;
};
```
### Return statement
React component’s `return` statement returns elements or components that are rendered to the screen.

The `return` statement must return a **single element** but you can wrap multiple elements inside one parent element. Or you can use fragments (since React v 16.x).

:::tip CORRECT
```jsx
return (
  <React.Fragment>
    <h1>This is main header</h1>
    <p>Main text paragraph</p>
  </React.Fragment>
);
```
:::

:::danger WRONG
```jsx
return (
  <h1>This is main header</h1>
  <p>Main text paragraph</p>
);
```
:::
Now, you can use the first component that you just coded. Try to add multiple elements to your component's `return` statement and see what kind of error you get. Then, wrap elements inside the parent element to fix the code.

The example below is using React `Fragment`. React fragments doesn't add any extra nodes to the DOM.

```jsx
return (
  <React.Fragment>
    <h1>This is main header</h1>
    <p>Main text paragraph</p>
  </React.Fragment>
);
```

You can also use short syntax with fragment: `<>` `</>`.

```jsx
return (
  <>
    <h1>This is main header</h1>
    <p>Main text paragraph</p>
  </>
);
```
---
### Further reading
- https://react.dev/learn/your-first-component

