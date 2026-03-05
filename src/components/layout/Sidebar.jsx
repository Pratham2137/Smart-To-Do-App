import React, { useState } from "react";
import { Button } from "../ui/button";
import { Contact, LayoutDashboard, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  {
    link: "/",
    page: "Dashboard",
    icon: <LayoutDashboard />,
  },
  {
    link: "/contact",
    page: "Contact",
    icon: <Contact />,
  },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside
      className={`bg-white border-r transition-all duration-300 flex flex-col ${open ? "w-52" : "w-16"} dark:bg-gray-900 dark:border-gray-700 transition-all`}
    >
      <nav
        className={`flex flex-col gap-4 p-4 ${open ? "items-stretch" : "items-center"}`}
      >
        {navLinks.map((navItems) => (
          <Link
            key={navItems.page}
            to={navItems.link}
            className={`capitalize `}
          >
            <Button
              variant={currentPath === navItems.link ? "default" : "outline"}
              className={`${open ? "w-full justify-start gap-2" : "w-10 h-10 p-0 justify-center"}`}
            >
              {navItems.icon}
              {open && navItems.page}
            </Button>
          </Link>
        ))}
      </nav>
      <div className={`mt-auto p-4 ${open ? "" : "flex justify-center"}`}>
        <Button variant="outline" size="icon" onClick={() => setOpen(!open)}>
          <Menu />
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
