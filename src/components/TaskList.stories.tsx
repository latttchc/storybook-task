import type { Meta, StoryObj } from "@storybook/react";
import { TaskList } from "./TaskList";
import * as Taskstories from "./Task.stories"

const meta = {
  component: TaskList,
  title: 'TaskList',
  decorators: [(story) => <div style={{ padding: '3rem' }}>{story()}</div>],
  tags: ['autodocs'],
  args: {
    ...Taskstories.ActionsData,
  },
} satisfies Meta<typeof TaskList>

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
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

export const WithPinnedTasks: Story = {
  args: {
    tasks: [
      ...Default.args.tasks.slice(0, 5),
      { id: '6', title: 'Task 6(pinned)', state: 'TASK_PINNED' },
    ]
  }
}

export const Loading: Story = {
  args: {
    tasks: [],
    loading: true,
  }
}

export const Empty: Story = {
  args: {
    ...Loading.args,
    loading: false,
  }
}