// import { useForm, usePage } from '@inertiajs/react';
// import Navbar from "@/Components/Navbar";

// export default function Contact({user}) {
//     const { data, setData, post, processing, errors, reset } = useForm({
//         name: '',
//         email: '',
//         message: ''
//     });

//     const { success } = usePage().props; // Récupérer le message de succès

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         post('/contact/send', {
//             preserveScroll: true, // Empêche le rechargement de la page
//             onSuccess: () => reset(), // Réinitialise le formulaire après succès
//         });
//     };

//     return (
//         <div>
//             <Navbar user={user} />
//             <h1 style={styles.title}>Contactez-nous</h1>
//             <div style={styles.container}>
//                 {/* Message de succès */}
//                 {success && <div style={styles.successMessage}>{success}</div>}

//                 <form onSubmit={handleSubmit}>
//                     {/* Affichage des erreurs */}
//                     {errors.name && <div style={styles.errorMessage}>{errors.name}</div>}
//                     <input
//                         type="text"
//                         placeholder="Votre nom"
//                         value={data.name}
//                         onChange={(e) => setData('name', e.target.value)}
//                         style={styles.input}
//                     />

//                     {errors.email && <div style={styles.errorMessage}>{errors.email}</div>}
//                     <input
//                         type="email"
//                         placeholder="Votre email"
//                         value={data.email}
//                         onChange={(e) => setData('email', e.target.value)}
//                         style={styles.input}
//                     />

//                     {errors.message && <div style={styles.errorMessage}>{errors.message}</div>}
//                     <textarea
//                         placeholder="Votre message"
//                         value={data.message}
//                         onChange={(e) => setData('message', e.target.value)}
//                         style={styles.input}
//                     ></textarea>

//                     <button type="submit" style={styles.button} disabled={processing}>
//                         {processing ? 'Envoi...' : 'Envoyer'}
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// // Styles CSS en JS
// const styles = {
//     title: {
//         fontSize: "3em",
//         fontWeight: "bold",
//         marginBottom: "20px",
//         color: "black",
//     },
//     container: {
//         backgroundColor: "#333",
//         padding: "20px",
//         borderRadius: "10px",
//         maxWidth: "800px",
//         margin: "20px auto",
//         textAlign: "center",
//     },
//     input: {
//         width: "100%",
//         padding: "10px",
//         margin: "10px 0",
//         borderRadius: "5px",
//         border: "1px solid #555",
//         fontSize: "16px",
//         backgroundColor: "#444",
//         color: "white",
//     },
//     button: {
//         backgroundColor: "#FF8C00",
//         color: "white",
//         padding: "10px 20px",
//         borderRadius: "5px",
//         fontSize: "18px",
//         fontWeight: "bold",
//         border: "none",
//         cursor: "pointer",
//         transition: "0.3s",
//     },
//     successMessage: {
//         color: 'green',
//         marginBottom: '20px',
//         fontSize: '1.2em',
//         fontWeight: 'bold',
//     },
//     errorMessage: {
//         color: 'red',
//         marginBottom: '10px',
//         fontSize: '1em',
//     }
// };

// import React from "react";

// const Contact = () => {
//   return (
//     <div className="bg-yellow-500 min-h-screen flex items-center justify-center p-4">
//       <div className="bg-orange-500 p-6 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-white text-2xl font-bold mb-4 text-center">Contactez-nous</h2>
//         <form>
//           <div className="mb-4">
//             <label className="block text-white font-bold mb-2" htmlFor="name">
//               Nom
//             </label>
//             <input
//               type="text"
//               id="name"
//               className="w-full p-2 border rounded bg-white text-black focus:outline-none"
//               placeholder="Votre nom"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-white font-bold mb-2" htmlFor="email">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="w-full p-2 border rounded bg-white text-black focus:outline-none"
//               placeholder="Votre email"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-white font-bold mb-2" htmlFor="message">
//               Message
//             </label>
//             <textarea
//               id="message"
//               className="w-full p-2 border rounded bg-white text-black focus:outline-none"
//               rows="4"
//               placeholder="Votre message"
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800"
//           >
//             Envoyer
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;




// import React from "react";
// import { motion } from "framer-motion";
// import { Mail, User, MessageSquare } from "lucide-react";

// const Contact = () => {
//   return (
//     <div className="bg-gray-200 min-h-screen flex items-center justify-center p-4">
//       <motion.div
//         className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h2 className="text-black text-2xl font-bold mb-4 text-center">
//           Contactez-nous
//         </h2>
//         <form>
//           {/* Champ Nom */}
//           <motion.div
//             className="mb-4"
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//           >
//             <label className="block text-black font-bold mb-2" htmlFor="name">
//               Nom
//             </label>
//             <div className="flex items-center border border-black rounded bg-yellow-300 p-2">
//               <User className="text-orange-500 mr-2" />
//               <input
//                 type="text"
//                 id="name"
//                 className="w-full bg-transparent text-black focus:outline-none"
//                 placeholder="Entrez votre nom"
//               />
//             </div>
//           </motion.div>

//           {/* Champ Email */}
//           <motion.div
//             className="mb-4"
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.3, duration: 0.5 }}
//           >
//             <label className="block text-black font-bold mb-2" htmlFor="email">
//               Email
//             </label>
//             <div className="flex items-center border border-black rounded bg-yellow-300 p-2">
//               <Mail className="text-orange-500 mr-2" />
//               <input
//                 type="email"
//                 id="email"
//                 className="w-full bg-transparent text-black focus:outline-none"
//                 placeholder="Entrez votre email"
//               />
//             </div>
//           </motion.div>

//           {/* Champ Message */}
//           <motion.div
//             className="mb-4"
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.4, duration: 0.5 }}
//           >
//             <label className="block text-black font-bold mb-2" htmlFor="message">
//               Message
//             </label>
//             <div className="flex items-start border border-black rounded bg-yellow-300 p-2">
//               <MessageSquare className="text-orange-500 mr-2 mt-1" />
//               <textarea
//                 id="message"
//                 className="w-full bg-transparent text-black focus:outline-none"
//                 rows="4"
//                 placeholder="Écrivez votre message ici"
//               ></textarea>
//             </div>
//           </motion.div>

//           {/* Bouton d'envoi */}
//           <motion.button
//             type="submit"
//             className="w-full bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Envoyer
//           </motion.button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default Contact;


// import React from "react";
// import { motion } from "framer-motion";
// import { Mail, User, MessageSquare } from "lucide-react";

// const Contact = () => {
//   return (
//     <div className="bg-gray-200 min-h-screen flex items-center justify-center p-4">
//       <motion.div
//         className="bg-orange-500 p-6 rounded-lg shadow-lg w-full max-w-md"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h2 className="text-black text-2xl font-bold mb-4 text-center">
//           Contactez-nous
//         </h2>
//         <form>
//           {/* Champ Nom */}
//           <motion.div
//             className="mb-4"
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//           >
//             <label className="block text-black font-bold mb-2" htmlFor="name">
//               Nom
//             </label>
//             <div className="flex items-center border border-black rounded bg-yellow-300 p-2">
//               <User className="text-gray-700 mr-2" />
//               <input
//                 type="text"
//                 id="name"
//                 className="w-full bg-transparent text-black focus:outline-none"
//                 placeholder="Entrez votre nom"
//               />
//             </div>
//           </motion.div>

//           {/* Champ Email */}
//           <motion.div
//             className="mb-4"
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.3, duration: 0.5 }}
//           >
//             <label className="block text-black font-bold mb-2" htmlFor="email">
//               Email
//             </label>
//             <div className="flex items-center border border-black rounded bg-yellow-300 p-2">
//               <Mail className="text-gray-700 mr-2" />
//               <input
//                 type="email"
//                 id="email"
//                 className="w-full bg-transparent text-black focus:outline-none"
//                 placeholder="Entrez votre email"
//               />
//             </div>
//           </motion.div>

//           {/* Champ Message */}
//           <motion.div
//             className="mb-4"
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.4, duration: 0.5 }}
//           >
//             <label className="block text-black font-bold mb-2" htmlFor="message">
//               Message
//             </label>
//             <div className="flex items-start border border-black rounded bg-yellow-300 p-2">
//               <MessageSquare className="text-gray-700 mr-2 mt-1" />
//               <textarea
//                 id="message"
//                 className="w-full bg-transparent text-black focus:outline-none"
//                 rows="4"
//                 placeholder="Écrivez votre message ici"
//               ></textarea>
//             </div>
//           </motion.div>

//           {/* Bouton d'envoi */}
//           <motion.button
//             type="submit"
//             className="w-full bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Envoyer
//           </motion.button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default Contact;

// import React from "react";
// import { motion } from "framer-motion";
// import { Mail, User, MessageSquare } from "lucide-react";

// const Contact = () => {
//   return (
//     <div className="bg-yellow-300 min-h-screen flex items-center justify-center p-6">
//       <motion.div
//         className="bg-white border border-gray-400 p-8 rounded-xl shadow-2xl w-full max-w-lg"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h2 className="text-black text-3xl font-semibold mb-6 text-center">
//           Contactez-nous
//         </h2>
//         <form>
//           {/* Champ Nom */}
//           <motion.div
//             className="mb-6"
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//           >
//             <label className="block text-black font-medium mb-2" htmlFor="name">
//               Nom
//             </label>
//             <div className="flex items-center border border-black rounded-lg bg-gray-300 p-3">
//               <User className="text-black mr-3" />
//               <input
//                 type="text"
//                 id="name"
//                 className="w-full bg-transparent text-black placeholder-black focus:outline-none"
//                 placeholder="Entrez votre nom"
//               />
//             </div>
//           </motion.div>

//           {/* Champ Email */}
//           <motion.div
//             className="mb-6"
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.3, duration: 0.5 }}
//           >
//             <label className="block text-black font-medium mb-2" htmlFor="email">
//               Email
//             </label>
//             <div className="flex items-center border border-black rounded-lg bg-gray-300 p-3">
//               <Mail className="text-black mr-3" />
//               <input
//                 type="email"
//                 id="email"
//                 className="w-full bg-transparent text-black placeholder-black focus:outline-none"
//                 placeholder="Entrez votre email"
//               />
//             </div>
//           </motion.div>

//           {/* Champ Message */}
//           <motion.div
//             className="mb-6"
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.4, duration: 0.5 }}
//           >
//             <label className="block text-black font-medium mb-2" htmlFor="message">
//               Message
//             </label>
//             <div className="flex items-start border border-black rounded-lg bg-gray-300 p-3">
//               <MessageSquare className="text-black mr-3 mt-1" />
//               <textarea
//                 id="message"
//                 className="w-full bg-transparent text-black placeholder-black focus:outline-none"
//                 rows="4"
//                 placeholder="Écrivez votre message ici"
//               ></textarea>
//             </div>
//           </motion.div>

//           {/* Bouton d'envoi */}
//           <motion.button
//             type="submit"
//             className="w-full bg-gray-300 text-black font-bold py-3 px-4 rounded-lg hover:bg-gray-400 transition"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Envoyer
//           </motion.button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default Contact;


// import React from 'react';
// import { motion } from 'framer-motion';
// import { useForm, usePage } from '@inertiajs/react'; // Vérifiez si usePage est bien importé

// export default function Contact({ user }) {
//   const { flash } = usePage().props;  // Vérifiez que flash est bien passé dans les props
//   const { data, setData, post, processing, reset, errors } = useForm({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     post(route('contact.send'), {
//       onSuccess: () => reset(),
//     });
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       {/* Enlever Navbar si vous ne voulez pas l'utiliser */}

//       {/* Header */}
//       <motion.header
//         initial="hidden"
//         animate="visible"
//         variants={{
//           hidden: { opacity: 0, y: 20 },
//           visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//         }}
//         className="bg-[#FFD700] py-20 text-center"
//       >
//         <motion.h1
//           variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
//           className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
//         >
//           Contactez-nous
//         </motion.h1>
//         <motion.p
//           variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
//           className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
//         >
//           Nous sommes là pour vous aider ! Envoyez-nous un message.
//         </motion.p>
//       </motion.header>

//       {/* Formulaire de Contact */}
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={{
//           hidden: { opacity: 0, y: 20 },
//           visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//         }}
//         className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md"
//       >
//         {/* Vérification de flash.success pour éviter l'erreur */}
//         {flash && flash.success && (
//           <div className="mb-6 p-4 bg-green-500 text-white rounded-md">
//             {flash.success}
//           </div>
//         )}
//         <form onSubmit={handleSubmit}>
//           {/* Champs du formulaire */}
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-gray-700">Nom</label>
//             <input
//               type="text"
//               id="name"
//               className="w-full p-2 mt-1 border border-gray-300 rounded-md"
//               value={data.name}
//               onChange={(e) => setData('name', e.target.value)}
//             />
//             {errors.name && <span className="text-red-500">{errors.name}</span>}
//           </div>
          
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               id="email"
//               className="w-full p-2 mt-1 border border-gray-300 rounded-md"
//               value={data.email}
//               onChange={(e) => setData('email', e.target.value)}
//             />
//             {errors.email && <span className="text-red-500">{errors.email}</span>}
//           </div>

//           <div className="mb-4">
//             <label htmlFor="message" className="block text-gray-700">Message</label>
//             <textarea
//               id="message"
//               className="w-full p-2 mt-1 border border-gray-300 rounded-md"
//               value={data.message}
//               onChange={(e) => setData('message', e.target.value)}
//             />
//             {errors.message && <span className="text-red-500">{errors.message}</span>}
//           </div>

//           <button
//             type="submit"
//             disabled={processing}
//             className="w-full bg-blue-500 text-white p-3 rounded-md"
//           >
//             {processing ? 'Envoi en cours...' : 'Envoyer'}
//           </button>
//         </form>
//       </motion.div>
//     </div>
//   );
// }



/// code  awal wa akhir

// import React, { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { useForm, usePage } from '@inertiajs/react'; // Vérifiez si Inertia.js est bien installé
// import toast, { Toaster } from 'react-hot-toast';



// export default function Contact({ user  }) {
//   const { flash } = usePage().props;  // Récupère le message flash depuis Inertia.js
//   const { data, setData, post, processing, reset, errors } = useForm({
//     name: '',
//     email: '',
//     message: '',

//   });



//   // useEffect(()=>{
//   //   if (message) {
//   //   toast.success(message)
//   //   }
//   //   }, [])

//   const { props } = usePage();

//     useEffect(() => {
//         if (props.flash?.message) {
//             toast.success(props.flash.message);
//         }
//     }, [props.flash?.message]);

//   // Soumission du formulaire
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     post(route('contact.send'), {
//       onSuccess: () => reset(),  // Réinitialiser les champs après un envoi réussi
//     });
//   };

//   return (
    
//     <div className="bg-gray-100 min-h-screen">
//       <Toaster />
//       {/* En-tête de la page */}
//       <motion.header
//         initial="hidden"
//         animate="visible"
//         variants={{
//           hidden: { opacity: 0, y: 20 },
//           visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//         }}
//         className="bg-[#bdbdb9] py-20 text-center"
//       >
//         <motion.h1
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//           }}
//           className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
//         >
//           Contactez-nous
//         </motion.h1>
//         <motion.p
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//           }}
//           className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
//         >
//           Nous sommes là pour vous aider ! Envoyez-nous un message.
//         </motion.p>
//       </motion.header>

//       {/* Formulaire de Contact */}
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={{
//           hidden: { opacity: 0, y: 20 },
//           visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//         }}
//         className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md"
//       >
//         {/* Message de succès */}
//         {flash && flash.success && (
//           <div className="mb-6 p-4 bg-green-500 text-white rounded-md">
//             {flash.success}
//           </div>
//         )}

//         {/* Formulaire de contact */}
//         <form onSubmit={handleSubmit} className='bg-white'>
//           {/* Champ du formulaire pour le nom */}
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-black">Nom</label>
//             <input
//               type="text"
//               id="name"
//               className="w-full p-2 mt-1 border border-gray-300 rounded-md"
//               value={data.name}
//               onChange={(e) => setData('name', e.target.value)}
//             />
//             {errors.name && <span className="text-red-500">{errors.name}</span>}
//           </div>
          
//           {/* Champ du formulaire pour l'email */}
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-black">Email</label>
//             <input
//               type="email"
//               id="email"
//               className="w-full p-2 mt-1 border border-gray-300 rounded-md"
//               value={data.email}
//               onChange={(e) => setData('email', e.target.value)}
//             />
//             {errors.email && <span className="text-red-500">{errors.email}</span>}
//           </div>

//           {/* Champ du formulaire pour le message */}
//           <div className="mb-4">
//             <label htmlFor="message" className="block text-black">Message</label>
//             <textarea
//               id="message"
//               className="w-full p-2 mt-1 border border-gray-300 rounded-md"
//               value={data.message}
//               onChange={(e) => setData('message', e.target.value)}
//             />
//             {errors.message && <span className="text-red-500">{errors.message}</span>}
//           </div>

//           {/* Bouton d'envoi */}
//           <button
//             type="submit"
//             disabled={processing}
//             className="w-full bg-yellow-500 text-white p-3 rounded-md"
//           >
//             {processing ? 'Envoi en cours...' : 'Envoyer'}
//           </button>
//         </form>
//       </motion.div>
//     </div>
//   );
// }




///code  awla

// import React, { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { useForm, usePage } from '@inertiajs/react';
// import toast, { Toaster } from 'react-hot-toast';

// export default function Contact({ user }) {
//   const { flash } = usePage().props; // Récupère le message flash depuis Inertia.js
//   const { data, setData, post, processing, reset, errors } = useForm({
//     name: '',
//     email: '',
//     message: '',
//   });

//   useEffect(() => {
//     if (flash?.message) {
//       toast.success(flash.message);
//     }
//   }, [flash?.message]);

//   // Soumission du formulaire
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     post(route('contact.send'), {
//       onSuccess: () => reset(), // Réinitialiser les champs après un envoi réussi
//     });
//   };

//   return (
//     <div className="bg-gradient-to-br from-[#070a0b] to-[#1d5c76] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
//       {/* <Navbar user={user}/> */}
//       <Toaster />
//       {/* En-tête de la page */}
//       <motion.header
//         initial="hidden"
//         animate="visible"
//         variants={{
//           hidden: { opacity: 0, y: 20 },
//           visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//         }}
//         className="bg-[url('./contact-header.jpg')] bg-cover bg-center py-20 text-center rounded-xl shadow-lg"
//       >
//         <motion.h1
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//           }}
//           className="text-4xl md:text-5xl font-extrabold text-white mb-4"
//         >
//           Contactez-nous
//         </motion.h1>
//         <motion.p
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//           }}
//           className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
//         >
//           Nous sommes là pour répondre à vos questions. Envoyez-nous un message, et nous vous répondrons dès que possible.
//         </motion.p>
//       </motion.header>

//       {/* Formulaire de Contact */}
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={{
//           hidden: { opacity: 0, y: 20 },
//           visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//         }}
//         className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-12"
//       >
//         {/* Message de succès */}
//         {flash && flash.success && (
//           <div className="mb-6 p-4 bg-green-500 text-white rounded-md">
//             {flash.success}
//           </div>
//         )}

//         {/* Formulaire de contact */}
//         <form onSubmit={handleSubmit}>
//           {/* Champ du formulaire pour le nom */}
//           <div className="mb-6">
//             <label htmlFor="name" className="block text-black font-semibold mb-2">
//               Nom
//             </label>
//             <input
//               type="text"
//               id="name"
//               className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={data.name}
//               onChange={(e) => setData('name', e.target.value)}
//             />
//             {errors.name && <span className="text-red-500">{errors.name}</span>}
//           </div>

//           {/* Champ du formulaire pour l'email */}
//           <div className="mb-6">
//             <label htmlFor="email" className="block text-black font-semibold mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={data.email}
//               onChange={(e) => setData('email', e.target.value)}
//             />
//             {errors.email && <span className="text-red-500">{errors.email}</span>}
//           </div>

//           {/* Champ du formulaire pour le message */}
//           <div className="mb-6">
//             <label htmlFor="message" className="block text-black font-semibold mb-2">
//               Message
//             </label>
//             <textarea
//               id="message"
//               className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={data.message}
//               onChange={(e) => setData('message', e.target.value)}
//             />
//             {errors.message && <span className="text-red-500">{errors.message}</span>}
//           </div>

//           {/* Bouton d'envoi */}
//           <button
//             type="submit"
//             disabled={processing}
//             className="w-full bg-blue-400 text-white p-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//           >
//             {processing ? 'Envoi en cours...' : 'Envoyer'}
//           </button>
//         </form>
//       </motion.div>
//     </div>
//   );
// }






import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm, usePage } from '@inertiajs/react';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from '@/Components/Navbar'; // Importez le composant Navbar

export default function Contact({ user }) {
  const { flash } = usePage().props;
  const { data, setData, post, processing, reset, errors } = useForm({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    if (flash?.message) {
      toast.success(flash.message);
    }
  }, [flash?.message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('contact.send'), {
      onSuccess: () => reset(),
    });
  };

  return (
    <div className="bg-gradient-to-br from-[#070a0b] to-[#1d5c76] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <Toaster />
      <Navbar user={user} /> {/* Ajoutez le composant Navbar ici */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        className="bg-[url('./contact-header.jpg')] bg-cover bg-center py-20 text-center rounded-xl shadow-lg"
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-4"
        >
          Contactez-nous
        </motion.h1>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Nous sommes là pour répondre à vos questions. Envoyez-nous un message, et nous vous répondrons dès que possible.
        </motion.p>
      </motion.header>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-12"
      >
        {flash && flash.success && (
          <div className="mb-6 p-4 bg-green-500 text-white rounded-md">
            {flash.success}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-black font-semibold mb-2">
              Nom
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-black font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
            />
            {errors.email && <span className="text-red-500">{errors.email}</span>}
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-black font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={data.message}
              onChange={(e) => setData('message', e.target.value)}
            />
            {errors.message && <span className="text-red-500">{errors.message}</span>}
          </div>

          <button
            type="submit"
            disabled={processing}
            className="w-full bg-blue-400 text-white p-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            {processing ? 'Envoi en cours...' : 'Envoyer'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}