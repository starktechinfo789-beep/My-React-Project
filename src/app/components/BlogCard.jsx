"use client";

export default function BlogCard({ title, desc, shortAnswer, onClick }) {
  return (
    <div
      onClick={onClick}
      className="p-5 border rounded-lg shadow hover:shadow-lg transition cursor-pointer"
    >
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-gray-600 mt-2">{desc}</p>
    </div>
  );
}
