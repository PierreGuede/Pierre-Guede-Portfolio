import { FC } from "react";

const Hero: FC = () => {
    return (
      <section className="h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-lg mb-4 text-[#00ff88]">Bonjour, je suis</p>
          <h1 className="text-5xl font-bold text-white mb-4">Pierre GUEDE</h1>
          <h2 className="text-4xl mb-6">Développeur Full Stack</h2>
          <a
            href="#contact"
            className="inline-block px-8 py-3 border-2 border-[#00ff88] text-[#00ff88] hover:bg-[#00ff88] hover:text-[#0a192f] transition-all duration-300"
          >
            Me contacter
          </a>
        </div>
      </section>
    );
  };
  
  export default Hero;
