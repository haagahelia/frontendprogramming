"use strict";(self.webpackChunkfrontendcourse=self.webpackChunkfrontendcourse||[]).push([[4955],{8101:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(5893),s=t(1151);const i={title:"List Handling",sidebar_position:5},a=void 0,l={id:"networking/listhandling",title:"List Handling",description:"map()",source:"@site/docs/networking/listhandling.md",sourceDirName:"networking",slug:"/networking/listhandling",permalink:"/frontendprogramming/docs/networking/listhandling",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/networking/listhandling.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"List Handling",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Example",permalink:"/frontendprogramming/docs/networking/fetchexample"},next:{title:"React Project",permalink:"/frontendprogramming/docs/category/react-project"}},o={},d=[{value:"map()",id:"map",level:3},{value:"List handling",id:"list-handling",level:3},{value:"List handling example",id:"list-handling-example",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"map",children:"map()"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"First, it is good to learn JavaScript function that is really useful with arrays."}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"map()"})," function creates a new array with the results of calling a function for every array element."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"let arrA = [1, 2, 3];\r\nlet arrB = arrA.map(x => x * 2);\r\n// arrB = [2, 4, 6]\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"map"})," statement above returns a new array with values multiplied by 2."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["See the nice emoji explanation By Joe Devilla\r\n(",(0,r.jsx)(n.a,{href:"https://www.globalnerdy.com/2016/06/23/map-filter-and-reduce-explained-using-emoji/",children:"https://www.globalnerdy.com/2016/06/23/map-filter-and-reduce-explained-using-emoji/"}),")"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"list-handling",children:"List handling"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The following example creates a state that is an array of numbers."}),"\n",(0,r.jsxs)(n.li,{children:["In the ",(0,r.jsx)(n.code,{children:"return"})," statement, the ",(0,r.jsx)(n.code,{children:"map"})," function is used to iterate over the ",(0,r.jsx)(n.code,{children:"numbers"})," array state, and for each item, it creates a ",(0,r.jsx)(n.code,{children:"li"})," element with the content of the item."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Note!"})," ",(0,r.jsx)(n.code,{children:"key"})," string attribute is needed in the lists. That helps React to identify which rows have changed. The ",(0,r.jsx)(n.code,{children:"map"})," method has a second argument, that is running index and we use that in the following example."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:"function MyList() {\r\n  const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5]);\r\n\r\n  return (\r\n    <div>\r\n      <ul>\r\n        { numbers.map((number, index) =>\r\n          <li key={index}>Listitem {number}</li>) }\r\n      </ul>\r\n    </div>\r\n  );\r\n}\r\n\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["The use of index is not recommended in proper apps because it can cause bugs if a list is reordered or you add or delete list items. Instead of that, you should use a unique key from the data if it exists. There are also libraries available that you can use to generate unique IDs, such as uuid (",(0,r.jsx)(n.a,{href:"https://github.com/uuidjs/uuid",children:"https://github.com/uuidjs/uuid"}),")"]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"list-handling-example",children:"List handling example"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The next example fetches an array of listitems from the REST API and store it to React state."}),"\n",(0,r.jsxs)(n.li,{children:["The REST API to be used is ",(0,r.jsx)(n.strong,{children:"Reqres.in"})," fake API, and the following URL returns a list of fake users (",(0,r.jsx)(n.a,{href:"https://reqres.in/api/users",children:"https://reqres.in/api/users"}),")."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Persons example",src:t(251).Z+"",width:"568",height:"337"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["We need an array to store a list of persons; therefore, we create a state called ",(0,r.jsx)(n.code,{children:"listItems"})," and initialize that to an empty array. Then, we use the ",(0,r.jsx)(n.code,{children:"useEffect"})," hook to send a request once after the first render."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const [listItems, setListItems] = React.useState([]);\r\n\r\nReact.useEffect(() => {\r\n  fetch('https://reqres.in/api/users')\r\n  .then(response => { \r\n    if (!response.ok)\r\n      throw new Error(\"Error in fetch: \" + response.statusText);  \r\n    \r\n    return response.json();\r\n  }) \r\n  .then(responseData => { \r\n    setListItems(responseData.data)\r\n  }) \r\n  .catch(err => console.error(err)\r\n}, [])\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"return"})," statement looks the following:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"return (\r\n  <div>\r\n    <h2>Persons</h2>\r\n    <table>\r\n      <tbody>\r\n        <tr><th>First name</th><th>Last name</th><th>Email</th></tr>\r\n        { listItems.map((person) => \r\n            <tr key={person.id}>\r\n              <td>{person.first_name}</td>\r\n              <td>{person.last_name}</td>\r\n              <td>{person.email}</td>\r\n            </tr> }\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now, the list should look like the following screenshot:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(8849).Z+"",width:"479",height:"366"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},251:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/persons-7349593fe1d82d117047b51f96dfb12f.png"},8849:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/persons2-5084da0ad185ba93d149e9dd55fb39d1.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var r=t(7294);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);