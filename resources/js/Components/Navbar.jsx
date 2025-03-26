// import { Link } from "@inertiajs/react";

// export default function Navbar({user}) {
//     return (
//         <nav style={styles.navbar}>
//             <div style={styles.logo}> 
//                 <h2>🛠️ Mon Chantier</h2>
//             </div>
//             <div style={styles.links}> {/* Liens à droite */}
//                 <Link href={route("home")} style={styles.link}>Home</Link>
//                 <Link href={route("contact")} style={styles.link}>Contact</Link>
//                 {!user ?(<>
//                 <Link href={route("login")} style={styles.link}>Connexion</Link>
//                 <Link href={route("register")} style={styles.link}>Inscription</Link></>):(<>
//                 <Link href={route("logout")} style={styles.link}>Deconnexion</Link></>)}

//             </div>
//         </nav>
//     );
// }


//navbar avec taylwind &menu 
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { Menu, X } from 'lucide-react'; // Import des icônes de menu

export default function Navbar({ user }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Bouton pour ouvrir/fermer le menu */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 left-4 z-50 p-2 bg-black text-white rounded-lg shadow-lg focus:outline-none"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Menu latéral animé */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 left-0 h-screen w-64 bg-black text-white p-6 shadow-lg z-40"
          >
            <div className="flex flex-col space-y-4">
              <h2 className="text-xl font-bold mb-4">🛠️ Mon Chantier</h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link href={route("home")} className="hover:text-gray-400 transition duration-300">
                  Home
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link href={route("contact")} className="hover:text-gray-400 transition duration-300">
                  Contact
                </Link>
              </motion.div>
              {!user ? (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link href={route("login")} className="hover:text-gray-400 transition duration-300">
                      Connexion
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Link href={route("register")} className="hover:text-gray-400 transition duration-300">
                      Inscription
                    </Link>
                  </motion.div>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link href={route("logout")} className="hover:text-gray-400 transition duration-300">
                    Déconnexion
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}






const styles = {
    navbar: {
        backgroundColor: "black",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between", // Sépare logo et liens
        alignItems: "center",
        // borderRadius: "10px",
        width: "100%",
    },
    logo: {
        fontSize: "22px",
        fontWeight: "bold",
        color: "white",
    },
    links: {
        display: "flex",
        gap: "20px", // Ajoute de l'espace entre les liens
    },
    link: {
        color: "white",
        textDecoration: "none",
        fontSize: "18px",
        fontWeight: "bold",
        padding: "10px 15px",
        borderRadius: "5px",
        transition: "0.3s",
    },
};




// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Home, Mail, User, LogOut, Menu, X, HardHat, PlusSquare } from 'lucide-react';
// import { Link } from '@inertiajs/react';

// const Navbar = ({ user }) => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <>
//     <motion.nav
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="fixed top-0 left-0 w-full bg-[#FF8C00] shadow-lg text-white font-semibold text-lg z-50"
//     >
//       <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           <HardHat className="w-6 h-6" />
//           <span className="text-xl font-bold">ChantierPro</span>
//         </div>

//         <div className="hidden md:flex items-center space-x-8">
//           <Link href="/" className="flex items-center hover:text-gray-300 transition duration-300">
//             <Home className="w-5 h-5 mr-2" />
//             Accueil
//           </Link>
//           <Link href="/contact" className="flex items-center hover:text-gray-300 transition duration-300">
//             <Mail className="w-5 h-5 mr-2" />
//             Contact
//           </Link>
//           {!user ?(<>
//               <Link
//                 href={route("logout")}
//                 className="flex items-center hover:text-gray-300 transition duration-300"
//               >
//                 <LogOut className="w-5 h-5 mr-2" />
//                 Déconnexion
//               </Link>
//             </>
//           ) : (
//             <>
//               <Link href="/login" className="flex items-center hover:text-gray-300 transition duration-300">
//                 <User className="w-5 h-5 mr-2" />
//                 Connexion
//               </Link>
//               <Link href="/register" className="flex items-center hover:text-gray-300 transition duration-300">
//               <PlusSquare className="w-5 h-5 mr-2"/>
//                 Inscription
//               </Link>
//             </>
//           )}
//         </div>





        

//         {/* tilifoune hhhh */}
//         <button onClick={toggleMobileMenu} className="md:hidden p-2">
//           {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>
//       </div>

//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ x: '-100%' }}
//             animate={{ x: 0 }}
//             exit={{ x: '-100%' }}
//             transition={{ type: 'tween', duration: 0.3 }}
//             className="md:hidden bg-orange-500 shadow-lg fixed top-16 left-0 w-full h-full p-4"
//           >
//             <div className="flex flex-col space-y-4">
//               <Link href="/" className="flex items-center hover:text-gray-300 transition duration-300">
//                 <Home className="w-5 h-5 mr-2" />
//                 Accueil
//               </Link>
//               <Link href="/contact" className="flex items-center hover:text-gray-300 transition duration-300">
//                 <Mail className="w-5 h-5 mr-2" />
//                 Contact
//               </Link>
//               {user ? (
//                 <>
//                   <Link
//                     href="/logout"
//                     method="post"
//                     className="flex items-center hover:text-gray-300 transition duration-300"
//                   >
//                     <LogOut className="w-5 h-5 mr-2" />
//                     Déconnexion
//                   </Link>
//                 </>
//               ) : (
//                 <>
//                   <Link href="/login" className="flex items-center hover:text-gray-300 transition duration-300">
//                     <User className="w-5 h-5 mr-2" />
//                     Connexion
//                   </Link>
//                   <Link href="/register" className="flex items-center hover:text-gray-300 transition duration-300">
//                     Inscription
//                   </Link>
//                 </>
//               )}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//       <div className='h-7'></div>
//       </>
//   );
// };

// export default Navbar;