import { FC } from 'react';

const Contact: FC = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#00ff88]">Contact</h2>
        <div className="p-8 rounded-lg bg-white bg-opacity-5 backdrop-blur-lg">
          <p className="mb-4">N'hésitez pas à me contacter pour discuter de vos projets</p>
          <div className="space-y-4">
            <p>
              <i className="fas fa-envelope mr-2 text-[#00ff88]"></i>
              pierremauril01@gmail.com
            </p>
            <p>
              <i className="fas fa-phone mr-2 text-[#00ff88]"></i>
              +229 01 56 11 54 10
            </p>
            <p>
              <i className="fas fa-phone mr-2 text-[#00ff88]"></i>
              +229 01 40 15 19 07
            </p>
            <p>
              <i className="fas fa-map-marker-alt mr-2 text-[#00ff88]"></i>
              132p,fignonhou, Abomey-Calavi, Bénin
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
