# Smart Todo App 📝

A modern **Smart Todo Web Application** built with **React, Vite,
Tailwind CSS, and shadcn/ui**.

This project demonstrates a clean frontend architecture, modern UI
design, drag‑and‑drop task management, dark mode support, and reusable
component structure.

The goal of this project is to practice real‑world frontend development
patterns used in modern SaaS applications.

------------------------------------------------------------------------

# ✨ Features

## Core Features

-   Add new tasks
-   Delete tasks
-   Toggle task completion
-   Persistent tasks using **localStorage**
-   Clean responsive UI

## Advanced Features

-   Drag & Drop task reordering
-   Task Filters (All / Active / Completed)
-   Dark Mode toggle
-   Collapsible Sidebar
-   Responsive Navbar
-   Footer section
-   Contact Page with form UI

## UI / UX Enhancements

-   Reusable UI components
-   Modern SaaS‑style layout
-   Smooth UI interactions
-   Accessible components

------------------------------------------------------------------------

# 🧰 Tech Stack

  Technology     Purpose
  -------------- -----------------------------
  React          Frontend framework
  Vite           Fast development build tool
  Tailwind CSS   Utility-first CSS framework
  shadcn/ui      Modern component library
  dnd-kit        Drag and drop functionality
  Lucide React   Icon library
  React Router   Page routing

------------------------------------------------------------------------

# 📂 Project Structure

    src
    │
    ├── components
    │   ├── layout
    │   │   ├── Navbar.jsx
    │   │   ├── Sidebar.jsx
    │   │   └── Footer.jsx
    │   │
    │   └── todo
    │       ├── TodoInput.jsx
    │       ├── TodoItem.jsx
    │       ├── TodoList.jsx
    │       └── TodoFilter.jsx
    │
    ├── hooks
    │   ├── useTodos.js
    │   └── useTheme.js
    │
    ├── pages
    │   ├── Home.jsx
    │   └── Contact.jsx
    │
    ├── App.jsx
    ├── main.jsx
    └── index.css

------------------------------------------------------------------------

# ⚙️ Installation

## 1. Clone the Repository

``` bash
git clone https://github.com/your-username/smart-todo-app.git
cd smart-todo-app
```

## 2. Install Dependencies

``` bash
npm install
```

## 3. Install Required Libraries

### React Router

``` bash
npm install react-router-dom
```

### Drag & Drop

``` bash
npm install @dnd-kit/react
```

### Icons

``` bash
npm install lucide-react
```

------------------------------------------------------------------------

## 4. Install shadcn Components

Initialize shadcn:

``` bash
npx shadcn-ui@latest init
```

Install components used in the project:

``` bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add checkbox
npx shadcn-ui@latest add label
npx shadcn-ui@latest add form
npx shadcn-ui@latest add toast
```

------------------------------------------------------------------------

## 5. Run Development Server

``` bash
npm run dev
```

Open in browser:

    http://localhost:5173

------------------------------------------------------------------------

# 🧠 Key Concepts Implemented

This project demonstrates important frontend concepts:

-   Component‑based architecture
-   Custom React hooks
-   State management
-   Drag and drop interactions
-   UI component reuse
-   Dark mode theming
-   Responsive layout
-   Local storage persistence

------------------------------------------------------------------------

# 🌙 Dark Mode

Dark mode is implemented using **Tailwind's class‑based dark mode
strategy**.\
Theme preference is stored in **localStorage** and applied globally.

------------------------------------------------------------------------

# 📦 Drag & Drop

Tasks can be reordered using **dnd-kit** sortable hooks.\
When a task is moved, the list updates and persists the new order.

------------------------------------------------------------------------

# 📸 Screenshots

Add screenshots of your application:

    /screenshots/dashboard.png
    /screenshots/dark-mode.png
    /screenshots/contact-page.png

------------------------------------------------------------------------

# 🚀 Future Improvements

Possible features to extend the project:

-   Authentication
-   Task categories
-   Due dates & reminders
-   Keyboard shortcuts
-   Backend integration
-   Cloud sync
-   Mobile optimization

------------------------------------------------------------------------

# 🤝 Contributing

Contributions are welcome!

1.  Fork the repository
2.  Create a new branch
3.  Commit your changes
4.  Submit a pull request

------------------------------------------------------------------------

# 📄 License

This project is open-source and available under the **MIT License**.

------------------------------------------------------------------------

# 👨‍💻 Author

**Pratham**\
Frontend Developer \| MERN Stack Enthusiast

GitHub: https://github.com/your-username
