import { useState } from "react";
import API from "../api/api";

type Props = {
  onTaskAdded: () => void;
};

function TaskForm({ onTaskAdded }: Props) {
  const [title, setTitle] = useState("");

  const submit = async () => {
    if (!title) return;

    try {
      await API.post("/tasks", {
        title: title,
        status: "Pending",
      });

      setTitle("");
      onTaskAdded(); // 🔥 refresh task list
    } catch (err) {
      alert("Failed to add task");
    }
  };

  return (
    <div className="flex gap-2 mt-4">
      <input
        className="border px-2 py-1"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task"
      />
      <button
        onClick={submit}
        className="bg-green-600 text-white px-3 py-1 rounded"
      >
        Add
      </button>
    </div>
  );
}

export default TaskForm;
