'use client'

export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-colors"
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      {isDark ? (
        <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" strokeWidth="2" stroke="currentColor" />
          <line x1="12" y1="21" x2="12" y2="23" strokeWidth="2" stroke="currentColor" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" strokeWidth="2" stroke="currentColor" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" strokeWidth="2" stroke="currentColor" />
          <line x1="1" y1="12" x2="3" y2="12" strokeWidth="2" stroke="currentColor" />
          <line x1="21" y1="12" x2="23" y2="12" strokeWidth="2" stroke="currentColor" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" strokeWidth="2" stroke="currentColor" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" strokeWidth="2" stroke="currentColor" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21.64 13a1 1 0 0 0-1.05-.14 8 8 0 1 1 .12-11.94 1 1 0 1 0 1.07-1.63 9.88 9.88 0 0 0-10.86 10.15A9.89 9.89 0 0 0 21.64 13z" />
        </svg>
      )}
    </button>
  )
}
