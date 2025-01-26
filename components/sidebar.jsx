import Image from "next/image"
import { ListTodo, Calendar, Star, Clock, Users, Plus } from "lucide-react"
import { ProgressChart } from "./progress-chart"
import { Button } from "@/components/ui/button"

export function Sidebar({ tasks, onToggleImportant }) {
  const completedTasks = tasks.filter((task) => task.completed).length
  const totalTasks = tasks.length
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0

  // Filter starred tasks
  const importantTasks = tasks.filter((task) => task.important)

  return (
    <div className="w-64 bg-secondary/20 dark:bg-secondary/10 p-6 flex flex-col">
      <div className="flex items-center gap-3 mb-8">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0UM52g6ZZE1DVtY7m325fzjOF8pVqs.png"
          alt="Profile"
          width={48}
          height={48}
          className="rounded-full"
        />
        <div>
          <h2 className="font-semibold text-foreground">Hey, ABCD</h2>
        </div>
      </div>

      <nav className="space-y-2 flex-1">
        <Button
          variant="secondary"
          className="flex items-center gap-3 w-full justify-start bg-background dark:bg-background"
        >
          <Calendar className="w-5 h-5 text-primary" />
          <span className="text-primary">All Tasks</span>
        </Button>

        {/* Important Section */}
        <div>
          <Button
            variant="ghost"
            className="flex items-center gap-3 w-full justify-start hover:bg-background dark:hover:bg-background"
          >
            <Star className="w-5 h-5" />
            <span>Important</span>
          </Button>
          <div className="ml-8 mt-2 space-y-1">
            {importantTasks.map((task) => (
              <div key={task.id} className="flex items-center gap-2 text-sm text-foreground">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>{task.title}</span>
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Progress Chart Section */}
      <div className="mt-8">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-foreground">Today Tasks</h3>
          <span className="text-2xl font-bold text-foreground">{totalTasks}</span>
        </div>
        <ProgressChart progress={progress} />
      </div>
    </div>
  )
}
