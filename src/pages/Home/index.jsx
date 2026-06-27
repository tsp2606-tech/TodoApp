import React, { useState } from "react";
import { HeaderSection } from "@/components/HeaderSection";
import { ProcessSection } from "@/components/ProgcessSection";
import { FormSection } from "@/components/FormSection";
import { TabsSection } from "@/components/TabsSection";
import { ListSection } from "@/components/ListSection";

export const Home = () => {
  //edit task
  const [editingTaskId, setEditingTaskId] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");

  const handleEditTask = (taskId, currentText) => {
    setEditingTaskId(taskId);
    setEditingText(currentText);
  };
  const handleSaveEdit = (taskId) => {
    const trimmedText = editingText.trim();

    if (trimmedText) {
      updateTaskText(taskId, trimmedText);
    }

    setEditingTaskId(null);
    setEditingText("");
  };

  const updateTaskText = (taskId, newText) => {
    const updatedTasks = listTask.map((task) =>
      task.id === taskId ? { ...task, text: newText } : task,
    );
    setListTask(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };
  // delete task function
  const deleteTask = (taskId) => {
    const updatedTasks = listTask.filter((task) => task.id !== taskId);
    setListTask(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  // toggle task completion function
  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = listTask.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task,
    );
    setListTask(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  //darkmode state
  const [darkMode, setDarkMode] = useState(false);
  //tab state
  const [activeTab, setActiveTab] = useState("all");
  //list task state
  const [listTask, setListTask] = React.useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  //add task function
  const addTask = (task) => {
    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    const updatedTasks = [...listTask, newTask];
    setListTask(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  //input value state
  const [inputValue, setInputValue] = React.useState("");

  //handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      addTask(inputValue.trim());
      setInputValue("");
    }
  };

  //handle tab click function
  const handleTabClick = (e) => {
    setActiveTab(e.currentTarget.dataset.tab);
  };

  //toggle darkmode function
  const onToggleClick = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
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
          <HeaderSection darkMode={darkMode} onToggleClick={onToggleClick} />

          <ProcessSection darkMode={darkMode} />

          <FormSection
            darkMode={darkMode}
            newTask={inputValue}
            handleNewTaskChange={(e) => setInputValue(e.target.value)}
            onSubmit={handleSubmit}
          />

          <TabsSection
            setListTask={setListTask}
            darkMode={darkMode}
            activeTab={activeTab}
            handleTabClick={handleTabClick}
          />

          <ListSection
            darkMode={darkMode}
            listTask={listTask}
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
            handleEditTask={handleEditTask}
          />
        </div>
      </div>
    </div>
  );
};
