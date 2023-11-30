"use strict";(self.webpackChunkfrontendcourse=self.webpackChunkfrontendcourse||[]).push([[1741],{2021:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=t(5893),c=t(1151);const o={title:"useEffect hook",sidebar_position:2},r=void 0,i={id:"networking/useeffect",title:"useEffect hook",description:"useEffect",source:"@site/docs/networking/useeffect.md",sourceDirName:"networking",slug:"/networking/useeffect",permalink:"/frontendprogramming/docs/networking/useeffect",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"useEffect hook",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/frontendprogramming/docs/networking/intro"},next:{title:"Promises",permalink:"/frontendprogramming/docs/networking/promises"}},a={},d=[{value:"useEffect",id:"useeffect",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Without dependency array",id:"without-dependency-array",level:4},{value:"Using dependency array",id:"using-dependency-array",level:4},{value:"Empty dependency array",id:"empty-dependency-array",level:4},{value:"useEffect cleanup",id:"useeffect-cleanup",level:3},{value:"React hooks rules",id:"react-hooks-rules",level:3}];function l(e){const n={admonition:"admonition",code:"code",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"useeffect",children:"useEffect"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"useEffect"})," hook function can be used to perform side-effects in React function component. The side-effect can be for example, fetch request."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"useEffect"})," hook function takes two arguments:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"React.useEffect(callback, [dependencies])\n"})}),"\n",(0,s.jsx)(n.p,{children:"where,"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"callback"})," contains the code for the side effect you want to perform."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"dependencies"})," is an optional dependency array that contains values that ",(0,s.jsx)(n.code,{children:"useEffect"})," hook depends on."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"without-dependency-array",children:"Without dependency array"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Without the dependency array, side-effect is automatically executed each time after component has been rendered."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"React.useEffect(() => {\n  // Code here is executed after each re-render\n});\n"})}),"\n",(0,s.jsx)(n.h4,{id:"using-dependency-array",children:"Using dependency array"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["We can pass an array as the second argument to the ",(0,s.jsx)(n.code,{children:"useEffect"})," hook (dependency array)."]}),"\n",(0,s.jsxs)(n.li,{children:["In the following example, we pass ",(0,s.jsx)(n.code,{children:"count"})," state to the ",(0,s.jsx)(n.code,{children:"useEffect"})," hook. In that case, side-effect re-runs only if the ",(0,s.jsx)(n.code,{children:"count"})," state value changes."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"React.useEffect(() => {\n  // Code here is executed only if the count state changes\n}, [count]);\n"})}),"\n",(0,s.jsx)(n.h4,{id:"empty-dependency-array",children:"Empty dependency array"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["You can also pass an empty array to ",(0,s.jsx)(n.code,{children:"useEffect"})," hook. Then side-effect runs only after the ",(0,s.jsx)(n.strong,{children:"first"})," render. This is good for example, when we make calls to REST APIs."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"React.useEffect(() => {\n  // Code here is executed only after the first render\n}, []);\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"useeffect-cleanup",children:"useEffect cleanup"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["One example of a side effect is connection to some external system. You can use ",(0,s.jsx)(n.code,{children:"useEffect"})," to connect after the first render."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"useEffect"})," hook has optional ",(0,s.jsx)(n.strong,{children:"cleanup"})," functionality that you can use. It is ",(0,s.jsx)(n.code,{children:"return"})," statement, and the code is invoked after the component has been removed from the page (unmounted)."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"useEffect(() => {\n  // Side effect code\n\n  return () => {\n    // Clean up code\n  }\n}, [dependencies])\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Example: Component connects to a chat room after the first render. When component is unmounted, it disconnects from a chat room."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// Example from https://react.dev\nimport { useEffect } from 'react';\nimport { createConnection } from './chat.js';\n\nfunction ChatRoom() {\n  useEffect(() => {\n    const connection = createConnection('https://localhost:1234/room1');\n    connection.connect();\n    // Cleanup --\x3e disconnect\n    return () => {\n        connection.disconnect(); // Invoked when component is unmounted\n    };\n  }, []);\n  // ...\n}\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"react-hooks-rules",children:"React hooks rules"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["There are some general rules when using React hooks (useState, useEffect, etc.):","\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Use hooks only at the top level of your component function."}),"\n",(0,s.jsx)(n.li,{children:"Don\u2019t use hooks inside the loops, if statements or nested functions."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"CORRECT",type:"tip",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function MyComponent() {\n  React.useEffect(() => {\n    // Some code\n  })\n  ...\n}\n"})})}),"\n",(0,s.jsx)(n.admonition,{title:"WRONG",type:"danger",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function MyComponent() {    \n  function fetchData() {\n    // useEffect is called inside a nested function\n    React.useEffect(() => {\n      // Some code\n    })\n  }\n  ...\n}\n"})})})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>r});var s=t(7294);const c={},o=s.createContext(c);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);