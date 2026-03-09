
function ProgressBar({ percentage }) {
  return (
    <div className="w-2/3 h-1 bg-gray-200 rounded-full overflow-hidden">
      <div
        className={`h-full bg-red-500 transition-all duration-300`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}

export default ProgressBar;
