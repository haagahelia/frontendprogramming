---
title: 'Create Project'
sidebar_position: 2
---

### Create Vite React project

- Vite (French word for "quick", pronounced /vit/) https://vitejs.dev/
- Vite requires Node.js and you can check the latest version requirements from Vite website.
- You can create a new Vite project by entering the following npm command in command line:

```bash
npm create vite@latest
```
- The command opens a project wizard where you can define a name of your project and framework. Select **React** framework and  **javascript** variant.

  ![Vite project](./img/create_vite1.png)

- Next, you change directory into you project folder and install the dependencies:

```bash
cd your_project
npm install
```
- Finally, run the project in development mode:
```bash
npm run dev
```

![Vite Project](./img/create_vite2.png)

:::note
You can stop the process by pressing **_Ctrl + c_** in the terminal
:::
- Now, you can navigate to the local URL that is shown in the terminal.
- Vite provides HMR (Hot Module Replacement) which updates the page automatically when you make changes to javascript/typescript or css files.

![Vite Project](./img/vite_browser.png)

---
### Project structure

- Vite creates the following project structure
- The **_App.jsx_** file contains the React component that is rendered.
- If you have bigger app with multiple components and functionalities, it is better to create own folder for these. For example, /components, /api, etc.

![Project structure](./img/vite_project.png)


- `import` statements are used to import libraries, react components, stylesheet and assets to the component.
- `export` statement allows you to import component to another file by using the `import` statement

```jsx
// App.jsx
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return <div className="App"></div>;
}

export default App;
```
- The **_main.jsx_** file imports the `App` component and renders it to **_index.html_** file’s `root` element. The **_index.html_** file can be found from the root folder of your project.

```jsx
// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
:::note
The `React.StrictMode` lets you find common bug in your React app in the development phase. Due to strict mode, components will re-render extra time in the development mode to find bugs.
:::