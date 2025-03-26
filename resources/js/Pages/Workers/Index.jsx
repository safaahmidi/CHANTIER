// // import { Head, Link, useForm } from '@inertiajs/react';
// // import { motion } from 'framer-motion';


// // export default function WorkersIndex({ project, workers }) {
// //     const { data, setData, post, processing, reset } = useForm({
// //         name: '',
// //         skills: '',
// //     });

// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         post(route('workers.store', { id: project.id }), {
// //             onSuccess: () => reset(),
// //         });
// //     };

// //     const handleUpdatePresence = (workerId, present) => {
// //         post(route('workers.updatePresence', { id: workerId }), {
// //             data: { present: !present },
// //         });
// //     };

// //     const handleDeleteWorker = (workerId) => {
// //         if (confirm('Êtes-vous sûr de vouloir supprimer cet ouvrier ?')) {
// //             post(route('workers.destroy', { id: workerId }));
// //         }
// //     };

// //     return (
// //         <div>
// //             <Head title="Gestion des Ouvriers" />
           
// //             <motion.div
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.6 }}
// //                 className="p-6 bg-gray-100 min-h-screen"
// //             >
// //                 <h1 className="text-3xl font-bold text-gray-900 mb-6">Gestion des Ouvriers - {project.name}</h1>

// //                 {/* Formulaire pour ajouter un ouvrier */}
// //                 <form onSubmit={handleSubmit} className="mb-6 bg-white p-6 rounded-lg shadow">
// //                     <div className="grid gap-4">
// //                         <input
// //                             type="text"
// //                             placeholder="Nom de l'ouvrier"
// //                             value={data.name}
// //                             onChange={(e) => setData('name', e.target.value)}
// //                             className="p-2 border border-gray-300 rounded-lg w-full"
// //                             required
// //                         />
// //                         <input
// //                             type="text"
// //                             placeholder="Compétences"
// //                             value={data.skills}
// //                             onChange={(e) => setData('skills', e.target.value)}
// //                             className="p-2 border border-gray-300 rounded-lg w-full"
// //                             required
// //                         />
// //                         <button type="submit" disabled={processing} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
// //                             Ajouter un Ouvrier
// //                         </button>
// //                     </div>
// //                 </form>

// //                 {/* Liste des ouvriers */}
// //                 <div className="bg-white rounded-lg shadow overflow-hidden">
// //                     <table className="w-full">
// //                         <thead className="bg-gray-200">
// //                             <tr>
// //                                 <th className="p-3 text-left">Nom</th>
// //                                 <th className="p-3 text-left">Compétences</th>
// //                                 <th className="p-3 text-left">Présence</th>
// //                                 <th className="p-3 text-left">Actions</th>
// //                             </tr>
// //                         </thead>
// //                         <tbody>
// //                             {workers.map((worker) => (
// //                                 <tr key={worker.id} className="border-b">
// //                                     <td className="p-3">{worker.name}</td>
// //                                     <td className="p-3">{worker.skills}</td>
// //                                     <td className="p-3">
// //                                         <span className={`px-2 py-1 rounded-full ${worker.present ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
// //                                             {worker.present ? 'Présent' : 'Absent'}
// //                                         </span>
// //                                     </td>
// //                                     <td className="p-3">
// //                                         <button
// //                                             onClick={() => handleUpdatePresence(worker.id, worker.present)}
// //                                             className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
// //                                         >
// //                                             {worker.present ? 'Marquer Absent' : 'Marquer Présent'}
// //                                         </button>
// //                                         <button
// //                                             onClick={() => handleDeleteWorker(worker.id)}
// //                                             className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 ml-2"
// //                                         >
// //                                             Supprimer
// //                                         </button>
// //                                     </td>
// //                                 </tr>
// //                             ))}
// //                         </tbody>
// //                     </table>
// //                 </div>
// //             </motion.div>
// //         </div>
// //     );
// // }




// import { Head, Link, useForm } from '@inertiajs/react';
// import { motion } from 'framer-motion';
// import { useState, useEffect } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// export default function WorkersIndex({ project, workers, attendance }) {
//     const [selectedMonth, setSelectedMonth] = useState(new Date());
//     const [selectedWorker, setSelectedWorker] = useState(null);
//     const [view, setView] = useState('list'); // 'list', 'calendar', 'stats'
//     const [attendanceData, setAttendanceData] = useState(attendance || {});
    
//     const { data, setData, post, processing, reset } = useForm({
//         name: '',
//         skills: '',
//     });

//     // Statistics calculations
//     const totalWorkers = workers.length;
//     const presentWorkers = workers.filter(worker => worker.present).length;
//     const attendanceRate = totalWorkers > 0 ? (presentWorkers / totalWorkers * 100).toFixed(1) : 0;

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         post(route('workers.store', { id: project.id }), {
//             onSuccess: () => reset(),
//         });
//     };

//     const handleUpdatePresence = (workerId, present) => {
//         post(route('workers.updatePresence', { id: workerId }), {
//             data: { 
//                 present: !present,
//                 date: new Date().toISOString().split('T')[0] // Today's date
//             },
//         });
//     };

//     const handleDeleteWorker = (workerId) => {
//         if (confirm('Êtes-vous sûr de vouloir supprimer cet ouvrier ?')) {
//             post(route('workers.destroy', { id: workerId }));
//         }
//     };

//     const handleMonthChange = (date) => {
//         setSelectedMonth(date);
//         // Here you would load attendance data for the selected month
//         // post(route('workers.getMonthlyAttendance'), { 
//         //    data: { month: date.getMonth() + 1, year: date.getFullYear() } 
//         // });
//     };

//     const handleWorkerSelect = (worker) => {
//         setSelectedWorker(worker);
//         setView('calendar');
//         // Here you would load specific worker's attendance data
//     };

//     // Determine dates with attendance for the calendar
//     const getDayClass = (date) => {
//         const dateStr = date.toISOString().split('T')[0];
//         if (selectedWorker && attendanceData[selectedWorker.id]?.includes(dateStr)) {
//             return 'bg-green-200';
//         }
//         return '';
//     };

//     return (
//         <div>
//             <Head title="Gestion des Ouvriers" />
           
//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="p-6 bg-gray-100 min-h-screen"
//             >
//                 <div className="flex justify-between items-center mb-6">
//                     <h1 className="text-3xl font-bold text-gray-900">Gestion des Ouvriers - {project.name}</h1>
//                     <div className="flex space-x-2">
//                         <button 
//                             onClick={() => setView('list')} 
//                             className={`px-4 py-2 rounded-lg ${view === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
//                         >
//                             Liste
//                         </button>
//                         <button 
//                             onClick={() => setView('calendar')} 
//                             className={`px-4 py-2 rounded-lg ${view === 'calendar' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
//                         >
//                             Calendrier
//                         </button>
//                         <button 
//                             onClick={() => setView('stats')} 
//                             className={`px-4 py-2 rounded-lg ${view === 'stats' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
//                         >
//                             Statistiques
//                         </button>
//                     </div>
//                 </div>

//                 {/* Dashboard Cards */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//                     <motion.div 
//                         className="bg-white p-4 rounded-lg shadow"
//                         whileHover={{ scale: 1.02 }}
//                     >
//                         <h3 className="text-lg font-semibold text-gray-700">Total Ouvriers</h3>
//                         <p className="text-3xl font-bold text-blue-600">{totalWorkers}</p>
//                     </motion.div>
//                     <motion.div 
//                         className="bg-white p-4 rounded-lg shadow"
//                         whileHover={{ scale: 1.02 }}
//                     >
//                         <h3 className="text-lg font-semibold text-gray-700">Présents Aujourd'hui</h3>
//                         <p className="text-3xl font-bold text-green-600">{presentWorkers}</p>
//                     </motion.div>
//                     <motion.div 
//                         className="bg-white p-4 rounded-lg shadow"
//                         whileHover={{ scale: 1.02 }}
//                     >
//                         <h3 className="text-lg font-semibold text-gray-700">Taux de Présence</h3>
//                         <p className="text-3xl font-bold text-purple-600">{attendanceRate}%</p>
//                     </motion.div>
//                 </div>

//                 {/* Add Worker Form */}
//                 {view === 'list' && (
//                     <motion.form 
//                         onSubmit={handleSubmit} 
//                         className="mb-6 bg-white p-6 rounded-lg shadow"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ delay: 0.2 }}
//                     >
//                         <h2 className="text-xl font-semibold mb-4 text-gray-800">Ajouter un Nouvel Ouvrier</h2>
//                         <div className="grid md:grid-cols-3 gap-4">
//                             <input
//                                 type="text"
//                                 placeholder="Nom de l'ouvrier"
//                                 value={data.name}
//                                 onChange={(e) => setData('name', e.target.value)}
//                                 className="p-2 border border-gray-300 rounded-lg w-full"
//                                 required
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="Compétences"
//                                 value={data.skills}
//                                 onChange={(e) => setData('skills', e.target.value)}
//                                 className="p-2 border border-gray-300 rounded-lg w-full"
//                                 required
//                             />
//                             <button type="submit" disabled={processing} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
//                                 Ajouter un Ouvrier
//                             </button>
//                         </div>
//                     </motion.form>
//                 )}

//                 {/* List View */}
//                 {view === 'list' && (
//                     <motion.div 
//                         className="bg-white rounded-lg shadow overflow-hidden"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ delay: 0.3 }}
//                     >
//                         <div className="overflow-x-auto">
//                             <table className="w-full">
//                                 <thead className="bg-gray-200">
//                                     <tr>
//                                         <th className="p-3 text-left">Nom</th>
//                                         <th className="p-3 text-left">Compétences</th>
//                                         <th className="p-3 text-left">Présence</th>
//                                         <th className="p-3 text-left">Tâches Assignées</th>
//                                         <th className="p-3 text-left">Actions</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {workers.map((worker) => (
//                                         <motion.tr 
//                                             key={worker.id} 
//                                             className="border-b hover:bg-gray-50 cursor-pointer"
//                                             whileHover={{ backgroundColor: 'rgba(243, 244, 246, 1)' }}
//                                             onClick={() => handleWorkerSelect(worker)}
//                                         >
//                                             <td className="p-3 font-medium">{worker.name}</td>
//                                             <td className="p-3">{worker.skills}</td>
//                                             <td className="p-3">
//                                                 <span className={`px-2 py-1 rounded-full ${worker.present ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
//                                                     {worker.present ? 'Présent' : 'Absent'}
//                                                 </span>
//                                             </td>
//                                             <td className="p-3">
//                                                 {worker.tasks ? worker.tasks.map(task => task.name).join(', ') : 'Aucune tâche'}
//                                             </td>
//                                             <td className="p-3">
//                                                 <div className="flex space-x-2">
//                                                     <button
//                                                         onClick={(e) => {
//                                                             e.stopPropagation();
//                                                             handleUpdatePresence(worker.id, worker.present);
//                                                         }}
//                                                         className={`px-3 py-1 rounded text-white ${worker.present ? 'bg-orange-500 hover:bg-orange-600' : 'bg-green-500 hover:bg-green-600'} transition`}
//                                                     >
//                                                         {worker.present ? 'Marquer Absent' : 'Marquer Présent'}
//                                                     </button>
//                                                     <button
//                                                         onClick={(e) => {
//                                                             e.stopPropagation();
//                                                             handleDeleteWorker(worker.id);
//                                                         }}
//                                                         className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
//                                                     >
//                                                         Supprimer
//                                                     </button>
//                                                 </div>
//                                             </td>
//                                         </motion.tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </motion.div>
//                 )}

//                 {/* Calendar View */}
//                 {view === 'calendar' && (
//                     <motion.div 
//                         className="bg-white p-6 rounded-lg shadow"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                     >
//                         <div className="flex justify-between items-center mb-4">
//                             <h2 className="text-xl font-semibold text-gray-800">
//                                 {selectedWorker ? `Calendrier de Présence - ${selectedWorker.name}` : 'Calendrier de Présence'}
//                             </h2>
//                             <div className="flex items-center space-x-2">
//                                 <select 
//                                     className="p-2 border border-gray-300 rounded-lg"
//                                     onChange={(e) => {
//                                         const worker = workers.find(w => w.id === parseInt(e.target.value));
//                                         setSelectedWorker(worker || null);
//                                     }}
//                                     value={selectedWorker?.id || ''}
//                                 >
//                                     <option value="">Tous les ouvriers</option>
//                                     {workers.map(worker => (
//                                         <option key={worker.id} value={worker.id}>{worker.name}</option>
//                                     ))}
//                                 </select>
//                                 <button 
//                                     className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
//                                     onClick={() => {
//                                         // Simulate export functionality
//                                         alert('Exportation du rapport pour ' + 
//                                               (selectedWorker ? selectedWorker.name : 'tous les ouvriers') + 
//                                               ' pour ' + selectedMonth.toLocaleString('fr-FR', { month: 'long', year: 'numeric' }));
//                                     }}
//                                 >
//                                     Exporter
//                                 </button>
//                             </div>
//                         </div>
                        
//                         <div className="grid md:grid-cols-2 gap-6">
//                             <div className="calendar-container">
//                                 <Calendar 
//                                     onChange={handleMonthChange}
//                                     value={selectedMonth}
//                                     tileClassName={getDayClass}
//                                     className="border rounded-lg p-2 w-full"
//                                 />
//                             </div>
//                             <div className="attendance-stats bg-gray-50 p-4 rounded-lg">
//                                 <h3 className="text-lg font-semibold mb-3 text-gray-800">
//                                     Statistiques pour {selectedMonth.toLocaleString('fr-FR', { month: 'long', year: 'numeric' })}
//                                 </h3>
//                                 {selectedWorker ? (
//                                     <div className="space-y-3">
//                                         <div className="flex justify-between border-b pb-2">
//                                             <span>Jours présents:</span>
//                                             <span className="font-semibold">{attendanceData[selectedWorker.id]?.length || 0} jours</span>
//                                         </div>
//                                         <div className="flex justify-between border-b pb-2">
//                                             <span>Taux de présence:</span>
//                                             <span className="font-semibold">{((attendanceData[selectedWorker.id]?.length || 0) / 20 * 100).toFixed(1)}%</span>
//                                         </div>
//                                         <div className="flex justify-between border-b pb-2">
//                                             <span>Retards:</span>
//                                             <span className="font-semibold">2 jours</span>
//                                         </div>
//                                         <div className="pt-3">
//                                             <h4 className="font-semibold mb-2">Tâches Assignées</h4>
//                                             <ul className="list-disc pl-5">
//                                                 {(selectedWorker.tasks || []).map((task, index) => (
//                                                     <li key={index}>{task.name} - {task.status}</li>
//                                                 ))}
//                                                 {(!selectedWorker.tasks || selectedWorker.tasks.length === 0) && (
//                                                     <li className="text-gray-500">Aucune tâche assignée</li>
//                                                 )}
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 ) : (
//                                     <div className="text-center py-6 text-gray-500">
//                                         Sélectionnez un ouvrier pour voir ses statistiques détaillées
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </motion.div>
//                 )}

//                 {/* Statistics View */}
//                 {view === 'stats' && (
//                     <motion.div 
//                         className="bg-white p-6 rounded-lg shadow"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                     >
//                         <h2 className="text-xl font-semibold mb-4 text-gray-800">Statistiques de Présence</h2>
                        
//                         <div className="grid md:grid-cols-2 gap-6">
//                             <div className="bg-gray-50 p-4 rounded-lg">
//                                 <h3 className="text-lg font-semibold mb-3">Taux de Présence Mensuel</h3>
//                                 <div className="h-64 flex items-end space-x-1">
//                                     {/* Simplified chart representation - would be better with a proper chart library */}
//                                     {[65, 70, 75, 68, 72, 80, 85, 82, 78, 75, attendanceRate, 0].map((rate, index) => (
//                                         <div 
//                                             key={index} 
//                                             className="bg-blue-500 rounded-t w-full" 
//                                             style={{ height: `${rate}%` }}
//                                             title={`${index < 11 ? ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'][index] : ''}: ${rate}%`}
//                                         ></div>
//                                     ))}
//                                 </div>
//                                 <div className="flex justify-between mt-2 text-xs text-gray-600">
//                                     <span>Jan</span>
//                                     <span>Fév</span>
//                                     <span>Mar</span>
//                                     <span>Avr</span>
//                                     <span>Mai</span>
//                                     <span>Jun</span>
//                                     <span>Jul</span>
//                                     <span>Aoû</span>
//                                     <span>Sep</span>
//                                     <span>Oct</span>
//                                     <span>Nov</span>
//                                     <span>Déc</span>
//                                 </div>
//                             </div>
                            
//                             <div className="bg-gray-50 p-4 rounded-lg">
//                                 <h3 className="text-lg font-semibold mb-3">Top Ouvriers par Présence</h3>
//                                 <ul className="space-y-2">
//                                     {workers
//                                         .sort((a, b) => (b.attendanceRate || 0) - (a.attendanceRate || 0))
//                                         .slice(0, 5)
//                                         .map((worker, index) => (
//                                             <li key={worker.id} className="flex justify-between items-center">
//                                                 <span className="font-medium">{worker.name}</span>
//                                                 <div className="w-2/3 bg-gray-200 rounded-full h-4 overflow-hidden">
//                                                     <div 
//                                                         className="bg-green-500 h-full rounded-full" 
//                                                         style={{ width: `${worker.attendanceRate || Math.floor(85 - index * 5)}%` }}
//                                                     ></div>
//                                                 </div>
//                                                 <span className="text-sm">{worker.attendanceRate || Math.floor(85 - index * 5)}%</span>
//                                             </li>
//                                         ))
//                                     }
//                                 </ul>
//                             </div>
//                         </div>
                        
//                         <div className="mt-6 bg-gray-50 p-4 rounded-lg">
//                             <h3 className="text-lg font-semibold mb-3">Rapport de Présence Hebdomadaire</h3>
//                             <table className="w-full border-collapse">
//                                 <thead>
//                                     <tr className="bg-gray-200">
//                                         <th className="p-2 text-left">Semaine</th>
//                                         <th className="p-2 text-center">Lun</th>
//                                         <th className="p-2 text-center">Mar</th>
//                                         <th className="p-2 text-center">Mer</th>
//                                         <th className="p-2 text-center">Jeu</th>
//                                         <th className="p-2 text-center">Ven</th>
//                                         <th className="p-2 text-center">Taux</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {[1, 2, 3, 4].map(week => (
//                                         <tr key={week} className="border-b">
//                                             <td className="p-2 font-medium">Semaine {week}</td>
//                                             {[1, 2, 3, 4, 5].map(day => (
//                                                 <td key={day} className="p-2 text-center">
//                                                     <span className={`inline-block w-3 h-3 rounded-full ${Math.random() > 0.2 ? 'bg-green-500' : 'bg-red-500'}`}></span>
//                                                 </td>
//                                             ))}
//                                             <td className="p-2 text-center font-medium">{Math.floor(70 + Math.random() * 20)}%</td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </motion.div>
//                 )}
//             </motion.div>
//         </div>
//     );
// }
