"use strict";(self.webpackChunkfrontendcourse=self.webpackChunkfrontendcourse||[]).push([[9932],{3314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=n(5893),a=n(1151);const i={title:"What is React?",sidebar_position:2},o=void 0,c={id:"react-basics/whatisreact",title:"What is React?",description:"React logo",source:"@site/docs/react-basics/whatisreact.md",sourceDirName:"react-basics",slug:"/react-basics/whatisreact",permalink:"/frontendprogramming/docs/react-basics/whatisreact",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"What is React?",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/frontendprogramming/docs/react-basics/intro"},next:{title:"Modern JavaScript",permalink:"/frontendprogramming/docs/react-basics/es6"}},r={},l=[{value:"React components",id:"react-components",level:4},{value:"Component tree",id:"component-tree",level:4},{value:"Virtual DOM",id:"virtual-dom",level:4}];function d(e){const t={a:"a",admonition:"admonition",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"React logo",src:n(8524).Z+"",width:"241",height:"209"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"JavaScript library for building user interfaces."}),"\n",(0,s.jsx)(t.li,{children:"Uses declarative way to define the UI and its changes."}),"\n",(0,s.jsx)(t.li,{children:"Developed by Meta (formerly Facebook) under the MIT license."}),"\n",(0,s.jsx)(t.li,{children:"React is component based and components are reusable. React components are JavaScript functions."}),"\n",(0,s.jsxs)(t.li,{children:["React documentation: ",(0,s.jsx)(t.a,{href:"https://react.dev/",children:"https://react.dev/"})]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"react-components",children:"React components"}),"\n",(0,s.jsx)(t.p,{children:"React components are like lego blocks from which you can build a user interface. The following UI example consists of four react components:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Root component (black)"}),"\n",(0,s.jsx)(t.li,{children:"Search component (red)"}),"\n",(0,s.jsx)(t.li,{children:"Table component (blue)"}),"\n",(0,s.jsx)(t.li,{children:"Table row component (green)"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Components",src:n(9813).Z+"",width:"1100",height:"712"})}),"\n",(0,s.jsx)(t.h4,{id:"component-tree",children:"Component tree"}),"\n",(0,s.jsxs)(t.p,{children:["React components build a component tree that now looks the following.\n",(0,s.jsx)(t.img,{alt:"Components",src:n(9338).Z+"",width:"701",height:"591"})]}),"\n",(0,s.jsx)(t.admonition,{title:"Data Flow",type:"note",children:(0,s.jsx)(t.p,{children:"By default, data only flows in one direction from parent to child component in component tree."})}),"\n",(0,s.jsx)(t.h4,{id:"virtual-dom",children:"Virtual DOM"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Document Object Model (DOM)"})," is an interface for the web document so that scripting languages, such as JavaScript, can access, manipulate, and programmatically interact with the document\u2019s content. DOM manipulations in web applications are one of the most time consuming operations. React is using ",(0,s.jsx)(t.strong,{children:"virtual DOM"}),", that is a lightweight JavaScript presentation of the DOM. It is much faster to update the virtual DOM than the actual DOM. When the UI is changed, React creates a new virtual DOM and compares it to the previous one to find out what changes are necessary to the actual DOM."]})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},9338:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/componentTree-fcc41adc591b314281346a2ea878b379.PNG"},9813:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/components-e30636489fa30d6faefa76e7a4950b60.PNG"},8524:(e,t,n)=>{n.d(t,{Z:()=>s});const s="data:image/png;base64,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"},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var s=n(7294);const a={},i=s.createContext(a);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);