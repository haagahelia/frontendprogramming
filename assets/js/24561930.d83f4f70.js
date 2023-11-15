"use strict";(self.webpackChunkfrontendcourse=self.webpackChunkfrontendcourse||[]).push([[8919],{8733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(5893),s=n(1151);const i={title:"Create Project",sidebar_position:3},o=void 0,c={id:"reactproject/createproject",title:"Create Project",description:"Create Vite React project",source:"@site/docs/reactproject/createproject.md",sourceDirName:"reactproject",slug:"/reactproject/createproject",permalink:"/frontendprogramming/docs/reactproject/createproject",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reactproject/createproject.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Create Project",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"JavaScript Modules",permalink:"/frontendprogramming/docs/reactproject/modules"},next:{title:"Todolist Example",permalink:"/frontendprogramming/docs/reactproject/todolist"}},a={},l=[{value:"Create Vite React project",id:"create-vite-react-project",level:3},{value:"Project structure",id:"project-structure",level:3},{value:"App.jsx",id:"appjsx",level:4},{value:"Main.jsx",id:"mainjsx",level:4}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"create-vite-react-project",children:"Create Vite React project"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:['Vite (French word for "quick", pronounced /vit/) ',(0,r.jsx)(t.a,{href:"https://vitejs.dev/",children:"https://vitejs.dev/"})]}),"\n",(0,r.jsx)(t.li,{children:"Vite requires Node.js and you can check the latest version requirements from Vite website."}),"\n",(0,r.jsx)(t.li,{children:"You can create a new Vite project by entering the following npm command in command line:"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm create vite@latest\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["The command opens a project wizard where you can define a name of your project and framework. Select ",(0,r.jsx)(t.strong,{children:"React"})," framework and  ",(0,r.jsx)(t.strong,{children:"javascript"})," variant. SWC (Speedy Web Compiler) is a fast JavaScript and TypeScript compiler written in Rust. It is a faster alternative to Babel, which is normally used."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Vite project",src:n(3003).Z+"",width:"613",height:"425"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Next, you change the directory to your project folder and install the dependencies:"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cd your_project\nnpm install\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Finally, run the project in development mode:"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm run dev\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Vite Project",src:n(9002).Z+"",width:"526",height:"196"})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["You can stop the process by pressing ",(0,r.jsx)(t.strong,{children:"q"})," in the terminal"]})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Now, you can access the local URL displayed in the terminal using your web browser."}),"\n",(0,r.jsx)(t.li,{children:"Vite provides HMR (Hot Module Replacement) which updates the page automatically when you make changes to javascript/typescript or css files."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Vite Project",src:n(1552).Z+"",width:"1125",height:"634"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"project-structure",children:"Project structure"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Vite creates the following project structure"}),"\n",(0,r.jsx)(t.li,{children:"If you have a bigger app with multiple components and functionalities, it is better to create own folders for them. For example, /components, /api, etc."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Project structure",src:n(8991).Z+"",width:"346",height:"612"})}),"\n",(0,r.jsx)(t.h4,{id:"appjsx",children:"App.jsx"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.strong,{children:"App.jsx"})," file contains the React component that is displayed when you open the app in a web browser."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"import"})," statements are used to import libraries, react components, stylesheet and assets to the component."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"export"})," statement allows you to import component to another file by using the ",(0,r.jsx)(t.code,{children:"import"})," statement"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",metastring:'title="App.jsx"',children:'import reactLogo from "./assets/react.svg";\nimport viteLogo from "/vite.svg";\nimport "./App.css";\n\nfunction App() {\n  return <div className="App"></div>;\n}\n\nexport default App;\n'})}),"\n",(0,r.jsx)(t.h4,{id:"mainjsx",children:"Main.jsx"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.em,{children:"main.jsx"})})," file imports the ",(0,r.jsx)(t.code,{children:"App"})," component and renders it to ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.em,{children:"index.html"})})," file\u2019s ",(0,r.jsx)(t.code,{children:"root"})," element. The ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.em,{children:"index.html"})})," file can be found from the root folder of your project."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",metastring:'title="main.jsx"',children:'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport App from "./App";\nimport "./index.css";\n\nReactDOM.createRoot(document.getElementById("root")).render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);\n'})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"React.StrictMode"})," lets you find common bugs in your React app in the development phase. Due to strict mode, components will re-render extra time in the development mode to find bugs."]})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3003:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create_vite1-c4e3dc41b01929cd953a29628836653e.PNG"},9002:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create_vite2-e530d12ef209d9e1709f64a518eccaf4.PNG"},1552:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/vite_browser-a44f3a87057b6bbc34105470eacb6464.PNG"},8991:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/vite_project-84752f44142798d7f2052b7dcff6105f.PNG"},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var r=n(7294);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);