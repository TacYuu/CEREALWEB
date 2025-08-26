"use client";

import Image from "next/image";

interface StatsCardProps {
  icon: string;
  title: string;
  value: string | number;
}

export default function StatsCard({ icon, title, value }: StatsCardProps) {
  return (
    <div className="flex h-[102px] w-[300px] items-center rounded-2xl bg-white px-6 shadow-md transition hover:shadow-lg">
      {/* Icon Box */}
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
        <Image
          src={icon}
          alt={title}
          width={24}
          height={24}
          className="object-contain"
        />
      </div>

      {/* Text */}
      <div className="ml-4">
        <span className="block text-sm text-gray-600">{title}</span>
        <span className="block text-2xl font-bold text-gray-900">{value}</span>
      </div>
    </div>
  );
}
