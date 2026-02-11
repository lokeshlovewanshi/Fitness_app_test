"use client";

import { Info, Flame, Bell } from "lucide-react";

export default function Header({
  onInfoClick,
  isDark,
  onThemeToggle,
  completedDays,
}) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-full px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="12" cy="5" r="1" />
              <circle cx="18" cy="12" r="1" />
              <circle cx="12" cy="19" r="1" />
              <circle cx="6" cy="12" r="1" />
            </svg>
          </div>
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            BackstagePass
          </span>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 md:gap-6">
          <div className="flex items-center gap-2 bg-amber-50 dark:bg-amber-900/20 px-3 py-2 rounded-full">
            <Flame className="w-5 h-5 text-amber-500" />
            <span className="text-sm font-semibold text-amber-600 dark:text-amber-400">
              {completedDays.length}
            </span>
          </div>

          <button
            onClick={onThemeToggle}
            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-colors"
            title={isDark ? "Light mode" : "Dark mode"}
          >
            {isDark ? (
              <svg
                className="w-5 h-5 text-amber-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 18a6 6 0 100-12 6 6 0 000 12zM12 2v4m0 12v4m10-10h-4M4 12H0m15.657 6.657l-2.828-2.829m-9.656-9.656l-2.828-2.829M6.343 6.343L3.515 3.515m12.728 12.728l-2.828-2.829" />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-slate-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21.64 13a1 1 0 0 0-1.05-.14 8 8 0 1 1 .12-11.94 1 1 0 1 0 1.07-1.63 9.88 9.88 0 0 0-10.86 10.15A9.89 9.89 0 0 0 21.64 13z" />
              </svg>
            )}
          </button>

          <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-colors">
            <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>

          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full" />
        </div>
      </div>

      {/* Day Info Bar */}
      <div className="px-4 md:px-6 py-3 border-t border-gray-200 dark:border-slate-800 flex items-center justify-between bg-gray-50 dark:bg-slate-800/50">
        <div className="flex items-center gap-2">
          <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            Day 1 of 9
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            9-Day Fitness Challenge
          </span>
          <button
            onClick={onInfoClick}
            className="p-1.5 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-full transition-colors"
          >
            <Info className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>
    </header>
  );
}
