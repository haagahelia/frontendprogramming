"use strict";(self.webpackChunkfrontendcourse=self.webpackChunkfrontendcourse||[]).push([[4127],{9446:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"3rdpartycomponents/mui","title":"MUI","description":"Installation","source":"@site/docs/3rdpartycomponents/mui.md","sourceDirName":"3rdpartycomponents","slug":"/3rdpartycomponents/mui","permalink":"/frontendprogramming/docs/3rdpartycomponents/mui","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"MUI","sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"AG-Grid","permalink":"/frontendprogramming/docs/3rdpartycomponents/aggrid"},"next":{"title":"React Router","permalink":"/frontendprogramming/docs/3rdpartycomponents/router"}}');var o=t(4848),s=t(8453);const r={title:"MUI",sidebar_position:5},a=void 0,l={},d=[{value:"Installation",id:"installation",level:3},{value:"Container",id:"container",level:3},{value:"Button",id:"button",level:3},{value:"TextField",id:"textfield",level:3}];function c(e){const n={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["MUI (",(0,o.jsx)(n.a,{href:"https://mui.com/",children:"https://mui.com/"}),") provides component libraries and tools for React. We are going to use Material UI that is a library of React UI components that implements Google's Material Design (",(0,o.jsx)(n.a,{href:"https://mui.com/material-ui/getting-started/",children:"https://mui.com/material-ui/getting-started/"}),")."]}),"\n",(0,o.jsx)(n.li,{children:"To start using Material UI, you have to install it to your project using the following npm command (use your Todolist project with AG-Grid):"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm install @mui/material @emotion/react @emotion/styled\n"})}),"\n",(0,o.jsx)(n.p,{children:"If you want to use icons, you should install the following library:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm install @mui/icons-material\n"})}),"\n",(0,o.jsx)(n.h3,{id:"container",children:"Container"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["First, we will use the ",(0,o.jsx)(n.code,{children:"Container"})," component, which is basic layout component, and it centers your app content horizontally. The maxWidth props defines the maximum width of our app, and we are using the largest value. We will also use the ",(0,o.jsx)(n.code,{children:"CssBaseline"})," component that is used to fix inconsistencies across different browsers. Open the ",(0,o.jsx)(n.strong,{children:"App.jsx"})," file and do the following modifications:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'{2-3,8-9,11} title="App.jsx"',children:'import "./App.css";\nimport Container from \'@mui/material/Container\';\nimport CssBaseline from \'@mui/material/CssBaseline\';\nimport TodoList from "./TodoList";\n\nfunction App() {\n  return (\n    <Container maxWidth="xl">\n      <CssBaseline />\n      <TodoList />\n    </Container>\n  );\n}\n\nexport default App;\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["MUI uses Google Roboto fonts and you can read the installation instructions in ",(0,o.jsx)(n.a,{href:"https://mui.com/material-ui/getting-started/installation/#roboto-font",children:"https://mui.com/material-ui/getting-started/installation/#roboto-font"})]}),"\n",(0,o.jsx)(n.li,{children:"Now, we are ready to use other UI components."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"button",children:"Button"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Instead of using HTML button element, we can now use Material UI ",(0,o.jsx)(n.code,{children:"Button"})," component (",(0,o.jsx)(n.a,{href:"https://mui.com/material-ui/react-button/",children:"https://mui.com/material-ui/react-button/"}),")."]}),"\n",(0,o.jsxs)(n.li,{children:["Open the ",(0,o.jsx)(n.strong,{children:"TodoList.jsx"})," file and add the following import:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="TodoList.jsx"',children:"import Button from '@mui/material/Button';\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Then, we change the HTML button elements to the ",(0,o.jsx)(n.code,{children:"Button"})," component:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'{15-16} title="TodoList.jsx"',children:' return (\n  <>\n    <input \n      placeholder="Description" \n      onChange={e => setTodo({...todo, desc: e.target.value })} \n      value={todo.desc} />\n    <input \n      placeholder="Priority" \n      onChange={e => setTodo({...todo, priority: e.target.value })} \n      value={todo.priority} /> \n    <input \n      placeholder="Date" \n      onChange={e => setTodo({...todo, date: e.target.value })} \n      value={todo.date} />\n    <Button onClick={addTodo}>Add</Button>\n    <Button onClick={handleDelete}>Delete</Button>\n    <div className="ag-theme-material" style={{width: 700, height: 500}}>\n      <AgGridReact \n        ref={gridRef}\n        onGridReady={ params => gridRef.current = params.api }\n        rowData={todos}\n        columnDefs={columnDefs}\n        rowSelection="single"\n      />\n    </div>    \n  </>\n)\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Material Design has three different button variants (styles): Text, Outlined, and Contained. The default variant used in Material UI is Text. You can use ",(0,o.jsx)(n.code,{children:"variant"})," prop to change the value."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'// Change button variant\n<Button variant="contained" onClick={addTodo}>Add</Button>\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["You can change the button color by using the ",(0,o.jsx)(n.code,{children:"color"})," prop. You can find the examples in ",(0,o.jsx)(n.a,{href:"https://mui.com/material-ui/react-button/#color",children:"https://mui.com/material-ui/react-button/#color"})," and change your Delete button color to red."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"Button"})," component props are listed in ",(0,o.jsx)(n.a,{href:"https://mui.com/material-ui/api/button/",children:"https://mui.com/material-ui/api/button/"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"textfield",children:"TextField"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The Material UI provides ",(0,o.jsx)(n.code,{children:"TextField"})," component (",(0,o.jsx)(n.a,{href:"https://mui.com/material-ui/react-text-field/",children:"https://mui.com/material-ui/react-text-field/"}),") that let user enter and edit text. We will use that in our Todolist app instead of HTML input elements."]}),"\n",(0,o.jsxs)(n.li,{children:["To start use the ",(0,o.jsx)(n.code,{children:"TextField"})," component, import it in the ",(0,o.jsx)(n.code,{children:"TodoList"})," component."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="TodoList.jsx"',children:"import TextField from '@mui/material/TextField';\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"label"})," prop is used to set label for ",(0,o.jsx)(n.code,{children:"TextField"})," components."]}),"\n",(0,o.jsx)(n.li,{children:"The"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'{3-14} title="TodoList.jsx',children:'return (\n  <>\n    <TextField \n      label="Description" \n      onChange={e => setTodo({...todo, desc: e.target.value })} \n      value={todo.desc} />\n    <TextField\n      label="Priority" \n      onChange={e => setTodo({...todo, priority: e.target.value })} \n      value={todo.priority} /> \n    <TextField\n      label="Date" \n      onChange={e => setTodo({...todo, date: e.target.value })} \n      value={todo.date} />\n    <Button onClick={addTodo}>Add</Button>\n    <Button color="error" onClick={handleDelete}>Delete</Button>\n    <div className="ag-theme-material" style={{width: 700, height: 500}}>\n      <AgGridReact \n        ref={gridRef}\n        onGridReady={ params => gridRef.current = params.api }\n        rowData={todos}\n        columnDefs={columnDefs}\n        rowSelection="single"\n      />\n    </div>    \n  </>\n)\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Material Design has three different text field variants (styles): Standard, Outlined, and Filled. The default variant used in Material UI is Outlined. You can use ",(0,o.jsx)(n.code,{children:"variant"})," prop to change the value."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"TextField"})," component props are listed in ",(0,o.jsx)(n.a,{href:"https://mui.com/material-ui/api/text-field/",children:"https://mui.com/material-ui/api/text-field/"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Now, your UI should look like the following:"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Todolist",src:t(8869).A+"",width:"978",height:"233"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["It doesn't look good yet. To get some spacing between components and align these properly, we can use the layout component called ",(0,o.jsx)(n.code,{children:"Stack"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Stack"})," is one dimensional layout component that we can use to set spaces between text fields and set alignments. To get started, add the following import to the TodoList.jsx file."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="TodoList.jsx"',children:"import Stack from '@mui/material/Stack';\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Next, we wrap the ",(0,o.jsx)(n.code,{children:"Button"})," and ",(0,o.jsx)(n.code,{children:"textField"})," components with the ",(0,o.jsx)(n.code,{children:"Stack"})," component. The ",(0,o.jsx)(n.code,{children:"Stack"})," component layout is using Flex and the default direction is column. We set direction to row using the component's ",(0,o.jsx)(n.code,{children:"direction"})," prop. The ",(0,o.jsx)(n.code,{children:"spacing"})," prop is used to set spacing between items inside the ",(0,o.jsx)(n.code,{children:"Stack"})," component. You can read more about spacing and units in ",(0,o.jsx)(n.a,{href:"https://mui.com/material-ui/customization/spacing/",children:"https://mui.com/material-ui/customization/spacing/"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="TodoList.jsx"',children:'return (\n  <>\n    //highlight-next-line\n    <Stack direction="row" spacing={2}>\n      <TextField \n        label="Description" \n        onChange={e => setTodo({...todo, desc: e.target.value })} \n        value={todo.desc} />\n      <TextField\n        label="Priority" \n        onChange={e => setTodo({...todo, priority: e.target.value })} \n        value={todo.priority} /> \n      <TextField\n        label="Date" \n        onChange={e => setTodo({...todo, date: e.target.value })} \n        value={todo.date} />\n      <Button onClick={addTodo}>Add</Button>\n      <Button color="error" onClick={handleDelete}>Delete</Button>\n   Z //highlight-next-line\n    </Stack>\n    <div className="ag-theme-material" style={{width: 700, height: 500}}>\n      <AgGridReact \n        ref={gridRef}\n        onGridReady={ params => gridRef.current = params.api }\n        rowData={todos}\n        columnDefs={columnDefs}\n        rowSelection="single"\n      />\n    </div>    \n  </>\n)\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Finally, we set alignment using the ",(0,o.jsx)(n.code,{children:"justifyContent"})," and ",(0,o.jsx)(n.code,{children:"alignItems"})," props to center components horizontally and vertically."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'<Stack \n  direction="row" \n  spacing={2} \n  justifyContent="center" \n  alignItems="center"\n>    \n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Now, your Todolist UI should look the following:"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Todolist",src:t(8510).A+"",width:"1074",height:"321"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Material Design app bar displays information and actions relating to the current screen. We can implement the app bar by using the Material UI ",(0,o.jsx)(n.code,{children:"AppBar"})," component (",(0,o.jsx)(n.a,{href:"https://mui.com/material-ui/react-app-bar/",children:"https://mui.com/material-ui/react-app-bar/"}),")."]}),"\n",(0,o.jsxs)(n.li,{children:["We will implement app bar in the ",(0,o.jsx)(n.code,{children:"App"})," component. Add the following imports to your App.jsx file."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="App.jsx"',children:"import AppBar from '@mui/material/AppBar';\nimport Toolbar from '@mui/material/Toolbar';\nimport Typography from '@mui/material/Typography';\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Then, render the components in the ",(0,o.jsx)(n.code,{children:"App"})," component. The ",(0,o.jsx)(n.code,{children:"AppBar"})," component's ",(0,o.jsx)(n.code,{children:"position"})," defines the positioning fo the app bar. When you set ",(0,o.jsx)(n.code,{children:'position="static"'}),", the AppBar remains at the top of the screen and does not scroll with the content. You can see the possible values in ",(0,o.jsx)(n.a,{href:"https://mui.com/material-ui/api/app-bar/#AppBar-prop-position",children:"https://mui.com/material-ui/api/app-bar/#AppBar-prop-position"}),". The ",(0,o.jsx)(n.code,{children:"Typography"})," component provides predefined text sizes, and we will use this in our toolbar text. variant props can be used to define text size:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'{5-11} title="App.jsx"',children:'function App() {\n  return (\n    <Container maxWidth="xl">\n      <CssBaseline />\n      <AppBar position="static">\n        <Toolbar>\n          <Typography variant="h6">\n            My Todos\n          </Typography>  \n        </Toolbar>\n      </AppBar>\n      <TodoList />\n    </Container>\n  );\n}\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Now, if you look the Todolist UI, it already looks nice but now you need some spacing between the app bar and text fields. You can use the ",(0,o.jsx)(n.code,{children:"mt"})," prop of the ",(0,o.jsx)(n.code,{children:"Stack"})," component to get top margin to your text fields and buttons. The Material UI provides custom props that you can use to change CSS properties ",(0,o.jsx)(n.a,{href:"https://mui.com/system/properties/#properties-reference-table",children:"https://mui.com/system/properties/#properties-reference-table"})]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="TodoList.jsx"',children:'<Stack \n  //highlight-next-line\n  mt={2} \n  direction="row" \n  spacing={2} \n  justifyContent="center" \n  alignItems="center"\n>\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Finally, your Todolist should look like the following screenshot:\n",(0,o.jsx)(n.img,{alt:"Todolist",src:t(4087).A+"",width:"1068",height:"476"})]}),"\n",(0,o.jsxs)(n.li,{children:["Now, we are ready with our Todolist app but you can try to use more different Material UI components in your UI. You can, for example, use icon buttons (",(0,o.jsx)(n.a,{href:"https://mui.com/system/properties/#properties-reference-table",children:"https://mui.com/system/properties/#properties-reference-table"}),"). You can also use drop down in priority, so that only pre-defined priority values can be selected (",(0,o.jsx)(n.a,{href:"https://mui.com/material-ui/react-select/",children:"https://mui.com/material-ui/react-select/"}),")."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8869:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/todolist5-106f6eda075c8989c2ac590d296d11f4.png"},8510:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/todolist6-b85d8b2f4a140b756693e4ce78a4c5ef.png"},4087:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/todolist7-8b5011a11088f76ee451b02029aa3174.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);