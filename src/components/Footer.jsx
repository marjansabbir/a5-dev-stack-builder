const Footer = () => {
  return (
    <footer className="border-t border-slate-100 bg-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-100">
          
          {/* brand block */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg brand-gradient-bg flex items-center justify-center text-white font-extrabold text-xs">
                DS
              </span>
              <span className="text-lg font-bold text-slate-900">
                Dev <span className="brand-gradient-text">Stack</span>
              </span>
            </a>

            <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="flex items-center gap-4 text-xs font-semibold text-slate-600 pt-1">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-900">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-slate-900">
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-900">
                LinkedIn
              </a>
            </div>
          </div>

          {/* product links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Product
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-500">
              <li><a href="#home" className="hover:text-slate-900">Home</a></li>
              <li><a href="#technologies" className="hover:text-slate-900">Technologies</a></li>
              <li><a href="#projects" className="hover:text-slate-900">Projects</a></li>
            </ul>
          </div>

          {/* company links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-500">
              <li><a href="#about" className="hover:text-slate-900">About</a></li>
              <li><a href="#contact" className="hover:text-slate-900">Contact</a></li>
              <li><a href="#careers" className="hover:text-slate-900">Careers</a></li>
            </ul>
          </div>

          {/* legal links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Legal
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-500">
              <li><a href="#privacy" className="hover:text-slate-900">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-slate-900">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-600">Privacy</a>
            <a href="#terms" className="hover:text-slate-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
