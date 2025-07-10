Commands of react:
1. npm create vite@latest
2. npm create-react-app "project_name"
3. npm run dev || npm start
4. npm install tailwindcss @tailwindcss/vite

===============================================================================================================================

- Virtual DOM: React create or uses  copy of DOM called Virtual DOM & compares it with real (browser || previous) DOM to detect the changes & only the changed part of 
real DOM are updated (improving performance).

- Browser DOM: In case of browser DOM, what happens is on every change (network call || state change) the entire DOM gets recreated or re-rendered this is expensive & leads to
full page reloading.

- Reconciliation: The is the process of comparing the current VDOM tree with the real (previous || browser) DOM & deciding what changes needs to be apply in the 
real DOM is called reconcialiation. This is the essence process of VDOM optimization.

- In react Reconcialiation decides what to change & Renderer(like react DOM || react native) decides how to apply those changes.

- React Fibre: React fibre is the re-implementation of react core reconcialiation algorithm, which allows:-
1. Pausing & Resuming the rendering work.
2. Reusing the previously completed work.
3. Abort the updates if no longer needed.
4. Enabling concurrent rendering.
5. Assigning priority to different updates(Animations v/s data fetches). 

- React fibre brings granular control which makes react more efficient.
- VDOM + Reconcialiation = Faster updates & better performance.

- For looping any thing always use "keys" it will improve the permorfance. (Diffing of keys is performed using keys. Keys should be Stable, Predictive & Unique).

- Props: Props extends to properties in react are used to pass the data from a parent component to child component. Props will make the component reusable.

- Components: Components are functions & are small pieces of UI (buttons, cards, navbars etc) that you can re use for building large scale apps.

- Hooks are special function (like useState, useEffect, useRef etc) that gives feature to components without writing the classess.

- useState: useState is used to store & change value in the components. [const [mood, setMood] = useState("happy")] ex: whiteboard

- useRef: useRef is use to reference a DOM element(like input field) or store mutable data that doesn't cause re-rendering. [const inputRef = useRef(null)] ex: bookmarking a page

- useEffect: useEffect runs after your component renders like fetching the data, upodating title, etc. [useEffect(() => {})] ex: doorbell

===============================================================================================================================
- Redux => Redux is a state management library for javascript apps,  primarily used with React. Redux provides a pridictable centralized way to manage application state.
- Redux centralizes state into single source of truth and enforces unidirectional data flow.

- Why React??
- With react local state (useState, useContext) it becomes hard to manage the state of large apps.
- Redux makes the data flow predictable, easier to debug & test.
- Help in syncing state across components with prop drilling.

- Store: A centralized store holding the state.
- Action: A plain JS object describing what happened.
- Reducer: A pure function that determines how the state should change in response to a action.
- Dispatch: A method to send action to the store.
- Subscriber: Compenents that listen to store changes via useSelector().

Data flow: components -> Dispatch actions -> Reducer -> Store updates -> componet re-renders

===============================================================================================================================
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