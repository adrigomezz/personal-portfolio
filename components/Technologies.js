import { useState } from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Technologies() {
  const [darkMode, setDarkMode] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  // Tecnologías clasificadas
  const technologies = {
    Frontend: ["HTML", "CSS", "JavaScript", "React"],
    Backend: ["Python", "SQL", "Postgre"],
    Frameworks: ["Next.js", "Docker", "Flutter"],
  };

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
      {/* Título y descripción con más separación */}
      <h1 className="text-4xl font-bold text-[#26767A] mt-6">Stack Tecnológico</h1>
      <p className="text-lg text-gray-600 mt-2">
        Aquí puedes ver todas las tecnologías con las que trabajo.
      </p>
      <p className="text-lg text-gray-600 mt-1 mb-8">
        Desde desarrollo web hasta bases de datos y más.
      </p>

      {/* Contenedor de categorías */}
      <div className="mt-6 flex flex-wrap justify-center gap-10 md:gap-20">
        {Object.keys(technologies).map((category) => (
          <motion.div
            key={category}
            className="relative flex flex-col items-center cursor-pointer"
            onMouseEnter={() => setHoveredCategory(category)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            {/* Burbuja circular que crece al hacer hover */}
            <motion.div
              initial={{ width: 130, height: 130 }}
              animate={{
                width: hoveredCategory === category ? 190 : 130,
                height: hoveredCategory === category ? 190 : 130,
              }}
              transition={{ duration: 0.3 }}
              className="rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden border-2 border-gray-300"
            >
              {/* Imágenes dentro de la burbuja */}
              <div
                className={`grid ${
                  category === "Frontend"
                    ? "grid-cols-2 grid-rows-2 gap-0.1 p-3"
                    : hoveredCategory === category
                    ? "grid-cols-3 gap-2 p-3"
                    : "grid-cols-2 gap-1 p-2"
                }`}
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
                    {/* Nombre de la tecnología, visible solo en hover */}
                    {hoveredCategory === category && (
                      <p className="text-xs font-semibold text-gray-700 mt-1">{tech}</p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Nombre de la categoría */}
            <h1 className="text-lg font-semibold text-[#26767A] mt-3">{category}</h1>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
