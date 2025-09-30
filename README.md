1) What is JSX, and why is it used?

Answer : JSX is a syntax extension for JavaScript that lets  write HTML-like code in JavaScript.

Why it's used:
- Makes React components more readable and easier to write
- Allows mixing HTML structure with JavaScript logic
- Provides better error checking and helpful error messages

It gets compiled to regular JavaScript function calls that create React elements.

2) What is the difference between State and Props?

Answer : State:
- Internal data managed within a component
- Can be changed by the component itself
- Like a component's personal memory

Props:
- Data passed from parent to child component
- Read-only (immutable) for the receiving component
- Like function parameters

Simple analogy: State = component's own variables, Props = attributes passed down from parent.

3) What is the useState hook, and how does it work?

Answer : useState is a React Hook that lets add state to functional components.

4) How can you share state between components in React?

Answer : 3 ways to share state:

1. Lift up - Move state to common parent
2. Context - For many components
3. Libraries - Redux/Zustand for complex apps

Simple cases: Use lifting. Many components: Use Context.

5) How is event handling done in React?

Answer : React event handling:

Use camelCase: onClick not onclick

Pass function, not string: onClick={handleClick}

Event object is synthetic (wrapper for native event)
