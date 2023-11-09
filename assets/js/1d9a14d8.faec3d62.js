"use strict";(self.webpackChunkfrontendcourse=self.webpackChunkfrontendcourse||[]).push([[6598],{868:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=t(5893),o=t(1151);const s={title:"JavaScript Modules",sidebar_position:2},i=void 0,a={id:"reactproject/modules",title:"JavaScript Modules",description:"Before we start to create React projects, it is important to understand how JavaScript modules works.",source:"@site/docs/reactproject/modules.md",sourceDirName:"reactproject",slug:"/reactproject/modules",permalink:"/frontendprogramming/docs/reactproject/modules",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reactproject/modules.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"JavaScript Modules",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/frontendprogramming/docs/reactproject/intro"},next:{title:"Create Project",permalink:"/frontendprogramming/docs/reactproject/createproject"}},l={},c=[{value:"JavaScript modules / Export",id:"javascript-modules--export",level:3},{value:"Named export",id:"named-export",level:4},{value:"Default export",id:"default-export",level:4},{value:"JavaScript modules / Import",id:"javascript-modules--import",level:3},{value:"Further Reading",id:"further-reading",level:3}];function d(e){const r={a:"a",code:"code",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Before we start to create React projects, it is important to understand how JavaScript modules works."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Scripts can be split into several files using modules. A module can provide classes, library functions, and variables for other modules to use."}),"\n",(0,n.jsxs)(r.li,{children:["There are several different JavaScript module systems. In React programming, we use ",(0,n.jsx)(r.strong,{children:"ES6 modules"}),"."]}),"\n",(0,n.jsx)(r.li,{children:"CommonJS modules are imported using require-function. It is the default in Node.js even though ES6 modules are supported too."}),"\n",(0,n.jsxs)(r.li,{children:["In brief","\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"A module is simply a JavaScript file."}),"\n",(0,n.jsx)(r.li,{children:"A module exports the variables and functions that it offers to be used outside the file."}),"\n",(0,n.jsx)(r.li,{children:"Another module that uses the services of another module imports them from the module."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"javascript-modules--export",children:"JavaScript modules / Export"}),"\n",(0,n.jsx)(r.h4,{id:"named-export",children:"Named export"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["You can export an identifier by adding the keyword ",(0,n.jsx)(r.code,{children:"export"})," in front of the declaration. This is so called ",(0,n.jsx)(r.strong,{children:"named export"}),", and module can have multiple named exports. Named exports are useful for exporting variables and functions."]}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"export const myPi = 3.14;\r\n\r\nexport function circleArea(r) {\r\n  return myPi*r*r;\r\n}\n"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Alternatively, you can export all the items you want to export in a single export statement at the end of your module file."}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"export { myPi, circleArea };\n"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"The exported items can be imported into other files. The imported features can be used just like they were defined inside the same file."}),"\n",(0,n.jsxs)(r.li,{children:["Note: imported variables are always considered ",(0,n.jsx)(r.code,{children:"const"}),", no matter how they were declared."]}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"import { myPi, circleArea } from './mylib.js';\r\n\r\nconsole.log('The value of pi is', myPi);\r\nconsole.log(circleArea(1.0));\n"})}),"\n",(0,n.jsx)(r.h4,{id:"default-export",children:"Default export"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Another way of exporting is to define a ",(0,n.jsx)(r.code,{children:"default export"})," in the module. This is so called ",(0,n.jsx)(r.strong,{children:"default export"})," and you can have only one default export in module. In React, components are exported using the default export."]}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"const myPi = 3.14;\r\nconst area = r => myPi * r * r;\r\nconst circumference = r => 2 * myPi * r;\r\nexport default { area, circumference }; // an object with two attributes\n"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"You can import the default like this:"}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"import c from './mydefault.js' // default export is assigned to c\r\n\r\nconsole.log(c.area(4));\r\nconsole.log(c.circumference(4));\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"javascript-modules--import",children:"JavaScript modules / Import"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"You can import everything from a module by importing the module as an object. The exported items are accessible as properties of the module object."}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"import * as c from './mylib.js';\r\nconsole.log('The value of pi is', c.myPi);\r\nconsole.log(c.circleArea(1.0));\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"further-reading",children:"Further Reading"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["MDN - JavaScript modules: ",(0,n.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",children:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"})]}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,r,t)=>{t.d(r,{Z:()=>a,a:()=>i});var n=t(7294);const o={},s=n.createContext(o);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);