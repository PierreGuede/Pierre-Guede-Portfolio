import { FC } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, GraduationCap, Languages } from 'lucide-react';
import { usePreferences } from '../preferences';

const Education: FC = () => {
  const reduceMotion = useReducedMotion();
  const { locale } = usePreferences();
  const english = locale === 'en';
  const items = english ? [
    { title: 'National Bachelor’s Degree in Computer Systems and Software', focus: 'Computer systems & software', year: '2023', school: '' },
    { title: 'Professional Bachelor’s · Software Architecture', focus: 'Software architecture', year: '2022', school: 'ESGIS · Cotonou' },
    { title: 'Science and Technology Baccalaureate · Series D', focus: 'Science & technology', year: '2019', school: 'CS Sainte Félicité · Cotonou' },
  ] : [
    { title: 'Licence Nationale en Système Informatique et Logiciel', focus: 'Systèmes informatiques & logiciels', year: '2023', school: '' },
    { title: 'Licence Professionnelle · Architecture des Logiciels', focus: 'Architecture des logiciels', year: '2022', school: 'ESGIS · Cotonou' },
    { title: 'Baccalauréat Science et Technique · Série D', focus: 'Sciences & techniques', year: '2019', school: 'CS Sainte Félicité · Cotonou' },
  ];
  const languages = english ? [
    { name: 'French', level: 'Native', code: 'FR' },
    { name: 'English', level: 'Intermediate', code: 'EN' },
    { name: 'German', level: 'Beginner', code: 'DE' },
  ] : [
    { name: 'Français', level: 'Langue maternelle', code: 'FR' },
    { name: 'Anglais', level: 'Intermédiaire', code: 'EN' },
    { name: 'Allemand', level: 'Débutant', code: 'DE' },
  ];

  return (
    <section id="education" className="py-20 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[var(--cv-accent)]">{english ? 'Learning & communication' : 'Les bases & les échanges'}</p>
          <h2 className="text-3xl font-bold section-title sm:text-4xl">{english ? 'Education & languages' : 'Formation & langues'}</h2>
          <p className="mt-4 leading-7 text-[var(--cv-text-muted)]">{english ? 'A background in computing and languages that help me collaborate with diverse teams and users.' : 'Une formation informatique, et des langues pour collaborer avec des équipes et des utilisateurs variés.'}</p>
        </div>

        <div className="education-pair grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.article
            initial={reduceMotion ? false : { opacity: 0, x: -26, rotate: -3 }}
            whileInView={{ opacity: 1, x: 0, rotate: -2 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            whileHover={reduceMotion ? undefined : { rotate: 0, y: -5, transition: { duration: 0.3 } }}
            className="education-panel education-panel-study cv-card relative rounded-[1.5rem] p-6 sm:p-8"
          >
            <div className="education-panel-wash" aria-hidden="true" />
            <div className="relative">
              <div className="mb-7 flex items-start justify-between gap-4">
                <div><span className="education-icon"><GraduationCap size={21} /></span><p className="mt-4 text-xs font-bold uppercase tracking-[0.17em] text-[var(--cv-accent)]">{english ? 'My background' : 'Mon parcours'}</p><h3 className="mt-1 text-2xl font-black text-[var(--cv-text)]">{english ? 'Education' : 'Formation'}</h3></div>
                <span className="education-watermark font-serif text-6xl font-bold text-[var(--cv-border)]">01</span>
              </div>
              <ol className="education-list">
                {items.map((item, index) => (
                  <li key={item.year} className="education-item relative flex gap-4 pb-6 last:pb-0">
                    <div className="education-rail flex shrink-0 flex-col items-center"><span className={`education-node ${index === 0 ? 'is-current' : ''}`} />{index < items.length - 1 && <span className="education-line" />}</div>
                    <div className="min-w-0 flex-1 pb-1">
                      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1"><h4 className="max-w-md font-bold leading-6 text-[var(--cv-text)]">{item.title}</h4><span className="font-mono text-xs font-bold text-[var(--cv-accent-strong)]">{item.year}</span></div>
                      <p className="mt-1 text-sm text-[var(--cv-text-muted)]">{item.focus}</p>
                      {item.school && <p className="mt-1 text-xs font-medium text-[var(--cv-accent)]">{item.school}</p>}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </motion.article>

          <motion.article
            initial={reduceMotion ? false : { opacity: 0, x: 26, rotate: 3 }}
            whileInView={{ opacity: 1, x: 0, rotate: 2 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.12, ease: 'easeOut' }}
            whileHover={reduceMotion ? undefined : { rotate: 0, y: -5, transition: { duration: 0.3 } }}
            className="education-panel education-panel-languages cv-card relative rounded-[1.5rem] p-6 sm:p-8"
          >
            <div className="education-panel-wash" aria-hidden="true" />
            <div className="relative">
              <div className="mb-7 flex items-start justify-between gap-4">
                <div><span className="education-icon education-icon-warm"><Languages size={20} /></span><p className="mt-4 text-xs font-bold uppercase tracking-[0.17em] text-[var(--cv-accent-warm)]">{english ? 'For collaboration' : 'Pour collaborer'}</p><h3 className="mt-1 text-2xl font-black text-[var(--cv-text)]">{english ? 'Languages' : 'Langues'}</h3></div>
                <span className="education-watermark font-serif text-6xl font-bold text-[var(--cv-border)]">02</span>
              </div>
              <div className="language-list space-y-3">
                {languages.map((language, index) => (
                  <motion.div key={language.code} initial={reduceMotion ? false : { opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: 0.18 + index * 0.1 }} className="language-row flex items-center gap-4 rounded-xl border border-[var(--cv-border)] bg-[var(--cv-surface)]/80 p-4">
                    <span className="language-code flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-mono text-xs font-black">{language.code}</span>
                    <div className="min-w-0 flex-1"><h4 className="font-bold text-[var(--cv-text)]">{language.name}</h4><p className="mt-1 text-sm text-[var(--cv-text-muted)]">{language.level}</p></div>
                    <ArrowUpRight className="language-arrow text-[var(--cv-border)]" size={18} aria-hidden="true" />
                  </motion.div>
                ))}
              </div>
              <p className="mt-6 text-xs leading-5 text-[var(--cv-text-muted)]">{english ? 'The levels shown reflect my current proficiency.' : 'Les niveaux indiqués reflètent mon niveau actuel.'}</p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default Education;
