---
title: 'React Query'
sidebar_position: 3
---
### Data Fetching Libraries
- Using hte `useState` and `useEffect` hooks is good way to learn basics of data fetching in React components.
- There are good React libraries available for data fetching, for example:
  - **React Query** (Tanstack Query) (https://tanstack.com/query/latest)
  - **SWR** (https://swr.vercel.app/)
- These libraries provides nice features like caching, error handling, detect out-of-date data etc. and it is recommended to use these when developing proper React apps.

### React Query (Tanstack Query)
- To install React Query , execute the following npm command in your project using the command line.
```bash
npm install @tanstack/react-query
```
- First, you have to create a client instance and provide it to your app using the `QueryClientProvider` component. Query client is responsible for data caching and you can use it to configure global settings for React Query.

```jsx
import { QueryClient QueryClientProvider } from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <YourApp />
    </QueryClientProvider>
  )
}
```
#### GET request
- You can use `useQuery` hook function to send GET request
- The syntax is the following
```js
useQuery({ queryKey: ['your_query_key'], queryFn: fetchSomething })
```
where
  - `queryKey` is the unique key for the query  
  - `queryFn` is the function that invokes the query. The function must return a promise. 
```js
import { useQuery } from '@tanstack/react-query'

function YourComponent() {
  const result = useQuery({
    queryKey: ['cars'], 
    queryFn: () =>  
      fetch('https://cars.com/cars').then(res => res.json())
  })
}
```
- The query result is an object that contains the following boolean properties:
  - isLoading, isSuccess, isError
- If the request succeed, you can access the data using the `data` property (state is not needed to store response data).
- The request is done when the component is rendered first time, therefore you don't need `useEffect` hook.
---
```jsx
import { useQuery } from '@tanstack/react-query'

function YourComponent() {
  const {isLoading, isSuccess, data} = useQuery({
    queryKey: ['cars'], 
    queryFn: () => fecthCars
  })

  if (isLoading) {
    return <span>Loading...</span>
  }

  return (
    <ul>
      {data.map((car) => (
        <li key={car.id}>{car.brand}</li>
      ))}
    </ul>
  )
```
- It is also a good practice to split your REST call functions to own module
```js
// services.js
export async function fetchCars() {
  const response = await fetch(API_URL);
  return await response.json();
}
```
- Then, you can import these in your components
```js
import { useQuery } from '@tanstack/react-query';
import { fetchCars } from './services.js`;

function YourComponent() {
  const { isLoading, isSuccess, data } = useQuery({
    queryKey: ['cars'], 
    queryFn: () => fecthCars
  })
}
```
React query refetch data automatically when:
- The window is refocused
- The network is reconnected
- New instance of query is mounted
- You have configured optional refetch interval

By default, React Query considers data to be stale (out of date) immediately after a successful query, which means that it will automatically trigger a background refetch the next time the data is accessed. However, you can customize this behavior by setting a specific stale time for your queries using the `staleTime` option.

#### POST, DELETE & UPDATE
- You can use `useMutation` hook to update date
```js
import { useMutation } from '@tanstack/react-query';

const { mutate } = useMutation(deleteCar, {
    onSuccess: () => {
      // Car deleted
    },
    onError: () => {
      // Error in deletion
    },
  });
```
- Then you can call `mutate`
```jsx
<button onClick={() => mutate(carid)}>Delete<button>
```
- The `useQueryClient` hook can be used to handle cache. Query client provides `invalidateQueries` function that can be used to invalidate queries and force to refetch data.
```js
  const queryClient = useQueryClient();

  const { mutate } = useMutation(deleteCar, {
    onSuccess: () => {
      // Clears the cache and refetch data
      queryClient.invalidateQueries(["cars"]);
    },
    onError: () => {
      alert("There was an error");
    },
  });

```
- Now, the `cars` query is refetched after the successful mutation.

### Further reading
- https://tanstack.com/query/latest/docs/react/overview