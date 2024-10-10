"use strict";(self.webpackChunkfrontendcourse=self.webpackChunkfrontendcourse||[]).push([[903],{9085:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=a(5893),s=a(1151);const i={title:"Networking Example",sidebar_label:"Example",sidebar_position:4},r=void 0,o={id:"networking/fetchexample",title:"Networking Example",description:"NASA APOD API",source:"@site/docs/networking/fetchexample.md",sourceDirName:"networking",slug:"/networking/fetchexample",permalink:"/frontendprogramming/docs/networking/fetchexample",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Networking Example",sidebar_label:"Example",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Fetch",permalink:"/frontendprogramming/docs/networking/fetch"},next:{title:"List Handling",permalink:"/frontendprogramming/docs/networking/listhandling"}},d={},l=[{value:"NASA APOD API",id:"nasa-apod-api",level:3},{value:"Response",id:"response",level:4},{value:"State for response data",id:"state-for-response-data",level:4},{value:"Fetch",id:"fetch",level:4},{value:"Display data",id:"display-data",level:4},{value:"Further reading",id:"further-reading",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"nasa-apod-api",children:"NASA APOD API"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The following example uses the ",(0,t.jsx)(n.strong,{children:"NASA APOD"})," API, that displays daily astronomy picture or video (",(0,t.jsx)(n.a,{href:"https://api.nasa.gov/",children:"https://api.nasa.gov/"}),")."]}),"\n",(0,t.jsx)(n.li,{children:"The example sends a request to the NASA APOD Rest API and displays the daily image and explanation that we receive in a response."}),"\n",(0,t.jsxs)(n.li,{children:["Rest API can be called by using the following URL (GET method):\n",(0,t.jsx)(n.a,{href:"https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",children:"https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"})]}),"\n",(0,t.jsxs)(n.li,{children:["The response payload contains ",(0,t.jsx)(n.code,{children:"explanation"})," and ",(0,t.jsx)(n.code,{children:"url"})," properties. The ",(0,t.jsx)(n.code,{children:"media_type"})," property can be used to check if the daily media is video or image."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"response",children:"Response"}),"\n",(0,t.jsx)(n.p,{children:"The response data looks like the image below:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Nasa API response",src:a(1164).Z+"",width:"704",height:"487"})}),"\n",(0,t.jsx)(n.h4,{id:"state-for-response-data",children:"State for response data"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"We will create a React app that calls the NASA APOD API and displays the daily image and explanation."}),"\n",(0,t.jsx)(n.li,{children:"We need a state to store data from the response (image url, explanation, and type of media)."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// State for response data\nconst [data, setData] = React.useState({});\n"})}),"\n",(0,t.jsx)(n.h4,{id:"fetch",children:"Fetch"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The fetch API call is made inside the ",(0,t.jsx)(n.code,{children:"useEffect"})," hook, and the second argument is an empty array because we want to send requests only once after the first render."]}),"\n",(0,t.jsxs)(n.li,{children:["When the response arrives, the response data is saved to the ",(0,t.jsx)(n.code,{children:"data"})," state, and UI is re-rendered automatically by React."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"React.useEffect(() => {\n  fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')\n  .then(response =>  { \n    if (!response.ok)\n      throw new Error(\"Error in fetch: \" + response.statusText);  \n    \n    return response.json();\n  })\n  .then(responseData => setData(responseData))\n  .catch(err => console.error(err))\n}, []);\n"})}),"\n",(0,t.jsx)(n.h4,{id:"display-data",children:"Display data"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Then, we will use conditional rendering. We will check the ",(0,t.jsx)(n.code,{children:"media_type"})," and render either an image or video:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'if (!data.media_type) {\n  return <p>Loading...</p>\n}\nelse if (data.media_type === "image") {\n  return (\n    <div>\n      <p>Explanation: {data.explanation}</p>\n      <img src={data.url} />\n    </div>\n  );\n}\nelse {\n  return (\n    <div>\n      <p>Explanation: {data.explanation}</p>\n      <iframe width="520" height="415" src={data.url}></iframe>\n    </div>\n  );\n}\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Or using inline conditional rendering"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"if (!data.media_type) {\n  return <p>Loading...</p>\n}\nelse {\n  return (\n    <div>\n      <p>Explanation: {data.explanation}</p>\n      { data.media_type === 'video' && <iframe width=\"520\" height=\"415\" src={data.url}></iframe> }          \n      { data.media_type === 'image' && <img src={data.url} /> }\n    </div>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Nasa API example",src:a(4904).Z+"",width:"683",height:"384"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["In the NASA APOD example, we made a network request using the ",(0,t.jsx)(n.code,{children:"useEffect"})," hook because we wanted to display the APOD image once after the component is rendered the first time. When a request requires some user input, such as pressing a button, you can trigger the request within the button's ",(0,t.jsx)(n.code,{children:"onClick"})," event handler, and the ",(0,t.jsx)(n.code,{children:"useEffect"})," hook is not needed. You should avoid using unnecessary ",(0,t.jsx)(n.code,{children:"useEffect"}),"s as it increases the complexity of the component."]})}),"\n",(0,t.jsx)(n.p,{children:"In proper React application you might use some data fetching library such as Tanstack Query or SWR. By using these, you can significantly enhance the performance, reliability, and maintainability of your React applications. They provide a lot of nice features like data caching, automatic refetching, error handling etc."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"further-reading",children:"Further reading"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Axios"}),": Axios is a popular JavaScript library that is used for making asynchronous HTTP requests to web servers and handling responses. ",(0,t.jsx)(n.a,{href:"https://axios-http.com/",children:"https://axios-http.com/"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Tanstack Query"}),": ",(0,t.jsx)(n.em,{children:'"Tanstack Query (formerly React Query) is often described as the missing data-fetching library for React, but in more technical terms, it makes fetching, caching, synchronizing and updating server state in your React applications a breeze."'}),"\n",(0,t.jsx)(n.a,{href:"https://tanstack.com/query",children:"https://tanstack.com/query"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"SWR"})})," SWR (",(0,t.jsx)(n.a,{href:"https://swr.vercel.app/",children:"https://swr.vercel.app/"}),") is similar to Tanstack Query."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1164:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/nasa1-1ce817c59ea892419047c44cbf749a0f.png"},4904:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/nasa2-259f28448effcda630bbfbc108141b0d.png"},1151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>r});var t=a(7294);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);