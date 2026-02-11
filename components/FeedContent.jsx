import { Heart, MessageCircle, Share2, MoreVertical } from 'lucide-react'

export default function FeedContent({ currentDay, submissionImage, submissionContent }) {
  const posts = [
    {
      id: 1,
      author: 'Ashraf Idrishi',
      avatar: 'https://via.placeholder.com/48',
      time: 'now',
      content: submissionContent || 'Today\'s challenge workout completed - feeling stronger already',
      image: submissionImage || 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=300&fit=crop',
      reactions: { likes: 0, comments: 0 },
      badge: 'Your Submission',
    },
    {
      id: 2,
      author: 'Russell Brunson',
      avatar: 'https://via.placeholder.com/48',
      time: '3 hrs ago',
      content: 'This 9-day fitness challenge is designed to help you build consistency, boost energy, and feel stronger—one day at a time. Each day comes with a simple, achievable fitness task that fits easily into your routine, no matter your current fitness level.',
      requirements: [
        'Minimum 20 minutes of sit-up',
        'Mention Intensity',
        'Upload Media (Optional)',
        'Upload Media (Optional)',
      ],
      reactions: { likes: 18, comments: 10 },
      badge: 'Pinned Post',
      isPinned: true,
    },
    {
      id: 3,
      author: 'Sayantan Chandra',
      avatar: 'https://via.placeholder.com/48',
      time: '1 hrs ago',
      content: 'Completed today\'s challenge workout, one step closer to my goal.',
      reactions: { likes: 18, comments: 10 },
    },
    {
      id: 4,
      author: 'Pappu Saha',
      avatar: 'https://via.placeholder.com/48',
      time: '2 day ago',
      content: 'Today\'s challenge workout completed - feeling stronger already',
      reactions: { likes: 18, comments: 10 },
    },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto px-2 md:px-4 py-4 md:py-8 space-y-3 md:space-y-6 pb-24 md:pb-8">
      {/* Check-in Header */}
      <div className="text-center mb-4 md:mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1 md:mb-2">
          Your Submission
        </h2>
        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
          Day {currentDay} of 9
        </p>
      </div>

      {/* Posts */}
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white dark:bg-slate-800 rounded-lg md:rounded-2xl p-3 md:p-6 shadow-sm border border-gray-200 dark:border-slate-700 w-full"
        >
          {/* Badge */}
          {post.badge && (
            <div className="mb-2 md:mb-3">
              <div className={`inline-block text-xs font-bold px-2.5 md:px-3 py-1 rounded-full ${
                post.badge === 'Your Submission'
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                  : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
              }`}>
                {post.isPinned && '📌'} {post.badge}
              </div>
            </div>
          )}

          {/* Header */}
          <div className="flex items-start justify-between mb-2 md:mb-3 gap-2">
            <div className="flex items-center gap-2 md:gap-3 min-w-0">
              <div className="w-9 md:w-12 h-9 md:h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex-shrink-0" />
              <div className="min-w-0">
                <h3 className="font-bold text-gray-900 dark:text-white text-xs md:text-base truncate">
                  {post.author}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {post.time}
                </p>
              </div>
            </div>
            <button className="p-1.5 md:p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full transition-colors flex-shrink-0">
              <MoreVertical className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          {/* Content */}
          <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 mb-3 md:mb-4 leading-relaxed">
            {post.content}
          </p>

          {/* Image */}
          {post.image && (
            <div className="mb-3 md:mb-4 rounded-lg md:rounded-xl overflow-hidden bg-gray-200 dark:bg-slate-700 w-full">
              <img
                src={post.image || "/placeholder.svg"}
                alt="Post"
                className="w-full h-auto object-cover max-h-96"
              />
            </div>
          )}

          {/* Requirements */}
          {post.requirements && (
            <div className="space-y-1.5 md:space-y-2 mb-3 md:mb-4">
              {post.requirements.map((req, idx) => (
                <div key={idx} className="flex items-center gap-2 md:gap-3">
                  <div className="w-4 md:w-5 h-4 md:h-5 bg-blue-500 rounded flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 md:w-3 h-2.5 md:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xs md:text-sm text-gray-700 dark:text-gray-300">{req}</span>
                </div>
              ))}
            </div>
          )}

          {/* Reactions */}
          <div className="flex items-center justify-between py-2 md:py-3 border-t border-gray-200 dark:border-slate-700 gap-2">
            <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <Heart className="w-3.5 md:w-4 h-3.5 md:h-4" />
                <span>{post.reactions.likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-3.5 md:w-4 h-3.5 md:h-4" />
                <span className="hidden sm:inline">{post.reactions.comments} Comments</span>
                <span className="sm:hidden">{post.reactions.comments}</span>
              </div>
            </div>
            <button className="p-1.5 md:p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full transition-colors flex-shrink-0">
              <Share2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>
      ))}

      {/* See What Others Shared */}
      <div className="bg-white dark:bg-slate-800 rounded-lg md:rounded-2xl p-4 md:p-6 text-center shadow-sm border border-gray-200 dark:border-slate-700">
        <p className="text-xs md:text-sm font-semibold text-gray-900 dark:text-white mb-1">
          See what others shared
        </p>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          85+ participants already completed
        </p>
      </div>
    </div>
  )
}
