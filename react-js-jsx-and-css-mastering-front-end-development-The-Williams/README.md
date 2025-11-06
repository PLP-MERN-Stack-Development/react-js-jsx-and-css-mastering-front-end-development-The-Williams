# 🧩 React Week 3 – Task Manager App

A responsive **React.js** application built with **Vite** and **Tailwind CSS**, implementing reusable components, state management using React Hooks, API integration, and theme switching (Light/Dark Mode).

This project was developed as part of **Week 3: React.js, JSX, and Tailwind CSS – Mastering Front-End Development**.

---

## 🚀 Features

✅ **Component Architecture**

* Reusable UI components (`Navbar`, `Footer`, `Layout`, `TaskManager`).
* Proper layout composition and routing structure.

✅ **State Management & Hooks**

* Uses `useState`, `useEffect`, and custom hooks (`useFetchData`).
* Demonstrates dynamic UI updates based on component state.

✅ **Custom Hook – API Integration**

* Fetches data from a public API (`https://jsonplaceholder.typicode.com/posts`).
* Implements loading and error handling states.

✅ **Theme Management (Light/Dark Mode)**

* Global theme context using React’s Context API.
* Persistent theme toggle between Light and Dark mode using Tailwind.

✅ **Responsive Design**

* Fully responsive layout using Tailwind’s utility-first classes.

---

## 🏗️ Folder Structure

```
src/
├── api/
│   └── fetchData.js          # Custom hook for API fetching
├── components/
│   ├── Layout.jsx            # Main layout wrapper
│   ├── Navbar.jsx            # Header with theme toggle
│   ├── Footer.jsx            # Footer section
│   └── TaskManager.jsx       # Task management component
├── context/
│   └── ThemeContext.jsx      # Context for dark/light mode
├── App.jsx                   # Main app component
├── index.css                 # Tailwind styles
└── main.jsx                  # Entry point (wraps app with ThemeProvider)
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/PLP-MERN-Stack-Development/react-js-jsx-and-css-mastering-front-end-development-The-Williams/
cd react-js-jsx-and-css-mastering-front-end-development-The-Williams
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Development Server

```bash
npm run dev
```

Then open **[http://localhost:5173](http://localhost:5173)** in your browser.

### 4️⃣ Build for Production

```bash
npm run build
```

---

## 🧠 Key Concepts Implemented

### 🔹 React Hooks

* **useState** → manages local component states (e.g., tasks, theme).
* **useEffect** → handles side effects like fetching data.
* **useContext** → provides theme state across all components.

### 🔹 Custom Hook: `useFetchData`

Encapsulates API fetching logic:

```js
const { data, loading, error } = useFetchData('https://jsonplaceholder.typicode.com/posts?_limit=5');
```

### 🔹 Context API

`ThemeContext.jsx` allows global access to `darkMode` and `toggleTheme` functions.

### 🔹 Tailwind CSS Styling

Responsive and adaptive layout using utility classes:

```html
<div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
```

---

## 🎨 Dark / Light Mode

* Managed globally through `ThemeContext.jsx`
* Applied to the document using Tailwind’s built-in dark mode system.
* Toggled via button in the `Navbar` component.

---

## 🧪 Example API Data Display

Displays post titles fetched from [JSONPlaceholder](https://jsonplaceholder.typicode.com/):

```json
[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
  },
  ...
]
```

---

## 🧩 Components Overview

### 🔸 Navbar.jsx

Displays app title and a **theme toggle button**.

### 🔸 Layout.jsx

Provides consistent structure across the app, including Navbar and Footer.

### 🔸 TaskManager.jsx

Demonstrates component state, allowing users to manage a list of tasks.

### 🔸 Footer.jsx

Displays copyright.

---

## 💡 Customization

To modify the API endpoint:
Open `src/api/fetchData.js` and replace the URL:

```js
useFetchData('https://your-api-url.com/data');
```

To change the theme toggle design:
Update the button in `Navbar.jsx`.

---

## 🧱 Built With

* ⚛️ **React 18** (via Vite)
* 💨 **Tailwind CSS**
* 🌗 **React Context API**
* 🔁 **Custom Hooks**
* 🌐 **JSONPlaceholder API**

---

## 📸 Preview ![Screenshot ](C:\Users\Edger%20A\OneDrive\Documents\Screenshot%20.png)

| Light Mode | Dark Mode |
| ---------- | --------- |
| 🌞         | 🌙        |

My final Task Manager link after deployment: https://taskman-phi-kohl.vercel.app/

# Author

The-Williams
edgeriowilliams@gmail.com


My final Task Manager link after deployment: https://taskman-phi-kohl.vercel.app/

Author
The-Williams
edgeriowilliams@gmail.com
