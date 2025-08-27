"use client";

import Image from "next/image";

export default function PointsManagement() {
  return (
    <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-md">
      <h2 className="text-lg font-semibold text-gray-900">Points Management</h2>
      <hr className="my-4 border-gray-200" />

      {/* Select User */}
      <label htmlFor="user" className="mb-1 block text-sm font-medium text-gray-700">
        Select User
      </label>
      <select
        id="user"
        className="mb-4 w-full rounded-md border border-gray-300 p-2 text-sm focus:border-black focus:ring-1 focus:ring-black"
      >
        <option>Select a user</option>
        <option>User 1</option>
        <option>User 2</option>
      </select>

      {/* Points + Action */}
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="points"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Points Amount
          </label>
          <input
            id="points"
            type="number"
            className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-black focus:ring-1 focus:ring-black"
            placeholder="Enter points"
          />
        </div>
        <div>
          <label
            htmlFor="action"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Action
          </label>
          <select
            id="action"
            className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-black focus:ring-1 focus:ring-black"
          >
            <option>Add Points</option>
            <option>Remove Points</option>
          </select>
        </div>
      </div>

      {/* Reason */}
      <label htmlFor="reason" className="mb-1 block text-sm font-medium text-gray-700">
        Reason
      </label>
      <textarea
        id="reason"
        className="mb-4 w-full rounded-md border border-gray-300 p-2 text-sm focus:border-black focus:ring-1 focus:ring-black"
        placeholder="Enter reason"
      />

      {/* Button */}
      <button className="flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800">
        <Image
          src="/icons/update.png"
          alt="Update"
          width={20}
          height={20}
          className="object-contain"
        />
        Update Points
      </button>
    </div>
  );
}
