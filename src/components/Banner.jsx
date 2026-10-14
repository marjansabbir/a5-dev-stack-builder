const Banner = () => {
  return (
    <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: heading, description, buttons */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.12] text-slate-900">
            Build Your Ideal <br />
            <span className="brand-gradient-text">Development Stack</span>
          </h1>

          <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare them
            side by side, and put together the stack that fits your next project.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#technologies"
              className="brand-gradient-bg text-white text-sm font-semibold px-6 py-3.5 rounded-xl shadow-sm hover:opacity-95 transition"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="border border-slate-200 text-slate-700 text-sm font-semibold px-8 py-3.5 rounded-xl hover:bg-slate-50 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right column: banner illustration */}
        <div className="lg:col-span-5 flex justify-center">
          <img
            src="/assets/banner-stack.png"
            alt="3D Development Stack Illustration"
            className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-sm"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;
