---
title: 'Env Variables'
sidebar_position: 6
---
Environment variables are part of the environment in which a process runs and can be used to store configuration settings, system information, or other data that programs may need.

Vite exposes env variables on the special `import.meta.env` object and there are some built-in variable, such as `import.meta.env.BASE_URL` that contains the base URL where your app is running.

You can create your own environment variables and the name of the variable must start with string **`VITE_`**.
For example,
```
VITE_API_URL=https://myapi.com/api
```
You can also have multiple `.env.[mode]` file. Then the file is loaded only in specified `mode` (production, testing, etc.).

How to use env variables in practice?
1. Create the `.env` file in the root of your project.
2. Define your environment variables.
```bash title=".env"
VITE_API_URL=https://reqres.in/api/users
```
3. Then, you can use env variables in you code
```js
fetch(import.meta.env.VITE_API_URL)
.then(response => response.json())
```
 
Storing the API URL in an environment variable separates configuration from code. This means that your application's code does not need to hardcode the API URL that might change. Instead, it can read the URL from the environment variable, making it more flexible and easier to maintain.

