'use client';

import Image from 'next/image'

export default function JoinChallengeModal({ onJoin, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 md:p-8">
      <div className="bg-white dark:bg-slate-800 rounded-3xl w-full max-w-md max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <div className="flex justify-end mb-4">
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full transition-colors">
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Challenge Image */}
        <div className="mb-6 rounded-2xl overflow-hidden bg-gray-200 dark:bg-slate-700 h-48 relative">
          <div className="w-full h-full bg-gradient-to-br from-blue-300 to-purple-400 flex items-center justify-center">
            <div className="text-6xl">💪</div>
          </div>
          
          {/* Progress Circles */}
          <div className="absolute top-4 right-4 flex gap-3">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-xs font-bold text-gray-900">
              25%
            </div>
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold text-white">
              50%
            </div>
            <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-xs font-bold text-white">
              75%
            </div>
          </div>
        </div>

        {/* Challenge Title */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          9-Day Fitness Challenge
        </h2>

        {/* Stats */}
        <div className="flex gap-4 mb-6">
          <div>
            <p className="text-xs text-gray-600 dark:text-gray-400">Total Checkins</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">9</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-xs text-gray-600 dark:text-gray-400">Participants Joined</p>
            <div className="flex -space-x-2 mt-2">
              <div className="w-6 h-6 rounded-full bg-blue-400 border-2 border-white dark:border-slate-800" />
              <div className="w-6 h-6 rounded-full bg-green-400 border-2 border-white dark:border-slate-800" />
              <div className="w-6 h-6 rounded-full bg-purple-400 border-2 border-white dark:border-slate-800" />
            </div>
            <span className="text-sm font-semibold text-gray-900 dark:text-white ml-2">+75 joined</span>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Description</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            This 9-day fitness challenge is designed to help you build consistency, boost energy, and feel stronger—one day at a time. Each day comes with a simple, achievable fitness task that fits easily into your routine, no matter your current fitness level.
          </p>
        </div>

        {/* CTA */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-4">
          Join the challenge and start your journey
        </p>
        <button
          onClick={onJoin}
          className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition-colors shadow-lg"
        >
          Join Now
        </button>
      </div>
    </div>
  )
}
