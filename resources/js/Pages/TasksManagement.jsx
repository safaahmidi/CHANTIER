// // import { Head, useForm, Link } from '@inertiajs/react';
// // import { useState } from 'react';
// // import { motion } from 'framer-motion';
// // import { Edit, Trash2, Check, Clock, AlertCircle, File, User, Calendar, Plus } from 'lucide-react';

// // export default function TasksManagement({ project }) {
// //     const { data, setData, post, processing, reset } = useForm({
// //         name: "",
// //         assignedTo: "",
// //         status: "À faire",
// //         priority: "Moyenne",
// //         dueDate: "",
// //         remarks: "",
// //         files: [],
// //         timeline: "À venir"
// //     });

// //     const addTask = (e) => {
// //         e.preventDefault();
// //         post(route('tasks.store', { id: project.id }), {
// //             onSuccess: () => reset(),
// //         });
// //     };

// //     return (
// //         <div>
// //             <Head title="Gestion des Tâches" />
// //             <motion.div
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.6 }}
// //                 className="p-6 bg-gray-100 min-h-screen"
// //             >
// //                 <motion.h1 className="text-3xl font-bold text-gray-900 mb-6">Gestion des Tâches - {project.name}</motion.h1>

// //                 {/* Formulaire pour ajouter une tâche */}
// //                 <form onSubmit={addTask} className="mb-8 bg-white p-6 rounded-lg shadow-lg">
// //                     <h2 className="text-xl font-semibold text-gray-900 mb-4">Ajouter une tâche</h2>
// //                     <div className="grid grid-cols-2 gap-4">
// //                         <input
// //                             type="text"
// //                             placeholder="Nom de la tâche"
// //                             value={data.name}
// //                             onChange={(e) => setData('name', e.target.value)}
// //                             className="p-2 border border-gray-300 rounded-lg"
// //                         />
// //                         <input
// //                             type="email"
// //                             placeholder="Assigner à (email)"
// //                             value={data.assignedTo}
// //                             onChange={(e) => setData('assignedTo', e.target.value)}
// //                             className="p-2 border border-gray-300 rounded-lg"
// //                         />
// //                         <input
// //                             type="date"
// //                             value={data.dueDate}
// //                             onChange={(e) => setData('dueDate', e.target.value)}
// //                             className="p-2 border border-gray-300 rounded-lg"
// //                         />
// //                         <textarea
// //                             placeholder="Remarques"
// //                             value={data.remarks}
// //                             onChange={(e) => setData('remarks', e.target.value)}
// //                             className="p-2 border border-gray-300 rounded-lg"
// //                         />
// //                     </div>
// //                     <button
// //                         type="submit"
// //                         disabled={processing}
// //                         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
// //                     >
// //                         Ajouter la tâche
// //                     </button>
// //                 </form>

// //                 {/* Liste des tâches */}
// //                 <div className="space-y-4">
// //                     {project.tasks.map((task) => (
// //                         <motion.div
// //                             key={task.id}
// //                             initial={{ opacity: 0, y: 20 }}
// //                             animate={{ opacity: 1, y: 0 }}
// //                             transition={{ duration: 0.6 }}
// //                             className="bg-white p-4 rounded-lg shadow-lg"
// //                         >
// //                             <h3 className="text-lg font-medium text-gray-900">{task.name}</h3>
// //                             <p className="text-sm text-gray-600">Assigné à : {task.assigned_to}</p>
// //                             <p className="text-sm text-gray-600">Date limite : {task.due_date}</p>
// //                             <p className="text-sm text-gray-600">Remarques : {task.remarks}</p>
// //                             <div className="mt-4 flex space-x-4">
// //                                 <button className="text-blue-500 hover:text-blue-600">
// //                                     <Edit className="w-5 h-5" />
// //                                 </button>
// //                                 <button className="text-red-500 hover:text-red-600">
// //                                     <Trash2 className="w-5 h-5" />
// //                                 </button>
// //                             </div>
// //                         </motion.div>
// //                     ))}
// //                 </div>
// //             </motion.div>
// //         </div>
// //     );
// // }




// import { Head, useForm, Link } from '@inertiajs/react';
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Edit, Trash2, Check, Clock, AlertCircle, File, User, Calendar, Plus } from 'lucide-react';

// export default function TasksManagement({ project }) {
//     const { data, setData, post, processing, reset } = useForm({
//         name: "",
//         assignedTo: "",
//         status: "À faire",
//         priority: "Moyenne",
//         dueDate: "",
//         remarks: "",
//         files: [],
//         timeline: "À venir"
//     });

//     const addTask = (e) => {
//         e.preventDefault();
//         post(route('tasks.store', { id: project.id }), {
//             onSuccess: () => reset(),
//         });
//     };

//     return (
//         <div>
//             <Head title="Gestion des Tâches" />
//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="p-6 bg-gray-50 min-h-screen"
//             >
//                 {/* En-tête */}
//                 <motion.h1
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-3xl font-bold text-gray-900 mb-6"
//                 >
//                     Gestion des Tâches - {project.name}
//                 </motion.h1>

//                 {/* Tableau des tâches */}
//                 <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//                     {/* En-tête du tableau */}
//                     <div className="grid grid-cols-6 gap-4 p-4 bg-gray-100 border-b border-gray-200">
//                         <div className="font-semibold text-gray-700">Nom de la tâche</div>
//                         <div className="font-semibold text-gray-700">Assigné à</div>
//                         <div className="font-semibold text-gray-700">Statut</div>
//                         <div className="font-semibold text-gray-700">Priorité</div>
//                         <div className="font-semibold text-gray-700">Date limite</div>
//                         <div className="font-semibold text-gray-700">Actions</div>
//                     </div>

//                     {/* Liste des tâches */}
//                     <div className="divide-y divide-gray-200">
//                         {project.tasks.map((task) => (
//                             <motion.div
//                                 key={task.id}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.6 }}
//                                 className="grid grid-cols-6 gap-4 p-4 hover:bg-gray-50 transition-colors"
//                             >
//                                 <div className="text-gray-900">{task.name}</div>
//                                 <div className="text-gray-600">{task.assigned_to}</div>
//                                 <div>
//                                     <span
//                                         className={`px-2 py-1 rounded-full text-xs ${
//                                             task.status === "En cours"
//                                                 ? "bg-blue-100 text-blue-700"
//                                                 : task.status === "À faire"
//                                                 ? "bg-yellow-100 text-yellow-700"
//                                                 : "bg-green-100 text-green-700"
//                                         }`}
//                                     >
//                                         {task.status}
//                                     </span>
//                                 </div>
//                                 <div>
//                                     <span
//                                         className={`px-2 py-1 rounded-full text-xs ${
//                                             task.priority === "Haute"
//                                                 ? "bg-red-100 text-red-700"
//                                                 : task.priority === "Moyenne"
//                                                 ? "bg-orange-100 text-orange-700"
//                                                 : "bg-green-100 text-green-700"
//                                         }`}
//                                     >
//                                         {task.priority}
//                                     </span>
//                                 </div>
//                                 <div className="text-gray-600">{task.due_date}</div>
//                                 <div className="flex space-x-4">
//                                     <button className="text-blue-500 hover:text-blue-600">
//                                         <Edit className="w-5 h-5" />
//                                     </button>
//                                     <button className="text-red-500 hover:text-red-600">
//                                         <Trash2 className="w-5 h-5" />
//                                     </button>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Formulaire pour ajouter une tâche */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="mt-8 bg-white rounded-lg shadow-lg p-6"
//                 >
//                     <h2 className="text-xl font-semibold text-gray-900 mb-4">Ajouter une tâche</h2>
//                     <form onSubmit={addTask} className="space-y-4">
//                         <div className="grid grid-cols-2 gap-4">
//                             <input
//                                 type="text"
//                                 placeholder="Nom de la tâche"
//                                 value={data.name}
//                                 onChange={(e) => setData('name', e.target.value)}
//                                 className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                             />
//                             <input
//                                 type="email"
//                                 placeholder="Assigner à (email)"
//                                 value={data.assignedTo}
//                                 onChange={(e) => setData('assignedTo', e.target.value)}
//                                 className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                             />
//                             <input
//                                 type="date"
//                                 value={data.dueDate}
//                                 onChange={(e) => setData('dueDate', e.target.value)}
//                                 className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                             />
//                             <textarea
//                                 placeholder="Remarques"
//                                 value={data.remarks}
//                                 onChange={(e) => setData('remarks', e.target.value)}
//                                 className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                             />
//                         </div>
//                         <button
//                             type="submit"
//                             disabled={processing}
//                             className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//                         >
//                             Ajouter la tâche
//                         </button>
//                     </form>
//                 </motion.div>
//             </motion.div>
//         </div>
//     );
// }




//code demarèè mais juste front end et pas style que je veux 100/100
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { PlusCircle, Trash, CheckCircle } from "lucide-react";

// const TaskManagement = () => {
//   const [tasks, setTasks] = useState([
//     { id: 1, title: "Préparer le terrain", status: "À faire", priority: "Haute" },
//     { id: 2, title: "Livraison des matériaux", status: "En cours", priority: "Moyenne" },
//   ]);

//   const addTask = () => {
//     const newTask = { id: tasks.length + 1, title: "Nouvelle tâche", status: "À faire", priority: "Basse" };
//     setTasks([...tasks, newTask]);
//   };

//   const deleteTask = (id) => {
//     setTasks(tasks.filter(task => task.id !== id));
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-semibold">Gestion des Tâches</h2>
//         <button onClick={addTask} className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
//           <PlusCircle className="w-5 h-5 mr-2" /> Ajouter Tâche
//         </button>
//       </div>
//       <div className="bg-white rounded-lg shadow p-4">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-2 text-left">Tâche</th>
//               <th className="p-2 text-left">Statut</th>
//               <th className="p-2 text-left">Priorité</th>
//               <th className="p-2 text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tasks.map(task => (
//               <motion.tr 
//                 key={task.id} 
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="border-b"
//               >
//                 <td className="p-2">{task.title}</td>
//                 <td className="p-2">
//                   <span className={`px-2 py-1 rounded-full text-white ${task.status === 'À faire' ? 'bg-red-500' : task.status === 'En cours' ? 'bg-yellow-500' : 'bg-green-500'}`}>
//                     {task.status}
//                   </span>
//                 </td>
//                 <td className="p-2">{task.priority}</td>
//                 <td className="p-2 text-center">
//                   <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700">
//                     <Trash className="w-5 h-5" />
//                   </button>
//                 </td>
//               </motion.tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TaskManagement;




// import { useState } from "react";
// import { motion } from "framer-motion";
// import { PlusCircle, Trash, CheckCircle, Calendar, File, Camera } from "lucide-react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const TaskManagement = () => {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState({
//     title: "",
//     status: "À faire",
//     priority: "Moyenne",
//     dueDate: new Date(),
//     files: [],
//   });

//   const statusOptions = [
//     { value: "À faire", color: "bg-red-500" },
//     { value: "En cours", color: "bg-yellow-500" },
//     { value: "Fait", color: "bg-green-500" },
//     { value: "Bloqué", color: "bg-purple-500" },
//   ];

//   const priorityOptions = [
//     { value: "Haute", color: "bg-red-500" },
//     { value: "Moyenne", color: "bg-yellow-500" },
//     { value: "Basse", color: "bg-green-500" },
//   ];

//   const addTask = () => {
//     if (!newTask.title) return alert("Veuillez saisir un titre pour la tâche.");
//     const task = { ...newTask, id: tasks.length + 1 };
//     setTasks([...tasks, task]);
//     setNewTask({
//       title: "",
//       status: "À faire",
//       priority: "Moyenne",
//       dueDate: new Date(),
//       files: [],
//     });
//     // Envoyer la tâche au backend ici (exemple avec fetch)
//     fetch("/api/tasks", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(task),
//     })
//       .then((response) => response.json())
//       .then((data) => console.log("Tâche enregistrée:", data))
//       .catch((error) => console.error("Erreur:", error));
//   };

//   const deleteTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//     // Supprimer la tâche du backend ici
//     fetch(`/api/tasks/${id}`, { method: "DELETE" })
//       .then((response) => response.json())
//       .then((data) => console.log("Tâche supprimée:", data))
//       .catch((error) => console.error("Erreur:", error));
//   };

//   const handleFileUpload = (e) => {
//     const files = Array.from(e.target.files);
//     setNewTask({ ...newTask, files: [...newTask.files, ...files] });
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-semibold">Gestion des Tâches</h2>
//         <button
//           onClick={addTask}
//           className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//         >
//           <PlusCircle className="w-5 h-5 mr-2" /> Ajouter Tâche
//         </button>
//       </div>

//       {/* Formulaire pour ajouter une tâche */}
//       <div className="bg-white rounded-lg shadow p-4 mb-6">
//         <div className="grid grid-cols-2 gap-4">
//           <input
//             type="text"
//             placeholder="Titre de la tâche"
//             value={newTask.title}
//             onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
//             className="p-2 border border-gray-300 rounded-lg"
//           />
//           <select
//             value={newTask.status}
//             onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
//             className="p-2 border border-gray-300 rounded-lg"
//           >
//             {statusOptions.map((option) => (
//               <option key={option.value} value={option.value}>
//                 {option.value}
//               </option>
//             ))}
//           </select>
//           <select
//             value={newTask.priority}
//             onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
//             className="p-2 border border-gray-300 rounded-lg"
//           >
//             {priorityOptions.map((option) => (
//               <option key={option.value} value={option.value}>
//                 {option.value}
//               </option>
//             ))}
//           </select>
//           <DatePicker
//             selected={newTask.dueDate}
//             onChange={(date) => setNewTask({ ...newTask, dueDate: date })}
//             className="p-2 border border-gray-300 rounded-lg"
//           />
//           <div className="flex items-center">
//             <label className="flex items-center cursor-pointer">
//               <File className="w-5 h-5 mr-2" />
//               <input type="file" multiple onChange={handleFileUpload} className="hidden" />
//               Ajouter des fichiers
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Tableau des tâches */}
//       <div className="bg-white rounded-lg shadow p-4">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-2 text-left">Tâche</th>
//               <th className="p-2 text-left">Statut</th>
//               <th className="p-2 text-left">Priorité</th>
//               <th className="p-2 text-left">Date</th>
//               <th className="p-2 text-left">Fichiers</th>
//               <th className="p-2 text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tasks.map((task) => (
//               <motion.tr
//                 key={task.id}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="border-b"
//               >
//                 <td className="p-2">{task.title}</td>
//                 <td className="p-2">
//                   <span
//                     className={`px-2 py-1 rounded-full text-white ${
//                       statusOptions.find((opt) => opt.value === task.status)?.color
//                     }`}
//                   >
//                     {task.status}
//                   </span>
//                 </td>
//                 <td className="p-2">
//                   <span
//                     className={`px-2 py-1 rounded-full text-white ${
//                       priorityOptions.find((opt) => opt.value === task.priority)?.color
//                     }`}
//                   >
//                     {task.priority}
//                   </span>
//                 </td>
//                 <td className="p-2">
//                   <Calendar className="w-5 h-5 inline-block mr-2" />
//                   {task.dueDate.toLocaleDateString()}
//                 </td>
//                 <td className="p-2">
//                   {task.files.map((file, index) => (
//                     <div key={index} className="flex items-center">
//                       <File className="w-4 h-4 mr-2" />
//                       <span>{file.name}</span>
//                     </div>
//                   ))}
//                 </td>
//                 <td className="p-2 text-center">
//                   <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700">
//                     <Trash className="w-5 h-5" />
//                   </button>
//                 </td>
//               </motion.tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TaskManagement;



/// page modifiè près un peu de monday com dans les chmaps pas style 

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { PlusCircle, Trash, Calendar, File, User } from "lucide-react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const TaskManagement = () => {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState({
//     title: "",
//     assignedTo: "",
//     status: "À faire",
//     priority: "Moyenne",
//     startDate: new Date(),
//     endDate: new Date(),
//     files: [],
//   });

//   const statusOptions = [
//     { value: "À faire", color: "bg-red-500" },
//     { value: "En cours", color: "bg-yellow-500" },
//     { value: "Fait", color: "bg-green-500" },
//     { value: "Bloqué", color: "bg-purple-500" },
//   ];

//   const priorityOptions = [
//     { value: "Haute", color: "bg-red-500" },
//     { value: "Moyenne", color: "bg-yellow-500" },
//     { value: "Basse", color: "bg-green-500" },
//   ];

//   const addTask = () => {
//     if (!newTask.title) return alert("Veuillez saisir un titre pour la tâche.");
//     const task = { ...newTask, id: tasks.length + 1 };
//     setTasks([...tasks, task]);
//     setNewTask({
//       title: "",
//       assignedTo: "",
//       status: "À faire",
//       priority: "Moyenne",
//       startDate: new Date(),
//       endDate: new Date(),
//       files: [],
//     });

//     // Envoyer la tâche au backend ici (exemple avec fetch)
//     fetch("/api/tasks", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(task),
//     })
//       .then((response) => response.json())
//       .then((data) => console.log("Tâche enregistrée:", data))
//       .catch((error) => console.error("Erreur:", error));
//   };

//   const deleteTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//     // Supprimer la tâche du backend ici
//     fetch(`/api/tasks/${id}`, { method: "DELETE" })
//       .then((response) => response.json())
//       .then((data) => console.log("Tâche supprimée:", data))
//       .catch((error) => console.error("Erreur:", error));
//   };

//   const handleFileUpload = (e) => {
//     const files = Array.from(e.target.files);
//     setNewTask({ ...newTask, files: [...newTask.files, ...files] });
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-semibold">Gestion des Tâches</h2>
//         <button
//           onClick={addTask}
//           className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//         >
//           <PlusCircle className="w-5 h-5 mr-2" /> Ajouter Tâche
//         </button>
//       </div>

//       {/* Formulaire pour ajouter une tâche */}
//       <div className="bg-white rounded-lg shadow p-4 mb-6">
//         <div className="grid grid-cols-2 gap-4">
//           <input
//             type="text"
//             placeholder="Titre de la tâche"
//             value={newTask.title}
//             onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
//             className="p-2 border border-gray-300 rounded-lg"
//           />
//           <input
//             type="email"
//             placeholder="Assigner à (email)"
//             value={newTask.assignedTo}
//             onChange={(e) => setNewTask({ ...newTask, assignedTo: e.target.value })}
//             className="p-2 border border-gray-300 rounded-lg"
//           />
//           <select
//             value={newTask.status}
//             onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
//             className="p-2 border border-gray-300 rounded-lg"
//           >
//             {statusOptions.map((option) => (
//               <option key={option.value} value={option.value}>
//                 {option.value}
//               </option>
//             ))}
//           </select>
//           <select
//             value={newTask.priority}
//             onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
//             className="p-2 border border-gray-300 rounded-lg"
//           >
//             {priorityOptions.map((option) => (
//               <option key={option.value} value={option.value}>
//                 {option.value}
//               </option>
//             ))}
//           </select>
//           <DatePicker
//             selected={newTask.startDate}
//             onChange={(date) => setNewTask({ ...newTask, startDate: date })}
//             className="p-2 border border-gray-300 rounded-lg"
//             placeholderText="Date de début"
//           />
//           <DatePicker
//             selected={newTask.endDate}
//             onChange={(date) => setNewTask({ ...newTask, endDate: date })}
//             className="p-2 border border-gray-300 rounded-lg"
//             placeholderText="Date de fin"
//           />
//           <div className="flex items-center">
//             <label className="flex items-center cursor-pointer">
//               <File className="w-5 h-5 mr-2" />
//               <input type="file" multiple onChange={handleFileUpload} className="hidden" />
//               Ajouter des fichiers
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Tableau des tâches */}
//       <div className="bg-white rounded-lg shadow p-4">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-2 text-left">Tâche</th>
//               <th className="p-2 text-left">Assigné à</th>
//               <th className="p-2 text-left">Statut</th>
//               <th className="p-2 text-left">Priorité</th>
//               <th className="p-2 text-left">Date de début</th>
//               <th className="p-2 text-left">Date de fin</th>
//               <th className="p-2 text-left">Fichiers</th>
//               <th className="p-2 text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tasks.map((task) => (
//               <motion.tr
//                 key={task.id}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="border-b"
//               >
//                 <td className="p-2">{task.title}</td>
//                 <td className="p-2">{task.assignedTo}</td>
//                 <td className="p-2">
//                   <span
//                     className={`px-2 py-1 rounded-full text-white ${
//                       statusOptions.find((opt) => opt.value === task.status)?.color
//                     }`}
//                   >
//                     {task.status}
//                   </span>
//                 </td>
//                 <td className="p-2">
//                   <span
//                     className={`px-2 py-1 rounded-full text-white ${
//                       priorityOptions.find((opt) => opt.value === task.priority)?.color
//                     }`}
//                   >
//                     {task.priority}
//                   </span>
//                 </td>
//                 <td className="p-2">{task.startDate.toLocaleDateString()}</td>
//                 <td className="p-2">{task.endDate.toLocaleDateString()}</td>
//                 <td className="p-2">
//                   {task.files.map((file, index) => (
//                     <div key={index} className="flex items-center">
//                       <File className="w-4 h-4 mr-2" />
//                       <span>{file.name}</span>
//                     </div>
//                   ))}
//                 </td>
//                 <td className="p-2 text-center">
//                   <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700">
//                     <Trash className="w-5 h-5" />
//                   </button>
//                 </td>
//               </motion.tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TaskManagement;



////

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { PlusCircle, Trash, Calendar, File, User, Check, X } from "lucide-react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const TaskManagement = () => {
//   const [tasks, setTasks] = useState([]);
//   const [isAddingTask, setIsAddingTask] = useState(false); // État pour afficher/masquer le formulaire
//   const [newTask, setNewTask] = useState({
//     title: "",
//     assignedTo: "",
//     status: "À faire",
//     priority: "Moyenne",
//     startDate: new Date(),
//     endDate: new Date(),
//     files: [],
//   });

//   // Options pour les listes déroulantes
//   const statusOptions = [
//     { value: "À faire", color: "bg-red-500" },
//     { value: "En cours", color: "bg-yellow-500" },
//     { value: "Fait", color: "bg-green-500" },
//     { value: "Bloqué", color: "bg-purple-500" },
//   ];

//   const priorityOptions = [
//     { value: "Haute", color: "bg-red-500" },
//     { value: "Moyenne", color: "bg-yellow-500" },
//     { value: "Basse", color: "bg-green-500" },
//   ];

//   // Ajouter une tâche
//   const addTask = () => {
//     if (!newTask.title) return alert("Veuillez saisir un titre pour la tâche.");
//     const task = { ...newTask, id: Date.now() };
//     setTasks([...tasks, task]);
//     setIsAddingTask(false); // Masquer le formulaire après l'ajout
//     setNewTask({
//       title: "",
//       assignedTo: "",
//       status: "À faire",
//       priority: "Moyenne",
//       startDate: new Date(),
//       endDate: new Date(),
//       files: [],
//     });

//     // Envoyer la tâche au backend ici (exemple avec fetch)
//     fetch("/api/tasks", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(task),
//     })
//       .then((response) => response.json())
//       .then((data) => console.log("Tâche enregistrée:", data))
//       .catch((error) => console.error("Erreur:", error));
//   };

//   // Supprimer une tâche
//   const deleteTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//     // Supprimer la tâche du backend ici
//     fetch(`/api/tasks/${id}`, { method: "DELETE" })
//       .then((response) => response.json())
//       .then((data) => console.log("Tâche supprimée:", data))
//       .catch((error) => console.error("Erreur:", error));
//   };

//   // Gérer l'ajout de fichiers
//   const handleFileUpload = (e) => {
//     const files = Array.from(e.target.files);
//     setNewTask({ ...newTask, files: [...newTask.files, ...files] });
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-semibold">Gestion des Tâches</h2>
//         <button
//           onClick={() => setIsAddingTask(true)} // Afficher le formulaire
//           className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//         >
//           <PlusCircle className="w-5 h-5 mr-2" /> Ajouter Tâche
//         </button>
//       </div>

//       {/* Tableau des tâches */}
//       <div className="bg-white rounded-lg shadow p-4">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-2 text-left">Tâche</th>
//               <th className="p-2 text-left">Assigné à</th>
//               <th className="p-2 text-left">Statut</th>
//               <th className="p-2 text-left">Priorité</th>
//               <th className="p-2 text-left">Date de début</th>
//               <th className="p-2 text-left">Date de fin</th>
//               <th className="p-2 text-left">Fichiers</th>
//               <th className="p-2 text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* Formulaire intégré dans le tableau */}
//             {isAddingTask && (
//               <motion.tr
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="bg-gray-50"
//               >
//                 <td className="p-2">
//                   <input
//                     type="text"
//                     placeholder="Titre de la tâche"
//                     value={newTask.title}
//                     onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
//                     className="p-2 border border-gray-300 rounded-lg w-full"
//                   />
//                 </td>
//                 <td className="p-2">
//                   <input
//                     type="email"
//                     placeholder="Assigner à (email)"
//                     value={newTask.assignedTo}
//                     onChange={(e) => setNewTask({ ...newTask, assignedTo: e.target.value })}
//                     className="p-2 border border-gray-300 rounded-lg w-full"
//                   />
//                 </td>
//                 <td className="p-2">
//                   <select
//                     value={newTask.status}
//                     onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
//                     className="p-2 border border-gray-300 rounded-lg w-full"
//                   >
//                     {statusOptions.map((option) => (
//                       <option key={option.value} value={option.value}>
//                         {option.value}
//                       </option>
//                     ))}
//                   </select>
//                 </td>
//                 <td className="p-2">
//                   <select
//                     value={newTask.priority}
//                     onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
//                     className="p-2 border border-gray-300 rounded-lg w-full"
//                   >
//                     {priorityOptions.map((option) => (
//                       <option key={option.value} value={option.value}>
//                         {option.value}
//                       </option>
//                     ))}
//                   </select>
//                 </td>
//                 <td className="p-2">
//                   <DatePicker
//                     selected={newTask.startDate}
//                     onChange={(date) => setNewTask({ ...newTask, startDate: date })}
//                     className="p-2 border border-gray-300 rounded-lg w-full"
//                   />
//                 </td>
//                 <td className="p-2">
//                   <DatePicker
//                     selected={newTask.endDate}
//                     onChange={(date) => setNewTask({ ...newTask, endDate: date })}
//                     className="p-2 border border-gray-300 rounded-lg w-full"
//                   />
//                 </td>
//                 <td className="p-2">
//                   <label className="flex items-center cursor-pointer">
//                     <File className="w-5 h-5 mr-2" />
//                     <input type="file" multiple onChange={handleFileUpload} className="hidden" />
//                     Ajouter des fichiers
//                   </label>
//                 </td>
//                 <td className="p-2 text-center">
//                   <button
//                     onClick={addTask}
//                     className="text-green-500 hover:text-green-700 mr-2"
//                   >
//                     <Check className="w-5 h-5" />
//                   </button>
//                   <button
//                     onClick={() => setIsAddingTask(false)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     <X className="w-5 h-5" />
//                   </button>
//                 </td>
//               </motion.tr>
//             )}

//             {/* Liste des tâches existantes */}
//             {tasks.map((task) => (
//               <motion.tr
//                 key={task.id}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="border-b"
//               >
//                 <td className="p-2">{task.title}</td>
//                 <td className="p-2">{task.assignedTo}</td>
//                 <td className="p-2">
//                   <span
//                     className={`px-2 py-1 rounded-full text-white ${
//                       statusOptions.find((opt) => opt.value === task.status)?.color
//                     }`}
//                   >
//                     {task.status}
//                   </span>
//                 </td>
//                 <td className="p-2">
//                   <span
//                     className={`px-2 py-1 rounded-full text-white ${
//                       priorityOptions.find((opt) => opt.value === task.priority)?.color
//                     }`}
//                   >
//                     {task.priority}
//                   </span>
//                 </td>
//                 <td className="p-2">{task.startDate.toLocaleDateString()}</td>
//                 <td className="p-2">{task.endDate.toLocaleDateString()}</td>
//                 <td className="p-2">
//                   {task.files.map((file, index) => (
//                     <div key={index} className="flex items-center">
//                       <File className="w-4 h-4 mr-2" />
//                       <span>{file.name}</span>
//                     </div>
//                   ))}
//                 </td>
//                 <td className="p-2 text-center">
//                   <button
//                     onClick={() => deleteTask(task.id)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     <Trash className="w-5 h-5" />
//                   </button>
//                 </td>
//               </motion.tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TaskManagement;




// etiquettes pour les tâches affichès  mais pas avec  style non voulait

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { PlusCircle, Trash, Calendar, File, User, Check, X } from "lucide-react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const TaskManagement = () => {
//   const [tasks, setTasks] = useState([]);
//   const [isAddingTask, setIsAddingTask] = useState(false); // État pour afficher/masquer le formulaire
//   const [newTask, setNewTask] = useState({
//     title: "",
//     assignedTo: "",
//     status: "À faire",
//     priority: "Moyenne",
//     startDate: new Date(),
//     endDate: new Date(),
//     files: [],
//   });

//   // Options pour les étiquettes
//   const statusOptions = [
//     { value: "À faire", color: "bg-red-500" },
//     { value: "En cours", color: "bg-yellow-500" },
//     { value: "Fait", color: "bg-green-500" },
//     { value: "Bloqué", color: "bg-purple-500" },
//   ];

//   const priorityOptions = [
//     { value: "Haute", color: "bg-red-500" },
//     { value: "Moyenne", color: "bg-yellow-500" },
//     { value: "Basse", color: "bg-green-500" },
//   ];

//   // Ajouter une tâche
//   const addTask = () => {
//     if (!newTask.title) return alert("Veuillez saisir un titre pour la tâche.");
//     const task = { ...newTask, id: Date.now() };
//     setTasks([...tasks, task]);
//     setIsAddingTask(false); // Masquer le formulaire après l'ajout
//     setNewTask({
//       title: "",
//       assignedTo: "",
//       status: "À faire",
//       priority: "Moyenne",
//       startDate: new Date(),
//       endDate: new Date(),
//       files: [],
//     });

//     // Envoyer la tâche au backend ici (exemple avec fetch)
//     fetch("/api/tasks", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(task),
//     })
//       .then((response) => response.json())
//       .then((data) => console.log("Tâche enregistrée:", data))
//       .catch((error) => console.error("Erreur:", error));
//   };

//   // Supprimer une tâche
//   const deleteTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//     // Supprimer la tâche du backend ici
//     fetch(`/api/tasks/${id}`, { method: "DELETE" })
//       .then((response) => response.json())
//       .then((data) => console.log("Tâche supprimée:", data))
//       .catch((error) => console.error("Erreur:", error));
//   };

//   // Gérer l'ajout de fichiers
//   const handleFileUpload = (e) => {
//     const files = Array.from(e.target.files);
//     setNewTask({ ...newTask, files: [...newTask.files, ...files] });
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-semibold">Gestion des Tâches</h2>
//         <button
//           onClick={() => setIsAddingTask(true)} // Afficher le formulaire
//           className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//         >
//           <PlusCircle className="w-5 h-5 mr-2" /> Ajouter Tâche
//         </button>
//       </div>

//       {/* Tableau des tâches */}
//       <div className="bg-white rounded-lg shadow p-4">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-2 text-left">Tâche</th>
//               <th className="p-2 text-left">Assigné à</th>
//               <th className="p-2 text-left">Statut</th>
//               <th className="p-2 text-left">Priorité</th>
//               <th className="p-2 text-left">Date de début</th>
//               <th className="p-2 text-left">Date de fin</th>
//               <th className="p-2 text-left">Fichiers</th>
//               <th className="p-2 text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* Formulaire intégré dans le tableau */}
//             {isAddingTask && (
//               <motion.tr
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="bg-gray-50"
//               >
//                 <td className="p-2">
//                   <input
//                     type="text"
//                     placeholder="Titre de la tâche"
//                     value={newTask.title}
//                     onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
//                     className="p-2 border border-gray-300 rounded-lg w-full"
//                   />
//                 </td>
//                 <td className="p-2">
//                   <input
//                     type="email"
//                     placeholder="Assigner à (email)"
//                     value={newTask.assignedTo}
//                     onChange={(e) => setNewTask({ ...newTask, assignedTo: e.target.value })}
//                     className="p-2 border border-gray-300 rounded-lg w-full"
//                   />
//                 </td>
//                 <td className="p-2">
//                   <div className="flex space-x-2">
//                     {statusOptions.map((option) => (
//                       <motion.button
//                         key={option.value}
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={() => setNewTask({ ...newTask, status: option.value })}
//                         className={`px-3 py-1 rounded-full text-white text-sm ${
//                           option.color
//                         } ${
//                           newTask.status === option.value ? "ring-2 ring-offset-2 ring-gray-500" : ""
//                         }`}
//                       >
//                         {option.value}
//                       </motion.button>
//                     ))}
//                   </div>
//                 </td>
//                 <td className="p-2">
//                   <div className="flex space-x-2">
//                     {priorityOptions.map((option) => (
//                       <motion.button
//                         key={option.value}
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={() => setNewTask({ ...newTask, priority: option.value })}
//                         className={`px-3 py-1 rounded-full text-white text-sm ${
//                           option.color
//                         } ${
//                           newTask.priority === option.value
//                             ? "ring-2 ring-offset-2 ring-gray-500"
//                             : ""
//                         }`}
//                       >
//                         {option.value}
//                       </motion.button>
//                     ))}
//                   </div>
//                 </td>
//                 <td className="p-2">
//                   <DatePicker
//                     selected={newTask.startDate}
//                     onChange={(date) => setNewTask({ ...newTask, startDate: date })}
//                     className="p-2 border border-gray-300 rounded-lg w-full"
//                   />
//                 </td>
//                 <td className="p-2">
//                   <DatePicker
//                     selected={newTask.endDate}
//                     onChange={(date) => setNewTask({ ...newTask, endDate: date })}
//                     className="p-2 border border-gray-300 rounded-lg w-full"
//                   />
//                 </td>
//                 <td className="p-2">
//                   <label className="flex items-center cursor-pointer">
//                     <File className="w-5 h-5 mr-2" />
//                     <input type="file" multiple onChange={handleFileUpload} className="hidden" />
//                     Ajouter des fichiers
//                   </label>
//                 </td>
//                 <td className="p-2 text-center">
//                   <button
//                     onClick={addTask}
//                     className="text-green-500 hover:text-green-700 mr-2"
//                   >
//                     <Check className="w-5 h-5" />
//                   </button>
//                   <button
//                     onClick={() => setIsAddingTask(false)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     <X className="w-5 h-5" />
//                   </button>
//                 </td>
//               </motion.tr>
//             )}

//             {/* Liste des tâches existantes */}
//             {tasks.map((task) => (
//               <motion.tr
//                 key={task.id}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="border-b"
//               >
//                 <td className="p-2">{task.title}</td>
//                 <td className="p-2">{task.assignedTo}</td>
//                 <td className="p-2">
//                   <span
//                     className={`px-2 py-1 rounded-full text-white ${
//                       statusOptions.find((opt) => opt.value === task.status)?.color
//                     }`}
//                   >
//                     {task.status}
//                   </span>
//                 </td>
//                 <td className="p-2">
//                   <span
//                     className={`px-2 py-1 rounded-full text-white ${
//                       priorityOptions.find((opt) => opt.value === task.priority)?.color
//                     }`}
//                   >
//                     {task.priority}
//                   </span>
//                 </td>
//                 <td className="p-2">{task.startDate.toLocaleDateString()}</td>
//                 <td className="p-2">{task.endDate.toLocaleDateString()}</td>
//                 <td className="p-2">
//                   {task.files.map((file, index) => (
//                     <div key={index} className="flex items-center">
//                       <File className="w-4 h-4 mr-2" />
//                       <span>{file.name}</span>
//                     </div>
//                   ))}
//                 </td>
//                 <td className="p-2 text-center">
//                   <button
//                     onClick={() => deleteTask(task.id)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     <Trash className="w-5 h-5" />
//                   </button>
//                 </td>
//               </motion.tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TaskManagement;







// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { PlusCircle, Trash, Calendar, File, User, Check, X, ChevronDown } from "lucide-react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const TaskManagement = () => {
//   const [tasks, setTasks] = useState([]);
//   const [isAddingTask, setIsAddingTask] = useState(false); // État pour afficher/masquer le formulaire
//   const [newTask, setNewTask] = useState({
//     title: "",
//     assignedTo: "",
//     status: "À faire",
//     priority: "Moyenne",
//     startDate: new Date(),
//     endDate: new Date(),
//     files: [],
//   });

//   const [isStatusOpen, setIsStatusOpen] = useState(false); // État pour ouvrir/fermer le menu Statut
//   const [isPriorityOpen, setIsPriorityOpen] = useState(false); // État pour ouvrir/fermer le menu Priorité

//   // Options pour les étiquettes
//   const statusOptions = [
//     { value: "À faire", color: "bg-red-500" },
//     { value: "En cours", color: "bg-yellow-500" },
//     { value: "Fait", color: "bg-green-500" },
//     { value: "Bloqué", color: "bg-purple-500" },
//   ];

//   const priorityOptions = [
//     { value: "Haute", color: "bg-red-500" },
//     { value: "Moyenne", color: "bg-yellow-500" },
//     { value: "Basse", color: "bg-green-500" },
//   ];

//   // Ajouter une tâche
//   const addTask = () => {
//     if (!newTask.title) return alert("Veuillez saisir un titre pour la tâche.");
//     const task = { ...newTask, id: Date.now() };
//     setTasks([...tasks, task]);
//     setIsAddingTask(false); // Masquer le formulaire après l'ajout
//     setNewTask({
//       title: "",
//       assignedTo: "",
//       status: "À faire",
//       priority: "Moyenne",
//       startDate: new Date(),
//       endDate: new Date(),
//       files: [],
//     });

//     // Envoyer la tâche au backend ici (exemple avec fetch)
//     fetch("/api/tasks", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(task),
//     })
//       .then((response) => response.json())
//       .then((data) => console.log("Tâche enregistrée:", data))
//       .catch((error) => console.error("Erreur:", error));
//   };

//   // Supprimer une tâche
//   const deleteTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//     // Supprimer la tâche du backend ici
//     fetch(`/api/tasks/${id}`, { method: "DELETE" })
//       .then((response) => response.json())
//       .then((data) => console.log("Tâche supprimée:", data))
//       .catch((error) => console.error("Erreur:", error));
//   };

//   // Gérer l'ajout de fichiers
//   const handleFileUpload = (e) => {
//     const files = Array.from(e.target.files);
//     setNewTask({ ...newTask, files: [...newTask.files, ...files] });
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-semibold">Gestion des Tâches</h2>
//         <button
//           onClick={() => setIsAddingTask(true)} // Afficher le formulaire
//           className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//         >
//           <PlusCircle className="w-5 h-5 mr-2" /> Ajouter Tâche
//         </button>
//       </div>

//       {/* Tableau des tâches */}
//       <div className="bg-white rounded-lg shadow p-4">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-2 text-left">Tâche</th>
//               <th className="p-2 text-left">Assigné à</th>
//               <th className="p-2 text-left">Statut</th>
//               <th className="p-2 text-left">Priorité</th>
//               <th className="p-2 text-left">Date de début</th>
//               <th className="p-2 text-left">Date de fin</th>
//               <th className="p-2 text-left">Fichiers</th>
//               <th className="p-2 text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* Formulaire intégré dans le tableau */}
//             {isAddingTask && (
//               <motion.tr
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="bg-gray-50"
//               >
//                 <td className="p-2">
//                   <input
//                     type="text"
//                     placeholder="Titre de la tâche"
//                     value={newTask.title}
//                     onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
//                     className="p-2 border border-gray-300 rounded-lg w-full"
//                   />
//                 </td>
//                 <td className="p-2">
//                   <input
//                     type="email"
//                     placeholder="Assigner à (email)"
//                     value={newTask.assignedTo}
//                     onChange={(e) => setNewTask({ ...newTask, assignedTo: e.target.value })}
//                     className="p-2 border border-gray-300 rounded-lg w-full"
//                   />
//                 </td>
//                 <td className="p-2 relative">
//                   <div
//                     onClick={() => setIsStatusOpen(!isStatusOpen)}
//                     className="p-2 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-between"
//                   >
//                     <span>{newTask.status}</span>
//                     <ChevronDown className="w-4 h-4" />
//                   </div>
//                   <AnimatePresence>
//                     {isStatusOpen && (
//                       <motion.div
//                         initial={{ opacity: 0, y: -10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -10 }}
//                         className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg"
//                       >
//                         {statusOptions.map((option) => (
//                           <div
//                             key={option.value}
//                             onClick={() => {
//                               setNewTask({ ...newTask, status: option.value });
//                               setIsStatusOpen(false);
//                             }}
//                             className={`p-2 cursor-pointer hover:bg-gray-100 ${
//                               newTask.status === option.value ? "bg-gray-100" : ""
//                             }`}
//                           >
//                             <span className={`px-2 py-1 rounded-full text-white ${option.color}`}>
//                               {option.value}
//                             </span>
//                           </div>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </td>
//                 <td className="p-2 relative">
//                   <div
//                     onClick={() => setIsPriorityOpen(!isPriorityOpen)}
//                     className="p-2 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-between"
//                   >
//                     <span>{newTask.priority}</span>
//                     <ChevronDown className="w-4 h-4" />
//                   </div>
//                   <AnimatePresence>
//                     {isPriorityOpen && (
//                       <motion.div
//                         initial={{ opacity: 0, y: -10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -10 }}
//                         className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg"
//                       >
//                         {priorityOptions.map((option) => (
//                           <div
//                             key={option.value}
//                             onClick={() => {
//                               setNewTask({ ...newTask, priority: option.value });
//                               setIsPriorityOpen(false);
//                             }}
//                             className={`p-2 cursor-pointer hover:bg-gray-100 ${
//                               newTask.priority === option.value ? "bg-gray-100" : ""
//                             }`}
//                           >
//                             <span className={`px-2 py-1 rounded-full text-white ${option.color}`}>
//                               {option.value}
//                             </span>
//                           </div>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </td>
//                 <td className="p-2">
//                   <DatePicker
//                     selected={newTask.startDate}
//                     onChange={(date) => setNewTask({ ...newTask, startDate: date })}
//                     className="p-2 border border-gray-300 rounded-lg w-full"
//                   />
//                 </td>
//                 <td className="p-2">
//                   <DatePicker
//                     selected={newTask.endDate}
//                     onChange={(date) => setNewTask({ ...newTask, endDate: date })}
//                     className="p-2 border border-gray-300 rounded-lg w-full"
//                   />
//                 </td>
//                 <td className="p-2">
//                   <label className="flex items-center cursor-pointer">
//                     <File className="w-5 h-5 mr-2" />
//                     <input type="file" multiple onChange={handleFileUpload} className="hidden" />
//                     Ajouter des fichiers
//                   </label>
//                 </td>
//                 <td className="p-2 text-center">
//                   <button
//                     onClick={addTask}
//                     className="text-green-500 hover:text-green-700 mr-2"
//                   >
//                     <Check className="w-5 h-5" />
//                   </button>
//                   <button
//                     onClick={() => setIsAddingTask(false)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     <X className="w-5 h-5" />
//                   </button>
//                 </td>
//               </motion.tr>
//             )}

//             {/* Liste des tâches existantes */}
//             {tasks.map((task) => (
//               <motion.tr
//                 key={task.id}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="border-b"
//               >
//                 <td className="p-2">{task.title}</td>
//                 <td className="p-2">{task.assignedTo}</td>
//                 <td className="p-2">
//                   <span
//                     className={`px-2 py-1 rounded-full text-white ${
//                       statusOptions.find((opt) => opt.value === task.status)?.color
//                     }`}
//                   >
//                     {task.status}
//                   </span>
//                 </td>
//                 <td className="p-2">
//                   <span
//                     className={`px-2 py-1 rounded-full text-white ${
//                       priorityOptions.find((opt) => opt.value === task.priority)?.color
//                     }`}
//                   >
//                     {task.priority}
//                   </span>
//                 </td>
//                 <td className="p-2">{task.startDate.toLocaleDateString()}</td>
//                 <td className="p-2">{task.endDate.toLocaleDateString()}</td>
//                 <td className="p-2">
//                   {task.files.map((file, index) => (
//                     <div key={index} className="flex items-center">
//                       <File className="w-4 h-4 mr-2" />
//                       <span>{file.name}</span>
//                     </div>
//                   ))}
//                 </td>
//                 <td className="p-2 text-center">
//                   <button
//                     onClick={() => deleteTask(task.id)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     <Trash className="w-5 h-5" />
//                   </button>
//                 </td>
//               </motion.tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TaskManagement;





// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { PlusCircle, Trash, Calendar, File, Check, X, Edit } from "lucide-react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const TaskManagement = () => {
//   const [tasks, setTasks] = useState([]);
//   const [isAddingTask, setIsAddingTask] = useState(false); // État pour afficher/masquer le formulaire
//   const [newTask, setNewTask] = useState({
//     title: "",
//     remarks: "", // Ajout du champ "Remarques"
//     status: "À faire",
//     priority: "Moyenne",
//     startDate: new Date(),
//     endDate: new Date(),
//     files: [],
//   });

//   const [isStatusOpen, setIsStatusOpen] = useState(false); // État pour ouvrir/fermer le menu Statut
//   const [isPriorityOpen, setIsPriorityOpen] = useState(false); // État pour ouvrir/fermer le menu Priorité
//   const [editingTaskId, setEditingTaskId] = useState(null); // État pour gérer la tâche en cours de modification

//   // Options pour les étiquettes
//   const statusOptions = [
//     { value: "À faire", color: "bg-red-500" },
//     { value: "En cours", color: "bg-yellow-500" },
//     { value: "Fait", color: "bg-green-500" },
//     { value: "Bloqué", color: "bg-purple-500" },
//   ];

//   const priorityOptions = [
//     { value: "Haute", color: "bg-red-500" },
//     { value: "Moyenne", color: "bg-yellow-500" },
//     { value: "Basse", color: "bg-green-500" },
//   ];

//   // Ajouter une tâche
//   const addTask = () => {
//     if (!newTask.title) return alert("Veuillez saisir un titre pour la tâche.");
//     const task = { ...newTask, id: Date.now() };
//     setTasks([...tasks, task]);
//     setIsAddingTask(false); // Masquer le formulaire après l'ajout
//     setNewTask({
//       title: "",
//       remarks: "",
//       status: "À faire",
//       priority: "Moyenne",
//       startDate: new Date(),
//       endDate: new Date(),
//       files: [],
//     });

//     // Envoyer la tâche au backend ici (exemple avec fetch)
//     fetch("/api/tasks", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(task),
//     })
//       .then((response) => response.json())
//       .then((data) => console.log("Tâche enregistrée:", data))
//       .catch((error) => console.error("Erreur:", error));
//   };

//   // Supprimer une tâche
//   const deleteTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//     // Supprimer la tâche du backend ici
//     fetch(`/api/tasks/${id}`, { method: "DELETE" })
//       .then((response) => response.json())
//       .then((data) => console.log("Tâche supprimée:", data))
//       .catch((error) => console.error("Erreur:", error));
//   };

//   // Gérer l'ajout de fichiers
//   const handleFileUpload = (e) => {
//     const files = Array.from(e.target.files);
//     setNewTask({ ...newTask, files: [...newTask.files, ...files] });
//   };

//   // Modifier une tâche
//   const editTask = (task) => {
//     setEditingTaskId(task.id);
//     setNewTask(task); // Pré-remplir le formulaire avec les données de la tâche
//   };

//   // Enregistrer les modifications d'une tâche
//   const saveTask = () => {
//     const updatedTasks = tasks.map((task) =>
//       task.id === editingTaskId ? { ...task, ...newTask } : task
//     );
//     setTasks(updatedTasks);
//     setEditingTaskId(null);
//     setNewTask({
//       title: "",
//       remarks: "",
//       status: "À faire",
//       priority: "Moyenne",
//       startDate: new Date(),
//       endDate: new Date(),
//       files: [],
//     });

//     // Envoyer les modifications au backend ici (exemple avec fetch)
//     fetch(`/api/tasks/${editingTaskId}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newTask),
//     })
//       .then((response) => response.json())
//       .then((data) => console.log("Tâche mise à jour:", data))
//       .catch((error) => console.error("Erreur:", error));
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-semibold">Gestion des Tâches</h2>
//         <button
//           onClick={() => setIsAddingTask(true)} // Afficher le formulaire
//           className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//         >
//           <PlusCircle className="w-5 h-5 mr-2" /> Ajouter Tâche
//         </button>
//       </div>

//       {/* Tableau des tâches */}
//       <div className="bg-white rounded-lg shadow p-4">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-2 text-left">Tâche</th>
//               <th className="p-2 text-left">Remarques</th>
//               <th className="p-2 text-left">Statut</th>
//               <th className="p-2 text-left">Priorité</th>
//               <th className="p-2 text-left">Date de début</th>
//               <th className="p-2 text-left">Date de fin</th>
//               <th className="p-2 text-left">Fichiers</th>
//               <th className="p-2 text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* Formulaire intégré dans le tableau */}
//             {isAddingTask && (
//               <motion.tr
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="bg-gray-50"
//               >
//                 <td className="p-2">
//                   <input
//                     type="text"
//                     placeholder="Titre de la tâche"
//                     value={newTask.title}
//                     onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
//                     className="p-2 border border-gray-300 rounded-lg w-full"
//                   />
//                 </td>
//                 <td className="p-2">
//                   <input
//                     type="text"
//                     placeholder="Remarques"
//                     value={newTask.remarks}
//                     onChange={(e) => setNewTask({ ...newTask, remarks: e.target.value })}
//                     className="p-2 border border-gray-300 rounded-lg w-full"
//                   />
//                 </td>
//                 <td className="p-2 relative">
//                   <div
//                     onClick={() => setIsStatusOpen(!isStatusOpen)}
//                     className="p-2 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-between"
//                   >
//                     <span>{newTask.status}</span>
//                     <ChevronDown className="w-4 h-4" />
//                   </div>
//                   <AnimatePresence>
//                     {isStatusOpen && (
//                       <motion.div
//                         initial={{ opacity: 0, y: -10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -10 }}
//                         className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg"
//                       >
//                         {statusOptions.map((option) => (
//                           <div
//                             key={option.value}
//                             onClick={() => {
//                               setNewTask({ ...newTask, status: option.value });
//                               setIsStatusOpen(false);
//                             }}
//                             className={`p-2 cursor-pointer hover:bg-gray-100 ${
//                               newTask.status === option.value ? "bg-gray-100" : ""
//                             }`}
//                           >
//                             <span className={`px-2 py-1 rounded-full text-white ${option.color}`}>
//                               {option.value}
//                             </span>
//                           </div>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </td>
//                 <td className="p-2 relative">
//                   <div
//                     onClick={() => setIsPriorityOpen(!isPriorityOpen)}
//                     className="p-2 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-between"
//                   >
//                     <span>{newTask.priority}</span>
//                     <ChevronDown className="w-4 h-4" />
//                   </div>
//                   <AnimatePresence>
//                     {isPriorityOpen && (
//                       <motion.div
//                         initial={{ opacity: 0, y: -10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -10 }}
//                         className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg"
//                       >
//                         {priorityOptions.map((option) => (
//                           <div
//                             key={option.value}
//                             onClick={() => {
//                               setNewTask({ ...newTask, priority: option.value });
//                               setIsPriorityOpen(false);
//                             }}
//                             className={`p-2 cursor-pointer hover:bg-gray-100 ${
//                               newTask.priority === option.value ? "bg-gray-100" : ""
//                             }`}
//                           >
//                             <span className={`px-2 py-1 rounded-full text-white ${option.color}`}>
//                               {option.value}
//                             </span>
//                           </div>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </td>
//                 <td className="p-2">
//                   <DatePicker
//                     selected={newTask.startDate}
//                     onChange={(date) => setNewTask({ ...newTask, startDate: date })}
//                     className="p-2 border border-gray-300 rounded-lg w-full"
//                   />
//                 </td>
//                 <td className="p-2">
//                   <DatePicker
//                     selected={newTask.endDate}
//                     onChange={(date) => setNewTask({ ...newTask, endDate: date })}
//                     className="p-2 border border-gray-300 rounded-lg w-full"
//                   />
//                 </td>
//                 <td className="p-2">
//                   <label className="flex items-center cursor-pointer">
//                     <File className="w-5 h-5 mr-2" />
//                     <input type="file" multiple onChange={handleFileUpload} className="hidden" />
//                     Ajouter des fichiers
//                   </label>
//                 </td>
//                 <td className="p-2 text-center">
//                   <button
//                     onClick={addTask}
//                     className="text-green-500 hover:text-green-700 mr-2"
//                   >
//                     <Check className="w-5 h-5" />
//                   </button>
//                   <button
//                     onClick={() => setIsAddingTask(false)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     <X className="w-5 h-5" />
//                   </button>
//                 </td>
//               </motion.tr>
//             )}

//             {/* Liste des tâches existantes */}
//             {tasks.map((task) => (
//               <motion.tr
//                 key={task.id}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="border-b"
//               >
//                 <td className="p-2">
//                   {editingTaskId === task.id ? (
//                     <input
//                       type="text"
//                       value={newTask.title}
//                       onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
//                       className="p-2 border border-gray-300 rounded-lg w-full"
//                     />
//                   ) : (
//                     task.title
//                   )}
//                 </td>
//                 <td className="p-2">
//                   {editingTaskId === task.id ? (
//                     <input
//                       type="text"
//                       value={newTask.remarks}
//                       onChange={(e) => setNewTask({ ...newTask, remarks: e.target.value })}
//                       className="p-2 border border-gray-300 rounded-lg w-full"
//                     />
//                   ) : (
//                     task.remarks
//                   )}
//                 </td>
//                 <td className="p-2">
//                   <span
//                     className={`px-2 py-1 rounded-full text-white ${
//                       statusOptions.find((opt) => opt.value === task.status)?.color
//                     }`}
//                   >
//                     {task.status}
//                   </span>
//                 </td>
//                 <td className="p-2">
//                   <span
//                     className={`px-2 py-1 rounded-full text-white ${
//                       priorityOptions.find((opt) => opt.value === task.priority)?.color
//                     }`}
//                   >
//                     {task.priority}
//                   </span>
//                 </td>
//                 <td className="p-2">{task.startDate.toLocaleDateString()}</td>
//                 <td className="p-2">{task.endDate.toLocaleDateString()}</td>
//                 <td className="p-2">
//                   {task.files.map((file, index) => (
//                     <div key={index} className="flex items-center">
//                       <File className="w-4 h-4 mr-2" />
//                       <span>{file.name}</span>
//                     </div>
//                   ))}
//                 </td>
//                 <td className="p-2 text-center">
//                   {editingTaskId === task.id ? (
//                     <button
//                       onClick={saveTask}
//                       className="text-green-500 hover:text-green-700 mr-2"
//                     >
//                       <Check className="w-5 h-5" />
//                     </button>
//                   ) : (
//                     <button
//                       onClick={() => editTask(task)}
//                       className="text-blue-500 hover:text-blue-700 mr-2"
//                     >
//                       <Edit className="w-5 h-5" />
//                     </button>
//                   )}
//                   <button
//                     onClick={() => deleteTask(task.id)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     <Trash className="w-5 h-5" />
//                   </button>
//                 </td>
//               </motion.tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TaskManagement;








// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { PlusCircle, Trash, Calendar, File, Check, X, Edit, ChevronDown } from "lucide-react"; // Ajout de ChevronDown ici
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const TaskManagement = () => {
//   const [tasks, setTasks] = useState([]);
//   const [isAddingTask, setIsAddingTask] = useState(false); // État pour afficher/masquer le formulaire
//   const [newTask, setNewTask] = useState({
//     title: "",
//     remarks: "", // Ajout du champ "Remarques"
//     status: "À faire",
//     priority: "Moyenne",
//     startDate: new Date(),
//     endDate: new Date(),
//     files: [],
//   });

//   const [isStatusOpen, setIsStatusOpen] = useState(false); // État pour ouvrir/fermer le menu Statut
//   const [isPriorityOpen, setIsPriorityOpen] = useState(false); // État pour ouvrir/fermer le menu Priorité
//   const [editingTaskId, setEditingTaskId] = useState(null); // État pour gérer la tâche en cours de modification

//   // Options pour les étiquettes
//   const statusOptions = [
//     { value: "À faire", color: "bg-red-500" },
//     { value: "En cours", color: "bg-yellow-500" },
//     { value: "Fait", color: "bg-green-500" },
//     { value: "Bloqué", color: "bg-purple-500" },
//   ];

//   const priorityOptions = [
//     { value: "Haute", color: "bg-red-500" },
//     { value: "Moyenne", color: "bg-yellow-500" },
//     { value: "Basse", color: "bg-green-500" },
//   ];

//   // Ajouter une tâche
//   const addTask = () => {
//     if (!newTask.title) return alert("Veuillez saisir un titre pour la tâche.");
//     const task = { ...newTask, id: Date.now() };
//     setTasks([...tasks, task]);
//     setIsAddingTask(false); // Masquer le formulaire après l'ajout
//     setNewTask({
//       title: "",
//       remarks: "",
//       status: "À faire",
//       priority: "Moyenne",
//       startDate: new Date(),
//       endDate: new Date(),
//       files: [],
//     });

//     // Envoyer la tâche au backend ici (exemple avec fetch)
//     fetch("/api/tasks", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(task),
//     })
//       .then((response) => response.json())
//       .then((data) => console.log("Tâche enregistrée:", data))
//       .catch((error) => console.error("Erreur:", error));
//   };

//   // Supprimer une tâche
//   const deleteTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//     // Supprimer la tâche du backend ici
//     fetch(`/api/tasks/${id}`, { method: "DELETE" })
//       .then((response) => response.json())
//       .then((data) => console.log("Tâche supprimée:", data))
//       .catch((error) => console.error("Erreur:", error));
//   };

//   // Gérer l'ajout de fichiers
//   const handleFileUpload = (e) => {
//     const files = Array.from(e.target.files);
//     setNewTask({ ...newTask, files: [...newTask.files, ...files] });
//   };

//   // Modifier une tâche
//   const editTask = (task) => {
//     setEditingTaskId(task.id);
//     setNewTask(task); // Pré-remplir le formulaire avec les données de la tâche
//   };

//   // Enregistrer les modifications d'une tâche
//   const saveTask = () => {
//     const updatedTasks = tasks.map((task) =>
//       task.id === editingTaskId ? { ...task, ...newTask } : task
//     );
//     setTasks(updatedTasks);
//     setEditingTaskId(null);
//     setNewTask({
//       title: "",
//       remarks: "",
//       status: "À faire",
//       priority: "Moyenne",
//       startDate: new Date(),
//       endDate: new Date(),
//       files: [],
//     });

//     // Envoyer les modifications au backend ici (exemple avec fetch)
//     fetch(`/api/tasks/${editingTaskId}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newTask),
//     })
//       .then((response) => response.json())
//       .then((data) => console.log("Tâche mise à jour:", data))
//       .catch((error) => console.error("Erreur:", error));
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-semibold">Gestion des Tâches</h2>
//         <button
//           onClick={() => setIsAddingTask(true)} // Afficher le formulaire
//           className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//         >
//           <PlusCircle className="w-5 h-5 mr-2" /> Ajouter Tâche
//         </button>
//       </div>

//       {/* Tableau des tâches */}
//       <div className="bg-white rounded-lg shadow p-4">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-2 text-left">Tâche</th>
//               <th className="p-2 text-left">Remarques</th>
//               <th className="p-2 text-left">Statut</th>
//               <th className="p-2 text-left">Priorité</th>
//               <th className="p-2 text-left">Date de début</th>
//               <th className="p-2 text-left">Date de fin</th>
//               <th className="p-2 text-left">Fichiers</th>
//               <th className="p-2 text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* Formulaire intégré dans le tableau */}
//             {isAddingTask && (
//               <motion.tr
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="bg-gray-50"
//               >
//                 <td className="p-2">
//                   <input
//                     type="text"
//                     placeholder="Titre de la tâche"
//                     value={newTask.title}
//                     onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
//                     className="p-2 border border-gray-300 rounded-lg w-full"
//                   />
//                 </td>
//                 <td className="p-2">
//                   <input
//                     type="text"
//                     placeholder="Remarques"
//                     value={newTask.remarks}
//                     onChange={(e) => setNewTask({ ...newTask, remarks: e.target.value })}
//                     className="p-2 border border-gray-300 rounded-lg w-full"
//                   />
//                 </td>
//                 <td className="p-2 relative">
//                   <div
//                     onClick={() => setIsStatusOpen(!isStatusOpen)}
//                     className="p-2 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-between"
//                   >
//                     <span>{newTask.status}</span>
//                     <ChevronDown className="w-4 h-4" />
//                   </div>
//                   <AnimatePresence>
//                     {isStatusOpen && (
//                       <motion.div
//                         initial={{ opacity: 0, y: -10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -10 }}
//                         className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg"
//                       >
//                         {statusOptions.map((option) => (
//                           <div
//                             key={option.value}
//                             onClick={() => {
//                               setNewTask({ ...newTask, status: option.value });
//                               setIsStatusOpen(false);
//                             }}
//                             className={`p-2 cursor-pointer hover:bg-gray-100 ${
//                               newTask.status === option.value ? "bg-gray-100" : ""
//                             }`}
//                           >
//                             <span className={`px-2 py-1 rounded-full text-white ${option.color}`}>
//                               {option.value}
//                             </span>
//                           </div>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </td>
//                 <td className="p-2 relative">
//                   <div
//                     onClick={() => setIsPriorityOpen(!isPriorityOpen)}
//                     className="p-2 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-between"
//                   >
//                     <span>{newTask.priority}</span>
//                     <ChevronDown className="w-4 h-4" />
//                   </div>
//                   <AnimatePresence>
//                     {isPriorityOpen && (
//                       <motion.div
//                         initial={{ opacity: 0, y: -10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -10 }}
//                         className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg"
//                       >
//                         {priorityOptions.map((option) => (
//                           <div
//                             key={option.value}
//                             onClick={() => {
//                               setNewTask({ ...newTask, priority: option.value });
//                               setIsPriorityOpen(false);
//                             }}
//                             className={`p-2 cursor-pointer hover:bg-gray-100 ${
//                               newTask.priority === option.value ? "bg-gray-100" : ""
//                             }`}
//                           >
//                             <span className={`px-2 py-1 rounded-full text-white ${option.color}`}>
//                               {option.value}
//                             </span>
//                           </div>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </td>
//                 <td className="p-2">
//                   <DatePicker
//                     selected={newTask.startDate}
//                     onChange={(date) => setNewTask({ ...newTask, startDate: date })}
//                     className="p-2 border border-gray-300 rounded-lg w-full"
//                   />
//                 </td>
//                 <td className="p-2">
//                   <DatePicker
//                     selected={newTask.endDate}
//                     onChange={(date) => setNewTask({ ...newTask, endDate: date })}
//                     className="p-2 border border-gray-300 rounded-lg w-full"
//                   />
//                 </td>
//                 <td className="p-2">
//                   <label className="flex items-center cursor-pointer">
//                     <File className="w-5 h-5 mr-2" />
//                     <input type="file" multiple onChange={handleFileUpload} className="hidden" />
//                     Ajouter des fichiers
//                   </label>
//                 </td>
//                 <td className="p-2 text-center">
//                   <button
//                     onClick={addTask}
//                     className="text-green-500 hover:text-green-700 mr-2"
//                   >
//                     <Check className="w-5 h-5" />
//                   </button>
//                   <button
//                     onClick={() => setIsAddingTask(false)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     <X className="w-5 h-5" />
//                   </button>
//                 </td>
//               </motion.tr>
//             )}

//             {/* Liste des tâches existantes */}
//             {tasks.map((task) => (
//               <motion.tr
//                 key={task.id}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="border-b"
//               >
//                 <td className="p-2">
//                   {editingTaskId === task.id ? (
//                     <input
//                       type="text"
//                       value={newTask.title}
//                       onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
//                       className="p-2 border border-gray-300 rounded-lg w-full"
//                     />
//                   ) : (
//                     task.title
//                   )}
//                 </td>
//                 <td className="p-2">
//                   {editingTaskId === task.id ? (
//                     <input
//                       type="text"
//                       value={newTask.remarks}
//                       onChange={(e) => setNewTask({ ...newTask, remarks: e.target.value })}
//                       className="p-2 border border-gray-300 rounded-lg w-full"
//                     />
//                   ) : (
//                     task.remarks
//                   )}
//                 </td>
//                 <td className="p-2">
//                   <span
//                     className={`px-2 py-1 rounded-full text-white ${
//                       statusOptions.find((opt) => opt.value === task.status)?.color
//                     }`}
//                   >
//                     {task.status}
//                   </span>
//                 </td>
//                 <td className="p-2">
//                   <span
//                     className={`px-2 py-1 rounded-full text-white ${
//                       priorityOptions.find((opt) => opt.value === task.priority)?.color
//                     }`}
//                   >
//                     {task.priority}
//                   </span>
//                 </td>
//                 <td className="p-2">{task.startDate.toLocaleDateString()}</td>
//                 <td className="p-2">{task.endDate.toLocaleDateString()}</td>
//                 <td className="p-2">
//                   {task.files.map((file, index) => (
//                     <div key={index} className="flex items-center">
//                       <File className="w-4 h-4 mr-2" />
//                       <span>{file.name}</span>
//                     </div>
//                   ))}
//                 </td>
//                 <td className="p-2 text-center">
//                   {editingTaskId === task.id ? (
//                     <button
//                       onClick={saveTask}
//                       className="text-green-500 hover:text-green-700 mr-2"
//                     >
//                       <Check className="w-5 h-5" />
//                     </button>
//                   ) : (
//                     <button
//                       onClick={() => editTask(task)}
//                       className="text-blue-500 hover:text-blue-700 mr-2"
//                     >
//                       <Edit className="w-5 h-5" />
//                     </button>
//                   )}
//                   <button
//                     onClick={() => deleteTask(task.id)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     <Trash className="w-5 h-5" />
//                   </button>
//                 </td>
//               </motion.tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TaskManagement;


// NORMAL SANS PHASES CREATION

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { PlusCircle, Trash, Calendar, File, Check, X, Edit, ChevronDown } from "lucide-react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const TaskManagement = () => {
//   const [tasks, setTasks] = useState([]);
//   const [isAddingTask, setIsAddingTask] = useState(false);
//   const [newTask, setNewTask] = useState({
//     title: "",
//     remarks: "",
//     status: "À faire",
//     priority: "Moyenne",
//     startDate: new Date(),
//     endDate: new Date(),
//     files: [],
//   });

//   const [isStatusOpen, setIsStatusOpen] = useState(false);
//   const [isPriorityOpen, setIsPriorityOpen] = useState(false);
//   const [editingTaskId, setEditingTaskId] = useState(null);
//   const [customStatus, setCustomStatus] = useState("");
//   const [customPriority, setCustomPriority] = useState("");

//   // Options pour les étiquettes
//   const [statusOptions, setStatusOptions] = useState([
//     { value: "À faire", color: "bg-red-500" },
//     { value: "En cours", color: "bg-yellow-500" },
//     { value: "Fait", color: "bg-green-500" },
//     { value: "Bloqué", color: "bg-purple-500" },
//   ]);

//   const [priorityOptions, setPriorityOptions] = useState([
//     { value: "Haute", color: "bg-red-500" },
//     { value: "Moyenne", color: "bg-yellow-500" },
//     { value: "Basse", color: "bg-green-500" },
//   ]);

//   // Ajouter une tâche
//   const addTask = () => {
//     if (!newTask.title) return alert("Veuillez saisir un titre pour la tâche.");
//     const task = { ...newTask, id: Date.now() };
//     setTasks([...tasks, task]);
//     setIsAddingTask(false);
//     setNewTask({
//       title: "",
//       remarks: "",
//       status: "À faire",
//       priority: "Moyenne",
//       startDate: new Date(),
//       endDate: new Date(),
//       files: [],
//     });
//   };

//   // Supprimer une tâche
//   const deleteTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   // Gérer l'ajout de fichiers
//   const handleFileUpload = (e) => {
//     const files = Array.from(e.target.files);
//     setNewTask({ ...newTask, files: [...newTask.files, ...files] });
//   };

//   // Modifier une tâche
//   const editTask = (task) => {
//     setEditingTaskId(task.id);
//     setNewTask(task);
//   };

//   // Enregistrer les modifications d'une tâche
//   const saveTask = () => {
//     const updatedTasks = tasks.map((task) =>
//       task.id === editingTaskId ? { ...task, ...newTask } : task
//     );
//     setTasks(updatedTasks);
//     setEditingTaskId(null);
//     setNewTask({
//       title: "",
//       remarks: "",
//       status: "À faire",
//       priority: "Moyenne",
//       startDate: new Date(),
//       endDate: new Date(),
//       files: [],
//     });
//   };

//   // Ajouter un statut personnalisé
//   const addCustomStatus = () => {
//     if (customStatus) {
//       setStatusOptions([...statusOptions, { value: customStatus, color: "bg-gray-500" }]);
//       setNewTask({ ...newTask, status: customStatus });
//       setCustomStatus("");
//       setIsStatusOpen(false);
//     }
//   };

//   // Ajouter une priorité personnalisée
//   const addCustomPriority = () => {
//     if (customPriority) {
//       setPriorityOptions([...priorityOptions, { value: customPriority, color: "bg-gray-500" }]);
//       setNewTask({ ...newTask, priority: customPriority });
//       setCustomPriority("");
//       setIsPriorityOpen(false);
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-semibold">Gestion des Tâches</h2>
//         <button
//           onClick={() => setIsAddingTask(true)}
//           className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//         >
//           <PlusCircle className="w-5 h-5 mr-2" /> Ajouter Tâche
//         </button>
//       </div>

//       {/* Tableau des tâches */}
//       <div className="bg-white rounded-lg shadow p-4">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-2 text-left">Tâche</th>
//               <th className="p-2 text-left">Remarques</th>
//               <th className="p-2 text-left">Statut</th>
//               <th className="p-2 text-left">Priorité</th>
//               <th className="p-2 text-left">Date de début</th>
//               <th className="p-2 text-left">Date de fin</th>
//               <th className="p-2 text-left">Fichiers</th>
//               <th className="p-2 text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* Formulaire intégré dans le tableau */}
//             {isAddingTask && (
//               <motion.tr
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="bg-gray-50"
//               >
//                 <td className="p-2">
//                   <input
//                     type="text"
//                     placeholder="Titre de la tâche"
//                     value={newTask.title}
//                     onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
//                     className="p-2 border border-gray-300 rounded-lg w-full"
//                   />
//                 </td>
//                 <td className="p-2">
//                   <input
//                     type="text"
//                     placeholder="Remarques"
//                     value={newTask.remarks}
//                     onChange={(e) => setNewTask({ ...newTask, remarks: e.target.value })}
//                     className="p-2 border border-gray-300 rounded-lg w-full"
//                   />
//                 </td>
//                 <td className="p-2 relative">
//                   <div
//                     onClick={() => setIsStatusOpen(!isStatusOpen)}
//                     className="p-2 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-between"
//                   >
//                     <span
//                       className={`px-2 py-1 rounded-full text-white ${
//                         statusOptions.find((opt) => opt.value === newTask.status)?.color
//                       }`}
//                     >
//                       {newTask.status}
//                     </span>
//                     <ChevronDown className="w-4 h-4" />
//                   </div>
//                   <AnimatePresence>
//                     {isStatusOpen && (
//                       <motion.div
//                         initial={{ opacity: 0, y: -10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -10 }}
//                         className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg"
//                       >
//                         {statusOptions.map((option) => (
//                           <div
//                             key={option.value}
//                             onClick={() => {
//                               setNewTask({ ...newTask, status: option.value });
//                               setIsStatusOpen(false);
//                             }}
//                             className={`p-2 cursor-pointer hover:bg-gray-100 ${
//                               newTask.status === option.value ? "bg-gray-100" : ""
//                             }`}
//                           >
//                             <span className={`px-2 py-1 rounded-full text-white ${option.color}`}>
//                               {option.value}
//                             </span>
//                           </div>
//                         ))}
//                         <div className="p-2">
//                           <input
//                             type="text"
//                             placeholder="Nouveau statut"
//                             value={customStatus}
//                             onChange={(e) => setCustomStatus(e.target.value)}
//                             className="p-2 border border-gray-300 rounded-lg w-full"
//                           />
//                           <button
//                             onClick={addCustomStatus}
//                             className="mt-2 flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//                           >
//                             <PlusCircle className="w-5 h-5 mr-2" /> Ajouter
//                           </button>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </td>
//                 <td className="p-2 relative">
//                   <div
//                     onClick={() => setIsPriorityOpen(!isPriorityOpen)}
//                     className="p-2 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-between"
//                   >
//                     <span
//                       className={`px-2 py-1 rounded-full text-white ${
//                         priorityOptions.find((opt) => opt.value === newTask.priority)?.color
//                       }`}
//                     >
//                       {newTask.priority}
//                     </span>
//                     <ChevronDown className="w-4 h-4" />
//                   </div>
//                   <AnimatePresence>
//                     {isPriorityOpen && (
//                       <motion.div
//                         initial={{ opacity: 0, y: -10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -10 }}
//                         className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg"
//                       >
//                         {priorityOptions.map((option) => (
//                           <div
//                             key={option.value}
//                             onClick={() => {
//                               setNewTask({ ...newTask, priority: option.value });
//                               setIsPriorityOpen(false);
//                             }}
//                             className={`p-2 cursor-pointer hover:bg-gray-100 ${
//                               newTask.priority === option.value ? "bg-gray-100" : ""
//                             }`}
//                           >
//                             <span className={`px-2 py-1 rounded-full text-white ${option.color}`}>
//                               {option.value}
//                             </span>
//                           </div>
//                         ))}
//                         <div className="p-2">
//                           <input
//                             type="text"
//                             placeholder="Nouvelle priorité"
//                             value={customPriority}
//                             onChange={(e) => setCustomPriority(e.target.value)}
//                             className="p-2 border border-gray-300 rounded-lg w-full"
//                           />
//                           <button
//                             onClick={addCustomPriority}
//                             className="mt-2 flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//                           >
//                             <PlusCircle className="w-5 h-5 mr-2" /> Ajouter
//                           </button>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </td>
//                 <td className="p-2">
//                   <DatePicker
//                     selected={newTask.startDate}
//                     onChange={(date) => setNewTask({ ...newTask, startDate: date })}
//                     className="p-2 border border-gray-300 rounded-lg w-full"
//                   />
//                 </td>
//                 <td className="p-2">
//                   <DatePicker
//                     selected={newTask.endDate}
//                     onChange={(date) => setNewTask({ ...newTask, endDate: date })}
//                     className="p-2 border border-gray-300 rounded-lg w-full"
//                   />
//                 </td>
//                 <td className="p-2">
//                   <label className="flex items-center cursor-pointer">
//                     <File className="w-5 h-5 mr-2" />
//                     <input type="file" multiple onChange={handleFileUpload} className="hidden" />
//                     Ajouter des fichiers
//                   </label>
//                 </td>
//                 <td className="p-2 text-center">
//                   <button
//                     onClick={addTask}
//                     className="text-green-500 hover:text-green-700 mr-2"
//                   >
//                     <Check className="w-5 h-5" />
//                   </button>
//                   <button
//                     onClick={() => setIsAddingTask(false)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     <X className="w-5 h-5" />
//                   </button>
//                 </td>
//               </motion.tr>
//             )}

//             {/* Liste des tâches existantes */}
//             {tasks.map((task) => (
//               <motion.tr
//                 key={task.id}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="border-b"
//               >
//                 <td className="p-2">
//                   {editingTaskId === task.id ? (
//                     <input
//                       type="text"
//                       value={newTask.title}
//                       onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
//                       className="p-2 border border-gray-300 rounded-lg w-full"
//                     />
//                   ) : (
//                     task.title
//                   )}
//                 </td>
//                 <td className="p-2">
//                   {editingTaskId === task.id ? (
//                     <input
//                       type="text"
//                       value={newTask.remarks}
//                       onChange={(e) => setNewTask({ ...newTask, remarks: e.target.value })}
//                       className="p-2 border border-gray-300 rounded-lg w-full"
//                     />
//                   ) : (
//                     task.remarks
//                   )}
//                 </td>
//                 <td className="p-2">
//                   <span
//                     className={`px-2 py-1 rounded-full text-white ${
//                       statusOptions.find((opt) => opt.value === task.status)?.color
//                     }`}
//                   >
//                     {task.status}
//                   </span>
//                 </td>
//                 <td className="p-2">
//                   <span
//                     className={`px-2 py-1 rounded-full text-white ${
//                       priorityOptions.find((opt) => opt.value === task.priority)?.color
//                     }`}
//                   >
//                     {task.priority}
//                   </span>
//                 </td>
//                 <td className="p-2">{task.startDate.toLocaleDateString()}</td>
//                 <td className="p-2">{task.endDate.toLocaleDateString()}</td>
//                 <td className="p-2">
//                   {task.files.map((file, index) => (
//                     <div key={index} className="flex items-center">
//                       <File className="w-4 h-4 mr-2" />
//                       <span>{file.name}</span>
//                     </div>
//                   ))}
//                 </td>
//                 <td className="p-2 text-center">
//                   {editingTaskId === task.id ? (
//                     <button
//                       onClick={saveTask}
//                       className="text-green-500 hover:text-green-700 mr-2"
//                     >
//                       <Check className="w-5 h-5" />
//                     </button>
//                   ) : (
//                     <button
//                       onClick={() => editTask(task)}
//                       className="text-blue-500 hover:text-blue-700 mr-2"
//                     >
//                       <Edit className="w-5 h-5" />
//                     </button>
//                   )}
//                   <button
//                     onClick={() => deleteTask(task.id)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     <Trash className="w-5 h-5" />
//                   </button>
//                 </td>
//               </motion.tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TaskManagement;




//PHASES TROUBLES AVEC SAISIE DES TACHES 
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { PlusCircle, Trash, Calendar, File, Check, X, Edit, ChevronDown, Copy } from "lucide-react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const TaskManagement = () => {
//   const [phases, setPhases] = useState([
//     {
//       id: 1,
//       name: "Phase 1",
//       tasks: [],
//     },
//   ]);

//   const [isAddingTask, setIsAddingTask] = useState(false);
//   const [newTask, setNewTask] = useState({
//     title: "",
//     remarks: "",
//     status: "À faire",
//     priority: "Moyenne",
//     startDate: new Date(),
//     endDate: new Date(),
//     files: [],
//     phaseId: 1, // Par défaut, la tâche est ajoutée à la première phase
//   });

//   const [isStatusOpen, setIsStatusOpen] = useState(false);
//   const [isPriorityOpen, setIsPriorityOpen] = useState(false);
//   const [editingTaskId, setEditingTaskId] = useState(null);
//   const [customStatus, setCustomStatus] = useState("");
//   const [customPriority, setCustomPriority] = useState("");
//   const [editingPhaseId, setEditingPhaseId] = useState(null);
//   const [newPhaseName, setNewPhaseName] = useState("");

//   // Options pour les étiquettes
//   const [statusOptions, setStatusOptions] = useState([
//     { value: "À faire", color: "bg-red-500" },
//     { value: "En cours", color: "bg-yellow-500" },
//     { value: "Fait", color: "bg-green-500" },
//     { value: "Bloqué", color: "bg-purple-500" },
//   ]);

//   const [priorityOptions, setPriorityOptions] = useState([
//     { value: "Haute", color: "bg-red-500" },
//     { value: "Moyenne", color: "bg-yellow-500" },
//     { value: "Basse", color: "bg-green-500" },
//   ]);

//   // Ajouter une phase
//   const addPhase = () => {
//     const newPhase = {
//       id: Date.now(),
//       name: newPhaseName || "Nouveau Groupe",
//       tasks: [],
//     };
//     setPhases([...phases, newPhase]);
//     setNewPhaseName("");
//   };

//   // Renommer une phase
//   const renamePhase = (phaseId, newName) => {
//     setPhases((prevPhases) =>
//       prevPhases.map((phase) =>
//         phase.id === phaseId ? { ...phase, name: newName } : phase
//       )
//     );
//     setEditingPhaseId(null);
//   };

//   // Dupliquer une phase
//   const duplicatePhase = (phaseId) => {
//     const phaseToDuplicate = phases.find((phase) => phase.id === phaseId);
//     if (!phaseToDuplicate) return;
//     const duplicatedPhase = {
//       ...phaseToDuplicate,
//       id: Date.now(),
//       name: `${phaseToDuplicate.name} (Copie)`,
//     };
//     setPhases([...phases, duplicatedPhase]);
//   };

//   // Ajouter une tâche
//   const addTask = () => {
//     if (!newTask.title) return alert("Veuillez saisir un titre pour la tâche.");
//     const task = { ...newTask, id: Date.now() };
//     const updatedPhases = phases.map((phase) =>
//       phase.id === newTask.phaseId
//         ? { ...phase, tasks: [...phase.tasks, task] }
//         : phase
//     );
//     setPhases(updatedPhases);
//     setIsAddingTask(false);
//     setNewTask({
//       title: "",
//       remarks: "",
//       status: "À faire",
//       priority: "Moyenne",
//       startDate: new Date(),
//       endDate: new Date(),
//       files: [],
//       phaseId: newTask.phaseId, // Conserver la phase actuelle
//     });
//   };

//   // Supprimer une tâche
//   const deleteTask = (phaseId, taskId) => {
//     const updatedPhases = phases.map((phase) =>
//       phase.id === phaseId
//         ? { ...phase, tasks: phase.tasks.filter((task) => task.id !== taskId) }
//         : phase
//     );
//     setPhases(updatedPhases);
//   };

//   // Gérer l'ajout de fichiers
//   const handleFileUpload = (e) => {
//     const files = Array.from(e.target.files);
//     setNewTask({ ...newTask, files: [...newTask.files, ...files] });
//   };

//   // Modifier une tâche
//   const editTask = (task) => {
//     setEditingTaskId(task.id);
//     setNewTask(task);
//   };

//   // Enregistrer les modifications d'une tâche
//   const saveTask = () => {
//     const updatedPhases = phases.map((phase) => ({
//       ...phase,
//       tasks: phase.tasks.map((task) =>
//         task.id === editingTaskId ? { ...task, ...newTask } : task
//       ),
//     }));
//     setPhases(updatedPhases);
//     setEditingTaskId(null);
//     setNewTask({
//       title: "",
//       remarks: "",
//       status: "À faire",
//       priority: "Moyenne",
//       startDate: new Date(),
//       endDate: new Date(),
//       files: [],
//       phaseId: newTask.phaseId, // Conserver la phase actuelle
//     });
//   };

//   // Ajouter un statut personnalisé
//   const addCustomStatus = () => {
//     if (customStatus) {
//       setStatusOptions([...statusOptions, { value: customStatus, color: "bg-gray-500" }]);
//       setNewTask({ ...newTask, status: customStatus });
//       setCustomStatus("");
//       setIsStatusOpen(false);
//     }
//   };

//   // Ajouter une priorité personnalisée
//   const addCustomPriority = () => {
//     if (customPriority) {
//       setPriorityOptions([...priorityOptions, { value: customPriority, color: "bg-gray-500" }]);
//       setNewTask({ ...newTask, priority: customPriority });
//       setCustomPriority("");
//       setIsPriorityOpen(false);
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-semibold">Gestion des Tâches</h2>
//         <div className="flex items-center space-x-4">
//           <input
//             type="text"
//             placeholder="Nom de la phase"
//             value={newPhaseName}
//             onChange={(e) => setNewPhaseName(e.target.value)}
//             className="p-2 border border-gray-300 rounded-lg"
//           />
//           <button
//             onClick={addPhase}
//             className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//           >
//             <PlusCircle className="w-5 h-5 mr-2" /> Ajouter Phase
//           </button>
//         </div>
//       </div>

//       {/* Liste des phases */}
//       <div className="space-y-4">
//         {phases.map((phase) => (
//           <motion.div
//             key={phase.id}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="bg-white rounded-lg shadow p-4"
//           >
//             <div className="flex justify-between items-center mb-4">
//               {editingPhaseId === phase.id ? (
//                 <input
//                   type="text"
//                   value={phase.name}
//                   onChange={(e) => renamePhase(phase.id, e.target.value)}
//                   className="p-2 border border-gray-300 rounded-lg w-full"
//                 />
//               ) : (
//                 <h3 className="text-lg font-semibold">{phase.name}</h3>
//               )}
//               <div className="flex space-x-2">
//                 <button
//                   onClick={() => setEditingPhaseId(phase.id)}
//                   className="text-blue-500 hover:text-blue-700"
//                 >
//                   <Edit className="w-5 h-5" />
//                 </button>
//                 <button
//                   onClick={() => duplicatePhase(phase.id)}
//                   className="text-green-500 hover:text-green-700"
//                 >
//                   <Copy className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>

//             {/* Tableau des tâches */}
//             <table className="w-full border-collapse">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="p-2 text-left">Tâche</th>
//                   <th className="p-2 text-left">Remarques</th>
//                   <th className="p-2 text-left">Statut</th>
//                   <th className="p-2 text-left">Priorité</th>
//                   <th className="p-2 text-left">Date de début</th>
//                   <th className="p-2 text-left">Date de fin</th>
//                   <th className="p-2 text-left">Fichiers</th>
//                   <th className="p-2 text-center">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {phase.tasks.map((task) => (
//                   <motion.tr
//                     key={task.id}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="border-b"
//                   >
//                     <td className="p-2">
//                       {editingTaskId === task.id ? (
//                         <input
//                           type="text"
//                           value={newTask.title}
//                           onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
//                           className="p-2 border border-gray-300 rounded-lg w-full"
//                         />
//                       ) : (
//                         task.title
//                       )}
//                     </td>
//                     <td className="p-2">
//                       {editingTaskId === task.id ? (
//                         <input
//                           type="text"
//                           value={newTask.remarks}
//                           onChange={(e) => setNewTask({ ...newTask, remarks: e.target.value })}
//                           className="p-2 border border-gray-300 rounded-lg w-full"
//                         />
//                       ) : (
//                         task.remarks
//                       )}
//                     </td>
//                     <td className="p-2">
//                       <span
//                         className={`px-2 py-1 rounded-full text-white ${
//                           statusOptions.find((opt) => opt.value === task.status)?.color
//                         }`}
//                       >
//                         {task.status}
//                       </span>
//                     </td>
//                     <td className="p-2">
//                       <span
//                         className={`px-2 py-1 rounded-full text-white ${
//                           priorityOptions.find((opt) => opt.value === task.priority)?.color
//                         }`}
//                       >
//                         {task.priority}
//                       </span>
//                     </td>
//                     <td className="p-2">{task.startDate.toLocaleDateString()}</td>
//                     <td className="p-2">{task.endDate.toLocaleDateString()}</td>
//                     <td className="p-2">
//                       {task.files.map((file, index) => (
//                         <div key={index} className="flex items-center">
//                           <File className="w-4 h-4 mr-2" />
//                           <span>{file.name}</span>
//                         </div>
//                       ))}
//                     </td>
//                     <td className="p-2 text-center">
//                       {editingTaskId === task.id ? (
//                         <button
//                           onClick={saveTask}
//                           className="text-green-500 hover:text-green-700 mr-2"
//                         >
//                           <Check className="w-5 h-5" />
//                         </button>
//                       ) : (
//                         <button
//                           onClick={() => editTask(task)}
//                           className="text-blue-500 hover:text-blue-700 mr-2"
//                         >
//                           <Edit className="w-5 h-5" />
//                         </button>
//                       )}
//                       <button
//                         onClick={() => deleteTask(phase.id, task.id)}
//                         className="text-red-500 hover:text-red-700"
//                       >
//                         <Trash className="w-5 h-5" />
//                       </button>
//                     </td>
//                   </motion.tr>
//                 ))}
//               </tbody>
//             </table>

//             {/* Bouton pour ajouter une tâche à la phase */}
//             <div className="mt-4">
//               <button
//                 onClick={() => {
//                   setNewTask({ ...newTask, phaseId: phase.id });
//                   setIsAddingTask(true);
//                 }}
//                 className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
//               >
//                 <PlusCircle className="w-5 h-5 mr-2" /> Ajouter Tâche
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Formulaire pour ajouter une tâche */}
//       <AnimatePresence>
//         {isAddingTask && (
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
//           >
//             <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
//               <h3 className="text-lg font-semibold mb-4">Ajouter une tâche</h3>
//               <div className="space-y-4">
//                 <input
//                   type="text"
//                   placeholder="Titre de la tâche"
//                   value={newTask.title}
//                   onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
//                   className="p-2 border border-gray-300 rounded-lg w-full"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Remarques"
//                   value={newTask.remarks}
//                   onChange={(e) => setNewTask({ ...newTask, remarks: e.target.value })}
//                   className="p-2 border border-gray-300 rounded-lg w-full"
//                 />
//                 <div className="flex space-x-4">
//                   <DatePicker
//                     selected={newTask.startDate}
//                     onChange={(date) => setNewTask({ ...newTask, startDate: date })}
//                     className="p-2 border border-gray-300 rounded-lg w-full"
//                   />
//                   <DatePicker
//                     selected={newTask.endDate}
//                     onChange={(date) => setNewTask({ ...newTask, endDate: date })}
//                     className="p-2 border border-gray-300 rounded-lg w-full"
//                   />
//                 </div>
//                 <label className="flex items-center cursor-pointer">
//                   <File className="w-5 h-5 mr-2" />
//                   <input type="file" multiple onChange={handleFileUpload} className="hidden" />
//                   Ajouter des fichiers
//                 </label>
//                 <div className="flex justify-end space-x-4">
//                   <button
//                     onClick={addTask}
//                     className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
//                   >
//                     <Check className="w-5 h-5 mr-2" /> Ajouter
//                   </button>
//                   <button
//                     onClick={() => setIsAddingTask(false)}
//                     className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
//                   >
//                     <X className="w-5 h-5 mr-2" /> Annuler
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// // export default TaskManagement;



// ///mon code reussie nrj3o

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { PlusCircle, Trash, Calendar, File, Check, X, Edit, ChevronDown, Copy } from "lucide-react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";


// const TaskManagement = () => {
//   const [phases, setPhases] = useState([
//     {
//       id: 1,
//       name: "Phase 1",
//       tasks: [],
//     },
//   ]);

//   const [isAddingTask, setIsAddingTask] = useState(false);
//   const [newTask, setNewTask] = useState({
//     title: "",
//     remarks: "",
//     status: "À faire",
//     priority: "Moyenne",
//     startDate: new Date(),
//     endDate: new Date(),
//     files: [],
//     phaseId: 1, // Par défaut, la tâche est ajoutée à la première phase
//   });

//   const [isStatusOpen, setIsStatusOpen] = useState(false);
//   const [isPriorityOpen, setIsPriorityOpen] = useState(false);
//   const [editingTaskId, setEditingTaskId] = useState(null);
//   const [customStatus, setCustomStatus] = useState("");
//   const [customPriority, setCustomPriority] = useState("");
//   const [editingPhaseId, setEditingPhaseId] = useState(null);
//   const [newPhaseName, setNewPhaseName] = useState("");

//   // Options pour les étiquettes
//   const [statusOptions, setStatusOptions] = useState([
//     { value: "À faire", color: "bg-red-500" },
//     { value: "En cours", color: "bg-yellow-500" },
//     { value: "Fait", color: "bg-green-500" },
//     { value: "Bloqué", color: "bg-purple-500" },
//   ]);

//   const [priorityOptions, setPriorityOptions] = useState([
//     { value: "Haute", color: "bg-red-500" },
//     { value: "Moyenne", color: "bg-yellow-500" },
//     { value: "Basse", color: "bg-green-500" },
//   ]);

//   // Ajouter une phase
//   const addPhase = () => {
//     const newPhase = {
//       id: Date.now(),
//       name: newPhaseName || "Nouveau Groupe",
//       tasks: [],
//     };
//     setPhases([...phases, newPhase]);
//     setNewPhaseName("");
//   };

//   // Renommer une phase
//   const renamePhase = (phaseId, newName) => {
//     setPhases((prevPhases) =>
//       prevPhases.map((phase) =>
//         phase.id === phaseId ? { ...phase, name: newName } : phase
//       )
//     );
//     setEditingPhaseId(null);
//   };

//   // Dupliquer une phase
//   const duplicatePhase = (phaseId) => {
//     const phaseToDuplicate = phases.find((phase) => phase.id === phaseId);
//     if (!phaseToDuplicate) return;
//     const duplicatedPhase = {
//       ...phaseToDuplicate,
//       id: Date.now(),
//       name: `${phaseToDuplicate.name} (Copie)`,
//     };
//     setPhases([...phases, duplicatedPhase]);
//   };

//   // Ajouter une tâche
//   const addTask = () => {
//     if (!newTask.title) return alert("Veuillez saisir un titre pour la tâche.");
//     const task = { ...newTask, id: Date.now() };
//     const updatedPhases = phases.map((phase) =>
//       phase.id === newTask.phaseId
//         ? { ...phase, tasks: [...phase.tasks, task] }
//         : phase
//     );
//     setPhases(updatedPhases);
//     setIsAddingTask(false);
//     setNewTask({
//       title: "",
//       remarks: "",
//       status: "À faire",
//       priority: "Moyenne",
//       startDate: new Date(),
//       endDate: new Date(),
//       files: [],
//       phaseId: newTask.phaseId, // Conserver la phase actuelle
//     });
//   };

//   // Supprimer une tâche
//   const deleteTask = (phaseId, taskId) => {
//     const updatedPhases = phases.map((phase) =>
//       phase.id === phaseId
//         ? { ...phase, tasks: phase.tasks.filter((task) => task.id !== taskId) }
//         : phase
//     );
//     setPhases(updatedPhases);
//   };

//   // Gérer l'ajout de fichiers
//   const handleFileUpload = (e) => {
//     const files = Array.from(e.target.files);
//     setNewTask({ ...newTask, files: [...newTask.files, ...files] });
//   };

//   // Modifier une tâche
//   const editTask = (task) => {
//     setEditingTaskId(task.id);
//     setNewTask(task);
//   };

//   // Enregistrer les modifications d'une tâche
//   const saveTask = () => {
//     const updatedPhases = phases.map((phase) => ({
//       ...phase,
//       tasks: phase.tasks.map((task) =>
//         task.id === editingTaskId ? { ...task, ...newTask } : task
//       ),
//     }));
//     setPhases(updatedPhases);
//     setEditingTaskId(null);
//     setNewTask({
//       title: "",
//       remarks: "",
//       status: "À faire",
//       priority: "Moyenne",
//       startDate: new Date(),
//       endDate: new Date(),
//       files: [],
//       phaseId: newTask.phaseId, // Conserver la phase actuelle
//     });
//   };

//   // Ajouter un statut personnalisé
//   const addCustomStatus = () => {
//     if (customStatus) {
//       setStatusOptions([...statusOptions, { value: customStatus, color: "bg-gray-500" }]);
//       setNewTask({ ...newTask, status: customStatus });
//       setCustomStatus("");
//       setIsStatusOpen(false);
//     }
//   };

//   // Ajouter une priorité personnalisée
//   const addCustomPriority = () => {
//     if (customPriority) {
//       setPriorityOptions([...priorityOptions, { value: customPriority, color: "bg-gray-500" }]);
//       setNewTask({ ...newTask, priority: customPriority });
//       setCustomPriority("");
//       setIsPriorityOpen(false);
//     }
//   };

//   return (
   
//     <div className="p-6 bg-gray-100 min-h-screen">
//          {/* Ajoutez Navbar2 ici */}
//       {/* <Navbar2 project={project} /> */}
       
        
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-semibold">Gestion des Tâches</h2>
//         <div className="flex items-center space-x-4">
//           <input
//             type="text"
//             placeholder="Nom de la phase"
//             value={newPhaseName}
//             onChange={(e) => setNewPhaseName(e.target.value)}
//             className="p-2 border border-gray-300 rounded-lg"
//           />
//           <button
//             onClick={addPhase}
//             className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//           >
//             <PlusCircle className="w-5 h-5 mr-2" /> Ajouter Phase
//           </button>
//         </div>
//       </div>

//       {/* Liste des phases */}
//       <div className="space-y-4">
//         {phases.map((phase) => (
//           <motion.div
//             key={phase.id}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="bg-white rounded-lg shadow p-4"
//           >
//             <div className="flex justify-between items-center mb-4">
//               {editingPhaseId === phase.id ? (
//                 <input
//                   type="text"
//                   value={phase.name}
//                   onChange={(e) => renamePhase(phase.id, e.target.value)}
//                   className="p-2 border border-gray-300 rounded-lg w-full"
//                 />
//               ) : (
//                 <h3 className="text-lg font-semibold">{phase.name}</h3>
//               )}
//               <div className="flex space-x-2">
//                 <button
//                   onClick={() => setEditingPhaseId(phase.id)}
//                   className="text-blue-500 hover:text-blue-700"
//                 >
//                   <Edit className="w-5 h-5" />
//                 </button>
//                 <button
//                   onClick={() => duplicatePhase(phase.id)}
//                   className="text-green-500 hover:text-green-700"
//                 >
//                   <Copy className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>

//             {/* Tableau des tâches */}
//             <table className="w-full border-collapse">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="p-2 text-left">Tâche</th>
//                   <th className="p-2 text-left">Remarques</th>
//                   <th className="p-2 text-left">Statut</th>
//                   <th className="p-2 text-left">Priorité</th>
//                   <th className="p-2 text-left">Date de début</th>
//                   <th className="p-2 text-left">Date de fin</th>
//                   <th className="p-2 text-left">Fichiers</th>
//                   <th className="p-2 text-center">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* Formulaire intégré dans le tableau */}
//                 {isAddingTask && newTask.phaseId === phase.id && (
//                   <motion.tr
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="bg-gray-50"
//                   >
//                     <td className="p-2">
//                       <input
//                         type="text"
//                         placeholder="Titre de la tâche"
//                         value={newTask.title}
//                         onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
//                         className="p-2 border border-gray-300 rounded-lg w-full"
//                       />
//                     </td>
//                     <td className="p-2">
//                       <input
//                         type="text"
//                         placeholder="Remarques"
//                         value={newTask.remarks}
//                         onChange={(e) => setNewTask({ ...newTask, remarks: e.target.value })}
//                         className="p-2 border border-gray-300 rounded-lg w-full"
//                       />
//                     </td>
//                     <td className="p-2 relative">
//                       <div
//                         onClick={() => setIsStatusOpen(!isStatusOpen)}
//                         className="p-2 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-between"
//                       >
//                         <span
//                           className={`px-2 py-1 rounded-full text-white ${
//                             statusOptions.find((opt) => opt.value === newTask.status)?.color
//                           }`}
//                         >
//                           {newTask.status}
//                         </span>
//                         <ChevronDown className="w-4 h-4" />
//                       </div>
//                       <AnimatePresence>
//                         {isStatusOpen && (
//                           <motion.div
//                             initial={{ opacity: 0, y: -10 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -10 }}
//                             className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg"
//                           >
//                             {statusOptions.map((option) => (
//                               <div
//                                 key={option.value}
//                                 onClick={() => {
//                                   setNewTask({ ...newTask, status: option.value });
//                                   setIsStatusOpen(false);
//                                 }}
//                                 className={`p-2 cursor-pointer hover:bg-gray-100 ${
//                                   newTask.status === option.value ? "bg-gray-100" : ""
//                                 }`}
//                               >
//                                 <span className={`px-2 py-1 rounded-full text-white ${option.color}`}>
//                                   {option.value}
//                                 </span>
//                               </div>
//                             ))}
//                             <div className="p-2">
//                               <input
//                                 type="text"
//                                 placeholder="Nouveau statut"
//                                 value={customStatus}
//                                 onChange={(e) => setCustomStatus(e.target.value)}
//                                 className="p-2 border border-gray-300 rounded-lg w-full"
//                               />
//                               <button
//                                 onClick={addCustomStatus}
//                                 className="mt-2 flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//                               >
//                                 <PlusCircle className="w-5 h-5 mr-2" /> Ajouter
//                               </button>
//                             </div>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </td>
//                     <td className="p-2 relative">
//                       <div
//                         onClick={() => setIsPriorityOpen(!isPriorityOpen)}
//                         className="p-2 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-between"
//                       >
//                         <span
//                           className={`px-2 py-1 rounded-full text-white ${
//                             priorityOptions.find((opt) => opt.value === newTask.priority)?.color
//                           }`}
//                         >
//                           {newTask.priority}
//                         </span>
//                         <ChevronDown className="w-4 h-4" />
//                       </div>
//                       <AnimatePresence>
//                         {isPriorityOpen && (
//                           <motion.div
//                             initial={{ opacity: 0, y: -10 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -10 }}
//                             className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg"
//                           >
//                             {priorityOptions.map((option) => (
//                               <div
//                                 key={option.value}
//                                 onClick={() => {
//                                   setNewTask({ ...newTask, priority: option.value });
//                                   setIsPriorityOpen(false);
//                                 }}
//                                 className={`p-2 cursor-pointer hover:bg-gray-100 ${
//                                   newTask.priority === option.value ? "bg-gray-100" : ""
//                                 }`}
//                               >
//                                 <span className={`px-2 py-1 rounded-full text-white ${option.color}`}>
//                                   {option.value}
//                                 </span>
//                               </div>
//                             ))}
//                             <div className="p-2">
//                               <input
//                                 type="text"
//                                 placeholder="Nouvelle priorité"
//                                 value={customPriority}
//                                 onChange={(e) => setCustomPriority(e.target.value)}
//                                 className="p-2 border border-gray-300 rounded-lg w-full"
//                               />
//                               <button
//                                 onClick={addCustomPriority}
//                                 className="mt-2 flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//                               >
//                                 <PlusCircle className="w-5 h-5 mr-2" /> Ajouter
//                               </button>
//                             </div>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </td>
//                     <td className="p-2">
//                       <DatePicker
//                         selected={newTask.startDate}
//                         onChange={(date) => setNewTask({ ...newTask, startDate: date })}
//                         className="p-2 border border-gray-300 rounded-lg w-full"
//                       />
//                     </td>
//                     <td className="p-2">
//                       <DatePicker
//                         selected={newTask.endDate}
//                         onChange={(date) => setNewTask({ ...newTask, endDate: date })}
//                         className="p-2 border border-gray-300 rounded-lg w-full"
//                       />
//                     </td>
//                     <td className="p-2">
//                       <label className="flex items-center cursor-pointer">
//                         <File className="w-5 h-5 mr-2" />
//                         <input type="file" multiple onChange={handleFileUpload} className="hidden" />
//                         Ajouter des fichiers
//                       </label>
//                     </td>
//                     <td className="p-2 text-center">
//                       <button
//                         onClick={addTask}
//                         className="text-green-500 hover:text-green-700 mr-2"
//                       >
//                         <Check className="w-5 h-5" />
//                       </button>
//                       <button
//                         onClick={() => setIsAddingTask(false)}
//                         className="text-red-500 hover:text-red-700"
//                       >
//                         <X className="w-5 h-5" />
//                       </button>
//                     </td>
//                   </motion.tr>
//                 )}

//                 {/* Liste des tâches existantes */}
//                 {phase.tasks.map((task) => (
//                   <motion.tr
//                     key={task.id}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="border-b"
//                   >
//                     <td className="p-2">
//                       {editingTaskId === task.id ? (
//                         <input
//                           type="text"
//                           value={newTask.title}
//                           onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
//                           className="p-2 border border-gray-300 rounded-lg w-full"
//                         />
//                       ) : (
//                         task.title
//                       )}
//                     </td>
//                     <td className="p-2">
//                       {editingTaskId === task.id ? (
//                         <input
//                           type="text"
//                           value={newTask.remarks}
//                           onChange={(e) => setNewTask({ ...newTask, remarks: e.target.value })}
//                           className="p-2 border border-gray-300 rounded-lg w-full"
//                         />
//                       ) : (
//                         task.remarks
//                       )}
//                     </td>
//                     <td className="p-2">
//                       <span
//                         className={`px-2 py-1 rounded-full text-white ${
//                           statusOptions.find((opt) => opt.value === task.status)?.color
//                         }`}
//                       >
//                         {task.status}
//                       </span>
//                     </td>
//                     <td className="p-2">
//                       <span
//                         className={`px-2 py-1 rounded-full text-white ${
//                           priorityOptions.find((opt) => opt.value === task.priority)?.color
//                         }`}
//                       >
//                         {task.priority}
//                       </span>
//                     </td>
//                     <td className="p-2">{task.startDate.toLocaleDateString()}</td>
//                     <td className="p-2">{task.endDate.toLocaleDateString()}</td>
//                     <td className="p-2">
//                       {task.files.map((file, index) => (
//                         <div key={index} className="flex items-center">
//                           <File className="w-4 h-4 mr-2" />
//                           <span>{file.name}</span>
//                         </div>
//                       ))}
//                     </td>
//                     <td className="p-2 text-center">
//                       {editingTaskId === task.id ? (
//                         <button
//                           onClick={saveTask}
//                           className="text-green-500 hover:text-green-700 mr-2"
//                         >
//                           <Check className="w-5 h-5" />
//                         </button>
//                       ) : (
//                         <button
//                           onClick={() => editTask(task)}
//                           className="text-blue-500 hover:text-blue-700 mr-2"
//                         >
//                           <Edit className="w-5 h-5" />
//                         </button>
//                       )}
//                       <button
//                         onClick={() => deleteTask(phase.id, task.id)}
//                         className="text-red-500 hover:text-red-700"
//                       >
//                         <Trash className="w-5 h-5" />
//                       </button>
//                     </td>
//                   </motion.tr>
//                 ))}
//               </tbody>
//             </table>

//             {/* Bouton pour ajouter une tâche à la phase */}
//             <div className="mt-4">
//               <button
//                 onClick={() => {
//                   setNewTask({ ...newTask, phaseId: phase.id });
//                   setIsAddingTask(true);
//                 }}
//                 className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
//               >
//                 <PlusCircle className="w-5 h-5 mr-2" /> Ajouter Tâche
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </div>
      
//     </div>
//   );
// };

// export default TaskManagement;






 

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { PlusCircle, Trash, Calendar, File, Check, X, Edit, ChevronDown, Copy, Users, Shield,Menu  } from "lucide-react"; // Ajoutez Users ici

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { Link } from '@inertiajs/react'; // Importez Link pour la navigation

// const TaskManagement = ({ project }) => {
//     if (!project) {
//         return <div>Loading...</div>; // Gérer le cas où project n'est pas défini
//     }

//     const [phases, setPhases] = useState([
//         {
//             id: 1,
//             name: "Phase 1",
//             tasks: [],
//         },
//     ]);

//     const [isAddingTask, setIsAddingTask] = useState(false);
//     const [newTask, setNewTask] = useState({
//         title: "",
//         remarks: "",
//         status: "À faire",
//         priority: "Moyenne",
//         startDate: new Date(),
//         endDate: new Date(),
//         files: [],
//         phaseId: 1, // Par défaut, la tâche est ajoutée à la première phase
//     });

//     const [isStatusOpen, setIsStatusOpen] = useState(false);
//     const [isPriorityOpen, setIsPriorityOpen] = useState(false);
//     const [editingTaskId, setEditingTaskId] = useState(null);
//     const [customStatus, setCustomStatus] = useState("");
//     const [customPriority, setCustomPriority] = useState("");
//     const [editingPhaseId, setEditingPhaseId] = useState(null);
//     const [newPhaseName, setNewPhaseName] = useState("");

//     // Options pour les étiquettes
//     const [statusOptions, setStatusOptions] = useState([
//         { value: "À faire", color: "bg-red-500" },
//         { value: "En cours", color: "bg-yellow-500" },
//         { value: "Fait", color: "bg-green-500" },
//         { value: "Bloqué", color: "bg-purple-500" },
//     ]);

//     const [priorityOptions, setPriorityOptions] = useState([
//         { value: "Haute", color: "bg-red-500" },
//         { value: "Moyenne", color: "bg-yellow-500" },
//         { value: "Basse", color: "bg-green-500" },
//     ]);

//     // Ajouter une phase
//     const addPhase = () => {
//         const newPhase = {
//             id: Date.now(),
//             name: newPhaseName || "Nouveau Groupe",
//             tasks: [],
//         };
//         setPhases([...phases, newPhase]);
//         setNewPhaseName("");
//     };

//     // Renommer une phase
//     const renamePhase = (phaseId, newName) => {
//         setPhases((prevPhases) =>
//             prevPhases.map((phase) =>
//                 phase.id === phaseId ? { ...phase, name: newName } : phase
//             )
//         );
//         setEditingPhaseId(null);
//     };

//     // Dupliquer une phase
//     const duplicatePhase = (phaseId) => {
//         const phaseToDuplicate = phases.find((phase) => phase.id === phaseId);
//         if (!phaseToDuplicate) return;
//         const duplicatedPhase = {
//             ...phaseToDuplicate,
//             id: Date.now(),
//             name: `${phaseToDuplicate.name} (Copie)`,
//         };
//         setPhases([...phases, duplicatedPhase]);
//     };

//     // Ajouter une tâche
//     const addTask = () => {
//         if (!newTask.title) return alert("Veuillez saisir un titre pour la tâche.");
//         const task = { ...newTask, id: Date.now() };
//         const updatedPhases = phases.map((phase) =>
//             phase.id === newTask.phaseId
//                 ? { ...phase, tasks: [...phase.tasks, task] }
//                 : phase
//         );
//         setPhases(updatedPhases);
//         setIsAddingTask(false);
//         setNewTask({
//             title: "",
//             remarks: "",
//             status: "À faire",
//             priority: "Moyenne",
//             startDate: new Date(),
//             endDate: new Date(),
//             files: [],
//             phaseId: newTask.phaseId, // Conserver la phase actuelle
//         });
//     };

//     // Supprimer une tâche
//     const deleteTask = (phaseId, taskId) => {
//         const updatedPhases = phases.map((phase) =>
//             phase.id === phaseId
//                 ? { ...phase, tasks: phase.tasks.filter((task) => task.id !== taskId) }
//                 : phase
//         );
//         setPhases(updatedPhases);
//     };

//     // Gérer l'ajout de fichiers
//     const handleFileUpload = (e) => {
//         const files = Array.from(e.target.files);
//         setNewTask({ ...newTask, files: [...newTask.files, ...files] });
//     };

//     // Modifier une tâche
//     const editTask = (task) => {
//         setEditingTaskId(task.id);
//         setNewTask(task);
//     };

//     // Enregistrer les modifications d'une tâche
//     const saveTask = () => {
//         const updatedPhases = phases.map((phase) => ({
//             ...phase,
//             tasks: phase.tasks.map((task) =>
//                 task.id === editingTaskId ? { ...task, ...newTask } : task
//             ),
//         }));
//         setPhases(updatedPhases);
//         setEditingTaskId(null);
//         setNewTask({
//             title: "",
//             remarks: "",
//             status: "À faire",
//             priority: "Moyenne",
//             startDate: new Date(),
//             endDate: new Date(),
//             files: [],
//             phaseId: newTask.phaseId, // Conserver la phase actuelle
//         });
//     };

//     // Ajouter un statut personnalisé
//     const addCustomStatus = () => {
//         if (customStatus) {
//             setStatusOptions([...statusOptions, { value: customStatus, color: "bg-gray-500" }]);
//             setNewTask({ ...newTask, status: customStatus });
//             setCustomStatus("");
//             setIsStatusOpen(false);
//         }
//     };

//     // Ajouter une priorité personnalisée
//     const addCustomPriority = () => {
//         if (customPriority) {
//             setPriorityOptions([...priorityOptions, { value: customPriority, color: "bg-gray-500" }]);
//             setNewTask({ ...newTask, priority: customPriority });
//             setCustomPriority("");
//             setIsPriorityOpen(false);
//         }
//     };

//     // État pour gérer l'ouverture/fermeture du menu déroulant
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//     return (
//         <div className="p-6 bg-gray-100 min-h-screen">
//             {/* Barre de navigation avec menu déroulant */}
//             <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-2xl font-semibold">Gestion des Tâches</h2>
//                 <div className="flex items-center space-x-4">
                    
// <div className="relative">
//     <button
//         onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//         className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//     >
//         <Menu className="w-5 h-5 mr-2" /> Menu
//     </button>
//     {isDropdownOpen && (
//         <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
//             <Link
//                 href={route('workers.attendance', { id: project.id })}
//                 className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
//             >
//                 <Users className="w-5 h-5 mr-2" />
//                 Ouvriers
//             </Link>
//             <Link 
//                 href={route('safety.index', { id: project.id })}
//                 className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
//             >
//                 <Shield className="w-5 h-5 mr-2" />
//                 Sécurité
//             </Link>
//         </div>
//     )}



// </div>

//                     <input
//                         type="text"
//                         placeholder="Nom de la phase"
//                         value={newPhaseName}
//                         onChange={(e) => setNewPhaseName(e.target.value)}
//                         className="p-2 border border-gray-300 rounded-lg"
//                     />
//                     <button
//                         onClick={addPhase}
//                         className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//                     >
//                         <PlusCircle className="w-5 h-5 mr-2" /> Ajouter Phase
//                     </button>
//                 </div>
//             </div>

//             {/* Liste des phases */}
//             <div className="space-y-4">
//                 {phases.map((phase) => (
//                     <motion.div
//                         key={phase.id}
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         className="bg-white rounded-lg shadow p-4"
//                     >
//                         <div className="flex justify-between items-center mb-4">
//                             {editingPhaseId === phase.id ? (
//                                 <input
//                                     type="text"
//                                     value={phase.name}
//                                     onChange={(e) => renamePhase(phase.id, e.target.value)}
//                                     className="p-2 border border-gray-300 rounded-lg w-full"
//                                 />
//                             ) : (
//                                 <h3 className="text-lg font-semibold">{phase.name}</h3>
//                             )}
//                             <div className="flex space-x-2">
//                                 <button
//                                     onClick={() => setEditingPhaseId(phase.id)}
//                                     className="text-blue-500 hover:text-blue-700"
//                                 >
//                                     <Edit className="w-5 h-5" />
//                                 </button>
//                                 <button
//                                     onClick={() => duplicatePhase(phase.id)}
//                                     className="text-green-500 hover:text-green-700"
//                                 >
//                                     <Copy className="w-5 h-5" />
//                                 </button>
//                             </div>
//                         </div>

//                         {/* Tableau des tâches */}
//                         <table className="w-full border-collapse">
//                             <thead>
//                                 <tr className="bg-gray-200">
//                                     <th className="p-2 text-left">Tâche</th>
//                                     <th className="p-2 text-left">Remarques</th>
//                                     <th className="p-2 text-left">Statut</th>
//                                     <th className="p-2 text-left">Priorité</th>
//                                     <th className="p-2 text-left">Date de début</th>
//                                     <th className="p-2 text-left">Date de fin</th>
//                                     <th className="p-2 text-left">Fichiers</th>
//                                     <th className="p-2 text-center">Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {/* Formulaire intégré dans le tableau */}
//                                 {isAddingTask && newTask.phaseId === phase.id && (
//                                     <motion.tr
//                                         initial={{ opacity: 0, y: 10 }}
//                                         animate={{ opacity: 1, y: 0 }}
//                                         className="bg-gray-50"
//                                     >
//                                         <td className="p-2">
//                                             <input
//                                                 type="text"
//                                                 placeholder="Titre de la tâche"
//                                                 value={newTask.title}
//                                                 onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
//                                                 className="p-2 border border-gray-300 rounded-lg w-full"
//                                             />
//                                         </td>
//                                         <td className="p-2">
//                                             <input
//                                                 type="text"
//                                                 placeholder="Remarques"
//                                                 value={newTask.remarks}
//                                                 onChange={(e) => setNewTask({ ...newTask, remarks: e.target.value })}
//                                                 className="p-2 border border-gray-300 rounded-lg w-full"
//                                             />
//                                         </td>
//                                         <td className="p-2 relative">
//                                             <div
//                                                 onClick={() => setIsStatusOpen(!isStatusOpen)}
//                                                 className="p-2 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-between"
//                                             >
//                                                 <span
//                                                     className={`px-2 py-1 rounded-full text-white ${
//                                                         statusOptions.find((opt) => opt.value === newTask.status)?.color
//                                                     }`}
//                                                 >
//                                                     {newTask.status}
//                                                 </span>
//                                                 <ChevronDown className="w-4 h-4" />
//                                             </div>
//                                             <AnimatePresence>
//                                                 {isStatusOpen && (
//                                                     <motion.div
//                                                         initial={{ opacity: 0, y: -10 }}
//                                                         animate={{ opacity: 1, y: 0 }}
//                                                         exit={{ opacity: 0, y: -10 }}
//                                                         className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg"
//                                                     >
//                                                         {statusOptions.map((option) => (
//                                                             <div
//                                                                 key={option.value}
//                                                                 onClick={() => {
//                                                                     setNewTask({ ...newTask, status: option.value });
//                                                                     setIsStatusOpen(false);
//                                                                 }}
//                                                                 className={`p-2 cursor-pointer hover:bg-gray-100 ${
//                                                                     newTask.status === option.value ? "bg-gray-100" : ""
//                                                                 }`}
//                                                             >
//                                                                 <span className={`px-2 py-1 rounded-full text-white ${option.color}`}>
//                                                                     {option.value}
//                                                                 </span>
//                                                             </div>
//                                                         ))}
//                                                         <div className="p-2">
//                                                             <input
//                                                                 type="text"
//                                                                 placeholder="Nouveau statut"
//                                                                 value={customStatus}
//                                                                 onChange={(e) => setCustomStatus(e.target.value)}
//                                                                 className="p-2 border border-gray-300 rounded-lg w-full"
//                                                             />
//                                                             <button
//                                                                 onClick={addCustomStatus}
//                                                                 className="mt-2 flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//                                                             >
//                                                                 <PlusCircle className="w-5 h-5 mr-2" /> Ajouter
//                                                             </button>
//                                                         </div>
//                                                     </motion.div>
//                                                 )}
//                                             </AnimatePresence>
//                                         </td>
//                                         <td className="p-2 relative">
//                                             <div
//                                                 onClick={() => setIsPriorityOpen(!isPriorityOpen)}
//                                                 className="p-2 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-between"
//                                             >
//                                                 <span
//                                                     className={`px-2 py-1 rounded-full text-white ${
//                                                         priorityOptions.find((opt) => opt.value === newTask.priority)?.color
//                                                     }`}
//                                                 >
//                                                     {newTask.priority}
//                                                 </span>
//                                                 <ChevronDown className="w-4 h-4" />
//                                             </div>
//                                             <AnimatePresence>
//                                                 {isPriorityOpen && (
//                                                     <motion.div
//                                                         initial={{ opacity: 0, y: -10 }}
//                                                         animate={{ opacity: 1, y: 0 }}
//                                                         exit={{ opacity: 0, y: -10 }}
//                                                         className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg"
//                                                     >
//                                                         {priorityOptions.map((option) => (
//                                                             <div
//                                                                 key={option.value}
//                                                                 onClick={() => {
//                                                                     setNewTask({ ...newTask, priority: option.value });
//                                                                     setIsPriorityOpen(false);
//                                                                 }}
//                                                                 className={`p-2 cursor-pointer hover:bg-gray-100 ${
//                                                                     newTask.priority === option.value ? "bg-gray-100" : ""
//                                                                 }`}
//                                                             >
//                                                                 <span className={`px-2 py-1 rounded-full text-white ${option.color}`}>
//                                                                     {option.value}
//                                                                 </span>
//                                                             </div>
//                                                         ))}
//                                                         <div className="p-2">
//                                                             <input
//                                                                 type="text"
//                                                                 placeholder="Nouvelle priorité"
//                                                                 value={customPriority}
//                                                                 onChange={(e) => setCustomPriority(e.target.value)}
//                                                                 className="p-2 border border-gray-300 rounded-lg w-full"
//                                                             />
//                                                             <button
//                                                                 onClick={addCustomPriority}
//                                                                 className="mt-2 flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//                                                             >
//                                                                 <PlusCircle className="w-5 h-5 mr-2" /> Ajouter
//                                                             </button>
//                                                         </div>
//                                                     </motion.div>
//                                                 )}
//                                             </AnimatePresence>
//                                         </td>
//                                         <td className="p-2">
//                                             <DatePicker
//                                                 selected={newTask.startDate}
//                                                 onChange={(date) => setNewTask({ ...newTask, startDate: date })}
//                                                 className="p-2 border border-gray-300 rounded-lg w-full"
//                                             />
//                                         </td>
//                                         <td className="p-2">
//                                             <DatePicker
//                                                 selected={newTask.endDate}
//                                                 onChange={(date) => setNewTask({ ...newTask, endDate: date })}
//                                                 className="p-2 border border-gray-300 rounded-lg w-full"
//                                             />
//                                         </td>
//                                         <td className="p-2">
//                                             <label className="flex items-center cursor-pointer">
//                                                 <File className="w-5 h-5 mr-2" />
//                                                 <input type="file" multiple onChange={handleFileUpload} className="hidden" />
//                                                 Ajouter des fichiers
//                                             </label>
//                                         </td>
//                                         <td className="p-2 text-center">
//                                             <button
//                                                 onClick={addTask}
//                                                 className="text-green-500 hover:text-green-700 mr-2"
//                                             >
//                                                 <Check className="w-5 h-5" />
//                                             </button>
//                                             <button
//                                                 onClick={() => setIsAddingTask(false)}
//                                                 className="text-red-500 hover:text-red-700"
//                                             >
//                                                 <X className="w-5 h-5" />
//                                             </button>
//                                         </td>
//                                     </motion.tr>
//                                 )}

//                                 {/* Liste des tâches existantes */}
//                                 {phase.tasks.map((task) => (
//                                     <motion.tr
//                                         key={task.id}
//                                         initial={{ opacity: 0, y: 10 }}
//                                         animate={{ opacity: 1, y: 0 }}
//                                         className="border-b"
//                                     >
//                                         <td className="p-2">
//                                             {editingTaskId === task.id ? (
//                                                 <input
//                                                     type="text"
//                                                     value={newTask.title}
//                                                     onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
//                                                     className="p-2 border border-gray-300 rounded-lg w-full"
//                                                 />
//                                             ) : (
//                                                 task.title
//                                             )}
//                                         </td>
//                                         <td className="p-2">
//                                             {editingTaskId === task.id ? (
//                                                 <input
//                                                     type="text"
//                                                     value={newTask.remarks}
//                                                     onChange={(e) => setNewTask({ ...newTask, remarks: e.target.value })}
//                                                     className="p-2 border border-gray-300 rounded-lg w-full"
//                                                 />
//                                             ) : (
//                                                 task.remarks
//                                             )}
//                                         </td>
//                                         <td className="p-2">
//                                             <span
//                                                 className={`px-2 py-1 rounded-full text-white ${
//                                                     statusOptions.find((opt) => opt.value === task.status)?.color
//                                                 }`}
//                                             >
//                                                 {task.status}
//                                             </span>
//                                         </td>
//                                         <td className="p-2">
//                                             <span
//                                                 className={`px-2 py-1 rounded-full text-white ${
//                                                     priorityOptions.find((opt) => opt.value === task.priority)?.color
//                                                 }`}
//                                             >
//                                                 {task.priority}
//                                             </span>
//                                         </td>
//                                         <td className="p-2">{task.startDate.toLocaleDateString()}</td>
//                                         <td className="p-2">{task.endDate.toLocaleDateString()}</td>
//                                         <td className="p-2">
//                                             {task.files.map((file, index) => (
//                                                 <div key={index} className="flex items-center">
//                                                     <File className="w-4 h-4 mr-2" />
//                                                     <span>{file.name}</span>
//                                                 </div>
//                                             ))}
//                                         </td>
//                                         <td className="p-2 text-center">
//                                             {editingTaskId === task.id ? (
//                                                 <button
//                                                     onClick={saveTask}
//                                                     className="text-green-500 hover:text-green-700 mr-2"
//                                                 >
//                                                     <Check className="w-5 h-5" />
//                                                 </button>
//                                             ) : (
//                                                 <button
//                                                     onClick={() => editTask(task)}
//                                                     className="text-blue-500 hover:text-blue-700 mr-2"
//                                                 >
//                                                     <Edit className="w-5 h-5" />
//                                                 </button>
//                                             )}
//                                             <button
//                                                 onClick={() => deleteTask(phase.id, task.id)}
//                                                 className="text-red-500 hover:text-red-700"
//                                             >
//                                                 <Trash className="w-5 h-5" />
//                                             </button>
//                                         </td>
//                                     </motion.tr>
//                                 ))}
//                             </tbody>
//                         </table>

//                         {/* Bouton pour ajouter une tâche à la phase */}
//                         <div className="mt-4">
//                             <button
//                                 onClick={() => {
//                                     setNewTask({ ...newTask, phaseId: phase.id });
//                                     setIsAddingTask(true);
//                                 }}
//                                 className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
//                             >
//                                 <PlusCircle className="w-5 h-5 mr-2" /> Ajouter Tâche
//                             </button>
//                         </div>
//                     </motion.div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default TaskManagement;





import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusCircle, Trash, Calendar, File, Check, X, Edit, ChevronDown, Copy, Users, Shield,Package,Menu  } from "lucide-react"; // Ajoutez Users ici

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from '@inertiajs/react'; // Importez Link pour la navigation

const TaskManagement = ({ project }) => {
    if (!project) {
        return <div>Loading...</div>; // Gérer le cas où project n'est pas défini
    }

    const [phases, setPhases] = useState([
        {
            id: 1,
            name: "Phase 1",
            tasks: [],
        },
    ]);

    const [isAddingTask, setIsAddingTask] = useState(false);
    const [newTask, setNewTask] = useState({
        title: "",
        remarks: "",
        status: "À faire",
        priority: "Moyenne",
        startDate: new Date(),
        endDate: new Date(),
        files: [],
        phaseId: 1, // Par défaut, la tâche est ajoutée à la première phase
    });

    const [isStatusOpen, setIsStatusOpen] = useState(false);
    const [isPriorityOpen, setIsPriorityOpen] = useState(false);
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [customStatus, setCustomStatus] = useState("");
    const [customPriority, setCustomPriority] = useState("");
    const [editingPhaseId, setEditingPhaseId] = useState(null);
    const [newPhaseName, setNewPhaseName] = useState("");

    // Options pour les étiquettes
    const [statusOptions, setStatusOptions] = useState([
        { value: "À faire", color: "bg-red-500" },
        { value: "En cours", color: "bg-yellow-500" },
        { value: "Fait", color: "bg-green-500" },
        { value: "Bloqué", color: "bg-purple-500" },
    ]);

    const [priorityOptions, setPriorityOptions] = useState([
        { value: "Haute", color: "bg-red-500" },
        { value: "Moyenne", color: "bg-yellow-500" },
        { value: "Basse", color: "bg-green-500" },
    ]);

    // Ajouter une phase
    const addPhase = () => {
        const newPhase = {
            id: Date.now(),
            name: newPhaseName || "Nouveau Groupe",
            tasks: [],
        };
        setPhases([...phases, newPhase]);
        setNewPhaseName("");
    };

    // Renommer une phase
    const renamePhase = (phaseId, newName) => {
        setPhases((prevPhases) =>
            prevPhases.map((phase) =>
                phase.id === phaseId ? { ...phase, name: newName } : phase
            )
        );
        setEditingPhaseId(null);
    };

    // Dupliquer une phase
    const duplicatePhase = (phaseId) => {
        const phaseToDuplicate = phases.find((phase) => phase.id === phaseId);
        if (!phaseToDuplicate) return;
        const duplicatedPhase = {
            ...phaseToDuplicate,
            id: Date.now(),
            name: `${phaseToDuplicate.name} (Copie)`,
        };
        setPhases([...phases, duplicatedPhase]);
    };

    // Ajouter une tâche
    const addTask = () => {
        if (!newTask.title) return alert("Veuillez saisir un titre pour la tâche.");
        const task = { ...newTask, id: Date.now() };
        const updatedPhases = phases.map((phase) =>
            phase.id === newTask.phaseId
                ? { ...phase, tasks: [...phase.tasks, task] }
                : phase
        );
        setPhases(updatedPhases);
        setIsAddingTask(false);
        setNewTask({
            title: "",
            remarks: "",
            status: "À faire",
            priority: "Moyenne",
            startDate: new Date(),
            endDate: new Date(),
            files: [],
            phaseId: newTask.phaseId, // Conserver la phase actuelle
        });
    };

    // Supprimer une tâche
    const deleteTask = (phaseId, taskId) => {
        const updatedPhases = phases.map((phase) =>
            phase.id === phaseId
                ? { ...phase, tasks: phase.tasks.filter((task) => task.id !== taskId) }
                : phase
        );
        setPhases(updatedPhases);
    };

    // Gérer l'ajout de fichiers
    const handleFileUpload = (e) => {
        const files = Array.from(e.target.files);
        setNewTask({ ...newTask, files: [...newTask.files, ...files] });
    };

    // Modifier une tâche
    const editTask = (task) => {
        setEditingTaskId(task.id);
        setNewTask(task);
    };

    // Enregistrer les modifications d'une tâche
    const saveTask = () => {
        const updatedPhases = phases.map((phase) => ({
            ...phase,
            tasks: phase.tasks.map((task) =>
                task.id === editingTaskId ? { ...task, ...newTask } : task
            ),
        }));
        setPhases(updatedPhases);
        setEditingTaskId(null);
        setNewTask({
            title: "",
            remarks: "",
            status: "À faire",
            priority: "Moyenne",
            startDate: new Date(),
            endDate: new Date(),
            files: [],
            phaseId: newTask.phaseId, // Conserver la phase actuelle
        });
    };

    // Ajouter un statut personnalisé
    const addCustomStatus = () => {
        if (customStatus) {
            setStatusOptions([...statusOptions, { value: customStatus, color: "bg-gray-500" }]);
            setNewTask({ ...newTask, status: customStatus });
            setCustomStatus("");
            setIsStatusOpen(false);
        }
    };

    // Ajouter une priorité personnalisée
    const addCustomPriority = () => {
        if (customPriority) {
            setPriorityOptions([...priorityOptions, { value: customPriority, color: "bg-gray-500" }]);
            setNewTask({ ...newTask, priority: customPriority });
            setCustomPriority("");
            setIsPriorityOpen(false);
        }
    };

    // État pour gérer l'ouverture/fermeture du menu déroulant
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            {/* Barre de navigation avec menu déroulant */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Gestion des Tâches</h2>
                <div className="flex items-center space-x-4">
                    
<div className="relative">
    <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
    >
        <Menu className="w-5 h-5 mr-2" /> Menu
    </button>
    {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
            <Link
                href={route('workers.attendance', { id: project.id })}
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
                <Users className="w-5 h-5 mr-2" />
                Ouvriers
            </Link>
            <Link 
                href={route('safety.index', { id: project.id })}
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
                <Shield className="w-5 h-5 mr-2" />
                Sécurité
            </Link>
            <Link 
                href={route('resources.index', { id: project.id })}
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
                <Package className="w-5 h-5 mr-2" /> {/* Ajoutez cette icône */}
                Ressources
            </Link>
        </div>
    )}



</div>

                    <input
                        type="text"
                        placeholder="Nom de la phase"
                        value={newPhaseName}
                        onChange={(e) => setNewPhaseName(e.target.value)}
                        className="p-2 border border-gray-300 rounded-lg"
                    />
                    <button
                        onClick={addPhase}
                        className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                        <PlusCircle className="w-5 h-5 mr-2" /> Ajouter Phase
                    </button>
                </div>
            </div>

            {/* Liste des phases */}
            <div className="space-y-4">
                {phases.map((phase) => (
                    <motion.div
                        key={phase.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-lg shadow p-4"
                    >
                        <div className="flex justify-between items-center mb-4">
                            {editingPhaseId === phase.id ? (
                                <input
                                    type="text"
                                    value={phase.name}
                                    onChange={(e) => renamePhase(phase.id, e.target.value)}
                                    className="p-2 border border-gray-300 rounded-lg w-full"
                                />
                            ) : (
                                <h3 className="text-lg font-semibold">{phase.name}</h3>
                            )}
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => setEditingPhaseId(phase.id)}
                                    className="text-blue-500 hover:text-blue-700"
                                >
                                    <Edit className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => duplicatePhase(phase.id)}
                                    className="text-green-500 hover:text-green-700"
                                >
                                    <Copy className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Tableau des tâches */}
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="p-2 text-left">Tâche</th>
                                    <th className="p-2 text-left">Remarques</th>
                                    <th className="p-2 text-left">Statut</th>
                                    <th className="p-2 text-left">Priorité</th>
                                    <th className="p-2 text-left">Date de début</th>
                                    <th className="p-2 text-left">Date de fin</th>
                                    <th className="p-2 text-left">Fichiers</th>
                                    <th className="p-2 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Formulaire intégré dans le tableau */}
                                {isAddingTask && newTask.phaseId === phase.id && (
                                    <motion.tr
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-gray-50"
                                    >
                                        <td className="p-2">
                                            <input
                                                type="text"
                                                placeholder="Titre de la tâche"
                                                value={newTask.title}
                                                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                                                className="p-2 border border-gray-300 rounded-lg w-full"
                                            />
                                        </td>
                                        <td className="p-2">
                                            <input
                                                type="text"
                                                placeholder="Remarques"
                                                value={newTask.remarks}
                                                onChange={(e) => setNewTask({ ...newTask, remarks: e.target.value })}
                                                className="p-2 border border-gray-300 rounded-lg w-full"
                                            />
                                        </td>
                                        <td className="p-2 relative">
                                            <div
                                                onClick={() => setIsStatusOpen(!isStatusOpen)}
                                                className="p-2 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-between"
                                            >
                                                <span
                                                    className={`px-2 py-1 rounded-full text-white ${
                                                        statusOptions.find((opt) => opt.value === newTask.status)?.color
                                                    }`}
                                                >
                                                    {newTask.status}
                                                </span>
                                                <ChevronDown className="w-4 h-4" />
                                            </div>
                                            <AnimatePresence>
                                                {isStatusOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg"
                                                    >
                                                        {statusOptions.map((option) => (
                                                            <div
                                                                key={option.value}
                                                                onClick={() => {
                                                                    setNewTask({ ...newTask, status: option.value });
                                                                    setIsStatusOpen(false);
                                                                }}
                                                                className={`p-2 cursor-pointer hover:bg-gray-100 ${
                                                                    newTask.status === option.value ? "bg-gray-100" : ""
                                                                }`}
                                                            >
                                                                <span className={`px-2 py-1 rounded-full text-white ${option.color}`}>
                                                                    {option.value}
                                                                </span>
                                                            </div>
                                                        ))}
                                                        <div className="p-2">
                                                            <input
                                                                type="text"
                                                                placeholder="Nouveau statut"
                                                                value={customStatus}
                                                                onChange={(e) => setCustomStatus(e.target.value)}
                                                                className="p-2 border border-gray-300 rounded-lg w-full"
                                                            />
                                                            <button
                                                                onClick={addCustomStatus}
                                                                className="mt-2 flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                                                            >
                                                                <PlusCircle className="w-5 h-5 mr-2" /> Ajouter
                                                            </button>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </td>
                                        <td className="p-2 relative">
                                            <div
                                                onClick={() => setIsPriorityOpen(!isPriorityOpen)}
                                                className="p-2 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-between"
                                            >
                                                <span
                                                    className={`px-2 py-1 rounded-full text-white ${
                                                        priorityOptions.find((opt) => opt.value === newTask.priority)?.color
                                                    }`}
                                                >
                                                    {newTask.priority}
                                                </span>
                                                <ChevronDown className="w-4 h-4" />
                                            </div>
                                            <AnimatePresence>
                                                {isPriorityOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg"
                                                    >
                                                        {priorityOptions.map((option) => (
                                                            <div
                                                                key={option.value}
                                                                onClick={() => {
                                                                    setNewTask({ ...newTask, priority: option.value });
                                                                    setIsPriorityOpen(false);
                                                                }}
                                                                className={`p-2 cursor-pointer hover:bg-gray-100 ${
                                                                    newTask.priority === option.value ? "bg-gray-100" : ""
                                                                }`}
                                                            >
                                                                <span className={`px-2 py-1 rounded-full text-white ${option.color}`}>
                                                                    {option.value}
                                                                </span>
                                                            </div>
                                                        ))}
                                                        <div className="p-2">
                                                            <input
                                                                type="text"
                                                                placeholder="Nouvelle priorité"
                                                                value={customPriority}
                                                                onChange={(e) => setCustomPriority(e.target.value)}
                                                                className="p-2 border border-gray-300 rounded-lg w-full"
                                                            />
                                                            <button
                                                                onClick={addCustomPriority}
                                                                className="mt-2 flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                                                            >
                                                                <PlusCircle className="w-5 h-5 mr-2" /> Ajouter
                                                            </button>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </td>
                                        <td className="p-2">
                                            <DatePicker
                                                selected={newTask.startDate}
                                                onChange={(date) => setNewTask({ ...newTask, startDate: date })}
                                                className="p-2 border border-gray-300 rounded-lg w-full"
                                            />
                                        </td>
                                        <td className="p-2">
                                            <DatePicker
                                                selected={newTask.endDate}
                                                onChange={(date) => setNewTask({ ...newTask, endDate: date })}
                                                className="p-2 border border-gray-300 rounded-lg w-full"
                                            />
                                        </td>
                                        <td className="p-2">
                                            <label className="flex items-center cursor-pointer">
                                                <File className="w-5 h-5 mr-2" />
                                                <input type="file" multiple onChange={handleFileUpload} className="hidden" />
                                                Ajouter des fichiers
                                            </label>
                                        </td>
                                        <td className="p-2 text-center">
                                            <button
                                                onClick={addTask}
                                                className="text-green-500 hover:text-green-700 mr-2"
                                            >
                                                <Check className="w-5 h-5" />
                                            </button>
                                            <button
                                                onClick={() => setIsAddingTask(false)}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                <X className="w-5 h-5" />
                                            </button>
                                        </td>
                                    </motion.tr>
                                )}

                                {/* Liste des tâches existantes */}
                                {phase.tasks.map((task) => (
                                    <motion.tr
                                        key={task.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="border-b"
                                    >
                                        <td className="p-2">
                                            {editingTaskId === task.id ? (
                                                <input
                                                    type="text"
                                                    value={newTask.title}
                                                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                                                    className="p-2 border border-gray-300 rounded-lg w-full"
                                                />
                                            ) : (
                                                task.title
                                            )}
                                        </td>
                                        <td className="p-2">
                                            {editingTaskId === task.id ? (
                                                <input
                                                    type="text"
                                                    value={newTask.remarks}
                                                    onChange={(e) => setNewTask({ ...newTask, remarks: e.target.value })}
                                                    className="p-2 border border-gray-300 rounded-lg w-full"
                                                />
                                            ) : (
                                                task.remarks
                                            )}
                                        </td>
                                        <td className="p-2">
                                            <span
                                                className={`px-2 py-1 rounded-full text-white ${
                                                    statusOptions.find((opt) => opt.value === task.status)?.color
                                                }`}
                                            >
                                                {task.status}
                                            </span>
                                        </td>
                                        <td className="p-2">
                                            <span
                                                className={`px-2 py-1 rounded-full text-white ${
                                                    priorityOptions.find((opt) => opt.value === task.priority)?.color
                                                }`}
                                            >
                                                {task.priority}
                                            </span>
                                        </td>
                                        <td className="p-2">{task.startDate.toLocaleDateString()}</td>
                                        <td className="p-2">{task.endDate.toLocaleDateString()}</td>
                                        <td className="p-2">
                                            {task.files.map((file, index) => (
                                                <div key={index} className="flex items-center">
                                                    <File className="w-4 h-4 mr-2" />
                                                    <span>{file.name}</span>
                                                </div>
                                            ))}
                                        </td>
                                        <td className="p-2 text-center">
                                            {editingTaskId === task.id ? (
                                                <button
                                                    onClick={saveTask}
                                                    className="text-green-500 hover:text-green-700 mr-2"
                                                >
                                                    <Check className="w-5 h-5" />
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() => editTask(task)}
                                                    className="text-blue-500 hover:text-blue-700 mr-2"
                                                >
                                                    <Edit className="w-5 h-5" />
                                                </button>
                                            )}
                                            <button
                                                onClick={() => deleteTask(phase.id, task.id)}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                <Trash className="w-5 h-5" />
                                            </button>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Bouton pour ajouter une tâche à la phase */}
                        <div className="mt-4">
                            <button
                                onClick={() => {
                                    setNewTask({ ...newTask, phaseId: phase.id });
                                    setIsAddingTask(true);
                                }}
                                className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                            >
                                <PlusCircle className="w-5 h-5 mr-2" /> Ajouter Tâche
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default TaskManagement;

  

// 3 EME CODE CONTROLLER

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { PlusCircle, Trash, Calendar, File, Check, X, Edit, ChevronDown, Copy, Users, Shield, Menu } from "lucide-react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { Link, router, usePage } from '@inertiajs/react';

// const TaskManagement = ({ project, initialPhases }) => {
//     if (!project) {
//         return <div>Loading...</div>;
//     }

//     // Initialisation des états
//     const [phases, setPhases] = useState(initialPhases || [
//         {
//             id: 1,
//             name: "Phase 1",
//             tasks: [],
//         },
//     ]);

//     const [isAddingTask, setIsAddingTask] = useState(false);
//     const [newTask, setNewTask] = useState({
//         title: "",
//         remarks: "",
//         status: "À faire",
//         priority: "Moyenne",
//         startDate: new Date(),
//         endDate: new Date(),
//         files: [],
//         phaseId: 1,
//     });

//     const [isStatusOpen, setIsStatusOpen] = useState(false);
//     const [isPriorityOpen, setIsPriorityOpen] = useState(false);
//     const [editingTaskId, setEditingTaskId] = useState(null);
//     const [customStatus, setCustomStatus] = useState("");
//     const [customPriority, setCustomPriority] = useState("");
//     const [editingPhaseId, setEditingPhaseId] = useState(null);
//     const [newPhaseName, setNewPhaseName] = useState("");
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//     // Options pour les étiquettes
//     const [statusOptions] = useState([
//         { value: "À faire", color: "bg-red-500" },
//         { value: "En cours", color: "bg-yellow-500" },
//         { value: "Fait", color: "bg-green-500" },
//         { value: "Bloqué", color: "bg-purple-500" },
//     ]);

//     const [priorityOptions] = useState([
//         { value: "Haute", color: "bg-red-500" },
//         { value: "Moyenne", color: "bg-yellow-500" },
//         { value: "Basse", color: "bg-green-500" },
//     ]);

//     // Synchronisation avec les données du backend
//     useEffect(() => {
//         if (initialPhases) {
//             setPhases(initialPhases);
//         }
//     }, [initialPhases]);

//     // Ajouter une phase
//     const addPhase = () => {
//         const newPhase = {
//             id: Date.now(),
//             name: newPhaseName || "Nouveau Groupe",
//             tasks: [],
//         };
//         setPhases([...phases, newPhase]);
//         setNewPhaseName("");
//     };

//     // Renommer une phase
//     const renamePhase = (phaseId, newName) => {
//         setPhases(prevPhases =>
//             prevPhases.map(phase =>
//                 phase.id === phaseId ? { ...phase, name: newName } : phase
//             )
//         );
//         setEditingPhaseId(null);
//     };

//     // Dupliquer une phase
//     const duplicatePhase = (phaseId) => {
//         const phaseToDuplicate = phases.find(phase => phase.id === phaseId);
//         if (!phaseToDuplicate) return;
//         const duplicatedPhase = {
//             ...phaseToDuplicate,
//             id: Date.now(),
//             name: `${phaseToDuplicate.name} (Copie)`,
//         };
//         setPhases([...phases, duplicatedPhase]);
//     };

//     // Ajouter une tâche
//     const addTask = () => {
//         if (!newTask.title) return alert("Veuillez saisir un titre pour la tâche.");
        
//         router.post(route('tasks.store', { id: project.id }), {
//             title: newTask.title,
//             remarks: newTask.remarks,
//             status: newTask.status,
//             priority: newTask.priority,
//             start_date: newTask.startDate.toISOString().split('T')[0],
//             end_date: newTask.endDate.toISOString().split('T')[0],
//             phase: newTask.phaseId.toString(),
//         }, {
//             onSuccess: () => {
//                 setIsAddingTask(false);
//                 setNewTask({
//                     title: "",
//                     remarks: "",
//                     status: "À faire",
//                     priority: "Moyenne",
//                     startDate: new Date(),
//                     endDate: new Date(),
//                     files: [],
//                     phaseId: newTask.phaseId,
//                 });
//             }
//         });
//     };

//     // Supprimer une tâche
//     const deleteTask = (phaseId, taskId) => {
//         if (confirm("Êtes-vous sûr de vouloir supprimer cette tâche ?")) {
//             router.delete(route('tasks.destroy', { 
//                 id: project.id, 
//                 taskId: taskId 
//             }), {}, {
//                 onSuccess: () => {
//                     const updatedPhases = phases.map(phase =>
//                         phase.id === phaseId
//                             ? { ...phase, tasks: phase.tasks.filter(task => task.id !== taskId) }
//                             : phase
//                     );
//                     setPhases(updatedPhases);
//                 }
//             });
//         }
//     };

//     // Gérer l'ajout de fichiers
//     const handleFileUpload = (e) => {
//         const files = Array.from(e.target.files);
//         setNewTask({ ...newTask, files: [...newTask.files, ...files] });
//     };

//     // Modifier une tâche
//     const editTask = (task) => {
//         setEditingTaskId(task.id);
//         setNewTask(task);
//     };

//     // Enregistrer les modifications d'une tâche
//     const saveTask = () => {
//         router.put(route('tasks.update', { 
//             id: project.id, 
//             taskId: editingTaskId 
//         }), {
//             title: newTask.title,
//             remarks: newTask.remarks,
//             status: newTask.status,
//             priority: newTask.priority,
//             start_date: newTask.startDate.toISOString().split('T')[0],
//             end_date: newTask.endDate.toISOString().split('T')[0],
//             phase: newTask.phaseId.toString(),
//         }, {
//             onSuccess: () => {
//                 setEditingTaskId(null);
//                 setNewTask({
//                     title: "",
//                     remarks: "",
//                     status: "À faire",
//                     priority: "Moyenne",
//                     startDate: new Date(),
//                     endDate: new Date(),
//                     files: [],
//                     phaseId: newTask.phaseId,
//                 });
//             }
//         });
//     };

//     // Ajouter un statut personnalisé
//     const addCustomStatus = () => {
//         if (customStatus) {
//             setStatusOptions([...statusOptions, { value: customStatus, color: "bg-gray-500" }]);
//             setNewTask({ ...newTask, status: customStatus });
//             setCustomStatus("");
//             setIsStatusOpen(false);
//         }
//     };

//     // Ajouter une priorité personnalisée
//     const addCustomPriority = () => {
//         if (customPriority) {
//             setPriorityOptions([...priorityOptions, { value: customPriority, color: "bg-gray-500" }]);
//             setNewTask({ ...newTask, priority: customPriority });
//             setCustomPriority("");
//             setIsPriorityOpen(false);
//         }
//     };

//     return (
//         <div className="p-6 bg-gray-100 min-h-screen">
//             {/* Barre de navigation avec menu déroulant */}
//             <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-2xl font-semibold">Gestion des Tâches</h2>
//                 <div className="flex items-center space-x-4">
//                     <div className="relative">
//                         <button
//                             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                             className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//                         >
//                             <Menu className="w-5 h-5 mr-2" /> Menu
//                         </button>
//                         {isDropdownOpen && (
//                             <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
//                                 <Link
//                                     href={route('workers.attendance', { id: project.id })}
//                                     className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
//                                 >
//                                     <Users className="w-5 h-5 mr-2" />
//                                     Ouvriers
//                                 </Link>
//                                 <Link 
//                                     href={route('safety.index', { id: project.id })}
//                                     className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
//                                 >
//                                     <Shield className="w-5 h-5 mr-2" />
//                                     Sécurité
//                                 </Link>
//                             </div>
//                         )}
//                     </div>

//                     <input
//                         type="text"
//                         placeholder="Nom de la phase"
//                         value={newPhaseName}
//                         onChange={(e) => setNewPhaseName(e.target.value)}
//                         className="p-2 border border-gray-300 rounded-lg"
//                     />
//                     <button
//                         onClick={addPhase}
//                         className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//                     >
//                         <PlusCircle className="w-5 h-5 mr-2" /> Ajouter Phase
//                     </button>
//                 </div>
//             </div>

//             {/* Liste des phases */}
//             <div className="space-y-4">
//                 {phases.map((phase) => (
//                     <motion.div
//                         key={phase.id}
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         className="bg-white rounded-lg shadow p-4"
//                     >
//                         <div className="flex justify-between items-center mb-4">
//                             {editingPhaseId === phase.id ? (
//                                 <input
//                                     type="text"
//                                     value={phase.name}
//                                     onChange={(e) => renamePhase(phase.id, e.target.value)}
//                                     className="p-2 border border-gray-300 rounded-lg w-full"
//                                 />
//                             ) : (
//                                 <h3 className="text-lg font-semibold">{phase.name}</h3>
//                             )}
//                             <div className="flex space-x-2">
//                                 <button
//                                     onClick={() => setEditingPhaseId(phase.id)}
//                                     className="text-blue-500 hover:text-blue-700"
//                                 >
//                                     <Edit className="w-5 h-5" />
//                                 </button>
//                                 <button
//                                     onClick={() => duplicatePhase(phase.id)}
//                                     className="text-green-500 hover:text-green-700"
//                                 >
//                                     <Copy className="w-5 h-5" />
//                                 </button>
//                             </div>
//                         </div>

//                         {/* Tableau des tâches */}
//                         <table className="w-full border-collapse">
//                             <thead>
//                                 <tr className="bg-gray-200">
//                                     <th className="p-2 text-left">Tâche</th>
//                                     <th className="p-2 text-left">Remarques</th>
//                                     <th className="p-2 text-left">Statut</th>
//                                     <th className="p-2 text-left">Priorité</th>
//                                     <th className="p-2 text-left">Date de début</th>
//                                     <th className="p-2 text-left">Date de fin</th>
//                                     <th className="p-2 text-left">Fichiers</th>
//                                     <th className="p-2 text-center">Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {/* Formulaire d'ajout de tâche */}
//                                 {isAddingTask && newTask.phaseId === phase.id && (
//                                     <motion.tr
//                                         initial={{ opacity: 0, y: 10 }}
//                                         animate={{ opacity: 1, y: 0 }}
//                                         className="bg-gray-50"
//                                     >
//                                         <td className="p-2">
//                                             <input
//                                                 type="text"
//                                                 placeholder="Titre de la tâche"
//                                                 value={newTask.title}
//                                                 onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
//                                                 className="p-2 border border-gray-300 rounded-lg w-full"
//                                             />
//                                         </td>
//                                         <td className="p-2">
//                                             <input
//                                                 type="text"
//                                                 placeholder="Remarques"
//                                                 value={newTask.remarks}
//                                                 onChange={(e) => setNewTask({ ...newTask, remarks: e.target.value })}
//                                                 className="p-2 border border-gray-300 rounded-lg w-full"
//                                             />
//                                         </td>
//                                         <td className="p-2 relative">
//                                             <div
//                                                 onClick={() => setIsStatusOpen(!isStatusOpen)}
//                                                 className="p-2 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-between"
//                                             >
//                                                 <span
//                                                     className={`px-2 py-1 rounded-full text-white ${
//                                                         statusOptions.find((opt) => opt.value === newTask.status)?.color
//                                                     }`}
//                                                 >
//                                                     {newTask.status}
//                                                 </span>
//                                                 <ChevronDown className="w-4 h-4" />
//                                             </div>
//                                             <AnimatePresence>
//                                                 {isStatusOpen && (
//                                                     <motion.div
//                                                         initial={{ opacity: 0, y: -10 }}
//                                                         animate={{ opacity: 1, y: 0 }}
//                                                         exit={{ opacity: 0, y: -10 }}
//                                                         className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg"
//                                                     >
//                                                         {statusOptions.map((option) => (
//                                                             <div
//                                                                 key={option.value}
//                                                                 onClick={() => {
//                                                                     setNewTask({ ...newTask, status: option.value });
//                                                                     setIsStatusOpen(false);
//                                                                 }}
//                                                                 className={`p-2 cursor-pointer hover:bg-gray-100 ${
//                                                                     newTask.status === option.value ? "bg-gray-100" : ""
//                                                                 }`}
//                                                             >
//                                                                 <span className={`px-2 py-1 rounded-full text-white ${option.color}`}>
//                                                                     {option.value}
//                                                                 </span>
//                                                             </div>
//                                                         ))}
//                                                         <div className="p-2">
//                                                             <input
//                                                                 type="text"
//                                                                 placeholder="Nouveau statut"
//                                                                 value={customStatus}
//                                                                 onChange={(e) => setCustomStatus(e.target.value)}
//                                                                 className="p-2 border border-gray-300 rounded-lg w-full"
//                                                             />
//                                                             <button
//                                                                 onClick={addCustomStatus}
//                                                                 className="mt-2 flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//                                                             >
//                                                                 <PlusCircle className="w-5 h-5 mr-2" /> Ajouter
//                                                             </button>
//                                                         </div>
//                                                     </motion.div>
//                                                 )}
//                                             </AnimatePresence>
//                                         </td>
//                                         <td className="p-2 relative">
//                                             <div
//                                                 onClick={() => setIsPriorityOpen(!isPriorityOpen)}
//                                                 className="p-2 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-between"
//                                             >
//                                                 <span
//                                                     className={`px-2 py-1 rounded-full text-white ${
//                                                         priorityOptions.find((opt) => opt.value === newTask.priority)?.color
//                                                     }`}
//                                                 >
//                                                     {newTask.priority}
//                                                 </span>
//                                                 <ChevronDown className="w-4 h-4" />
//                                             </div>
//                                             <AnimatePresence>
//                                                 {isPriorityOpen && (
//                                                     <motion.div
//                                                         initial={{ opacity: 0, y: -10 }}
//                                                         animate={{ opacity: 1, y: 0 }}
//                                                         exit={{ opacity: 0, y: -10 }}
//                                                         className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg"
//                                                     >
//                                                         {priorityOptions.map((option) => (
//                                                             <div
//                                                                 key={option.value}
//                                                                 onClick={() => {
//                                                                     setNewTask({ ...newTask, priority: option.value });
//                                                                     setIsPriorityOpen(false);
//                                                                 }}
//                                                                 className={`p-2 cursor-pointer hover:bg-gray-100 ${
//                                                                     newTask.priority === option.value ? "bg-gray-100" : ""
//                                                                 }`}
//                                                             >
//                                                                 <span className={`px-2 py-1 rounded-full text-white ${option.color}`}>
//                                                                     {option.value}
//                                                                 </span>
//                                                             </div>
//                                                         ))}
//                                                         <div className="p-2">
//                                                             <input
//                                                                 type="text"
//                                                                 placeholder="Nouvelle priorité"
//                                                                 value={customPriority}
//                                                                 onChange={(e) => setCustomPriority(e.target.value)}
//                                                                 className="p-2 border border-gray-300 rounded-lg w-full"
//                                                             />
//                                                             <button
//                                                                 onClick={addCustomPriority}
//                                                                 className="mt-2 flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//                                                             >
//                                                                 <PlusCircle className="w-5 h-5 mr-2" /> Ajouter
//                                                             </button>
//                                                         </div>
//                                                     </motion.div>
//                                                 )}
//                                             </AnimatePresence>
//                                         </td>
//                                         <td className="p-2">
//                                             <DatePicker
//                                                 selected={newTask.startDate}
//                                                 onChange={(date) => setNewTask({ ...newTask, startDate: date })}
//                                                 className="p-2 border border-gray-300 rounded-lg w-full"
//                                             />
//                                         </td>
//                                         <td className="p-2">
//                                             <DatePicker
//                                                 selected={newTask.endDate}
//                                                 onChange={(date) => setNewTask({ ...newTask, endDate: date })}
//                                                 className="p-2 border border-gray-300 rounded-lg w-full"
//                                             />
//                                         </td>
//                                         <td className="p-2">
//                                             <label className="flex items-center cursor-pointer">
//                                                 <File className="w-5 h-5 mr-2" />
//                                                 <input type="file" multiple onChange={handleFileUpload} className="hidden" />
//                                                 Ajouter des fichiers
//                                             </label>
//                                         </td>
//                                         <td className="p-2 text-center">
//                                             <button
//                                                 onClick={addTask}
//                                                 className="text-green-500 hover:text-green-700 mr-2"
//                                             >
//                                                 <Check className="w-5 h-5" />
//                                             </button>
//                                             <button
//                                                 onClick={() => setIsAddingTask(false)}
//                                                 className="text-red-500 hover:text-red-700"
//                                             >
//                                                 <X className="w-5 h-5" />
//                                             </button>
//                                         </td>
//                                     </motion.tr>
//                                 )}

//                                 {/* Liste des tâches existantes */}
//                                 {phase.tasks.map((task) => (
//                                     <motion.tr
//                                         key={task.id}
//                                         initial={{ opacity: 0, y: 10 }}
//                                         animate={{ opacity: 1, y: 0 }}
//                                         className="border-b"
//                                     >
//                                         <td className="p-2">
//                                             {editingTaskId === task.id ? (
//                                                 <input
//                                                     type="text"
//                                                     value={newTask.title}
//                                                     onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
//                                                     className="p-2 border border-gray-300 rounded-lg w-full"
//                                                 />
//                                             ) : (
//                                                 task.title
//                                             )}
//                                         </td>
//                                         <td className="p-2">
//                                             {editingTaskId === task.id ? (
//                                                 <input
//                                                     type="text"
//                                                     value={newTask.remarks}
//                                                     onChange={(e) => setNewTask({ ...newTask, remarks: e.target.value })}
//                                                     className="p-2 border border-gray-300 rounded-lg w-full"
//                                                 />
//                                             ) : (
//                                                 task.remarks
//                                             )}
//                                         </td>
//                                         <td className="p-2">
//                                             <span
//                                                 className={`px-2 py-1 rounded-full text-white ${
//                                                     statusOptions.find((opt) => opt.value === task.status)?.color
//                                                 }`}
//                                             >
//                                                 {task.status}
//                                             </span>
//                                         </td>
//                                         <td className="p-2">
//                                             <span
//                                                 className={`px-2 py-1 rounded-full text-white ${
//                                                     priorityOptions.find((opt) => opt.value === task.priority)?.color
//                                                 }`}
//                                             >
//                                                 {task.priority}
//                                             </span>
//                                         </td>
//                                         <td className="p-2">
//                                             {new Date(task.startDate).toLocaleDateString()}
//                                         </td>
//                                         <td className="p-2">
//                                             {new Date(task.endDate).toLocaleDateString()}
//                                         </td>
//                                         <td className="p-2">
//                                             {task.files && task.files.map((file, index) => (
//                                                 <div key={index} className="flex items-center">
//                                                     <File className="w-4 h-4 mr-2" />
//                                                     <span>{file.name}</span>
//                                                 </div>
//                                             ))}
//                                         </td>
//                                         <td className="p-2 text-center">
//                                             {editingTaskId === task.id ? (
//                                                 <button
//                                                     onClick={saveTask}
//                                                     className="text-green-500 hover:text-green-700 mr-2"
//                                                 >
//                                                     <Check className="w-5 h-5" />
//                                                 </button>
//                                             ) : (
//                                                 <button
//                                                     onClick={() => editTask(task)}
//                                                     className="text-blue-500 hover:text-blue-700 mr-2"
//                                                 >
//                                                     <Edit className="w-5 h-5" />
//                                                 </button>
//                                             )}
//                                             <button
//                                                 onClick={() => deleteTask(phase.id, task.id)}
//                                                 className="text-red-500 hover:text-red-700"
//                                             >
//                                                 <Trash className="w-5 h-5" />
//                                             </button>
//                                         </td>
//                                     </motion.tr>
//                                 ))}
//                             </tbody>
//                         </table>

//                         {/* Bouton pour ajouter une tâche à la phase */}
//                         <div className="mt-4">
//                             <button
//                                 onClick={() => {
//                                     setNewTask({ ...newTask, phaseId: phase.id });
//                                     setIsAddingTask(true);
//                                 }}
//                                 className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
//                             >
//                                 <PlusCircle className="w-5 h-5 mr-2" /> Ajouter Tâche
//                             </button>
//                         </div>
//                     </motion.div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default TaskManagement;