# React Basics

This repository contains the fundamental concepts of React taught in the session. Below are the key topics covered with their definitions:

---

## Table of Contents

- [ReactDOM.render](#reactdomrender)
- [package.json Structure](#packagejson-structure)
- [React Folder Structure](#react-folder-structure)
- [Creating Your Own Component](#creating-your-own-component)
- [Passing Props and Destructuring](#passing-props-and-destructuring)
- [Using the `map` Method](#using-the-map-method)
- [Managing State with `useState`](#managing-state-with-usestate)

---

## ReactDOM.render

- **Definition**: A method from the `react-dom` package used to render React elements into the DOM.
- **Purpose**: Renders a React component or element into the DOM.
- **Example**:

  ```javascript
  import React from 'react';
  import ReactDOM from 'react-dom';

  const App = () => <h1>Hello, React!</h1>;

  ReactDOM.render(<App />, document.getElementById('root'));
  ```

## package.json Structure

- **Definition**: A configuration file that holds metadata and dependencies for a Node.js project.
- **Purpose**: Defines project settings, dependencies, and scripts for running/building the application.
- Important sections:
  - **Dependencies**: List of required libraries for the project.
  - **Scripts**: Commands for running or building the project.
- **Example**:
  ```json
  {
    "name": "react-basics",
    "version": "1.0.0",
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build"
    },
    "dependencies": {
      "react": "^18.0.0",
      "react-dom": "^18.0.0"
    }
  }
  ```

## React Folder Structure

- **Definition**: A logical organization of files and folders in a React project.
- **Purpose**: Helps maintain modular and scalable project architecture.
- A typical React project folder structure:

```
project-folder/
  ├── public/
  │   └── index.html
  ├── src/
  │   ├── components/
  │   │   └── ExampleComponent.js
  │   ├── App.js
  │   ├── index.js
  ├── package.json
  └── README.md
```

## Creating Your Own Component

- **Definition**: A reusable and independent block of UI in a React application.
- **Purpose**: Simplifies the development of dynamic and interactive UIs by breaking them into smaller units.
- **Steps**:
  1. Create a new `.js` file inside the `src/components` folder.
  2. Define a functional component.
- **Example**:

  ```javascript
  import React from 'react';

  const Greeting = () => {
    return <h2>Welcome to React Basics!</h2>;
  };

  export default Greeting;
  ```

## Passing Props and Destructuring

- **Definition**: Props (short for properties) are a way to pass data from parent to child components.
- **Purpose**: Enables components to be dynamic and reusable by customizing their behavior and appearance.
- **Destructuring Props**: Simplifies access to props inside the component by extracting specific values.
- **Example**:

  ```javascript
  const Greeting = ({ name }) => {
    return <h2>Hello, {name}!</h2>;
  };

  // Usage:
  <Greeting name="Abhik" />;
  ```

## Using the `map` Method

- **Definition**: A JavaScript array method used to transform or iterate over an array.
- **Purpose**: Efficiently generates dynamic lists in React components.
- **Example**:

  ```javascript
  const items = ['Apple', 'Banana', 'Cherry'];

  const ItemList = () => {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };
  ```

## Managing State with `useState`

- **Definition**: A React Hook that lets you add state to functional components.
- **Purpose**: Manages and updates component-specific data that changes over time.
- **Example**:

  ```javascript
  import React, { useState } from 'react';

  const Counter = () => {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  };
  ```

---

Feel free to explore the examples and experiment with the concepts!
