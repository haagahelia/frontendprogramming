---
title: 'List Handling'
sidebar_position: 5
---
### map()
- First, it is good to learn JavaScript function that is really useful with arrays. 
- The `map()` function creates a new array with the results of calling a function for every array element.
```js
let arrA = [1, 2, 3];
let arrB = arrA.map(x => x * 2);
// arrB = [2, 4, 6]
```
- The `map` statement above returns a new array with values multiplied by 2.

- See the nice emoji explanation By Joe Devilla
(https://www.globalnerdy.com/2016/06/23/map-filter-and-reduce-explained-using-emoji/) 

---
### List handling
- The following example creates a state that is an array of numbers.
- In the `return` statement, the `map` function is used to iterate over the `numbers` array state, and for each item, it creates a `li` element with the content of the item. 
- **Note!** `key` string attribute is needed in the lists. That helps React to identify which rows have changed. The `map` method has a second argument, that is running index and we use that in the following example.   
```jsx live
function MyList() {
  const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5]);

  return (
    <div>
      <ul>
        { numbers.map((number, index) =>
          <li key={index}>Listitem {number}</li>) }
      </ul>
    </div>
  );
}

```
:::warning
The use of index is not recommended in proper apps because it can cause bugs if a list is reordered or you add or delete list items. Instead of that, you should use a unique key from the data if it exists. There are also libraries available that you can use to generate unique IDs, such as uuid (https://github.com/uuidjs/uuid)
:::
---
### List handling example
- The next example fetches an array of listitems from the REST API and store it to React state.
- The REST API to be used is **Reqres.in** fake API, and the following URL returns a list of fake users (https://reqres.in/api/users).

![Persons example](./img/persons.png)
- We need an array to store a list of persons; therefore, we create a state called `listItems` and initialize that to an empty array. Then, we use the `useEffect` hook to send a request once after the first render.
```js
const [listItems, setListItems] = React.useState([]);

React.useEffect(() => {
  fetch('https://reqres.in/api/users')
  .then(response => { 
    if (!response.ok)
      throw new Error("Error in fetch: " + response.statusText);  
    
    return response.json();
  }) 
  .then(responseData => { 
    setListItems(responseData.data)
  }) 
  .catch(err => console.error(err)
}, [])
```
- The `return` statement looks the following:
```jsx
return (
  <div>
    <h2>Persons</h2>
    <table>
      <tbody>
        <tr><th>First name</th><th>Last name</th><th>Email</th></tr>
        { listItems.map((person) => 
            <tr key={person.id}>
              <td>{person.first_name}</td>
              <td>{person.last_name}</td>
              <td>{person.email}</td>
            </tr> }
      </tbody>
    </table>
  </div>
);
```
Now, the list should look like the following screenshot:

![](./img/persons2.png)

