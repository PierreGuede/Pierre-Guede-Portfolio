import { FC } from 'react';

const Contact: FC = () => {
  return (
    <section id="contact" className="py-20 px-4 scroll-mt-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 section-title">Coordonnées</h2>
        <div className="p-8 rounded-lg cv-card">
          <p className="mb-4">N'hésitez pas à me contacter pour discuter de vos projets.</p>
          <div className="space-y-4">
            <p>
              <i className="fas fa-envelope mr-2 text-[var(--cv-accent)]"></i>
              pierremauril01@gmail.com
            </p>
            <p>
              <i className="fas fa-phone mr-2 text-[var(--cv-accent)]"></i>
              +229 01 56 11 54 10
            </p>
            <p>
              <i className="fas fa-phone mr-2 text-[var(--cv-accent)]"></i>
              +229 01 40 15 19 07
            </p>
            <p>
              <i className="fas fa-map-marker-alt mr-2 text-[var(--cv-accent)]"></i>
              132P, Fignonhou, Abomey-Calavi, Bénin
            </p>
            <p>
              <i className="fas fa-link mr-2 text-[var(--cv-accent)]"></i>
              <a href="https://pierre-guede.vercel.app" target="_blank" rel="noopener noreferrer" className="underline">
                pierre-guede.vercel.app
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
