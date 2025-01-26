"use client";

import { useState } from "react";
import { Bell, RefreshCw, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function AddTask({ onAdd }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && date) {
      onAdd({ title, date, completed: false, important: false }); // Include date
      setTitle("");
      setDate("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="bg-secondary/20 dark:bg-secondary/10 rounded-lg p-4">
        <Input
          type="text"
          placeholder="Add A Task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-transparent border-none mb-3 focus-visible:ring-0 placeholder:text-muted-foreground"
        />
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="bg-transparent border-none mb-3 focus-visible:ring-0 text-muted-foreground"
        />
        <div className="flex justify-between items-center">
          <Button
            type="submit"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            ADD TASK
          </Button>
        </div>
      </div>
    </form>
  );
}
