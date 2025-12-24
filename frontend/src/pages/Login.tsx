type Props = {
  setToken: (token: string) => void;
};

function Login({ setToken }: Props) {
  const login = () => {
    localStorage.setItem("token", "dummy-token");
    setToken("dummy-token"); // 🔥 THIS IS THE FIX
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <button
        onClick={login}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
}

export default Login;
