const badgeStyles = {
  blue: "bg-blue-50 text-blue-600",
  green: "bg-emerald-50 text-emerald-600",
  orange: "bg-orange-50 text-orange-600",
  red: "bg-rose-50 text-rose-600",
  yellow: "bg-amber-50 text-amber-600",
  cyan: "bg-cyan-50 text-cyan-600",
};

const TechCard = ({ tech, isAdded, onAddToStack }) => {
  const { name, category, description, icon, rating, difficulty, badge, badgeTone } = tech;

  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between">
          <div>
        
        <div className="flex items-start justify-between mb-4">
          <img
            src={icon}
            alt={name}
            className="w-8 h-8 object-contain"
          />
          {badge && (
            <span
              className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                badgeStyles[badgeTone] || badgeStyles.blue
              }`}
            >
              {badge}
            </span>
          )}
        </div>

        
        <h3 className="text-lg font-bold text-slate-900 mb-2">{name}</h3>
        <p className="text-xs text-slate-500 leading-relaxed mb-5">
          {description}
        </p>
      </div>

      <div>
        
        <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
          <span className="bg-slate-100 text-slate-700 font-medium px-2.5 py-1 rounded-md">
            {category}
          </span>
          <span className="text-slate-400 font-medium">{difficulty}</span>
          <span className="flex items-center gap-1 font-bold text-slate-800">
            <span className="text-amber-400 text-sm">★</span> {rating}
          </span>
        </div>

        {/* Add to stack button */}
        <button
          onClick={() => onAddToStack(tech)}
          disabled={isAdded}
          className={`w-full py-2.5 rounded-lg text-xs font-semibold transition ${
            isAdded
              ? "bg-slate-200 text-slate-500 cursor-not-allowed"
              : "bg-[#0b1120] text-white hover:bg-slate-800 cursor-pointer"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechCard;
