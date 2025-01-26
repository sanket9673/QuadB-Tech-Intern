export function ProgressChart({ progress }) {
  const circumference = 2 * Math.PI * 40
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="relative w-full aspect-square">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" className="stroke-muted" strokeWidth="10" />
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          className="stroke-primary transition-all duration-500 ease-in-out"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground">
        <span>Completion</span>
        <span className="mx-1">•</span>
        <span>Done</span>
      </div>
    </div>
  )
}

