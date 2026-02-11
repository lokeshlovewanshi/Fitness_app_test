'use client';

export default function ChallengeDescriptionModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-slate-800 rounded-3xl w-full max-w-md max-h-[90vh] overflow-y-auto p-8 shadow-2xl">
        {/* Close Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Challenge Image */}
        <div className="mb-6 rounded-2xl overflow-hidden bg-gray-200 dark:bg-slate-700 h-48 relative">
          <div className="w-full h-full bg-gradient-to-br from-orange-300 to-pink-400 flex items-center justify-center">
            <div className="text-6xl">🏃‍♀️</div>
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

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          9-Day Fitness Challenge
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded-xl">
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Total Checkins</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">9</p>
          </div>
          <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded-xl">
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Participants Joined</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">75</p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Description</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            This 9-day challenge is designed to help you build the habit of showing up every day. You'll complete one small, focused action daily—without overwhelm—to build clarity and confidence, and to prove that consistency, not motivation, is what drives real and lasting progress.
          </p>
        </div>

        {/* Requirements */}
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm text-gray-700 dark:text-gray-300">Minimum 20 minutes of sit-up</span>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm text-gray-700 dark:text-gray-300">Mention Intensity</span>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm text-gray-700 dark:text-gray-300">Upload Media (Optional)</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onClose}
          className="w-full mt-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
        >
          Got it
        </button>
      </div>
    </div>
  )
}
