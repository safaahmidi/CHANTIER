// import { Head, useForm, usePage, Link } from '@inertiajs/react';
// import { 
//   ShieldCheck, 
//   Stethoscope, 
//   Hammer, 
//   AlertTriangle, 
//   HardHat, 
//   CheckCircle,
//   Clipboard,
//   FileText,
//   Users,
//   AlertCircle,
//   PlusCircle,
//   Check,
//   Bolt,
//   ArrowUp,
//   Move,
//   Trash2,
//   Edit,
//   X
// } from 'lucide-react';
// import { useState } from 'react';

// const safetyCategoriesMap = {
//   'first-aid': { 
//     icon: Stethoscope, 
//     color: 'text-red-500', 
//     label: 'Premiers Secours et Plans d\'Urgence' 
//   },
//   'falling-objects': { 
//     icon: AlertTriangle, 
//     color: 'text-orange-500', 
//     label: 'Prévention des Chutes d\'Objets' 
//   },
//   'risk-management': { 
//     icon: ShieldCheck, 
//     color: 'text-yellow-500', 
//     label: 'Gestion des Risques' 
//   },
//   'height-work': { 
//     icon: ArrowUp, 
//     color: 'text-blue-500', 
//     label: 'Sécurisation des Travaux en Hauteur' 
//   },
//   'electrical-safety': { 
//     icon: Bolt, 
//     color: 'text-purple-500', 
//     label: 'Sécurité Électrique' 
//   },
//   'equipment-usage': { 
//     icon: Hammer, 
//     color: 'text-gray-500', 
//     label: 'Utilisation d\'Équipements et Machines' 
//   },
//   'site-signage': { 
//     icon: Clipboard, 
//     color: 'text-green-500', 
//     label: 'Signalisation et Délimitation du Chantier' 
//   },
//   'personal-protective': { 
//     icon: HardHat, 
//     color: 'text-indigo-500', 
//     label: 'Équipements de Protection Individuelle (EPI)' 
//   },
//   'training': { 
//     icon: Users, 
//     color: 'text-teal-500', 
//     label: 'Formation et Sensibilisation' 
//   }
// };

// export default function SafetyManagementTracking({ project, safetyMeasures = [] }) {
//   const [showMeasureForm, setShowMeasureForm] = useState(false);
//   const [editingMeasure, setEditingMeasure] = useState(null);
//   const [confirmingDeletion, setConfirmingDeletion] = useState(false);
//   const [measureToDelete, setMeasureToDelete] = useState(null);
  
//   const { data, setData, post, put, delete: destroy, processing, reset } = useForm({
//     category: 'first-aid',
//     title: '',
//     description: '',
//     implementation_date: new Date().toISOString().split('T')[0],
//     priority: 'medium',
//     status: 'pending',
//     corrective_action: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData(name, value);
//   };

//   const submitMeasure = (e) => {
//     e.preventDefault();
    
//     if (editingMeasure) {
//       put(route('projects.safety-measures.update', [project.id, editingMeasure.id]), {
//         onSuccess: () => {
//           reset();
//           setShowMeasureForm(false);
//           setEditingMeasure(null);
//         }
//       });
//     } else {
//       post(route('projects.safety-measures.store', project.id), {
//         onSuccess: () => {
//           reset();
//           setShowMeasureForm(false);
//         }
//       });
//     }
//   };

//   const editMeasure = (measure) => {
//     setEditingMeasure(measure);
//     setData({
//       category: measure.category,
//       title: measure.title,
//       description: measure.description,
//       implementation_date: measure.implementation_date,
//       priority: measure.priority,
//       status: measure.status,
//       corrective_action: measure.corrective_action
//     });
//     setShowMeasureForm(true);
//   };

//   const confirmDelete = (measure) => {
//     setMeasureToDelete(measure);
//     setConfirmingDeletion(true);
//   };

//   const deleteMeasure = () => {
//     destroy(route('projects.safety-measures.destroy', [project.id, measureToDelete.id]), {
//       onSuccess: () => {
//         setConfirmingDeletion(false);
//         setMeasureToDelete(null);
//       }
//     });
//   };

//   const toggleStatus = (measure) => {
//     post(route('projects.safety-measures.toggle-status', {project : project.id, safetyMeasure:measure.id}));
//   };

//   const pendingMeasures = safetyMeasures.filter(m => m.status === 'pending');
//   const completedMeasures = safetyMeasures.filter(m => m.status === 'completed');

//   return (
//     <div className="container mx-auto p-6">
//       <Head title={`Sécurité - ${project.name}`} />
      
//       <h1 className="text-2xl font-bold mb-6 flex items-center">
//         <ShieldCheck className="mr-2 text-blue-500" /> 
//         Suivi des Mesures de Sécurité - {project.name}
//       </h1>

//       {/* Add New Measure Button */}
//       <div className="mb-6">
//         <button 
//           onClick={() => {
//             setEditingMeasure(null);
//             setShowMeasureForm(true);
//           }}
//           className="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition ease-in-out duration-150"
//         >
//           <PlusCircle className="w-5 h-5 mr-2" /> 
//           Nouvelle Mesure
//         </button>
//       </div>

//       {/* Measure Form Modal */}
//       <Modal show={showMeasureForm} onClose={() => setShowMeasureForm(false)}>
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-semibold flex items-center gap-2">
//               <FileText className="text-blue-500" />
//               {editingMeasure ? 'Modifier la mesure' : 'Nouvelle mesure de sécurité'}
//             </h2>
//             <button 
//               onClick={() => setShowMeasureForm(false)}
//               className="text-gray-500 hover:text-gray-700"
//             >
//               <X className="w-6 h-6" />
//             </button>
//           </div>
          
//           <form onSubmit={submitMeasure}>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Catégorie*</label>
//                 <select 
//                   name="category"
//                   value={data.category}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   required
//                 >
//                   {Object.entries(safetyCategoriesMap).map(([key, category]) => (
//                     <option key={key} value={key}>{category.label}</option>
//                   ))}
//                 </select>
//               </div>
              
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Titre*</label>
//                 <input 
//                   type="text"
//                   name="title"
//                   value={data.title}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   required 
//                 />
//               </div>
              
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
//                 <textarea 
//                   name="description"
//                   value={data.description}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   rows="3"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Date de mise en œuvre*</label>
//                 <input
//                   type="date"
//                   name="implementation_date"
//                   value={data.implementation_date}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   required
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Priorité*</label>
//                 <select 
//                   name="priority"
//                   value={data.priority}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   required
//                 >
//                   <option value="low">Faible</option>
//                   <option value="medium">Moyenne</option>
//                   <option value="high">Élevée</option>
//                 </select>
//               </div>
              
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Actions correctives</label>
//                 <textarea 
//                   name="corrective_action"
//                   value={data.corrective_action}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   rows="2"
//                 />
//               </div>
//             </div>
            
//             <div className="mt-6 flex justify-end space-x-3">
//               <button
//                 type="button"
//                 onClick={() => setShowMeasureForm(false)}
//                 className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
//               >
//                 Annuler
//               </button>
//               <button
//                 type="submit"
//                 disabled={processing}
//                 className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center"
//               >
//                 {processing ? 'Enregistrement...' : 'Enregistrer'}
//                 {!processing && <Check className="ml-2 w-4 h-4" />}
//               </button>
//             </div>
//           </form>
//         </div>
//       </Modal>

//       {/* Delete Confirmation Modal */}
//       <Modal show={confirmingDeletion} onClose={() => setConfirmingDeletion(false)}>
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-lg font-medium text-gray-900">
//             Êtes-vous sûr de vouloir supprimer cette mesure?
//           </h2>
//           <p className="mt-1 text-sm text-gray-600">
//             Cette action est irréversible. La mesure sera définitivement supprimée.
//           </p>
//           <div className="mt-6 flex justify-end space-x-4">
//             <SecondaryButton onClick={() => setConfirmingDeletion(false)}>
//               Annuler
//             </SecondaryButton>
//             <DangerButton onClick={deleteMeasure} disabled={processing}>
//               {processing ? 'Suppression...' : 'Supprimer'}
//             </DangerButton>
//           </div>
//         </div>
//       </Modal>

//       {/* Measures Tracking Board */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Pending Measures Column */}
//         <div>
//           <h2 className="text-xl font-semibold mb-4 flex items-center text-orange-600">
//             <AlertTriangle className="mr-2" /> 
//             Mesures Non Mises en Place
//             <span className="ml-2 bg-orange-100 text-orange-800 text-sm font-medium px-2 py-0.5 rounded-full">
//               {pendingMeasures.length}
//             </span>
//           </h2>
//           {pendingMeasures.length === 0 ? (
//             <div className="text-center text-gray-500 bg-white p-4 rounded shadow">
//               Aucune mesure en attente
//             </div>
//           ) : (
//             <div className="space-y-4">
//               {pendingMeasures.map(measure => {
//                 const CategoryIcon = safetyCategoriesMap[measure.category]?.icon || Clipboard;
//                 const categoryColor = safetyCategoriesMap[measure.category]?.color || 'text-gray-500';
                
//                 return (
//                   <div 
//                     key={measure.id} 
//                     className="bg-white shadow rounded p-4"
//                   >
//                     <div className="flex justify-between items-start">
//                       <div className="flex items-start space-x-4">
//                         <div className={`mt-1 ${categoryColor}`}>
//                           <CategoryIcon className="w-5 h-5" />
//                         </div>
//                         <div>
//                           <h3 className="font-semibold">{measure.title}</h3>
//                           <p className="text-sm text-gray-500 mt-1">
//                             {safetyCategoriesMap[measure.category]?.label}
//                           </p>
//                           {measure.description && (
//                             <p className="text-sm text-gray-600 mt-2">{measure.description}</p>
//                           )}
//                           {measure.corrective_action && (
//                             <div className="mt-2 p-2 bg-orange-50 text-orange-800 text-sm rounded">
//                               <strong>Action corrective :</strong> {measure.corrective_action}
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                       <div className="text-right">
//                         <div className="text-xs text-gray-500">
//                           {new Date(measure.implementation_date).toLocaleDateString()}
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div className="mt-4 flex justify-between items-center">
//                       <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                         measure.priority === 'high' ? 'bg-red-100 text-red-800' :
//                         measure.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
//                         'bg-gray-100 text-gray-800'
//                       }`}>
//                         {measure.priority === 'high' ? 'Haute priorité' : 
//                          measure.priority === 'medium' ? 'Priorité moyenne' : 'Basse priorité'}
//                       </span>
                      
//                       <div className="flex space-x-2">
//                         <button
//                           onClick={() => editMeasure(measure)}
//                           className="text-blue-600 hover:text-blue-800 p-1 rounded-full hover:bg-blue-50"
//                           title="Modifier"
//                         >
//                           <Edit className="w-4 h-4" />
//                         </button>
//                         <button
//                           onClick={() => confirmDelete(measure)}
//                           className="text-red-600 hover:text-red-800 p-1 rounded-full hover:bg-red-50"
//                           title="Supprimer"
//                         >
//                           <Trash2 className="w-4 h-4" />
//                         </button>
//                         <button
//                           onClick={() => toggleStatus(measure)}
//                           className="flex items-center text-sm bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg"
//                         >
//                           <Move className="w-4 h-4 mr-1" />
//                           Valider
//                         </button>
//                       </div>  
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </div>

//         {/* Completed Measures Column */}
//         <div>
//           <h2 className="text-xl font-semibold mb-4 flex items-center text-green-600">
//             <CheckCircle className="mr-2" /> 
//             Mesures Mises en Place
//             <span className="ml-2 bg-green-100 text-green-800 text-sm font-medium px-2 py-0.5 rounded-full">
//               {completedMeasures.length}
//             </span>
//           </h2>
//           {completedMeasures.length === 0 ? (
//             <div className="text-center text-gray-500 bg-white p-4 rounded shadow">
//               Aucune mesure mise en place
//             </div>
//           ) : (
//             <div className="space-y-4">
//               {completedMeasures.map(measure => {
//                 const CategoryIcon = safetyCategoriesMap[measure.category]?.icon || Clipboard;
//                 const categoryColor = safetyCategoriesMap[measure.category]?.color || 'text-gray-500';
                
//                 return (
//                   <div 
//                     key={measure.id} 
//                     className="bg-white shadow rounded p-4"
//                   >
//                     <div className="flex justify-between items-start">
//                       <div className="flex items-start space-x-4">
//                         <div className={`mt-1 ${categoryColor}`}>
//                           <CategoryIcon className="w-5 h-5" />
//                         </div>
//                         <div>
//                           <h3 className="font-semibold">{measure.title}</h3>
//                           <p className="text-sm text-gray-500 mt-1">
//                             {safetyCategoriesMap[measure.category]?.label}
//                           </p>
//                           {measure.description && (
//                             <p className="text-sm text-gray-600 mt-2">{measure.description}</p>
//                           )}
//                           {measure.corrective_action && (
//                             <div className="mt-2 p-2 bg-green-50 text-green-800 text-sm rounded">
//                               <strong>Action corrective :</strong> {measure.corrective_action}
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                       <div className="text-right">
//                         <div className="text-xs text-gray-500">
//                           {new Date(measure.implementation_date).toLocaleDateString()}
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div className="mt-4 flex justify-between items-center">
//                       <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                         measure.priority === 'high' ? 'bg-red-100 text-red-800' :
//                         measure.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
//                         'bg-gray-100 text-gray-800'
//                       }`}>
//                         {measure.priority === 'high' ? 'Haute priorité' : 
//                          measure.priority === 'medium' ? 'Priorité moyenne' : 'Basse priorité'}
//                       </span>
                      
//                       <div className="flex space-x-2">
//                         <button
//                           onClick={() => editMeasure(measure)}
//                           className="text-blue-600 hover:text-blue-800 p-1 rounded-full hover:bg-blue-50"
//                           title="Modifier"
//                         >
//                           <Edit className="w-4 h-4" />
//                         </button>
//                         <button
//                           onClick={() => confirmDelete(measure)}
//                           className="text-red-600 hover:text-red-800 p-1 rounded-full hover:bg-red-50"
//                           title="Supprimer"
//                         >
//                           <Trash2 className="w-4 h-4" />
//                         </button>
//                         <button
//                           onClick={() => toggleStatus(measure)}
//                           className="flex items-center text-sm bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded-lg"
//                         >
//                           <Move className="w-4 h-4 mr-1" />
//                           Revenir
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



// import { useEffect } from 'react';

//  function Modal({ children, show = false, maxWidth = '2xl', onClose = () => {} }) {
//     const maxWidthClass = {
//         sm: 'sm:max-w-sm',
//         md: 'sm:max-w-md',
//         lg: 'sm:max-w-lg',
//         xl: 'sm:max-w-xl',
//         '2xl': 'sm:max-w-2xl',
//     }[maxWidth];

//     useEffect(() => {
//         if (show) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = '';
//         }
//     }, [show]);

//     if (!show) {
//         return null;
//     }

//     return (
//         <div className="fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0">
//             <div className="fixed inset-0 transform transition-all" onClick={onClose}>
//                 <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//             </div>

//             <div className={`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${maxWidthClass}`}>
//                 {children}
//             </div>
//         </div>
//     );
// }
// function DangerButton({ className = '', disabled, children, ...props }) {
//     return (
//         <button
//             {...props}
//             className={
//                 `inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
//                     disabled && 'opacity-25'
//                 } ` + className
//             }
//             disabled={disabled}
//         >
//             {children}
//         </button>
//     );
// }


// function SecondaryButton({ className = '', disabled, children, ...props }) {
//     return (
//         <button
//             {...props}
//             className={
//                 `inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${
//                     disabled && 'opacity-25'
//                 } ` + className
//             }
//             disabled={disabled}
//         >
//             {children}
//         </button>
//     );
// }



//code stylè mais sans menu est bien dèmarreè 
// import { Head, useForm, usePage, Link } from '@inertiajs/react';
// import { 
//   ShieldCheck, 
//   Stethoscope, 
//   Hammer, 
//   AlertTriangle, 
//   HardHat, 
//   CheckCircle,
//   Clipboard,
//   FileText,
//   Users,
//   AlertCircle,
//   PlusCircle,
//   Check,
//   Bolt,
//   ArrowUp,
//   Move,
//   Trash2,
//   Edit,
//   X
// } from 'lucide-react';
// import { useState } from 'react';

// const safetyCategoriesMap = {
//   'first-aid': { 
//     icon: Stethoscope, 
//     color: 'text-red-500', 
//     label: 'Premiers Secours et Plans d\'Urgence' 
//   },
//   'falling-objects': { 
//     icon: AlertTriangle, 
//     color: 'text-orange-500', 
//     label: 'Prévention des Chutes d\'Objets' 
//   },
//   'risk-management': { 
//     icon: ShieldCheck, 
//     color: 'text-sky-500', // Changé en sky pour correspondre au thème ouvrier
//     label: 'Gestion des Risques' 
//   },
//   'height-work': { 
//     icon: ArrowUp, 
//     color: 'text-sky-500', // Changé en sky pour correspondre au thème ouvrier
//     label: 'Sécurisation des Travaux en Hauteur' 
//   },
//   'electrical-safety': { 
//     icon: Bolt, 
//     color: 'text-sky-700', // Changé en sky-700 pour s'aligner sur le thème
//     label: 'Sécurité Électrique' 
//   },
//   'equipment-usage': { 
//     icon: Hammer, 
//     color: 'text-gray-600', // Légèrement modifié pour mieux s'intégrer
//     label: 'Utilisation d\'Équipements et Machines' 
//   },
//   'site-signage': { 
//     icon: Clipboard, 
//     color: 'text-green-500', 
//     label: 'Signalisation et Délimitation du Chantier' 
//   },
//   'personal-protective': { 
//     icon: HardHat, 
//     color: 'text-sky-600', // Changé en sky pour correspondre au thème ouvrier
//     label: 'Équipements de Protection Individuelle (EPI)' 
//   },
//   'training': { 
//     icon: Users, 
//     color: 'text-sky-500', // Changé en sky pour correspondre au thème ouvrier
//     label: 'Formation et Sensibilisation' 
//   }
// };

// export default function SafetyManagementTracking({ project, safetyMeasures = [] }) {
//   const [showMeasureForm, setShowMeasureForm] = useState(false);
//   const [editingMeasure, setEditingMeasure] = useState(null);
//   const [confirmingDeletion, setConfirmingDeletion] = useState(false);
//   const [measureToDelete, setMeasureToDelete] = useState(null);
  
//   const { data, setData, post, put, delete: destroy, processing, reset } = useForm({
//     category: 'first-aid',
//     title: '',
//     description: '',
//     implementation_date: new Date().toISOString().split('T')[0],
//     priority: 'medium',
//     status: 'pending',
//     corrective_action: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData(name, value);
//   };

//   const submitMeasure = (e) => {
//     e.preventDefault();
    
//     if (editingMeasure) {
//       put(route('projects.safety-measures.update', [project.id, editingMeasure.id]), {
//         onSuccess: () => {
//           reset();
//           setShowMeasureForm(false);
//           setEditingMeasure(null);
//         }
//       });
//     } else {
//       post(route('projects.safety-measures.store', project.id), {
//         onSuccess: () => {
//           reset();
//           setShowMeasureForm(false);
//         }
//       });
//     }
//   };

//   const editMeasure = (measure) => {
//     setEditingMeasure(measure);
//     setData({
//       category: measure.category,
//       title: measure.title,
//       description: measure.description,
//       implementation_date: measure.implementation_date,
//       priority: measure.priority,
//       status: measure.status,
//       corrective_action: measure.corrective_action
//     });
//     setShowMeasureForm(true);
//   };

//   const confirmDelete = (measure) => {
//     setMeasureToDelete(measure);
//     setConfirmingDeletion(true);
//   };

//   const deleteMeasure = () => {
//     destroy(route('projects.safety-measures.destroy', [project.id, measureToDelete.id]), {
//       onSuccess: () => {
//         setConfirmingDeletion(false);
//         setMeasureToDelete(null);
//       }
//     });
//   };

//   const toggleStatus = (measure) => {
//     post(route('projects.safety-measures.toggle-status', {project : project.id, safetyMeasure:measure.id}));
//   };

//   const pendingMeasures = safetyMeasures.filter(m => m.status === 'pending');
//   const completedMeasures = safetyMeasures.filter(m => m.status === 'completed');

//   return (
//     <div className="container mx-auto p-6 bg-gray-50">
//       <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
//         {/* En-tête avec dégradé similaire au fichier ouvrier */}
//         <div className="bg-gradient-to-r from-sky-400 to-black p-6 flex justify-between items-center">
//           <div className="flex items-center">
//             <div className="bg-white p-3 rounded-full mr-4 shadow">
//               <ShieldCheck className="text-sky-500" size={28} />
//             </div>
//             <h1 className="text-3xl font-bold text-white">
//               Suivi des Mesures de Sécurité - {project.name}
//             </h1>
//           </div>
          
//           <button 
//             onClick={() => {
//               setEditingMeasure(null);
//               setShowMeasureForm(true);
//             }}
//             className="inline-flex items-center px-4 py-2 bg-white hover:bg-gray-100 border border-transparent rounded-md font-semibold text-xs text-gray-800 uppercase tracking-widest hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition ease-in-out duration-150 shadow"
//           >
//             <PlusCircle className="w-5 h-5 mr-2" /> 
//             Nouvelle Mesure
//           </button>
//         </div>
      
//         <div className="p-6">
//           {/* Measure Form Modal */}
//           <Modal show={showMeasureForm} onClose={() => setShowMeasureForm(false)}>
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-xl font-semibold flex items-center gap-2">
//                   <FileText className="text-sky-500" />
//                   {editingMeasure ? 'Modifier la mesure' : 'Nouvelle mesure de sécurité'}
//                 </h2>
//                 <button 
//                   onClick={() => setShowMeasureForm(false)}
//                   className="text-gray-500 hover:text-gray-700"
//                 >
//                   <X className="w-6 h-6" />
//                 </button>
//               </div>
              
//               <form onSubmit={submitMeasure}>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="md:col-span-2">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Catégorie*</label>
//                     <select 
//                       name="category"
//                       value={data.category}
//                       onChange={handleChange}
//                       className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
//                       required
//                     >
//                       {Object.entries(safetyCategoriesMap).map(([key, category]) => (
//                         <option key={key} value={key}>{category.label}</option>
//                       ))}
//                     </select>
//                   </div>
                  
//                   <div className="md:col-span-2">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Titre*</label>
//                     <input 
//                       type="text"
//                       name="title"
//                       value={data.title}
//                       onChange={handleChange}
//                       className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
//                       required 
//                     />
//                   </div>
                  
//                   <div className="md:col-span-2">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
//                     <textarea 
//                       name="description"
//                       value={data.description}
//                       onChange={handleChange}
//                       className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
//                       rows="3"
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Date de mise en œuvre*</label>
//                     <input
//                       type="date"
//                       name="implementation_date"
//                       value={data.implementation_date}
//                       onChange={handleChange}
//                       className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
//                       required
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Priorité*</label>
//                     <select 
//                       name="priority"
//                       value={data.priority}
//                       onChange={handleChange}
//                       className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
//                       required
//                     >
//                       <option value="low">Faible</option>
//                       <option value="medium">Moyenne</option>
//                       <option value="high">Élevée</option>
//                     </select>
//                   </div>
                  
//                   <div className="md:col-span-2">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Actions correctives</label>
//                     <textarea 
//                       name="corrective_action"
//                       value={data.corrective_action}
//                       onChange={handleChange}
//                       className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
//                       rows="2"
//                     />
//                   </div>
//                 </div>
                
//                 <div className="mt-6 flex justify-end space-x-3">
//                   <button
//                     type="button"
//                     onClick={() => setShowMeasureForm(false)}
//                     className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
//                   >
//                     Annuler
//                   </button>
//                   <button
//                     type="submit"
//                     disabled={processing}
//                     className="px-4 py-2 bg-gradient-to-r from-sky-400 to-black text-white rounded-lg hover:from-sky-500 hover:to-black disabled:opacity-50 flex items-center shadow-sm"
//                   >
//                     {processing ? 'Enregistrement...' : 'Enregistrer'}
//                     {!processing && <Check className="ml-2 w-4 h-4" />}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </Modal>

//           {/* Delete Confirmation Modal */}
//           <Modal show={confirmingDeletion} onClose={() => setConfirmingDeletion(false)}>
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h2 className="text-lg font-medium text-gray-900">
//                 Êtes-vous sûr de vouloir supprimer cette mesure?
//               </h2>
//               <p className="mt-1 text-sm text-gray-600">
//                 Cette action est irréversible. La mesure sera définitivement supprimée.
//               </p>
//               <div className="mt-6 flex justify-end space-x-4">
//                 <SecondaryButton onClick={() => setConfirmingDeletion(false)}>
//                   Annuler
//                 </SecondaryButton>
//                 <DangerButton onClick={deleteMeasure} disabled={processing}>
//                   {processing ? 'Suppression...' : 'Supprimer'}
//                 </DangerButton>
//               </div>
//             </div>
//           </Modal>

//           {/* Measures Tracking Board */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Pending Measures Column */}
//             <div>
//               <h2 className="text-xl font-semibold mb-4 flex items-center text-orange-600 bg-white p-4 rounded-lg shadow-md border border-gray-200">
//                 <AlertTriangle className="mr-2" /> 
//                 Mesures Non Mises en Place
//                 <span className="ml-2 bg-orange-100 text-orange-800 text-sm font-medium px-2 py-0.5 rounded-full">
//                   {pendingMeasures.length}
//                 </span>
//               </h2>
//               {pendingMeasures.length === 0 ? (
//                 <div className="text-center text-gray-500 bg-white p-4 rounded shadow">
//                   Aucune mesure en attente
//                 </div>
//               ) : (
//                 <div className="space-y-4">
//                   {pendingMeasures.map(measure => {
//                     const CategoryIcon = safetyCategoriesMap[measure.category]?.icon || Clipboard;
//                     const categoryColor = safetyCategoriesMap[measure.category]?.color || 'text-gray-500';
                    
//                     return (
//                       <div 
//                         key={measure.id} 
//                         className="bg-white shadow rounded-lg p-4 border border-gray-200 hover:bg-sky-50 transition-colors duration-150"
//                       >
//                         <div className="flex justify-between items-start">
//                           <div className="flex items-start space-x-4">
//                             <div className={`mt-1 ${categoryColor}`}>
//                               <CategoryIcon className="w-5 h-5" />
//                             </div>
//                             <div>
//                               <h3 className="font-semibold">{measure.title}</h3>
//                               <p className="text-sm text-gray-500 mt-1">
//                                 {safetyCategoriesMap[measure.category]?.label}
//                               </p>
//                               {measure.description && (
//                                 <p className="text-sm text-gray-600 mt-2">{measure.description}</p>
//                               )}
//                               {measure.corrective_action && (
//                                 <div className="mt-2 p-2 bg-orange-50 text-orange-800 text-sm rounded">
//                                   <strong>Action corrective :</strong> {measure.corrective_action}
//                                 </div>
//                               )}
//                             </div>
//                           </div>
//                           <div className="text-right">
//                             <div className="text-xs text-gray-500">
//                               {new Date(measure.implementation_date).toLocaleDateString()}
//                             </div>
//                           </div>
//                         </div>
                        
//                         <div className="mt-4 flex justify-between items-center">
//                           <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                             measure.priority === 'high' ? 'bg-red-100 text-red-800' :
//                             measure.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
//                             'bg-gray-100 text-gray-800'
//                           }`}>
//                             {measure.priority === 'high' ? 'Haute priorité' : 
//                              measure.priority === 'medium' ? 'Priorité moyenne' : 'Basse priorité'}
//                           </span>
                          
//                           <div className="flex space-x-2">
//                             <button
//                               onClick={() => editMeasure(measure)}
//                               className="text-sky-600 hover:text-sky-800 p-1 rounded-full hover:bg-sky-50"
//                               title="Modifier"
//                             >
//                               <Edit className="w-4 h-4" />
//                             </button>
//                             <button
//                               onClick={() => confirmDelete(measure)}
//                               className="text-red-600 hover:text-red-800 p-1 rounded-full hover:bg-red-50"
//                               title="Supprimer"
//                             >
//                               <Trash2 className="w-4 h-4" />
//                             </button>
//                             <button
//                               onClick={() => toggleStatus(measure)}
//                               className="flex items-center text-sm bg-gradient-to-r from-sky-400 to-black hover:from-sky-500 hover:to-black text-white px-3 py-1 rounded-lg shadow-sm"
//                             >
//                               <Move className="w-4 h-4 mr-1" />
//                               Valider
//                             </button>
//                           </div>  
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               )}
//             </div>

//             {/* Completed Measures Column */}
//             <div>
//               <h2 className="text-xl font-semibold mb-4 flex items-center text-green-600 bg-white p-4 rounded-lg shadow-md border border-gray-200">
//                 <CheckCircle className="mr-2" /> 
//                 Mesures Mises en Place
//                 <span className="ml-2 bg-green-100 text-green-800 text-sm font-medium px-2 py-0.5 rounded-full">
//                   {completedMeasures.length}
//                 </span>
//               </h2>
//               {completedMeasures.length === 0 ? (
//                 <div className="text-center text-gray-500 bg-white p-4 rounded shadow">
//                   Aucune mesure mise en place
//                 </div>
//               ) : (
//                 <div className="space-y-4">
//                   {completedMeasures.map(measure => {
//                     const CategoryIcon = safetyCategoriesMap[measure.category]?.icon || Clipboard;
//                     const categoryColor = safetyCategoriesMap[measure.category]?.color || 'text-gray-500';
                    
//                     return (
//                       <div 
//                         key={measure.id} 
//                         className="bg-white shadow rounded-lg p-4 border border-gray-200 hover:bg-sky-50 transition-colors duration-150"
//                       >
//                         <div className="flex justify-between items-start">
//                           <div className="flex items-start space-x-4">
//                             <div className={`mt-1 ${categoryColor}`}>
//                               <CategoryIcon className="w-5 h-5" />
//                             </div>
//                             <div>
//                               <h3 className="font-semibold">{measure.title}</h3>
//                               <p className="text-sm text-gray-500 mt-1">
//                                 {safetyCategoriesMap[measure.category]?.label}
//                               </p>
//                               {measure.description && (
//                                 <p className="text-sm text-gray-600 mt-2">{measure.description}</p>
//                               )}
//                               {measure.corrective_action && (
//                                 <div className="mt-2 p-2 bg-green-50 text-green-800 text-sm rounded">
//                                   <strong>Action corrective :</strong> {measure.corrective_action}
//                                 </div>
//                               )}
//                             </div>
//                           </div>
//                           <div className="text-right">
//                             <div className="text-xs text-gray-500">
//                               {new Date(measure.implementation_date).toLocaleDateString()}
//                             </div>
//                           </div>
//                         </div>
                        
//                         <div className="mt-4 flex justify-between items-center">
//                           <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                             measure.priority === 'high' ? 'bg-red-100 text-red-800' :
//                             measure.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
//                             'bg-gray-100 text-gray-800'
//                           }`}>
//                             {measure.priority === 'high' ? 'Haute priorité' : 
//                              measure.priority === 'medium' ? 'Priorité moyenne' : 'Basse priorité'}
//                           </span>
                          
//                           <div className="flex space-x-2">
//                             <button
//                               onClick={() => editMeasure(measure)}
//                               className="text-sky-600 hover:text-sky-800 p-1 rounded-full hover:bg-sky-50"
//                               title="Modifier"
//                             >
//                               <Edit className="w-4 h-4" />
//                             </button>
//                             <button
//                               onClick={() => confirmDelete(measure)}
//                               className="text-red-600 hover:text-red-800 p-1 rounded-full hover:bg-red-50"
//                               title="Supprimer"
//                             >
//                               <Trash2 className="w-4 h-4" />
//                             </button>
//                             <button
//                               onClick={() => toggleStatus(measure)}
//                               className="flex items-center text-sm bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 text-white px-3 py-1 rounded-lg shadow-sm"
//                             >
//                               <Move className="w-4 h-4 mr-1" />
//                               Revenir
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// import { useEffect } from 'react';

//  function Modal({ children, show = false, maxWidth = '2xl', onClose = () => {} }) {
//     const maxWidthClass = {
//         sm: 'sm:max-w-sm',
//         md: 'sm:max-w-md',
//         lg: 'sm:max-w-lg',
//         xl: 'sm:max-w-xl',
//         '2xl': 'sm:max-w-2xl',
//     }[maxWidth];

//     useEffect(() => {
//         if (show) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = '';
//         }
//     }, [show]);

//     if (!show) {
//         return null;
//     }

//     return (
//         <div className="fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0">
//             <div className="fixed inset-0 transform transition-all" onClick={onClose}>
//                 <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//             </div>

//             <div className={`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${maxWidthClass}`}>
//                 {children}
//             </div>
//         </div>
//     );
// }
// function DangerButton({ className = '', disabled, children, ...props }) {
//     return (
//         <button
//             {...props}
//             className={
//                 `inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
//                     disabled && 'opacity-25'
//                 } ` + className
//             }
//             disabled={disabled}
//         >
//             {children}
//         </button>
//     );
// }


// function SecondaryButton({ className = '', disabled, children, ...props }) {
//     return (
//         <button
//             {...props}
//             className={
//                 `inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${
//                     disabled && 'opacity-25'
//                 } ` + className
//             }
//             disabled={disabled}
//         >
//             {children}
//         </button>
//     );
// }


import { Head, useForm, usePage, Link } from '@inertiajs/react';
import { 
  ShieldCheck, 
  Stethoscope, 
  Hammer, 
  AlertTriangle, 
  HardHat, 
  CheckCircle,
  Clipboard,
  FileText,
  Users,
  AlertCircle,
  PlusCircle,
  Check,
  Bolt,
  ArrowUp,
  Move,
  Trash2,
  Edit,
  X,
  Menu,
  Shield,
  ClipboardList,
  Briefcase,
  LogOut
  
} from 'lucide-react';
import { useState } from 'react';

const safetyCategoriesMap = {
  'first-aid': { 
    icon: Stethoscope, 
    color: 'text-red-500', 
    label: 'Premiers Secours et Plans d\'Urgence' 
  },
  'falling-objects': { 
    icon: AlertTriangle, 
    color: 'text-orange-500', 
    label: 'Prévention des Chutes d\'Objets' 
  },
  'risk-management': { 
    icon: ShieldCheck, 
    color: 'text-sky-500', // Changé en sky pour correspondre au thème ouvrier
    label: 'Gestion des Risques' 
  },
  'height-work': { 
    icon: ArrowUp, 
    color: 'text-sky-500', // Changé en sky pour correspondre au thème ouvrier
    label: 'Sécurisation des Travaux en Hauteur' 
  },
  'electrical-safety': { 
    icon: Bolt, 
    color: 'text-sky-700', // Changé en sky-700 pour s'aligner sur le thème
    label: 'Sécurité Électrique' 
  },
  'equipment-usage': { 
    icon: Hammer, 
    color: 'text-gray-600', // Légèrement modifié pour mieux s'intégrer
    label: 'Utilisation d\'Équipements et Machines' 
  },
  'site-signage': { 
    icon: Clipboard, 
    color: 'text-green-500', 
    label: 'Signalisation et Délimitation du Chantier' 
  },
  'personal-protective': { 
    icon: HardHat, 
    color: 'text-sky-600', // Changé en sky pour correspondre au thème ouvrier
    label: 'Équipements de Protection Individuelle (EPI)' 
  },
  'training': { 
    icon: Users, 
    color: 'text-sky-500', // Changé en sky pour correspondre au thème ouvrier
    label: 'Formation et Sensibilisation' 
  }
};

export default function SafetyManagementTracking({ project, safetyMeasures = [] }) {
  const [showMeasureForm, setShowMeasureForm] = useState(false);
  const [editingMeasure, setEditingMeasure] = useState(null);
  const [confirmingDeletion, setConfirmingDeletion] = useState(false);
  const [measureToDelete, setMeasureToDelete] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const { data, setData, post, put, delete: destroy, processing, reset } = useForm({
    category: 'first-aid',
    title: '',
    description: '',
    implementation_date: new Date().toISOString().split('T')[0],
    priority: 'medium',
    status: 'pending',
    corrective_action: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(name, value);
  };

  const submitMeasure = (e) => {
    e.preventDefault();
    
    if (editingMeasure) {
      put(route('projects.safety-measures.update', [project.id, editingMeasure.id]), {
        onSuccess: () => {
          reset();
          setShowMeasureForm(false);
          setEditingMeasure(null);
        }
      });
    } else {
      post(route('projects.safety-measures.store', project.id), {
        onSuccess: () => {
          reset();
          setShowMeasureForm(false);
        }
      });
    }
  };

  const editMeasure = (measure) => {
    setEditingMeasure(measure);
    setData({
      category: measure.category,
      title: measure.title,
      description: measure.description,
      implementation_date: measure.implementation_date,
      priority: measure.priority,
      status: measure.status,
      corrective_action: measure.corrective_action
    });
    setShowMeasureForm(true);
  };

  const confirmDelete = (measure) => {
    setMeasureToDelete(measure);
    setConfirmingDeletion(true);
  };

  const deleteMeasure = () => {
    destroy(route('projects.safety-measures.destroy', [project.id, measureToDelete.id]), {
      onSuccess: () => {
        setConfirmingDeletion(false);
        setMeasureToDelete(null);
      }
    });
  };

  const toggleStatus = (measure) => {
    post(route('projects.safety-measures.toggle-status', {project : project.id, safetyMeasure:measure.id}));
  };
  
  const navigateToDashboard = () => {
    window.location.href = route('dashboard');
  };
  
  const navigateToWorkers = () => {
    window.location.href = route('projects.workers', project.id);
  };
  
  
  const navigateToTasks = () => {
    window.location.href = route('tasks.index', project.id);
  };
  
 

  const pendingMeasures = safetyMeasures.filter(m => m.status === 'pending');
  const completedMeasures = safetyMeasures.filter(m => m.status === 'completed');

  return (
    <div className="container mx-auto p-6 bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        {/* En-tête avec dégradé similaire au fichier ouvrier */}
        <div className="bg-gradient-to-r from-sky-400 to-black p-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-white p-3 rounded-full mr-4 shadow">
              <ShieldCheck className="text-sky-500" size={28} />
            </div>
            <h1 className="text-3xl font-bold text-white">
              Suivi des Mesures de Sécurité - {project.name}
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
    <Briefcase className="mr-2" size={16} /> Projets
  </button>
  <button
    onClick={navigateToWorkers}
    className="flex items-center px-4 py-2 w-full text-left text-gray-700 hover:bg-sky-50 hover:text-sky-600"
  >
    <Users className="mr-2" size={16} /> Ouvriers
  </button>
  

                    <button
                      onClick={navigateToTasks}
                      className="flex items-center px-4 py-2 w-full text-left text-gray-700 hover:bg-sky-50 hover:text-sky-600"
                    >
                      <ClipboardList className="mr-2" size={16} /> Tâches
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
              onClick={() => {
                setEditingMeasure(null);
                setShowMeasureForm(true);
              }}
              className="inline-flex items-center px-4 py-2 bg-white hover:bg-gray-100 border border-transparent rounded-md font-semibold text-xs text-gray-800 uppercase tracking-widest hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition ease-in-out duration-150 shadow"
            >
              <PlusCircle className="w-5 h-5 mr-2" /> 
              Nouvelle Mesure
            </button>
          </div>
        </div>
      
        <div className="p-6">
          {/* Measure Form Modal */}
          <Modal show={showMeasureForm} onClose={() => setShowMeasureForm(false)}>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <FileText className="text-sky-500" />
                  {editingMeasure ? 'Modifier la mesure' : 'Nouvelle mesure de sécurité'}
                </h2>
                <button 
                  onClick={() => setShowMeasureForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <form onSubmit={submitMeasure}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Catégorie*</label>
                    <select 
                      name="category"
                      value={data.category}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      required
                    >
                      {Object.entries(safetyCategoriesMap).map(([key, category]) => (
                        <option key={key} value={key}>{category.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Titre*</label>
                    <input 
                      type="text"
                      name="title"
                      value={data.title}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      required 
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea 
                      name="description"
                      value={data.description}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      rows="3"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date de mise en œuvre*</label>
                    <input
                      type="date"
                      name="implementation_date"
                      value={data.implementation_date}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Priorité*</label>
                    <select 
                      name="priority"
                      value={data.priority}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      required
                    >
                      <option value="low">Faible</option>
                      <option value="medium">Moyenne</option>
                      <option value="high">Élevée</option>
                    </select>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Actions correctives</label>
                    <textarea 
                      name="corrective_action"
                      value={data.corrective_action}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      rows="2"
                    />
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowMeasureForm(false)}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    disabled={processing}
                    className="px-4 py-2 bg-gradient-to-r from-sky-400 to-black text-white rounded-lg hover:from-sky-500 hover:to-black disabled:opacity-50 flex items-center shadow-sm"
                  >
                    {processing ? 'Enregistrement...' : 'Enregistrer'}
                    {!processing && <Check className="ml-2 w-4 h-4" />}
                  </button>
                </div>
              </form>
            </div>
          </Modal>

          {/* Delete Confirmation Modal */}
          <Modal show={confirmingDeletion} onClose={() => setConfirmingDeletion(false)}>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-medium text-gray-900">
                Êtes-vous sûr de vouloir supprimer cette mesure?
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Cette action est irréversible. La mesure sera définitivement supprimée.
              </p>
              <div className="mt-6 flex justify-end space-x-4">
                <SecondaryButton onClick={() => setConfirmingDeletion(false)}>
                  Annuler
                </SecondaryButton>
                <DangerButton onClick={deleteMeasure} disabled={processing}>
                  {processing ? 'Suppression...' : 'Supprimer'}
                </DangerButton>
              </div>
            </div>
          </Modal>

          {/* Measures Tracking Board */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pending Measures Column */}
            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center text-orange-600 bg-white p-4 rounded-lg shadow-md border border-gray-200">
                <AlertTriangle className="mr-2" /> 
                Mesures Non Mises en Place
                <span className="ml-2 bg-orange-100 text-orange-800 text-sm font-medium px-2 py-0.5 rounded-full">
                  {pendingMeasures.length}
                </span>
              </h2>
              {pendingMeasures.length === 0 ? (
                <div className="text-center text-gray-500 bg-white p-4 rounded shadow">
                  Aucune mesure en attente
                </div>
              ) : (
                <div className="space-y-4">
                  {pendingMeasures.map(measure => {
                    const CategoryIcon = safetyCategoriesMap[measure.category]?.icon || Clipboard;
                    const categoryColor = safetyCategoriesMap[measure.category]?.color || 'text-gray-500';
                    
                    return (
                      <div 
                        key={measure.id} 
                        className="bg-white shadow rounded-lg p-4 border border-gray-200 hover:bg-sky-50 transition-colors duration-150"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex items-start space-x-4">
                            <div className={`mt-1 ${categoryColor}`}>
                              <CategoryIcon className="w-5 h-5" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{measure.title}</h3>
                              <p className="text-sm text-gray-500 mt-1">
                                {safetyCategoriesMap[measure.category]?.label}
                              </p>
                              {measure.description && (
                                <p className="text-sm text-gray-600 mt-2">{measure.description}</p>
                              )}
                              {measure.corrective_action && (
                                <div className="mt-2 p-2 bg-orange-50 text-orange-800 text-sm rounded">
                                  <strong>Action corrective :</strong> {measure.corrective_action}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-gray-500">
                              {new Date(measure.implementation_date).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 flex justify-between items-center">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            measure.priority === 'high' ? 'bg-red-100 text-red-800' :
                            measure.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {measure.priority === 'high' ? 'Haute priorité' : 
                             measure.priority === 'medium' ? 'Priorité moyenne' : 'Basse priorité'}
                          </span>
                          
                          <div className="flex space-x-2">
                            <button
                              onClick={() => editMeasure(measure)}
                              className="text-sky-600 hover:text-sky-800 p-1 rounded-full hover:bg-sky-50"
                              title="Modifier"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => confirmDelete(measure)}
                              className="text-red-600 hover:text-red-800 p-1 rounded-full hover:bg-red-50"
                              title="Supprimer"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => toggleStatus(measure)}
                              className="flex items-center text-sm bg-gradient-to-r from-sky-400 to-black hover:from-sky-500 hover:to-black text-white px-3 py-1 rounded-lg shadow-sm"
                            >
                              <Move className="w-4 h-4 mr-1" />
                              Valider
                            </button>
                          </div>  
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Completed Measures Column */}
            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center text-green-600 bg-white p-4 rounded-lg shadow-md border border-gray-200">
                <CheckCircle className="mr-2" /> 
                Mesures Mises en Place
                <span className="ml-2 bg-green-100 text-green-800 text-sm font-medium px-2 py-0.5 rounded-full">
                  {completedMeasures.length}
                </span>
              </h2>
              {completedMeasures.length === 0 ? (
                <div className="text-center text-gray-500 bg-white p-4 rounded shadow">
                  Aucune mesure mise en place
                </div>
              ) : (
                <div className="space-y-4">
                  {completedMeasures.map(measure => {
                    const CategoryIcon = safetyCategoriesMap[measure.category]?.icon || Clipboard;
                    const categoryColor = safetyCategoriesMap[measure.category]?.color || 'text-gray-500';
                    
                    return (
                      <div 
                        key={measure.id} 
                        className="bg-white shadow rounded-lg p-4 border border-gray-200 hover:bg-sky-50 transition-colors duration-150"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex items-start space-x-4">
                            <div className={`mt-1 ${categoryColor}`}>
                              <CategoryIcon className="w-5 h-5" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{measure.title}</h3>
                              <p className="text-sm text-gray-500 mt-1">
                                {safetyCategoriesMap[measure.category]?.label}
                              </p>
                              {measure.description && (
                                <p className="text-sm text-gray-600 mt-2">{measure.description}</p>
                              )}
                              {measure.corrective_action && (
                                <div className="mt-2 p-2 bg-green-50 text-green-800 text-sm rounded">
                                  <strong>Action corrective :</strong> {measure.corrective_action}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-gray-500">
                              {new Date(measure.implementation_date).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 flex justify-between items-center">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            measure.priority === 'high' ? 'bg-red-100 text-red-800' :
                            measure.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {measure.priority === 'high' ? 'Haute priorité' : 
                             measure.priority === 'medium' ? 'Priorité moyenne' : 'Basse priorité'}
                          </span>
                          
                          <div className="flex space-x-2">
                            <button
                              onClick={() => editMeasure(measure)}
                              className="text-sky-600 hover:text-sky-800 p-1 rounded-full hover:bg-sky-50"
                              title="Modifier"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => confirmDelete(measure)}
                              className="text-red-600 hover:text-red-800 p-1 rounded-full hover:bg-red-50"
                              title="Supprimer"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => toggleStatus(measure)}
                              className="flex items-center text-sm bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 text-white px-3 py-1 rounded-lg shadow-sm"
                            >
                              <Move className="w-4 h-4 mr-1" />
                              Revenir
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



import { useEffect } from 'react';

 function Modal({ children, show = false, maxWidth = '2xl', onClose = () => {} }) {
    const maxWidthClass = {
        sm: 'sm:max-w-sm',
        md: 'sm:max-w-md',
        lg: 'sm:max-w-lg',
        xl: 'sm:max-w-xl',
        '2xl': 'sm:max-w-2xl',
    }[maxWidth];

    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [show]);

    if (!show) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0">
            <div className="fixed inset-0 transform transition-all" onClick={onClose}>
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div className={`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${maxWidthClass}`}>
                {children}
            </div>
        </div>
    );
}
function DangerButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}


function SecondaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}