import React from 'react';
import 'tailwindcss/tailwind.css';

export default function Menu() {
  return (
    <main className="flex justify-center items-cente w-[300px] pt-5">
      <nav className="relative">
        <ul className="flex space-x-4">
          <li className="relative z-10">
            <a href="#" target="_blank" rel="noreferrer noopener" className="flex items-center p-4 bg-blue-600 rounded-lg transition-colors hover:bg-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span className="ml-2 text-white">Admin</span>
            </a>
          </li>
          <li className="relative z-9">
            <a href="https://twitter.com/jh3yy" target="_blank" rel="noreferrer noopener" className="flex items-center p-4 bg-blue-600 rounded-lg transition-colors hover:bg-gray-600">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              <span className="ml-2 text-white">User</span>
            </a>
          </li>
        </ul>
        <div className="absolute -bottom-24 top-14 left-10 h-96 w-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </nav>
    </main>
  );
}
