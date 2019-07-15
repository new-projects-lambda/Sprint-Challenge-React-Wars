# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a component library, it allows for dynamic 'reactive' updating of the DOM in an efficient way.

1. What does it mean to think in react?

Thinking in React to me means to think in components, and to pass data around 
in props.  For me it is easiest to think of props as parameters, we just use
attribute key: value pairs instead of variables.

1. Describe state.

State is mutable data stored for use within the React app.  It can only be
altered by using the setState function

1. Describe props.

Props are how we pass data around to components in our app.  They are sent via
key: value pairs and received as an object of key value pairs that can be accessed in the same way as parameters

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

 A side effect is anything that affects something outside the scope of the function being executed. Fetching data from an API, timers, logging, and manually manipulating the DOM are all examples of side effects. There are two categories of side effects in React components - those that don’t require clean-up and those that do require cleanup.
