useRef

- What is useRef? a hook that allows a few things to occur:

1. allows the persistence of values between renders
2. to select a DOM node the React way, typically is done during a side effect. use the useRef inside of our useEffect function


- How are we going to use this hook? 
    - we are going to make a DOM node reference 
    3 good reasons to utilize useRef
        - managing focus, text selection or media playback
        - integration of third party DOM libraries: jquery or backbone
        - to avoid senseless re-renders of our components, keeping track of some value that doesnt require a re-render


Directions:

1. import the hook from the React library
import { useRef } from 'react'

2. Initialize a variable and set equal to the value returned by the useRef hook 

const x = useRef()

3. useRef returns an object, that object will always have a key of 'current' the value of this property is set later using the 'ref' prop applied to the element inside our component 

4. Attach the ref prop to the part of our JSX that we want to select

{ current: <the element that the ref prop has been defined on>}



Custom hooks: 

- the system of creating your own hooks. 
- Why? to remove repetitive code 
- Introduced in React 16


rules to follow:
- it needs to be a function 
- must start with 'use'
- use other hooks inside of this custom hook such as useState, useEffect
- the function needs to return an object: this object is going to contain is key value pairs. the keys are arbitrary, the values are the methods that have been defined inside of this hook. Typically, lets keep the key names the same as the method names 


Context is an API that allows us to access global state manager

what is Context:
- a tool used to allow global data to be more accessible


Creating context:

import (createContext) from 'React' 

const x = createContext(initialValue)

wrap the part of our app we want to have access to this global data inside of a provider hint: BrowserRouter

inside of the child component, where we want to access the data, we use the `useContext` hook and pass in the name of the context we are referencing 