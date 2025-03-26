
import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, Home, Mail, User, ChevronDown } from 'lucide-react';
import Navbar from '@/Components/Navbar';
import { Link } from '@inertiajs/react';

export default function Homea ({user}) {
  // Variants pour les animations Framer Motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar user={user}/>
      <motion.header
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        // className="bg-[url('./KBIRA.jpeg')] py-20 h-96  bg-no-repeat bg-cover text-center"
         className="bg-[url('./KBIRA.jpeg')] py-20 h-[500px] bg-no-repeat bg-cover bg-bottom text-center"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          Gérez vos chantiers avec expertise et efficacité !
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
        >
          Découvrez une plateforme conçue pour simplifier la gestion de vos chantiers, de la planification à la livraison.
        </motion.p>
      </motion.header>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="py-16 px-4 md:px-8"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          Les Étapes Clés d'un Chantier
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <HardHat className="w-12 h-12 mb-4" />, title: "Étude et préparation du terrain", description: "Analyse et préparation du site pour les travaux." },
            { icon: <Home className="w-12 h-12 mb-4" />, title: "Fondations et gros œuvre", description: "Construction des structures principales." },
            { icon: <User className="w-12 h-12 mb-4" />, title: "Second œuvre et finitions", description: "Travaux de finition et aménagements intérieurs." },
            { icon: <Mail className="w-12 h-12 mb-4" />, title: "Livraison et suivi des travaux", description: "Contrôle qualité et remise des clés." },
          ].map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              {step.icon}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="bg-gradient-to-br from-[#070a0b] to-[#1d5c76]  py-16 px-4 md:px-8"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl font-bold text-center text-[#00d0ff] mb-12"
        >
          Profil du Chef de Chantier
        </motion.h2>
        <motion.div
          variants={fadeInUp}
          className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center"
        >
          <img
            src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/86c71a79-2efe-4567-8665-b1e5a1fd9735"
            alt="Chef de Chantier"
            className="w-32 h-32 rounded-full mb-6 md:mb-0 md:mr-8"
          />
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mohamed Hmidi</h3>
            <p className="text-gray-600">
              Expert en gestion de chantier avec plus de 15 ans d'expérience, Jean Dupont est spécialisé dans la coordination de projets complexes et la gestion d'équipes.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Section : FAQ */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="py-16 px-4 md:px-8"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          Questions Fréquentes
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          {[
            { question: "Comment puis-je commencer un nouveau chantier ?", answer: "Créez un projet sur la plateforme et suivez les étapes guidées." },
            { question: "Quels sont les outils disponibles pour la gestion des équipes ?", answer: "La plateforme propose des outils de planification, de suivi et de communication." },
            { question: "Puis-je suivre l'avancement des travaux en temps réel ?", answer: "Oui, notre tableau de bord vous permet de suivre chaque étape en temps réel." },
          ].map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="mb-4 bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <ChevronDown className="w-6 h-6 text-gray-600" />
              </div>
              <p className="mt-4 text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="bg-[#000000] py-16 px-4 md:px-8"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl font-bold text-center text-gray-900 mb-8"
        >
          Vous avez des questions ?
        </motion.h2>
        <motion.div
          variants={fadeInUp}
          className="text-center"
        >
           

          <Link href="/contact" className="bg-blue-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition duration-300">
            Nous Contacter
          </Link>
          
        </motion.div>
      </motion.section>
    </div>
  );
};

