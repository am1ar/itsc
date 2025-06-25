import Link from "next/link"

export default function TopBanner() {
  return (
    <div className="relative z-50 flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-950 px-4 py-2 text-sm text-white">
      <div className="flex flex-col md:flex-row items-center md:space-x-3">
        <span className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
            <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
          </svg>
          <span className="font-medium">NEW:</span> AI-Powered Supply Chain Analytics Platform
        </span>
        <Link
          href="/solutions/supply-chain-analytics"
          className="mt-1 md:mt-0 font-medium underline hover:text-white/90 transition-colors"
        >
          Schedule a demo today
        </Link>
      </div>
    </div>
  )
}
