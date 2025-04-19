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




///code bien demarrè

// import React, { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { useForm, usePage } from '@inertiajs/react';
// import toast, { Toaster } from 'react-hot-toast';
// import Navbar from '@/Components/Navbar'; // Importez le composant Navbar

// export default function Contact({ user }) {
//   const { flash } = usePage().props;
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

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     post(route('contact.send'), {
//       onSuccess: () => reset(),
//     });
//   };

//   return (
//     <div className="bg-gradient-to-br from-[#070a0b] to-[#1d5c76] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
//       <Toaster />
//       <Navbar user={user} /> {/* Ajoutez le composant Navbar ici */}
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

//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={{
//           hidden: { opacity: 0, y: 20 },
//           visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//         }}
//         className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-12"
//       >
//         {flash && flash.success && (
//           <div className="mb-6 p-4 bg-green-500 text-white rounded-md">
//             {flash.success}
//           </div>
//         )}

//         <form onSubmit={handleSubmit}>
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

      {/* Footer avec liens de réseaux sociaux */}
      <motion.footer
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
        }}
        className="max-w-6xl mx-auto mt-16 pb-8 text-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Première colonne - À propos */}
          <div>
            <h3 className="text-xl font-bold mb-4">À propos de nous</h3>
            <p className="text-gray-300 mb-4">
            Spécialistes en gestion de chantier, nous simplifions la planification, 
            le suivi et la coordination de vos projets de construction
            </p>
            <p className="text-gray-300">
              © {new Date().getFullYear()} Votre Entreprise. Tous droits réservés.
            </p>
          </div>

          {/* Deuxième colonne - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Coordonnées</h3>
            <p className="text-gray-300 mb-2">Localisation du burreau:"golssa salam"</p>
            <p className="text-gray-300 mb-2">rue des travaux </p>
            <p className="text-gray-300 mb-2">Téléphone: +212 0614256331</p>
            <p className="text-gray-300">Email: burreauDOHA@gmail.com</p>
          </div>

          {/* Troisième colonne - Réseaux sociaux */}
          <div>
            <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"></path>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>

            {/* <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Inscrivez-vous à notre newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="p-2 rounded-l-lg focus:outline-none flex-grow"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 transition-colors"
                >
                  S'inscrire
                </button>
              </div>
            </div> */}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <ul className="flex space-x-6">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Accueil</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">À propos</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <ul className="flex space-x-6">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Politique de confidentialité</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Conditions d'utilisation</a></li>
              </ul>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}