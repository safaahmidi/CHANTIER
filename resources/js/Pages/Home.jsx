
// import React from 'react';
// import { motion } from 'framer-motion';
// import { HardHat, Home, Mail, User, ChevronDown } from 'lucide-react';
// import Navbar from '@/Components/Navbar';
// import { Link } from '@inertiajs/react';

// export default function Homea ({user}) {
//   // Variants pour les animations Framer Motion
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Navbar user={user}/>
//       <motion.header
//         initial="hidden"
//         animate="visible"
//         variants={staggerContainer}
//         // className="bg-[url('./KBIRA.jpeg')] py-20 h-96  bg-no-repeat bg-cover text-center"
//          className="bg-[url('./KBIRA.jpeg')] py-20 h-[500px] bg-no-repeat bg-cover bg-bottom text-center"
//       >
//         <motion.h1
//           variants={fadeInUp}
//           className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
//         >
//           Gérez vos chantiers avec expertise et efficacité !
//         </motion.h1>
//         <motion.p
//           variants={fadeInUp}
//           className="text-lg md:text-xl text-black-500 max-w-2xl mx-auto"
//         >
//           Découvrez une plateforme conçue pour simplifier la gestion de vos chantiers, de la planification à la livraison.
//         </motion.p>
//       </motion.header>

//       <motion.section
//         initial="hidden"
//         animate="visible"
//         variants={staggerContainer}
//         className="py-16 px-4 md:px-8"
//       >
//         <motion.h2
//           variants={fadeInUp}
//           className="text-3xl font-bold text-center text-gray-900 mb-12"
//         >
//           Les Étapes Clés d'un Chantier
//         </motion.h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {[
//             { icon: <HardHat className="w-12 h-12 mb-4" />, title: "Étude et préparation du terrain", description: "Analyse et préparation du site pour les travaux." },
//             { icon: <Home className="w-12 h-12 mb-4" />, title: "Fondations et gros œuvre", description: "Construction des structures principales." },
//             { icon: <User className="w-12 h-12 mb-4" />, title: "Second œuvre et finitions", description: "Travaux de finition et aménagements intérieurs." },
//             { icon: <Mail className="w-12 h-12 mb-4" />, title: "Livraison et suivi des travaux", description: "Contrôle qualité et remise des clés." },
//           ].map((step, index) => (
//             <motion.div
//               key={index}
//               variants={fadeInUp}
//               className="bg-white p-6 rounded-lg shadow-md text-center"
//             >
//               {step.icon}
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
//               <p className="text-gray-600">{step.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       <motion.section
//         initial="hidden"
//         animate="visible"
//         variants={staggerContainer}
//         className="bg-gradient-to-br from-[#070a0b] to-[#1d5c76]  py-16 px-4 md:px-8"
//       >
//         <motion.h2
//           variants={fadeInUp}
//           className="text-3xl font-bold text-center text-[#00d0ff] mb-12"
//         >
//           Profil du Chef de Chantier
//         </motion.h2>
//         <motion.div
//           variants={fadeInUp}
//           className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center"
//         >
//           <img
//             src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/86c71a79-2efe-4567-8665-b1e5a1fd9735"
//             alt="Chef de Chantier"
//             className="w-32 h-32 rounded-full mb-6 md:mb-0 md:mr-8"
//           />
//           <div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">Mohamed Hmidi</h3>
//             <p className="text-gray-600">
//               Expert en gestion de chantier avec plus de 15 ans d'expérience, Jean Dupont est spécialisé dans la coordination de projets complexes et la gestion d'équipes.
//             </p>
//           </div>
//         </motion.div>
//       </motion.section>

//       {/* Section : FAQ */}
//       <motion.section
//         initial="hidden"
//         animate="visible"
//         variants={staggerContainer}
//         className="py-16 px-4 md:px-8"
//       >
//         <motion.h2
//           variants={fadeInUp}
//           className="text-3xl font-bold text-center text-gray-900 mb-12"
//         >
//           Questions Fréquentes
//         </motion.h2>
//         <div className="max-w-2xl mx-auto">
//           {[
//             { question: "Comment puis-je commencer un nouveau chantier ?", answer: "Créez un projet sur la plateforme et suivez les étapes guidées." },
//             { question: "Quels sont les outils disponibles pour la gestion des équipes ?", answer: "La plateforme propose des outils de planification, de suivi et de communication." },
//             { question: "Puis-je suivre l'avancement des travaux en temps réel ?", answer: "Oui, notre tableau de bord vous permet de suivre chaque étape en temps réel." },
//           ].map((faq, index) => (
//             <motion.div
//               key={index}
//               variants={fadeInUp}
//               className="mb-4 bg-white p-6 rounded-lg shadow-md"
//             >
//               <div className="flex justify-between items-center cursor-pointer">
//                 <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
//                 <ChevronDown className="w-6 h-6 text-gray-600" />
//               </div>
//               <p className="mt-4 text-gray-600">{faq.answer}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       <motion.section
//         initial="hidden"
//         animate="visible"
//         variants={staggerContainer}
//         className="bg-[#000000] py-16 px-4 md:px-8"
//       >
//         <motion.h2
//           variants={fadeInUp}
//           className="text-3xl font-bold text-center text-white mb-8"
//         >
//           Vous avez des questions ?
//         </motion.h2>
//         <motion.div
//           variants={fadeInUp}
//           className="text-center"
//         >
           

//           <Link href="/contact" className="bg-blue-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition duration-300">
//             Nous Contacter
//           </Link>
          
//         </motion.div>
//       </motion.section>
//     </div>
//   );
// };




// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { HardHat, Home, Mail, User, ChevronDown, Star, CheckSquare, Shield, Calendar, Clock, Truck, Users, Clipboard, Award, ChevronRight, MessageSquare } from 'lucide-react';
// import Navbar from '@/Components/Navbar';
// import { Link } from '@inertiajs/react';

// export default function Homea ({user}) {
//   // États pour les éléments interactifs
//   const [showFullProfile, setShowFullProfile] = useState(false);
//   const [activeProjectCard, setActiveProjectCard] = useState(0);

//   // Variants pour les animations Framer Motion
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   const fadeInLeft = {
//     hidden: { opacity: 0, x: -20 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
//   };

//   const fadeInRight = {
//     hidden: { opacity: 0, x: 20 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   // Données pour la section de suivi de projet
//   const projectSteps = [
//     { 
//       icon: <Calendar className="w-6 h-6 text-[#6FB1C7]" />, 
//       title: "Planification", 
//       description: "Organisation détaillée des phases de travail et allocation des ressources." 
//     },
//     { 
//       icon: <Clipboard className="w-6 h-6 text-[#6FB1C7]" />, 
//       title: "Suivi en temps réel", 
//       description: "Tableau de bord interactif pour visualiser l'avancement du chantier." 
//     },
//     { 
//       icon: <Users className="w-6 h-6 text-[#6FB1C7]" />, 
//       title: "Gestion d'équipe", 
//       description: "Coordination efficace des différents corps de métier impliqués." 
//     },
//     { 
//       icon: <Clock className="w-6 h-6 text-[#6FB1C7]" />, 
//       title: "Respect des délais", 
//       description: "Système d'alerte pour anticiper les retards et ajuster la planification." 
//     },
//     { 
//       icon: <Truck className="w-6 h-6 text-[#6FB1C7]" />, 
//       title: "Logistique", 
//       description: "Organisation des livraisons et gestion des stocks de matériaux." 
//     }
//   ];

//   // Données pour les témoignages clients
//   const testimonials = [
//     {
//       name: "Sophie Martin",
//       role: "Promoteur immobilier",
//       content: "La gestion de notre projet de résidence a été impeccable. L'équipe a su respecter les délais malgré les contraintes techniques.",
//       rating: 5
//     },
//     {
//       name: "Thomas Dubois",
//       role: "Architecte",
//       content: "Une collaboration efficace et transparente. Le suivi en temps réel m'a permis de rester connecté à l'avancement du chantier.",
//       rating: 5
//     },
//     {
//       name: "Laura Petit",
//       role: "Maître d'ouvrage",
//       content: "Professionnalisme et réactivité. Un partenaire fiable pour tous nos projets de construction.",
//       rating: 4
//     }
//   ];

//   // Données pour les atouts clés
//   const keyAssets = [
//     { 
//       icon: <CheckSquare className="w-8 h-8 text-[#6FB1C7]" />, 
//       title: "Expertise", 
//       description: "15+ années d'expérience dans la gestion de chantiers complexes" 
//     },
//     { 
//       icon: <Shield className="w-8 h-8 text-[#6FB1C7]" />, 
//       title: "Qualité", 
//       description: "Standards rigoureux et contrôles réguliers à chaque étape" 
//     },
//     { 
//       icon: <Award className="w-8 h-8 text-[#6FB1C7]" />, 
//       title: "Innovation", 
//       description: "Utilisation des dernières technologies pour optimiser les processus" 
//     }
//   ];

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Navbar user={user}/>
      
//       {/* Hero Section Améliorée */}
//       <motion.header
//         initial="hidden"
//         animate="visible"
//         variants={staggerContainer}
//         className="bg-[url('./KBIRA.jpeg')] py-20 h-[600px] bg-no-repeat bg-cover bg-bottom relative"
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-[#070a0b] via-[#143A4B] to-transparent opacity-80"></div>
//         <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex flex-col justify-center items-start">
//           <motion.h1
//             variants={fadeInLeft}
//             className="text-5xl md:text-6xl font-bold text-white mb-6 max-w-2xl leading-tight"
//           >
//             Excellence et Précision dans la Gestion de vos Chantiers
//           </motion.h1>
//           <motion.p
//             variants={fadeInLeft}
//             className="text-xl md:text-2xl text-[#6FB1C7] max-w-xl mb-8 leading-relaxed"
//           >
//             Des solutions innovantes pour transformer vos projets en réalisations exceptionnelles, dans les délais et le respect du budget.
//           </motion.p>
//           <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
//             <Link href="/contact" className="bg-[#6FB1C7] hover:bg-[#5a96ab] text-white px-8 py-3 rounded-lg font-semibold transition duration-300 flex items-center">
//               Démarrer un projet <ChevronRight className="ml-2 w-5 h-5" />
//             </Link>
//             <Link href="/services" className="bg-transparent border-2 border-[#6FB1C7] text-[#6FB1C7] hover:bg-[#6FB1C7] hover:text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
//               Nos services
//             </Link>
//           </motion.div>
//         </div>
//       </motion.header>

//       {/* Les Étapes Clés d'un Chantier */}
//       <motion.section
//         initial="hidden"
//         animate="visible"
//         variants={staggerContainer}
//         className="py-20 px-4 md:px-8 bg-white"
//       >
//         <motion.div variants={fadeInUp} className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
//             Les Étapes Clés d'un Chantier
//           </h2>
//           <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
//             De la conception initiale à la livraison finale, nous assurons un suivi méticuleux de chaque phase de votre projet.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { icon: <HardHat className="w-10 h-10 mb-4 text-[#143A4B]" />, title: "Étude et préparation", description: "Analyse approfondie du site et préparation optimale du terrain." },
//               { icon: <Home className="w-10 h-10 mb-4 text-[#143A4B]" />, title: "Fondations et gros œuvre", description: "Construction des structures principales avec expertise technique." },
//               { icon: <User className="w-10 h-10 mb-4 text-[#143A4B]" />, title: "Second œuvre et finitions", description: "Travaux de finition et aménagements intérieurs de qualité." },
//               { icon: <Mail className="w-10 h-10 mb-4 text-[#143A4B]" />, title: "Livraison et suivi", description: "Contrôle qualité rigoureux et service après-livraison." },
//             ].map((step, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeInUp}
//                 className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow duration-300"
//               >
//                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#e9f5f9] mb-4">
//                   {step.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
//                 <p className="text-gray-600">{step.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </motion.section>

//       {/* Section de Suivi de Projet */}
//       <motion.section
//         initial="hidden"
//         animate="visible"
//         variants={staggerContainer}
//         className="py-20 px-4 md:px-8 bg-gradient-to-br from-[#143A4B] via-[#143A4B] to-[#070a0b]"
//       >
//         <motion.div variants={fadeInUp} className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold text-center text-white mb-4">
//             Suivi Intégral de Votre Projet
//           </h2>
//           <p className="text-center text-[#6FB1C7] mb-16 max-w-3xl mx-auto">
//             Notre plateforme vous donne accès à tous les aspects de la gestion de votre chantier
//           </p>
          
//           <div className="relative">
//             <div className="flex overflow-x-auto pb-8 hide-scrollbar snap-x">
//               <div className="flex gap-6">
//                 {projectSteps.map((step, index) => (
//                   <motion.div
//                     key={index}
//                     variants={fadeInUp}
//                     className={`snap-center flex-shrink-0 w-80 p-6 rounded-xl shadow-lg cursor-pointer transition-all duration-300 ${activeProjectCard === index ? 'bg-[#6FB1C7] transform scale-105' : 'bg-white'}`}
//                     onClick={() => setActiveProjectCard(index)}
//                   >
//                     <div className="flex items-start mb-4">
//                       <div className={`rounded-full p-3 mr-4 ${activeProjectCard === index ? 'bg-white' : 'bg-[#e9f5f9]'}`}>
//                         {step.icon}
//                       </div>
//                       <div>
//                         <h3 className={`text-xl font-semibold mb-2 ${activeProjectCard === index ? 'text-white' : 'text-gray-900'}`}>
//                           {step.title}
//                         </h3>
//                         <p className={activeProjectCard === index ? 'text-gray-100' : 'text-gray-600'}>
//                           {step.description}
//                         </p>
//                       </div>
//                     </div>
//                     <div className={`mt-4 pt-4 ${activeProjectCard === index ? 'border-t border-white/30' : 'border-t border-gray-200'}`}>
//                       <Link href={`/features/${step.title.toLowerCase()}`} className={`flex items-center text-sm font-medium ${activeProjectCard === index ? 'text-white' : 'text-[#143A4B]'}`}>
//                         En savoir plus <ChevronRight className="ml-1 w-4 h-4" />
//                       </Link>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </motion.section>

//       {/* Section Profil du Chef de Chantier (version compacte) */}
//       <motion.section
//         initial="hidden"
//         animate="visible"
//         variants={staggerContainer}
//         className="py-20 px-4 md:px-8 bg-gray-50"
//       >
//         <motion.div variants={fadeInUp} className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
//             Notre Équipe d'Experts
//           </h2>
//           <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
//             Des professionnels qualifiés pour vous accompagner à chaque étape de votre chantier
//           </p>
          
//           <motion.div
//             variants={fadeInUp}
//             className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden"
//           >
//             <div className="p-6">
//               <div className="flex items-center">
//                 <img
//                   src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/86c71a79-2efe-4567-8665-b1e5a1fd9735"
//                   alt="Chef de Chantier"
//                   className="w-20 h-20 rounded-full mr-6"
//                 />
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-900">Mohamed Hmidi</h3>
//                   <p className="text-[#6FB1C7] font-medium">Chef de Chantier</p>
//                 </div>
//               </div>
              
//               {showFullProfile && (
//                 <motion.div 
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: 'auto' }}
//                   transition={{ duration: 0.3 }}
//                   className="mt-6 pt-6 border-t border-gray-200"
//                 >
//                   <p className="text-gray-600 mb-4">
//                     Expert en gestion de chantier avec plus de 15 ans d'expérience, Mohamed Hmidi est spécialisé dans la coordination de projets complexes et la gestion d'équipes multidisciplinaires.
//                   </p>
//                   <ul className="space-y-2">
//                     <li className="flex items-center text-gray-600">
//                       <CheckSquare className="w-5 h-5 text-[#143A4B] mr-2" /> Certifié en gestion de chantiers écologiques
//                     </li>
//                     <li className="flex items-center text-gray-600">
//                       <CheckSquare className="w-5 h-5 text-[#143A4B] mr-2" /> Expert en optimisation des ressources
//                     </li>
//                     <li className="flex items-center text-gray-600">
//                       <CheckSquare className="w-5 h-5 text-[#143A4B] mr-2" /> Formé aux dernières normes de sécurité
//                     </li>
//                   </ul>
//                 </motion.div>
//               )}
              
//               <button 
//                 onClick={() => setShowFullProfile(!showFullProfile)}
//                 className="mt-4 text-[#143A4B] font-medium flex items-center hover:text-[#6FB1C7] transition-colors duration-300"
//               >
//                 {showFullProfile ? 'Réduire' : 'Plus de détails'}
//                 <ChevronDown className={`ml-1 w-5 h-5 transition-transform duration-300 ${showFullProfile ? 'transform rotate-180' : ''}`} />
//               </button>
//             </div>
//           </motion.div>
//         </motion.div>
//       </motion.section>

//       {/* Section Atouts Clés */}
//       <motion.section
//         initial="hidden"
//         animate="visible"
//         variants={staggerContainer}
//         className="py-20 px-4 md:px-8 bg-[#6FB1C7]"
//       >
//         <motion.div variants={fadeInUp} className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold text-center text-white mb-4">
//             Nos Atouts pour Votre Satisfaction
//           </h2>
//           <p className="text-center text-white/80 mb-12 max-w-3xl mx-auto">
//             Des engagements concrets pour garantir la réussite de votre projet
//           </p>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {keyAssets.map((asset, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeInUp}
//                 className="bg-white p-8 rounded-xl shadow-md text-center"
//               >
//                 <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#e9f5f9] mb-6">
//                   {asset.icon}
//                 </div>
//                 <h3 className="text-2xl font-semibold text-gray-900 mb-3">{asset.title}</h3>
//                 <p className="text-gray-600">{asset.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </motion.section>

//       {/* Section Témoignages */}
//       <motion.section
//         initial="hidden"
//         animate="visible"
//         variants={staggerContainer}
//         className="py-20 px-4 md:px-8 bg-gray-50"
//       >
//         <motion.div variants={fadeInUp} className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
//             Ce que Disent Nos Clients
//           </h2>
//           <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
//             Découvrez les témoignages de ceux qui nous ont fait confiance
//           </p>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
//                 className="bg-white p-6 rounded-xl shadow-md"
//               >
//                 <div className="flex mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
//                   ))}
//                 </div>
//                 <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
//                 <div className="flex items-center">
//                   <div className="flex-shrink-0 mr-4">
//                     <div className="w-12 h-12 bg-[#e9f5f9] rounded-full flex items-center justify-center">
//                       <User className="w-6 h-6 text-[#143A4B]" />
//                     </div>
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-medium text-gray-900">{testimonial.name}</h4>
//                     <p className="text-sm text-[#6FB1C7]">{testimonial.role}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </motion.section>

//       {/* Section Call to Action */}
//       <motion.section
//         initial="hidden"
//         animate="visible"
//         variants={staggerContainer}
//         className="py-16 px-4 md:px-8 bg-gradient-to-br from-[#070a0b] via-[#143A4B] to-[#070a0b]"
//       >
//         <motion.div variants={fadeInUp} className="max-w-4xl mx-auto text-center">
//           <motion.h2
//             variants={fadeInUp}
//             className="text-3xl font-bold text-white mb-6"
//           >
//             Prêt à Concrétiser Votre Projet de Construction ?
//           </motion.h2>
//           <motion.p
//             variants={fadeInUp}
//             className="text-lg text-[#6FB1C7] mb-8 max-w-2xl mx-auto"
//           >
//             Notre équipe d'experts est prête à vous accompagner à chaque étape de votre chantier.
//           </motion.p>
//           <motion.div
//             variants={fadeInUp}
//             className="flex flex-wrap justify-center gap-4"
//           >
//             <Link href="/contact" className="bg-[#6FB1C7] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#5a96ab] transition duration-300 flex items-center">
//               <MessageSquare className="mr-2 w-5 h-5" /> Nous Contacter
//             </Link>
//             <Link href="/services" className="bg-transparent border-2 border-[#6FB1C7] text-[#6FB1C7] px-8 py-3 rounded-lg font-semibold hover:bg-[#6FB1C7] hover:text-white transition duration-300">
//               Découvrir Nos Services
//             </Link>
//           </motion.div>
//         </motion.div>
//       </motion.section>
//     </div>
//   );
// };





// // code 

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   HardHat, Home, Mail, User, ChevronDown, ChevronLeft, ChevronRight,
//   Star, CheckSquare, Shield, Calendar, Clock, Truck, Users, Clipboard, 
//   Award, MessageSquare, FileCheck, Check
// } from 'lucide-react';
// import Navbar from '@/Components/Navbar';
// import { Link } from '@inertiajs/react';

// export default function Homea({ user }) {
//   // États pour les éléments interactifs
//   const [showFullProfile, setShowFullProfile] = useState(false);
//   const [activeProjectCard, setActiveProjectCard] = useState(0);
//   const [activeStep, setActiveStep] = useState(null);

//   // Variants pour les animations Framer Motion
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   const fadeInLeft = {
//     hidden: { opacity: 0, x: -20 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
//   };

//   const fadeInRight = {
//     hidden: { opacity: 0, x: 20 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const scaleIn = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//   };

//   // Données pour la section de suivi de projet
//   const projectSteps = [
//     { 
//       icon: <Calendar className="w-6 h-6 text-[#6FB1C7]" />, 
//       title: "Planification", 
//       description: "Organisation détaillée des phases de travail et allocation des ressources." 
//     },
//     { 
//       icon: <Clipboard className="w-6 h-6 text-[#6FB1C7]" />, 
//       title: "Suivi en temps réel", 
//       description: "Tableau de bord interactif pour visualiser l'avancement du chantier." 
//     },
//     { 
//       icon: <Users className="w-6 h-6 text-[#6FB1C7]" />, 
//       title: "Gestion d'équipe", 
//       description: "Coordination efficace des différents corps de métier impliqués." 
//     },
//     { 
//       icon: <Clock className="w-6 h-6 text-[#6FB1C7]" />, 
//       title: "Respect des délais", 
//       description: "Système d'alerte pour anticiper les retards et ajuster la planification." 
//     },
//     { 
//       icon: <Truck className="w-6 h-6 text-[#6FB1C7]" />, 
//       title: "Logistique", 
//       description: "Organisation des livraisons et gestion des stocks de matériaux." 
//     }
//   ];

//   // Données pour les témoignages clients
//   const testimonials = [
//     {
//       name: "AbdelAziz Hmidi ",
//       role: "Promoteur immobilier",
//       content: "La gestion de notre projet de résidence a été impeccable. L'équipe a su respecter les délais malgré les contraintes techniques.",
//       rating: 5
//     },
//     {
//       name: "Nabila Tazi ",
//       role: "Architecte",
//       content: "Une collaboration efficace et transparente. Le suivi en temps réel m'a permis de rester connecté à l'avancement du chantier.",
//       rating: 5
//     },
//     {
//       name: "Salim Alaoui",
//       role: "Maître d'ouvrage",
//       content: "Professionnalisme et réactivité. Un partenaire fiable pour tous nos projets de construction.",
//       rating: 4
//     }
//   ];

//   // Données pour les atouts clés
//   const keyAssets = [
//     { 
//       icon: <CheckSquare className="w-8 h-8 text-[#6FB1C7]" />, 
//       title: "Expertise", 
//       description: "15+ années d'expérience dans la gestion de chantiers complexes" 
//     },
//     { 
//       icon: <Shield className="w-8 h-8 text-[#6FB1C7]" />, 
//       title: "Qualité", 
//       description: "Standards rigoureux et contrôles réguliers à chaque étape" 
//     },
//     { 
//       icon: <Award className="w-8 h-8 text-[#6FB1C7]" />, 
//       title: "Innovation", 
//       description: "Utilisation des dernières technologies pour optimiser les processus" 
//     }
//   ];

//   // Données pour les étapes de construction
//   const constructionSteps = [
//     {
//       title: "Conception Initiale",
//       description: "Étude de faisabilité et plans architecturaux",
//       details: "Notre équipe travaille avec vous pour définir les spécifications techniques et établir les plans définitifs du projet. Cette phase inclut l'étude des contraintes techniques, l'obtention des permis et la planification préliminaire.",
//       icon: <FileCheck className="w-6 h-6 text-[#6FB1C7]" />
//     },
//     {
//       title: "Préparation du Site",
//       description: "Terrassement et installation du chantier",
//       details: "Nous préparons le terrain pour la construction avec le terrassement, l'installation des accès et des équipements de chantier. Cette étape cruciale inclut également le traçage et les fondations.",
//       icon: <HardHat className="w-6 h-6 text-[#6FB1C7]" />
//     },
//     {
//       title: "Construction",
//       description: "Réalisation des travaux selon le planning",
//       details: "Exécution des travaux selon le calendrier établi, avec des contrôles qualité réguliers. Notre plateforme vous permet de suivre en temps réel l'avancement de chaque corps de métier.",
//       icon: <Home className="w-6 h-6 text-[#6FB1C7]" />
//     }
//   ];

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Navbar user={user}/>
      
//       {/* Hero Section */}
//       <motion.header
//         initial="hidden"
//         animate="visible"
//         variants={staggerContainer}
//         className="bg-[url('./KBIRA.jpeg')] py-20 h-[600px] bg-no-repeat bg-cover bg-bottom relative"
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-[#070a0b] via-[#143A4B] to-transparent opacity-80"></div>
//         <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex flex-col justify-center items-start">
//           <motion.h1
//             variants={fadeInLeft}
//             className="text-5xl md:text-6xl font-bold text-white mb-6 max-w-2xl leading-tight"
//           >
//             Excellence et Précision dans la Gestion de vos Chantiers
//           </motion.h1>
//           <motion.p
//             variants={fadeInLeft}
//             className="text-xl md:text-2xl text-[#6FB1C7] max-w-xl mb-8 leading-relaxed"
//           >
//             Des solutions innovantes pour transformer vos projets en réalisations exceptionnelles, dans les délais et le respect du budget.
//           </motion.p>
//           <motion.div variants={fadeInUp}>
//             <Link 
//               href={route("register")} 
//               className="bg-[#143A4B]/70 hover:bg-[#143A4B]/90 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 flex items-center"
//             >
//               Inscription <ChevronRight className="ml-2 w-5 h-5" />
//             </Link>
//           </motion.div>
//         </div>
//       </motion.header>

//       {/* Section Étapes Clés */}
//       <motion.section
//         initial="hidden"
//         animate="visible"
//         variants={staggerContainer}
//         className="py-20 px-4 md:px-8 bg-gray-50"
//       >
//         <div className="max-w-6xl mx-auto">
//           <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center text-[#143A4B] mb-4">
//             Les Étapes Clés d'un Chantier
//           </motion.h2>
//           <motion.p variants={fadeInUp} className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
//             De la conception initiale à la livraison finale, nous assurons un suivi méticuleux de chaque phase de votre projet.
//           </motion.p>

//           <div className="relative min-h-[500px]">
//             {/* Fond pour les détails */}
//             <motion.div 
//               className="absolute inset-0 bg-gradient-to-br from-[#143A4B] to-[#0f2d38] rounded-2xl p-8 flex items-center justify-center"
//               animate={{ opacity: activeStep !== null ? 1 : 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               {activeStep !== null && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3 }}
//                   className="text-white text-center max-w-2xl"
//                 >
//                   <h3 className="text-2xl font-bold mb-4">{constructionSteps[activeStep].title}</h3>
//                   <p className="text-gray-200 text-lg mb-6">{constructionSteps[activeStep].details}</p>
//                   <button 
//                     onClick={() => setActiveStep(null)}
//                     className="text-[#6FB1C7] hover:text-white flex items-center mx-auto"
//                   >
//                     <ChevronLeft className="mr-1" /> Retour
//                   </button>
//                 </motion.div>
//               )}
//             </motion.div>

//             {/* Stack de cartes */}
//             <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
//               {constructionSteps.map((step, index) => (
//                 <motion.div
//                   key={index}
//                   variants={fadeInUp}
//                   className={`relative rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-500 ${activeStep !== null ? (activeStep === index ? 'transform -translate-y-20 z-20' : 'opacity-0 scale-90') : 'bg-white'}`}
//                   onClick={() => setActiveStep(index)}
//                   whileHover={activeStep === null ? { y: -10 } : {}}
//                 >
//                   <div className="p-6 h-full flex flex-col">
//                     <div className="bg-[#6FB1C7] bg-opacity-10 p-4 rounded-lg w-14 h-14 flex items-center justify-center mb-4">
//                       {step.icon}
//                     </div>
//                     <h3 className="text-xl font-semibold text-[#143A4B] mb-2">{step.title}</h3>
//                     <p className="text-gray-600">{step.description}</p>
//                     <div className="mt-auto pt-4">
//                       <span className="inline-flex items-center text-[#6FB1C7] font-medium">
//                         Voir détails <ChevronRight className="ml-1 w-4 h-4" />
//                       </span>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Section Suivi de Projet */}
//       <motion.section
//         initial="hidden"
//         animate="visible"
//         variants={staggerContainer}
//         className="py-20 px-4 md:px-8 bg-gradient-to-br from-[#143A4B] via-[#143A4B] to-[#070a0b]"
//       >
//         <motion.div variants={fadeInUp} className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold text-center text-white mb-4">
//             Suivi Intégral de Votre Projet
//           </h2>
//           <p className="text-center text-[#6FB1C7] mb-16 max-w-3xl mx-auto">
//             Notre plateforme vous donne accès à tous les aspects de la gestion de votre chantier
//           </p>
          
//           <div className="relative">
//             <div className="flex overflow-x-auto pb-8 hide-scrollbar snap-x">
//               <div className="flex gap-6">
//                 {projectSteps.map((step, index) => (
//                   <motion.div
//                     key={index}
//                     variants={fadeInUp}
//                     className={`snap-center flex-shrink-0 w-80 p-6 rounded-xl shadow-lg cursor-pointer transition-all duration-300 ${activeProjectCard === index ? 'bg-[#6FB1C7] transform scale-105' : 'bg-white'}`}
//                     onClick={() => setActiveProjectCard(index)}
//                   >
//                     <div className="flex items-start mb-4">
//                       <div className={`rounded-full p-3 mr-4 ${activeProjectCard === index ? 'bg-white' : 'bg-[#e9f5f9]'}`}>
//                         {step.icon}
//                       </div>
//                       <div>
//                         <h3 className={`text-xl font-semibold mb-2 ${activeProjectCard === index ? 'text-white' : 'text-gray-900'}`}>
//                           {step.title}
//                         </h3>
//                         <p className={activeProjectCard === index ? 'text-gray-100' : 'text-gray-600'}>
//                           {step.description}
//                         </p>
//                       </div>
//                     </div>
//                     <div className={`mt-4 pt-4 ${activeProjectCard === index ? 'border-t border-white/30' : 'border-t border-gray-200'}`}>
//                       <a 
//                         href="https://bmap.fr" 
//                         target="_blank" 
//                         rel="noopener noreferrer" 
//                         className={`flex items-center text-sm font-medium ${activeProjectCard === index ? 'text-white' : 'text-[#143A4B]'}`}
//                       >
//                         En savoir plus <ChevronRight className="ml-1 w-4 h-4" />
//                       </a>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </motion.section>

//       {/* Section Profil Chef de Chantier */}
//       <motion.section
//         initial="hidden"
//         animate="visible"
//         variants={staggerContainer}
//         className="py-20 px-4 md:px-8 bg-gray-50"
//       >
//         <motion.div variants={fadeInUp} className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
//             Notre Équipe d'Experts
//           </h2>
//           <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
//             Des professionnels qualifiés pour vous accompagner à chaque étape de votre chantier
//           </p>
          
//           <motion.div
//             variants={fadeInUp}
//             className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden"
//           >
//             <div className="p-6">
//               <div className="flex items-center">
//                 <img
//                   src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/86c71a79-2efe-4567-8665-b1e5a1fd9735"
//                   alt="Chef de Chantier"
//                   className="w-20 h-20 rounded-full mr-6"
//                 />
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-900">Mohamed Hmidi</h3>
//                   <p className="text-[#6FB1C7] font-medium">Chef de Chantier</p>
//                 </div>
//               </div>
              
//               {showFullProfile && (
//                 <motion.div 
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: 'auto' }}
//                   transition={{ duration: 0.3 }}
//                   className="mt-6 pt-6 border-t border-gray-200"
//                 >
//                   <p className="text-gray-600 mb-4">
//                     Expert en gestion de chantier avec plus de 15 ans d'expérience, Mohamed Hmidi est spécialisé dans la coordination de projets complexes et la gestion d'équipes multidisciplinaires.
//                   </p>
//                   <ul className="space-y-2">
//                     <li className="flex items-center text-gray-600">
//                       <Check className="w-5 h-5 text-[#143A4B] mr-2" /> Certifié en gestion de chantiers écologiques
//                     </li>
//                     <li className="flex items-center text-gray-600">
//                       <Check className="w-5 h-5 text-[#143A4B] mr-2" /> Expert en optimisation des ressources
//                     </li>
//                     <li className="flex items-center text-gray-600">
//                       <Check className="w-5 h-5 text-[#143A4B] mr-2" /> Formé aux dernières normes de sécurité
//                     </li>
//                   </ul>
//                 </motion.div>
//               )}
              
//               <button 
//                 onClick={() => setShowFullProfile(!showFullProfile)}
//                 className="mt-4 text-[#143A4B] font-medium flex items-center hover:text-[#6FB1C7] transition-colors duration-300"
//               >
//                 {showFullProfile ? 'Réduire' : 'Plus de détails'}
//                 <ChevronDown className={`ml-1 w-5 h-5 transition-transform duration-300 ${showFullProfile ? 'transform rotate-180' : ''}`} />
//               </button>
//             </div>
//           </motion.div>
//         </motion.div>
//       </motion.section>

//       {/* Section Atouts Clés */}
//       <motion.section
//         initial="hidden"
//         animate="visible"
//         variants={staggerContainer}
//         className="py-20 px-4 md:px-8 bg-[#6FB1C7]"
//       >
//         <motion.div variants={fadeInUp} className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold text-center text-white mb-4">
//             Nos Atouts pour Votre Satisfaction
//           </h2>
//           <p className="text-center text-white/80 mb-12 max-w-3xl mx-auto">
//             Des engagements concrets pour garantir la réussite de votre projet
//           </p>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {keyAssets.map((asset, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeInUp}
//                 className="bg-white p-8 rounded-xl shadow-md text-center"
//               >
//                 <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#e9f5f9] mb-6">
//                   {asset.icon}
//                 </div>
//                 <h3 className="text-2xl font-semibold text-gray-900 mb-3">{asset.title}</h3>
//                 <p className="text-gray-600">{asset.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </motion.section>

//       {/* Section Témoignages */}
//       <motion.section
//         initial="hidden"
//         animate="visible"
//         variants={staggerContainer}
//         className="py-20 px-4 md:px-8 bg-gray-50"
//       >
//         <motion.div variants={fadeInUp} className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
//             Ce que Disent Nos Clients
//           </h2>
//           <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
//             Découvrez les témoignages de ceux qui nous ont fait confiance
//           </p>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
//                 className="bg-white p-6 rounded-xl shadow-md"
//               >
//                 <div className="flex mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
//                   ))}
//                 </div>
//                 <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
//                 <div className="flex items-center">
//                   <div className="flex-shrink-0 mr-4">
//                     <div className="w-12 h-12 bg-[#e9f5f9] rounded-full flex items-center justify-center">
//                       <User className="w-6 h-6 text-[#143A4B]" />
//                     </div>
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-medium text-gray-900">{testimonial.name}</h4>
//                     <p className="text-sm text-[#6FB1C7]">{testimonial.role}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </motion.section>

//       {/* Section CTA */}
//       <motion.section
//         initial="hidden"
//         animate="visible"
//         variants={staggerContainer}
//         className="py-16 px-4 md:px-8 bg-gradient-to-br from-[#070a0b] via-[#143A4B] to-[#070a0b]"
//       >
//         <motion.div variants={fadeInUp} className="max-w-4xl mx-auto text-center">
//           <motion.h2
//             variants={fadeInUp}
//             className="text-3xl font-bold text-white mb-6"
//           >
//             Prêt à Concrétiser Votre Projet de Construction ?
//           </motion.h2>
//           <motion.p
//             variants={fadeInUp}
//             className="text-lg text-[#6FB1C7] mb-8 max-w-2xl mx-auto"
//           >
//             Notre équipe d'experts est prête à vous accompagner à chaque étape de votre chantier.
//           </motion.p>
//           <motion.div
//             variants={fadeInUp}
//           >
//             <Link href="/contact" className="bg-[#6FB1C7] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#5a96ab] transition duration-300 flex items-center mx-auto w-fit">
//               <MessageSquare className="mr-2 w-5 h-5" /> Nous Contacter
//             </Link>
//           </motion.div>
//         </motion.div>
//       </motion.section>
//     </div>
//   );
// };



import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  HardHat, Home, Mail, User, ChevronDown, ChevronLeft, ChevronRight,
  Star, CheckSquare, Shield, Calendar, Clock, Truck, Users, Clipboard, 
  Award, MessageSquare, FileCheck, Check
} from 'lucide-react';
import Navbar from '@/Components/Navbar';
import { Link } from '@inertiajs/react';

export default function Homea({ user }) {
  // États pour les éléments interactifs
  const [showFullProfile, setShowFullProfile] = useState(false);
  const [activeProjectCard, setActiveProjectCard] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);

  // Variants pour les animations Framer Motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
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

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  // Données pour la section de suivi de projet
  const projectSteps = [
    { 
      icon: <Calendar className="w-6 h-6 text-[#6FB1C7]" />, 
      title: "Planification", 
      description: "Organisation détaillée des phases de travail et allocation des ressources." 
    },
    { 
      icon: <Clipboard className="w-6 h-6 text-[#6FB1C7]" />, 
      title: "Suivi en temps réel", 
      description: "Tableau de bord interactif pour visualiser l'avancement du chantier." 
    },
    { 
      icon: <Users className="w-6 h-6 text-[#6FB1C7]" />, 
      title: "Gestion d'équipe", 
      description: "Coordination efficace des différents corps de métier impliqués." 
    },
    { 
      icon: <Clock className="w-6 h-6 text-[#6FB1C7]" />, 
      title: "Respect des délais", 
      description: "Système d'alerte pour anticiper les retards et ajuster la planification." 
    },
    { 
      icon: <Truck className="w-6 h-6 text-[#6FB1C7]" />, 
      title: "Logistique", 
      description: "Organisation des livraisons et gestion des stocks de matériaux." 
    }
  ];

  // Données pour les témoignages clients
  const testimonials = [
    {
      name: "AbdelAziz Hmidi ",
      role: "Promoteur immobilier",
      content: "La gestion de notre projet de résidence a été impeccable. L'équipe a su respecter les délais malgré les contraintes techniques.",
      rating: 5
    },
    {
      name: "Nabila Tazi ",
      role: "Architecte",
      content: "Une collaboration efficace et transparente. Le suivi en temps réel m'a permis de rester connecté à l'avancement du chantier.",
      rating: 5
    },
    {
      name: "Salim Alaoui",
      role: "Maître d'ouvrage",
      content: "Professionnalisme et réactivité. Un partenaire fiable pour tous nos projets de construction.",
      rating: 4
    }
  ];

  // Données pour les atouts clés
  const keyAssets = [
    { 
      icon: <CheckSquare className="w-8 h-8 text-[#6FB1C7]" />, 
      title: "Expertise", 
      description: "15+ années d'expérience dans la gestion de chantiers complexes" 
    },
    { 
      icon: <Shield className="w-8 h-8 text-[#6FB1C7]" />, 
      title: "Qualité", 
      description: "Standards rigoureux et contrôles réguliers à chaque étape" 
    },
    { 
      icon: <Award className="w-8 h-8 text-[#6FB1C7]" />, 
      title: "Innovation", 
      description: "Utilisation des dernières technologies pour optimiser les processus" 
    }
  ];

  // Données pour les étapes de construction (nouvelle version)
  const constructionSteps = [
    {
      title: "Conception Initiale",
      description: "Étude de faisabilité et plans architecturaux",
      details: "Notre équipe travaille avec vous pour définir  les plans définitifs du projet.",
      icon: <FileCheck className="w-10 h-10 text-[#6FB1C7]" />
    },
    {
      title: "Préparation du Site",
      description: "Terrassement et installation du chantier",
      details: "Nous préparons le terrain pour la construction avec le terrassement, l'installation des équipements de chantier. ",
      icon: <HardHat className="w-10 h-10 text-[#6FB1C7]" />
    },
    {
      title: "Construction",
      description: "Réalisation des travaux selon le planning",
      details: " Notre plateforme vous permet de suivre en temps réel l'avancement de chaque corps de métier.",
      icon: <Home className="w-10 h-10 text-[#6FB1C7]" />
    },
    {
      title: "Contrôle Qualité",
      description: "Vérification et validation des travaux",
      details: "Inspections rigoureuses à chaque étape clé pour garantir la conformité aux normes du projet. ",
      icon: <CheckSquare className="w-10 h-10 text-[#6FB1C7]" />
    },
    {
      title: "Livraison",
      description: "Remise des clés et documentation",
      details: "Livraison du projet clé en main avec tous les documents techniques nécessaires. ",
      icon: <Check className="w-10 h-10 text-[#6FB1C7]" />
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar user={user}/>
      
      {/* Hero Section améliorée */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="bg-[url('./KBIRA.jpeg')] py-20 h-[600px] bg-no-repeat bg-cover bg-center relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#070a0b]/90 via-[#143A4B]/90 to-transparent"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex flex-col justify-center items-start">
          <motion.h1
            variants={fadeInLeft}
            className="text-5xl md:text-6xl font-bold text-white mb-6 max-w-2xl leading-tight drop-shadow-lg"
          >
            Excellence et Précision dans la Gestion de vos Chantiers
          </motion.h1>
          <motion.p
            variants={fadeInLeft}
            className="text-xl md:text-2xl text-[#6FB1C7] max-w-xl mb-8 leading-relaxed drop-shadow-md"
          >
            Des solutions innovantes pour transformer vos projets en réalisations exceptionnelles, dans les délais et le respect du budget.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link 
              href={route("register")} 
              className="bg-[#143A4B] hover:bg-[#1a4d63] text-white px-8 py-3 rounded-lg font-semibold transition duration-300 flex items-center shadow-lg"
            >
              Inscription <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </motion.header>

      {/* Nouvelle Section Étapes Clés avec effet hover amélioré */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="py-20 px-4 md:px-8 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center text-[#143A4B] mb-4">
            Les Étapes Clés d'un Chantier
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            De la conception initiale à la livraison finale, nous assurons un suivi méticuleux de chaque phase de votre projet.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {constructionSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative h-64"
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Carte avant (icône seulement) */}
                <motion.div
                  className={`absolute inset-0 bg-white rounded-xl shadow-md flex items-center justify-center transition-all duration-200 ${
                    hoveredStep === index ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
                  }`}
                  initial={{ opacity: 1 }}
                  animate={{
                    opacity: hoveredStep === index ? 0 : 1,
                    scale: hoveredStep === index ? 0.9 : 1
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-4 text-center">
                    <div className="bg-[#6FB1C7] bg-opacity-10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-[#143A4B]">{step.title}</h3>
                  </div>
                </motion.div>

                {/* Carte arrière (détails) */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br from-[#143A4B] to-[#0f2d38] rounded-xl shadow-lg p-6 text-white overflow-hidden ${
                    hoveredStep === index ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredStep === index ? 1 : 0,
                    scale: hoveredStep === index ? 1 : 0.9
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">{step.description}</p>
                  <p className="text-sm">{step.details}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section Suivi de Projet (originale) */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="py-20 px-4 md:px-8 bg-gradient-to-br from-[#143A4B] via-[#143A4B] to-[#070a0b]"
      >
        <motion.div variants={fadeInUp} className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-4">
            Suivi Intégral de Votre Projet
          </h2>
          <p className="text-center text-[#6FB1C7] mb-16 max-w-3xl mx-auto">
            Notre plateforme vous donne accès à tous les aspects de la gestion de votre chantier
          </p>
          
          <div className="relative">
            <div className="flex overflow-x-auto pb-8 hide-scrollbar snap-x">
              <div className="flex gap-6">
                {projectSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className={`snap-center flex-shrink-0 w-80 p-6 rounded-xl shadow-lg cursor-pointer transition-all duration-300 ${activeProjectCard === index ? 'bg-[#6FB1C7] transform scale-105' : 'bg-white'}`}
                    onClick={() => setActiveProjectCard(index)}
                  >
                    <div className="flex items-start mb-4">
                      <div className={`rounded-full p-3 mr-4 ${activeProjectCard === index ? 'bg-white' : 'bg-[#e9f5f9]'}`}>
                        {step.icon}
                      </div>
                      <div>
                        <h3 className={`text-xl font-semibold mb-2 ${activeProjectCard === index ? 'text-white' : 'text-gray-900'}`}>
                          {step.title}
                        </h3>
                        <p className={activeProjectCard === index ? 'text-gray-100' : 'text-gray-600'}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                    <div className={`mt-4 pt-4 ${activeProjectCard === index ? 'border-t border-white/30' : 'border-t border-gray-200'}`}>
                      <a 
                        href="https://bmap.fr" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`flex items-center text-sm font-medium ${activeProjectCard === index ? 'text-white' : 'text-[#143A4B]'}`}
                      >
                        En savoir plus <ChevronRight className="ml-1 w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Section Profil Chef de Chantier (originale) */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="py-20 px-4 md:px-8 bg-gray-50"
      >
        <motion.div variants={fadeInUp} className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Notre Équipe d'Experts
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Des professionnels qualifiés pour vous accompagner à chaque étape de votre chantier
          </p>
          
          <motion.div
            variants={fadeInUp}
            className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center">
                <img
                  src="./chef3.jpeg"
                  alt="Chef de Chantier"
                  className="w-20 h-20 rounded-full mr-6"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Mohamed Hmidi</h3>
                  <p className="text-[#6FB1C7] font-medium">Chef de Chantier</p>
                </div>
              </div>
              
              {showFullProfile && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 pt-6 border-t border-gray-200"
                >
                  <p className="text-gray-600 mb-4">
                    Expert en gestion de chantier avec plus de 15 ans d'expérience, Mohamed Hmidi est spécialisé dans la coordination de projets complexes et la gestion d'équipes multidisciplinaires.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <Check className="w-5 h-5 text-[#143A4B] mr-2" /> Certifié en gestion de chantiers écologiques
                    </li>
                    <li className="flex items-center text-gray-600">
                      <Check className="w-5 h-5 text-[#143A4B] mr-2" /> Expert en optimisation des ressources
                    </li>
                    <li className="flex items-center text-gray-600">
                      <Check className="w-5 h-5 text-[#143A4B] mr-2" /> Formé aux dernières normes de sécurité
                    </li>
                  </ul>
                </motion.div>
              )}
              
              <button 
                onClick={() => setShowFullProfile(!showFullProfile)}
                className="mt-4 text-[#143A4B] font-medium flex items-center hover:text-[#6FB1C7] transition-colors duration-300"
              >
                {showFullProfile ? 'Réduire' : 'Plus de détails'}
                <ChevronDown className={`ml-1 w-5 h-5 transition-transform duration-300 ${showFullProfile ? 'transform rotate-180' : ''}`} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Section Atouts Clés (originale) */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="py-20 px-4 md:px-8 bg-[#6FB1C7]"
      >
        <motion.div variants={fadeInUp} className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-4">
            Nos Atouts pour Votre Satisfaction
          </h2>
          <p className="text-center text-white/80 mb-12 max-w-3xl mx-auto">
            Des engagements concrets pour garantir la réussite de votre projet
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyAssets.map((asset, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-md text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#e9f5f9] mb-6">
                  {asset.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{asset.title}</h3>
                <p className="text-gray-600">{asset.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Section Témoignages (originale) */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="py-20 px-4 md:px-8 bg-gray-50"
      >
        <motion.div variants={fadeInUp} className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Ce que Disent Nos Clients
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Découvrez les témoignages de ceux qui nous ont fait confiance
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-[#e9f5f9] rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-[#143A4B]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-[#6FB1C7]">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Section CTA (originale) */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="py-16 px-4 md:px-8 bg-gradient-to-br from-[#070a0b] via-[#143A4B] to-[#070a0b]"
      >
        <motion.div variants={fadeInUp} className="max-w-4xl mx-auto text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-white mb-6"
          >
            Prêt à Concrétiser Votre Projet de Construction ?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-[#6FB1C7] mb-8 max-w-2xl mx-auto"
          >
            Notre équipe d'experts est prête à vous accompagner à chaque étape de votre chantier.
          </motion.p>
          <motion.div
            variants={fadeInUp}
          >
            <Link href="/contact" className="bg-[#6FB1C7] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#5a96ab] transition duration-300 flex items-center mx-auto w-fit">
              <MessageSquare className="mr-2 w-5 h-5" /> Nous Contacter
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};