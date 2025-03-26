// import { Link } from '@inertiajs/react'
// import React from 'react'
// import { FilePlus, Edit, Trash2, BookOpen } from 'lucide-react'; // Importez BookOpen
// import { Shield } from 'lucide-react'; // Ajoutez cette ligne


// const ProjetNavbar = ({id}) => {
//   return (
//     <div className='h-12 flex items-center space-x-4 text-white px-2 bg-sky-400'>
//        {/* <Link href={route('resources.index', { id})} className="text-white hover:text-blue-600">
//    Ressources
// </Link> */}

// <Link href={route('security.index')} className="text-white hover:text-blue-600 flex items-center space-x-2">
                       
//                         <span>Page Sécuritè</span>
//                     </Link>
//                     <Link href={route('tasks.index', { id})} className="text-white hover:text-blue-600">
//     Tasks
// </Link>


// <Link href={route('construction-steps.index', { projectId: id })} className="text-white hover:text-blue-600">
//    Mode de Paiement
// </Link>

 

//     </div>
//   )
// }

// export default ProjetNavbar


// import { Link } from '@inertiajs/react';
// import React from 'react';
// import { FilePlus, Edit, Trash2, BookOpen } from 'lucide-react'; // Importez BookOpen
// import { Shield } from 'lucide-react'; // Ajoutez cette ligne

// const ProjetNavbar = ({ id }) => {
//     return (
//         <div className='h-12 flex items-center space-x-4 text-white px-2 bg-sky-400'>
//             {/* <Link href={route('resources.index', { id })} className="text-white hover:text-blue-600">
//                 Ressources
//             </Link> */}


//             <Link href={route('tasks.index', { id })} className="text-white hover:text-blue-600">
//                 Tasks
//             </Link>

//             <Link href={route('construction-steps.index', { projectId: id })} className="text-white hover:text-blue-600">
//                 Mode de Paiement
//             </Link>
//         </div>
//     );
// };

// export default ProjetNavbar;



// import { Link } from '@inertiajs/react';
// import React, { useState } from 'react';
// import { Menu, X, FilePlus, Edit, Trash2, BookOpen, Shield } from 'lucide-react'; // Importez les icônes nécessaires
// import { motion, AnimatePresence } from 'framer-motion'; // Pour les animations du menu

// const ProjetNavbar = ({ id }) => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false); // Gère l'état du menu

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen); // Bascule l'état du menu
//     };

//     return (
//         <>
//             {/* Barre de navigation horizontale pour les grands écrans */}
//             <div className="h-12 flex items-center justify-between bg-sky-400 px-4">
//                 {/* Icônes de navigation horizontale */}
//                 <div className="flex items-center space-x-4">
//                     <Link href={route('tasks.index', { id })} className="text-white hover:text-blue-600 flex items-center space-x-2">
//                         <FilePlus className="w-5 h-5" />
//                         <span>Tasks</span>
//                     </Link>

//                     <Link href={route('construction-steps.index', { projectId: id })} className="text-white hover:text-blue-600 flex items-center space-x-2">
//                         <BookOpen className="w-5 h-5" />
//                         <span>Mode de Paiement</span>
//                     </Link>

                    
//                 </div>

//                 {/* Bouton pour ouvrir/fermer le menu (visible uniquement sur mobile) */}
//                 <button
//                     onClick={toggleMenu}
//                     className="md:hidden p-2 bg-black text-white rounded-lg focus:outline-none"
//                 >
//                     {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//                 </button>
//             </div>

//             {/* Menu latéral animé pour mobile */}
//             <AnimatePresence>
//                 {isMenuOpen && (
//                     <motion.nav
//                         initial={{ x: '-100%' }}
//                         animate={{ x: 0 }}
//                         exit={{ x: '-100%' }}
//                         transition={{ type: 'tween', duration: 0.3 }}
//                         className="fixed top-0 left-0 h-screen w-64 bg-sky-400 text-white p-6 shadow-lg z-40 md:hidden"
//                     >
//                         <div className="flex flex-col space-y-4">
//                             <h2 className="text-xl font-bold mb-4">🛠️ Mon Projet</h2>

//                             {/* Liens de navigation pour mobile */}
//                             <Link
//                                 href={route('tasks.index', { id })}
//                                 className="hover:text-blue-600 transition duration-300 flex items-center space-x-2"
//                             >
//                                 <FilePlus className="w-5 h-5" />
//                                 <span>Tasks</span>
//                             </Link>

//                             <Link
//                                 href={route('construction-steps.index', { projectId: id })}
//                                 className="hover:text-blue-600 transition duration-300 flex items-center space-x-2"
//                             >
//                                 <BookOpen className="w-5 h-5" />
//                                 <span>Mode de Paiement</span>
//                             </Link>

                            
//                         </div>
//                     </motion.nav>
//                 )}
//             </AnimatePresence>
//         </>
//     );
// };

// export default ProjetNavbar;