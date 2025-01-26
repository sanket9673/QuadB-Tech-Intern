// "use client";

// import { Star } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Button } from "@/components/ui/button";

// export function TaskList({ tasks, onToggleComplete, onToggleImportant, onDelete }) {
//   const pendingTasks = tasks.filter((task) => !task.completed);
//   const completedTasks = tasks.filter((task) => task.completed);

//   return (
//     <div className="space-y-6">
//       <AnimatePresence>
//         {pendingTasks.map((task) => (
//           <motion.div
//             key={task.id}
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//             className="flex flex-col gap-4 p-4 bg-card dark:bg-card rounded-lg shadow-sm"
//           >
//             <div className="flex items-center">
//               <Checkbox
//                 checked={task.completed}
//                 onCheckedChange={() => onToggleComplete(task.id)}
//                 className="w-5 h-5 rounded-full border-2"
//               />
//               <span className="flex-1 text-foreground">{task.title}</span>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={() => onToggleImportant(task.id)}
//                 className={`${
//                   task.important ? "text-yellow-500" : "text-muted-foreground"
//                 } hover:text-yellow-500`}
//               >
//                 <Star className="w-5 h-5" fill={task.important ? "currentColor" : "none"} />
//               </Button>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={() => onDelete(task.id)}
//                 className="text-red-500 hover:text-red-700"
//               >
//                 <span className="w-5 h-5">Delete</span>
//               </Button>
//             </div>
//             <span className="text-sm text-muted-foreground">
//               Due: {task.date || "No date set"}
//             </span>
//           </motion.div>
//         ))}
//       </AnimatePresence>

//       {completedTasks.length > 0 && (
//         <div className="mt-8">
//           <h3 className="text-lg font-semibold mb-4 text-foreground">Completed</h3>
//           <AnimatePresence>
//             {completedTasks.map((task) => (
//               <motion.div
//                 key={task.id}
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: 20 }}
//                 className="flex flex-col gap-4 p-4 bg-card dark:bg-card rounded-lg shadow-sm mb-2"
//               >
//                 <div className="flex items-center">
//                   <Checkbox
//                     checked={task.completed}
//                     onCheckedChange={() => onToggleComplete(task.id)}
//                     className="w-5 h-5 rounded-full border-2"
//                   />
//                   <span className="flex-1 line-through text-muted-foreground">{task.title}</span>
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     onClick={() => onToggleImportant(task.id)}
//                     className="text-muted-foreground hover:text-yellow-500"
//                   >
//                     <Star className="w-5 h-5" fill={task.important ? "currentColor" : "none"} />
//                   </Button>
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     onClick={() => onDelete(task.id)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     <span className="w-5 h-5">Delete</span>
//                   </Button>
//                 </div>
//                 <span className="text-sm text-muted-foreground">
//                   Completed on: {task.date || "No date set"}
//                 </span>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>
//       )}
//     </div>
//   );
// }




"use client";

import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export function TaskList({ tasks, onToggleComplete, onToggleImportant, onDelete }) {
  const pendingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="space-y-8">
      {/* Pending Tasks Section */}
      <AnimatePresence>
        {pendingTasks.map((task) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col gap-4 p-6 bg-card dark:bg-card rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <div className="flex items-center space-x-4">
              <Checkbox
                checked={task.completed}
                onCheckedChange={() => onToggleComplete(task.id)}
                className="w-6 h-6 rounded-full border-2 transition-colors duration-200 hover:border-blue-500"
              />
              <span className="flex-1 text-lg font-semibold text-foreground">{task.title}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onToggleImportant(task.id)}
                className={`${
                  task.important ? "text-yellow-500" : "text-muted-foreground"
                } hover:text-yellow-500 transition-all duration-200 ease-in-out`}
              >
                <Star className="w-6 h-6" fill={task.important ? "currentColor" : "none"} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onDelete(task.id)}
                className="text-red-500 hover:text-red-700 transition-all duration-200 ease-in-out"
              >
                <span className="w-5 h-5">Delete</span>
              </Button>
            </div>
            <span className="text-sm text-muted-foreground">
              Due: {task.date || "No date set"}
            </span>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Completed Tasks Section */}
      {completedTasks.length > 0 && (
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Completed Tasks</h3>
          <AnimatePresence>
            {completedTasks.map((task) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, y: -30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col gap-4 p-6 bg-card dark:bg-card rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl mb-4"
              >
                <div className="flex items-center space-x-4">
                  <Checkbox
                    checked={task.completed}
                    onCheckedChange={() => onToggleComplete(task.id)}
                    className="w-6 h-6 rounded-full border-2 transition-colors duration-200 hover:border-blue-500"
                  />
                  <span className="flex-1 line-through text-lg text-muted-foreground">{task.title}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onToggleImportant(task.id)}
                    className="text-muted-foreground hover:text-yellow-500 transition-all duration-200 ease-in-out"
                  >
                    <Star className="w-6 h-6" fill={task.important ? "currentColor" : "none"} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onDelete(task.id)}
                    className="text-red-500 hover:text-red-700 transition-all duration-200 ease-in-out"
                  >
                    <span className="w-5 h-5">Delete</span>
                  </Button>
                </div>
                <span className="text-sm text-muted-foreground">
                  Completed on: {task.date || "No date set"}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
