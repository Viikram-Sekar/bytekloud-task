type Task = {
  title: string;
};

type Props = {
  tasks: Task[];
};

function TaskList({ tasks }: Props) {
  return (
    <div className="mt-4">
      {tasks.map((task, i) => (
        <div key={i} className="border p-2 mt-2">
          {task.title}
        </div>
      ))}
    </div>
  );
}

export default TaskList;
