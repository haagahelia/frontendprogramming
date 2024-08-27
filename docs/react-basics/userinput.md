---
title: 'User Input'
description: 'In this section, you will learn how to read user input in React components'
sidebar_position: 6
---
### Reading user input
In this part, you will learn how to read user input in React components

You can use input element’s `onChange` event attribute and `value` attribute to read user input into the state of the component. 

In the following example

- The `onChange` handler is invoked at every keystroke and it calls `handleChange` function that saves user input to react state
- As the state changes, react updates the state value back to the input element by setting the `value` attribute of the element.

```jsx
<input type="text" value={name} onChange={handleChange} />
```
- Next, create `handleChange` function to update state. The `event.target.value` is now the value from the input element that causes the `onChange`  DOM event.
```jsx
const handleChange = (event) => {
  setName(event.target.value);
};
```
- The following example prints a text on the screen, that you type to the input element

```jsx live
function HelloName() {
  const [name, setName] = React.useState('');
  
  const handleChange = (event) => {
    setName(event.target.value); 
  };
  
  return (
    <div>
      <div>Hello {name}</div>
      <input type="text" value={name} onChange={handleChange} />
    </div>
   );
}
```
### Multiple input elements
- If you have multiple input elements it is not good idea to create own `onChange` listener function to all input elements.
- We can handle all input fields using one common `onChange` listener function. To achieve that we will also use `name` attribute of the input elements.
- The value of the `name` attribute should be exactly the same than name of the state where we store the value of the input element.
- In the following example, we have the state called `name` and it is an object that has two attributes `firstName` and `lastName`.
```js
const [name, setName] = React.useState({firstName: '', lastName: ''});
```
- Now, you can remember from the previous slides that if you want to update only `firstName` or `lastName`, the syntax is following
```js  
setName({ ...name, lastName: 'Johnson'});
```
- Add the `name` attributes to input elements. The value should be the same than attribute name of the state object (`firstName` and `lastName`).
- Value of the `value` attributes should be `stateObject.attribute` (`name.firstName` and `name.lastName`)

```jsx
<input name="firstName" value={name.firstName} onChange={handleChange} />
<input name="lastName" value={name.lastName} onChange={handleChange} />
```
- Now, the both input elements has same function called if the `onChange` DOM event is invoked
- Then, we can use `event.target.name` and `event.target.value` to save input element’s value to correct state. See the syntax below:

```jsx
const handleChange = (event) => {
  setName({ ...name, [event.target.name]: event.target.value});
}
```
- Now if the user types something to firstName input element, the `event.target.name` is firstName and `event.target.value` is a value that user has entered to the firstName input element.
- You can also use separate states as shown in the following example. First, declare states  
```js
const [firstName, setFirstName] = React.useState('');
const [lastName, setLastName] = React.useState('');
```
- And, then input elements looks the following.
```jsx
<input 
  name="firstName" 
  value={firstName} 
  onChange={ e => setFirstName(e.target.value) } />
<input 
  name="lastName"
  value={lastName} 
  onChange={ e => setLastName(e.target.value) } />
```
---
### Forms
- You can also use HTML `form` element.
- Form handling is a little bit different with React. A HTML form will always navigate to another page when it is submitted but we want to avoid that. Common case is that we want to invoke javascript function that has access to form data after the submission.
- If we use the form element:
```html
<form onSubmit={handleSubmit}>
  <input type="text" onChange={handleChange} value={text}/>
  <input type="submit" value="Add"/>
</form>
```
- Now, if an user submits the form it invokes `handleSubmit` function.
- In the `handleSubmit` function, we have to first call `event.preventDefault()` function. That function ignores the default behavior of the form and it will not be submitted.
```js
const handleSubmit = (event) => {
  event.preventDefault(); // ignores the default action 
  // Do something with form data
}
```
:::note
In this material we are using **controlled components**. A controlled component is a form element, such as an input field, whose value is controlled by the state of a React component. This means that the value of the input element is stored in the component's state, and any changes to the input element are reflected in the component's state. It easy to manipulate and validate user input when using controlled components.

You can also use an **uncontrolled components** to handle form elements. In this case, React doesn't manage the value of an uncontrolled component, and you have to rely on traditional DOM methods to access and manipulate the input's value. Uncontrolled component can be used, if you have a simple use case that doesn't require managing the input value through React state.
:::