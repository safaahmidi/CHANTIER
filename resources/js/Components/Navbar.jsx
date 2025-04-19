


// //navbar avec taylwind &menu 
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from '@inertiajs/react';
// import { Menu, X } from 'lucide-react'; // Import des icônes de menu

// export default function Navbar({ user }) {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//       {/* Bouton pour ouvrir/fermer le menu */}
//       <button
//         onClick={toggleMenu}
//         className="fixed top-4 left-4 z-50 p-2 bg-black text-white rounded-lg shadow-lg focus:outline-none"
//       >
//         {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//       </button>

//       {/* Menu latéral animé */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.nav
//             initial={{ x: '-100%' }}
//             animate={{ x: 0 }}
//             exit={{ x: '-100%' }}
//             transition={{ type: 'tween', duration: 0.3 }}
//             className="fixed top-0 left-0 h-screen w-64 bg-black text-white p-6 shadow-lg z-40"
//           >
//             <div className="flex flex-col space-y-4">
//               <h2 className="text-xl font-bold mb-4">🛠️ Mon Chantier</h2>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 }}
//               >
//                 <Link href={route("home")} className="hover:text-gray-400 transition duration-300">
//                   Home
//                 </Link>
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 <Link href={route("contact")} className="hover:text-gray-400 transition duration-300">
//                   Contact
//                 </Link>
//               </motion.div>
//               {!user ? (
//                 <>
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.3 }}
//                   >
//                     <Link href={route("login")} className="hover:text-gray-400 transition duration-300">
//                       Connexion
//                     </Link>
//                   </motion.div>
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.4 }}
//                   >
//                     <Link href={route("register")} className="hover:text-gray-400 transition duration-300">
//                       Inscription
//                     </Link>
//                   </motion.div>
//                 </>
//               ) : (
//                 <>
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3 }}
//                   className=' '
//                 >
//                   <Link href={route("logout")} method='post' className="hover:text-gray-400 transition duration-300">
//                     Déconnexion
//                   </Link>
                  
//                 </motion.div>
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3 }}
//                   className=' '
//                 >
//                   <Link href={route("dashboard")} method='get' className="hover:text-gray-400 transition duration-300">
//                     Dashboard
//                   </Link>
                  
//                 </motion.div>
                
//                 </>
//               )}
//             </div>
//           </motion.nav>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }






// const styles = {
//     navbar: {
//         backgroundColor: "black",
//         padding: "15px 30px",
//         display: "flex",
//         justifyContent: "space-between", // Sépare logo et liens
//         alignItems: "center",
//         // borderRadius: "10px",
//         width: "100%",
//     },
//     logo: {
//         fontSize: "22px",
//         fontWeight: "bold",
//         color: "white",
//     },
//     links: {
//         display: "flex",
//         gap: "20px", // Ajoute de l'espace entre les liens
//     },
//     link: {
//         color: "white",
//         textDecoration: "none",
//         fontSize: "18px",
//         fontWeight: "bold",
//         padding: "10px 15px",
//         borderRadius: "5px",
//         transition: "0.3s",
//     },
// };








import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { Menu, X, ChevronRight, Home, Mail, UserPlus, LogIn, LogOut, LayoutDashboard } from 'lucide-react';

export default function Navbar({ user }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Accueil", route: "home", icon: <Home className="w-5 h-5" /> },
    { name: "Contact", route: "contact", icon: <Mail className="w-5 h-5" /> },
  ];

  const authLinks = user
    ? [
        { name: "Tableau de bord", route: "dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
        { name: "Déconnexion", route: "logout", icon: <LogOut className="w-5 h-5" />, method: "post" }
      ]
    : [
        { name: "Connexion", route: "login", icon: <LogIn className="w-5 h-5" /> },
        { name: "Inscription", route: "register", icon: <UserPlus className="w-5 h-5" /> }
      ];

  return (
    <>
      {/* Bouton menu amélioré */}
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-50 p-3 bg-gradient-to-r from-[#6FB1C7] to-[#143A4B] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Menu latéral avec logo */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="fixed top-0 right-0 h-screen w-80 bg-gradient-to-b from-[#6FB1C7] via-[#143A4B] to-[#070a0b] text-white p-6 shadow-2xl z-40 rounded-l-3xl overflow-hidden"
          >
            <div className="flex flex-col h-full">
              {/* En-tête avec logo */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center mb-8"
              >
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/10 mr-3">
                  <img 
                    src="./logobuild.jpeg" 
                    alt="Logo" 
                    className="w-10 h-10 object-contain p-1"
                  />
                </div>
                <h2 className="text-2xl font-bold text-white drop-shadow-md">
                  Mon Chantier
                </h2>
              </motion.div>

              {/* Navigation principale */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex-1 space-y-3"
              >
                {navLinks.map((link) => (
                  <Link 
                    key={link.name}
                    href={route(link.route)}
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="flex items-center">
                      <span className="mr-3 text-[#6FB1C7]">{link.icon}</span>
                      <span className="font-medium">{link.name}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}

                {/* Séparateur */}
                <div className="border-t border-white/10 my-4"></div>

                {/* Navigation authentification */}
                {authLinks.map((link) => (
                  <Link 
                    key={link.name}
                    href={route(link.route)}
                    method={link.method || 'get'}
                    className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 group ${
                      link.name === 'Inscription' 
                        ? 'bg-[#143A4B]/80 hover:bg-[#143A4B]' 
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="mr-3 text-[#6FB1C7]">{link.icon}</span>
                      <span className="font-medium">{link.name}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </motion.div>

              {/* Pied de page */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center text-sm text-[#6FB1C7]/70 pb-4"
              >
                © {new Date().getFullYear()} Mon Chantier - Tous droits réservés
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}