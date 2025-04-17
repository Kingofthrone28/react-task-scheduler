## `JSON server build`

this project is currently using json server as a test REST API service on local dev environment. 

npm install -g json-server

npm run server (to start server)

see (https://github.com/typicode/json-server#readme) for full documentation

## Axios 

Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.

- Make XMLHttpRequests from the browser
- Make http requests from node.js
- Supports the Promise API
- Intercept request and response
- Transform request and response data
- Cancel requests
- Automatic transforms for JSON data
- Client side support for protecting against XSRF

see (https://axios-http.com/docs/intro) for full documentation

## `React Hooks`

- UseState
- UseEffect

### UseState Hook
Hook state is the new way of declaring a state in React app. Hook uses useState() functional component for setting and retrieving state. Let us understand Hook state with the following example.

``` 
import React, { useState } from 'react';  
function CountApp() {  
  // Declare a new state variable, which we'll call "count"  
  const [count, setCount] = useState(0);  
  
  return (  
    <div>  
      <p>You clicked {count} times</p>  
      <button onClick={() => setCount(count + 1)}>  
        Click me  
      </button>  
    </div>  
  );  
}  
export default CountApp; 
```
### UseEffect Hook
The Effect Hook allows us to perform side effects (an action) in the function components. It does not use components lifecycle methods which are available in class components. In other words, Effects Hooks are equivalent to componentDidMount(), componentDidUpdate(), and componentWillUnmount() lifecycle methods.

Side effects have common features which the most web applications need to perform, such as:

- Updating the DOM,
- Fetching and consuming data from a server API,
- Setting up a subscription, etc.

```
import React, { useState, useEffect } from 'react';  
  
function CounterExample() {  
  const [count, setCount] = useState(0);  
  
  // Similar to componentDidMount and componentDidUpdate:  
  useEffect(() => {  
    // Update the document title using the browser API  
    document.title = `You clicked ${count} times`;  
  });  
  
  return (  
    <div>  
      <p>You clicked {count} times</p>  
      <button onClick={() => setCount(count + 1)}>  
        Click me  
      </button>  
    </div>  
  );  
}  
export default CounterExample;  
```

## Available Scripts

In the project directory, you can run:

### `yarn add react-scripts` 

This will install the package into the app

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## `JSON server build`

this project is currently using json server as a test REST API service on local dev environment. 

npm install -g json-server

npm run server (to start server)

see (https://github.com/typicode/json-server#readme) for full documentation

## Axios 

Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.

- Make XMLHttpRequests from the browser
- Make http requests from node.js
- Supports the Promise API
- Intercept request and response
- Transform request and response data
- Cancel requests
- Automatic transforms for JSON data
- Client side support for protecting against XSRF

see (https://axios-http.com/docs/intro) for full documentation

## `React Hooks`

- UseState
- UseEffect

### UseState Hook
Hook state is the new way of declaring a state in React app. Hook uses useState() functional component for setting and retrieving state. Let us understand Hook state with the following example.

``` 
import React, { useState } from 'react';  
function CountApp() {  
  // Declare a new state variable, which we'll call "count"  
  const [count, setCount] = useState(0);  
  
  return (  
    <div>  
      <p>You clicked {count} times</p>  
      <button onClick={() => setCount(count + 1)}>  
        Click me  
      </button>  
    </div>  
  );  
}  
export default CountApp; 
```
### UseEffect Hook
The Effect Hook allows us to perform side effects (an action) in the function components. It does not use components lifecycle methods which are available in class components. In other words, Effects Hooks are equivalent to componentDidMount(), componentDidUpdate(), and componentWillUnmount() lifecycle methods.

Side effects have common features which the most web applications need to perform, such as:

- Updating the DOM,
- Fetching and consuming data from a server API,
- Setting up a subscription, etc.

```
import React, { useState, useEffect } from 'react';  
  
function CounterExample() {  
  const [count, setCount] = useState(0);  
  
  // Similar to componentDidMount and componentDidUpdate:  
  useEffect(() => {  
    // Update the document title using the browser API  
    document.title = `You clicked ${count} times`;  
  });  
  
  return (  
    <div>  
      <p>You clicked {count} times</p>  
      <button onClick={() => setCount(count + 1)}>  
        Click me  
      </button>  
    </div>  
  );  
}  
export default CounterExample;  
```

## Available Scripts

In the project directory, you can run:

### `yarn add react-scripts` 

This will install the package into the app

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## `JSON Server Setup`

This project uses `json-server` as a test REST API service for the local development environment.

### Steps to Run the JSON Server:

1. Ensure you have installed all dependencies by running:
   ```bash
   yarn install

2. This will start the JSON server on port 5001. You can access the API at http://localhost:5001.
   ```bash
    yarn server   

The server uses the db.json file as the database. You can modify this file to add or update data.

For more information about json-server, refer to the official documentation.

Example API Endpoints:
```

  GET /tasks - Fetch all tasks
  POST /tasks - Add a new task
  DELETE /tasks/:id - Delete a task by ID
  PATCH /tasks/:id - Update a task by ID




