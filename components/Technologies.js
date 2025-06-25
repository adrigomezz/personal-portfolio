import { useState } from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Technologies() {
  const [darkMode, setDarkMode] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const technologies = {
    Frontend: ["React", "JavaScript.js", "HTML", "CSS"],
    Backend: ["Node.js", "Express.js", "MongoDB", "SQL"],
    Frameworks: ["Git", "Firebase", "Linux"],
  };

  function getGridClasses(category, isHovered) {
    const count = technologies[category].length;
    if (count === 4) return "grid-cols-2 grid-rows-2 gap-1 p-3";
    if (isHovered) return "grid-cols-3 gap-2 p-3";
    return "grid-cols-2 gap-1 p-2";
  }

  return (
    <motion.section
      id="technologies-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen flex flex-col items-center justify-center px-6 relative ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="text-4xl font-bold text-[#26767A] mt-6">Stack Tecnológico</h1>
      <p className="text-lg text-gray-600 mt-2">
        Aquí puedes ver todas las tecnologías con las que trabajo.
      </p>
      <p className="text-lg text-gray-600 mt-1 mb-8">
        Desde desarrollo web hasta bases de datos y más.
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-10 md:gap-20">
        {Object.keys(technologies).map((category) => (
          <motion.div
            key={category}
            className="relative flex flex-col items-center cursor-pointer"
            onMouseEnter={() => setHoveredCategory(category)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <motion.div
              initial={{ width: 130, height: 130 }}
              animate={{
                width: hoveredCategory === category ? 190 : 130,
                height: hoveredCategory === category ? 190 : 130,
              }}
              transition={{ duration: 0.3 }}
              className="rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden border-2 border-gray-300"
            >
              <div
                className={`grid ${getGridClasses(
                  category,
                  hoveredCategory === category
                )}`}
              >
                {technologies[category].map((tech) => (
                  <div key={tech} className="flex flex-col items-center">
                    <img
                      src={`/assets/${tech.toLowerCase().replace(".", "")}_logo.png`}
                      alt={tech}
                      className={`object-contain transition-all duration-300 ${
                        hoveredCategory === category ? "w-14 h-14" : "w-8 h-8"
                      }`}
                    />
                    {hoveredCategory === category && (
                      <p className="text-xs font-semibold text-gray-700 mt-1">
                        {tech}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            <h1 className="text-lg font-semibold text-[#26767A] mt-3">{category}</h1>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
