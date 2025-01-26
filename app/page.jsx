"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { TaskList } from "@/components/task-list"
import { AddTask } from "@/components/add-task"

export default function TodoPage() {
  const [tasks, setTasks] = useState([
    { id: "1", title: "Buy groceries", completed: false, important: false, date: "2025-01-26" },
    { id: "2", title: "Finish project report", completed: false, important: true, date: "2025-01-27" },
    { id: "3", title: "Call the bank", completed: false, important: false, date: "2025-01-28" },
    { id: "4", title: "Schedule dentist appointment", completed: false, important: false, date: "2025-01-29" },
    { id: "5", title: "Plan weekend trip", completed: false, important: false, date: "2025-01-30" },
    { id: "6", title: "Read a book", completed: true, important: false, date: "2025-01-20" },
    { id: "7", title: "Clean the house", completed: true, important: false, date: "2025-01-15" },
    { id: "8", title: "Prepare presentation", completed: true, important: false, date: "2025-01-10" },
    { id: "9", title: "Update blog", completed: true, important: false, date: "2025-01-05" },
  ])

  const addTask = ({ title, date }) => {
    const newTask = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      completed: false,
      important: false,
      date, // include the date
    }
    setTasks([newTask, ...tasks])
  }

  const toggleComplete = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const toggleImportant = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, important: !task.important } : task)))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="flex min-h-screen bg-background dark:bg-background">
      <Sidebar tasks={tasks} />
      <main className="flex-1 p-6">
        <AddTask onAdd={addTask} />
        <TaskList
          tasks={tasks}
          onToggleComplete={toggleComplete}
          onToggleImportant={toggleImportant}
          onDelete={deleteTask}
        />
      </main>
    </div>
  )
}
