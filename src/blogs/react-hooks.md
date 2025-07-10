---
title: "What fish can I catch with a React Hook?"
date: "2024-04-02T10:00:00Z"
topics: "React Hooks • Custom Hooks • React State"
desc: "React Hooks provide a flexible and concise solution to handle state and side effects in functional components. There are several built in React Hooks or you can build your own custom hooks to encapsulate and reuse stateful logic across different components."
---

## Introduction

React Hooks are an incredibly handy feature in React that allow you to "hook into" React's state and lifecycle features from within function components. Basically, if you see a function in React that starts with "use", like useState or useEffect, you're looking at a hook.

There are three basic rules that need to be followed with React Hooks:

1. **No Hooks inside classes:**
Hooks are designed for React function components. They’re part of making it possible to use React’s features without classes, which simplifies your code and aligns with the modern JavaScript style.
2. **Call Hooks at the top level:**
Always use hooks at the top level of your React function. Don’t try to call them inside loops, conditions, or nested functions. This is crucial for ensuring the hooks work correctly, as they rely on the order in which they are called.
3. **Avoid conditional Hooks:**
Hooks need to be used in the same order every time your component renders. That’s why you can’t put hooks inside conditions — React wouldn’t be able to keep track of them across different renders.

React provides several built-in react hooks, each designed to handle specific aspects of functionality and component lifecycle. We will explore some of these shortly. React also allows you to create your own hooks in order to reuse stateful logic across different components.

## 📌 useState

useSatate lets components “remember” information. useState creates a local State Variable allowing function components to have state that can be updated and maintained across re-renders. useState returns an array with two values; the current state and the function that updates the state. The only parameter accepted by useState is initialState, the value you want the state to be initially (this can also be initialised with a function for more complex initial state logic). We use array destructing, and generally the following format, when using useState to create a state variable.

```javascript
import { useState } from 'react';

function MyComponent() {
  const [age, setAge] = useState(23);
}
```

## ⚡ useEffect

useEffect allows you to perform side effects in function components. Side effects are operations that can reach outside the React component to perform actions like fetching data, directly interacting with the DOM or manually changing the document title. These are called "effects" because they can affect other components and can be used to react to changes in your component's state or props.

useEffect takes two arguments, the effect function and an optional dependencies array. The effect function is the code that executes the side effect. The dependencies array is used to tell React when to re-run the effect function. If no array is provided, the effect is run after every re-render; if the array is left empty, the effect is only run once after the initial rendering; and if the array has values, the effect will run each time any of the values in the array changes.

```javascript
import { useEffect } from 'react';

function MyComponent() {

  useEffect(() => {
    // The code here will run every time age changes.
  }, [age]);
}
```

## 🌳 useContext

useContext is a way to manage state globally, making it easy to share state between nested components. This prevents prop drilling, which is where data is passed through components with props, which can be inefficient if the data does not need to be used at every layer of the component tree.

createContext is how you create the context that components can provide or read. You can look at is as the bucket that holds value you want to share between your components. createContext takes one parameter, the default value of the context.

```javascript
import { createContext } from 'react';

const SomeContext = createContext(defaultValue)
```

To provide a value to your previously created context, a context context provider is used. Wrapping a component in a context provider and providing it with a value will specify the value of this context for all components inside the provider.

```javascript
function App() {
  const [theme, setTheme] = useState('light');
  // ...
  return (
    <ThemeContext.Provider value={theme}>
      <Page />
    </ThemeContext.Provider>
  );
}
```

useContext takes one parameter, the context you have previously created with createContext. useContext returns the value passed to the closest context provider above in the tree. If there is no provider above it in the tree, then the returned value will be the default context you provided to createContext.

```javascript
import { useContext } from 'react';

function MyComponent() {
  const theme = useContext(SomeContext);
  // ...
```

## 🧷 useRef

useRef lets you reference a component that is not needed for rendering. It differs form useState as it does not trigger a re-render when it is updated. It is perfect for storing values that do not impact the visual output of the component such as past state or props.

useRef only takes one parameter, it’s initial value. It returns an object with a single value, current, which is initially set to the initial value you previously provided. 

```javascript
import { useRef } from 'react';

function Stopwatch() {
 const intervalRef = useRef(0);
 // ...
 ```

You can change its current property to store information and read it later without triggering any re-renders.

```javascript
function handleStartClick() {
  const intervalId = setInterval(() => {
    // ...
  }, 1000);
  intervalRef.current = intervalId;
 }
 ```

## Other Hooks

There are several other in-built hooks in React, all with differing features and functionalities. Other hooks include useReducer, useMemo, useCallback, useDebugValue, useId and more. I have only gone into defining the hooks I have most commonly come across, but definitely have it in the backlog to dive deeper into the lesser know and lesser used in-built hooks.

## 💡 Building your own hooks

Custom hooks in React are custom functions that allow you to reuse stateful logic across multiple components. Unlike standard functions, custom hooks can utilize React’s built-in hooks such as useState and useEffect to manage state and lifecycle events. A custom hook could handle tasks such as form handling, API data fetching, or user authentication.

Custom hooks are basically Frankenstein hooks, made up of your own logic as well as React’s in-built hooks to create reusable functions to solve specialised tasks.

## Conclusion

React Hooks simplify the creation of functional components by simplifying the management of state and lifecycle features. By using built-in hooks like useState and useEffect, you can streamline state handling and side effects, leading to cleaner code and easier maintenance. The ability to create custom hooks further boosts this efficiency, allowing for reusable, stateful logic across components. Embracing React Hooks represents a modern approach to React development, enabling more sophisticated and user-centric applications.



