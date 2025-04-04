import { useRouter } from "next/router";
import About from "../components/About";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const router = useRouter();
  const { section } = router.query; // Obtiene la sección de la URL

  return (
    <div className="relative min-h-screen bg-gray-200">
      <AnimatePresence mode="wait">
        {!section && (
          <motion.div
            key="about"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <About setActiveSection={(sec) => router.push(`/?section=${sec}`)} />
          </motion.div>
        )}

        {section === "technologies" && (
          <motion.div
            key="technologies"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.5 }}
          >
            <Technologies />
          </motion.div>
        )}

        {section === "projects" && (
          <motion.div
            key="projects"
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5 }}
          >
            <Projects />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
