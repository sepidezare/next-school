// components/Footer.tsx
"use client";

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p>© {new Date().getFullYear()} Online School. All rights reserved.</p>
      </div>
    </footer>
  );
}
