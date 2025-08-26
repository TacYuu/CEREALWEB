"use client";

import Image from "next/image";

export default function Sidebar() {
  const menuItems = [
    { icon: "/icons/overview.png", label: "Overview" },
    { icon: "/icons/users.png", label: "User Management" },
    { icon: "/icons/coins.png", label: "Points System" },
    { icon: "/icons/market.png", label: "Shop Management" },
    { icon: "/icons/user-plus.png", label: "User Enrollment" },
  ];

  return (
    <aside className="min-h-screen w-64 border-r border-gray-200 bg-white p-4">
      <nav>
        <ul className="flex flex-col gap-2">
          {menuItems.map((item, i) => (
            <li key={i}>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={20}
                  height={20}
                  className="object-contain"
                />
                <span className="text-sm font-medium">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
