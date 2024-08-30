---
title: 'Networking Example'
sidebar_label: 'Example'
sidebar_position: 4
---
### NASA APOD API
- The following example uses the **NASA APOD** API, that displays daily astronomy picture or video (https://api.nasa.gov/).
- The example sends a request to the NASA APOD Rest API and displays the daily image and explanation that we receive in a response.
- Rest API can be called by using the following URL (GET method):
https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
- The response payload contains `explanation` and `url` properties. The `media_type` property can be used to check if the daily media is video or image.

#### Response
The response data looks like the image below:

![Nasa API response](./img/nasa1.png)

#### State for response data
- We will create a React app that calls the NASA APOD API and displays the daily image and explanation.
- We need a state to store data from the response (image url, explanation, and type of media).
```js
// State for response data
const [data, setData] = React.useState({});
```
#### Fetch
- The fetch API call is made inside the `useEffect` hook, and the second argument is an empty array because we want to send requests only once after the first render.
- When the response arrives, the response data is saved to the `data` state, and UI is re-rendered automatically by React.
```js
React.useEffect(() => {
  fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(response =>  { 
    if (!response.ok)
      throw new Error("Error in fetch: " + response.statusText);  
    
    return response.json();
  })
  .then(responseData => setData(responseData))
  .catch(err => console.error(err))
}, []);
```
#### Display data
- Then, we will use conditional rendering. We will check the `media_type` and render either an image or video:
```jsx
if (!data.media_type) {
  return <p>Loading...</p>
}
else if (data.media_type === "image") {
  return (
    <div>
      <p>Explanation: {data.explanation}</p>
      <img src={data.url} />
    </div>
  );
}
else {
  return (
    <div>
      <p>Explanation: {data.explanation}</p>
      <iframe width="520" height="415" src={data.url}></iframe>
    </div>
  );
}
```
- Or using inline conditional rendering
```jsx
if (!data.media_type) {
  return <p>Loading...</p>
}
else {
  return (
    <div>
      <p>Explanation: {data.explanation}</p>
      { data.media_type === 'video' && <iframe width="520" height="415" src={data.url}></iframe> }          
      { data.media_type === 'image' && <img src={data.url} /> }
    </div>
  );
}
```
![Nasa API example](./img/nasa2.png)

:::note
In the NASA APOD example, we made a network request using the `useEffect` hook because we wanted to display the APOD image once after the component is rendered the first time. When a request requires some user input, such as pressing a button, you can trigger the request within the button's `onClick` event handler, and the `useEffect` hook is not needed. You should avoid using unnecessary `useEffect`s as it increases the complexity of the component.
:::

In proper React application you might use some data fetching library such as Tanstack Query or SWR. By using these, you can significantly enhance the performance, reliability, and maintainability of your React applications. They provide a lot of nice features like data caching, automatic refetching, error handling etc.

---
### Further reading
- **Axios**: Axios is a popular JavaScript library that is used for making asynchronous HTTP requests to web servers and handling responses. https://axios-http.com/
- **Tanstack Query**: *"Tanstack Query (formerly React Query) is often described as the missing data-fetching library for React, but in more technical terms, it makes fetching, caching, synchronizing and updating server state in your React applications a breeze."* 
https://tanstack.com/query
- ***SWR*** SWR (https://swr.vercel.app/) is similar to Tanstack Query.

