import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TechCard from "./components/TechCard";
import StackSidebar from "./components/StackSidebar";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTechData = async () => {
      try {
        setLoading(true);
        const res = await fetch("/technologies.json");
        const data = await res.json();
        setTechnologies(data);
      } catch (err) {
        toast.error("Failed to load technologies data.");
      } finally {
        setLoading(false);
      }
    };

    fetchTechData();
  }, []);

  const handleAddToStack = (tech) => {
    const alreadyExists = stack.some((item) => item.id === tech.id);

    if (alreadyExists) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }

    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemoveFromStack = (id, name) => {
    setStack((prev) => prev.filter((item) => item.id !== id));
    toast.info(`${name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.error("Cleared all technologies from your stack.");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Banner />

      <main id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Explore the <span className="brand-gradient-text">Technologies</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <span className="loading loading-spinner loading-lg text-pink-600"></span>
            <p className="text-sm text-slate-500 font-medium">Loading technologies...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {technologies.map((tech) => {
                const isAdded = stack.some((item) => item.id === tech.id);
                return (
                  <TechCard
                    key={tech.id}
                    tech={tech}
                    isAdded={isAdded}
                    onAddToStack={handleAddToStack}
                  />
                );
              })}
            </div>

            <div className="lg:col-span-3">
              <StackSidebar
                stack={stack}
                onRemoveFromStack={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        )}
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2200}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
