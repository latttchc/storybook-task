import type { TaskData } from "../types";

import Task from "./Task";

interface TaskListProps {
  loading?: boolean
  tasks: TaskData[]
  onPinTask: (id: string) => void;
  onArchiveTask: (id: string) => void;
};

const TaskList = ({
  loading = false,
  tasks,
  onPinTask,
  onArchiveTask,
}: TaskListProps) => {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  if (loading) {
    return <div className="list-item">loading</div>
  }

  if (tasks.length === 0) {
    return <div className="list-item">empty</div>
  }

  return (
    <div className="list-item">
      {tasks.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}

export default TaskList
