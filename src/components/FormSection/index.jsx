export const FormSection = ({
  darkMode,
  newTask,
  handleNewTaskChange,
  onSubmit,
}) => {
  return (
    <form
      onSubmit={onSubmit || ((e) => e.preventDefault())}
      className="relative mb-5"
    >
      <input
        placeholder="What needs to be done?"
        className={`w-full pl-5 pr-14 py-4 border rounded-[16px] focus:outline-none text-[14px] font-medium ${darkMode ? "bg-[#1B222F] text-white border-[#314158]  placeholder-slate-500" : "bg-[#f8fafc] text-[#1e293b] border-[#f1f5f9] placeholder-[#94a3b8]"}`}
        type="text"
        value={newTask}
        onChange={handleNewTaskChange}
      />
      <button
        type="submit"
        className={`absolute top-2 right-2 bottom-2 aspect-square flex items-center justify-center rounded-[12px] appearance-none opacity-100 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] m-0 p-0 border-0 border-solid box-border font-inherit ${newTask.trim() ? (darkMode ? "bg-[#4f67ff] text-[#ffffff]" : "bg-[#4F67FF] text-white") : darkMode ? "bg-[#354597] text-[#8D9197]" : "bg-[#A5B1FE] text-white"}`}
        disabled={!newTask.trim()}
        onClick={onSubmit}
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
  );
};
