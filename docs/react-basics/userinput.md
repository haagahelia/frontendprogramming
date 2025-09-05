---
title: 'User Input'
description: 'In this section, you will learn how to read user input in React components'
sidebar_position: 8
---
### Reading user input
In this part, you will learn how to read user input in React components

You can use input element’s `onChange` event attribute and `value` attribute to read user input into the state of the component. 

We need a `state` to manage the value of the input in a controlled component. In controlled component the values are controlled by the `state` of a React component. 
```js
const [name, setName] = useState("");
```
The `onChange` handler is invoked at every keystroke and it calls `handleChange` function that saves user input to react state. As the state changes, react updates the state value back to the input element by setting the `value` attribute of the element.
```jsx
<input placeholder="Name" value={name} onChange={handleChange} />
```
Next, create `handleChange` function to update state. The `event.target.value` is now the value from the input element that causes the `onChange`  DOM event.
```jsx
const handleChange = (event) => {
  setName(event.target.value);
};
```
Now, you can see the following TypeScript error in `event` parameter in the `handleChange` function: *error TS7006: Parameter 'event' implicitly has an 'any' type.*. We have to define type for the `event`.

```tsx
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setName(event.target.value); 
};
```
`React.ChangeEvent` is a generic type provided by React to represent events triggered by form elements (input, select, textarea). The generic type `<HTMLInputElement> `specifies that this event is for an `input` element.

The following example prints a text on the screen, that you type to the input element:

```tsx
function HelloName() {
  const [name, setName] = useState('');
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value); 
  };
  
  return (
    <>
      <h3>Hello {name}</h3>
      <input 
        placeholder="Name" 
        value={name} 
        onChange={handleChange} />
    </>
   );
}
```
:::note
In this material we are using **controlled components**. A controlled component is a form element, such as an input field, whose value is controlled by the state of a React component. This means that the value of the input element is stored in the component's state, and any changes to the input element are reflected in the component's state. It easy to manipulate and validate user input when using controlled components.

You can also use an **uncontrolled components** to handle form elements. In this case, React doesn't manage the value of an uncontrolled component, and you have to rely on traditional DOM methods to access and manipulate the input's value. Uncontrolled component can be used, if you have a simple use case that doesn't require managing the input value through React state.
:::

### Multiple input elements
If you have multiple input elements it is not good idea to create own `onChange` listener function to all input elements. We can handle all input fields using one common `onChange` listener function. To achieve that we will also use `name` attribute of the input elements. The value of the `name` attribute should be exactly the same than name of the state where we store the value of the input element.

In the following example, we have the state called `person` and it is an object that has two attributes `firstName` and `lastName`. First, we create a type for our state:
```ts
type Person = {
  firstName: string;
  lastName: string;
}
```
Then, declare `person` state:
```ts
const [person, setPerson] = useState<Person>({firstName: '', lastName: ''});
```
To update only the `firstName` or `lastName` property in the state object, you can use the spread operator (`...`). The syntax is as follows:
```ts
setPerson({ ...person, lastName: 'Johnson' });
```
Add `name` attributes to the input elements and set their values match the corresponding state object properties (`firstName` and `lastName`).

Set the `value` attributes to reference the state object properties (`person.firstName` and `person.lastName`).
```tsx
<input 
  name="firstName"
  value={person.firstName} 
  onChange={handleChange} />
<input 
  name="lastName"
  value={person.lastName} 
  onChange={handleChange} />
```
Now, the both input elements has same function called if the `onChange` DOM event is invoked. Then, we can use `event.target.name` and `event.target.value` to save input element’s value to correct state. See the syntax below:

```ts
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setName({ ...name, [event.target.name]: event.target.value});
}
```
Now if the user types something to firstName input element, the `event.target.name` is firstName and `event.target.value` is a value that user has entered to the firstName input element.

Alternatively, you can define an event handler directly on the `input` element. The `input` elements would look like this:
```tsx
<input 
  value={person.firstName} 
  onChange={ event => setPerson({...person, firstName: event.target.value}) } />
<input 
  value={person.lastName} 
  onChange={ event => setPerson({...person, lastName: event.target.value}) } />
```
Now, you don't need to explicitly define the event type, as TypeScript can infer it automatically. The complete source code would look like this:
```tsx
import { useState } from 'react'

type Person = {
  firstName: string;
  lastName: string;
}

function App() {
  const [person, setPerson] = useState<Person>({firstName: '', lastName: ''});
 
  return (
    <>
      <h3>Hello {person.firstName} {person.lastName}</h3>
      <label>
        First name:
        <input 
          value={person.firstName} 
          onChange={ event => setPerson({...person, firstName: event.target.value}) } />
      </label>><br/>
     <label>
        Last name:
        <input 
          value={person.lastName} 
          onChange={ event => setPerson({...person, lastName: event.target.value}) } />
      </label>   
    </>
   );
}

export default App
```
Using a `<label>` with an HTML `<input>` is recommended for accessibility. Screen readers can identify the label and announce it to users. It also creates clickable area so that clicking on the label will focus the input field. That helps also when using the with smaller screen. 

### Forms
You can also use HTML `form` element. Form handling is a little bit different with React. A HTML form will always navigate to another page when it is submitted but we want to avoid that. Common case is that we want to invoke javascript function that has access to form data after the submission.

If we use the form element:
```html
<form onSubmit={handleSubmit}>
  <input 
    name="message"
    value={message}
    onChange={handleChange} />
  <input type="submit" value="Add"/>
</form>
```
Now, if an user submits the form it invokes `handleSubmit` function. In the `handleSubmit` function, we have to first call `event.preventDefault()` function. That function ignores the default behavior of the form and it will not be submitted.
```ts
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault(); // ignores the default action 
  // Do something with form data
}
```
The `React.FormEvent` is a type provided by React to represent events triggered by form elements (`<HTMLFormElement>` in this case). It ensures type safety when working with form-related events like `onSubmit`.

---
### Further reading
- https://react.dev/reference/react-dom/components/input
