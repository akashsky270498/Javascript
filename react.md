Commands of react:
1. npm create vite@latest
2. npm create-react-app "project_name"
3. npm run dev || npm start
4. npm install tailwindcss @tailwindcss/vite
==========================================================================================================
Q:1 What is React?
Ans: 
- React is a Js library which is used to build the UI.
- React uses component based architecture which means dividing the UI into small reusable pieces.
- React uses VDOM to update the UI efficiently insted of reloading the full page which improves the performance of the application.

Q:2 Why we should use React? 
Ans: We should use react bcoz:
- Reusable components (Component Based Architecture).
- Fast rendering bcoz of VDOM.
- Easy to manage the UI state. 

Q:3 How you have used React?
Ans:
- I have used react for integration of the Backend APIs.
- I have also managed the API data using state(useState, useEffect).
- As well as I have also used react to build UI screens.
==========================================================================================================
 Q:4 What are Components?
 Ans: Components are functions & are small pieces of UI blocks that we can re-use to build large scale applications.
 - eg: Product Card, NavBar, Buttons etc.
 - During my tenure I have worked on functional Components.

 Q:5 What are Functional & Class Components?
 Ans: 
 - Functional components are Simple & easy to use as it used hooks. Mordern way.
 - Class Components are old schoool technique for building components.

 Q:6 How you have used components?
 Ans: I have created reusable functional components like:
 - Product List, Search Bar, API-driven UI Components etc.
==========================================================================================================
 Q:7 What is Virtual DOM?
 Ans: React creates or uses copy of DOM called Virtual DOM & compares it with real (browser || previous) DOM to detect the changes & only the changes parts of Real DOM are updated improving performance of the application this comparing process is called Diffing.

Q:8 What is DOM?
Ans: In case of Browser DOM what happens is on every change (state change || network change) the entire DOM gets updated or we can say re-rendered this is expensive, slow then VDOM & this can also leads to full page reloading.

Q:9 What is Re-concilation?
Ans: Re-concilation is the process of comparing the current VDOM with the real (previous || browser) DOM & deciding what changes needs to be apply & how it should get applied in the real DOM. Reconcilation is the essence process of V-DOM optimization.

Q:10 How you have used it?
Ans: I havn't used it manually, react internally optimized rendering while updating the state.
===================================================================================================================
Q:11 How to hooks?
Ans: Hooks are special function provided by react (useState, useRef, useEffect etc) that gives features to functional components without writing the classess.
- Before hooks only class components can manage the states, after hooks now functional components can do everything using hooks.

Q:12 Why we should use hooks?
Ans: We should use hooks to avoid Class Components & to write Clean, readable & Reusable logic.

Q:13 How you have used hooks?
Ans: I have used useState for storing Data & useEffect for an API calls.

Q:14 What is useState?
Ans: useState is used to Store & Update the values in the components. When the state changes components re-renders.
[const [mood, setMood]] = useState("happy");

Q:15 How does useState works internally in react?
Ans: React stores the state internally & on update - React triggers the re-render.

Q:16 Are State updates in React Synchronous or Asynchronous?
Ans: State updates in reacts is asynchronous & batched.

Q:17 Why should we not mutate the state directly in React?
Ans: We should not mutate the state directly in react bcoz React won't detect the changes properly, UI may not update.

Q:18 What causes component re-render when using useState?
Ans: When state changes - React re-renders the component.

Q:19 How you have used useState?
Ans: 
- To store the API response.
- To manage the Loading & Error.
- To handle the form inputs.

Q:20 What is useEffect?
Ans: useEffect is used to handle the side effects, useEffect runs after your components renders like fetching the data, updating title etc.
ex: [useEffect(() => {})], API Calls, Timers etc.

Q:21 How does useEffect behave with different dependency arrays?
Ans: 
- If we will not pass any dependency - It will run on every render.
- If we will pass [] - It runs only once.
- If we will pass dependency array with data - It runs when data changes.

Q:22 Why do you use useEffect for an API call instead of calling the API directly inside the component?
Ans: Bcoz react requires side effect to run after render, So useEffect ensures controlled execuion.

Q:23 What is cleanup function in useEffect & why it is required?
Ans: Clean up function is useEffect is required to clean the timers/subscription before unmount.

Q:24 Can useEffect cause an infinite loop?
Ans: Yes useEffect can cause infinite loop if the state is updated without proper dependency array.

Q:25 How you have used useEffect?
Ans: I have used useeffect for calling the Backend APIs on component load for controlled execution & also to update the UI after data fetch.

Q:26 What is useRef & how it is different from useState?
Ans: useRef is use to reference the DOM element (like input field) or to store the data that doesn't cause re-rendering & that's how it is different from useSate that it doesn't re-render.

Q:27 What is useMemo?
Ans: useMemo is used to avoid the re-calculation & to optimize the performance.

Q:28 What is useCallback?
Ans: useCallback is used to avoid function re-creation.

Q:29 How deeply you have used the hooks?
Ans: I have used useSate & useEffect in my projects & I'm familier with other hooks conceptualy.

Q:30 What is props?
ans: Props extends to 'properties' in react & props are used to pass the data from a child component to parent component. Props will make the component re-usable.
===================================================================================================================
Q:31 What is Redux?
Ans: Redux is a State Management Library for Js Apps, primarily used with react, Redux is used to manage the Global State. Redux stores all the data in a Central Store.

Q:32 When should we use Redux in react?
Ans:
- When the application becomes too large.
- When too much prop drilling is needed.
- When we need Global Shared Data.

Q:33 What are the core concepts of Redux?
Ans: 
- Store - A store is used to hold the state.
- Action - Action describes what to do?
- Reducer - Reducer is used to update the state.
- Dispatcher - A dispatcher is used to triggers the action.
- Subscriber - Component that listen to store changes via useSelector().

- Store: A centralized store holding the state.
- Action: A plain JS object describing what happened.
- Reducer: A pure function that determines how the state should change in response to a action.
- Dispatch: A method to send action to the store.
- Subscriber: Compenents that listen to store changes via useSelector().

Data flow: components -> Dispatch actions -> Reducer -> Store updates -> componet re-renders

===================================================================================================================
Q:34 What is the difference between Context API & Redux?
Ans: 
- Context API is in-built & used for Simple State Management. 
- Redux is more powerful & better for large application.

Q:35 What are rules of using hooks?
Ans: Do not use hooks inside the loops/condition bcoz react relies on order of hooks & changing order can break state tracking, So Always call hooks at the top level.

Q:36 Can hooks be used inside Class Components?
Ans: No, hooks can't be used inside class components, Hooks can be used inside functional component only.
===================================================================================================================
Q:37 How do you manage State Management in a React Application?
Ans:
- For Simple Small Apps: useState.
- For Medium Level: useContext.
- For Large Apps: Redux.

Q:38 What is Context API & why it is used?
Ans: Context API is used to share data globally across components, We should use context API to avoid prop drilling.

Q:39 How you have managed state in your project?
Ans: 
- I have mainly used useState to manage the state.
- I have passed the data using props.
===================================================================================================================
Q:40 How do you call APIs in React?
Ans: 
- Using useEffect.
- Stored the response in store using useState.
- Using fetch/axios.

Q:41 How do you handle loading & error state in API Call?
Ans: By maintaing the Loading & Error State & rendering UI based on these states.

Q:42 How you have handled API?
Ans:
- By calling Backend APIs.
- Displayed data in UI.
- Handling loading & error states.
===================================================================================================================
Q:43 What are keys in React & why they are important?
Ans: Keys are unique identifiers in React for list items, It helps react optimize rendering.

Q:44 How you have used keys in you project?
Ans: I have used unique ID's while rendering lists like products/items.
===================================================================================================================
Q:45 What is the difference between Controlled & UnControlled Components?
Ans: 
- In Controlled components the data gets managed by the React State.
- In UnControlled components the data gets managed by the DOM direclty.

Q:46 How you have handled the form?
Ans: I have handled the form using Controlled components using useState. 
===================================================================================================================
Q:47 How do you handle form State in  React?
Ans: using useState + onChange handler, update state dynamically.

Q:48 How you have imeplemented forms?
Ans: I have used forms for managing input fields using state & also used it for search & form submission.
===================================================================================================================
Q:49 What causes a component to re-render in React?
Ans: State & props change.

Q:50 Does React re-render the entire UI on every change?
Ans: No, it re-renders the changes or updated part only.

Q:51 How do u debug React Applications?
Ans:
- Console log.
- Browser DevTools.
- react DevTools.

Q:51 How have you debugged issues in your project?
Ans:
- Checked API responses.
- Verifying state & props.

Q:52 What is batching in React?
Ans: React groups multiple state updates & improve performance by reducing re-renders.
===================================================================================================================
   
- React-router
- Link tag => 
. imported from react-router-dom
. Used instead of <a> tag, bcoz <a> tag causes full page reloading.
. React uses a virtual DOM - full page reload breaks SPA behaviour.

- NavLink tag => 
. imported from react-router-dom
. NavLink is same as Link with some additional features.
. Automatically provides isActive, which helps in styling the current active route.
. Useful for dynamic active link styling in navbars.

- useContext():
.  React.createContext() is used to create context object. A context provides a way to pass the data through the components tree without passing the props manually at every level.
. Think of it as a global variable for react components.


- Provider => The components that provides the context data to the rest of the app or A component that wrap part of your app & provides that shared data.

- useContext => A react hook to consume the shared data inside a component

- Context => A way to create a shared/global data store.

- One App has one Store it doesn't mean we can't create more stores for same app but the thing is it is not recommended to do so.

- 1 App = 1 Store & this store is called Single Source of Truth.
===============================================================================================================================
- React Fibre: React fibre is the re-implementation of react core reconcilation algorithm, which allows:-
1. Pausing & Resuming the rendering work.
2. Reusing the previously completed work.t 
3. Abort the updates if no longer needed.
4. Enabling concurrent rendering.
5. Assigning priority to different updates(Animations v/s data fetches). 

- React fibre brings granular control which makes react more efficient.
- VDOM + Reconcialiation = Faster updates & better performance.

- For looping any thing always use "keys" it will improve the permorfance. (Diffing of keys is performed using keys. Keys should be Stable, Predictive & Unique).