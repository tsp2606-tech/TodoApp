import { useState } from "react";

export const ScreenBg = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
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
              <span class="text-[#4f67ff]">0 </span>
              of
              <span class="text-[#4f67ff]"> 0 </span>
              completed
            </p>
            <div
              className={`h-[6px] w-full ${
                darkMode ? "bg-[#1D293D]" : "bg-[#F1F5F9]"
              } rounded-full overflow-hidden`}
            >
              <div
                className="h-full bg-[#4f67ff] rounded-full transition-all duration-500"
                style={{ width: "0%" }}
              ></div>
            </div>
          </div>
          <form className="relative mb-5">
            <input
              placeholder="What needs to be done?"
              className={`w-full pl-5 pr-14 py-4 border rounded-[16px] focus:outline-none text-[14px] font-medium ${darkMode ? "bg-[#1B222F] text-white border-[#314158]  placeholder-slate-500" : "bg-[#f8fafc] text-[#1e293b] border-[#f1f5f9] placeholder-[#94a3b8]"}`}
              type="text"
            />
            <button
              type="submit"
              className={`absolute top-2 right-2 bottom-2 aspect-square flex items-center justify-center bg-[#354597] text-[#8D9197] rounded-[12px] appearance-none opacity-100 transition-colors duration-[150ms] ease-[cubic-bezier(0.4,0,0.2,1)] m-0 p-0 border-0 border-solid box-border font-inherit`}
              disabled
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-plus"
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
          <div className="mb-8 min-h-[140px] text-slate-200 font-sans m-0 p-0 border-0 border-solid box-border">
            <div className="text-center py-6 text-[#94a3b8] text-[14.5px] font-medium tracking-normal">
              No tasks yet. Add one above!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
