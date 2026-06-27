export const TabsSection = ({ darkMode, activeTab, handleTabClick }) => {
  return (
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
  );
};
