# React Basics: Commands and Concepts (Simplified Notes)

## 🔧 Common React Commands

```bash
# 1. Create React app using Vite
npm create vite@latest

# 2. Create React app using CRA (Create React App)
npx create-react-app my-app

# 3. Start development server
npm run dev  # (Vite)
npm start    # (CRA)

# 4. Install TailwindCSS
npm install tailwindcss @tailwindcss/vite
```

---

## 📘 React Explained in Simple Language

### ✅ What is React?

* React is a **JavaScript library** for building **fast and smooth web apps**.
* It creates **Single Page Applications (SPA)** where the page **doesn't reload** on every action.
* On the first visit, all code is downloaded once, then only the required parts are updated using React.

---

### ✅ Core JS vs React

* **Core JS** uses **Imperative Programming** → You tell the browser exactly how to update the UI.
* **React** uses **Declarative Programming** → You describe what UI should look like, and React does the work.

---

### ✅ React Basics

* **Component-based architecture** → Reusable building blocks (buttons, navbars, etc).
* **SPA (Single Page Application)** → One HTML file, no full reloads.
* **JSX** → HTML-like syntax inside JavaScript (converted to `React.createElement()` by Babel).

```js
// Without JSX
const heading = React.createElement("h2", {}, "Hello World");

// With JSX
const heading = <h2>Hello World</h2>;
```

---

### ✅ Rendering in React

```js
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

---

### ✅ Babel

* Babel is a tool that **converts JSX** into `React.createElement()` so browsers can understand it.

---

### ✅ React Component

* A **React component** is a function that returns JSX:

```js
function MyComponent() {
  return <h2>Hello</h2>;
}
```

* It’s a **reusable piece of UI**.

---

### ✅ Hooks (Special Features in React)

#### 1. `useState()`

* For storing and updating values in a component.

```js
const [mood, setMood] = useState("happy");
```

#### 2. `useRef()`

* For referencing DOM elements or storing mutable values that don’t cause re-render.

```js
const inputRef = useRef(null);
```

#### 3. `useEffect()`

* Runs after the component renders. Used for data fetching, updating document title, etc.

```js
useEffect(() => {
  console.log("Component rendered");
}, []);
```

---

### ✅ Virtual DOM vs Browser DOM

#### Browser DOM:

* Every time state changes, **entire DOM may update** → **slow**.

#### Virtual DOM:

* React creates a **virtual copy of DOM** → compares with old version → updates only what changed.

---

### ✅ Reconciliation

* Process of comparing old Virtual DOM and new Virtual DOM.
* Finds the difference and updates the real DOM.

---

### ✅ React Fiber

* New version of React’s core algorithm.
* Supports:

  1. Pausing/resuming rendering.
  2. Reusing finished work.
  3. Canceling unnecessary updates.
  4. Concurrent rendering.
  5. Prioritizing updates.

---

### ✅ Keys in React

* When looping over elements, always use a `key` prop:

```js
items.map(item => <li key={item.id}>{item.name}</li>)
```

* Helps React **identify which items changed**, improving performance.

---

### ✅ Props

* Short for "Properties".
* Used to **pass data from parent to child components**.
* Makes components **dynamic and reusable**.

---

### ✅ Components

* Small functions that return part of the UI.
* Can be reused anywhere in the app.


 ### ✅ State vs Props

State is a local variable for a component.

It is mutable, which means it can be changed using useState().

Used for internal data management inside a component.

Props are values passed from parent to child components.

They are immutable (cannot be changed directly inside child component).

Think of props as parent’s state given to child.

If needed, you can change the value by lifting the state up and modifying it in the parent.


### ✅  Fragment

A Fragment lets you group multiple elements without adding extra nodes to the DOM.

It is of type: Symbol(react.fragment)

You can also use: Symbol.for("react.fragment")