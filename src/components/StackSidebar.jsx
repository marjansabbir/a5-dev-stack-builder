const StackSidebar = ({ stack, onRemoveFromStack, onRemoveAll }) => {
  return (
     <aside className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm sticky top-24">
      <h3 className="text-base font-bold text-slate-900">Your Stack</h3>
      <p className="text-xs text-slate-400 mt-1 mb-5">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} Technology Selected`}
      </p>

      {stack.length === 0 ? (
        <div className="border border-dashed border-slate-200 rounded-xl py-8 px-4 text-center">
          <p className="text-xs text-slate-400">Your stack is empty.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border border-slate-200/80 rounded-xl px-3.5 py-2.5"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-7 h-7 object-contain"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-800 leading-tight">
                    {item.name}
                  </h4>
                  <span className="text-[10px] text-slate-400 block">
                    {item.category}
                  </span>
                </div>
              </div>

              <button
                onClick={() => onRemoveFromStack(item.id, item.name)}
                aria-label={`Remove ${item.name}`}
                className="text-slate-400 hover:text-rose-500 transition text-sm px-1 cursor-pointer"
              >
                ✕
              </button>
            </div>
          ))}

          <button
            onClick={onRemoveAll}
            className="w-full mt-3 py-2 border border-rose-200 text-rose-600 hover:bg-rose-50 rounded-lg text-xs font-semibold transition cursor-pointer"
          >
            Remove All
          </button>
        </div>
      )}
    </aside>
  );
};

export default StackSidebar;
