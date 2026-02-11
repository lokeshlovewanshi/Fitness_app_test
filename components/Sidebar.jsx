'use client';

import { Lock, Check } from 'lucide-react'

export default function Sidebar({ currentDay, onDayClick, completedDays }) {
  return (
    <aside className="hidden md:block w-48 bg-gradient-to-b from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-900 border-r border-gray-200 dark:border-slate-700 overflow-y-auto pt-4">
      <div className="px-4 space-y-2">
        {Array.from({ length: 9 }, (_, i) => {
          const day = i + 1
          const isCompleted = completedDays.includes(day)
          const isCurrent = currentDay === day
          const maxCompletedDay = completedDays.length > 0 ? Math.max(...completedDays) : 0
          const isLocked = day > maxCompletedDay + 1
          const isClickable = isCompleted || day === maxCompletedDay + 1

          return (
            <button
              key={day}
              onClick={() => isClickable && onDayClick(day)}
              disabled={!isClickable}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
                !isClickable ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
              } ${
                isCurrent
                  ? 'bg-white dark:bg-slate-700 shadow-md'
                  : !isClickable ? '' : 'hover:bg-white dark:hover:bg-slate-700'
              }`}
            >
              <span className={`text-sm font-semibold ${
                isCurrent
                  ? 'text-gray-900 dark:text-white'
                  : 'text-gray-700 dark:text-gray-300'
              }`}>
                Day - {day}
              </span>
              
              <div className="flex items-center justify-center w-5 h-5">
                {isCompleted ? (
                  <div className="flex items-center justify-center w-5 h-5 bg-green-500 rounded-full">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                ) : isLocked ? (
                  <Lock className="w-4 h-4 text-gray-400" />
                ) : (
                  <Lock className="w-4 h-4 text-blue-500" />
                )}
              </div>
            </button>
          )
        })}
      </div>
    </aside>
  )
}
