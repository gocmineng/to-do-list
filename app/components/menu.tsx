import React from "react";

export default function Menu() {
  return (
    <aside className="fixed top-0 left-0 right-0 h-16 bg-white/95 shadow-md backdrop-blur-sm z-50 md:static md:w-64 md:h-screen md:shadow-lg">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between md:block px-4 md:px-3">
        <div className="flex items-center gap-3">
          <span className="text-lg font-semibold">Menu</span>
        </div>

        <nav className="hidden md:block mt-4">
          <ul className="flex md:flex-col gap-1">
            <li className="p-2 rounded-md hover:bg-gray-50 cursor-pointer">
              Tasks
            </li>
            <li className="p-2 rounded-md hover:bg-gray-50 cursor-pointer">
              Projects
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

