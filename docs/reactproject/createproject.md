---
title: 'Create Project'
sidebar_position: 3
---
### Create Vite React project
- Vite (French word for "quick", pronounced /vit/) https://vitejs.dev/
- Vite requires Node.js and you can check the latest version requirements from Vite website.
- You can create a new Vite project by entering the following npm command in command line:

```bash
npm create vite@latest
```
- The command opens a project wizard where you can define a name of your project and framework. Select **React** framework and  **typescript** variant. SWC (Speedy Web Compiler) is a fast JavaScript and TypeScript compiler written in Rust. It is a faster alternative to Babel, which is normally used.

  ![Vite project](./img/create_vite1ts.PNG)

- Next, you change the directory to your project folder and install the dependencies:
```bash
cd your_project
npm install
```
- Finally, run the project in development mode:
```bash
npm run dev
```
![Vite Project](./img/create_vite2.PNG)

:::note
You can stop the process by pressing **q** in the terminal
:::
- Now, you can access the local URL displayed in the terminal using your web browser.
- Vite provides HMR (Hot Module Replacement) which updates the page automatically when you make changes to javascript/typescript or css files.

![Vite Project](./img/vite_browser.PNG)

---
### Project structure

- Vite creates the following project structure
- If you have a bigger app with multiple components and functionalities, it is better to create own folders for them. For example, /components, /api, etc.

![Project structure](./img/vite_project_ts.PNG)

#### App.tsx
- The **App.tsx** file contains the React component that is displayed when you open the app in a web browser.
- `import` statements are used to import libraries, react components, stylesheet and assets to the component.
- `export` statement allows you to import component to another file by using the `import` statement
```jsx title="App.tsx"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return(
    <>
      ...
    <>;
  );
}

export default App
```
#### Main.tsx
- The **_main.tsx_** file imports the `App` component and renders it to **_index.html_** file’s `root` element. The **_index.html_** file can be found from the root folder of your project.

```jsx title="main.tsx"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```
:::note
The `React.StrictMode` lets you find common bugs in your React app in the development phase. Due to strict mode, components will re-render extra time in the development mode to find bugs.
:::