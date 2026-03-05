import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  {
    link: "/",
    page: "home",
  },
  {
    link: "/contact",
    page: "contact",
  },
];

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav
      className="w-full p-4 flex items-center justify-between px-6 py-4 border-b bg-slate-200 dark:bg-gray-900 dark:border-gray-700"
    >
      <h1 className="text-xl">Todo App</h1>
      <div className="flex gap-6 capitalize">
        {navItems.map((navItem) => (
          <Link to={navItem.link} key={navItem.page}>
            <Button
              className="capitalize"
              variant={currentPath === navItem.link ? "default" : "ghost"}
            >
              {navItem.page}
            </Button>
          </Link>
        ))}
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
