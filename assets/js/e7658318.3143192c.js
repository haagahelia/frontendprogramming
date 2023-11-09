"use strict";(self.webpackChunkfrontendcourse=self.webpackChunkfrontendcourse||[]).push([[7967],{9195:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>h});var r=s(5893),t=s(1151);const a={title:"Fetch",sidebar_position:4},o=void 0,i={id:"networking/fetch",title:"Fetch",description:"Fetch API",source:"@site/docs/networking/fetch.md",sourceDirName:"networking",slug:"/networking/fetch",permalink:"/frontendprogramming/docs/networking/fetch",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/networking/fetch.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Fetch",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Promises",permalink:"/frontendprogramming/docs/networking/promises"},next:{title:"Example",permalink:"/frontendprogramming/docs/networking/fetchexample"}},c={},h=[{value:"Fetch API",id:"fetch-api",level:3},{value:"Response",id:"response",level:3},{value:"Setting HTTP method &amp; headers",id:"setting-http-method--headers",level:3},{value:"Response status",id:"response-status",level:3},{value:"async / await",id:"async--await",level:3},{value:"Further reading",id:"further-reading",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"fetch-api",children:"Fetch API"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Fetch API"})," can be used to handle web requests, and it is supported by modern browsers natively."]}),"\n",(0,r.jsx)(n.li,{children:"Fetch takes a URL as its first argument."}),"\n",(0,r.jsx)(n.li,{children:"Fetch is an asynchronous operation; and it provides promises that make response handling easier."}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"catch"})," handles network errors (offline, etc.)."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"fetch('https://mydomain.com/api')\r\n.then(response => {\r\n  // Handle response\r\n})\r\n.catch(err => {\r\n  // Something went wrong\r\n});\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In the successful request we can extract the JSON data from a request by using ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"json()"})})," function."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"fetch('https://mydomain.com/api')\r\n.then(response => response.json())\r\n.then(data => {\r\n  // Handle data\r\n})\r\n.catch(err => {\r\n  // Something went wrong\r\n});\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"response"})," is an object that contains following properties: body, headers, status, etc. (",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Response",children:"https://developer.mozilla.org/en-US/docs/Web/API/Response"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"fetch('https://mydomain.com/api')\r\n.then(response => console.log(response))\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Response",src:s(9754).Z+"",width:"719",height:"288"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"setting-http-method--headers",children:"Setting HTTP method & headers"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The HTTP method and header can be passed as a second argument to ",(0,r.jsx)(n.code,{children:"fetch"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"fetch('https://mydomain.com/api', {\r\n  method: 'POST', \r\n  headers: { \r\n    'Accept': 'application/json', \r\n    'Content-Type': 'application/json', \r\n  }\r\n})\r\n.then(response => {\r\n  // Handle response\r\n})\r\n.catch(err => {\r\n  // Something went wrong\r\n});\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"response-status",children:"Response status"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"You should also check the response status."}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"response.ok"})," returns true if the response status is 2XX."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"fetch('https://mydomain.com/api')\r\n.then(response => {\r\n  if (!response.ok) \r\n    throw new Error(response.statusText)\r\n  \r\n  return response.json()\r\n})\r\n.then(data => {\r\n  // Handle data\r\n})\r\n.catch(err => {\r\n  // Something went wrong\r\n});\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"async--await",children:"async / await"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In this material, we use ",(0,r.jsx)(n.code,{children:"then"})," statements, but you can use ",(0,r.jsx)(n.code,{children:"async/await"})," as well to handle promises."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const fetchData = async () => {\r\n  try {\r\n    const response = await fetch('https://mydomain.com/api');\r\n    const data = await response.json();\r\n  }\r\n  catch(error) {\r\n    console.error(error);\r\n  }\r\n}\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"further-reading",children:"Further reading"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Axios"})," ",(0,r.jsx)(n.a,{href:"https://axios-http.com/",children:"https://axios-http.com/"})," Popular JavaScript library for HTTP requests."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"React Query"}),": ",(0,r.jsx)(n.em,{children:'"React Query is often described as the missing data-fetching library for React, but in more technical terms, it makes fetching, caching, synchronizing and updating server state in your React applications a breeze."'}),"\r\n",(0,r.jsx)(n.a,{href:"https://tanstack.com/query",children:"https://tanstack.com/query"})]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},9754:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/response-a5cf093bc7ab0e32a3e7f3cf71fc80cb.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>o});var r=s(7294);const t={},a=r.createContext(t);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);