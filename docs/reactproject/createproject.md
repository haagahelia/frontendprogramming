---
title: 'Create Project'
sidebar_position: 2
---

### Create Vite React project

- Vite (French word for "quick", pronounced /vit/) https://vitejs.dev/
- Vite requires Node.js and you can check the latest version requirements from Vite website.
- You can create a new Vite project by entering the following command in command line:

```
npm create vite@latest
```
- The command opens a project wizard where you can define a name of your project and framework. Select **React** framework and from the language variant select **javascript**.
  ![Vite project](./img/create_vite1.png)

- Next, you change directory into you project folder and install the dependencies:

```
cd your_folder
npm install
```
- Finally, run the project in development mode:
```
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

- Vite creates the following folder structure
- The **_App.jsx_** file contains the React component that is rendered.
- If you have bigger app with multiple components, it is better to create own folder for these
  ![](./img/vite_project.png)


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
- The **_main.jsx_** file imports App component and renders it to **_index.html_** file’s `root` element. The **_index.html_** file can be found from the root folder of your project.

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