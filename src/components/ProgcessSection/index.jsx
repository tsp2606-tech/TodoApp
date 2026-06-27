export const ProcessSection = ({ darkMode }) => {
  return (
    <div className="mb-6">
      <p className="text-[14px] font-semibold text-[#5c729d] mb-2">
        <span className="text-[#4f67ff]">0 </span>
        of
        <span className="text-[#4f67ff]"> 0 </span>
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
  );
};
