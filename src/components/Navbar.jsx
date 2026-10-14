import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Mobile Left: Hamburger icon */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 cursor-pointer"
          >
            <img
              src="/assets/hamburger.png"
              alt="Menu"
              className="w-5 h-5 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </button>
        </div>

        {/* Brand logo  */}
        <a href="#home" className="flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-lg brand-gradient-bg flex items-center justify-center text-white font-extrabold text-sm tracking-tight shadow-xs">
            DS
          </span>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            Dev <span className="brand-gradient-text">Stack</span>
          </span>
        </a>

        {/* Desktop center nav links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#home" className="text-pink-600 font-semibold">Home</a>
          <a href="#technologies" className="hover:text-slate-900 transition">Technologies</a>
          <a href="#projects" className="hover:text-slate-900 transition">Projects</a>
          <a href="#about" className="hover:text-slate-900 transition">About</a>
          <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
        </nav>

        {/* Right: sign In + sign up */}
        <div className="flex items-center gap-3 sm:gap-5">
          <button className="text-sm font-medium text-slate-700 hover:text-slate-900 cursor-pointer">
            Sign In
          </button>
          <button className="brand-gradient-bg text-white text-sm font-semibold px-4 sm:px-5 py-2 rounded-full shadow-xs hover:opacity-95 transition cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 px-6 py-4 space-y-3 text-sm font-medium text-slate-700">
          <a href="#home" onClick={() => setMenuOpen(false)} className="block text-pink-600 font-semibold">Home</a>
          <a href="#technologies" onClick={() => setMenuOpen(false)} className="block hover:text-slate-900">Technologies</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="block hover:text-slate-900">Projects</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="block hover:text-slate-900">About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="block hover:text-slate-900">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
