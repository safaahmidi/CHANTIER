

// import React, { useState } from 'react';
// import { 
//   Users, Save, FileSpreadsheet, Plus, Trash2,
//   ChevronLeft, ChevronRight 
// } from 'lucide-react';
// import axios from 'axios';
// import { router } from '@inertiajs/react';

// export default function AdvancedWorkerAttendance({ project, workers: initialWorkers, weekDates }) {
//     const [workers, setWorkers] = useState(initialWorkers || []);
//     const [newWorker, setNewWorker] = useState({
//       name: '',
//       daily_rate: '',
//       payment_type: 'daily',
//       project_id: project.id
//     });
    
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [attendanceHistory, setAttendanceHistory] = useState([]);
  
//     // Calculate payment date
//     const calculatePaymentDate = () => {
//       const endOfWeek = new Date(weekDates[6].date);
//       endOfWeek.setDate(endOfWeek.getDate() + 1);
//       return endOfWeek.toLocaleDateString('fr-FR');
//     };
  
//     // Add worker using Inertia
//     const addWorker = () => {
//       if (!newWorker.name || !newWorker.daily_rate) {
//         setError('Veuillez remplir tous les champs obligatoires');
//         return;
//       }
  
//       setLoading(true);
//       setError(null);
      
//       router.post('/workers', newWorker, {
//         preserveScroll: true,
//         onSuccess: () => {
//           setNewWorker({ 
//             name: '', 
//             daily_rate: '', 
//             payment_type: 'daily',
//             project_id: project.id
//           });
//           // Workers list will be refreshed via Inertia
//         },
//         onError: (errors) => {
//           setError(Object.values(errors).join('\n'));
//         },
//         onFinish: () => {
//           setLoading(false);
//         }
//       });
//     };
  
//     // Toggle attendance using Inertia
//     const toggleAttendance = (workerId, date, isPresent) => {
//       router.post(`/workers/${workerId}/attendance`, {
//         date,
//         present: isPresent
//       }, {
//         preserveScroll: true,
//         onSuccess: () => {
//           // Update local state to reflect changes immediately
//           setWorkers(prevWorkers => prevWorkers.map(worker => {
//             if (worker.id === workerId) {
//               const dayIndex = weekDates.findIndex(d => d.date === date);
//               const newAttendance = [...worker.attendance];
//               newAttendance[dayIndex] = isPresent;
              
//               const presentDays = newAttendance.filter(Boolean).length;
//               const totalPay = worker.payment_type === 'daily' 
//                 ? presentDays * worker.daily_rate 
//                 : Math.min(presentDays, 5) * worker.daily_rate;
              
//               return {
//                 ...worker,
//                 attendance: newAttendance,
//                 totalDays: presentDays,
//                 totalPay
//               };
//             }
//             return worker;
//           }));
//         },
//         onError: (errors) => {
//           setError("Échec de la mise à jour. Voir la console pour les détails.");
//           console.error(errors);
//         }
//       });
//     };
  
//     // Remove worker using Inertia
//     const removeWorker = (workerId) => {
//       if (!window.confirm('Êtes-vous sûr de vouloir supprimer cet ouvrier ?')) return;
      
//       router.delete(`/workers/${workerId}`, {
//         preserveScroll: true,
//         onSuccess: () => {
//           setWorkers(prev => prev.filter(w => w.id !== workerId));
//         },
//         onError: (errors) => {
//           setError("Échec de la suppression");
//           console.error(errors);
//         }
//       });
//     };
  
//     // Save attendance history using Inertia
//     const saveAttendanceHistory = () => {
//       router.post('/workers/generate-payments', {
//         project_id: project.id,
//         week_start: weekDates[0].date,
//         week_end: weekDates[6].date
//       }, {
//         preserveScroll: true,
//         onSuccess: (page) => {
//           setAttendanceHistory([...attendanceHistory, {
//             date: new Date().toISOString(),
//             workers: workers.map(worker => ({
//               id: worker.id,
//               name: worker.name,
//               attendance: worker.attendance,
//               totalDays: worker.totalDays,
//               totalPay: worker.totalPay,
//               paymentDate: worker.paymentDate || calculatePaymentDate()
//             }))
//           }]);
//           alert(page.props.flash.success || 'Paiements enregistrés avec succès');
//         },
//         onError: (errors) => {
//           alert("Erreur lors de l'enregistrement");
//           console.error(errors);
//         }
//       });
//     };
  
//     // Export data - this can remain as is since it's client-side only
//     const exportAttendanceData = () => {
//       const csvContent = generateCSV(workers);
//       const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
//       const link = document.createElement('a');
//       link.href = URL.createObjectURL(blob);
//       link.download = `pointage_${new Date().toISOString().split('T')[0]}.csv`;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     };
  
//     // Generate CSV - client-side only
//     const generateCSV = (data) => {
//       const headers = ['Nom', ...weekDates.map(d => d.day), 'Jours Travaillés', 'Paiement (DH)', 'Date de Paiement'];
//       const rows = data.map(worker => [
//         worker.name,
//         ...worker.attendance.map(day => day ? '1' : '0'),
//         worker.totalDays,
//         worker.totalPay.toFixed(2),
//         worker.paymentDate || calculatePaymentDate()
//       ]);
      
//       return [headers, ...rows].map(row => row.join(',')).join('\n');
//     };
  
//     // Week navigation using Inertia
//     const navigateWeek = (direction) => {
//       router.get(`/projects/${project.id}/workers/${direction}-week`, {
//         week: weekDates[0].date
//       });
//     };

//   return (
//     <div className="container mx-auto p-6 bg-gray-50">
//       <div className="bg-white shadow-lg rounded-lg p-6">
//         {/* En-tête */}
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold text-gray-800">
//             <Users className="inline mr-3 text-blue-600" />
//             Suivi des Ouvriers - {project.name}
//           </h1>
//           <div className="flex space-x-3">
//             <button onClick={saveAttendanceHistory} className="btn btn-primary flex items-center">
//               <Save className="mr-2" /> Enregistrer
//             </button>
//             <button onClick={exportAttendanceData} className="btn btn-secondary flex items-center">
//               <FileSpreadsheet className="mr-2" /> Exporter
//             </button>
//           </div>
//         </div>

//         {/* Affichage des erreurs */}
//         {error && (
//           <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
//             {error}
//           </div>
//         )}

//         {/* Navigation entre semaines */}
//         <div className="flex justify-between items-center mb-6">
//           <button 
//             onClick={() => navigateWeek('previous')}
//             className="btn btn-outline flex items-center"
//           >
//             <ChevronLeft className="mr-2" /> Semaine précédente
//           </button>
//           <div className="text-lg font-semibold">
//             Semaine du {weekDates[0].formatted} au {weekDates[6].formatted}
//           </div>
//           <button 
//             onClick={() => navigateWeek('next')}
//             className="btn btn-outline flex items-center"
//           >
//             Semaine suivante <ChevronRight className="ml-2" />
//           </button>
//         </div>

//         {/* Formulaire d'ajout */}
//         <div className="grid grid-cols-3 gap-4 mb-6">
//           <input 
//             type="text" 
//             placeholder="Nom de l'ouvrier" 
//             value={newWorker.name}
//             onChange={(e) => setNewWorker({...newWorker, name: e.target.value})}
//             className="input"
//           />
//           <input 
//             type="number" 
//             placeholder="Taux journalier (DH)" 
//             value={newWorker.daily_rate}
//             onChange={(e) => setNewWorker({...newWorker, daily_rate: e.target.value})}
//             className="input"
//           />
//           <div className="flex gap-2">
//             <select 
//               value={newWorker.payment_type}
//               onChange={(e) => setNewWorker({...newWorker, payment_type: e.target.value})}
//               className="input flex-1"
//             >
//               <option value="daily">Journalier</option>
//               <option value="weekly">Hebdomadaire</option>
//             </select>
//             <button 
//               onClick={addWorker}
//               disabled={loading}
//               className="btn btn-primary flex items-center justify-center"
//             >
//               {loading ? 'En cours...' : <><Plus className="mr-2" /> Ajouter</>}
//             </button>
//           </div>
//         </div>

//         {/* Tableau des présences */}
//         <div className="overflow-x-auto mb-6">
//           <table className="w-full bg-white border">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="p-3 text-left">Nom</th>
//                 {weekDates.map((date) => (
//                   <th key={date.date} className="p-3 text-center">
//                     {date.day}<br/>{date.formatted}
//                   </th>
//                 ))}
//                 <th className="p-3 text-center">Jours</th>
//                 <th className="p-3 text-center">Paiement</th>
//                 <th className="p-3 text-center">Date Paiement</th>
//                 <th className="p-3 text-center">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {workers.map((worker) => (
//                 <tr key={worker.id} className="border-b">
//                   <td className="p-3">{worker.name}</td>
//                   {weekDates.map((date, dayIndex) => (
//                     <td key={`${worker.id}-${date.date}`} className="p-3 text-center">
//                       <input 
//                         type="checkbox" 
//                         checked={worker.attendance[dayIndex] || false}
//                         onChange={() => toggleAttendance(worker.id, date.date, !worker.attendance[dayIndex])}
//                         className="form-checkbox h-5 w-5 text-blue-600"
//                       />
//                     </td>
//                   ))}
//                   <td className="p-3 text-center font-bold">{worker.totalDays}</td>
//                   <td className="p-3 text-center font-bold text-green-600">
//                     {worker.totalPay.toFixed(2)} DH
//                   </td>
//                   <td className="p-3 text-center">
//                     {worker.paymentDate || calculatePaymentDate()}
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

//         {/* Historique */}
//         {attendanceHistory.length > 0 && (
//           <div className="mt-8">
//             <h2 className="text-2xl font-bold mb-4 flex items-center">
//               Historique des Paiements
//             </h2>
//             {attendanceHistory.map((record, index) => (
//               <div key={index} className="mb-6 bg-gray-50 p-4 rounded-lg">
//                 <h3 className="font-semibold mb-2">
//                   {new Date(record.date).toLocaleDateString('fr-FR')}
//                 </h3>
//                 <div className="overflow-x-auto">
//                   <table className="w-full">
//                     <thead>
//                       <tr className="bg-gray-200">
//                         <th className="p-2 text-left">Nom</th>
//                         <th className="p-2 text-center">Jours</th>
//                         <th className="p-2 text-center">Paiement</th>
//                         <th className="p-2 text-center">Date</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {record.workers.map((worker, idx) => (
//                         <tr key={idx} className="border-b">
//                           <td className="p-2">{worker.name}</td>
//                           <td className="p-2 text-center">{worker.totalDays}</td>
//                           <td className="p-2 text-center">{worker.totalPay.toFixed(2)} DH</td>
//                           <td className="p-2 text-center">{worker.paymentDate}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }




///mon code dernier bien fait

// import React, { useState } from 'react';
// import { 
//   Users, Save, FileSpreadsheet, Plus, Trash2,
//   ChevronLeft, ChevronRight , Menu, Shield ,ClipboardList 
// } from 'lucide-react';
// import axios from 'axios';
// import { router } from '@inertiajs/react';

// export default function AdvancedWorkerAttendance({ project, workers: initialWorkers, weekDates }) {
//     const [workers, setWorkers] = useState(initialWorkers || []);
    
//     const [newWorker, setNewWorker] = useState({
//       name: '',
//       daily_rate: '',
//       payment_type: 'daily',
//       project_id: project.id
//     });
    
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [attendanceHistory, setAttendanceHistory] = useState([]);

//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  
//     // Calculate payment date
//     const calculatePaymentDate = () => {
//       const endOfWeek = new Date(weekDates[6].date);
//       endOfWeek.setDate(endOfWeek.getDate() + 1);
//       return endOfWeek.toLocaleDateString('fr-FR');
//     };
  
//     // Add worker using Inertia
//     const addWorker = () => {
//       if (!newWorker.name || !newWorker.daily_rate) {
//         setError('Veuillez remplir tous les champs obligatoires');
//         return;
//       }
  
//       setLoading(true);
//       setError(null);
      
//       router.post('/workers', newWorker, {
//         preserveScroll: true,
//         onSuccess: () => {
//           setNewWorker({ 
//             name: '', 
//             daily_rate: '', 
//             payment_type: 'daily',
//             project_id: project.id
//           });
//           // Workers list will be refreshed via Inertia
//         },
//         onError: (errors) => {
//           setError(Object.values(errors).join('\n'));
//         },
//         onFinish: () => {
//           setLoading(false);
//         }
//       });
//     };
  
//     // Toggle attendance using Inertia
//     const toggleAttendance = (workerId, date, isPresent) => {
//       router.post(`/workers/${workerId}/attendance`, {
//         date,
//         present: isPresent
//       }, {
//         preserveScroll: true,
//         onSuccess: () => {
//           // Update local state to reflect changes immediately
//           setWorkers(prevWorkers => prevWorkers.map(worker => {
//             if (worker.id === workerId) {
//               const dayIndex = weekDates.findIndex(d => d.date === date);
//               const newAttendance = [...worker.attendance];
//               newAttendance[dayIndex] = isPresent;
              
//               const presentDays = newAttendance.filter(Boolean).length;
//               const totalPay = worker.payment_type === 'daily' 
//                 ? presentDays * worker.daily_rate 
//                 : Math.min(presentDays, 5) * worker.daily_rate;
              
//               return {
//                 ...worker,
//                 attendance: newAttendance,
//                 totalDays: presentDays,
//                 totalPay
//               };
//             }
//             return worker;
//           }));
//         },
//         onError: (errors) => {
//           setError("Échec de la mise à jour. Voir la console pour les détails.");
//           console.error(errors);
//         }
//       });
//     };
  
//     // Remove worker using Inertia
//     const removeWorker = (workerId) => {
//       if (!window.confirm('Êtes-vous sûr de vouloir supprimer cet ouvrier ?')) return;
      
//       router.delete(`/workers/${workerId}`, {
//         preserveScroll: true,
//         onSuccess: () => {
//           setWorkers(prev => prev.filter(w => w.id !== workerId));
//         },
//         onError: (errors) => {
//           setError("Échec de la suppression");
//           console.error(errors);
//         }
//       });
//     };
  
//     // Save attendance history using Inertia
//     const saveAttendanceHistory = () => {
//       router.post('/workers/generate-payments', {
//         project_id: project.id,
//         week_start: weekDates[0].date,
//         week_end: weekDates[6].date
//       }, {
//         preserveScroll: true,
//         onSuccess: (page) => {
//           setAttendanceHistory([...attendanceHistory, {
//             date: new Date().toISOString(),
//             workers: workers.map(worker => ({
//               id: worker.id,
//               name: worker.name,
//               attendance: worker.attendance,
//               totalDays: worker.totalDays,
//               totalPay: worker.totalPay,
//               paymentDate: worker.paymentDate || calculatePaymentDate()
//             }))
//           }]);
//           alert(page.props.flash.success || 'Paiements enregistrés avec succès');
//         },
//         onError: (errors) => {
//           alert("Erreur lors de l'enregistrement");
//           console.error(errors);
//         }
//       });
//     };
  
//     // Export data - this can remain as is since it's client-side only
//     const exportAttendanceData = () => {
//       const csvContent = generateCSV(workers);
//       const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
//       const link = document.createElement('a');
//       link.href = URL.createObjectURL(blob);
//       link.download = `pointage_${new Date().toISOString().split('T')[0]}.csv`;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     };
  
//     // Generate CSV - client-side only
//     const generateCSV = (data) => {
//       const headers = ['Nom', ...weekDates.map(d => d.day), 'Jours Travaillés', 'Paiement (DH)', 'Date de Paiement'];
//       const rows = data.map(worker => [
//         worker.name,
//         ...worker.attendance.map(day => day ? '1' : '0'),
//         worker.totalDays,
//         worker.totalPay.toFixed(2),
//         worker.paymentDate || calculatePaymentDate()
//       ]);
      
//       return [headers, ...rows].map(row => row.join(',')).join('\n');
//     };
  
//     // Week navigation using Inertia
//     const navigateWeek = (direction) => {
//       router.get(`/projects/${project.id}/workers/${direction}-week`, {
//         week: weekDates[0].date
//       });
//     };

//     // Worker illustration
//     const renderWorkerIllustration = () => {
//         return (
//             <div className="bg-white border border-gray-100 rounded-lg p-3 mb-3 relative overflow-hidden shadow-sm">
//                 <div className="flex items-center justify-between h-16">
//                     {/* Hard Hat */}
//                     <div className="w-12 h-10 bg-yellow-500 rounded-t-full rounded-b-sm shadow-md flex items-center justify-center">
//                         <div className="w-8 h-6 bg-yellow-600 rounded-t-full rounded-b-sm"></div>
//                     </div>
                    
//                     {/* Clipboard */}
//                     <div className="w-10 h-12 bg-gray-200 rounded-md shadow-sm relative">
//                         <div className="absolute top-2 left-2 w-6 h-1 bg-gray-400"></div>
//                         <div className="absolute top-4 left-2 w-6 h-1 bg-gray-400"></div>
//                         <div className="absolute top-6 left-2 w-6 h-1 bg-gray-400"></div>
//                     </div>
                    
//                     {/* Tool */}
//                     <div className="w-12 h-12 relative">
//                         <div className="absolute bottom-0 left-0 w-2 h-8 bg-gray-700 transform rotate-12"></div>
//                         <div className="absolute top-1 left-2 w-6 h-3 bg-red-500 rounded"></div>
//                     </div>
//                 </div>
                
//                 {/* Small decorative elements */}
//                 <div className="absolute bottom-1 left-1 w-2 h-2 bg-sky-500 rounded-full opacity-50"></div>
//                 <div className="absolute top-1 right-1 w-3 h-3 bg-black rounded-full opacity-30"></div>
//             </div>
//         );
//     };

//   return (
//     <div className="container mx-auto p-6 bg-gray-50">
//       <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
//         {/* En-tête */}
//         <div className="bg-gradient-to-r from-sky-400 to-black p-6 flex justify-between items-center">
//           <div className="flex items-center">
//             <div className="bg-white p-3 rounded-full mr-4 shadow">
//               <Users className="text-sky-500" size={28} />
//             </div>
//             <h1 className="text-3xl font-bold text-white">
//               Suivi des Ouvriers - {project.name}
//             </h1>
//           </div>
          
//           <div className="flex space-x-3">
//             <button 
//               onClick={saveAttendanceHistory} 
//               className="bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-lg flex items-center transition-colors shadow"
//             >
//               <Save className="mr-2" size={18} /> Enregistrer
//             </button>
//             <button 
//               onClick={exportAttendanceData} 
//               className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors shadow"
//             >
//               <FileSpreadsheet className="mr-2" size={18} /> Exporter
//             </button>
//           </div>
        
//         </div>

//         <div className="p-6">
//           {/* Affichage des erreurs */}
//           {error && (
//             <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-md shadow-sm">
//               <div className="flex items-center">
//                 <svg className="h-5 w-5 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//                 </svg>
//                 {error}
//               </div>
//             </div>
//           )}

//           {/* Navigation entre semaines */}
//           <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-lg shadow-md border border-gray-200">
//             <button 
//               onClick={() => navigateWeek('previous')}
//               className="bg-sky-100 hover:bg-sky-200 text-sky-700 px-4 py-2 rounded-lg flex items-center border border-sky-200 transition-colors shadow-sm"
//             >
//               <ChevronLeft className="mr-2" size={18} /> Semaine précédente
//             </button>
//             <div className="text-lg font-semibold text-gray-800">
//               Semaine du {weekDates[0].formatted} au {weekDates[6].formatted}
//             </div>
//             <button 
//               onClick={() => navigateWeek('next')}
//               className="bg-sky-100 hover:bg-sky-200 text-sky-700 px-4 py-2 rounded-lg flex items-center border border-sky-200 transition-colors shadow-sm"
//             >
//               Semaine suivante <ChevronRight className="ml-2" size={18} />
//             </button>
//           </div>

//           {/* Formulaire d'ajout */}
//           <div className="mb-8 bg-white p-6 rounded-lg shadow-md border-l-4 border-sky-400">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">Ajouter un ouvrier</h2>
//             <div className="grid grid-cols-3 gap-4">
//               <div className="form-group">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Nom de l'ouvrier</label>
//                 <input 
//                   type="text" 
//                   placeholder="Nom de l'ouvrier" 
//                   value={newWorker.name}
//                   onChange={(e) => setNewWorker({...newWorker, name: e.target.value})}
//                   className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-gray-50"
//                 />
//               </div>
//               <div className="form-group">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Taux journalier (DH)</label>
//                 <input 
//                   type="number" 
//                   placeholder="Taux journalier (DH)" 
//                   value={newWorker.daily_rate}
//                   onChange={(e) => setNewWorker({...newWorker, daily_rate: e.target.value})}
//                   className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-gray-50"
//                 />
//               </div>
//               <div className="flex gap-3">
//                 <div className="form-group flex-1">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Type de paiement</label>
//                   <select 
//                     value={newWorker.payment_type}
//                     onChange={(e) => setNewWorker({...newWorker, payment_type: e.target.value})}
//                     className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-gray-50"
//                   >
//                     <option value="daily">Journalier</option>
//                     <option value="weekly">Hebdomadaire</option>
//                   </select>
//                 </div>
//                 <div className="flex items-end">
//                   <button 
//                     onClick={addWorker}
//                     disabled={loading}
//                     className="bg-gradient-to-r from-sky-400 to-black hover:from-sky-500 hover:to-black text-white px-5 py-2 h-10 rounded-lg flex items-center justify-center transition-colors shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
//                   >
//                     {loading ? 'En cours...' : <><Plus className="mr-2" size={18} /> Ajouter</>}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Worker Illustration */}
//           {/* <div className="mb-6">
//             {renderWorkerIllustration()}
//           </div> */}

//           {/* Tableau des présences */}
//           <div className="mb-8">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//               <Users className="mr-2 w-5 h-5 text-sky-500" />
//               Liste des Ouvriers
//             </h2>
            
//             <div className="overflow-x-auto">
//               <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
//                 <thead>
//                   <tr className="bg-gradient-to-r from-sky-400 to-black text-white">
//                     <th className="p-4 text-left font-semibold border-b">Nom</th>
//                     {weekDates.map((date) => (
//                       <th key={date.date} className="p-4 text-center font-semibold border-b">
//                         <div className="font-medium">{date.day}</div>
//                         <div className="text-sm opacity-80">{date.formatted}</div>
//                       </th>
//                     ))}
//                     <th className="p-4 text-center font-semibold border-b">Jours</th>
//                     <th className="p-4 text-center font-semibold border-b">Paiement</th>
//                     <th className="p-4 text-center font-semibold border-b">Date Paiement</th>
//                     <th className="p-4 text-center font-semibold border-b">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {workers.length > 0 ? workers.map((worker, workerIndex) => (
//                     <tr key={worker.id} className={`${workerIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-sky-50 transition-colors duration-150`}>
//                       <td className="p-4 border-b border-gray-200 font-medium">{worker.name}</td>
//                       {weekDates.map((date, dayIndex) => (
//                         <td key={`${worker.id}-${date.date}`} className="p-4 text-center border-b border-gray-200">
//                           <div className="flex justify-center">
//                             <input 
//                               type="checkbox" 
//                               checked={worker.attendance[dayIndex] || false}
//                               onChange={() => toggleAttendance(worker.id, date.date, !worker.attendance[dayIndex])}
//                               className="h-5 w-5 text-sky-600 border-gray-300 rounded focus:ring-sky-500"
//                             />
//                           </div>
//                         </td>
//                       ))}
//                       <td className="p-4 text-center border-b border-gray-200 font-bold text-sky-700">{worker.totalDays}</td>
//                       <td className="p-4 text-center border-b border-gray-200 font-bold text-green-600">
//                         {worker.totalPay.toFixed(2)} DH
//                       </td>
//                       <td className="p-4 text-center border-b border-gray-200 text-gray-700">
//                         {worker.paymentDate || calculatePaymentDate()}
//                       </td>
//                       <td className="p-4 text-center border-b border-gray-200">
//                         <button 
//                           onClick={() => removeWorker(worker.id)}
//                           className="text-gray-700 hover:text-red-600 p-2 rounded-full transition-colors hover:bg-red-50"
//                         >
//                           <Trash2 size={18} />
//                         </button>
//                       </td>
//                     </tr>
//                   )) : (
//                     <tr>
//                       <td colSpan={weekDates.length + 5} className="p-8 text-center text-gray-500 italic">
//                         <div className="bg-sky-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
//                           <Users className="w-8 h-8 text-sky-500" />
//                         </div>
//                         <h3 className="text-lg font-medium text-gray-800 mb-2">Aucun ouvrier enregistré</h3>
//                         <p className="text-gray-600 mb-4">Ajoutez des ouvriers pour commencer le suivi des présences</p>
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Historique */}
//           {attendanceHistory.length > 0 && (
//             <div className="mt-12 border-t pt-8">
//               <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
//                 <svg className="h-6 w-6 mr-2 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//                 Historique des Paiements
//               </h2>
//               <div className="space-y-6">
//                 {attendanceHistory.map((record, index) => (
//                   <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
//                     <h3 className="font-semibold mb-4 text-lg text-sky-700 border-b border-gray-200 pb-2">
//                       {new Date(record.date).toLocaleDateString('fr-FR')}
//                     </h3>
//                     <div className="overflow-x-auto">
//                       <table className="w-full bg-white rounded-lg">
//                         <thead>
//                           <tr className="bg-sky-50">
//                             <th className="p-3 text-left font-semibold text-gray-800">Nom</th>
//                             <th className="p-3 text-center font-semibold text-gray-800">Jours</th>
//                             <th className="p-3 text-center font-semibold text-gray-800">Paiement</th>
//                             <th className="p-3 text-center font-semibold text-gray-800">Date</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {record.workers.map((worker, idx) => (
//                             <tr key={idx} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
//                               <td className="p-3 border-t">{worker.name}</td>
//                               <td className="p-3 text-center border-t">{worker.totalDays}</td>
//                               <td className="p-3 text-center border-t font-medium text-green-600">{worker.totalPay.toFixed(2)} DH</td>
//                               <td className="p-3 text-center border-t">{worker.paymentDate}</td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { 
  Users, Save, FileSpreadsheet, Plus, Trash2,
  ChevronLeft, ChevronRight, Menu, Shield, ClipboardList ,Briefcase,LogOut
} from 'lucide-react';
import axios from 'axios';
import { router } from '@inertiajs/react';

export default function AdvancedWorkerAttendance({ project, workers: initialWorkers, weekDates }) {
    const [workers, setWorkers] = useState(initialWorkers || []);
    
    const [newWorker, setNewWorker] = useState({
      name: '',
      daily_rate: '',
      payment_type: 'daily',
      project_id: project.id
    });
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [attendanceHistory, setAttendanceHistory] = useState([]);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  
    // Calculate payment date
    const calculatePaymentDate = () => {
      const endOfWeek = new Date(weekDates[6].date);
      endOfWeek.setDate(endOfWeek.getDate() + 1);
      return endOfWeek.toLocaleDateString('fr-FR');
    };
  
    // Add worker using Inertia
    const addWorker = () => {
      if (!newWorker.name || !newWorker.daily_rate) {
        setError('Veuillez remplir tous les champs obligatoires');
        return;
      }
  
      setLoading(true);
      setError(null);
      
      router.post('/workers', newWorker, {
        preserveScroll: true,
        onSuccess: () => {
          setNewWorker({ 
            name: '', 
            daily_rate: '', 
            payment_type: 'daily',
            project_id: project.id
          });
          // Workers list will be refreshed via Inertia
        },
        onError: (errors) => {
          setError(Object.values(errors).join('\n'));
        },
        onFinish: () => {
          setLoading(false);
        }
      });
    };
  
    // Toggle attendance using Inertia
    const toggleAttendance = (workerId, date, isPresent) => {
      router.post(`/workers/${workerId}/attendance`, {
        date,
        present: isPresent
      }, {
        preserveScroll: true,
        onSuccess: () => {
          // Update local state to reflect changes immediately
          setWorkers(prevWorkers => prevWorkers.map(worker => {
            if (worker.id === workerId) {
              const dayIndex = weekDates.findIndex(d => d.date === date);
              const newAttendance = [...worker.attendance];
              newAttendance[dayIndex] = isPresent;
              
              const presentDays = newAttendance.filter(Boolean).length;
              const totalPay = worker.payment_type === 'daily' 
                ? presentDays * worker.daily_rate 
                : Math.min(presentDays, 5) * worker.daily_rate;
              
              return {
                ...worker,
                attendance: newAttendance,
                totalDays: presentDays,
                totalPay
              };
            }
            return worker;
          }));
        },
        onError: (errors) => {
          setError("Échec de la mise à jour. Voir la console pour les détails.");
          console.error(errors);
        }
      });
    };
  
    // Remove worker using Inertia
    const removeWorker = (workerId) => {
      if (!window.confirm('Êtes-vous sûr de vouloir supprimer cet ouvrier ?')) return;
      
      router.delete(`/workers/${workerId}`, {
        preserveScroll: true,
        onSuccess: () => {
          setWorkers(prev => prev.filter(w => w.id !== workerId));
        },
        onError: (errors) => {
          setError("Échec de la suppression");
          console.error(errors);
        }
      });
    };
  
    // Save attendance history using Inertia
    const saveAttendanceHistory = () => {
      router.post('/workers/generate-payments', {
        project_id: project.id,
        week_start: weekDates[0].date,
        week_end: weekDates[6].date
      }, {
        preserveScroll: true,
        onSuccess: (page) => {
          setAttendanceHistory([...attendanceHistory, {
            date: new Date().toISOString(),
            workers: workers.map(worker => ({
              id: worker.id,
              name: worker.name,
              attendance: worker.attendance,
              totalDays: worker.totalDays,
              totalPay: worker.totalPay,
              paymentDate: worker.paymentDate || calculatePaymentDate()
            }))
          }]);
          alert(page.props.flash.success || 'Paiements enregistrés avec succès');
        },
        onError: (errors) => {
          alert("Erreur lors de l'enregistrement");
          console.error(errors);
        }
      });
    };
  
    // Export data - this can remain as is since it's client-side only
    const exportAttendanceData = () => {
      const csvContent = generateCSV(workers);
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `pointage_${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    // Generate CSV - client-side only
    const generateCSV = (data) => {
      const headers = ['Nom', ...weekDates.map(d => d.day), 'Jours Travaillés', 'Paiement (DH)', 'Date de Paiement'];
      const rows = data.map(worker => [
        worker.name,
        ...worker.attendance.map(day => day ? '1' : '0'),
        worker.totalDays,
        worker.totalPay.toFixed(2),
        worker.paymentDate || calculatePaymentDate()
      ]);
      
      return [headers, ...rows].map(row => row.join(',')).join('\n');
    };
  
    // Week navigation using Inertia
    const navigateWeek = (direction) => {
      router.get(`/projects/${project.id}/workers/${direction}-week`, {
        week: weekDates[0].date
      });
    };

    const navigateToDashboard = () => {
      router.visit('/dashboard');
    };
    
    

    // Navigate to tasks page
    const navigateToTasks = () => {
      router.visit(`/projects/${project.id}/tasks`);
    };

    // Navigate to safety page
    const navigateToSafety = () => {
      router.visit(`/projects/${project.id}/safety`);
    };

    // Worker illustration
    const renderWorkerIllustration = () => {
        return (
            <div className="bg-white border border-gray-100 rounded-lg p-3 mb-3 relative overflow-hidden shadow-sm">
                <div className="flex items-center justify-between h-16">
                    {/* Hard Hat */}
                    <div className="w-12 h-10 bg-yellow-500 rounded-t-full rounded-b-sm shadow-md flex items-center justify-center">
                        <div className="w-8 h-6 bg-yellow-600 rounded-t-full rounded-b-sm"></div>
                    </div>
                    
                    {/* Clipboard */}
                    <div className="w-10 h-12 bg-gray-200 rounded-md shadow-sm relative">
                        <div className="absolute top-2 left-2 w-6 h-1 bg-gray-400"></div>
                        <div className="absolute top-4 left-2 w-6 h-1 bg-gray-400"></div>
                        <div className="absolute top-6 left-2 w-6 h-1 bg-gray-400"></div>
                    </div>
                    
                    {/* Tool */}
                    <div className="w-12 h-12 relative">
                        <div className="absolute bottom-0 left-0 w-2 h-8 bg-gray-700 transform rotate-12"></div>
                        <div className="absolute top-1 left-2 w-6 h-3 bg-red-500 rounded"></div>
                    </div>
                </div>
                
                {/* Small decorative elements */}
                <div className="absolute bottom-1 left-1 w-2 h-2 bg-sky-500 rounded-full opacity-50"></div>
                <div className="absolute top-1 right-1 w-3 h-3 bg-black rounded-full opacity-30"></div>
            </div>
        );
    };

  return (
    <div className="container mx-auto p-6 bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        {/* En-tête */}
        <div className="bg-gradient-to-r from-sky-400 to-black p-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-white p-3 rounded-full mr-4 shadow">
              <Users className="text-sky-500" size={28} />
            </div>
            <h1 className="text-3xl font-bold text-white">
              Suivi des Ouvriers - {project.name}
            </h1>
          </div>
          
          <div className="flex space-x-3">
            {/* Menu de navigation */}
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-lg transition-colors shadow"
              >
                <Menu className="mr-2" size={18} /> Menu
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                  <div className="py-1">

                  <button 
  onClick={navigateToDashboard}
  className="flex items-center px-4 py-2 w-full text-left text-gray-700 hover:bg-sky-50 hover:text-sky-600"
>
  <Briefcase className="mr-2" size={16} /> Projet
</button>



                    <button 
                      onClick={navigateToTasks}
                      className="flex items-center px-4 py-2 w-full text-left text-gray-700 hover:bg-sky-50 hover:text-sky-600"
                    >


                       
                      <ClipboardList className="mr-2" size={16} /> Tâches
                    </button>
                    <button 
                      onClick={navigateToSafety}
                      className="flex items-center px-4 py-2 w-full text-left text-gray-700 hover:bg-sky-50 hover:text-sky-600"
                    >
                      <Shield className="mr-2" size={16} /> Sécurité
                    </button>
                      {/* Bouton de déconnexion ajouté ici */}
            <button 
                onClick={() => router.post(route('logout'))}
                className="flex items-center px-4 py-2 w-full text-left text-gray-700 hover:bg-sky-50 hover:text-sky-600"
            >
                <LogOut className="mr-2" size={16} /> Déconnexion
            </button>
                  </div>
                </div>
              )}
            </div>
            
            <button 
              onClick={saveAttendanceHistory} 
              className="bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-lg flex items-center transition-colors shadow"
            >
              <Save className="mr-2" size={18} /> Enregistrer
            </button>
            <button 
              onClick={exportAttendanceData} 
              className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors shadow"
            >
              <FileSpreadsheet className="mr-2" size={18} /> Exporter
            </button>
          </div>
        
        </div>

        <div className="p-6">
          {/* Affichage des erreurs */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-md shadow-sm">
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {error}
              </div>
            </div>
          )}

          {/* Navigation entre semaines */}
          <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-lg shadow-md border border-gray-200">
            <button 
              onClick={() => navigateWeek('previous')}
              className="bg-sky-100 hover:bg-sky-200 text-sky-700 px-4 py-2 rounded-lg flex items-center border border-sky-200 transition-colors shadow-sm"
            >
              <ChevronLeft className="mr-2" size={18} /> Semaine précédente
            </button>
            <div className="text-lg font-semibold text-gray-800">
              Semaine du {weekDates[0].formatted} au {weekDates[6].formatted}
            </div>
            <button 
              onClick={() => navigateWeek('next')}
              className="bg-sky-100 hover:bg-sky-200 text-sky-700 px-4 py-2 rounded-lg flex items-center border border-sky-200 transition-colors shadow-sm"
            >
              Semaine suivante <ChevronRight className="ml-2" size={18} />
            </button>
          </div>

          {/* Formulaire d'ajout */}
          <div className="mb-8 bg-white p-6 rounded-lg shadow-md border-l-4 border-sky-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Ajouter un ouvrier</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="form-group">
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom de l'ouvrier</label>
                <input 
                  type="text" 
                  placeholder="Nom de l'ouvrier" 
                  value={newWorker.name}
                  onChange={(e) => setNewWorker({...newWorker, name: e.target.value})}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-gray-50"
                />
              </div>
              <div className="form-group">
                <label className="block text-sm font-medium text-gray-700 mb-1">Taux journalier (DH)</label>
                <input 
                  type="number" 
                  placeholder="Taux journalier (DH)" 
                  value={newWorker.daily_rate}
                  onChange={(e) => setNewWorker({...newWorker, daily_rate: e.target.value})}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-gray-50"
                />
              </div>
              <div className="flex gap-3">
                <div className="form-group flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type de paiement</label>
                  <select 
                    value={newWorker.payment_type}
                    onChange={(e) => setNewWorker({...newWorker, payment_type: e.target.value})}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-gray-50"
                  >
                    <option value="daily">Journalier</option>
                    <option value="weekly">Hebdomadaire</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button 
                    onClick={addWorker}
                    disabled={loading}
                    className="bg-gradient-to-r from-sky-400 to-black hover:from-sky-500 hover:to-black text-white px-5 py-2 h-10 rounded-lg flex items-center justify-center transition-colors shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? 'En cours...' : <><Plus className="mr-2" size={18} /> Ajouter</>}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Worker Illustration */}
          {/* <div className="mb-6">
            {renderWorkerIllustration()}
          </div> */}

          {/* Tableau des présences */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Users className="mr-2 w-5 h-5 text-sky-500" />
              Liste des Ouvriers
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
                <thead>
                  <tr className="bg-gradient-to-r from-sky-400 to-black text-white">
                    <th className="p-4 text-left font-semibold border-b">Nom</th>
                    {weekDates.map((date) => (
                      <th key={date.date} className="p-4 text-center font-semibold border-b">
                        <div className="font-medium">{date.day}</div>
                        <div className="text-sm opacity-80">{date.formatted}</div>
                      </th>
                    ))}
                    <th className="p-4 text-center font-semibold border-b">Jours</th>
                    <th className="p-4 text-center font-semibold border-b">Paiement</th>
                    <th className="p-4 text-center font-semibold border-b">Date Paiement</th>
                    <th className="p-4 text-center font-semibold border-b">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {workers.length > 0 ? workers.map((worker, workerIndex) => (
                    <tr key={worker.id} className={`${workerIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-sky-50 transition-colors duration-150`}>
                      <td className="p-4 border-b border-gray-200 font-medium">{worker.name}</td>
                      {weekDates.map((date, dayIndex) => (
                        <td key={`${worker.id}-${date.date}`} className="p-4 text-center border-b border-gray-200">
                          <div className="flex justify-center">
                            <input 
                              type="checkbox" 
                              checked={worker.attendance[dayIndex] || false}
                              onChange={() => toggleAttendance(worker.id, date.date, !worker.attendance[dayIndex])}
                              className="h-5 w-5 text-sky-600 border-gray-300 rounded focus:ring-sky-500"
                            />
                          </div>
                        </td>
                      ))}
                      <td className="p-4 text-center border-b border-gray-200 font-bold text-sky-700">{worker.totalDays}</td>
                      <td className="p-4 text-center border-b border-gray-200 font-bold text-green-600">
                        {worker.totalPay.toFixed(2)} DH
                      </td>
                      <td className="p-4 text-center border-b border-gray-200 text-gray-700">
                        {worker.paymentDate || calculatePaymentDate()}
                      </td>
                      <td className="p-4 text-center border-b border-gray-200">
                        <button 
                          onClick={() => removeWorker(worker.id)}
                          className="text-gray-700 hover:text-red-600 p-2 rounded-full transition-colors hover:bg-red-50"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  )) : (
                    <tr>
                      <td colSpan={weekDates.length + 5} className="p-8 text-center text-gray-500 italic">
                        <div className="bg-sky-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                          <Users className="w-8 h-8 text-sky-500" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-800 mb-2">Aucun ouvrier enregistré</h3>
                        <p className="text-gray-600 mb-4">Ajoutez des ouvriers pour commencer le suivi des présences</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Historique */}
          {attendanceHistory.length > 0 && (
            <div className="mt-12 border-t pt-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
                <svg className="h-6 w-6 mr-2 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Historique des Paiements
              </h2>
              <div className="space-y-6">
                {attendanceHistory.map((record, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="font-semibold mb-4 text-lg text-sky-700 border-b border-gray-200 pb-2">
                      {new Date(record.date).toLocaleDateString('fr-FR')}
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full bg-white rounded-lg">
                        <thead>
                          <tr className="bg-sky-50">
                            <th className="p-3 text-left font-semibold text-gray-800">Nom</th>
                            <th className="p-3 text-center font-semibold text-gray-800">Jours</th>
                            <th className="p-3 text-center font-semibold text-gray-800">Paiement</th>
                            <th className="p-3 text-center font-semibold text-gray-800">Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {record.workers.map((worker, idx) => (
                            <tr key={idx} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                              <td className="p-3 border-t">{worker.name}</td>
                              <td className="p-3 text-center border-t">{worker.totalDays}</td>
                              <td className="p-3 text-center border-t font-medium text-green-600">{worker.totalPay.toFixed(2)} DH</td>
                              <td className="p-3 text-center border-t">{worker.paymentDate}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}