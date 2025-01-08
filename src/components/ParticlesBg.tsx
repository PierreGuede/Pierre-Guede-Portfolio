// components/ParticlesBg.js
import { useEffect, useCallback } from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    particlesJS: any;
  }
}

const ParticlesBg = () => {
  const initParticles = useCallback(() => {
    const particlesConfig = {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#00ff88"
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#00ff88",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    };

    // Vérifie si la bibliothèque particles.js est chargée
    if (window.particlesJS) {
      window.particlesJS('particles-js', particlesConfig);
    }
  }, []);

  useEffect(() => {
    // Charge le script particles.js
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js';
    script.async = true;
    script.onload = initParticles;
    
    document.body.appendChild(script);

    // Nettoie le script lors du démontage du composant
    return () => {
      document.body.removeChild(script);
    };
  }, [initParticles]);

  return (
    <div 
      id="particles-js" 
      className="fixed w-full h-full z-0"
      style={{ 
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: 0,
        top: 0,
        left: 0
      }}
    />
  );
};

export default ParticlesBg;
