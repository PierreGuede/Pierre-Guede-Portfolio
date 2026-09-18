import { FC } from 'react';
import { Download, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

const Contact: FC = () => {
  const contacts = [
    { icon: <Mail size={20} />, label: 'Email', value: 'pierremauril01@gmail.com', href: 'mailto:pierremauril01@gmail.com' },
    { icon: <Phone size={20} />, label: 'Téléphone', value: '+229 01 56 11 54 10', href: 'tel:+2290156115410' },
    { icon: <Phone size={20} />, label: 'Téléphone secondaire', value: '+229 01 40 15 19 07', href: 'tel:+2290140151907' },
    { icon: <MapPin size={20} />, label: 'Adresse', value: '132P, Fignonhou, Abomey-Calavi, Bénin' },
  ];

  return (
    <section id="contact" className="py-20 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="cv-card rounded-lg p-6 sm:p-8 lg:p-10">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
            <div>
              <h2 className="text-3xl font-bold section-title">Coordonnées</h2>
              <p className="mt-4 leading-7 text-[var(--cv-text-muted)]">
                Disponible pour échanger autour d'une opportunité fullstack, d'une mission web métier ou d'un projet
                nécessitant une base technique solide.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="mailto:pierremauril01@gmail.com" className="inline-flex items-center gap-2 px-5 py-3 cv-button-primary rounded-md font-semibold">
                  <Mail size={18} /> Écrire
                </a>
                <a href="/CV_PIERRE_MAURIL_MAFOYA_GUEDE.pdf" download className="inline-flex items-center gap-2 px-5 py-3 cv-button-outline rounded-md font-semibold">
                  <Download size={18} /> Télécharger CV
                </a>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contacts.map((item) => {
                const content = (
                  <div className="h-full rounded-lg bg-[var(--cv-surface-strong)] p-4 border border-[var(--cv-border)]">
                    <div className="flex items-center gap-2 text-[var(--cv-accent)] font-semibold">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                    <p className="mt-3 text-[var(--cv-text-muted)] break-words">{item.value}</p>
                  </div>
                );

                return item.href ? (
                  <a key={item.label + item.value} href={item.href} className="block hover:opacity-85 transition-opacity">
                    {content}
                  </a>
                ) : (
                  <div key={item.label + item.value}>{content}</div>
                );
              })}
              <a href="https://pierre-guede.vercel.app" target="_blank" rel="noopener noreferrer" className="sm:col-span-2 rounded-lg bg-[var(--cv-surface-strong)] p-4 border border-[var(--cv-border)] hover:opacity-85 transition-opacity">
                <div className="flex items-center gap-2 text-[var(--cv-accent)] font-semibold">
                  <ExternalLink size={20} />
                  Portfolio actuel
                </div>
                <p className="mt-3 text-[var(--cv-text-muted)] break-words">pierre-guede.vercel.app</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
