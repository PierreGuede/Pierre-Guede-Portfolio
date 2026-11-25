import { FC } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Download, Github, Mail, MapPin, Phone } from 'lucide-react';

const Contact: FC = () => {
  const reduceMotion = useReducedMotion();
  const contacts = [
    { icon: <Mail size={19} />, label: 'Écrivez-moi', value: 'pierremauril01@gmail.com', href: 'mailto:pierremauril01@gmail.com', key: 'email', wide: true },
    { icon: <Phone size={19} />, label: 'Appelez-moi', value: '+229 01 56 11 54 10', href: 'tel:+2290156115410', key: 'phone', wide: false },
    { icon: <Phone size={19} />, label: 'Autre numéro', value: '+229 01 40 15 19 07', href: 'tel:+2290140151907', key: 'phone-secondary', wide: false },
    { icon: <MapPin size={19} />, label: 'Je suis basé à', value: 'Abomey-Calavi, Bénin', href: null, key: 'location', wide: true },
  ];

  return (
    <section id="contact" className="py-20 px-4 scroll-mt-24">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="contact-panel relative mx-auto max-w-6xl overflow-hidden rounded-[2rem]"
      >
        <div className="contact-decoration contact-decoration-one" aria-hidden="true" />
        <div className="contact-decoration contact-decoration-two" aria-hidden="true" />
        <div className="contact-content relative grid gap-10 p-6 sm:p-9 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 lg:p-12">
          <div className="flex flex-col items-start justify-center">
            <span className="contact-eyebrow inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.15em]"><span className="contact-status-dot" /> Échangeons</span>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--cv-accent)]">Une idée, une équipe, un défi</p>
            <h2 className="mt-2 max-w-lg text-4xl font-black leading-[1.08] text-[var(--cv-text)] sm:text-5xl">Construisons quelque chose d’utile.</h2>
            <p className="mt-5 max-w-lg leading-7 text-[var(--cv-text-muted)]">Disponible pour discuter d’une opportunité fullstack, d’une mission web ou mobile métier ou d’un projet numérique.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="mailto:pierremauril01@gmail.com" className="cv-button-primary inline-flex items-center gap-2 rounded-lg px-5 py-3 font-semibold"><Mail size={18} /> M’écrire <ArrowUpRight size={16} /></a>
              <a href="/CV_PIERRE_MAURIL_MAFOYA_GUEDE.pdf" download className="cv-button-outline inline-flex items-center gap-2 rounded-lg px-5 py-3 font-semibold"><Download size={17} /> Télécharger mon CV</a>
            </div>
          </div>

          <div className="contact-details grid content-center gap-3 sm:grid-cols-2">
            {contacts.map((item, index) => {
              const card = (
                <div className="contact-card h-full rounded-2xl border border-[var(--cv-border)] bg-[var(--cv-surface)]/85 p-5">
                  <div className="flex items-center justify-between"><span className="contact-icon">{item.icon}</span>{item.href && <ArrowUpRight className="contact-arrow text-[var(--cv-border)]" size={17} />}</div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--cv-text-muted)]">{item.label}</p>
                  <p className="mt-1 break-words text-base font-bold text-[var(--cv-text)] sm:text-lg">{item.value}</p>
                </div>
              );
              return (
                <motion.div key={item.key} initial={reduceMotion ? false : { opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.12 + index * 0.09 }} className={item.wide ? 'sm:col-span-2' : ''}>
                  {item.href ? <a href={item.href} className="block h-full">{card}</a> : card}
                </motion.div>
              );
            })}
            <a href="https://github.com/PierreGuede" target="_blank" rel="noreferrer" className="contact-github flex min-h-[92px] items-center gap-4 rounded-2xl border border-[var(--cv-border)] px-5 py-4 transition-colors hover:bg-[var(--cv-surface)]/70 sm:col-span-2">
              <span className="contact-icon"><Github size={19} /></span><span className="min-w-0 flex-1"><span className="block text-xs font-semibold uppercase tracking-[0.12em] text-[var(--cv-text-muted)]">Retrouvez mon code</span><span className="mt-1 block font-bold text-[var(--cv-text)]">github.com/PierreGuede</span></span><ArrowUpRight className="contact-arrow text-[var(--cv-accent)]" size={18} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
