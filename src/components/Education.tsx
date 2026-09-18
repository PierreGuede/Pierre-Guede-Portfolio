import { FC } from 'react';

const Education: FC = () => {
  const items = [
    {
      title: "Licence Nationale en Système Informatique et Logiciel (SIL)",
      year: "2023",
      school: "",
    },
    {
      title: "Licence Professionnelle option Architecture des Logiciels",
      year: "2022",
      school: "ESGIS - Cotonou",
    },
    {
      title: "Baccalauréat Science et Technique (Série D)",
      year: "2019",
      school: "CS Sainte Félicité - Cotonou",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 section-title">Formation & langues</h2>
        <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-8">
          <div className="space-y-6">
            {items.map((e, i) => (
              <div key={i} className="p-6 rounded-lg cv-card">
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <h3 className="text-xl font-semibold text-[var(--cv-text)]">{e.title}</h3>
                  <span className="text-sm text-[var(--cv-accent)] font-medium">{e.year}</span>
                </div>
                {e.school && <p className="mt-2 text-[var(--cv-text-muted)]">{e.school}</p>}
              </div>
            ))}
          </div>
          <div className="cv-card rounded-lg p-6 h-fit">
            <h3 className="text-xl font-bold text-[var(--cv-accent-strong)] mb-4">Langues</h3>
            <div className="space-y-4">
              {[
                ["Français", "Langue maternelle"],
                ["Anglais", "Intermédiaire"],
                ["Allemand", "Débutant"],
              ].map(([lang, level]) => (
                <div key={lang} className="flex items-center justify-between gap-4 border-b border-[var(--cv-border)] pb-3 last:border-b-0 last:pb-0">
                  <span className="font-semibold">{lang}</span>
                  <span className="text-sm text-[var(--cv-text-muted)]">{level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
