"use strict";(self.webpackChunkfrontendcourse=self.webpackChunkfrontendcourse||[]).push([[3856],{4750:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var t=r(5893),o=r(1151);const a={title:"React Router",sidebar_position:6},i=void 0,s={id:"3rdpartycomponents/router",title:"React Router",description:"- React Router (https://reacttraining.com/react-router/) is a collection of navigational components for React or React Native applications.",source:"@site/docs/3rdpartycomponents/router.md",sourceDirName:"3rdpartycomponents",slug:"/3rdpartycomponents/router",permalink:"/frontendprogramming/docs/3rdpartycomponents/router",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"React Router",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"MUI",permalink:"/frontendprogramming/docs/3rdpartycomponents/mui"},next:{title:"Testing",permalink:"/frontendprogramming/docs/category/testing"}},c={},l=[{value:"React Router example application",id:"react-router-example-application",level:3},{value:"Error handling",id:"error-handling",level:3},{value:"Error component",id:"error-component",level:3},{value:"Further reading",id:"further-reading",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["React Router (",(0,t.jsx)(n.a,{href:"https://reacttraining.com/react-router/",children:"https://reacttraining.com/react-router/"}),") is a collection of navigational components for React or React Native applications."]}),"\n",(0,t.jsx)(n.li,{children:"Installation command for the React web apps:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install react-router-dom localforage match-sorter sort-by\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"react-router-example-application",children:"React Router example application"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["In the following example, we create routing for an app with three components ",(0,t.jsx)(n.code,{children:"Home"}),", ",(0,t.jsx)(n.code,{children:"About"})," and ",(0,t.jsx)(n.code,{children:"Contact"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["The router is rendered in the application root in ",(0,t.jsx)(n.code,{children:"main.jsx"}),"\n",(0,t.jsx)(n.img,{alt:"Router example",src:r(8928).Z+"",width:"849",height:"316"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The required components:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"// Home.jsx \nexport default function Home() {\n  return(<h1>Welcome to my app</h1>);\n}\n\n// About.jsx\nexport default function About() {\n  return(<h1>With my app you can...</h1>);\n}\n\n// Contact.jsx\nexport default function Contact() {\n  return(<h1>Email: myapp@contact.com</h1>);\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"App"})," component contains the application navigation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Link"})," components  let the user navigate to another page in router"]}),"\n",(0,t.jsxs)(n.li,{children:["Component ",(0,t.jsx)(n.code,{children:"Outlet"})," renders the page navigated to within the ",(0,t.jsx)(n.code,{children:"App"})," view"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="App.jsx"',children:'import { Link, Outlet } from \'react-router-dom\';\n\nfunction App() {\n  return (\n    <div className="App">\n      <nav>\n        <Link to={"/"}>Home</Link>\n        <Link to={"/about"}>About</Link>\n        <Link to={"/contact"}>Contact</Link>\n      </nav>\n      <Outlet />\n    </div>\n  );\n}\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["First, we will create ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"BrowserRouter"})})," in the root of the application (",(0,t.jsx)(n.code,{children:"main.jsx"}),") using the ",(0,t.jsx)(n.code,{children:"createBrowserRouter"})," function. It takes an array of route objects as an argument."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="main.jsx"',children:"import App from './App';\nimport { createBrowserRouter } from 'react-router-dom';\n\nconst router = createBrowserRouter([\n  {\n    path: \"/\",\n    element: <App />,\n  },\n]);\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["In the example code, we create the ",(0,t.jsx)(n.strong,{children:"root route"})," that renders our ",(0,t.jsx)(n.code,{children:"App"})," component when user navigates to the ",(0,t.jsx)(n.code,{children:"/"}),"- endpoint."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="main.jsx"',children:'const router = createBrowserRouter([\n  // root route\n  {\n    path: "/",\n    element: <App />,\n  },\n]);\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"path"})," property is a path pattern. When it matches to current URL, the element will be rendered."]}),"\n",(0,t.jsxs)(n.li,{children:["If a route path pattern ends with ",(0,t.jsx)(n.code,{children:"/*"})," it will match any characters following the ",(0,t.jsx)(n.code,{children:"/"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Next, we will create rest of our routes. They are created as children of the root route."}),"\n",(0,t.jsxs)(n.li,{children:["One of the children is defined as the index route. It is rendered at the root path ",(0,t.jsx)(n.code,{children:"/"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="main.jsx"',children:'const router = createBrowserRouter([  // Import components that are used in routes\n  {\n    path: "/",\n    element: <App />,\n    children: [                       // children are nested routes with a route\n      {\n        element: <Home />,\n        index: true                   // index route does not need any path\n      },\n      {\n        path: "about",                // path can be defined relative to the parent path\n        element: <About />,\n      },\n      {\n        path: "contact",\n        element: <Contact />,\n      },\n    ]\n  }\n]);\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Finally, we will use ",(0,t.jsx)(n.code,{children:"RouterProvider"})," component to render the router and pass our routes to this component using the ",(0,t.jsx)(n.code,{children:"router"})," prop."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="main.jsx"',children:"import { createBrowserRouter, RouterProvider } from 'react-router-dom';\n...\n\nconst router = createBrowserRouter([\n  {\n    path: \"/\",\n    element: <App />,\n...\n\nReactDOM.createRoot(document.getElementById('root')).render(\n  <React.StrictMode>\n    <RouterProvider router={router} />\n  </React.StrictMode>,\n);\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["See the whole source code ",(0,t.jsx)(n.a,{href:"https://github.com/juhahinkula/reactrouter.git",children:"https://github.com/juhahinkula/reactrouter.git"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Router example",src:r(7690).Z+"",width:"971",height:"434"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"error-handling",children:"Error handling"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Navigation to a path that does not exist causes an error, and the React Router default error component is rendered."}),"\n",(0,t.jsx)(n.li,{children:"We can create an own component that will be rendered when error happens."}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"errorElement"})," property can be used to define an element that is rendered if the  throws an exception."]}),"\n",(0,t.jsxs)(n.li,{children:["If the ",(0,t.jsx)(n.code,{children:"errorElement"})," is defined for the root route it applies everywhere in the router"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const router = createBrowserRouter([\n  {\n    path: "/",\n    element: <App />,\n    errorElement: <Error />\n  },\n...\n'})}),"\n",(0,t.jsx)(n.h3,{id:"error-component",children:"Error component"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Hook ",(0,t.jsx)(n.code,{children:"useRouteError"})," can be used in an ",(0,t.jsx)(n.code,{children:"errorElement"}),". It returns the error that was thrown."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'// Error.jsx\nimport { useRouteError } from "react-router-dom";\n\nexport default function Error() {\n  const error = useRouteError();\n  console.log(error);   // check the console to see the full contents of the error object\n\n  return (\n    <div>\n      <h1>Page not found</h1>\n      <p>{error.data}</p>\n    </div>\n  );\n}\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"further-reading",children:"Further reading"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["React Router full tutorial: ",(0,t.jsx)(n.a,{href:"https://reactrouter.com/en/main/start/tutorial",children:"https://reactrouter.com/en/main/start/tutorial"})]}),"\n",(0,t.jsxs)(n.li,{children:["Nested routes (children): ",(0,t.jsx)(n.a,{href:"https://reactrouter.com/en/main/start/tutorial#nested-routes",children:"https://reactrouter.com/en/main/start/tutorial#nested-routes"})]}),"\n",(0,t.jsxs)(n.li,{children:["Error handling: ",(0,t.jsx)(n.a,{href:"https://reactrouter.com/en/main/start/tutorial#handling-not-found-errors",children:"https://reactrouter.com/en/main/start/tutorial#handling-not-found-errors"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},7690:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/react_router_example_browser-ef485b679b28a06e35c86c79824bf920.png"},8928:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/react_router_example_screen-fa514ceb59e1358439b5ac269f9b46bc.png"},1151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>i});var t=r(7294);const o={},a=t.createContext(o);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);