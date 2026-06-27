import { useState } from "react";
import { HeaderSection } from "@/components/HeaderSection";
import { ProcessSection } from "@/components/ProgcessSection";
import { FormSection } from "@/components/FormSection";
import { TabsSection } from "@/components/TabsSection";
import { ListSection } from "@/components/ListSection";

export const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [newTask, setNewTask] = useState("");

  const handleNewTaskChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleTabClick = (e) => {
    setActiveTab(e.currentTarget.dataset.tab);
  };

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
            newTask={newTask}
            handleNewTaskChange={handleNewTaskChange}
          />
          
          <TabsSection
            darkMode={darkMode}
            activeTab={activeTab}
            handleTabClick={handleTabClick}
          />
          
          <ListSection darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};
