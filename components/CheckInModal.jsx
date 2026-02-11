'use client';

import { X, Clock } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function CheckInModal({ day, onClose, onCheckIn }) {
  const [timeLeft, setTimeLeft] = useState({ hours: 20, minutes: 44 })

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.minutes === 0) {
          return { hours: prev.hours - 1, minutes: 59 }
        }
        return { ...prev, minutes: prev.minutes - 1 }
      })
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-2 md:p-4">
      <div className="bg-white dark:bg-slate-800 rounded-2xl md:rounded-3xl w-full max-w-md p-4 md:p-8 shadow-2xl">
        {/* Close Button */}
        <div className="flex justify-end mb-4 md:mb-6">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full transition-colors"
          >
            <X className="w-5 md:w-6 h-5 md:h-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        {/* Title with Timer */}
        <div className="text-center mb-6 md:mb-8">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
            Today's check-in
          </h3>
          <div className="inline-block bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold flex items-center gap-2">
            <Clock className="w-3 md:w-4 h-3 md:h-4" />
            Ends in {String(timeLeft.hours).padStart(2, '0')}h {String(timeLeft.minutes).padStart(2, '0')}m
          </div>
        </div>

        {/* Content */}
        <div className="text-center mb-6 md:mb-8">
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
            Share what you completed today?
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-2.5 md:space-y-3">
          <button
            onClick={onCheckIn}
            className="w-full py-3 md:py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm md:text-base rounded-xl transition-colors shadow-lg"
          >
            Share Your Progress
          </button>
          
          <button
            onClick={onClose}
            className="w-full py-3 md:py-4 bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600 text-gray-900 dark:text-white font-semibold text-sm md:text-base rounded-xl transition-colors"
          >
            Skip for now
          </button>
        </div>

        {/* Info */}
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4 md:mt-6">
          You'll complete one small, focused action daily
        </p>
      </div>
    </div>
  )
}
