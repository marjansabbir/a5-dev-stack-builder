# Dev Stack — Development Stack Builder

Dev Stack is an interactive web application built with React that helps developers explore modern frontend, backend, database, language, styling, and DevOps technologies and assemble their ideal development stack side by side.

## 🛠️ Technologies Used
- **React.js (Vite)** — Component-based UI and state management
- **Tailwind CSS & DaisyUI** — Responsive styling and utility classes
- **React-Toastify** — Toast notifications for stack actions
- **JSON** — External technology dataset fetched dynamically

## ✨ Key Features
1. **Interactive Stack Builder:** Browse 12 curated technologies with difficulty ratings, categories, and badges, and add them to a live sidebar stack.
2. **Duplicate Prevention & Instant Feedback:** Automatically disables already-selected cards (`✓ Added to Stack`) and triggers `react-toastify` notifications when adding, removing, or clearing items.
3. **Single-Variable Brand Gradient & Responsive Layout:** Uses a centralized CSS custom property (`--brand-gradient`) for consistent theming across mobile, tablet, and desktop views.

---

## 💡 React Concept Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX (JavaScript XML) is a syntax extension for JavaScript that lets us write HTML-like markup directly inside JavaScript files. It is used in React because it makes component structure much easier to read and write than `React.createElement()` calls, while allowing us to embed JavaScript expressions inside curly braces `{}`.

### 2. What is the difference between props and state?
- **Props** are read-only inputs passed down from a parent component to a child component. The child cannot modify them directly.
- **State** is internal data managed inside a component itself (using `useState`). When state changes, the component re-renders to reflect the new data.

### 3. What does the `useState` hook do, and where did you use it in this project?
`useState` lets a functional component store and update local state across re-renders. In this project, I used `useState` for:
- `technologies`: storing the fetched list of technologies from the JSON file.
- `stack`: tracking the user's currently selected technologies in the "Your Stack" sidebar.
- `loading`: tracking whether the JSON file is still being fetched.
- `menuOpen`: toggling the mobile navigation menu in `Navbar.jsx`.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` runs side effects in functional components after React renders the UI (such as API calls, timers, or subscriptions). I needed it with an empty dependency array `[]` so that `/technologies.json` is fetched once when the `App` component first mounts, without triggering an infinite loop of re-renders.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
React uses the `key` prop to uniquely identify each element in a list between renders. When items are added, removed, or reordered, unique keys (like `tech.id`) help React update only the changed DOM nodes instead of re-creating the entire list.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering means showing different UI elements depending on a condition (using ternary operators `? :` or `&&`). In `StackSidebar.jsx`, I used it to show the empty message when `stack.length === 0`, or the list of selected items when technologies are added:
```jsx
{stack.length === 0 ? (
  <div className="border border-dashed border-slate-200 rounded-xl py-8 px-4 text-center">
    <p className="text-xs text-slate-400">Your stack is empty.</p>
  </div>
) : (
  <div className="space-y-3">
    {/* Mapped stack items and Remove All button */}
  </div>
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
- **Parent to Child:** Pass the data as props on the child component tag (for example, `<TechCard tech={tech} isAdded={isAdded} />`).
- **Child to Parent:** The parent passes a callback function down as a prop (such as `onAddToStack={handleAddToStack}`), and the child calls that function with arguments (like `onClick={() => onAddToStack(tech)}`) to send data back up to the parent.
