"use strict";(self.webpackChunkfrontendcourse=self.webpackChunkfrontendcourse||[]).push([[4751],{540:(e,n,A)=>{A.r(n),A.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>t,metadata:()=>o,toc:()=>a});var s=A(5893),r=A(1151);const t={title:"Props",sidebar_position:4},i=void 0,o={id:"react-basics/props",title:"Props",description:"Basics",source:"@site/docs/react-basics/props.md",sourceDirName:"react-basics",slug:"/react-basics/props",permalink:"/frontendprogramming/docs/react-basics/props",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react-basics/props.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Props",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"React Component",permalink:"/frontendprogramming/docs/react-basics/reactcomponent"},next:{title:"State",permalink:"/frontendprogramming/docs/react-basics/state"}},c={},a=[{value:"Basics",id:"basics",level:3},{value:"JSX",id:"jsx",level:3},{value:"PropTypes",id:"proptypes",level:3},{value:"Example of using props",id:"example-of-using-props",level:3},{value:"Passing props",id:"passing-props",level:3},{value:"Receiving props",id:"receiving-props",level:3},{value:"Using props",id:"using-props",level:3},{value:"Summary",id:"summary",level:3},{value:"A tip for props",id:"a-tip-for-props",level:3},{value:"Further reading",id:"further-reading",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"basics",children:"Basics"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Parent component can pass data to its child component using the ",(0,s.jsx)(n.strong,{children:"props"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Props are passed to component in function arguments."}),"\n",(0,s.jsxs)(n.li,{children:["Props are JavaScript ",(0,s.jsx)(n.strong,{children:"objects"})," where keys are the prop names and the values are data you pass from a parent component to a child component."]}),"\n",(0,s.jsxs)(n.li,{children:["You can access props as an argument in the component function. For example, using the ",(0,s.jsx)(n.code,{children:"props"})," keyword as shown in the following code snippet."]}),"\n",(0,s.jsxs)(n.li,{children:["You can display the value of the props by wrapping them inside curly brackets, for example ",(0,s.jsx)(n.code,{children:"{props.firstname}"})," (= JSX, coming later)."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'function HelloComponent(props) {\n  return <div>Hello World {props.firstname}</div>;\n}\n\nconst root = ReactDOM.createRoot(document.getElementById("root"));\nroot.render(<HelloComponent firstname="John" />);\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"There can be multiple props passed to a component (multiple object properties):"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'function HelloComponent(props) {\n  return (\n    <div>Hello World {props.firstname} {props.lastname}</div>\n  );\n}\n\nconst root = ReactDOM.createRoot(document.getElementById("root"));\nroot.render(<HelloComponent firstname="John" lastname="Smith" />);\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Or you can use object destructuring:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// Destructing the props object --\x3e {firstname, lastname}\nfunction HelloComponent({ firstname, lastname }) {\n  return (\n    <div>\n      Hello World {firstname} {lastname}\n    </div>\n  );\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"jsx",children:"JSX"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"JSX"})," is Javascript syntax extension which is recommended to use with React."]}),"\n",(0,s.jsxs)(n.li,{children:["In the example above, we had the following ",(0,s.jsx)(n.code,{children:"return"})," statement, and it contains JSX that looks very similar to HTML."]}),"\n",(0,s.jsxs)(n.li,{children:["We can embed JavaScript expressions to JSX by wrapping them within the curly braces (",(0,s.jsx)(n.code,{children:"{}"}),").\nAfter compilation, JSX expressions becomes regular JavaScript objects."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"return (\n  <div>Hello World {props.firstname} {props.lastname}</div>\n);\n"})}),"\n",(0,s.jsx)(n.p,{children:"More JSX examples:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:"function HelloComponent() {\n  const name = \"Mary\";\n  const age = 20;\n  \n  return (\n    <div>\n      <p>Hello {name}</p>\n      <p>Is Mary older than 18? {age > 18 ? 'Yes' : 'No'}</p>\n      <p>3 + 5 equals {3 + 5}</p>\n    </div>\n  );\n}\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"proptypes",children:"PropTypes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["You can use ",(0,s.jsx)(n.code,{children:"props"})," type checking in React by using the ",(0,s.jsx)(n.code,{children:"PropTypes"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import PropTypes from "prop-types";\n\nfunction HelloComponent(props) {\n  return <div>Hello World {props.firstname}</div>;\n}\n\nHelloComponent.propTypes = {\n  firstname: PropTypes.string, // string, number, bool, func etc.\n};\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Note! This works only in development mode."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"example-of-using-props",children:"Example of using props"}),"\n",(0,s.jsxs)(n.p,{children:["Let's define two components. One of them (",(0,s.jsx)(n.strong,{children:"parent"}),") renders the other (",(0,s.jsx)(n.strong,{children:"child"}),") three times."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function ParentComponent() {\n  return (\n    <div>\n      <h1>I am the parent component</h1>\n      <ChildComponent />\n      <ChildComponent />\n      <ChildComponent />\n    </div>\n  );\n}\n\nfunction ChildComponent() {\n  return (\n    <p>I am the first child</p>\n  );\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"The output looks like the screenshot below:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Props example",src:A(322).Z+"",width:"262",height:"288"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"As expected, the program renders all children the same. They all think they are the first child."}),"\n",(0,s.jsx)(n.li,{children:"The children do not have the information about their position, only the parent knows it."}),"\n",(0,s.jsxs)(n.li,{children:["The parent can convey this information to the children in ",(0,s.jsx)(n.strong,{children:"props"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"passing-props",children:"Passing props"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["We can define our own attributes for components and give them JavaScript values at rendering. In React they are called ",(0,s.jsx)(n.em,{children:"props"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"  <ChildComponent attribute1={value1} attribute2={value2}>\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"There can be any number of props."}),"\n",(0,s.jsx)(n.li,{children:"You can use any name you like. It is the name of a variable."}),"\n",(0,s.jsx)(n.li,{children:"The value can be of any type: number, text, boolean, object, or function"}),"\n",(0,s.jsxs)(n.li,{children:["We can pass the text to show to the child component as an attribute. Let's call the attribute ",(0,s.jsx)(n.code,{children:"text"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"  <ChildComponent text={'I am the first Child'}>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"receiving-props",children:"Receiving props"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"React components are functions. Functions receive arguments in their parameters."}),"\n",(0,s.jsx)(n.li,{children:"We need to define a parameter for the props. Let us also log the contents of the parameter to the console:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"  function ChildComponent(props) {\n    console.log(props);\n    return (<p>I am the first child</p>);\n  }\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The console shows that ",(0,s.jsx)(n.code,{children:"props"})," contains an object that has the attribute ",(0,s.jsx)(n.code,{children:"text"})," as property:\n",(0,s.jsx)(n.img,{alt:"Props console",src:A(9332).Z+"",width:"547",height:"89"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"using-props",children:"Using props"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Props example 2",src:A(7525).Z+"",width:"260",height:"343"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Now the parent can tell the children what to show. The information is in ",(0,s.jsx)(n.code,{children:"props"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function ParentComponent() {\n  return (\n    <div>\n      <h1>I am the parent</h1>\n      <ChildComponent text={'I am the first child'} />\n      <ChildComponent text={'I am the second child'} />\n      <ChildComponent text={'I am the third child'} />\n    </div>\n  );\n}\n\nfunction ChildComponent(props) {\n  return (<p>{props.text}</p>);\n}\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Why do you need props?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"You need them whenever a parent component (one that renders other components) needs to pass information to the child it renders."}),"\n",(0,s.jsx)(n.li,{children:"You can create reusable components using the props."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["How do ",(0,s.jsx)(n.code,{children:"props"})," work?"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Parent component can pass data to its child component usign the props."}),"\n",(0,s.jsxs)(n.li,{children:["The child receives ",(0,s.jsx)(n.code,{children:"props"})," as argument (parameter value). The value of ",(0,s.jsx)(n.code,{children:"props"})," in a JavaScript object with the attributes as properties.\nWhy are they called ",(0,s.jsx)(n.code,{children:"props"}),"?"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"props"}),"is short for ",(0,s.jsx)(n.em,{children:"properties"}),". It is just a name of a function parameter. You could call it anything but by convention the parameter name is ",(0,s.jsx)(n.code,{children:"props"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"a-tip-for-props",children:"A tip for props"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["You can simplify the usage of ",(0,s.jsx)(n.code,{children:"props"})," by defining variables for the properties received, especially if there are several. Object destructuring syntax provides a nice shorthand notation:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"  <ChildComponent text={'I am child number'} position={pos} />\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"  function ChildComponent(props) {\n      //highlight-next-line\n    const { text, position } = props;\n\n    return (\n      <p>{text} {position}</p>\n    );\n  }\n"})}),"\n",(0,s.jsx)(n.p,{children:"OR"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"  function ChildComponent({ text, position }) {\n    return (\n      <p>{text} {position}</p>\n    );\n  }\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"further-reading",children:"Further reading"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://itnext.io/what-is-props-and-how-to-use-it-in-react-da307f500da0",children:"https://itnext.io/what-is-props-and-how-to-use-it-in-react-da307f500da0"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://javascript.info/destructuring-assignment#object-destructuring",children:"https://javascript.info/destructuring-assignment#object-destructuring"})}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},9332:(e,n,A)=>{A.d(n,{Z:()=>s});const s="data:image/png;base64,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"},322:(e,n,A)=>{A.d(n,{Z:()=>s});const s="data:image/png;base64,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"},7525:(e,n,A)=>{A.d(n,{Z:()=>s});const s="data:image/png;base64,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"},1151:(e,n,A)=>{A.d(n,{Z:()=>o,a:()=>i});var s=A(7294);const r={},t=s.createContext(r);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);