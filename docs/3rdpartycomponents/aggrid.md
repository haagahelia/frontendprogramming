---
title: 'AG-Grid'
sidebar_position: 4
---
- **AG-Grid** (https://www.ag-grid.com/) is popular data grid component that can be used with several JavaScript libraries, such as React.
- AG-grid provides free community version (MIT license).
- We have developed Todolist app and if you have done the assignments, you should now have also date field and delete functionality.
- Let's add third property to our Todolist that is priority. Add the `priority` property to your todo state and add an input element that user can enter priority and it is stored to the state. Then, your Todolist should look like the following screenshot:

![Todolist](./img/todolist2.png)

- Now, we will replace the HTML table with AG-Grid component in our Todolist app. Then, we can get easily nice features such as sorting, filtering, etc. to our Todolist app.
- Move to your Todolist project folder using the command line.
#### Install AG-Grid
- First, you have to install the AG-Grid component to your project. The installation command can be found in the component's documentation. In this case in https://www.ag-grid.com/react-data-grid/getting-started/. The npm command is the following and you should execute it in your project folder:
```bash
npm install ag-grid-community ag-grid-react
```
- The installed packages are saved to the `package.json` file's `dependencies` section. The `package.json` file can be found in the root directory of project. It contains project information, dependencies and scripts for starting the project.  After the installation, open the `package.json` file and check that AG-Grid componets are found.
```json title="package.json"
"dependencies": {
  //highlight-next-line
  "ag-grid-community": "^30.2.0",
  //highlight-next-line
  "ag-grid-react": "^30.2.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
},
```
#### Import AG-Grid component and stylesheets
- To use AG-Grid component in our TodoList component we have to import it. We import the `AgGridReact` component and stylesheets. AG-Grid provides pre-defined styles (Bootstrap, Alpine and Material Design) and we use the Material Design styling. Add the following imports in your `TodoList` component.

```js title="TodoList.jsx"
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
```
#### Define columns
- Next, we have to define data grid columns. The columns are defined using a state and the value is an array of column definition objects. Each column definition object has mandatory property `field` that defines what data is shown in a column. For example, if we define `{field: 'date'}`, this column shows our `todo` object's `date` property value.

```js title="TodoList.jsx"
const [columnDefs, setColumnDefs] = useState([
  {field: 'desc'},
  {field: 'priority'},
  {field: 'date'}
]);
```
#### Render AG-Grid
- Then, we render the `AgGridReact component`. The `rowData` prop defines where row data comes and the value should be an array. In our case, it is the `todos` array state where our todo objects are stored. The `columnDefs` prop defines column definition and it is the `columnDefs` state that we just created before. Remove the `TodoTable` component because, now we will use AG-Grid to show our data. You have to wrap `AgGridReact` component inside `div` that defines the theme CSS class and grid size.
```js title="TodoList.jsx"
return (
  <>
    <input 
      placeholder="Description" 
      onChange={e => setTodo({...todo, desc: e.target.value })} 
      value={todo.desc} />
    <input 
      placeholder="Priority" 
      onChange={e => setTodo({...todo, priority: e.target.value })} 
      value={todo.priority} /> 
    <input 
      placeholder="Date" 
      onChange={e => setTodo({...todo, date: e.target.value })} 
      value={todo.date} />
    <button onClick={addTodo}>Add</button>
      //highlight-start
    <div className="ag-theme-material" style={{width: 700, height: 500}}>
      <AgGridReact 
        rowData={todos}
        columnDefs={columnDefs}
      />
    </div> 
    //highlight-end
  </>
)  
```


