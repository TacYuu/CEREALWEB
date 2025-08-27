"use client";

import Image from "next/image";

export default function ShopManagement() {
  return (
    <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-md">
      <h2 className="text-lg font-semibold text-gray-900">Shop Management</h2>
      <hr className="my-4 border-gray-200" />

      {/* Item Name */}
      <label
        htmlFor="itemName"
        className="mb-1 block text-sm font-medium text-gray-700"
      >
        Item Name
      </label>
      <input
        id="itemName"
        type="text"
        className="mb-4 w-full rounded-md border border-gray-300 p-2 text-sm focus:border-black focus:ring-1 focus:ring-black"
        placeholder="Enter item name"
      />

      {/* Item Price */}
      <label
        htmlFor="itemPrice"
        className="mb-1 block text-sm font-medium text-gray-700"
      >
        Item Price
      </label>
      <input
        id="itemPrice"
        type="number"
        className="mb-4 w-full rounded-md border border-gray-300 p-2 text-sm focus:border-black focus:ring-1 focus:ring-black"
        placeholder="Enter price in points"
      />

      {/* Description */}
      <label
        htmlFor="itemDescription"
        className="mb-1 block text-sm font-medium text-gray-700"
      >
        Description
      </label>
      <textarea
        id="itemDescription"
        className="mb-4 w-full rounded-md border border-gray-300 p-2 text-sm focus:border-black focus:ring-1 focus:ring-black"
        placeholder="Enter description"
      />

      {/* Add Button */}
      <button className="flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800">
        <Image
          src="/icons/add.png"
          alt="Add item"
          width={20}
          height={20}
          className="object-contain"
        />
        Add Item
      </button>
    </div>
  );
}
