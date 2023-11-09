"use strict";(self.webpackChunkfrontendcourse=self.webpackChunkfrontendcourse||[]).push([[720],{8779:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var r=n(5893),o=n(1151);const i={title:"AG-Grid",sidebar_position:4},s=void 0,d={id:"3rdpartycomponents/aggrid",title:"AG-Grid",description:"- AG-Grid (https://www.ag-grid.com/) is popular data grid component that can be used with several JavaScript libraries, such as React.",source:"@site/docs/3rdpartycomponents/aggrid.md",sourceDirName:"3rdpartycomponents",slug:"/3rdpartycomponents/aggrid",permalink:"/frontendprogramming/docs/3rdpartycomponents/aggrid",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/3rdpartycomponents/aggrid.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"AG-Grid",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Npm",permalink:"/frontendprogramming/docs/3rdpartycomponents/npm"},next:{title:"MUI",permalink:"/frontendprogramming/docs/3rdpartycomponents/mui"}},l={},a=[{value:"Install AG-Grid",id:"install-ag-grid",level:4},{value:"Import AG-Grid component and stylesheets",id:"import-ag-grid-component-and-stylesheets",level:3},{value:"Define columns",id:"define-columns",level:3},{value:"Render AG-Grid",id:"render-ag-grid",level:3},{value:"Column properties",id:"column-properties",level:3},{value:"Styling cells",id:"styling-cells",level:3},{value:"Delete functionality",id:"delete-functionality",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"AG-Grid"})," (",(0,r.jsx)(t.a,{href:"https://www.ag-grid.com/",children:"https://www.ag-grid.com/"}),") is popular data grid component that can be used with several JavaScript libraries, such as React."]}),"\n",(0,r.jsx)(t.li,{children:"AG-grid provides a free community version (MIT license)."}),"\n",(0,r.jsx)(t.li,{children:"We have developed the Todolist app, and if you have done the assignments, you should now also have date field and delete functionality."}),"\n",(0,r.jsxs)(t.li,{children:["Let's add a third property to our Todolist that is a priority. Add the ",(0,r.jsx)(t.code,{children:"priority"})," property to the ",(0,r.jsx)(t.code,{children:"todo"})," state and add an input element that user can enter priority which is stored to the state. Then, your Todolist should look like the following screenshot:"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Todolist",src:n(3676).Z+"",width:"843",height:"308"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Now, we will replace the HTML table with the AG-Grid component in our Todolist app. Then, we can easily get nice features such as sorting, filtering, etc. to our Todolist app."}),"\n",(0,r.jsx)(t.li,{children:"Move to your Todolist project folder using the command line."}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"install-ag-grid",children:"Install AG-Grid"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["First, you have to install the AG-Grid component in your project. The installation command can be found in the component's documentation. In this case in ",(0,r.jsx)(t.a,{href:"https://www.ag-grid.com/react-data-grid/getting-started/",children:"https://www.ag-grid.com/react-data-grid/getting-started/"}),". The npm command is the following and you should execute it in your project folder:"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install ag-grid-community ag-grid-react\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The installed packages are saved to the ",(0,r.jsx)(t.code,{children:"package.json"})," file's ",(0,r.jsx)(t.code,{children:"dependencies"})," section. The ",(0,r.jsx)(t.code,{children:"package.json"})," file can be found in the root directory of project. It contains project information, dependencies and scripts for starting the project.  After the installation, open the ",(0,r.jsx)(t.code,{children:"package.json"})," file and check that AG-Grid componets are found."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",metastring:'title="package.json"',children:'"dependencies": {\r\n  //highlight-next-line\r\n  "ag-grid-community": "^30.2.0",\r\n  //highlight-next-line\r\n  "ag-grid-react": "^30.2.0",\r\n  "react": "^18.2.0",\r\n  "react-dom": "^18.2.0"\r\n},\n'})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["In the line ",(0,r.jsx)(t.code,{children:'"ag-grid-community": "^30.2.0"'})," the ",(0,r.jsx)(t.code,{children:"ag-grid-community"})," is the name of the installed package. The ",(0,r.jsx)(t.code,{children:'"^30.2.0"'})," specifies the installed version. The ",(0,r.jsx)(t.code,{children:"^"})," symbol inidcates that it allows to receive bug fixes and minor version updates. The major version updates are not allowed (For example, 31.0.0). The packages are automatically updated when you execute the ",(0,r.jsx)(t.code,{children:"npm install"})," command. The installed versions are saved to the dependency lock file ",(0,r.jsx)(t.strong,{children:"package.lock.json"})," file. If the version is specified ",(0,r.jsx)(t.code,{children:'"30.2.0"'})," it means that the project requires version 30.2.0 and updates are not received automatically."]})}),"\n",(0,r.jsx)(t.h3,{id:"import-ag-grid-component-and-stylesheets",children:"Import AG-Grid component and stylesheets"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["To use the AG-Grid component in our TodoList component, we have to import it. We import the ",(0,r.jsx)(t.code,{children:"AgGridReact"})," component and stylesheets. AG-Grid provides pre-defined styles (Bootstrap, Alpine, and Material Design) and we use the Material Design styling. Add the following imports to your ",(0,r.jsx)(t.code,{children:"TodoList"})," component."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="TodoList.jsx"',children:'import { AgGridReact } from "ag-grid-react";\r\n\r\nimport "ag-grid-community/styles/ag-grid.css";\r\nimport "ag-grid-community/styles/ag-theme-material.css";\n'})}),"\n",(0,r.jsx)(t.h3,{id:"define-columns",children:"Define columns"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Next, we have to define data grid columns. The columns are defined using a state, and the value is an array of column definition objects. Each column definition object has a mandatory property ",(0,r.jsx)(t.code,{children:"field"})," that defines what data is shown in a column. For example, if we define ",(0,r.jsx)(t.code,{children:"{field: 'date'}"}),", this column shows our ",(0,r.jsx)(t.code,{children:"todo"})," object's ",(0,r.jsx)(t.code,{children:"date"})," property value."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="TodoList.jsx"',children:"const [columnDefs, setColumnDefs] = useState([\r\n  {field: 'desc'},\r\n  {field: 'priority'},\r\n  {field: 'date'}\r\n]);\n"})}),"\n",(0,r.jsx)(t.h3,{id:"render-ag-grid",children:"Render AG-Grid"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Then, we render the ",(0,r.jsx)(t.code,{children:"AgGridReact component"}),". The ",(0,r.jsx)(t.code,{children:"rowData"})," prop defines where row data comes from and the value should be an array. In our case, it is the ",(0,r.jsx)(t.code,{children:"todos"})," array state where our todo objects are stored. The ",(0,r.jsx)(t.code,{children:"columnDefs"})," prop defines the column definition, and it is the ",(0,r.jsx)(t.code,{children:"columnDefs"})," state that we just created before. Remove the ",(0,r.jsx)(t.code,{children:"TodoTable"})," component because now we will use AG-Grid to show our data. You have to wrap the ",(0,r.jsx)(t.code,{children:"AgGridReact"})," component inside ",(0,r.jsx)(t.code,{children:"div"})," that defines the theme CSS class and grid size."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",metastring:'title="TodoList.jsx"',children:'return (\r\n  <>\r\n    <input \r\n      placeholder="Description" \r\n      onChange={e => setTodo({...todo, desc: e.target.value })} \r\n      value={todo.desc} />\r\n    <input \r\n      placeholder="Priority" \r\n      onChange={e => setTodo({...todo, priority: e.target.value })} \r\n      value={todo.priority} /> \r\n    <input \r\n      placeholder="Date" \r\n      onChange={e => setTodo({...todo, date: e.target.value })} \r\n      value={todo.date} />\r\n    <button onClick={addTodo}>Add</button>\r\n      //highlight-start\r\n    <div className="ag-theme-material" style={{width: 700, height: 500}}>\r\n      <AgGridReact \r\n        rowData={todos}\r\n        columnDefs={columnDefs}\r\n      />\r\n    </div> \r\n    //highlight-end\r\n  </>\r\n)  \n'})}),"\n",(0,r.jsxs)(t.p,{children:["Now, your Todolist should look like the following screenshot and the todo table looks already more professional:\r\n",(0,r.jsx)(t.img,{alt:"Todolist",src:n(2316).Z+"",width:"847",height:"410"})]}),"\n",(0,r.jsx)(t.h3,{id:"column-properties",children:"Column properties"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The column properties are used to define the column behavior. So far, we have only used the ",(0,r.jsx)(t.code,{children:"field"})," property in our column definitions."]}),"\n",(0,r.jsxs)(t.li,{children:["You can find all column properties at ",(0,r.jsx)(t.a,{href:"https://www.ag-grid.com/react-data-grid/column-properties/",children:"https://www.ag-grid.com/react-data-grid/column-properties/"})]}),"\n",(0,r.jsxs)(t.li,{children:["By default, column sort is disabled. Set ",(0,r.jsx)(t.code,{children:"sortable"})," property to ",(0,r.jsx)(t.code,{children:"true"})," to enable sorting on a column."]}),"\n",(0,r.jsxs)(t.li,{children:["You can also get a column-based filter that filters rows using the spcified values. You can enble colmun filter by setting ",(0,r.jsx)(t.code,{children:"filter"})," property to ",(0,r.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Now, the ",(0,r.jsx)(t.code,{children:"columndDef"})," look like the code below:"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="TodoList.jsx"',children:"const [columnDefs] = useState([\r\n  {field: 'desc', sortable: true, filter: true},\r\n  {field: 'priority', sortable: true, filter: true},\r\n  {field: 'date', sortable: true, filter: true}\r\n]);\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"If you click any of the column headers, you can see that the column is now sorted. Column headers also contain a 'hamburger'-menu that opens the column filter."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"styling-cells",children:"Styling cells"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["We can use ",(0,r.jsx)(t.code,{children:"cellStyle"})," column property to define cell styling. The value of the property is a callback function that returns an object of css values."]}),"\n",(0,r.jsx)(t.li,{children:"In the example code below, the priority cell text color is red if the priority value is High."}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="TodoList.jsx"',children:'const columns = [\r\n  { field: "desc", sortable: true, filter: true },\r\n  { field: "priority", sortable: true, filter: true, \r\n    //highlight-next-line\r\n    cellStyle: params => params.value === "High" ? {color: \'red\'} : {color: \'black\'} },\r\n  { field: "date", sortable: true, filter: true }\r\n];\n'})}),"\n",(0,r.jsx)(t.h3,{id:"delete-functionality",children:"Delete functionality"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Let\u2019s implement the delete functionality, where the user can select a row, and when the delete button is pressed, the selected row is deleted."}),"\n",(0,r.jsxs)(t.li,{children:["First, we have to enable row selection and set mode to single selection by using the ",(0,r.jsx)(t.code,{children:"rowSelection"})," grid prop."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",metastring:'title="TodoList.jsx"',children:'<AgGridReact\r\n  columnDefs={columns}\r\n  rowData={todos}>\r\n  //highlight-next-line\r\n  rowSelection="single"\r\n</AgGridReact>\n'})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"We should be able to get the selected row, and therefore we need access to the ag-grid component\u2019s API. The API provides a method called getSelectedNodes() that we can use to get the selected row index."}),"\n",(0,r.jsxs)(t.li,{children:["To get access to the Grid API, we can use the React ",(0,r.jsx)(t.code,{children:"useRef"})," hook function (",(0,r.jsx)(t.a,{href:"https://reactjs.org/docs/hooks-reference.html#useref",children:"https://reactjs.org/docs/hooks-reference.html#useref"}),")."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="TodoList.jsx"',children:"// Import useRef\r\nimport { useRef, useState } from 'react'\r\n\r\nfunction TodoList() {\r\n  const [todo, setTodo] = useState({ desc: '', date: '', priority: '' });\r\n  const [todos, setTodos] = useState([]);\r\n  //highlight-next-line\r\n  const gridRef = useRef();\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["By using ",(0,r.jsx)(t.code,{children:"ref"})," prop we can make a reference to the ",(0,r.jsx)(t.code,{children:"AgGridReact"})," component. It allows us to access it's methods directly."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",metastring:'title="TodoList.jsx"',children:'<AgGridReact \r\n  //highlight-next-line\r\n  ref={gridRef}\r\n  rowData={todos}\r\n  columnDefs={columnDefs}\r\n  rowSelection="single"\r\n/>\n'})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.code,{children:"AgGridReact"})," component's methods are in the Grid API (",(0,r.jsx)(t.a,{href:"https://www.ag-grid.com/react-data-grid/grid-api/",children:"https://www.ag-grid.com/react-data-grid/grid-api/"}),"); therefore, we have to link our reference to the API. AG-Grid provides the ",(0,r.jsx)(t.code,{children:"gridReady"})," event that is invoked when the grid has initialized and is ready for most api calls, but may not be fully rendered yet. We can use ",(0,r.jsx)(t.code,{children:"onGridReady"})," event handler to get access to the grid API and store the grid API object for our reference. Then, we can use the ",(0,r.jsx)(t.code,{children:"gridRef.current"})," to call methods that grid API provides."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",metastring:'title="TodoList.jsx"',children:'<AgGridReact \r\n  ref={gridRef}\r\n  //highlight-next-line\r\n  onGridReady={ params => gridRef.current = params.api }\r\n  rowData={todos}\r\n  columnDefs={columnDefs}\r\n  rowSelection="single"\r\n/>\n'})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Next, we add Delete button inside the ",(0,r.jsx)(t.code,{children:"return"})," statement and when the button is pressed, it call ",(0,r.jsx)(t.code,{children:"handleDelete"})," function."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:'return (\r\n    <>\r\n      <input \r\n        placeholder="Description" \r\n        onChange={e => setTodo({...todo, desc: e.target.value })} \r\n        value={todo.desc} />\r\n      <input \r\n        placeholder="Priority" \r\n        onChange={e => setTodo({...todo, priority: e.target.value })} \r\n        value={todo.priority} /> \r\n      <input \r\n        placeholder="Date" \r\n        onChange={e => setTodo({...todo, date: e.target.value })} \r\n        value={todo.date} />\r\n      <button onClick={addTodo}>Add</button>\r\n      //highlight-next-line\r\n      <button onClick={handleDelete}>Delete</button>\r\n      <div className="ag-theme-material" style={{width: 700, height: 500}}>\r\n        <AgGridReact \r\n          ref={gridRef}\r\n          onGridReady={ params => gridRef.current = params.api }\r\n          rowData={todos}\r\n          columnDefs={columnDefs}\r\n          rowSelection="single"\r\n        />\r\n      </div>    \r\n    </>\r\n)\n'})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Finally, we implement the ",(0,r.jsx)(t.code,{children:"handleDelete"})," function. We can use the grid API's ",(0,r.jsx)(t.code,{children:"getSelectedNodes"})," method, which returns an array of selected rows. We are using the single selection mode; therefore, it only returns one row. The row index can be get from the row object's ",(0,r.jsx)(t.code,{children:"id"})," property. We use the JavaScript ",(0,r.jsx)(t.code,{children:"filter"})," function to filter selected row from the ",(0,r.jsx)(t.code,{children:"todos"})," state. The ",(0,r.jsx)(t.code,{children:"filter"})," function creates a new array containing elements from the original array that meet a specific condition. It does not modify the original array but returns a new array with the filtered elements."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="TodoList.jsx"',children:"const handleDelete = () => {\r\n  setTodos(todos.filter((todo, index) => \r\n      index != gridRef.current.getSelectedNodes()[0].id))\r\n};\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"If you select a row in the grid and press the Delete button, the selected row is deleted from the grid. If you don't select any row and press the Delete button, you can see an error in the console. We also have to check that one row is selected before filtering."}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="TodoList.jsx"',children:"const handleDelete = () => {\r\n  if (gridRef.current.getSelectedNodes().length > 0) {\r\n    setTodos(todos.filter((todo, index) => \r\n      index != gridRef.current.getSelectedNodes()[0].id))\r\n  }\r\n  else {\r\n    alert('Select a row first!');\r\n  }\r\n};\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Now, we have finalized our Todolist using the AG-Grid, and your Todolist should look like the following screenshot:"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Todolist",src:n(2817).Z+"",width:"932",height:"398"})}),"\n",(0,r.jsx)(t.p,{children:"Next, we are going to style the rest of our Todolist app using the Material Design styling."})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},3676:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/todolist2-d00c0250cb9a16b262e5516904cda878.png"},2316:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/todolist3-fe9027b9423d94106d4dd3114f6b06ef.png"},2817:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/todolist4-d091d4ec6c37675c31cbb838b2cecb9d.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>s});var r=n(7294);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);