import TaskList from "./TaskList";
import * as Taskstories from "./Task.stories"

export default {
  component: TaskList,
  title: 'TaskList',
  decorators: [(story: () => React.ReactNode) => <div style={{ padding: '3rem' }}>{story()}</div>],
  tags: ['autodocs'],
}

export const Default = {
  args: {
    tasks: [
      { ...Taskstories.Default.args.task, id: '1', title: 'Task 1' },
      { ...Taskstories.Default.args.task, id: '2', title: 'Task 2' },
      { ...Taskstories.Default.args.task, id: '3', title: 'Task 3' },
      { ...Taskstories.Default.args.task, id: '4', title: 'Task 4' },
      { ...Taskstories.Default.args.task, id: '5', title: 'Task 5' },
      { ...Taskstories.Default.args.task, id: '6', title: 'Task 6' },
    ]
  }
}

export const WithPinnedTasks = {
  args: {
    tasks: [
      ...Default.args.tasks.slice(0, 5),
      { id: '6', title: 'Task 6(pinned)', state: 'TASK_PINNED' },
    ]
  }
}

export const Loading = {
  args: {
    tasks: [],
    loading: true,
  }
}

export const Empty = {
  args: {
    ...Loading.args,
    loading: false,
  }
}