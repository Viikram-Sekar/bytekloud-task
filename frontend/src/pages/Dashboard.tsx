import { useEffect, useState } from "react";
import { Layout, Table, Button, Typography, Space, Tag, Input } from "antd";
import API from "../api/api";
import TaskForm from "../components/TaskForm";
import bgImage from "../assets/bgimages.jpg";


const { Header, Content } = Layout;
const { Title } = Typography;

type Task = {
  title: string;
  status: string;
};

type Props = {
  setToken: (token: string | null) => void;
};

function Dashboard({ setToken }: Props) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const fetchTasks = () => {
    API.get("/tasks").then((res) => setTasks(res.data));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!newTask) return;

    await API.post("/tasks", {
      title: newTask,
      status: "Pending",
    });

    setNewTask("");
    fetchTasks();
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const columns = [
    {
      title: "Task",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        const color =
          status === "Completed"
            ? "green"
            : status === "In Progress"
            ? "blue"
            : "orange";
        return <Tag color={color}>{status}</Tag>;
      },
    },
  ];

  return (
   <Layout
  style={{
    minHeight: "100vh",
    width: "100vw",
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow: "hidden",
  }}
>

   
      <Header
  style={{
    background: "rgba(255,255,255,0.9)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 24px",
  }}
>
  <Title level={3} style={{ margin: 0 }}>
    Task Management
  </Title>

  <Button danger onClick={logout}>
    Logout
  </Button>
</Header>


      <Content
  style={{
    width: "100%",
    minHeight: "calc(100vh - 64px)", // header height
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  {/* CENTER CARD */}
  <div
    style={{
      width: 500,
      background: "rgba(255,255,255,0.92)",
      padding: 24,
      borderRadius: 12,
      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    }}
  >
    {/* Add Task */}
    <Space style={{ marginBottom: 16 }}>
      <Input
        placeholder="New Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Button type="primary" onClick={addTask}>
        Add Task
      </Button>
    </Space>

    {/* Task Table */}
    <Table
      dataSource={tasks.map((t, i) => ({ ...t, key: i }))}
      columns={columns}
      pagination={false}
    />
  </div>
</Content>

</Layout>
);
}

export default Dashboard;
