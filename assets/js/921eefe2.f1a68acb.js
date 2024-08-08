"use strict";(self.webpackChunkfrontendcourse=self.webpackChunkfrontendcourse||[]).push([[5788],{3386:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=t(5893),a=t(1151);const i={title:"State",sidebar_position:5},c=void 0,r={id:"react-basics/state",title:"State",description:'State is component specific "memory" and it triggers component re-render when its value is changed.',source:"@site/docs/react-basics/state.md",sourceDirName:"react-basics",slug:"/react-basics/state",permalink:"/frontendprogramming/docs/react-basics/state",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"State",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Props",permalink:"/frontendprogramming/docs/react-basics/props"},next:{title:"User Input",permalink:"/frontendprogramming/docs/react-basics/userinput"}},o={},l=[{value:"Initializing state",id:"initializing-state",level:3},{value:"Updating state",id:"updating-state",level:3},{value:"Counter example",id:"counter-example",level:3},{value:"Question",id:"question",level:3},{value:"State batching",id:"state-batching",level:3},{value:"React Developer Tools",id:"react-developer-tools",level:3},{value:"Multiple states",id:"multiple-states",level:3},{value:"When to use state?",id:"when-to-use-state",level:3},{value:"ref",id:"ref",level:4},{value:"React state (Extra material)",id:"react-state-extra-material",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"State"}),' is component specific "memory" and it triggers component re-render when its value is changed.']}),"\n",(0,s.jsx)(n.h3,{id:"initializing-state",children:"Initializing state"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"State"})," is initialized using the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"useState"})})," hook function. In React, ",(0,s.jsx)(n.strong,{children:"hook"})," functions are named using the convention of starting the function name with ",(0,s.jsx)(n.strong,{children:"use"}),' followed by a descriptive term that explains what the hook does (in this case "State").']}),"\n",(0,s.jsxs)(n.li,{children:["Example below creates state variable called ",(0,s.jsx)(n.code,{children:"firstName"})," and function ",(0,s.jsx)(n.code,{children:"setFirstName"})," is used to update its value."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"useState"})," takes one argument that is an initial value of the defined state."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const [firstName, setFirstName] = React.useState("John");\n'})}),"\n",(0,s.jsx)(n.h3,{id:"updating-state",children:"Updating state"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["State value is ",(0,s.jsx)(n.strong,{children:"always"})," updated by using the function that you define in your ",(0,s.jsx)(n.code,{children:"useState"})," hook (see the previous slide and the second element in the array). Now, in this case the function is ",(0,s.jsx)(n.code,{children:"setFirstName"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'// Update value of the state\nsetFirstName("Jim");\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["State can be accessed by using name of a state (in this case ",(0,s.jsx)(n.code,{children:"firstName"}),")."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Do Not"})," update state directly!"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'firstName = "John";\n'})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Always"})," use a function that is defined in the ",(0,s.jsx)(n.code,{children:"useState"})," hook, then React knows when a state value has changed and re-rendering is needed."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"counter-example",children:"Counter example"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Next, we will create a counter app (screenshot below).\n",(0,s.jsx)(n.img,{alt:"Counter",src:t(7052).Z+"",width:"249",height:"131"})]}),"\n",(0,s.jsx)(n.li,{children:"We have one state and the value of the state is incremented by one when a user press the button."}),"\n",(0,s.jsxs)(n.li,{children:["First, we have to declare state. The name of state is ",(0,s.jsx)(n.code,{children:"count"})," and its value can be updated using the ",(0,s.jsx)(n.code,{children:"setCount"})," function. The intial value is zero."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function Counter() {\n  const [count, setCount] = React.useState(0);\n  // Continue...\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Then, in the ",(0,s.jsx)(n.code,{children:"return"})," statement we will render the ",(0,s.jsx)(n.code,{children:"count"})," state value and the button."]}),"\n",(0,s.jsxs)(n.li,{children:["Button's ",(0,s.jsx)(n.code,{children:"onClick"})," event attribute invokes ",(0,s.jsx)(n.code,{children:"setCount"})," function and increments the ",(0,s.jsx)(n.code,{children:"count"})," state value by one. The component is re-rendered when the state changes and therefore you can see the new value in the screen."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"return (\n  <div>\n    <p>You clicked {count} times</p>\n    <button onClick={() => setCount(count + 1)}>+</button>\n  </div>\n);\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Below is the source code of the ",(0,s.jsx)(n.code,{children:"Counter"})," component:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:"function Counter() {\n  const [count, setCount] = React.useState(0);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>+</button>\n    </div>\n  );\n}\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"question",children:"Question"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Change the counter app and render ",(0,s.jsx)(n.code,{children:"Counter"})," component three times. How counter values are changed if you click any of the buttons? Why?"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"function Counters(){\n\n  return (\n    <div>\n      <Counter />\n      <Counter />\n      <Counter />\n    </div>\n  );\n}\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"State updates are asynchronous and batched. In the Counter example, the new state depends on the previous value of the state. To make sure that the state is always updated correctly, you should pass a function that updates the state like shown in the following example."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"return (\n  <div>\n    <p>You clicked {count} times</p>\n    <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>\n  </div>\n);\n"})})]}),"\n",(0,s.jsx)(n.h3,{id:"state-batching",children:"State batching"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"State updates are batched to minimize re-renders for better performance."}),"\n",(0,s.jsx)(n.li,{children:"Before React 18 only state updates in the event handlers are batched."}),"\n",(0,s.jsx)(n.li,{children:"In React 18+ all updates are batched."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'// State batching\nfunction App() {\n  const [count, setCount] = useState(0);\n  const [msg, setMsg] = useState("");\n\n  function handleClick() {\n    setCount((prevCount) => prevCount + 1); // Does not re-render yet\n    setMsg("Counter: " + count); // Does not re-render yet\n    // Now, React re-render\n  }\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={handleClick}>Next</button>\n    </div>\n  );\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If you don't want to batch state updates, you can use ",(0,s.jsx)(n.code,{children:"flushSync()"})," from ",(0,s.jsx)(n.code,{children:"react-dom"})," package."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import { flushSync } from 'react-dom';\n...\n\nfunction handleClick() {\n  flushSync(() => {\n    setCounter(prevCount => c + 1);\n  });\n  // DOM is updated\n  flushSync(() => {\n    setMsg('Counter: ' + count);\n  });\n  // DOM is updated\n}\n...\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsx)(n.mdxAdmonitionTitle,{}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"flushSync"})," can have negative effect to performance. Use only when necessary."]})]}),"\n",(0,s.jsx)(n.h3,{id:"react-developer-tools",children:"React Developer Tools"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"React Developer Tools"})," is available as Chrome plugin, Firefox add-on or Edge extension. That can be used to debug your components."]}),"\n",(0,s.jsx)(n.li,{children:"Install this extension to your browser. After the successful installation you can see two new tabs in the browser console (Components and Profiler)."}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:'At the beginning of the course, we are running our app from a local file:// URL, therefore we have to enable "Allow access to file URLs" on the Chrome Extensions settings page.'}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"React Developer Tools can be used to debug component's state and props values."}),"\n"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(3618).Z+"",width:"1368",height:"417"})}),(0,s.jsx)(n.h3,{id:"multiple-states",children:"Multiple states"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If you need to have multiple state variables, you can just call ",(0,s.jsx)(n.code,{children:"useState"})," hook function multiple times."]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const [firstName, setFirstName] = React.useState("John");\nconst [lastName, setLastName] = React.useState("Johnson");\n'})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Or you can use an object state. That is recommended if the values are related to each others. For example, you have to store information about user (first name, last name, address, email, etc.)."}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const [name, setName] = React.useState({\n  firstName: "John",\n  lastName: "Johnson",\n});\n'})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If you use an object state, you can access state values by using the following syntax:"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"state_name.property;\n\n// for example\nname.firstName;\n"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If you use an object state, you can update values by using the ",(0,s.jsx)(n.code,{children:"setName"})," function and passing new object as parameter."]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'setName({ firstName: "Jim", lastName: "Brown" });\n'})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If only one value is updated, you have to use the object spread syntax (there is no auto merging) and pass new object as an argument to state update function (partial update)."}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'setName({ ...name, lastName: "Smith" });\n// New value is now firstName: John, lastName: Smith\n'})}),(0,s.jsx)(n.hr,{}),(0,s.jsx)(n.h3,{id:"when-to-use-state",children:"When to use state?"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"There are some differencies between states and variables that is good to understand. You should avoid unnecessary states. The more states a component has, the more complex its code becomes. It might also affect to performance."}),"\n"]}),(0,s.jsx)(n.p,{children:"Here are some key differences:"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"State"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The value of state persist between re-renders"}),"\n",(0,s.jsx)(n.li,{children:"Component is re-rendered if state value changes."}),"\n"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Variable"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The value of variable doesn't persist between re-renders."}),"\n",(0,s.jsx)(n.li,{children:"Component is not re-rendered if variable value changes."}),"\n"]}),(0,s.jsx)(n.p,{children:"Variables can be used to data that doesn't impact component's output directly."}),(0,s.jsx)(n.h4,{id:"ref",children:"ref"}),(0,s.jsxs)(n.p,{children:["If you need variable that persist between re-renders but it is not needed for rendering, you can use React ",(0,s.jsx)(n.code,{children:"ref"}),". You can create a ",(0,s.jsx)(n.code,{children:"ref"})," by calling the ",(0,s.jsx)(n.code,{children:"useRef"})," hook function and pass initial value as an argument."]}),(0,s.jsx)(n.p,{children:"For example,"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const myRef = useRef(0) // Call useRef hook in the top level of your component\n"})}),(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"useRef"})," hook function returns an object with a single property: ",(0,s.jsx)(n.code,{children:"current"}),". That property can be used to access and set a value."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"myRef.current = 10;\n"})}),(0,s.jsxs)(n.p,{children:["See the example in React documentation: ",(0,s.jsx)(n.a,{href:"https://react.dev/reference/react/useRef#examples-value",children:"https://react.dev/reference/react/useRef#examples-value"})]}),(0,s.jsx)(n.hr,{}),(0,s.jsx)(n.h3,{id:"react-state-extra-material",children:"React state (Extra material)"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"useReducer"})," hook function is alternative to ",(0,s.jsx)(n.code,{children:"useState"})]}),"\n",(0,s.jsx)(n.li,{children:"It is recommended to use, when the next state depends on the previous state (like in the case of counter example) or you have complex state."}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"useReducer"})," accepts reducer function and initial state as arguments."]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const [state, dispatch] = React.useReducer(reducer, { count: 0 });\n"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["State updates are done by using ",(0,s.jsx)(n.code,{children:"reducer"})," function and it takes two arguments: previous state and action."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"reducer"})," function returns next state."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"reducer"})," is pure function (takes an input and returns an output without changing the input). In this case, it gets previous state as input and returns next state."]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"(previousstate, action) => newstate;\n"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The following ",(0,s.jsx)(n.code,{children:"reducer"})," function handles the increment and decrement of count state."]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function reducer(state, action) {\n  switch (action.type) {\n    case 'increment':\n      return {count: state.count + 1\n    case 'decrement':\n      return {count: state.count - 1\n    default:\n      throw new Error();\n   }\n}\n"})}),(0,s.jsx)(n.hr,{}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"reducer"})," function can be now called from the counter buttons in the following way:"]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<button onClick={() => dispatch({type: 'decrement'})}>-</button>\n<button onClick={() => dispatch({type: 'increment'})}>+</button>\n"})})]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7052:(e,n,t)=>{t.d(n,{Z:()=>s});const s="data:image/png;base64,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"},3618:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/reactdevtools-331e8c7217d7614a2fb98435b2003541.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>c});var s=t(7294);const a={},i=s.createContext(a);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);