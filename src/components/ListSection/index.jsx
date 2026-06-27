export const ListSection = ({
  darkMode,
  listTask,
  deleteTask,
  toggleTaskCompletion,
  handleEditTask,
}) => {
  return (
    <div class="space-y-3 mb-8 min-h-[140px]">
      {listTask.map((task) => (
        <div
          class={`group flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl border transition-all  gap-3 sm:gap-4 ${
            darkMode ? "bg-slate-900 hover:border-slate-700" : "bg-white"
          }`}
        >
          <div class="flex items-center gap-4 flex-1">
            <button
              class="flex-shrink-0 transition-colors focus:outline-none"
              onClick={() => toggleTaskCompletion(task.id)}
            >
              {task.completed ? (
                <div class="w-[22px] h-[22px] rounded-full border-2 border-slate-300 dark:border-slate-600"></div>
              ) : (
                <div class="w-[22px] h-[22px] rounded-full bg-[#4f67ff] flex items-center justify-center">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              )}
            </button>
            {!task.completed ? (
              <span class="text-[15px] flex-1 truncate transition-all duration-300 text-slate-400 dark:text-slate-500 line-through">
                {task.text}
              </span>
            ) : (
              <span
                class={`text-[15px] flex-1 truncate transition-all duration-300 ${
                  darkMode ? "text-slate-700" : "text-[#314A68]"
                }`}
              >
                {task.text}
              </span>
            )}
          </div>
          <div class="flex items-center justify-end gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
            <button
              class="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors focus:outline-none"
              title="Edit task"
              onClick={handleEditTask}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-pencil"
                aria-hidden="true"
              >
                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                <path d="m15 5 4 4"></path>
              </svg>
            </button>
            <button
              class="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors focus:outline-none"
              title="Delete task"
              onClick={() => deleteTask(task.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-trash2 lucide-trash-2"
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
      ))}
    </div>
  );
};
