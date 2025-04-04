import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { 
  FaCode, FaProjectDiagram, FaLinkedin, FaGithub, 
  FaEnvelope, FaSun, FaMoon, FaDownload 
} from "react-icons/fa";

const About = () => {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  const phrases = [
    { text: ["Hola,", " soy Adrián", " Gómez"], colors: ["text-black", "text-green-500", "text-pink-500"] },
    { text: ["Fullstack", " Developer"], colors: ["text-green-500", "text-pink-500"] },
    { text: ["Text('Haciendo", " Inventario')"], colors: ["text-green-500", "text-pink-500"] },
    { text: ["Creando", " tu aplicación"], colors: ["text-green-500", "text-pink-500"] }
  ];

  useEffect(() => {
    let i = 0;
    let fullPhrase = phrases[phraseIndex].text.join(" ");
    setDisplayedText("");
    setTyping(true);

    const interval = setInterval(() => {
      if (i < fullPhrase.length) {
        setDisplayedText(fullPhrase.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setTyping(false);
          setTimeout(() => {
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
          }, 1000);
        }, 1500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [phraseIndex]);

  const handleSectionChange = (section) => {
    router.push(`/?section=${section}`);
  };

  return (
    <motion.section
      id="about-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col items-center justify-center py-16 font-sans relative min-h-screen px-4 text-center ${darkMode ? "bg-gray-900 text-white" : "bg-[#E4E4F4] text-black"}`}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8 }} 
        className="relative w-32 h-32 rounded-full overflow-hidden mt-12"
      >
        <img src="/assets/yo.jpg" alt="Adrián Gómez Montero" className="w-full h-full object-cover" />
      </motion.div>

      <h2 className="mt-4 text-3xl sm:text-4xl monospace">
        {phrases[phraseIndex].text.map((word, index) => (
          <span key={index} className={phrases[phraseIndex].colors[index]}>
            {displayedText.includes(word) ? word : ""}
          </span>
        ))}
        {typing && <span className="animate-blink">|</span>}
      </h2>

      <p className="mt-4 text-lg sm:text-xl max-w-lg leading-relaxed">
        Hola! Soy <b className="text-[#26767A]">Adrián</b>, y soy <b className="text-[#26767A]">Desarrollador Full Stack</b>.
        <br /> 
        De <b className="text-[#26767A]">Valencia</b>, España. Fan de la creatividad.
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {[{
          href: "https://www.linkedin.com/in/adrián-gómez-montero-033668306/",
          icon: <FaLinkedin />,
          text: "LinkedIn"
        }, {
          href: "https://github.com/adrigomezz",
          icon: <FaGithub />,
          text: "GitHub"
        }, {
          href: "mailto:monterogomezadrian@gmail.com",
          icon: <FaEnvelope />,
          text: "Email"
        }, {
          href: "/assets/CV/Adrián Gómez CV.pdf",
          icon: <FaDownload />,
          text: "Descargar CV"
        }].map(({ href, icon, text }, index) => (
          <a key={index} href={href} className="flex items-center gap-2 px-4 py-2 border-2 border-[#26767A] rounded-full text-[#26767A] hover:bg-[#26767A] hover:text-white transition">
            {icon} {text}
          </a>
        ))}
      </div>

      <div className="mt-12 flex flex-col sm:flex-row gap-4 p-4 bg-white/30 backdrop-blur-lg rounded-lg shadow-lg">
        <button
          onClick={() => handleSectionChange("technologies")}
          className="flex items-center gap-2 p-3 bg-white/50 rounded-lg hover:bg-white transition"
        >
          <FaCode className="text-[#26767A] text-xl" /> Stack
        </button>
        <button
          onClick={() => handleSectionChange("projects")}
          className="flex items-center gap-2 p-3 bg-white/50 rounded-lg hover:bg-white transition"
        >
          <FaProjectDiagram className="text-[#26767A] text-xl" /> Proyectos
        </button>
      </div>
    </motion.section>
  );
};

export default About;