import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    { 
      name: "Futsal Tact", 
      image: "/assets/card_futsal_tact.png", 
      description: "Aplicación táctica para entrenadores de futsal.",
      github: "https://github.com/adrigomezz/futsal-tact/tree/main",
      demo: "/assets/apk/Futsal Tact.apk"
    },
    { 
      name: "Alien Blasters", 
      image: "/assets/card_alien_blasters.png", 
      description: "Videojuego de disparos en el espacio con gráficos retro.",
      github: "https://github.com/adrigomezz/Alien-Blasters/tree/main"
    },
    { 
      name: "Politiquiz", 
      image: "/assets/card_politiquiz.png", 
      description: "Juego de preguntas sobre política con ranking online.",
      github: "https://github.com/adrigomezz",
      demo: "/assets/apk/POLITIQUIZ demo.apk"
    }
  ];

  return (
    <section id="projects-section" className="py-16">
      
      {/* Título */}
      <h2 className="text-3xl font-bold text-center text-[#26767A]">Proyectos</h2>

      {/* Cards de proyectos */}
      <div className="flex flex-wrap justify-center gap-8 mt-12">
        {projects.map((project) => (
          <motion.div
            key={project.name}
            className="w-72 bg-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 p-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={project.image} alt={project.name} className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-xl font-semibold text-center mt-4">{project.name}</h3>
            <p className="text-center text-gray-700 mt-2">{project.description}</p>

            {/* Botón de GitHub */}
            <div className="flex justify-center gap-4 mt-4">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-4 py-2 border-2 border-[#26767A] rounded-full text-[#26767A] hover:bg-[#26767A] hover:text-white transition"
              >
                <FaGithub /> GitHub
              </a>
              {/* Botón de Demo (solo si tiene APK) */}
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-4 py-2 border-2 border-[#26767A] rounded-full text-[#26767A] hover:bg-[#26767A] hover:text-white transition"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
