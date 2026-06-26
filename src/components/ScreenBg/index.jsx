import { useState, useEffect } from "react";

export const ScreenBg = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const onAddTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), text: newTask.trim(), completed: false },
      ]);
      setNewTask("");
    }
  };

  const handleNewTaskChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleTabClick = (e) => {
    setActiveTab(e.currentTarget.dataset.tab);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      onAddTask();
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const startEdit = (task) => {
    setEditingTaskId(task.id);
    setEditingText(task.text);
  };

  const saveEdit = (id) => {
    if (editingText.trim()) {
      setTasks(
        tasks.map((t) =>
          t.id === id ? { ...t, text: editingText.trim() } : t,
        ),
      );
    }
    setEditingTaskId(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const completionPercentage =
    totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  const filteredTasks = tasks.filter((task) => {
    if (activeTab === "active") return !task.completed;
    if (activeTab === "completed") return task.completed;
    return true;
  });

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);
  }, []);

  const onToggleClick = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  };
  return (
    <div
      className={`min-h-screen font-sans flex items-center justify-center p-4 transition-colors duration-300 ${
        darkMode ? "bg-[#121318]" : "bg-white"
      }`}
    >
      <div
        className={`w-full max-w-[480px] mx-auto rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden text-slate-900 border ${
          darkMode ? "bg-[#1A1C23]" : "bg-white border-[#f1f5f9]"
        }`}
      >
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#4f67ff] rounded-[10px] flex items-center justify-center shadow-[0_4px_12px_rgba(79,103,255,0.2)]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h2
                className={`text-[22px] font-bold tracking-tight ${darkMode ? "text-white" : "text-[#0f172a]"}`}
              >
                Mini Todo
              </h2>
            </div>
            <button
              onClick={onToggleClick}
              className="text-slate-400 hover:text-slate-600 transition-colors"
            >
              {!darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-moon"
                  aria-hidden="true"
                >
                  <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path>
                </svg>
              )}
            </button>
          </div>
          <div className="mb-6">
            <p className="text-[14px] font-semibold text-[#5c729d] mb-2">
              <span className="text-[#4f67ff]">{completedTasks} </span>
              of
              <span className="text-[#4f67ff]"> {totalTasks} </span>
              completed
            </p>
            <div
              className={`h-[6px] w-full ${
                darkMode ? "bg-[#1D293D]" : "bg-[#F1F5F9]"
              } rounded-full overflow-hidden`}
            >
              <div
                className="h-full bg-[#4f67ff] rounded-full transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="relative mb-5">
            <input
              placeholder="What needs to be done?"
              className={`w-full pl-5 pr-14 py-4 border rounded-[16px] focus:outline-none text-[14px] font-medium ${darkMode ? "bg-[#1B222F] text-white border-[#314158]  placeholder-slate-500" : "bg-[#f8fafc] text-[#1e293b] border-[#f1f5f9] placeholder-[#94a3b8]"}`}
              type="text"
              value={newTask}
              onChange={handleNewTaskChange}
            />
            <button
              type="submit"
              className={`absolute top-2 right-2 bottom-2 aspect-square flex items-center justify-center rounded-[12px] appearance-none opacity-100 transition-colors duration-[150ms] ease-[cubic-bezier(0.4,0,0.2,1)] m-0 p-0 border-0 border-solid box-border font-inherit ${newTask.trim() ? "bg-[#4f67ff] text-[#ffffff]" : "bg-[#354597] text-[#6f7abd]"}`}
              disabled={!newTask.trim()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-plus"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
            </button>
          </form>
          <div className="flex gap-2.5 mb-14">
            <button
              data-tab="all"
              onClick={handleTabClick}
              className={`px-5 py-2 text-[14px] font-bold rounded-[10px] ${activeTab === "all" ? (darkMode ? "bg-[#4F67FF] text-white" : "bg-[#1E2336] text-white") : darkMode ? "bg-[#1D293D] text-[#8b949e] hover:bg-[#314158]" : "bg-[#F4F7FA] text-[#475569] hover:bg-[#e2e8f0] transition-colors"}`}
            >
              All
            </button>
            <button
              data-tab="active"
              onClick={handleTabClick}
              className={`px-5 py-2 text-[14px] font-bold rounded-[10px] ${activeTab === "active" ? (darkMode ? "bg-[#4F67FF] text-white" : "bg-[#1E2336] text-white") : darkMode ? "bg-[#1D293D] text-[#8b949e] hover:bg-[#314158]" : "bg-[#F4F7FA] text-[#475569] hover:bg-[#e2e8f0] transition-colors"}`}
            >
              Active
            </button>
            <button
              data-tab="completed"
              onClick={handleTabClick}
              className={`px-5 py-2 text-[14px] font-bold rounded-[10px] ${activeTab === "completed" ? (darkMode ? "bg-[#4F67FF] text-white" : "bg-[#1E2336] text-white") : darkMode ? "bg-[#1D293D] text-[#8b949e] hover:bg-[#314158]" : "bg-[#F4F7FA] text-[#475569] hover:bg-[#e2e8f0] transition-colors"}`}
            >
              Completed
            </button>
          </div>
          <div className="space-y-3 mb-8 min-h-[140px] text-left">
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task) => (
                <div
                  key={task.id}
                  className={`group flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl border transition-all gap-3 sm:gap-4 ${
                    darkMode
                      ? "border-slate-800 bg-[#1e2330] hover:border-slate-700"
                      : "border-slate-100 bg-white hover:border-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <button
                      onClick={() => toggleTask(task.id)}
                      className="flex-shrink-0 transition-colors focus:outline-none"
                    >
                      {task.completed ? (
                        <div className="w-[22px] h-[22px] rounded-full bg-[#4f67ff] border-2 border-[#4f67ff] flex items-center justify-center">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      ) : (
                        <div className={`w-[22px] h-[22px] rounded-full border-2 bg-transparent transition-colors ${
                          darkMode 
                            ? "border-slate-600 hover:border-slate-500" 
                            : "border-slate-300 hover:border-slate-400"
                        }`}></div>
                      )}
                    </button>

                    {editingTaskId === task.id ? (
                      <input
                        type="text"
                        value={editingText}
                        onChange={(e) => setEditingText(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            saveEdit(task.id);
                          } else if (e.key === "Escape") {
                            setEditingTaskId(null);
                          }
                        }}
                        onBlur={() => saveEdit(task.id)}
                        className={`flex-1 text-[15px] px-2 py-0.5 border rounded focus:outline-none ${
                          darkMode
                            ? "bg-[#1B222F] text-white border-[#314158]"
                            : "bg-white text-slate-700 border-slate-200"
                        }`}
                        autoFocus
                      />
                    ) : (
                      <span
                        className={`text-[15px] flex-1 truncate transition-all duration-300 ${
                          task.completed
                            ? (darkMode ? "line-through text-slate-500" : "line-through text-slate-400")
                            : (darkMode ? "text-slate-200" : "text-slate-700")
                        }`}
                      >
                        {task.text}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity">
                    <button
                      onClick={() => startEdit(task)}
                      className={`p-1.5 text-slate-400 transition-colors focus:outline-none ${
                        darkMode ? "hover:text-slate-200" : "hover:text-slate-600"
                      }`}
                      title="Edit task"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-pencil"
                        aria-hidden="true"
                      >
                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </button>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="p-1.5 text-slate-400 hover:text-[#ff4f4f] dark:hover:text-[#ff4f4f] transition-colors focus:outline-none"
                      title="Delete task"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-trash2 lucide-trash-2"
                        aria-hidden="true"
                      >
                        <path d="M10 11v6"></path>
                        <path d="M14 11v6"></path>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                        <path d="M3 6h18"></path>
                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10 text-[#94a3b8] text-[14.5px] font-medium tracking-normal">
                No tasks yet. Add one above!
              </div>
            )}
          </div>
          <div className="text-left mt-4 text-[13.5px] font-semibold text-[#5c729d]">
            {totalTasks === 1 ? "1 task total" : `${totalTasks} tasks total`}
          </div>
        </div>
      </div>
    </div>
  );
};
