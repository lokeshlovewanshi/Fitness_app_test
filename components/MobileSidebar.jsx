'use client';

import { Lock, Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export default function MobileSidebar({ currentDay, onDayClick, completedDays }) {
  const [scrollPos, setScrollPos] = useState(0)

  const handleScroll = (direction) => {
    const container = document.getElementById('days-scroll')
    if (container) {
      const newPos = scrollPos + (direction === 'left' ? -100 : 100)
      container.scrollLeft = newPos
      setScrollPos(newPos)
    }
  }

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700 z-40">
      <div className="px-4 py-3 flex items-center gap-2 overflow-x-auto scrollbar-hide" id="days-scroll">
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
              className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg transition-all ${
                !isClickable ? 'cursor-not-allowed opacity-50' : ''
              } ${
                isCurrent
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white'
              }`}
            >
              {isCompleted ? (
                <Check className="w-5 h-5" strokeWidth={3} />
              ) : isLocked ? (
                <Lock className="w-5 h-5" />
              ) : (
                <span className="text-sm font-bold">{day}</span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
