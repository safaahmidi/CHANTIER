// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { PlusCircle, Trash, Calendar, File, Check, X, Edit, ChevronDown, Copy, Users, Shield, Package, Menu } from "lucide-react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { Link, router } from '@inertiajs/react';

// const TaskManagement = ({ project, defaultStatusOptions, defaultPriorityOptions }) => {
//     console.log(project);

//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [phases, setPhases] = useState(project.phases ? project.phases.map(phase => ({
//         id: phase.id,
//         name: phase.name,
//         order: phase.order,
//         tasks: phase.tasks ? phase.tasks.map(task => ({
//             id: task.id,
//             title: task.name, // Using 'name' from DB as 'title' in frontend
//             remarks: task.remarks,
//             status: task.status,
//             priority: task.priority,
//             startDate: task.start_date ? new Date(task.start_date) : new Date(),
//             endDate: task.end_date ? new Date(task.end_date) : new Date(),
//             files: task.files ? JSON.parse(task.files) : [],
//             phase_id: task.phase_id
//         })) : []
//     })) : []);

//     const [isAddingTask, setIsAddingTask] = useState(false);
//     const [newTask, setNewTask] = useState({
//         title: "",
//         remarks: "",
//         status: "À faire",
//         priority: "Moyenne",
//         startDate: new Date(),
//         endDate: new Date(),
//         files: [],
//         phaseId: phases[0]?.id || null,
//     });

//     const [isStatusOpen, setIsStatusOpen] = useState(false);
//     const [isPriorityOpen, setIsPriorityOpen] = useState(false);
//     const [editingTaskId, setEditingTaskId] = useState(null);
//     const [customStatus, setCustomStatus] = useState("");
//     const [customPriority, setCustomPriority] = useState("");
//     const [editingPhaseId, setEditingPhaseId] = useState(null);
//     const [newPhaseName, setNewPhaseName] = useState("");

//     const [statusOptions, setStatusOptions] = useState(defaultStatusOptions);
//     const [priorityOptions, setPriorityOptions] = useState(defaultPriorityOptions);

//     // Add a new phase
//     const addPhase = () => {
//         if (!newPhaseName) return;
//         const tempPhase = {
//             id: Date.now(), // Temporary ID
//             name: newPhaseName,
//             order: phases.length,
//             tasks: []
//         };

//         // Optimistically update the UI
//         setPhases([...phases, tempPhase]);
//         setNewPhaseName("");
//         router.post(route('phases.store'), {
//             project_id: project.id,
//             name: newPhaseName
//         }, {
//             onSuccess: () => {
//                 setNewPhaseName("");
//             },
//             onError: (errors) => {
//                 console.error('Error creating phase:', errors);
//             }
//         });
//     };

//     // Rename a phase
//     const renamePhase = (phaseId, newName) => {
//         if (!newName) return;

//         router.put(route('phases.update', { phase: phaseId }), {
//             name: newName
//         }, {
//             onSuccess: () => {
//                 setEditingPhaseId(null);
//             },
//             onError: (errors) => {
//                 console.error('Error updating phase:', errors);
//             }
//         });
//     };

//     // Duplicate a phase
//     const duplicatePhase = (phaseId) => {
//         router.post(route('phases.duplicate', { phase: phaseId }), {}, {
//             onSuccess: () => {
//                 // Page will reload with new phase
//             },
//             onError: (errors) => {
//                 console.error('Error duplicating phase:', errors);
//             }
//         });
//     };

//     // Add a new task
//     // const addTask = () => {
//     //     if (!newTask.title || !newTask.phaseId) return;

//     //     // Optimistic UI update
//     //     const tempTask = {
//     //         id: Date.now(), // Temporary ID
//     //         title: newTask.title,
//     //         remarks: newTask.remarks,
//     //         status: newTask.status,
//     //         priority: newTask.priority,
//     //         startDate: newTask.startDate,
//     //         endDate: newTask.endDate,
//     //         files: newTask.files,
//     //         phase_id: newTask.phaseId
//     //     };

//     //     setPhases(prevPhases =>
//     //         prevPhases.map(phase =>
//     //             phase.id === newTask.phaseId
//     //                 ? { ...phase, tasks: [...phase.tasks, tempTask] }
//     //                 : phase
//     //         )
//     //     );

//     //     // Reset form
//     //     setIsAddingTask(false);
//     //     setNewTask({
//     //         title: "",
//     //         remarks: "",
//     //         status: "À faire",
//     //         priority: "Moyenne",
//     //         startDate: new Date(),
//     //         endDate: new Date(),
//     //         files: [],
//     //         phaseId: newTask.phaseId,
//     //     });

//     //     // Send to server
//     //     router.post(route('tasks.store', {
//     //         project: project.id,
//     //         phase: newTask.phaseId
//     //     }), {
//     //         name: newTask.title,
//     //         remarks: newTask.remarks,
//     //         status: newTask.status,
//     //         priority: newTask.priority,
//     //         start_date: newTask.startDate.toISOString().split('T')[0],
//     //         end_date: newTask.endDate.toISOString().split('T')[0],
//     //         files: JSON.stringify(newTask.files.map(file => ({
//     //             name: file.name,
//     //             size: file.size,
//     //             type: file.type
//     //         })))
//     //     }, {
//     //         onSuccess: () => {
//     //             // The page will reload with the real data
//     //         },
//     //         onError: (errors) => {
//     //             // Rollback optimistic update
//     //             setPhases(prevPhases =>
//     //                 prevPhases.map(phase =>
//     //                     phase.id === newTask.phaseId
//     //                         ? {
//     //                             ...phase,
//     //                             tasks: phase.tasks.filter(t => t.id !== tempTask.id)
//     //                         }
//     //                         : phase
//     //                 )
//     //             );
//     //             console.error('Error creating task:', errors);
//     //         }
//     //     });
//     // };

//     ///methode debut

//     const addTask = () => {
//         console.log('entre ');
//         console.log(newTask);
//         if (!newTask.title || !newTask.phaseId) return console.log(newTask);
//         ;

//         // Envoyer directement au backend sans ID temporaire
//         router.post(route('tasks.store', {
//             phase: newTask.phaseId,
//             project : project.id
//         }), {
//             name: newTask.title,
//             remarks: newTask.remarks,
//             status: newTask.status,
//             priority: newTask.priority,
//             start_date: newTask.startDate.toISOString().split('T')[0],
//             end_date: newTask.endDate.toISOString().split('T')[0],
//             files: JSON.stringify(newTask.files.map(file => ({
//                 name: file.name,
//                 size: file.size,
//                 type: file.type
//             })))
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
//                 // Recharger les données fraîches du backend
//                 router.reload();
//             },
//             onError: (errors) => {
//                 console.error('Error creating task:', errors);
//             }
//         });
//     };

//     // Update a task
//     // const saveTask = () => {
//     //     if (!newTask.title) return;

//     //     router.put(route('tasks.update', { task: editingTaskId }), {
//     //         name: newTask.title,
//     //         remarks: newTask.remarks,
//     //         status: newTask.status,
//     //         priority: newTask.priority,
//     //         start_date: newTask.startDate.toISOString().split('T')[0],
//     //         end_date: newTask.endDate.toISOString().split('T')[0],
//     //         files: JSON.stringify(newTask.files.map(file => ({
//     //             name: file.name,
//     //             size: file.size,
//     //             type: file.type
//     //         })))
//     //     }, {
//     //         onSuccess: () => {
//     //             setEditingTaskId(null);
//     //             setNewTask({
//     //                 title: "",
//     //                 remarks: "",
//     //                 status: "À faire",
//     //                 priority: "Moyenne",
//     //                 startDate: new Date(),
//     //                 endDate: new Date(),
//     //                 files: [],
//     //                 phaseId: newTask.phaseId,
//     //             });
//     //         },
//     //         onError: (errors) => {
//     //             console.error('Error updating task:', errors);
//     //         }
//     //     });
//     // };
//     const saveTask = () => {
//         if (!newTask.title || !editingTaskId) {
//             console.error('Missing title or editingTaskId');
//             return;
//         }

//         // 1. Optimistically update the UI
//         setPhases(prevPhases =>
//             prevPhases.map(phase => ({
//                 ...phase,
//                 tasks: phase.tasks.map(task =>
//                     task.id === editingTaskId ? {
//                         ...task,
//                         title: newTask.title,
//                         remarks: newTask.remarks,
//                         status: newTask.status,
//                         priority: newTask.priority,
//                         startDate: newTask.startDate,
//                         endDate: newTask.endDate,
//                         files: newTask.files
//                     } : task
//                 )
//             }))
//         );

//         // 2. Send the update to the server
//         router.put(route('tasks.update', { task: editingTaskId }), {
//             name: newTask.title,
//             remarks: newTask.remarks,
//             status: newTask.status,
//             priority: newTask.priority,
//             start_date: newTask.startDate.toISOString().split('T')[0],
//             end_date: newTask.endDate.toISOString().split('T')[0],
//             files: JSON.stringify(newTask.files.map(file => ({
//                 name: file.name,
//                 size: file.size,
//                 type: file.type
//             }))),
//             phase_id: newTask.phaseId
//         }, {
//             onSuccess: () => {
//                 // 3a. Success - just reset the editing state
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
//             },
//             onError: (errors) => {
//                 // 3b. Error - revert the optimistic update
//                 console.error('Error updating task:', errors);
//                 router.reload({ only: ['project'], preserveScroll: true });
//             },
//             preserveScroll: true
//         });
//     };

//     // Delete a task
//     const deleteTask = (taskId) => {
//         if (confirm('Are you sure you want to delete this task?')) {
//             router.delete(route('tasks.destroy', { task: taskId }), {
//                 onError: (errors) => {
//                     console.error('Error deleting task:', errors);
//                 }
//             });
//         }
//     };

//     // Handle file upload
//     const handleFileUpload = (e) => {
//         const files = Array.from(e.target.files);
//         setNewTask({ ...newTask, files: [...newTask.files, ...files] });
//     };

//     // Edit a task
//     const editTask = (task) => {
//         setEditingTaskId(task.id);
//         setNewTask({
//             title: task.title,
//             remarks: task.remarks,
//             status: task.status,
//             priority: task.priority,
//             startDate: new Date(task.startDate),
//             endDate: new Date(task.endDate),
//             files: task.files,
//             phaseId: task.phase_id
//         });
//     };

//     // Add custom status
//     const addCustomStatus = () => {
//         if (customStatus) {
//             setStatusOptions([...statusOptions, { value: customStatus, color: "bg-gray-500" }]);
//             setNewTask({ ...newTask, status: customStatus });
//             setCustomStatus("");
//             setIsStatusOpen(false);
//         }
//     };

//     // Add custom priority
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
//                                 {/* <Link
//                                     href={route('workers.attendance', { id: project.id })}
//                                     className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
//                                 >
//                                     <Users className="w-5 h-5 mr-2" />
//                                     Ouvriers
//                                 </Link> */}
//                                 <Link
//                                     href={route('projects.safety-measures.index', { id: project.id })}
//                                     className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
//                                 >
//                                     <Shield className="w-5 h-5 mr-2" />
//                                     Sécurité
//                                 </Link>
//                                 <Link
//         href={route('projects.workers', { id: project.id })}
//         className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
//     >
//         <Users className="w-5 h-5 mr-2" />
//         Ouvriers
//     </Link>
//                                 {/* <Link
//     href={route('resources.index')}
//     className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
// >
//     <Package className="w-5 h-5 mr-2" />
//     Ressources
// </Link> */}
// {/* <Link
//     href={route('ressources.index1')}
//     className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
// >
//     <Package className="w-5 h-5 mr-2" />
//     Ressources
// </Link> */}

//                             </div>
//                         )}
//                     </div>

//                     <input
//                         type="text"
//                         placeholder="Nom de la phase"
//                         value={newPhaseName}
//                         onChange={(e) => setNewPhaseName(e.target.value)}
//                         className="p-2 border border-gray-300 rounded-lg"
//                         onKeyDown={(e) => e.key === 'Enter' && addPhase()}
//                     />
//                     <button
//                         onClick={addPhase}
//                         className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//                     >
//                         <PlusCircle className="w-5 h-5 mr-2" /> Ajouter Phase
//                     </button>
//                 </div>
//             </div>

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
//                                     onKeyDown={(e) => e.key === 'Enter' && renamePhase(phase.id, e.target.value)}
//                                     onBlur={() => setEditingPhaseId(null)}
//                                     autoFocus
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
//                                                                 onKeyDown={(e) => e.key === 'Enter' && addCustomStatus()}
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
//                                                                 onKeyDown={(e) => e.key === 'Enter' && addCustomPriority()}
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
//                                                 dateFormat="dd/MM/yyyy"
//                                             />
//                                         </td>
//                                         <td className="p-2">
//                                             <DatePicker
//                                                 selected={newTask.endDate}
//                                                 onChange={(date) => setNewTask({ ...newTask, endDate: date })}
//                                                 className="p-2 border border-gray-300 rounded-lg w-full"
//                                                 dateFormat="dd/MM/yyyy"
//                                                 minDate={newTask.startDate}
//                                             />
//                                         </td>
//                                         <td className="p-2">
//                                             <label className="flex items-center cursor-pointer">
//                                                 <File className="w-5 h-5 mr-2" />
//                                                 <input
//                                                     type="file"
//                                                     multiple
//                                                     onChange={handleFileUpload}
//                                                     className="hidden"
//                                                 />
//                                                 Ajouter des fichiers
//                                             </label>
//                                             {newTask.files.length > 0 && (
//                                                 <div className="mt-2">
//                                                     {newTask.files.map((file, index) => (
//                                                         <div key={index} className="text-sm text-gray-600">
//                                                             {file.name}
//                                                         </div>
//                                                     ))}
//                                                 </div>
//                                             )}
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
//                                                     autoFocus
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
//                                             {editingTaskId === task.id ? (
//                                                 <div
//                                                     onClick={() => setIsStatusOpen(!isStatusOpen)}
//                                                     className="p-2 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-between"
//                                                 >
//                                                     <span
//                                                         className={`px-2 py-1 rounded-full text-white ${
//                                                             statusOptions.find((opt) => opt.value === newTask.status)?.color
//                                                         }`}
//                                                     >
//                                                         {newTask.status}
//                                                     </span>
//                                                     <ChevronDown className="w-4 h-4" />
//                                                 </div>
//                                             ) : (
//                                                 <span
//                                                     className={`px-2 py-1 rounded-full text-white ${
//                                                         statusOptions.find((opt) => opt.value === task.status)?.color
//                                                     }`}
//                                                 >
//                                                     {task.status}
//                                                 </span>
//                                             )}
//                                         </td>
//                                         <td className="p-2">
//                                             {editingTaskId === task.id ? (
//                                                 <div
//                                                     onClick={() => setIsPriorityOpen(!isPriorityOpen)}
//                                                     className="p-2 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-between"
//                                                 >
//                                                     <span
//                                                         className={`px-2 py-1 rounded-full text-white ${
//                                                             priorityOptions.find((opt) => opt.value === newTask.priority)?.color
//                                                         }`}
//                                                     >
//                                                         {newTask.priority}
//                                                     </span>
//                                                     <ChevronDown className="w-4 h-4" />
//                                                 </div>
//                                             ) : (
//                                                 <span
//                                                     className={`px-2 py-1 rounded-full text-white ${
//                                                         priorityOptions.find((opt) => opt.value === task.priority)?.color
//                                                     }`}
//                                                 >
//                                                     {task.priority}
//                                                 </span>
//                                             )}
//                                         </td>
//                                         <td className="p-2">
//                                             {editingTaskId === task.id ? (
//                                                 <DatePicker
//                                                     selected={newTask.startDate}
//                                                     onChange={(date) => setNewTask({ ...newTask, startDate: date })}
//                                                     className="p-2 border border-gray-300 rounded-lg w-full"
//                                                     dateFormat="dd/MM/yyyy"
//                                                 />
//                                             ) : (
//                                                 task.startDate.toLocaleDateString()
//                                             )}
//                                         </td>
//                                         <td className="p-2">
//                                             {editingTaskId === task.id ? (
//                                                 <DatePicker
//                                                     selected={newTask.endDate}
//                                                     onChange={(date) => setNewTask({ ...newTask, endDate: date })}
//                                                     className="p-2 border border-gray-300 rounded-lg w-full"
//                                                     dateFormat="dd/MM/yyyy"
//                                                     minDate={newTask.startDate}
//                                                 />
//                                             ) : (
//                                                 task.endDate.toLocaleDateString()
//                                             )}
//                                         </td>
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
//                                                 <>
//                                                     <button
//                                                         onClick={saveTask}
//                                                         className="text-green-500 hover:text-green-700 mr-2"
//                                                     >
//                                                         <Check className="w-5 h-5" />
//                                                     </button>
//                                                     <button
//                                                         onClick={() => setEditingTaskId(null)}
//                                                         className="text-red-500 hover:text-red-700"
//                                                     >
//                                                         <X className="w-5 h-5" />
//                                                     </button>
//                                                 </>
//                                             ) : (
//                                                 <>
//                                                     <button
//                                                         onClick={() => editTask(task)}
//                                                         className="text-blue-500 hover:text-blue-700 mr-2"
//                                                     >
//                                                         <Edit className="w-5 h-5" />
//                                                     </button>
//                                                     <button
//                                                         onClick={() => deleteTask(task.id)}
//                                                         className="text-red-500 hover:text-red-700"
//                                                     >
//                                                         <Trash className="w-5 h-5" />
//                                                     </button>
//                                                 </>
//                                             )}
//                                         </td>
//                                     </motion.tr>
//                                 ))}
//                             </tbody>
//                         </table>

//                         <div className="mt-4">
//                             <button
//                                 onClick={() => {
//                                     setNewTask({
//                                         ...newTask,
//                                         phaseId: phase.id,
//                                         files: []
//                                     });
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







//code bien manfltoch  ghir sans alerte //SANS SUPPRIMER PHASE ET ORDRE PHASE+MODIF TASK CHANGE JUSTE TITLE ET REMARQUE 

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//     PlusCircle,
//     Trash,
//     Calendar,
//     File,
//     Check,
//     X,
//     Edit,
//     ChevronDown,
//     Copy,
//     Users,
//     Shield,
//     Package,
//     Menu,
//     LogOut
// } from "lucide-react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { Link, router } from "@inertiajs/react";

// const TaskManagement = ({
//     project,
//     defaultStatusOptions,
//     defaultPriorityOptions,
// }) => {
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [phases, setPhases] = useState(
//         project.phases
//             ? project.phases.map((phase) => ({
//                   id: phase.id,
//                   name: phase.name,
//                   order: phase.order,
//                   tasks: phase.tasks
//                       ? phase.tasks.map((task) => ({
//                             id: task.id,
//                             title: task.name,
//                             remarks: task.remarks,
//                             status: task.status,
//                             priority: task.priority,
//                             startDate: task.start_date
//                                 ? new Date(task.start_date)
//                                 : new Date(),
//                             endDate: task.end_date
//                                 ? new Date(task.end_date)
//                                 : new Date(),
//                             files: task.files ? JSON.parse(task.files) : [],
//                             phase_id: task.phase_id,
//                         }))
//                       : [],
//               }))
//             : []
//     );

//     const [isAddingTask, setIsAddingTask] = useState(false);
//     const [newTask, setNewTask] = useState({
//         title: "",
//         remarks: "",
//         status: "À faire",
//         priority: "Moyenne",
//         startDate: new Date(),
//         endDate: new Date(),
//         files: [],
//         phaseId: phases[0]?.id || null,
//     });

//     const [form, setForm] = useState(false);
//     const [isStatusOpen, setIsStatusOpen] = useState(false);
//     const [isPriorityOpen, setIsPriorityOpen] = useState(false);
//     const [editingTaskId, setEditingTaskId] = useState(null);
//     const [customStatus, setCustomStatus] = useState("");
//     const [customPriority, setCustomPriority] = useState("");
//     const [editingPhaseId, setEditingPhaseId] = useState(null);
//     const [newPhaseName, setNewPhaseName] = useState("");
//     const [phaseName, setPhase] = useState("");
//     const [statusOptions, setStatusOptions] = useState(defaultStatusOptions);
//     const [priorityOptions, setPriorityOptions] = useState(
//         defaultPriorityOptions
//     );

//     const addPhase = () => {
//         if (!newPhaseName) return;
//         const tempPhase = {
//             id: Date.now(),
//             name: newPhaseName,
//             order: phases.length,
//             tasks: [],
//         };

//         setPhases([...phases, tempPhase]);
//         setNewPhaseName("");
//         router.post(
//             route("phases.store"),
//             {
//                 project_id: project.id,
//                 name: newPhaseName,
//             },
//             {
//                 onSuccess: () => {
//                     setNewPhaseName("");
//                 },
//                 onError: (errors) => {
//                     console.error("Error creating phase:", errors);
//                 },
//             }
//         );
//     };

//     const renamePhase = (phaseId) => {
//         if (!phaseName) return;

//         router.put(
//             route("phases.update", { phase: phaseId }),
//             {
//                 name: phaseName,
//             },
//             {
//                 onSuccess: () => {
//                     setEditingPhaseId(null);
//                 },
//                 onError: (errors) => {
//                     console.error("Error updating phase:", errors);
//                 },
//             }
//         );
//     };

//     // const duplicatePhase = (phaseId) => {
//     //     router.post(route('phases.duplicate', { phase: phaseId }), {}, {
//     //         onSuccess: () => {},
//     //         onError: (errors) => {
//     //             console.error('Error duplicating phase:', errors);
//     //         }
//     //     });
//     // };

//     const addTask = () => {
//         if (!newTask.title || !newTask.phaseId) return;

//         router.post(
//             route("tasks.store", {
//                 phase: newTask.phaseId,
//                 project: project.id,
//             }),
//             {
//                 name: newTask.title,
//                 remarks: newTask.remarks,
//                 status: newTask.status,
//                 priority: newTask.priority,
//                 start_date: newTask.startDate.toISOString().split("T")[0],
//                 end_date: newTask.endDate.toISOString().split("T")[0],
//                 files: JSON.stringify(
//                     newTask.files.map((file) => ({
//                         name: file.name,
//                         size: file.size,
//                         type: file.type,
//                     }))
//                 ),
//             },
//             {
//                 onSuccess: () => {
//                     setIsAddingTask(false);
//                     setNewTask({
//                         title: "",
//                         remarks: "",
//                         status: "À faire",
//                         priority: "Moyenne",
//                         startDate: new Date(),
//                         endDate: new Date(),
//                         files: [],
//                         phaseId: newTask.phaseId,
//                     });
//                     router.reload();
//                 },
//                 onError: (errors) => {
//                     console.error("Error creating task:", errors);
//                 },
//             }
//         );
//     };

//     const saveTask = () => {
//         if (!newTask.title || !editingTaskId) {
//             console.error("Missing title or editingTaskId");
//             return;
//         }

//         setPhases((prevPhases) =>
//             prevPhases.map((phase) => ({
//                 ...phase,
//                 tasks: phase.tasks.map((task) =>
//                     task.id === editingTaskId
//                         ? {
//                               ...task,
//                               title: newTask.title,
//                               remarks: newTask.remarks,
//                               status: newTask.status,
//                               priority: newTask.priority,
//                               startDate: newTask.startDate,
//                               endDate: newTask.endDate,
//                               files: newTask.files,
//                           }
//                         : task
//                 ),
//             }))
//         );

//         router.put(
//             route("tasks.update", { id: project.id, taskId: editingTaskId }),
//             {
//                 name: newTask.title,
//                 remarks: newTask.remarks,
//                 status: newTask.status,
//                 priority: newTask.priority,
//                 start_date: newTask.startDate.toISOString().split("T")[0],
//                 end_date: newTask.endDate.toISOString().split("T")[0],
//                 files: JSON.stringify(
//                     newTask.files.map((file) => ({
//                         name: file.name,
//                         size: file.size,
//                         type: file.type,
//                     }))
//                 ),
//                 phase_id: newTask.phaseId,
//             },
//             {
//                 onSuccess: () => {
//                     setEditingTaskId(null);
//                     setNewTask({
//                         title: "",
//                         remarks: "",
//                         status: "À faire",
//                         priority: "Moyenne",
//                         startDate: new Date(),
//                         endDate: new Date(),
//                         files: [],
//                         phaseId: newTask.phaseId,
//                     });
//                 },
//                 onError: (errors) => {
//                     console.error("Error updating task:", errors);
//                     router.reload({ only: ["project"], preserveScroll: true });
//                 },
//                 preserveScroll: true,
//             }
//         );
//     };

//     const deleteTask = (taskId) => {
//         if (confirm("Are you sure you want to delete this task?")) {
//             router.delete(route("tasks.destroy", { id: project.id, taskId }), {
//                 onError: (errors) => {
//                     console.error("Error deleting task:", errors);
//                 },
//             });
//         }
//     };

//     const handleFileUpload = (e) => {
//         const files = Array.from(e.target.files);
//         setNewTask({ ...newTask, files: [...newTask.files, ...files] });
//     };

//     const editTask = (task) => {
//         setEditingTaskId(task.id);
//         setNewTask({
//             title: task.title,
//             remarks: task.remarks,
//             status: task.status,
//             priority: task.priority,
//             startDate: new Date(task.startDate),
//             endDate: new Date(task.endDate),
//             files: task.files,
//             phaseId: task.phase_id,
//         });
//     };

//     const addCustomStatus = () => {
//         if (customStatus) {
//             setStatusOptions([
//                 ...statusOptions,
//                 { value: customStatus, color: "bg-gray-500" },
//             ]);
//             setNewTask({ ...newTask, status: customStatus });
//             setCustomStatus("");
//             setIsStatusOpen(false);
//         }
//     };

//     const addCustomPriority = () => {
//         if (customPriority) {
//             setPriorityOptions([
//                 ...priorityOptions,
//                 { value: customPriority, color: "bg-gray-500" },
//             ]);
//             setNewTask({ ...newTask, priority: customPriority });
//             setCustomPriority("");
//             setIsPriorityOpen(false);
//         }
//         // --- AJOUTER CETTE FONCTION ---
//     /**
//      * Calcule l'état d'avancement d'une tâche
//      * @param {Object} task - La tâche à analyser
//      * @returns {Object} { progress: number, isLate: boolean, daysLate: number }
//      */
//     const getTaskProgress = (task) => {
//         const today = new Date();
//         const endDate = new Date(task.endDate);
//         const startDate = new Date(task.startDate);
        
//         const totalDays = Math.max(1, (endDate - startDate) / (1000 * 60 * 60 * 24));
//         const daysElapsed = Math.max(0, (today - startDate) / (1000 * 60 * 60 * 24));
        
//         const progress = Math.min(100, (daysElapsed / totalDays) * 100);
//         const isLate = today > endDate && task.status !== "Terminé";
//         const daysLate = isLate ? Math.floor((today - endDate) / (1000 * 60 * 60 * 24)) : 0;
        
//         return { progress, isLate, daysLate };
//     };



   
//     };

//     // Worker illustration for tasks
//     const renderTaskIllustration = () => {
//         return (
//             <div className="bg-white border border-gray-100 rounded-lg p-3 mb-3 relative overflow-hidden shadow-sm">
//                 <div className="flex items-center justify-between h-16">
//                     {/* Clipboard */}
//                     <div className="w-10 h-12 bg-gray-200 rounded-md shadow-sm relative">
//                         <div className="absolute top-2 left-2 w-6 h-1 bg-gray-400"></div>
//                         <div className="absolute top-4 left-2 w-6 h-1 bg-gray-400"></div>
//                         <div className="absolute top-6 left-2 w-6 h-1 bg-gray-400"></div>
//                     </div>

//                     {/* Calendar */}
//                     <div className="w-12 h-12 bg-sky-100 rounded-md shadow-sm relative flex items-center justify-center">
//                         <div className="text-sky-700 font-bold">31</div>
//                     </div>

//                     {/* Task icon */}
//                     <div className="w-12 h-12 relative">
//                         <div className="absolute bottom-0 left-0 w-2 h-8 bg-gray-700 transform rotate-12"></div>
//                         <div className="absolute top-1 left-2 w-6 h-3 bg-green-500 rounded"></div>
//                     </div>
//                 </div>

//                 {/* Small decorative elements */}
//                 <div className="absolute bottom-1 left-1 w-2 h-2 bg-sky-500 rounded-full opacity-50"></div>
//                 <div className="absolute top-1 right-1 w-3 h-3 bg-black rounded-full opacity-30"></div>
//             </div>
//         );
//     };

//     return (
//         <div className="container mx-auto p-6 bg-gray-50">
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
//                 {/* Header */}
//                 <div className="bg-gradient-to-r from-sky-400 to-black p-6 flex justify-between items-center">
//                     <div className="flex items-center">
//                         <div className="bg-white p-3 rounded-full mr-4 shadow">
//                             <Package className="text-sky-500" size={28} />
//                         </div>
//                         <h1 className="text-3xl font-bold text-white">
//                             Gestion des Tâches - {project.name}
//                         </h1>
//                     </div>
//                     <div className="flex space-x-3">
//                         <button
//                             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                             className="flex items-center bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-lg transition-colors shadow"
//                         >
//                             <Menu className="w-5 h-5 mr-2" /> Menu
//                         </button>

//                         {isDropdownOpen && (
//                             <div className="absolute right-6 mt-12 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
//                                 {/* Lien vers la page Projet */}
//                                 <Link
//                                     href={route("dashboard")} // Utilise la route '/dashboard'
//                                     className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
//                                 >
//                                     <Package className="w-5 h-5 mr-2" />
//                                     Projet
//                                 </Link>
//                                 <Link
//                                     href={route(
//                                         "projects.safety-measures.index",
//                                         { id: project.id }
//                                     )}
//                                     className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
//                                 >
//                                     <Shield className="w-5 h-5 mr-2" />
//                                     Sécurité
//                                 </Link>
//                                 <Link
//                                     href={route("projects.workers", {
//                                         id: project.id,
//                                     })}
//                                     className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
//                                 >
//                                     <Users className="w-5 h-5 mr-2" />
//                                     Ouvriers
//                                 </Link>
//                                  {/* Bouton de déconnexion avec la même structure */}
//                             <button
//                                 onClick={() => {
//                                     router.post(route('logout'));
//                                 }}
//                                 className="w-full text-left flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
//                             >
//                                 <LogOut className="w-5 h-5 mr-2" />
//                                 Déconnexion
//                             </button>
//                             </div>
//                         )}
//                     </div>
//                 </div>

//                 <div className="p-6">
//                     {/* Task Illustration */}
//                     {/* <div className="mb-6">
//                         {renderTaskIllustration()}
//                     </div> */}

//                     <AnimatePresence>
//                         {form && (
//                             <motion.div
//                                 className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 exit={{ opacity: 0 }}
//                                 transition={{ duration: 0.3 }}
//                             >
//                                 <motion.form
//                                     className="bg-white p-6 rounded-lg w-full max-w-md"
//                                     initial={{ opacity: 0, y: -20 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     exit={{ opacity: 0, y: -20 }}
//                                     transition={{ duration: 0.3 }}
//                                 >
//                                     <h2 className="text-xl font-semibold mb-4">
//                                         Ajouter une phase
//                                     </h2>

//                                     <div className="mb-4">
//                                         <label className="block font-semibold">
//                                             Nom du Module :
//                                         </label>
//                                         {/* className="w-full p-2 border rounded" */}
//                                         <input
//                                             type="text"
//                                             placeholder="Nom de la phase"
//                                             value={newPhaseName}
//                                             onChange={(e) =>
//                                                 setNewPhaseName(e.target.value)
//                                             }
//                                             className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-gray-50 p-2"
//                                             onKeyDown={(e) =>
//                                                 e.key === "Enter" && addPhase()
//                                             }
//                                         />
//                                     </div>

//                                     <div className="flex justify-end gap-2">
//                                         <motion.button
//                                             type="button"
//                                             className="px-4 py-2 bg-gray-500 text-white rounded"
//                                             whileHover={{ scale: 1.05 }}
//                                             whileTap={{ scale: 0.95 }}
//                                             onClick={() => setForm(false)}
//                                         >
//                                             Annuler
//                                         </motion.button>
//                                         <motion.button
//                                             onClick={addPhase}
//                                             type="submit"
//                                             className="px-4 py-2 bg-blue-500 text-white rounded"
//                                             whileHover={{ scale: 1.05 }}
//                                             whileTap={{ scale: 0.95 }}
//                                         >
//                                             {" "}
//                                             Ajouter
//                                         </motion.button>
//                                     </div>
//                                 </motion.form>
//                             </motion.div>
//                         )}
//                     </AnimatePresence>
//                     <button
//                         onClick={() => setForm(!form)}
//                         className="bg-gradient-to-r from-sky-400 to-black hover:from-sky-500 hover:to-black text-white px-5 py-2 rounded-lg flex items-center transition-colors shadow-md"
//                     >
//                         <PlusCircle className="w-5 h-5 mr-2" /> Ajouter Phase
//                     </button>
//                     {/* {form &&(                 
//                     <div className="mb-8 bg-white p-6 rounded-lg shadow-md border-l-4 border-sky-400">
//                         <h2 className="text-xl font-semibold text-gray-800 mb-4">Ajouter une phase</h2>
//                         <div className="flex items-center space-x-4">
//                             <input
//                                 type="text"
//                                 placeholder="Nom de la phase"
//                                 value={newPhaseName}
//                                 onChange={(e) => setNewPhaseName(e.target.value)}
//                                 className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-gray-50 p-2"
//                                 onKeyDown={(e) => e.key === 'Enter' && addPhase()}
//                             />
//                             <button
//                                 onClick={addPhase}
//                                 className="bg-gradient-to-r from-sky-400 to-black hover:from-sky-500 hover:to-black text-white px-5 py-2 rounded-lg flex items-center transition-colors shadow-md"
//                             >
//                                 <PlusCircle className="w-5 h-5 mr-2" /> Ajouter Phase
//                             </button>
//                         </div>
//                     </div>
//                     )}   */}

//                     {/* Phases List */}
//                     <div className="space-y-6">
//                         {phases.map((phase) => (
//                             <motion.div
//                                 key={phase.id}
//                                 initial={{ opacity: 0, y: 10 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 className="bg-white rounded-lg shadow-md border border-gray-200 p-6"
//                             >
//                                 <div className="flex justify-between items-center mb-4">
//                                     {editingPhaseId === phase.id ? (
//                                         <input
//                                             type="text"
//                                             value={phaseName}
//                                             onChange={(e) =>
//                                                 setPhase(e.target.value)
//                                             }
//                                             className="p-2 border border-gray-300 rounded-lg w-full focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
//                                             onKeyDown={(e) =>
//                                                 e.key === "Enter" &&
//                                                 renamePhase(phase.id, phase)
//                                             }
//                                             onBlur={() =>
//                                                 setEditingPhaseId(null)
//                                             }
//                                             autoFocus
//                                         />
//                                     ) : (
//                                         <h3 className="text-lg font-semibold text-gray-800">
//                                             {phase.name}
//                                         </h3>
//                                     )}
//                                     <div className="flex space-x-2">
//                                         <button
//                                             onClick={() =>
//                                                 setEditingPhaseId(phase.id)
//                                             }
//                                             className="text-gray-700 hover:text-sky-600 p-2 rounded-full transition-colors hover:bg-sky-50"
//                                         >
//                                             <Edit className="w-5 h-5" />
//                                         </button>
//                                         {/* <button
//                                             onClick={() => duplicatePhase(phase.id)}
//                                             className="text-gray-700 hover:text-green-600 p-2 rounded-full transition-colors hover:bg-green-50"
//                                         >
//                                             <Copy className="w-5 h-5" />
//                                         </button> */}
//                                     </div>
//                                 </div>

//                                 <table className="w-full border-collapse">
//                                     <thead>
//                                         <tr className="bg-gradient-to-r from-sky-400 to-black text-white">
//                                             <th className="p-3 text-left">
//                                                 Tâche
//                                             </th>
//                                             <th className="p-3 text-left">
//                                                 Remarques
//                                             </th>
//                                             <th className="p-3 text-left">
//                                                 Statut
//                                             </th>
//                                             <th className="p-3 text-left">
//                                                 Priorité
//                                             </th>
//                                             <th className="p-3 text-left">
//                                                 Date de début
//                                             </th>
//                                             <th className="p-3 text-left">
//                                                 Date de fin
//                                             </th>
//                                             <th className="p-3 text-left">
//                                                 Fichiers
//                                             </th>
//                                             <th className="p-3 text-center">
//                                                 Actions
//                                             </th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {isAddingTask &&
//                                             newTask.phaseId === phase.id && (
//                                                 <motion.tr
//                                                     initial={{
//                                                         opacity: 0,
//                                                         y: 10,
//                                                     }}
//                                                     animate={{
//                                                         opacity: 1,
//                                                         y: 0,
//                                                     }}
//                                                     className="bg-gray-50"
//                                                 >
//                                                     <td className="p-3">
//                                                         <input
//                                                             type="text"
//                                                             placeholder="Titre de la tâche"
//                                                             value={
//                                                                 newTask.title
//                                                             }
//                                                             onChange={(e) =>
//                                                                 setNewTask({
//                                                                     ...newTask,
//                                                                     title: e
//                                                                         .target
//                                                                         .value,
//                                                                 })
//                                                             }
//                                                             className="p-2 border border-gray-300 rounded-lg w-full focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
//                                                         />
//                                                     </td>
//                                                     <td className="p-3">
//                                                         <input
//                                                             type="text"
//                                                             placeholder="Remarques"
//                                                             value={
//                                                                 newTask.remarks
//                                                             }
//                                                             onChange={(e) =>
//                                                                 setNewTask({
//                                                                     ...newTask,
//                                                                     remarks:
//                                                                         e.target
//                                                                             .value,
//                                                                 })
//                                                             }
//                                                             className="p-2 border border-gray-300 rounded-lg w-full focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
//                                                         />
//                                                     </td>
//                                                     <td className="p-3 relative">
//                                                         <div
//                                                             onClick={() =>
//                                                                 setIsStatusOpen(
//                                                                     !isStatusOpen
//                                                                 )
//                                                             }
//                                                             className="p-2 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-between focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
//                                                         >
//                                                             <span
//                                                                 className={`px-2 py-1 rounded-full text-white ${
//                                                                     statusOptions.find(
//                                                                         (opt) =>
//                                                                             opt.value ===
//                                                                             newTask.status
//                                                                     )?.color
//                                                                 }`}
//                                                             >
//                                                                 {newTask.status}
//                                                             </span>
//                                                             <ChevronDown className="w-4 h-4" />
//                                                         </div>
//                                                         <AnimatePresence>
//                                                             {isStatusOpen && (
//                                                                 <motion.div
//                                                                     initial={{
//                                                                         opacity: 0,
//                                                                         y: -10,
//                                                                     }}
//                                                                     animate={{
//                                                                         opacity: 1,
//                                                                         y: 0,
//                                                                     }}
//                                                                     exit={{
//                                                                         opacity: 0,
//                                                                         y: -10,
//                                                                     }}
//                                                                     className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg"
//                                                                 >
//                                                                     {statusOptions.map(
//                                                                         (
//                                                                             option
//                                                                         ) => (
//                                                                             <div
//                                                                                 key={
//                                                                                     option.value
//                                                                                 }
//                                                                                 onClick={() => {
//                                                                                     setNewTask(
//                                                                                         {
//                                                                                             ...newTask,
//                                                                                             status: option.value,
//                                                                                         }
//                                                                                     );
//                                                                                     setIsStatusOpen(
//                                                                                         false
//                                                                                     );
//                                                                                 }}
//                                                                                 className={`p-2 cursor-pointer hover:bg-gray-100 ${
//                                                                                     newTask.status ===
//                                                                                     option.value
//                                                                                         ? "bg-gray-100"
//                                                                                         : ""
//                                                                                 }`}
//                                                                             >
//                                                                                 <span
//                                                                                     className={`px-2 py-1 rounded-full text-white ${option.color}`}
//                                                                                 >
//                                                                                     {
//                                                                                         option.value
//                                                                                     }
//                                                                                 </span>
//                                                                             </div>
//                                                                         )
//                                                                     )}
//                                                                     <div className="p-2">
//                                                                         <input
//                                                                             type="text"
//                                                                             placeholder="Nouveau statut"
//                                                                             value={
//                                                                                 customStatus
//                                                                             }
//                                                                             onChange={(
//                                                                                 e
//                                                                             ) =>
//                                                                                 setCustomStatus(
//                                                                                     e
//                                                                                         .target
//                                                                                         .value
//                                                                                 )
//                                                                             }
//                                                                             className="p-2 border border-gray-300 rounded-lg w-full focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
//                                                                             onKeyDown={(
//                                                                                 e
//                                                                             ) =>
//                                                                                 e.key ===
//                                                                                     "Enter" &&
//                                                                                 addCustomStatus()
//                                                                             }
//                                                                         />
//                                                                         <button
//                                                                             onClick={
//                                                                                 addCustomStatus
//                                                                             }
//                                                                             className="mt-2 flex items-center bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors"
//                                                                         >
//                                                                             <PlusCircle className="w-5 h-5 mr-2" />{" "}
//                                                                             Ajouter
//                                                                         </button>
//                                                                     </div>
//                                                                 </motion.div>
//                                                             )}
//                                                         </AnimatePresence>
//                                                     </td>
//                                                     <td className="p-3 relative">
//                                                         <div
//                                                             onClick={() =>
//                                                                 setIsPriorityOpen(
//                                                                     !isPriorityOpen
//                                                                 )
//                                                             }
//                                                             className="p-2 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-between focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
//                                                         >
//                                                             <span
//                                                                 className={`px-2 py-1 rounded-full text-white ${
//                                                                     priorityOptions.find(
//                                                                         (opt) =>
//                                                                             opt.value ===
//                                                                             newTask.priority
//                                                                     )?.color
//                                                                 }`}
//                                                             >
//                                                                 {
//                                                                     newTask.priority
//                                                                 }
//                                                             </span>
//                                                             <ChevronDown className="w-4 h-4" />
//                                                         </div>
//                                                         <AnimatePresence>
//                                                             {isPriorityOpen && (
//                                                                 <motion.div
//                                                                     initial={{
//                                                                         opacity: 0,
//                                                                         y: -10,
//                                                                     }}
//                                                                     animate={{
//                                                                         opacity: 1,
//                                                                         y: 0,
//                                                                     }}
//                                                                     exit={{
//                                                                         opacity: 0,
//                                                                         y: -10,
//                                                                     }}
//                                                                     className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg"
//                                                                 >
//                                                                     {priorityOptions.map(
//                                                                         (
//                                                                             option
//                                                                         ) => (
//                                                                             <div
//                                                                                 key={
//                                                                                     option.value
//                                                                                 }
//                                                                                 onClick={() => {
//                                                                                     setNewTask(
//                                                                                         {
//                                                                                             ...newTask,
//                                                                                             priority:
//                                                                                                 option.value,
//                                                                                         }
//                                                                                     );
//                                                                                     setIsPriorityOpen(
//                                                                                         false
//                                                                                     );
//                                                                                 }}
//                                                                                 className={`p-2 cursor-pointer hover:bg-gray-100 ${
//                                                                                     newTask.priority ===
//                                                                                     option.value
//                                                                                         ? "bg-gray-100"
//                                                                                         : ""
//                                                                                 }`}
//                                                                             >
//                                                                                 <span
//                                                                                     className={`px-2 py-1 rounded-full text-white ${option.color}`}
//                                                                                 >
//                                                                                     {
//                                                                                         option.value
//                                                                                     }
//                                                                                 </span>
//                                                                             </div>
//                                                                         )
//                                                                     )}
//                                                                     <div className="p-2">
//                                                                         <input
//                                                                             type="text"
//                                                                             placeholder="Nouvelle priorité"
//                                                                             value={
//                                                                                 customPriority
//                                                                             }
//                                                                             onChange={(
//                                                                                 e
//                                                                             ) =>
//                                                                                 setCustomPriority(
//                                                                                     e
//                                                                                         .target
//                                                                                         .value
//                                                                                 )
//                                                                             }
//                                                                             className="p-2 border border-gray-300 rounded-lg w-full focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
//                                                                             onKeyDown={(
//                                                                                 e
//                                                                             ) =>
//                                                                                 e.key ===
//                                                                                     "Enter" &&
//                                                                                 addCustomPriority()
//                                                                             }
//                                                                         />
//                                                                         <button
//                                                                             onClick={
//                                                                                 addCustomPriority
//                                                                             }
//                                                                             className="mt-2 flex items-center bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors"
//                                                                         >
//                                                                             <PlusCircle className="w-5 h-5 mr-2" />{" "}
//                                                                             Ajouter
//                                                                         </button>
//                                                                     </div>
//                                                                 </motion.div>
//                                                             )}
//                                                         </AnimatePresence>
//                                                     </td>
//                                                     <td className="p-3">
//                                                         <DatePicker
//                                                             selected={
//                                                                 newTask.startDate
//                                                             }
//                                                             onChange={(date) =>
//                                                                 setNewTask({
//                                                                     ...newTask,
//                                                                     startDate:
//                                                                         date,
//                                                                 })
//                                                             }
//                                                             className="p-2 border border-gray-300 rounded-lg w-full focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
//                                                             dateFormat="dd/MM/yyyy"
//                                                         />
//                                                     </td>
//                                                     <td className="p-3">
//                                                         <DatePicker
//                                                             selected={
//                                                                 newTask.endDate
//                                                             }
//                                                             onChange={(date) =>
//                                                                 setNewTask({
//                                                                     ...newTask,
//                                                                     endDate:
//                                                                         date,
//                                                                 })
//                                                             }
//                                                             className="p-2 border border-gray-300 rounded-lg w-full focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
//                                                             dateFormat="dd/MM/yyyy"
//                                                             minDate={
//                                                                 newTask.startDate
//                                                             }
//                                                         />
//                                                     </td>
//                                                     <td className="p-3">
//                                                         <label className="flex items-center cursor-pointer">
//                                                             <File className="w-5 h-5 mr-2 text-sky-500" />
//                                                             <input
//                                                                 type="file"
//                                                                 multiple
//                                                                 onChange={
//                                                                     handleFileUpload
//                                                                 }
//                                                                 className="hidden"
//                                                             />
//                                                             <span className="text-sky-600 hover:text-sky-700">
//                                                                 Ajouter des
//                                                                 fichiers
//                                                             </span>
//                                                         </label>
//                                                         {newTask.files.length >
//                                                             0 && (
//                                                             <div className="mt-2">
//                                                                 {newTask.files.map(
//                                                                     (
//                                                                         file,
//                                                                         index
//                                                                     ) => (
//                                                                         <div
//                                                                             key={
//                                                                                 index
//                                                                             }
//                                                                             className="text-sm text-gray-600"
//                                                                         >
//                                                                             {
//                                                                                 file.name
//                                                                             }
//                                                                         </div>
//                                                                     )
//                                                                 )}
//                                                             </div>
//                                                         )}
//                                                     </td>
//                                                     <td className="p-3 text-center">
//                                                         <button
//                                                             onClick={addTask}
//                                                             className="text-green-500 hover:text-green-700 mr-2 p-2 rounded-full hover:bg-green-50 transition-colors"
//                                                         >
//                                                             <Check className="w-5 h-5" />
//                                                         </button>
//                                                         <button
//                                                             onClick={() =>
//                                                                 setIsAddingTask(
//                                                                     false
//                                                                 )
//                                                             }
//                                                             className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors"
//                                                         >
//                                                             <X className="w-5 h-5" />
//                                                         </button>
//                                                     </td>
//                                                 </motion.tr>
//                                             )}

//                                         {phase.tasks.map((task) => (
                                          
   
//                                             <motion.tr
//                                                 key={task.id}
//                                                 initial={{ opacity: 0, y: 10 }}
//                                                 animate={{ opacity: 1, y: 0 }}
//                                                 className="border-b hover:bg-sky-50 transition-colors"
//                                             >
//                                                 <td className="p-3">
//                                                     {editingTaskId ===
//                                                     task.id ? (
//                                                         <input
//                                                             type="text"
//                                                             value={
//                                                                 newTask.title
//                                                             }
//                                                             onChange={(e) =>
//                                                                 setNewTask({
//                                                                     ...newTask,
//                                                                     title: e
//                                                                         .target
//                                                                         .value,
//                                                                 })
//                                                             }
//                                                             className="p-2 border border-gray-300 rounded-lg w-full focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
//                                                             autoFocus
//                                                         />
//                                                     ) : (
//                                                         <span className="font-medium">
//                                                             {task.title}
//                                                         </span>
//                                                     )}
//                                                 </td>
//                                                 <td className="p-3">
//                                                     {editingTaskId ===
//                                                     task.id ? (
//                                                         <input
//                                                             type="text"
//                                                             value={
//                                                                 newTask.remarks
//                                                             }
//                                                             onChange={(e) =>
//                                                                 setNewTask({
//                                                                     ...newTask,
//                                                                     remarks:
//                                                                         e.target
//                                                                             .value,
//                                                                 })
//                                                             }
//                                                             className="p-2 border border-gray-300 rounded-lg w-full focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
//                                                         />
//                                                     ) : (
//                                                         task.remarks
//                                                     )}
//                                                 </td>
//                                                 <td className="p-3">
//                                                     {editingTaskId ===
//                                                     task.id ? (
//                                                         <div
//                                                             onClick={() =>
//                                                                 setIsStatusOpen(
//                                                                     !isStatusOpen
//                                                                 )
//                                                             }
//                                                             className="p-2 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-between"
//                                                         >
//                                                             <span
//                                                                 className={`px-2 py-1 rounded-full text-white ${
//                                                                     statusOptions.find(
//                                                                         (opt) =>
//                                                                             opt.value ===
//                                                                             newTask.status
//                                                                     )?.color
//                                                                 }`}
//                                                             >
//                                                                 {newTask.status}
//                                                             </span>
//                                                             <ChevronDown className="w-4 h-4" />
//                                                         </div>
//                                                     ) : (
//                                                         <span
//                                                             className={`px-2 py-1 rounded-full text-white ${
//                                                                 statusOptions.find(
//                                                                     (opt) =>
//                                                                         opt.value ===
//                                                                         task.status
//                                                                 )?.color
//                                                             }`}
//                                                         >
//                                                             {task.status}
//                                                         </span>
//                                                     )}
//                                                 </td>
//                                                 <td className="p-3">
//                                                     {editingTaskId ===
//                                                     task.id ? (
//                                                         <div
//                                                             onClick={() =>
//                                                                 setIsPriorityOpen(
//                                                                     !isPriorityOpen
//                                                                 )
//                                                             }
//                                                             className="p-2 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-between"
//                                                         >
//                                                             <span
//                                                                 className={`px-2 py-1 rounded-full text-white ${
//                                                                     priorityOptions.find(
//                                                                         (opt) =>
//                                                                             opt.value ===
//                                                                             newTask.priority
//                                                                     )?.color
//                                                                 }`}
//                                                             >
//                                                                 {
//                                                                     newTask.priority
//                                                                 }
//                                                             </span>
//                                                             <ChevronDown className="w-4 h-4" />
//                                                         </div>
//                                                     ) : (
//                                                         <span
//                                                             className={`px-2 py-1 rounded-full text-white ${
//                                                                 priorityOptions.find(
//                                                                     (opt) =>
//                                                                         opt.value ===
//                                                                         task.priority
//                                                                 )?.color
//                                                             }`}
//                                                         >
//                                                             {task.priority}
//                                                         </span>
//                                                     )}
//                                                 </td>
//                                                 <td className="p-3">
//                                                     {editingTaskId ===
//                                                     task.id ? (
//                                                         <DatePicker
//                                                             selected={
//                                                                 newTask.startDate
//                                                             }
//                                                             onChange={(date) =>
//                                                                 setNewTask({
//                                                                     ...newTask,
//                                                                     startDate:
//                                                                         date,
//                                                                 })
//                                                             }
//                                                             className="p-2 border border-gray-300 rounded-lg w-full focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
//                                                             dateFormat="dd/MM/yyyy"
//                                                         />
//                                                     ) : (
//                                                         task.startDate.toLocaleDateString()
//                                                     )}
//                                                 </td>
//                                                 <td className="p-3">
//                                                     {editingTaskId ===
//                                                     task.id ? (
//                                                         <DatePicker
//                                                             selected={
//                                                                 newTask.endDate
//                                                             }
//                                                             onChange={(date) =>
//                                                                 setNewTask({
//                                                                     ...newTask,
//                                                                     endDate:
//                                                                         date,
//                                                                 })
//                                                             }
//                                                             className="p-2 border border-gray-300 rounded-lg w-full focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
//                                                             dateFormat="dd/MM/yyyy"
//                                                             minDate={
//                                                                 newTask.startDate
//                                                             }
//                                                         />
//                                                     ) : (
//                                                         task.endDate.toLocaleDateString()
//                                                     )}
//                                                 </td>
//                                                 <td className="p-3">
//                                                     {task.files.map(
//                                                         (file, index) => (
//                                                             <div
//                                                                 key={index}
//                                                                 className="flex items-center text-sky-600"
//                                                             >
//                                                                 <File className="w-4 h-4 mr-2" />
//                                                                 <span>
//                                                                     {file.name}
//                                                                 </span>
//                                                             </div>
//                                                         )
//                                                     )}
//                                                 </td>
//                                                 <td className="p-3 text-center">
//                                                     {editingTaskId ===
//                                                     task.id ? (
//                                                         <>
//                                                             <button
//                                                                 onClick={
//                                                                     saveTask
//                                                                 }
//                                                                 className="text-green-500 hover:text-green-700 mr-2 p-2 rounded-full hover:bg-green-50 transition-colors"
//                                                             >
//                                                                 <Check className="w-5 h-5" />
//                                                             </button>
//                                                             <button
//                                                                 onClick={() =>
//                                                                     setEditingTaskId(
//                                                                         null
//                                                                     )
//                                                                 }
//                                                                 className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors"
//                                                             >
//                                                                 <X className="w-5 h-5" />
//                                                             </button>
//                                                         </>
//                                                     ) : (
//                                                         <>
//                                                             <button
//                                                                 onClick={() =>
//                                                                     editTask(
//                                                                         task
//                                                                     )
//                                                                 }
//                                                                 className="text-sky-500 hover:text-sky-700 mr-2 p-2 rounded-full hover:bg-sky-50 transition-colors"
//                                                             >
//                                                                 <Edit className="w-5 h-5" />
//                                                             </button>
//                                                             <button
//                                                                 onClick={() =>
//                                                                     deleteTask(
//                                                                         task.id
//                                                                     )
//                                                                 }
//                                                                 className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors"
//                                                             >
//                                                                 <Trash className="w-5 h-5" />
//                                                             </button>
//                                                         </>
//                                                     )}
//                                                 </td>
//                                             </motion.tr>
//                                         ))}
//                                     </tbody>
//                                 </table>

//                                 <div className="mt-4">
//                                     <button
//                                         onClick={() => {
//                                             setNewTask({
//                                                 ...newTask,
//                                                 phaseId: phase.id,
//                                                 files: [],
//                                             });
//                                             setIsAddingTask(true);
//                                         }}
//                                         className="flex items-center bg-gradient-to-r from-sky-400 to-black hover:from-sky-500 hover:to-black text-white px-4 py-2 rounded-lg transition-colors shadow-md"
//                                     >
//                                         <PlusCircle className="w-5 h-5 mr-2" />{" "}
//                                         Ajouter Tâche
//                                     </button>
//                                 </div>
//                             </motion.div>
//                         ))}
                       
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TaskManagement;


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    PlusCircle,
    Trash,
    Calendar,
    File,
    Check,
    X,
    Edit,
    ChevronDown,
    Copy,
    Users,
    Shield,
    Package,
    Menu,
    LogOut
} from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, router } from "@inertiajs/react";

const TaskManagement = ({
    project,
    defaultStatusOptions,
    defaultPriorityOptions,
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [phases, setPhases] = useState(
        project.phases
            ? project.phases.map((phase) => ({
                  id: phase.id,
                  name: phase.name,
                  order: phase.order,
                  tasks: phase.tasks
                      ? phase.tasks.map((task) => ({
                            id: task.id,
                            title: task.name,
                            remarks: task.remarks,
                            status: task.status,
                            priority: task.priority,
                            startDate: task.start_date
                                ? new Date(task.start_date)
                                : new Date(),
                            endDate: task.end_date
                                ? new Date(task.end_date)
                                : new Date(),
                            files: task.files ? JSON.parse(task.files) : [],
                            phase_id: task.phase_id,
                        }))
                      : [],
              }))
            : []
    );

    const [isAddingTask, setIsAddingTask] = useState(false);
    const [newTask, setNewTask] = useState({
        title: "",
        remarks: "",
        status: "À faire",
        priority: "Moyenne",
        startDate: new Date(),
        endDate: new Date(),
        files: [],
        phaseId: phases[0]?.id || null,
    });

    const [form, setForm] = useState(false);
    const [isStatusOpen, setIsStatusOpen] = useState(false);
    const [isPriorityOpen, setIsPriorityOpen] = useState(false);
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [customStatus, setCustomStatus] = useState("");
    const [customPriority, setCustomPriority] = useState("");
    const [editingPhaseId, setEditingPhaseId] = useState(null);
    const [newPhaseName, setNewPhaseName] = useState("");
    const [phaseName, setPhase] = useState("");
    const [statusOptions, setStatusOptions] = useState(defaultStatusOptions);
    const [priorityOptions, setPriorityOptions] = useState(
        defaultPriorityOptions
    );

    const addPhase = () => {
        if (!newPhaseName) return;
        const tempPhase = {
            id: Date.now(),
            name: newPhaseName,
            order: phases.length,
            tasks: [],
        };

        setPhases([...phases, tempPhase]);
        setNewPhaseName("");
        router.post(
            route("phases.store"),
            {
                project_id: project.id,
                name: newPhaseName,
            },
            {
                onSuccess: () => {
                    setNewPhaseName("");
                },
                onError: (errors) => {
                    console.error("Error creating phase:", errors);
                },
            }
        );
    };

    const renamePhase = (phaseId) => {
        if (!phaseName) return;

        router.put(
            route("phases.update", { phase: phaseId }),
            {
                name: phaseName,
            },
            {
                onSuccess: () => {
                    setEditingPhaseId(null);
                },
                onError: (errors) => {
                    console.error("Error updating phase:", errors);
                },
            }
        );
    };
    const deletePhase = (projectId, phaseId) => {
        if (confirm("Êtes-vous sûr de vouloir supprimer cette phase et toutes ses tâches ?")) {
            router.delete(route("phases.destroy", { 
                project: projectId, 
                phase: phaseId  // Le paramètre doit s'appeler 'phase' et non 'phaseId'
            }), {
                onSuccess: () => {
                    setPhases(phases.filter(phase => phase.id !== phaseId));
                },
                onError: (errors) => {
                    console.error("Error deleting phase:", errors);
                },
            });
        }
    };
    
    const addTask = () => {
        if (!newTask.title || !newTask.phaseId) return;

        router.post(
            route("tasks.store", {
                phase: newTask.phaseId,
                project: project.id,
            }),
            {
                name: newTask.title,
                remarks: newTask.remarks,
                status: newTask.status,
                priority: newTask.priority,
                start_date: newTask.startDate.toISOString().split("T")[0],
                end_date: newTask.endDate.toISOString().split("T")[0],
                files: JSON.stringify(
                    newTask.files.map((file) => ({
                        name: file.name,
                        size: file.size,
                        type: file.type,
                    }))
                ),
            },
            {
                onSuccess: () => {
                    setIsAddingTask(false);
                    setNewTask({
                        title: "",
                        remarks: "",
                        status: "À faire",
                        priority: "Moyenne",
                        startDate: new Date(),
                        endDate: new Date(),
                        files: [],
                        phaseId: newTask.phaseId,
                    });
                    router.reload();
                },
                onError: (errors) => {
                    console.error("Error creating task:", errors);
                },
            }
        );
    };

    const saveTask = () => {
        if (!newTask.title || !editingTaskId) {
            console.error("Missing title or editingTaskId");
            return;
        }

        setPhases((prevPhases) =>
            prevPhases.map((phase) => ({
                ...phase,
                tasks: phase.tasks.map((task) =>
                    task.id === editingTaskId
                        ? {
                              ...task,
                              title: newTask.title,
                              remarks: newTask.remarks,
                              status: newTask.status,
                              priority: newTask.priority,
                              startDate: newTask.startDate,
                              endDate: newTask.endDate,
                              files: newTask.files,
                          }
                        : task
                ),
            }))
        );

        router.put(
            route("tasks.update", { id: project.id, taskId: editingTaskId }),
            {
                name: newTask.title,
                remarks: newTask.remarks,
                status: newTask.status,
                priority: newTask.priority,
                start_date: newTask.startDate.toISOString().split("T")[0],
                end_date: newTask.endDate.toISOString().split("T")[0],
                files: JSON.stringify(
                    newTask.files.map((file) => ({
                        name: file.name,
                        size: file.size,
                        type: file.type,
                    }))
                ),
                phase_id: newTask.phaseId,
            },
            {
                onSuccess: () => {
                    setEditingTaskId(null);
                    setNewTask({
                        title: "",
                        remarks: "",
                        status: "À faire",
                        priority: "Moyenne",
                        startDate: new Date(),
                        endDate: new Date(),
                        files: [],
                        phaseId: newTask.phaseId,
                    });
                },
                onError: (errors) => {
                    console.error("Error updating task:", errors);
                    router.reload({ only: ["project"], preserveScroll: true });
                },
                preserveScroll: true,
            }
        );
    };
    
    const deleteTask = (taskId) => {
        if (confirm("Are you sure you want to delete this task?")) {
            router.delete(route("tasks.destroy", { id: project.id, taskId }), {
                onError: (errors) => {
                    console.error("Error deleting task:", errors);
                },
            });
        }
    };

    const handleFileUpload = (e) => {
        const files = Array.from(e.target.files);
        setNewTask({ ...newTask, files: [...newTask.files, ...files] });
    };

    const editTask = (task) => {
        setEditingTaskId(task.id);
        setNewTask({
            title: task.title,
            remarks: task.remarks,
            status: task.status,
            priority: task.priority,
            startDate: new Date(task.startDate),
            endDate: new Date(task.endDate),
            files: task.files,
            phaseId: task.phase_id,
        });
    };

    const addCustomStatus = () => {
        if (customStatus) {
            setStatusOptions([
                ...statusOptions,
                { value: customStatus, color: "bg-gray-500" },
            ]);
            setNewTask({ ...newTask, status: customStatus });
            setCustomStatus("");
            setIsStatusOpen(false);
        }
    };

    const addCustomPriority = () => {
        if (customPriority) {
            setPriorityOptions([
                ...priorityOptions,
                { value: customPriority, color: "bg-gray-500" },
            ]);
            setNewTask({ ...newTask, priority: customPriority });
            setCustomPriority("");
            setIsPriorityOpen(false);
        }
    };

    return (
        <div className="container mx-auto p-6 bg-gray-50">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-sky-400 to-black p-6 flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="bg-white p-3 rounded-full mr-4 shadow">
                            <Package className="text-sky-500" size={28} />
                        </div>
                        <h1 className="text-3xl font-bold text-white">
                            Gestion des Tâches - {project.name}
                        </h1>
                    </div>
                    <div className="flex space-x-3">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-lg transition-colors shadow"
                        >
                            <Menu className="w-5 h-5 mr-2" /> Menu
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute right-6 mt-12 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                                <Link
                                    href={route("dashboard")}
                                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    <Package className="w-5 h-5 mr-2" />
                                    Projet
                                </Link>
                                <Link
                                    href={route(
                                        "projects.safety-measures.index",
                                        { id: project.id }
                                    )}
                                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    <Shield className="w-5 h-5 mr-2" />
                                    Sécurité
                                </Link>
                                <Link
                                    href={route("projects.workers", {
                                        id: project.id,
                                    })}
                                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    <Users className="w-5 h-5 mr-2" />
                                    Ouvriers
                                </Link>
                                <button
                                    onClick={() => {
                                        router.post(route('logout'));
                                    }}
                                    className="w-full text-left flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    <LogOut className="w-5 h-5 mr-2" />
                                    Déconnexion
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="p-6">
                    <AnimatePresence>
                        {form && (
                            <motion.div
                                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.form
                                    className="bg-white p-6 rounded-lg w-full max-w-md"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h2 className="text-xl font-semibold mb-4">
                                        Ajouter une phase
                                    </h2>

                                    <div className="mb-4">
                                        <label className="block font-semibold">
                                            Nom du Module :
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Nom de la phase"
                                            value={newPhaseName}
                                            onChange={(e) =>
                                                setNewPhaseName(e.target.value)
                                            }
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-gray-50 p-2"
                                            onKeyDown={(e) =>
                                                e.key === "Enter" && addPhase()
                                            }
                                        />
                                    </div>

                                    <div className="flex justify-end gap-2">
                                        <motion.button
                                            type="button"
                                            className="px-4 py-2 bg-gray-500 text-white rounded"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setForm(false)}
                                        >
                                            Annuler
                                        </motion.button>
                                        <motion.button
                                            onClick={addPhase}
                                            type="submit"
                                            className="px-4 py-2 bg-blue-500 text-white rounded"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Ajouter
                                        </motion.button>
                                    </div>
                                </motion.form>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <button
                        onClick={() => setForm(!form)}
                        className="bg-gradient-to-r from-sky-400 to-black hover:from-sky-500 hover:to-black text-white px-5 py-2 rounded-lg flex items-center transition-colors shadow-md"
                    >
                        <PlusCircle className="w-5 h-5 mr-2" /> Ajouter Phase
                    </button>

                    <div className="space-y-6">
                        {phases.map((phase) => (
                            <motion.div
                                key={phase.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white rounded-lg shadow-md border border-gray-200 p-6"
                            >
                                <div className="flex justify-between items-center mb-4">
                                    {editingPhaseId === phase.id ? (
                                        <input
                                            type="text"
                                            value={phaseName}
                                            onChange={(e) =>
                                                setPhase(e.target.value)
                                            }
                                            className="p-2 border border-gray-300 rounded-lg w-full focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                                            onKeyDown={(e) =>
                                                e.key === "Enter" &&
                                                renamePhase(phase.id, phase)
                                            }
                                            onBlur={() =>
                                                setEditingPhaseId(null)
                                            }
                                            autoFocus
                                        />
                                    ) : (
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            {phase.name}
                                        </h3>
                                    )}
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() =>
                                                setEditingPhaseId(phase.id)
                                            }
                                            className="text-gray-700 hover:text-sky-600 p-2 rounded-full transition-colors hover:bg-sky-50"
                                        >
                                            <Edit className="w-5 h-5" />
                                        </button>
                                        <button
    onClick={() => deletePhase(project.id, phase.id)} // Passer project.id et phase.id
    className="text-gray-700 hover:text-red-600 p-2 rounded-full transition-colors hover:bg-red-50"
>
    <Trash className="w-5 h-5" />
</button>
                                    </div>
                                </div>

                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-gradient-to-r from-sky-400 to-black text-white">
                                            <th className="p-3 text-left">
                                                Tâche
                                            </th>
                                            <th className="p-3 text-left">
                                                Remarques
                                            </th>
                                            <th className="p-3 text-left">
                                                Statut
                                            </th>
                                            <th className="p-3 text-left">
                                                Priorité
                                            </th>
                                            <th className="p-3 text-left">
                                                Date de début
                                            </th>
                                            <th className="p-3 text-left">
                                                Date de fin
                                            </th>
                                            <th className="p-3 text-left">
                                                Fichiers
                                            </th>
                                            <th className="p-3 text-center">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {isAddingTask &&
                                            newTask.phaseId === phase.id && (
                                                <motion.tr
                                                    initial={{
                                                        opacity: 0,
                                                        y: 10,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                    }}
                                                    className="bg-gray-50"
                                                >
                                                    <td className="p-3">
                                                        <input
                                                            type="text"
                                                            placeholder="Titre de la tâche"
                                                            value={
                                                                newTask.title
                                                            }
                                                            onChange={(e) =>
                                                                setNewTask({
                                                                    ...newTask,
                                                                    title: e
                                                                        .target
                                                                        .value,
                                                                })
                                                            }
                                                            className="p-2 border border-gray-300 rounded-lg w-full focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                                                        />
                                                    </td>
                                                    <td className="p-3">
                                                        <input
                                                            type="text"
                                                            placeholder="Remarques"
                                                            value={
                                                                newTask.remarks
                                                            }
                                                            onChange={(e) =>
                                                                setNewTask({
                                                                    ...newTask,
                                                                    remarks:
                                                                        e.target
                                                                            .value,
                                                                })
                                                            }
                                                            className="p-2 border border-gray-300 rounded-lg w-full focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                                                        />
                                                    </td>
                                                    <td className="p-3 relative">
                                                        <div
                                                            onClick={() =>
                                                                setIsStatusOpen(
                                                                    !isStatusOpen
                                                                )
                                                            }
                                                            className="p-2 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-between focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                                                        >
                                                            <span
                                                                className={`px-2 py-1 rounded-full text-white ${
                                                                    statusOptions.find(
                                                                        (opt) =>
                                                                            opt.value ===
                                                                            newTask.status
                                                                    )?.color
                                                                }`}
                                                            >
                                                                {newTask.status}
                                                            </span>
                                                            <ChevronDown className="w-4 h-4" />
                                                        </div>
                                                        <AnimatePresence>
                                                            {isStatusOpen && (
                                                                <motion.div
                                                                    initial={{
                                                                        opacity: 0,
                                                                        y: -10,
                                                                    }}
                                                                    animate={{
                                                                        opacity: 1,
                                                                        y: 0,
                                                                    }}
                                                                    exit={{
                                                                        opacity: 0,
                                                                        y: -10,
                                                                    }}
                                                                    className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg"
                                                                >
                                                                    {statusOptions.map(
                                                                        (
                                                                            option
                                                                        ) => (
                                                                            <div
                                                                                key={
                                                                                    option.value
                                                                                }
                                                                                onClick={() => {
                                                                                    setNewTask(
                                                                                        {
                                                                                            ...newTask,
                                                                                            status: option.value,
                                                                                        }
                                                                                    );
                                                                                    setIsStatusOpen(
                                                                                        false
                                                                                    );
                                                                                }}
                                                                                className={`p-2 cursor-pointer hover:bg-gray-100 ${
                                                                                    newTask.status ===
                                                                                    option.value
                                                                                        ? "bg-gray-100"
                                                                                        : ""
                                                                                }`}
                                                                            >
                                                                                <span
                                                                                    className={`px-2 py-1 rounded-full text-white ${option.color}`}
                                                                                >
                                                                                    {
                                                                                        option.value
                                                                                    }
                                                                                </span>
                                                                            </div>
                                                                        )
                                                                    )}
                                                                    <div className="p-2">
                                                                        <input
                                                                            type="text"
                                                                            placeholder="Nouveau statut"
                                                                            value={
                                                                                customStatus
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                setCustomStatus(
                                                                                    e
                                                                                        .target
                                                                                        .value
                                                                                )
                                                                            }
                                                                            className="p-2 border border-gray-300 rounded-lg w-full focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                                                                            onKeyDown={(
                                                                                e
                                                                            ) =>
                                                                                e.key ===
                                                                                    "Enter" &&
                                                                                addCustomStatus()
                                                                            }
                                                                        />
                                                                        <button
                                                                            onClick={
                                                                                addCustomStatus
                                                                            }
                                                                            className="mt-2 flex items-center bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors"
                                                                        >
                                                                            <PlusCircle className="w-5 h-5 mr-2" />{" "}
                                                                            Ajouter
                                                                        </button>
                                                                    </div>
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </td>
                                                    <td className="p-3 relative">
                                                        <div
                                                            onClick={() =>
                                                                setIsPriorityOpen(
                                                                    !isPriorityOpen
                                                                )
                                                            }
                                                            className="p-2 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-between focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                                                        >
                                                            <span
                                                                className={`px-2 py-1 rounded-full text-white ${
                                                                    priorityOptions.find(
                                                                        (opt) =>
                                                                            opt.value ===
                                                                            newTask.priority
                                                                    )?.color
                                                                }`}
                                                            >
                                                                {
                                                                    newTask.priority
                                                                }
                                                            </span>
                                                            <ChevronDown className="w-4 h-4" />
                                                        </div>
                                                        <AnimatePresence>
                                                            {isPriorityOpen && (
                                                                <motion.div
                                                                    initial={{
                                                                        opacity: 0,
                                                                        y: -10,
                                                                    }}
                                                                    animate={{
                                                                        opacity: 1,
                                                                        y: 0,
                                                                    }}
                                                                    exit={{
                                                                        opacity: 0,
                                                                        y: -10,
                                                                    }}
                                                                    className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg"
                                                                >
                                                                    {priorityOptions.map(
                                                                        (
                                                                            option
                                                                        ) => (
                                                                            <div
                                                                                key={
                                                                                    option.value
                                                                                }
                                                                                onClick={() => {
                                                                                    setNewTask(
                                                                                        {
                                                                                            ...newTask,
                                                                                            priority:
                                                                                                option.value,
                                                                                        }
                                                                                    );
                                                                                    setIsPriorityOpen(
                                                                                        false
                                                                                    );
                                                                                }}
                                                                                className={`p-2 cursor-pointer hover:bg-gray-100 ${
                                                                                    newTask.priority ===
                                                                                    option.value
                                                                                        ? "bg-gray-100"
                                                                                        : ""
                                                                                }`}
                                                                            >
                                                                                <span
                                                                                    className={`px-2 py-1 rounded-full text-white ${option.color}`}
                                                                                >
                                                                                    {
                                                                                        option.value
                                                                                    }
                                                                                </span>
                                                                            </div>
                                                                        )
                                                                    )}
                                                                    <div className="p-2">
                                                                        <input
                                                                            type="text"
                                                                            placeholder="Nouvelle priorité"
                                                                            value={
                                                                                customPriority
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                setCustomPriority(
                                                                                    e
                                                                                        .target
                                                                                        .value
                                                                                )
                                                                            }
                                                                            className="p-2 border border-gray-300 rounded-lg w-full focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                                                                            onKeyDown={(
                                                                                e
                                                                            ) =>
                                                                                e.key ===
                                                                                    "Enter" &&
                                                                                addCustomPriority()
                                                                            }
                                                                        />
                                                                        <button
                                                                            onClick={
                                                                                addCustomPriority
                                                                            }
                                                                            className="mt-2 flex items-center bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors"
                                                                        >
                                                                            <PlusCircle className="w-5 h-5 mr-2" />{" "}
                                                                            Ajouter
                                                                        </button>
                                                                    </div>
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </td>
                                                    <td className="p-3">
                                                        <DatePicker
                                                            selected={
                                                                newTask.startDate
                                                            }
                                                            onChange={(date) =>
                                                                setNewTask({
                                                                    ...newTask,
                                                                    startDate:
                                                                        date,
                                                                })
                                                            }
                                                            className="p-2 border border-gray-300 rounded-lg w-full focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                                                            dateFormat="dd/MM/yyyy"
                                                        />
                                                    </td>
                                                    <td className="p-3">
                                                        <DatePicker
                                                            selected={
                                                                newTask.endDate
                                                            }
                                                            onChange={(date) =>
                                                                setNewTask({
                                                                    ...newTask,
                                                                    endDate:
                                                                        date,
                                                                })
                                                            }
                                                            className="p-2 border border-gray-300 rounded-lg w-full focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                                                            dateFormat="dd/MM/yyyy"
                                                            minDate={
                                                                newTask.startDate
                                                            }
                                                        />
                                                    </td>
                                                    <td className="p-3">
                                                        <label className="flex items-center cursor-pointer">
                                                            <File className="w-5 h-5 mr-2 text-sky-500" />
                                                            <input
                                                                type="file"
                                                                multiple
                                                                onChange={
                                                                    handleFileUpload
                                                                }
                                                                className="hidden"
                                                            />
                                                            <span className="text-sky-600 hover:text-sky-700">
                                                                Ajouter des
                                                                fichiers
                                                            </span>
                                                        </label>
                                                        {newTask.files.length >
                                                            0 && (
                                                            <div className="mt-2">
                                                                {newTask.files.map(
                                                                    (
                                                                        file,
                                                                        index
                                                                    ) => (
                                                                        <div
                                                                            key={
                                                                                index
                                                                            }
                                                                            className="text-sm text-gray-600"
                                                                        >
                                                                            {
                                                                                file.name
                                                                            }
                                                                        </div>
                                                                    )
                                                                )}
                                                            </div>
                                                        )}
                                                    </td>
                                                    <td className="p-3 text-center">
                                                        <button
                                                            onClick={addTask}
                                                            className="text-green-500 hover:text-green-700 mr-2 p-2 rounded-full hover:bg-green-50 transition-colors"
                                                        >
                                                            <Check className="w-5 h-5" />
                                                        </button>
                                                        <button
                                                            onClick={() =>
                                                                setIsAddingTask(
                                                                    false
                                                                )
                                                            }
                                                            className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors"
                                                        >
                                                            <X className="w-5 h-5" />
                                                        </button>
                                                    </td>
                                                </motion.tr>
                                            )}

                                        {phase.tasks.map((task) => (
                                            <motion.tr
                                                key={task.id}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="border-b hover:bg-sky-50 transition-colors"
                                            >
                                                <td className="p-3">
                                                    {editingTaskId ===
                                                    task.id ? (
                                                        <input
                                                            type="text"
                                                            value={
                                                                newTask.title
                                                            }
                                                            onChange={(e) =>
                                                                setNewTask({
                                                                    ...newTask,
                                                                    title: e
                                                                        .target
                                                                        .value,
                                                                })
                                                            }
                                                            className="p-2 border border-gray-300 rounded-lg w-full focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                                                            autoFocus
                                                        />
                                                    ) : (
                                                        <span className="font-medium">
                                                            {task.title}
                                                        </span>
                                                    )}
                                                </td>
                                                <td className="p-3">
                                                    {editingTaskId ===
                                                    task.id ? (
                                                        <input
                                                            type="text"
                                                            value={
                                                                newTask.remarks
                                                            }
                                                            onChange={(e) =>
                                                                setNewTask({
                                                                    ...newTask,
                                                                    remarks:
                                                                        e.target
                                                                            .value,
                                                                })
                                                            }
                                                            className="p-2 border border-gray-300 rounded-lg w-full focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                                                        />
                                                    ) : (
                                                        task.remarks
                                                    )}
                                                </td>
                                                <td className="p-3">
                                                    {editingTaskId ===
                                                    task.id ? (
                                                        <div
                                                            onClick={() =>
                                                                setIsStatusOpen(
                                                                    !isStatusOpen
                                                                )
                                                            }
                                                            className="p-2 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-between"
                                                        >
                                                            <span
                                                                className={`px-2 py-1 rounded-full text-white ${
                                                                    statusOptions.find(
                                                                        (opt) =>
                                                                            opt.value ===
                                                                            newTask.status
                                                                    )?.color
                                                                }`}
                                                            >
                                                                {newTask.status}
                                                            </span>
                                                            <ChevronDown className="w-4 h-4" />
                                                        </div>
                                                    ) : (
                                                        <span
                                                            className={`px-2 py-1 rounded-full text-white ${
                                                                statusOptions.find(
                                                                    (opt) =>
                                                                        opt.value ===
                                                                        task.status
                                                                )?.color
                                                            }`}
                                                        >
                                                            {task.status}
                                                        </span>
                                                    )}
                                                </td>
                                                <td className="p-3">
                                                    {editingTaskId ===
                                                    task.id ? (
                                                        <div
                                                            onClick={() =>
                                                                setIsPriorityOpen(
                                                                    !isPriorityOpen
                                                                )
                                                            }
                                                            className="p-2 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-between"
                                                        >
                                                            <span
                                                                className={`px-2 py-1 rounded-full text-white ${
                                                                    priorityOptions.find(
                                                                        (opt) =>
                                                                            opt.value ===
                                                                            newTask.priority
                                                                    )?.color
                                                                }`}
                                                            >
                                                                {
                                                                    newTask.priority
                                                                }
                                                            </span>
                                                            <ChevronDown className="w-4 h-4" />
                                                        </div>
                                                    ) : (
                                                        <span
                                                            className={`px-2 py-1 rounded-full text-white ${
                                                                priorityOptions.find(
                                                                    (opt) =>
                                                                        opt.value ===
                                                                        task.priority
                                                                )?.color
                                                            }`}
                                                        >
                                                            {task.priority}
                                                        </span>
                                                    )}
                                                </td>
                                                <td className="p-3">
                                                    {editingTaskId ===
                                                    task.id ? (
                                                        <DatePicker
                                                            selected={
                                                                newTask.startDate
                                                            }
                                                            onChange={(date) =>
                                                                setNewTask({
                                                                    ...newTask,
                                                                    startDate:
                                                                        date,
                                                                })
                                                            }
                                                            className="p-2 border border-gray-300 rounded-lg w-full focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                                                            dateFormat="dd/MM/yyyy"
                                                        />
                                                    ) : (
                                                        task.startDate.toLocaleDateString()
                                                    )}
                                                </td>
                                                <td className="p-3">
                                                    {editingTaskId ===
                                                    task.id ? (
                                                        <DatePicker
                                                            selected={
                                                                newTask.endDate
                                                            }
                                                            onChange={(date) =>
                                                                setNewTask({
                                                                    ...newTask,
                                                                    endDate:
                                                                        date,
                                                                })
                                                            }
                                                            className="p-2 border border-gray-300 rounded-lg w-full focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                                                            dateFormat="dd/MM/yyyy"
                                                            minDate={
                                                                newTask.startDate
                                                            }
                                                        />
                                                    ) : (
                                                        task.endDate.toLocaleDateString()
                                                    )}
                                                </td>
                                                <td className="p-3">
                                                    {task.files.map(
                                                        (file, index) => (
                                                            <div
                                                                key={index}
                                                                className="flex items-center text-sky-600"
                                                            >
                                                                <File className="w-4 h-4 mr-2" />
                                                                <span>
                                                                    {file.name}
                                                                </span>
                                                            </div>
                                                        )
                                                    )}
                                                </td>
                                                <td className="p-3 text-center">
                                                    {editingTaskId ===
                                                    task.id ? (
                                                        <>
                                                            <button
                                                                onClick={
                                                                    saveTask
                                                                }
                                                                className="text-green-500 hover:text-green-700 mr-2 p-2 rounded-full hover:bg-green-50 transition-colors"
                                                            >
                                                                <Check className="w-5 h-5" />
                                                            </button>
                                                            <button
                                                                onClick={() =>
                                                                    setEditingTaskId(
                                                                        null
                                                                    )
                                                                }
                                                                className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors"
                                                            >
                                                                <X className="w-5 h-5" />
                                                            </button>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <button
                                                                onClick={() =>
                                                                    editTask(
                                                                        task
                                                                    )
                                                                }
                                                                className="text-sky-500 hover:text-sky-700 mr-2 p-2 rounded-full hover:bg-sky-50 transition-colors"
                                                            >
                                                                <Edit className="w-5 h-5" />
                                                            </button>
                                                            <button
                                                                onClick={() =>
                                                                    deleteTask(
                                                                        task.id
                                                                    )
                                                                }
                                                                className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors"
                                                            >
                                                                <Trash className="w-5 h-5" />
                                                            </button>
                                                        </>
                                                    )}
                                                </td>
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                </table>

                                <div className="mt-4">
                                    <button
                                        onClick={() => {
                                            setNewTask({
                                                ...newTask,
                                                phaseId: phase.id,
                                                files: [],
                                            });
                                            setIsAddingTask(true);
                                        }}
                                        className="flex items-center bg-gradient-to-r from-sky-400 to-black hover:from-sky-500 hover:to-black text-white px-4 py-2 rounded-lg transition-colors shadow-md"
                                    >
                                        <PlusCircle className="w-5 h-5 mr-2" />{" "}
                                        Ajouter Tâche
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskManagement;

