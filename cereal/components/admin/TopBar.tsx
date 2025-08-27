"use client";

import Image from "next/image";

export default function TopBar() {
  return (
    <header className="flex h-[75px] items-center border-b border-gray-200 bg-white px-6 py-4">
      <div className="flex w-full items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <Image
            src="/icons/admin-logo.png"
            alt="Admin Logo"
            width={40}
            height={40}
            className="rounded"
          />
          <h1 className="text-2xl font-semibold tracking-wide text-gray-900">
            Admin Dashboard
          </h1>
        </div>

        {/* Notifications + Profile */}
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 transition hover:bg-gray-200">
            <Image
              src="/icons/notification.png"
              alt="Notifications"
              width={24}
              height={24}
            />
            <span className="text-sm font-semibold text-gray-800">
              Notifications
            </span>
          </button>

          <Image
            src="/icons/profile-icon.png"
            alt="Profile"
            width={40}
            height={40}
            className="cursor-pointer rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
