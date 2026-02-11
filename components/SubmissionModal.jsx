'use client';

import { X, Upload } from 'lucide-react'
import { useRef } from 'react'

export default function SubmissionModal({
  day,
  onClose,
  onSubmit,
  submissionContent,
  setSubmissionContent,
  submissionImage,
  setSubmissionImage,
}) {
  const fileInputRef = useRef(null)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setSubmissionImage(event.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const reactionEmojis = ['👍', '❤️', '😂', '🔥']

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-2 md:p-4">
      <div className="bg-white dark:bg-slate-800 rounded-2xl md:rounded-3xl w-full max-w-md max-h-[95vh] md:max-h-[90vh] overflow-y-auto p-4 md:p-8 shadow-2xl">
        {/* Close Button */}
        <div className="flex justify-end mb-4 md:mb-6">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full transition-colors"
          >
            <X className="w-5 md:w-6 h-5 md:h-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 mb-4 md:mb-6">
          <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white text-sm md:text-base">Ashraf Idrishi</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">Day {day} of 9</p>
          </div>
        </div>

        {/* Prompt */}
        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-3 md:mb-4">
          What did you complete today?
        </p>

        {/* Upload Area */}
        <div
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-xl md:rounded-2xl p-4 md:p-8 text-center cursor-pointer hover:border-gray-400 dark:hover:border-slate-500 transition-colors mb-3 md:mb-4 bg-gray-50 dark:bg-slate-700/50"
        >
          {submissionImage ? (
            <img 
              src={submissionImage || "/placeholder.svg"} 
              alt="Submission" 
              className="w-full h-auto rounded-lg"
            />
          ) : (
            <div>
              <Upload className="w-6 md:w-8 h-6 md:h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                Upload
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                Images/Videos should be horizontal, at least 1280*720px. Max size 2MB.
              </p>
            </div>
          )}
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,video/*"
          onChange={handleImageUpload}
          className="hidden"
        />

        {/* Text Input */}
        <textarea
          value={submissionContent}
          onChange={(e) => setSubmissionContent(e.target.value)}
          placeholder="Share your thoughts, feelings, or achievements..."
          className="w-full p-3 text-xs md:text-sm border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none mb-3 md:mb-4 focus:outline-none focus:ring-2 focus:ring-amber-500"
          rows="3"
        />

        {/* Emoji Reactions */}
        <div className="flex gap-2 md:gap-3 mb-4 md:mb-6 flex-wrap">
          {reactionEmojis.map((emoji, idx) => (
            <button
              key={idx}
              className="w-9 md:w-10 h-9 md:h-10 rounded-full bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 flex items-center justify-center text-base md:text-lg transition-colors"
            >
              {emoji}
            </button>
          ))}
        </div>

        {/* Submit Button */}
        <button
          onClick={onSubmit}
          className="w-full py-2.5 md:py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm md:text-base rounded-full transition-colors shadow-lg"
        >
          Submit Checkin
        </button>
      </div>
    </div>
  )
}
