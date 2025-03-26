// import { Head } from '@inertiajs/react';
// import { motion } from 'framer-motion';
// import React, { useState, useEffect } from 'react';
// import { PlusCircle, Trash2, Save, Clock, Calendar, UserPlus, Edit, Check, X } from 'lucide-react';

// export default function WorkerAttendance({ project, initialWorkers = [], weekDates }) {
//   // États
//   const [activeTab, setActiveTab] = useState('attendance');
//   const [workers, setWorkers] = useState(initialWorkers);
//   const [newWorker, setNewWorker] = useState({ name: '', task: '' });
//   const [editMode, setEditMode] = useState(false);
//   const [selectedWorkerId, setSelectedWorkerId] = useState(null);

//   // Calcul automatique des jours travaillés
//   useEffect(() => {
//     const updatedWorkers = workers.map(worker => {
//       let daysWorked = 0;
//       Object.values(worker.weekly_attendance || {}).forEach(day => {
//         if (day.status === 'Présent') daysWorked++;
//       });
//       return { ...worker, days_worked: daysWorked };
//     });
//     setWorkers(updatedWorkers);
//   }, [workers]);

//   // Gestion des ouvriers
//   const addWorker = () => {
//     if (newWorker.name.trim() === '') return;
    
//     const weekly_attendance = {};
//     weekDates.forEach(date => {
//       weekly_attendance[date.date] = { status: 'Absent' };
//     });
    
//     setWorkers([
//       ...workers, 
//       {
//         id: Date.now(),
//         name: newWorker.name,
//         task: newWorker.task,
//         weekly_attendance,
//         days_worked: 0
//       }
//     ]);
//     setNewWorker({ name: '', task: '' });
//   };

//   const removeWorker = (workerId) => {
//     setWorkers(workers.filter(worker => worker.id !== workerId));
//   };

//   // Gestion du pointage
//   const toggleAttendance = (workerId, date) => {
//     setWorkers(workers.map(worker => {
//       if (worker.id === workerId) {
//         const updatedAttendance = { ...worker.weekly_attendance };
//         updatedAttendance[date] = { 
//           status: updatedAttendance[date]?.status === 'Présent' ? 'Absent' : 'Présent' 
//         };
//         return { ...worker, weekly_attendance: updatedAttendance };
//       }
//       return worker;
//     }));
//   };

//   // Animations
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 0.5 } }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.3 } }
//   };

//   return (
//     <div>
//       <Head title="Gestion de Pointage des Ouvriers" />
      
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//         className="p-6 bg-gray-100 min-h-screen"
//       >
//         <div className="max-w-7xl mx-auto">
//           {/* En-tête avec onglets */}
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-900">
//                 Pointage des Ouvriers
//               </h1>
//               <p className="text-gray-600 mt-1">Projet: {project.name}</p>
//             </div>
            
//             <div className="mt-4 md:mt-0 flex bg-white rounded-lg shadow">
//               <button
//                 onClick={() => setActiveTab('attendance')}
//                 className={`px-4 py-2 rounded-l-lg ${
//                   activeTab === 'attendance' 
//                     ? 'bg-blue-600 text-white' 
//                     : 'bg-white text-gray-700'
//                 }`}
//               >
//                 <div className="flex items-center">
//                   <Clock size={18} className="mr-2" />
//                   <span>Pointage</span>
//                 </div>
//               </button>
              
//               <button
//                 onClick={() => setActiveTab('management')}
//                 className={`px-4 py-2 rounded-r-lg ${
//                   activeTab === 'management' 
//                     ? 'bg-blue-600 text-white' 
//                     : 'bg-white text-gray-700'
//                 }`}
//               >
//                 <div className="flex items-center">
//                   <UserPlus size={18} className="mr-2" />
//                   <span>Gestion des Ouvriers</span>
//                 </div>
//               </button>
//             </div>
//           </div>

//           {/* Calendrier de la semaine */}
//           <motion.div
//             variants={itemVariants}
//             className="mb-6 overflow-x-auto"
//           >
//             <div className="flex gap-2 md:gap-4">
//               <div className="bg-gray-200 p-3 md:p-4 rounded-lg shadow min-w-20 md:min-w-24 flex items-center justify-center">
//                 <Calendar size={24} className="text-gray-700" />
//               </div>
//               {weekDates.map((date) => (
//                 <div 
//                   key={date.date} 
//                   className="bg-white p-3 md:p-4 rounded-lg shadow flex flex-col items-center min-w-20 md:min-w-24"
//                 >
//                   <p className="text-sm md:text-base font-semibold text-blue-600">{date.day}</p>
//                   <p className="text-lg md:text-xl font-bold">{date.day_number}</p>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Interface de gestion des ouvriers */}
//           {activeTab === 'management' && (
//             <motion.div
//               variants={itemVariants}
//               className="bg-white rounded-lg shadow p-6 mb-6"
//             >
//               <h2 className="text-xl font-semibold mb-4 flex items-center">
//                 <UserPlus size={20} className="mr-2 text-blue-600" />
//                 Ajouter un nouvel ouvrier
//               </h2>
              
//               <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end mb-6">
//                 <div className="md:col-span-5">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Nom de l'ouvrier
//                   </label>
//                   <input
//                     type="text"
//                     value={newWorker.name}
//                     onChange={(e) => setNewWorker({ ...newWorker, name: e.target.value })}
//                     placeholder="Entrez le nom"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </div>
                
//                 <div className="md:col-span-5">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Tâche assignée
//                   </label>
//                   <input
//                     type="text"
//                     value={newWorker.task}
//                     onChange={(e) => setNewWorker({ ...newWorker, task: e.target.value })}
//                     placeholder="Entrez la tâche"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </div>
                
//                 <div className="md:col-span-2">
//                   <button
//                     onClick={addWorker}
//                     className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
//                   >
//                     <PlusCircle size={18} className="mr-2" />
//                     Ajouter
//                   </button>
//                 </div>
//               </div>
              
//               <h2 className="text-xl font-semibold mb-4 mt-8 flex items-center">
//                 <Edit size={20} className="mr-2 text-blue-600" />
//                 Liste des ouvriers
//               </h2>
              
//               {workers.length === 0 ? (
//                 <div className="text-center py-10 text-gray-500">
//                   Aucun ouvrier enregistré pour ce projet
//                 </div>
//               ) : (
//                 <div className="overflow-x-auto">
//                   <table className="w-full">
//                     <thead>
//                       <tr className="bg-gray-100">
//                         <th className="p-3 text-left">ID</th>
//                         <th className="p-3 text-left">Nom</th>
//                         <th className="p-3 text-left">Tâche assignée</th>
//                         <th className="p-3 text-center">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {workers.map((worker, index) => (
//                         <tr key={worker.id} className="border-b hover:bg-gray-50">
//                           <td className="p-3">{index + 1}</td>
//                           <td className="p-3 font-medium">{worker.name}</td>
//                           <td className="p-3">{worker.task}</td>
//                           <td className="p-3 text-center">
//                             <button
//                               onClick={() => removeWorker(worker.id)}
//                               className="px-3 py-1 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors inline-flex items-center"
//                             >
//                               <Trash2 size={16} className="mr-1" />
//                               Supprimer
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </motion.div>
//           )}

//           {/* Interface de pointage */}
//           {activeTab === 'attendance' && (
//             <motion.div
//               variants={itemVariants}
//               className="bg-white rounded-lg shadow overflow-hidden"
//             >
//               <div className="p-4 bg-blue-50 border-b flex justify-between items-center">
//                 <h2 className="text-xl font-semibold text-blue-900 flex items-center">
//                   <Clock size={20} className="mr-2 text-blue-600" />
//                   Feuille de présence hebdomadaire
//                 </h2>
//                 <div>
//                   <button 
//                     className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center"
//                   >
//                     <Save size={18} className="mr-2" />
//                     Enregistrer le pointage
//                   </button>
//                 </div>
//               </div>
              
//               {workers.length === 0 ? (
//                 <div className="text-center py-16 text-gray-500">
//                   <div className="flex flex-col items-center">
//                     <UserPlus size={48} className="text-gray-300 mb-3" />
//                     <p className="mb-4">Aucun ouvrier enregistré pour ce projet</p>
//                     <button
//                       onClick={() => setActiveTab('management')}
//                       className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                     >
//                       Ajouter des ouvriers
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="overflow-x-auto">
//                   <table className="w-full min-w-max">
//                     <thead>
//                       <tr className="bg-gray-100">
//                         <th className="p-3 text-left font-semibold w-64 sticky left-0 bg-gray-100 z-10">
//                           Ouvrier / Tâche
//                         </th>
//                         {weekDates.map((date) => (
//                           <th key={date.date} className="p-3 text-center min-w-24">
//                             <div className="flex flex-col items-center">
//                               <span className="text-sm text-gray-600">{date.day}</span>
//                               <span className="font-semibold">{date.day_number}</span>
//                             </div>
//                           </th>
//                         ))}
//                         <th className="p-3 text-center bg-blue-50 font-semibold">Total jours</th>
//                         <th className="p-3 text-center bg-green-50 font-semibold">À payer</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {workers.map((worker) => (
//                         <tr key={worker.id} className="border-b hover:bg-gray-50">
//                           <td className="p-3 sticky left-0 bg-white z-10 border-r">
//                             <div>
//                               <div className="font-medium">{worker.name}</div>
//                               <div className="text-sm text-gray-600">{worker.task}</div>
//                             </div>
//                           </td>
                          
//                           {weekDates.map((date) => {
//                             const attendance = worker.weekly_attendance[date.date] || { status: 'Absent' };
//                             const isPresent = attendance.status === 'Présent';
                            
//                             return (
//                               <td 
//                                 key={date.date} 
//                                 className="p-3 text-center"
//                                 onClick={() => toggleAttendance(worker.id, date.date)}
//                               >
//                                 <button 
//                                   className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                                     isPresent 
//                                       ? 'bg-green-100 text-green-600 hover:bg-green-200' 
//                                       : 'bg-red-100 text-red-600 hover:bg-red-200'
//                                   }`}
//                                 >
//                                   {isPresent ? <Check size={16} /> : <X size={16} />}
//                                 </button>
//                               </td>
//                             );
//                           })}
                          
//                           <td className="p-3 text-center bg-blue-50 font-semibold">
//                             {worker.days_worked} / 7
//                           </td>
                          
//                           <td className="p-3 text-center bg-green-50">
//                             <div className="flex flex-col">
//                               <span className="font-bold text-green-700">{worker.days_worked} jours</span>
//                               <span className="text-sm text-gray-600">à payer</span>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </motion.div>
//           )}
//         </div>
//       </motion.div>
//     </div>
//   );
// }


// import { Head } from '@inertiajs/react';
// import { motion } from 'framer-motion';
// import React, { useState, useEffect } from 'react';
// import { PlusCircle, Trash2, Save, Clock, Calendar, UserPlus, Edit, Check, X, AlertCircle } from 'lucide-react';

// export default function WorkerAttendance({ project, initialWorkers = [], initialWeekDates = [] }) {
//   // États
//   const [activeTab, setActiveTab] = useState('attendance');
//   const [workers, setWorkers] = useState(initialWorkers);
//   const [newWorker, setNewWorker] = useState({ name: '', task: '', workDays: 7 });
//   const [currentWeek, setCurrentWeek] = useState(0);
  
//   // Générer les dates de la semaine si non fournies
//   const [weekDates, setWeekDates] = useState(initialWeekDates.length > 0 ? initialWeekDates : generateWeekDates(currentWeek));
  
//   function generateWeekDates(weekOffset = 0) {
//     const today = new Date();
//     const currentDay = today.getDay(); // 0 = Dimanche, 1 = Lundi, etc.
//     const diff = today.getDate() - currentDay + (currentDay === 0 ? -6 : 1) + (weekOffset * 7); // Ajustement pour commencer le lundi
    
//     const monday = new Date(today.setDate(diff));
    
//     const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
//     const result = [];
    
//     for (let i = 0; i < 7; i++) {
//       const date = new Date(monday);
//       date.setDate(monday.getDate() + i);
      
//       const formattedDate = date.toISOString().split('T')[0]; // Format YYYY-MM-DD
//       const dayName = days[i];
//       const dayNumber = date.getDate();
//       const monthNumber = date.getMonth() + 1;
      
//       result.push({
//         date: formattedDate,
//         day: dayName,
//         day_number: dayNumber,
//         month: monthNumber,
//         fullDisplay: `${dayNumber}/${monthNumber}`
//       });
//     }
    
//     return result;
//   }
  
//   // Changer de semaine
//   const changeWeek = (offset) => {
//     const newWeek = currentWeek + offset;
//     setCurrentWeek(newWeek);
//     setWeekDates(generateWeekDates(newWeek));
    
//     // Mettre à jour les semaines pour les ouvriers
//     const updatedWorkers = workers.map(worker => {
//       // Vérifier si les données de présence existent pour cette semaine
//       const newDates = generateWeekDates(newWeek);
//       const weekKey = `week_${newWeek}`;
      
//       if (!worker.attendance || !worker.attendance[weekKey]) {
//         // Initialiser les données de présence pour cette semaine
//         const newAttendance = { ...(worker.attendance || {}) };
//         newAttendance[weekKey] = {};
        
//         newDates.forEach(date => {
//           newAttendance[weekKey][date.date] = { status: 'Absent' };
//         });
        
//         return { ...worker, attendance: newAttendance };
//       }
      
//       return worker;
//     });
    
//     setWorkers(updatedWorkers);
//   };
  
//   // Calcul automatique des jours travaillés
//   useEffect(() => {
//     const updatedWorkers = workers.map(worker => {
//       const weekKey = `week_${currentWeek}`;
//       const attendance = worker.attendance && worker.attendance[weekKey] ? worker.attendance[weekKey] : {};
      
//       let daysWorked = 0;
//       let totalPossibleDays = Math.min(worker.workDays || 7, 7); // Limiter au maximum de 7
      
//       weekDates.forEach(date => {
//         if (attendance[date.date]?.status === 'Présent') {
//           daysWorked++;
//         }
//       });
      
//       return { 
//         ...worker, 
//         current_days_worked: daysWorked,
//         current_days_possible: totalPossibleDays,
//         current_attendance_percentage: totalPossibleDays > 0 
//           ? Math.round((daysWorked / totalPossibleDays) * 100) 
//           : 0
//       };
//     });
    
//     setWorkers(updatedWorkers);
//   }, [workers, currentWeek, weekDates]);
  
//   // Gestion des ouvriers
//   const addWorker = () => {
//     if (newWorker.name.trim() === '') return;
    
//     // Initialiser les données de présence pour la semaine actuelle
//     const attendance = {};
//     const weekKey = `week_${currentWeek}`;
//     attendance[weekKey] = {};
    
//     weekDates.forEach(date => {
//       attendance[weekKey][date.date] = { status: 'Absent' };
//     });
    
//     const workDays = parseInt(newWorker.workDays) || 7;
    
//     setWorkers([
//       ...workers, 
//       {
//         id: Date.now(),
//         name: newWorker.name,
//         task: newWorker.task,
//         workDays: workDays,
//         attendance: attendance,
//         current_days_worked: 0,
//         current_days_possible: workDays,
//         current_attendance_percentage: 0
//       }
//     ]);
    
//     setNewWorker({ name: '', task: '', workDays: 7 });
//   };
  
//   const removeWorker = (workerId) => {
//     setWorkers(workers.filter(worker => worker.id !== workerId));
//   };
  
//   // Gestion du pointage
//   const toggleAttendance = (workerId, date) => {
//     setWorkers(workers.map(worker => {
//       if (worker.id === workerId) {
//         const weekKey = `week_${currentWeek}`;
//         const updatedAttendance = { ...(worker.attendance || {}) };
        
//         if (!updatedAttendance[weekKey]) {
//           updatedAttendance[weekKey] = {};
//         }
        
//         // Si on a déjà atteint le nombre max de jours travaillés et qu'on veut marquer un autre jour comme présent
//         let currentPresent = 0;
//         Object.values(updatedAttendance[weekKey] || {}).forEach(day => {
//           if (day.status === 'Présent') currentPresent++;
//         });
        
//         const isCurrentlyPresent = updatedAttendance[weekKey][date]?.status === 'Présent';
//         const wouldExceedWorkDays = !isCurrentlyPresent && currentPresent >= worker.workDays;
        
//         // Si on dépasse le nombre de jours de travail autorisés, ne pas permettre
//         if (wouldExceedWorkDays) {
//           return worker;
//         }
        
//         updatedAttendance[weekKey][date] = { 
//           status: updatedAttendance[weekKey][date]?.status === 'Présent' ? 'Absent' : 'Présent' 
//         };
        
//         return { ...worker, attendance: updatedAttendance };
//       }
//       return worker;
//     }));
//   };
  
//   // Mise à jour du nombre de jours de travail hebdomadaire
//   const updateWorkerDays = (workerId, days) => {
//     setWorkers(workers.map(worker => {
//       if (worker.id === workerId) {
//         return { ...worker, workDays: parseInt(days) || 7 };
//       }
//       return worker;
//     }));
//   };
  
//   // Format de date pour l'affichage
//   const formatDateRange = () => {
//     if (weekDates.length === 0) return '';
    
//     const firstDate = weekDates[0];
//     const lastDate = weekDates[weekDates.length - 1];
    
//     return `${firstDate.day_number}/${firstDate.month} - ${lastDate.day_number}/${lastDate.month}`;
//   };
  
//   // Animations
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 0.5 } }
//   };
  
//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.3 } }
//   };
  
//   return (
//     <div>
//       <Head title="Gestion de Pointage des Ouvriers" />
      
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//         className="p-6 bg-gray-100 min-h-screen"
//       >
//         <div className="max-w-7xl mx-auto">
//           {/* En-tête avec onglets */}
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-900">
//                 Pointage des Ouvriers
//               </h1>
//               <p className="text-gray-600 mt-1">Projet: {project?.name || 'Projet actuel'}</p>
//             </div>
            
//             <div className="mt-4 md:mt-0 flex bg-white rounded-lg shadow">
//               <button
//                 onClick={() => setActiveTab('attendance')}
//                 className={`px-4 py-2 rounded-l-lg ${
//                   activeTab === 'attendance' 
//                     ? 'bg-blue-600 text-white' 
//                     : 'bg-white text-gray-700'
//                 }`}
//               >
//                 <div className="flex items-center">
//                   <Clock size={18} className="mr-2" />
//                   <span>Pointage</span>
//                 </div>
//               </button>
              
//               <button
//                 onClick={() => setActiveTab('management')}
//                 className={`px-4 py-2 rounded-r-lg ${
//                   activeTab === 'management' 
//                     ? 'bg-blue-600 text-white' 
//                     : 'bg-white text-gray-700'
//                 }`}
//               >
//                 <div className="flex items-center">
//                   <UserPlus size={18} className="mr-2" />
//                   <span>Gestion des Ouvriers</span>
//                 </div>
//               </button>
//             </div>
//           </div>

//           {/* Sélecteur de semaine */}
//           <motion.div
//             variants={itemVariants}
//             className="mb-6 bg-white p-4 rounded-lg shadow"
//           >
//             <div className="flex justify-between items-center">
//               <button 
//                 onClick={() => changeWeek(-1)} 
//                 className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
//               >
//                 Semaine précédente
//               </button>
              
//               <div className="text-center">
//                 <h2 className="font-semibold text-lg">Semaine du {formatDateRange()}</h2>
//                 <p className="text-sm text-gray-600">
//                   {currentWeek === 0 ? 'Semaine actuelle' : currentWeek > 0 ? `${currentWeek} semaine(s) à venir` : `${Math.abs(currentWeek)} semaine(s) passée(s)`}
//                 </p>
//               </div>
              
//               <button 
//                 onClick={() => changeWeek(1)} 
//                 className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
//               >
//                 Semaine suivante
//               </button>
//             </div>
//           </motion.div>

//           {/* Calendrier de la semaine */}
//           <motion.div
//             variants={itemVariants}
//             className="mb-6 overflow-x-auto"
//           >
//             <div className="flex gap-2 md:gap-4">
//               <div className="bg-gray-200 p-3 md:p-4 rounded-lg shadow min-w-20 md:min-w-24 flex items-center justify-center">
//                 <Calendar size={24} className="text-gray-700" />
//               </div>
//               {weekDates.map((date, index) => (
//                 <div 
//                   key={date.date} 
//                   className={`p-3 md:p-4 rounded-lg shadow flex flex-col items-center min-w-20 md:min-w-24 ${
//                     index < 5 ? 'bg-white' : 'bg-gray-50'
//                   }`}
//                 >
//                   <p className="text-sm md:text-base font-semibold text-blue-600">{date.day}</p>
//                   <p className="text-lg md:text-xl font-bold">{date.fullDisplay}</p>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Interface de gestion des ouvriers */}
//           {activeTab === 'management' && (
//             <motion.div
//               variants={itemVariants}
//               className="bg-white rounded-lg shadow p-6 mb-6"
//             >
//               <h2 className="text-xl font-semibold mb-4 flex items-center">
//                 <UserPlus size={20} className="mr-2 text-blue-600" />
//                 Ajouter un nouvel ouvrier
//               </h2>
              
//               <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end mb-6">
//                 <div className="md:col-span-4">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Nom de l'ouvrier
//                   </label>
//                   <input
//                     type="text"
//                     value={newWorker.name}
//                     onChange={(e) => setNewWorker({ ...newWorker, name: e.target.value })}
//                     placeholder="Entrez le nom"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </div>
                
//                 <div className="md:col-span-4">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Tâche assignée
//                   </label>
//                   <input
//                     type="text"
//                     value={newWorker.task}
//                     onChange={(e) => setNewWorker({ ...newWorker, task: e.target.value })}
//                     placeholder="Entrez la tâche"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </div>
                
//                 <div className="md:col-span-2">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Jours par semaine
//                   </label>
//                   <select
//                     value={newWorker.workDays}
//                     onChange={(e) => setNewWorker({ ...newWorker, workDays: e.target.value })}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   >
//                     {[1, 2, 3, 4, 5, 6, 7].map(day => (
//                       <option key={day} value={day}>{day} jour{day > 1 ? 's' : ''}</option>
//                     ))}
//                   </select>
//                 </div>
                
//                 <div className="md:col-span-2">
//                   <button
//                     onClick={addWorker}
//                     className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
//                   >
//                     <PlusCircle size={18} className="mr-2" />
//                     Ajouter
//                   </button>
//                 </div>
//               </div>
              
//               <h2 className="text-xl font-semibold mb-4 mt-8 flex items-center">
//                 <Edit size={20} className="mr-2 text-blue-600" />
//                 Liste des ouvriers
//               </h2>
              
//               {workers.length === 0 ? (
//                 <div className="text-center py-10 text-gray-500">
//                   Aucun ouvrier enregistré pour ce projet
//                 </div>
//               ) : (
//                 <div className="overflow-x-auto">
//                   <table className="w-full">
//                     <thead>
//                       <tr className="bg-gray-100">
//                         <th className="p-3 text-left">ID</th>
//                         <th className="p-3 text-left">Nom</th>
//                         <th className="p-3 text-left">Tâche assignée</th>
//                         <th className="p-3 text-center">Jours de travail</th>
//                         <th className="p-3 text-center">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {workers.map((worker, index) => (
//                         <tr key={worker.id} className="border-b hover:bg-gray-50">
//                           <td className="p-3">{index + 1}</td>
//                           <td className="p-3 font-medium">{worker.name}</td>
//                           <td className="p-3">{worker.task}</td>
//                           <td className="p-3 text-center">
//                             <select
//                               value={worker.workDays}
//                               onChange={(e) => updateWorkerDays(worker.id, e.target.value)}
//                               className="px-3 py-1 border border-gray-300 rounded-lg"
//                             >
//                               {[1, 2, 3, 4, 5, 6, 7].map(day => (
//                                 <option key={day} value={day}>{day} jour{day > 1 ? 's' : ''}</option>
//                               ))}
//                             </select>
//                           </td>
//                           <td className="p-3 text-center">
//                             <button
//                               onClick={() => removeWorker(worker.id)}
//                               className="px-3 py-1 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors inline-flex items-center"
//                             >
//                               <Trash2 size={16} className="mr-1" />
//                               Supprimer
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </motion.div>
//           )}

//           {/* Interface de pointage */}
//           {activeTab === 'attendance' && (
//             <motion.div
//               variants={itemVariants}
//               className="bg-white rounded-lg shadow overflow-hidden"
//             >
//               <div className="p-4 bg-blue-50 border-b flex justify-between items-center">
//                 <h2 className="text-xl font-semibold text-blue-900 flex items-center">
//                   <Clock size={20} className="mr-2 text-blue-600" />
//                   Feuille de présence - Semaine du {formatDateRange()}
//                 </h2>
//                 <div>
//                   <button 
//                     className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center"
//                   >
//                     <Save size={18} className="mr-2" />
//                     Enregistrer le pointage
//                   </button>
//                 </div>
//               </div>
              
//               {workers.length === 0 ? (
//                 <div className="text-center py-16 text-gray-500">
//                   <div className="flex flex-col items-center">
//                     <UserPlus size={48} className="text-gray-300 mb-3" />
//                     <p className="mb-4">Aucun ouvrier enregistré pour ce projet</p>
//                     <button
//                       onClick={() => setActiveTab('management')}
//                       className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                     >
//                       Ajouter des ouvriers
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="overflow-x-auto">
//                   <table className="w-full min-w-max">
//                     <thead>
//                       <tr className="bg-gray-100">
//                         <th className="p-3 text-left font-semibold w-64 sticky left-0 bg-gray-100 z-10">
//                           Ouvrier / Tâche
//                         </th>
//                         {weekDates.map((date, index) => (
//                           <th 
//                             key={date.date} 
//                             className={`p-3 text-center min-w-24 ${index >= 5 ? 'bg-gray-50' : ''}`}
//                           >
//                             <div className="flex flex-col items-center">
//                               <span className="text-sm text-gray-600">{date.day}</span>
//                               <span className="font-semibold">{date.fullDisplay}</span>
//                             </div>
//                           </th>
//                         ))}
//                         <th className="p-3 text-center bg-blue-50 font-semibold">Jours présent</th>
//                         <th className="p-3 text-center bg-green-50 font-semibold">À payer</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {workers.map((worker) => {
//                         const weekKey = `week_${currentWeek}`;
//                         const attendance = worker.attendance && worker.attendance[weekKey] ? worker.attendance[weekKey] : {};
                        
//                         return (
//                           <tr key={worker.id} className="border-b hover:bg-gray-50">
//                             <td className="p-3 sticky left-0 bg-white z-10 border-r">
//                               <div>
//                                 <div className="font-medium">{worker.name}</div>
//                                 <div className="text-sm text-gray-600">{worker.task}</div>
//                                 <div className="text-xs text-blue-600 mt-1">
//                                   {worker.workDays} jour{worker.workDays > 1 ? 's' : ''} par semaine
//                                 </div>
//                               </div>
//                             </td>
                            
//                             {weekDates.map((date, index) => {
//                               const dayAttendance = attendance[date.date] || { status: 'Absent' };
//                               const isPresent = dayAttendance.status === 'Présent';
//                               const isWeekend = index >= 5; // Samedi et dimanche
                              
//                               return (
//                                 <td 
//                                   key={date.date} 
//                                   className={`p-3 text-center ${isWeekend ? 'bg-gray-50' : ''}`}
//                                 >
//                                   <button 
//                                     onClick={() => toggleAttendance(worker.id, date.date)}
//                                     className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                                       isPresent 
//                                         ? 'bg-green-100 text-green-600 hover:bg-green-200' 
//                                         : 'bg-red-100 text-red-600 hover:bg-red-200'
//                                     } ${isWeekend ? 'opacity-70' : ''}`}
//                                     title={isPresent ? 'Marquer comme absent' : 'Marquer comme présent'}
//                                   >
//                                     {isPresent ? <Check size={16} /> : <X size={16} />}
//                                   </button>
//                                 </td>
//                               );
//                             })}
                            
//                             <td className="p-3 text-center bg-blue-50">
//                               <div className="flex items-center justify-center">
//                                 <span className="font-medium text-blue-800">
//                                   {worker.current_days_worked || 0} / {worker.workDays || 7}
//                                 </span>
                                
//                                 {(worker.current_days_worked || 0) > (worker.workDays || 7) && (
//                                   <div className="ml-2 text-amber-600" title="Dépassement du nombre de jours prévus">
//                                     <AlertCircle size={16} />
//                                   </div>
//                                 )}
//                               </div>
                              
//                               <div className="w-full bg-blue-200 rounded-full h-2 mt-1">
//                                 <div 
//                                   className="bg-blue-600 h-2 rounded-full" 
//                                   style={{ width: `${worker.current_attendance_percentage || 0}%` }}
//                                 ></div>
//                               </div>
//                             </td>
                            
//                             <td className="p-3 text-center bg-green-50">
//                               <div className="flex flex-col">
//                                 <span className="font-bold text-green-700">
//                                   {worker.current_days_worked || 0} jour{(worker.current_days_worked || 0) > 1 ? 's' : ''}
//                                 </span>
//                                 <span className="text-sm text-gray-600">à payer</span>
//                               </div>
//                             </td>
//                           </tr>
//                         );
//                       })}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </motion.div>
//           )}
//         </div>
//       </motion.div>
//     </div>
//   );
// }






//code dèmarrè
// import { Head } from '@inertiajs/react';
// import { motion } from 'framer-motion';
// import React, { useState, useEffect } from 'react';
// import { PlusCircle, Trash2, Save, Clock, Calendar, UserPlus, Edit, Check, X, AlertCircle, DollarSign } from 'lucide-react';

// export default function WorkerAttendance({ project }) {
//   // États
//   const [activeTab, setActiveTab] = useState('attendance');
//   const [workers, setWorkers] = useState([]);
//   const [newWorker, setNewWorker] = useState({
//     name: '',
//     task: '',
//     phase: '',
//     workDays: 7,
//     hourlyRate: 150,
//     paymentType: 'daily'
//   });
//   const [currentWeek, setCurrentWeek] = useState(0);
//   const [weekDates, setWeekDates] = useState(generateWeekDates(currentWeek));

//   // Générer les dates de la semaine
//   function generateWeekDates(weekOffset = 0) {
//     const today = new Date();
//     const currentDay = today.getDay(); // 0 = Dimanche, 1 = Lundi, etc.
//     const diff = today.getDate() - currentDay + (currentDay === 0 ? -6 : 1) + (weekOffset * 7); // Ajustement pour commencer le lundi

//     const monday = new Date(today.setDate(diff));

//     const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
//     const result = [];

//     for (let i = 0; i < 7; i++) {
//       const date = new Date(monday);
//       date.setDate(monday.getDate() + i);

//       const formattedDate = date.toISOString().split('T')[0]; // Format YYYY-MM-DD
//       const dayName = days[i];
//       const dayNumber = date.getDate();
//       const monthNumber = date.getMonth() + 1;

//       result.push({
//         date: formattedDate,
//         day: dayName,
//         day_number: dayNumber,
//         month: monthNumber,
//         fullDisplay: `${dayNumber}/${monthNumber}`
//       });
//     }

//     return result;
//   }

//   // Changer de semaine
//   const changeWeek = (offset) => {
//     const newWeek = currentWeek + offset;
//     setCurrentWeek(newWeek);
//     setWeekDates(generateWeekDates(newWeek));
//   };

//   // Ajouter un ouvrier
//   const addWorker = () => {
//     if (newWorker.name.trim() === '') return;

//     const worker = {
//       id: Date.now(),
//       name: newWorker.name,
//       task: newWorker.task,
//       phase: newWorker.phase,
//       workDays: parseInt(newWorker.workDays) || 7,
//       hourlyRate: parseInt(newWorker.hourlyRate) || 150,
//       paymentType: newWorker.paymentType,
//       attendance: {}
//     };

//     setWorkers([...workers, worker]);
//     setNewWorker({
//       name: '',
//       task: '',
//       phase: '',
//       workDays: 7,
//       hourlyRate: 150,
//       paymentType: 'daily'
//     });
//   };

//   // Supprimer un ouvrier
//   const removeWorker = (workerId) => {
//     setWorkers(workers.filter(worker => worker.id !== workerId));
//   };

//   // Marquer la présence d'un ouvrier
//   const toggleAttendance = (workerId, date) => {
//     setWorkers(workers.map(worker => {
//       if (worker.id === workerId) {
//         const updatedAttendance = { ...worker.attendance };
//         updatedAttendance[date] = updatedAttendance[date] === 'Présent' ? 'Absent' : 'Présent';
//         return { ...worker, attendance: updatedAttendance };
//       }
//       return worker;
//     }));
//   };

//   // Calculer le paiement
//   const calculatePayment = (worker) => {
//     const daysWorked = Object.values(worker.attendance).filter(status => status === 'Présent').length;
//     const rate = worker.hourlyRate;

//     if (worker.paymentType === 'weekly') {
//       return daysWorked * rate; // Paiement hebdomadaire
//     } else {
//       return rate; // Paiement journalier
//     }
//   };

//   // Format de date pour l'affichage
//   const formatDateRange = () => {
//     if (weekDates.length === 0) return '';

//     const firstDate = weekDates[0];
//     const lastDate = weekDates[weekDates.length - 1];

//     return `${firstDate.day_number}/${firstDate.month} - ${lastDate.day_number}/${firstDate.month}`;
//   };

//   // Animations
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 0.5 } }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.3 } }
//   };

//   return (
//     <div>
//       <Head title="Gestion de Pointage des Ouvriers" />

//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//         className="p-6 bg-gray-100 min-h-screen"
//       >
//         <div className="max-w-7xl mx-auto">
//           {/* En-tête avec onglets */}
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-900">
//                 Pointage des Ouvriers
//               </h1>
//               <p className="text-gray-600 mt-1">Projet: {project?.name || 'Projet actuel'}</p>
//             </div>

//             <div className="mt-4 md:mt-0 flex bg-white rounded-lg shadow">
//               <button
//                 onClick={() => setActiveTab('attendance')}
//                 className={`px-4 py-2 rounded-l-lg ${
//                   activeTab === 'attendance'
//                     ? 'bg-blue-600 text-white'
//                     : 'bg-white text-gray-700'
//                 }`}
//               >
//                 <div className="flex items-center">
//                   <Clock size={18} className="mr-2" />
//                   <span>Pointage</span>
//                 </div>
//               </button>

//               <button
//                 onClick={() => setActiveTab('management')}
//                 className={`px-4 py-2 rounded-r-lg ${
//                   activeTab === 'management'
//                     ? 'bg-blue-600 text-white'
//                     : 'bg-white text-gray-700'
//                 }`}
//               >
//                 <div className="flex items-center">
//                   <UserPlus size={18} className="mr-2" />
//                   <span>Gestion des Ouvriers</span>
//                 </div>
//               </button>
//             </div>
//           </div>

//           {/* Sélecteur de semaine */}
//           <motion.div
//             variants={itemVariants}
//             className="mb-6 bg-white p-4 rounded-lg shadow"
//           >
//             <div className="flex justify-between items-center">
//               <button
//                 onClick={() => changeWeek(-1)}
//                 className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
//               >
//                 Semaine précédente
//               </button>

//               <div className="text-center">
//                 <h2 className="font-semibold text-lg">Semaine du {formatDateRange()}</h2>
//                 <p className="text-sm text-gray-600">
//                   {currentWeek === 0 ? 'Semaine actuelle' : currentWeek > 0 ? `${currentWeek} semaine(s) à venir` : `${Math.abs(currentWeek)} semaine(s) passée(s)`}
//                 </p>
//               </div>

//               <button
//                 onClick={() => changeWeek(1)}
//                 className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
//               >
//                 Semaine suivante
//               </button>
//             </div>
//           </motion.div>

//           {/* Interface de gestion des ouvriers */}
//           {activeTab === 'management' && (
//             <motion.div
//               variants={itemVariants}
//               className="bg-white rounded-lg shadow p-6 mb-6"
//             >
//               <h2 className="text-xl font-semibold mb-4 flex items-center">
//                 <UserPlus size={20} className="mr-2 text-blue-600" />
//                 Ajouter un nouvel ouvrier
//               </h2>

//               <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end mb-6">
//                 <div className="md:col-span-3">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Nom de l'ouvrier
//                   </label>
//                   <input
//                     type="text"
//                     value={newWorker.name}
//                     onChange={(e) => setNewWorker({ ...newWorker, name: e.target.value })}
//                     placeholder="Entrez le nom"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </div>

//                 <div className="md:col-span-2">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Tâche assignée
//                   </label>
//                   <input
//                     type="text"
//                     value={newWorker.task}
//                     onChange={(e) => setNewWorker({ ...newWorker, task: e.target.value })}
//                     placeholder="Entrez la tâche"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </div>

//                 <div className="md:col-span-2">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Phase du projet
//                   </label>
//                   <input
//                     type="text"
//                     value={newWorker.phase}
//                     onChange={(e) => setNewWorker({ ...newWorker, phase: e.target.value })}
//                     placeholder="Phase du projet"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </div>

//                 <div className="md:col-span-1">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Jours/sem.
//                   </label>
//                   <select
//                     value={newWorker.workDays}
//                     onChange={(e) => setNewWorker({ ...newWorker, workDays: e.target.value })}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   >
//                     {[1, 2, 3, 4, 5, 6, 7].map(day => (
//                       <option key={day} value={day}>{day} j</option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="md:col-span-2">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Taux journalier (MAD)
//                   </label>
//                   <input
//                     type="number"
//                     value={newWorker.hourlyRate}
//                     onChange={(e) => setNewWorker({ ...newWorker, hourlyRate: e.target.value })}
//                     placeholder="Taux (MAD)"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </div>

//                 <div className="md:col-span-2">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Type de paiement
//                   </label>
//                   <select
//                     value={newWorker.paymentType}
//                     onChange={(e) => setNewWorker({ ...newWorker, paymentType: e.target.value })}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   >
//                     <option value="daily">Journalier</option>
//                     <option value="weekly">Hebdomadaire</option>
//                   </select>
//                 </div>

//                 <div className="md:col-span-2">
//                   <button
//                     onClick={addWorker}
//                     className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
//                   >
//                     <PlusCircle size={18} className="mr-2" />
//                     Ajouter
//                   </button>
//                 </div>
//               </div>

//               <h2 className="text-xl font-semibold mb-4 mt-8 flex items-center">
//                 <Edit size={20} className="mr-2 text-blue-600" />
//                 Liste des ouvriers
//               </h2>

//               {workers.length === 0 ? (
//                 <div className="text-center py-10 text-gray-500">
//                   Aucun ouvrier enregistré pour ce projet
//                 </div>
//               ) : (
//                 <div className="overflow-x-auto">
//                   <table className="w-full">
//                     <thead>
//                       <tr className="bg-gray-100">
//                         <th className="p-3 text-left">ID</th>
//                         <th className="p-3 text-left">Nom</th>
//                         <th className="p-3 text-left">Tâche</th>
//                         <th className="p-3 text-left">Phase</th>
//                         <th className="p-3 text-center">Jours/sem.</th>
//                         <th className="p-3 text-center">Taux (MAD)</th>
//                         <th className="p-3 text-center">Type paiement</th>
//                         <th className="p-3 text-center">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {workers.map((worker, index) => (
//                         <tr key={worker.id} className="border-b hover:bg-gray-50">
//                           <td className="p-3">{index + 1}</td>
//                           <td className="p-3 font-medium">{worker.name}</td>
//                           <td className="p-3">{worker.task}</td>
//                           <td className="p-3">{worker.phase}</td>
//                           <td className="p-3 text-center">
//                             <select
//                               value={worker.workDays}
//                               onChange={(e) => setWorkers(workers.map(w => w.id === worker.id ? { ...w, workDays: parseInt(e.target.value) } : w))}
//                               className="px-3 py-1 border border-gray-300 rounded-lg"
//                             >
//                               {[1, 2, 3, 4, 5, 6, 7].map(day => (
//                                 <option key={day} value={day}>{day} jour{day > 1 ? 's' : ''}</option>
//                               ))}
//                             </select>
//                           </td>
//                           <td className="p-3 text-center">
//                             <input
//                               type="number"
//                               value={worker.hourlyRate}
//                               onChange={(e) => setWorkers(workers.map(w => w.id === worker.id ? { ...w, hourlyRate: parseInt(e.target.value) } : w))}
//                               className="px-3 py-1 border border-gray-300 rounded-lg w-24 text-center"
//                             />
//                           </td>
//                           <td className="p-3 text-center">
//                             <select
//                               value={worker.paymentType}
//                               onChange={(e) => setWorkers(workers.map(w => w.id === worker.id ? { ...w, paymentType: e.target.value } : w))}
//                               className="px-3 py-1 border border-gray-300 rounded-lg"
//                             >
//                               <option value="daily">Journalier</option>
//                               <option value="weekly">Hebdomadaire</option>
//                             </select>
//                           </td>
//                           <td className="p-3 text-center">
//                             <button
//                               onClick={() => removeWorker(worker.id)}
//                               className="px-3 py-1 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors inline-flex items-center"
//                             >
//                               <Trash2 size={16} className="mr-1" />
//                               Supprimer
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </motion.div>
//           )}

//           {/* Interface de pointage */}
//           {activeTab === 'attendance' && (
//             <motion.div
//               variants={itemVariants}
//               className="bg-white rounded-lg shadow overflow-hidden"
//             >
//               <div className="p-4 bg-blue-50 border-b flex justify-between items-center">
//                 <h2 className="text-xl font-semibold text-blue-900 flex items-center">
//                   <Clock size={20} className="mr-2 text-blue-600" />
//                   Feuille de présence - Semaine du {formatDateRange()}
//                 </h2>
//                 <div>
//                   <button
//                     className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center"
//                   >
//                     <Save size={18} className="mr-2" />
//                     Enregistrer le pointage
//                   </button>
//                 </div>
//               </div>

//               {workers.length === 0 ? (
//                 <div className="text-center py-16 text-gray-500">
//                   <div className="flex flex-col items-center">
//                     <UserPlus size={48} className="text-gray-300 mb-3" />
//                     <p className="mb-4">Aucun ouvrier enregistré pour ce projet</p>
//                     <button
//                       onClick={() => setActiveTab('management')}
//                       className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                     >
//                       Ajouter des ouvriers
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="overflow-x-auto">
//                   <table className="w-full min-w-max">
//                     <thead>
//                       <tr className="bg-gray-100">
//                         <th className="p-3 text-left font-semibold min-w-64 sticky left-0 bg-gray-100 z-10">
//                           Ouvrier / Tâche / Phase
//                         </th>
//                         {weekDates.map((date, index) => (
//                           <th
//                             key={date.date}
//                             className={`p-3 text-center min-w-24 ${index >= 5 ? 'bg-gray-50' : ''}`}
//                           >
//                             <div className="flex flex-col items-center">
//                               <span className="text-sm text-gray-600">{date.day}</span>
//                               <span className="font-semibold">{date.fullDisplay}</span>
//                             </div>
//                           </th>
//                         ))}
//                         <th className="p-3 text-center bg-blue-50 font-semibold">Jours présent</th>
//                         <th className="p-3 text-center bg-green-50 font-semibold">Paiement</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {workers.map((worker) => {
//                         const daysWorked = Object.values(worker.attendance).filter(status => status === 'Présent').length;
//                         const payment = calculatePayment(worker);

//                         return (
//                           <tr key={worker.id} className="border-b hover:bg-gray-50">
//                             <td className="p-3 sticky left-0 bg-white z-10 border-r">
//                               <div>
//                                 <div className="font-medium">{worker.name}</div>
//                                 <div className="text-sm text-gray-600">
//                                   <span className="font-semibold">Tâche:</span> {worker.task}
//                                 </div>
//                                 <div className="text-sm text-gray-600">
//                                   <span className="font-semibold">Phase:</span> {worker.phase}
//                                 </div>
//                                 <div className="text-xs text-blue-600 mt-1">
//                                   {worker.workDays} jour{worker.workDays > 1 ? 's' : ''} par semaine
//                                   à {worker.hourlyRate} MAD/{worker.paymentType === 'daily' ? 'jour' : 'semaine'}
//                                 </div>
//                               </div>
//                             </td>

//                             {weekDates.map((date, index) => {
//                               const isPresent = worker.attendance[date.date] === 'Présent';
//                               const isWeekend = index >= 5; // Samedi et dimanche

//                               return (
//                                 <td
//                                   key={date.date}
//                                   className={`p-3 text-center ${isWeekend ? 'bg-gray-50' : ''}`}
//                                 >
//                                   <button
//                                     onClick={() => toggleAttendance(worker.id, date.date)}
//                                     className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                                       isPresent
//                                         ? 'bg-green-100 text-green-600 hover:bg-green-200'
//                                         : 'bg-red-100 text-red-600 hover:bg-red-200'
//                                     } ${isWeekend ? 'opacity-70' : ''}`}
//                                     title={isPresent ? 'Marquer comme absent' : 'Marquer comme présent'}
//                                   >
//                                     {isPresent ? <Check size={16} /> : <X size={16} />}
//                                   </button>
//                                 </td>
//                               );
//                             })}

//                             <td className="p-3 text-center bg-blue-50">
//                               <div className="flex items-center justify-center">
//                                 <span className="font-medium text-blue-800">
//                                   {daysWorked} / {worker.workDays}
//                                 </span>

//                                 {daysWorked > worker.workDays && (
//                                   <div className="ml-2 text-amber-600" title="Dépassement du nombre de jours prévus">
//                                     <AlertCircle size={16} />
//                                   </div>
//                                 )}
//                               </div>
//                             </td>

//                             <td className="p-3 text-center bg-green-50">
//                               <div className="font-medium text-green-800">
//                                 {payment} MAD
//                               </div>
//                             </td>
//                           </tr>
//                         );
//                       })}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </motion.div>
//           )}
//         </div>
//       </motion.div>
//     </div>
//   );
// }






//prèsence exel
// import React, { useState } from 'react';
// import { Users, Calendar, Save, FileSpreadsheet, Plus, Trash2 } from 'lucide-react';

// export default function SimpleWorkerAttendance() {
//   const [workers, setWorkers] = useState([]);
//   const [newWorker, setNewWorker] = useState({
//     name: '',
//     job: '',
//     dailyRate: '',
//     paymentType: 'daily'
//   });

//   const [currentWeek, setCurrentWeek] = useState(new Date());

//   // Générer les dates de la semaine actuelle
//   const generateWeekDates = () => {
//     const dates = [];
//     const today = new Date();
//     for (let i = 1; i <= 7; i++) {
//       const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + i);
//       dates.push({
//         day: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'][i - 1],
//         date: date.toLocaleDateString('fr-FR')
//       });
//     }
//     return dates;
//   };

//   const weekDates = generateWeekDates();

//   const addWorker = () => {
//     if (!newWorker.name || !newWorker.job || !newWorker.dailyRate) return;

//     const worker = {
//       id: Date.now(),
//       ...newWorker,
//       attendance: weekDates.map(() => false),
//       totalDays: 0,
//       totalPay: 0
//     };

//     setWorkers([...workers, worker]);
//     setNewWorker({ name: '', job: '', dailyRate: '', paymentType: 'daily' });
//   };

//   const toggleAttendance = (workerIndex, dayIndex) => {
//     const updatedWorkers = [...workers];
//     updatedWorkers[workerIndex].attendance[dayIndex] = !updatedWorkers[workerIndex].attendance[dayIndex];
    
//     // Recalculer les jours et le paiement
//     const presentDays = updatedWorkers[workerIndex].attendance.filter(day => day).length;
//     const dailyRate = parseFloat(updatedWorkers[workerIndex].dailyRate);
    
//     updatedWorkers[workerIndex].totalDays = presentDays;
//     updatedWorkers[workerIndex].totalPay = 
//       updatedWorkers[workerIndex].paymentType === 'daily' 
//         ? presentDays * dailyRate 
//         : Math.min(presentDays, 5) * dailyRate;

//     setWorkers(updatedWorkers);
//   };

//   const removeWorker = (workerId) => {
//     setWorkers(workers.filter(worker => worker.id !== workerId));
//   };

//   return (
//     <div className="container mx-auto p-6 bg-gray-50">
//       <div className="bg-white shadow-lg rounded-lg p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold text-gray-800">
//             <Users className="inline mr-3 text-blue-600" />
//             Suivi des Ouvriers
//           </h1>
//           <div className="flex space-x-3">
//             <button className="btn btn-primary flex items-center">
//               <Save className="mr-2" /> Enregistrer
//             </button>
//             <button className="btn btn-secondary flex items-center">
//               <FileSpreadsheet className="mr-2" /> Exporter
//             </button>
//           </div>
//         </div>

//         {/* Formulaire d'ajout d'ouvrier */}
//         <div className="grid grid-cols-5 gap-4 mb-6">
//           <input 
//             type="text" 
//             placeholder="Nom de l'ouvrier" 
//             value={newWorker.name}
//             onChange={(e) => setNewWorker({...newWorker, name: e.target.value})}
//             className="input"
//           />
//           <input 
//             type="text" 
//             placeholder="Métier" 
//             value={newWorker.job}
//             onChange={(e) => setNewWorker({...newWorker, job: e.target.value})}
//             className="input"
//           />
//           <input 
//             type="number" 
//             placeholder="Taux journalier" 
//             value={newWorker.dailyRate}
//             onChange={(e) => setNewWorker({...newWorker, dailyRate: e.target.value})}
//             className="input"
//           />
//           <select 
//             value={newWorker.paymentType}
//             onChange={(e) => setNewWorker({...newWorker, paymentType: e.target.value})}
//             className="input"
//           >
//             <option value="daily">Journalier</option>
//             <option value="weekly">Hebdomadaire</option>
//           </select>
//           <button 
//             onClick={addWorker}
//             className="btn btn-primary flex items-center justify-center"
//           >
//             <Plus className="mr-2" /> Ajouter
//           </button>
//         </div>

//         {/* Tableau de présence */}
//         <div className="overflow-x-auto">
//           <table className="w-full bg-white border">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="p-3 text-left">Nom</th>
//                 <th className="p-3 text-left">Métier</th>
//                 {weekDates.map((date, index) => (
//                   <th key={index} className="p-3 text-center">
//                     {date.day}<br/>{date.date}
//                   </th>
//                 ))}
//                 <th className="p-3 text-center">Jours</th>
//                 <th className="p-3 text-center">Paiement</th>
//                 <th className="p-3 text-center">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {workers.map((worker, workerIndex) => (
//                 <tr key={worker.id} className="border-b">
//                   <td className="p-3">{worker.name}</td>
//                   <td className="p-3">{worker.job}</td>
//                   {worker.attendance.map((isPresent, dayIndex) => (
//                     <td key={dayIndex} className="p-3 text-center">
//                       <input 
//                         type="checkbox" 
//                         checked={isPresent}
//                         onChange={() => toggleAttendance(workerIndex, dayIndex)}
//                         className="form-checkbox h-5 w-5 text-blue-600"
//                       />
//                     </td>
//                   ))}
//                   <td className="p-3 text-center font-bold">{worker.totalDays}</td>
//                   <td className="p-3 text-center font-bold text-green-600">
//                     {worker.totalPay.toFixed(2)} MAD
//                   </td>
//                   <td className="p-3 text-center">
//                     <button 
//                       onClick={() => removeWorker(worker.id)}
//                       className="text-red-500 hover:text-red-700"
//                     >
//                       <Trash2 />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }





import React, { useState, useEffect } from 'react';
import { 
  Users, Calendar, Save, FileSpreadsheet, Plus, Trash2, Archive, 
  Filter, Search 
} from 'lucide-react';

export default function AdvancedWorkerAttendance() {
  // États pour la gestion des données
  const [workers, setWorkers] = useState([]);
  const [newWorker, setNewWorker] = useState({
    name: '',
    phase: '',
    dailyRate: '',
    paymentType: 'daily'
  });
  
  // États pour l'historique
  const [attendanceHistory, setAttendanceHistory] = useState([]);
  
  // Liste prédéfinie des phases de projet
  const projectPhases = [
    'Préparation du terrain',
    'Fondations',
    'Structure',
    'Maçonnerie',
    'Électricité',
    'Plomberie', 
    'Finitions',
    'Aménagement extérieur'
  ];

  // Génération des dates de la semaine
  const generateWeekDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 7; i++) {
      const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + i);
      dates.push({
        day: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'][i - 1],
        date: date.toLocaleDateString('fr-FR'),
        isoDate: date.toISOString().split('T')[0]
      });
    }
    return dates;
  };

  const weekDates = generateWeekDates();

  // Calculer la date de paiement (fin de semaine)
  const calculatePaymentDate = () => {
    const today = new Date();
    const paymentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 8);
    return paymentDate.toLocaleDateString('fr-FR');
  };

  // Ajouter un ouvrier
  const addWorker = () => {
    if (!newWorker.name || !newWorker.phase || !newWorker.dailyRate) return;

    const worker = {
      id: Date.now(),
      ...newWorker,
      attendance: weekDates.map(() => false),
      totalDays: 0,
      totalPay: 0,
      paymentDate: calculatePaymentDate()
    };

    setWorkers([...workers, worker]);
    setNewWorker({ name: '', phase: '', dailyRate: '', paymentType: 'daily' });
  };

  // Marquer la présence
  const toggleAttendance = (workerIndex, dayIndex) => {
    const updatedWorkers = [...workers];
    updatedWorkers[workerIndex].attendance[dayIndex] = !updatedWorkers[workerIndex].attendance[dayIndex];
    
    // Calcul des jours et du paiement
    const presentDays = updatedWorkers[workerIndex].attendance.filter(day => day).length;
    const dailyRate = parseFloat(updatedWorkers[workerIndex].dailyRate);
    
    updatedWorkers[workerIndex].totalDays = presentDays;
    updatedWorkers[workerIndex].totalPay = 
      updatedWorkers[workerIndex].paymentType === 'daily' 
        ? presentDays * dailyRate 
        : Math.min(presentDays, 5) * dailyRate;

    setWorkers(updatedWorkers);
  };

  // Supprimer un ouvrier
  const removeWorker = (workerId) => {
    setWorkers(workers.filter(worker => worker.id !== workerId));
  };

  // Enregistrer l'historique de présence
  const saveAttendanceHistory = () => {
    const currentHistory = {
      date: new Date().toISOString(),
      workers: workers.map(worker => ({
        id: worker.id,
        name: worker.name,
        phase: worker.phase,
        attendance: worker.attendance,
        totalDays: worker.totalDays,
        totalPay: worker.totalPay,
        paymentDate: worker.paymentDate
      }))
    };

    setAttendanceHistory([...attendanceHistory, currentHistory]);
    // Notification ou message de confirmation peut être ajouté ici
  };

  // Exporter les données
  const exportAttendanceData = () => {
    const csvContent = generateCSV(workers);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `pointage_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Générer CSV
  const generateCSV = (data) => {
    const headers = ['Nom', 'Phase', ...weekDates.map(d => d.day), 'Jours Travaillés', 'Paiement (DH)', 'Date de Paiement'];
    const csvRows = [headers.join(',')];

    data.forEach(worker => {
      const row = [
        worker.name,
        worker.phase,
        ...worker.attendance.map(day => day ? '1' : '0'),
        worker.totalDays,
        worker.totalPay,
        worker.paymentDate
      ];
      csvRows.push(row.join(','));
    });

    return csvRows.join('\n');
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-6">
        {/* En-tête */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            <Users className="inline mr-3 text-blue-600" />
            Suivi des Ouvriers
          </h1>
          <div className="flex space-x-3">
            <button 
              onClick={saveAttendanceHistory}
              className="btn btn-primary flex items-center"
            >
              <Save className="mr-2" /> Enregistrer
            </button>
            <button 
              onClick={exportAttendanceData}
              className="btn btn-secondary flex items-center"
            >
              <FileSpreadsheet className="mr-2" /> Exporter
            </button>
          </div>
        </div>

        {/* Formulaire d'ajout d'ouvrier */}
        <div className="grid grid-cols-5 gap-4 mb-6">
          <input 
            type="text" 
            placeholder="Nom de l'ouvrier" 
            value={newWorker.name}
            onChange={(e) => setNewWorker({...newWorker, name: e.target.value})}
            className="input"
          />
          <select
            value={newWorker.phase}
            onChange={(e) => setNewWorker({...newWorker, phase: e.target.value})}
            className="input"
          >
            <option value="">Sélectionner une phase</option>
            {projectPhases.map((phase, index) => (
              <option key={index} value={phase}>{phase}</option>
            ))}
          </select>
          <input 
            type="number" 
            placeholder="Taux journalier (DH)" 
            value={newWorker.dailyRate}
            onChange={(e) => setNewWorker({...newWorker, dailyRate: e.target.value})}
            className="input"
          />
          <select 
            value={newWorker.paymentType}
            onChange={(e) => setNewWorker({...newWorker, paymentType: e.target.value})}
            className="input"
          >
            <option value="daily">Journalier</option>
            <option value="weekly">Hebdomadaire</option>
          </select>
          <button 
            onClick={addWorker}
            className="btn btn-primary flex items-center justify-center"
          >
            <Plus className="mr-2" /> Ajouter
          </button>
        </div>

        {/* Tableau de présence */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full bg-white border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">Nom</th>
                <th className="p-3 text-left">Phase</th>
                {weekDates.map((date, index) => (
                  <th key={index} className="p-3 text-center">
                    {date.day}<br/>{date.date}
                  </th>
                ))}
                <th className="p-3 text-center">Jours</th>
                <th className="p-3 text-center">Paiement</th>
                <th className="p-3 text-center">Date de Paiement</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {workers.map((worker, workerIndex) => (
                <tr key={worker.id} className="border-b">
                  <td className="p-3">{worker.name}</td>
                  <td className="p-3">{worker.phase}</td>
                  {worker.attendance.map((isPresent, dayIndex) => (
                    <td key={dayIndex} className="p-3 text-center">
                      <input 
                        type="checkbox" 
                        checked={isPresent}
                        onChange={() => toggleAttendance(workerIndex, dayIndex)}
                        className="form-checkbox h-5 w-5 text-blue-600"
                      />
                    </td>
                  ))}
                  <td className="p-3 text-center font-bold">{worker.totalDays}</td>
                  <td className="p-3 text-center font-bold text-green-600">
                    {worker.totalPay.toFixed(2)} DH
                  </td>
                  <td className="p-3 text-center">
                    {worker.paymentDate}
                  </td>
                  <td className="p-3 text-center">
                    <button 
                      onClick={() => removeWorker(worker.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Historique des présences */}
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Archive className="mr-3 text-blue-600" />
            Historique des Présences
          </h2>
          <div className="overflow-x-auto">
            {attendanceHistory.length === 0 ? (
              <p className="text-gray-500">Aucun historique disponible</p>
            ) : (
              <div>
                {attendanceHistory.map((record, recordIndex) => (
                  <div key={recordIndex} className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">
                      Historique du {new Date(record.date).toLocaleDateString('fr-FR')}
                    </h3>
                    <table className="w-full bg-white border">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-3 text-left">Nom</th>
                          <th className="p-3 text-left">Phase</th>
                          <th className="p-3 text-center">Jours Travaillés</th>
                          <th className="p-3 text-center">Paiement (DH)</th>
                          <th className="p-3 text-center">Date de Paiement</th>
                        </tr>
                      </thead>
                      <tbody>
                        {record.workers.map((worker, workerIndex) => (
                          <tr key={worker.id} className="border-b">
                            <td className="p-3">{worker.name}</td>
                            <td className="p-3">{worker.phase}</td>
                            <td className="p-3 text-center font-bold">{worker.totalDays}</td>
                            <td className="p-3 text-center font-bold text-green-600">
                              {worker.totalPay.toFixed(2)} DH
                            </td>
                            <td className="p-3 text-center">
                              {worker.paymentDate}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 


// Les principales modifications sont :

// Ajout d'un état currentWeek pour suivre la semaine courante
// Modification de generateWeekDates() pour générer dynamiquement les dates à partir de la semaine sélectionnée
// Ajout de deux fonctions goToPreviousWeek() et goToNextWeek() pour naviguer entre les semaines
// Mise à jour de l'en-tête pour afficher la plage de dates de la semaine courante
// Ajout de boutons de navigation (flèches gauche/droite) pour changer de semaine
// Modification de l'exportation CSV pour utiliser les dates de la semaine courante
// Mise à jour de l'historique pour inclure la plage de dates de la semaine

// Maintenant, les dates dans la liste de présence se renouvellent dynamiquement, et vous pouvez naviguer entre les différentes semaines du mois.
// La date de paiement est toujours calculée automatiquement en fonction de la semaine sélectionnée, et l'historique conserve les détails de chaque période.
// Voulez-vous que je vous explique plus en détail les changements ?




// stp voila ce code je veux que tu garde code origine mais amèliorer la section archivage tels que je veux que tu liste tous les ouvriers un paun par la repetiyiton de processus dont tu regroupe tout les ouvriers avec mode de payement herbdomaire et apprès selon journalier  saè lmais garde tou le code origine et la liste do t je saisie les ouvriers après chaque saisi   validation d'archivage la liste des valeurs saoisie doit disparaitre