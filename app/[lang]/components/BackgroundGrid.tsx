export default function BackgroundGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 select-none">
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,transparent)]" />
      {/* Vertical lines */}
      <div className="absolute inset-0 flex justify-between">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="h-full w-px bg-gradient-to-b from-gray-200 via-gray-200 to-transparent dark:from-gray-800 dark:via-gray-800"
          />
        ))}
      </div>

      {/* Horizontal lines */}
      <div className="absolute inset-0 flex flex-col justify-between">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="h-px w-full bg-gradient-to-r from-gray-200 via-gray-200 to-transparent dark:from-gray-800 dark:via-gray-800"
          />
        ))}
      </div>
    </div>
  )
}
