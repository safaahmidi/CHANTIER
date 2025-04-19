



// import { Head, useForm, Link } from '@inertiajs/react';
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Edit, Trash2, List, Plus, Building, Home, Briefcase, ChevronRight, DollarSign, Mail, FileText, Info } from 'lucide-react';
// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';


// export default function Dashboard({ projects, editProject ,clients}) {
//     const [showForm, setShowForm] = useState(false);
//     const [showProjectInfo, setShowProjectInfo] = useState({});
    
//     const { data, setData, post, processing, reset, errors } = useForm({
//         name: '',
//         details: '',
//         budget_total: '',
//         avanceClient: '',
//         email: '',
//         type: 'immeuble' // Default value
//     });

//     useEffect(() => {
//         if (editProject) {
//             setData({
//                 name: editProject.name || '',
//                 details: editProject.details || '',
//                 budget_total: editProject.budget_total || '',
//                 avanceClient: editProject.avanceClient || '',
//                 email: editProject.email || '',
//                 type: editProject.type || 'immeuble'
//             });
//             setShowForm(true);
//         }
//     }, [editProject]);

//     const addProject = () => {
//         post(route('projects.store'), {
//             data,
//             onSuccess: () => {
//                 reset();
//                 setShowForm(false);
//             },
//         });
//     };

//     const deleteProject = (id) => {
//         if (window.confirm("Êtes-vous sûr de vouloir supprimer ce projet ?")) {
//             post(route('projects.destroy', { id }), {
//                 method: 'POST',
//             });
//         }
//     };

//     const toggleForm = () => {
//         setShowForm(!showForm);
//     };

//     const toggleProjectInfo = (id) => {
//         setShowProjectInfo(prev => ({
//             ...prev,
//             [id]: !prev[id]
//         }));
//     };

//     // Helper function for displaying project icons
//     const getProjectIcon = (type) => {
//         switch(type) {
//             case 'villa':
//                 return <Home className="w-8 h-8" />;
//             case 'maison':
//                 return <Home className="w-8 h-8" />;
//             case 'immeuble':
//             default:
//                 return <Building className="w-8 h-8" />;
//         }
//     };

//     return (
//         <AuthenticatedLayout>
//         <div>
//             <Head title="Dashboard" />

//             <motion.div 
//                 initial={{ opacity: 0, y: 20 }} 
//                 animate={{ opacity: 1, y: 0 }} 
//                 transition={{ duration: 0.6 }} 
//                 className="p-6 bg-white min-h-screen"
//             >
//                 <div className="max-w-7xl mx-auto">
//                     <div className="flex justify-between items-center mb-8">
//                         <motion.h1 className="text-3xl font-bold text-gray-800">
//                             Tableau de Bord <span className="text-sky-500">Construction</span>
//                         </motion.h1>
                        
//                         {!showForm && (
//                             <motion.button 
//                                 whileHover={{ scale: 1.05 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 onClick={toggleForm}
//                                 className="bg-gradient-to-r from-sky-400 to-black text-white font-semibold py-2 px-4 rounded-lg shadow-md flex items-center gap-2 transition-all"
//                             >
//                                 <Plus className="w-5 h-5" />
//                                 Nouveau Projet
//                             </motion.button>
//                         )}
//                     </div>

//                     {/* Formulaire Amélioré */}
//                     {showForm && (
//                         <motion.div 
//                             initial={{ opacity: 0, height: 0 }}
//                             animate={{ opacity: 1, height: 'auto' }}
//                             exit={{ opacity: 0, height: 0 }}
//                             className="bg-white p-6 rounded-lg shadow-lg mb-8 border-l-4 border-sky-400"
//                         >
//                             <div className="flex justify-between items-center mb-6">
//                                 <h2 className="text-xl font-semibold text-gray-800">
//                                     {editProject ? 'Modifier le projet' : 'Ajouter un nouveau projet'}
//                                 </h2>
//                                 {showForm && (
//                                     <button 
//                                         onClick={toggleForm} 
//                                         className="text-gray-500 hover:text-gray-700"
//                                     >
//                                         &times;
//                                     </button>
//                                 )}
//                             </div>

//                             <div className="grid gap-6 md:grid-cols-2">
//                                 <div className="space-y-4">
//                                     <div className="form-group">
//                                         <label className="block text-sm font-medium text-gray-700 mb-1">Nom du projet</label>
//                                         <div className="relative">
//                                             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                                 <Briefcase className="h-5 w-5 text-gray-400" />
//                                             </div>
//                                             <input
//                                                 type="text"
//                                                 value={data.name}
//                                                 onChange={(e) => setData('name', e.target.value)}
//                                                 className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-gray-50"
//                                                 placeholder="Résidence Les Oliviers"
//                                             />
//                                         </div>
//                                         {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
//                                     </div>

//                                     <div className="form-group">
//                                         <label className="block text-sm font-medium text-gray-700 mb-1">Budget total (€)</label>
//                                         <div className="relative">
//                                             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                                 <DollarSign className="h-5 w-5 text-gray-400" />
//                                             </div>
//                                             <input
//                                                 type="number"
//                                                 value={data.budget_total}
//                                                 onChange={(e) => setData('budget_total', e.target.value)}
//                                                 className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-gray-50"
//                                                 placeholder="150000"
//                                             />
//                                         </div>
//                                         {errors.budget_total && <p className="mt-1 text-sm text-red-600">{errors.budget_total}</p>}
//                                     </div>

//                                     <div className="form-group">
//                                         <label className="block text-sm font-medium text-gray-700 mb-1">Avance client (€)</label>
//                                         <div className="relative">
//                                             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                                 <DollarSign className="h-5 w-5 text-gray-400" />
//                                             </div>
//                                             <input
//                                                 type="number"
//                                                 value={data.avanceClient}
//                                                 onChange={(e) => setData('avanceClient', e.target.value)}
//                                                 className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-gray-50"
//                                                 placeholder="30000"
//                                             />
//                                         </div>
//                                         {errors.avanceClient && <p className="mt-1 text-sm text-red-600">{errors.avanceClient}</p>}
//                                     </div>
//                                 </div>

//                                 <div className="space-y-4">
//                                     <div className="form-group">
//                                         <label className="block text-sm font-medium text-gray-700 mb-1">Email du client</label>
//                                         <div className="relative">
//                                             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                                 <Mail className="h-5 w-5 text-gray-400" />
//                                             </div>
//                                             {/* <input
//                                                 type="email"
//                                                 value={data.email}
//                                                 onChange={(e) => setData('email', e.target.value)}
//                                                 className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-gray-50"
//                                                 placeholder="client@example.com"
//                                             /> */}
//                                             <select value={data.email} onChange={(e) => setData('email', e.target.value)}
//                                              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-gray-50"
//                                                 >
//                                                {

//                                                 clients.map((client,i) => (
//                                                     <option key={i} value={client.email}>
//                                                         {client.email}
//                                                     </option>
//                                                 ))


//                                                }
//                                             </select>
//                                         </div>
//                                         {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
//                                     </div>

//                                     <div className="form-group">
//                                         <label className="block text-sm font-medium text-gray-700 mb-1">Type de projet</label>
//                                         <div className="relative">
//                                             <select
//                                                 value={data.type}
//                                                 onChange={(e) => setData('type', e.target.value)}
//                                                 className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-gray-50"
//                                             >
//                                                 <option value="immeuble">Immeuble</option>
//                                                 <option value="villa">Villa</option>
//                                                 <option value="maison">Maison</option>
//                                             </select>
//                                         </div>
//                                     </div>

//                                     <div className="form-group">
//                                         <label className="block text-sm font-medium text-gray-700 mb-1">Détails</label>
//                                         <div className="relative">
//                                             <div className="absolute inset-y-0 left-0 pl-3 pt-3 pointer-events-none">
//                                                 <FileText className="h-5 w-5 text-gray-400" />
//                                             </div>
//                                             <textarea
//                                                 value={data.details}
//                                                 onChange={(e) => setData('details', e.target.value)}
//                                                 rows="3"
//                                                 className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-gray-50"
//                                                 placeholder="Description du projet..."
//                                             ></textarea>
//                                         </div>
//                                         {errors.details && <p className="mt-1 text-sm text-red-600">{errors.details}</p>}
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="mt-6 flex justify-end">
//                                 <button 
//                                     onClick={() => toggleForm()} 
//                                     className="mr-3 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
//                                 >
//                                     Annuler
//                                 </button>
//                                 <button 
//                                     onClick={addProject} 
//                                     disabled={processing} 
//                                     className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-sky-400 to-black hover:from-sky-500 hover:to-black rounded-md shadow-sm transition-colors flex items-center"
//                                 >
//                                     {editProject ? 'Mettre à jour' : 'Enregistrer le projet'}
//                                     <ChevronRight className="ml-2 w-4 h-4" />
//                                 </button>
//                             </div>
//                         </motion.div>
//                     )}

//                     {/* Liste des projets améliorée */}
//                     <div className="mb-6">
//                         <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                             <Briefcase className="mr-2 w-5 h-5 text-sky-500" />
//                             Projets en cours ({projects.length})
//                         </h2>
                        
//                         {projects.length > 0 ? (
//                             <motion.div 
//                                 className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 transition={{ staggerChildren: 0.1 }}
//                             >
//                                 {projects.map((project) => (
//                                     <motion.div 
//                                         key={project.id}
//                                         whileHover={{ y: -5 }}
//                                         className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
//                                     >
//                                         <div className="bg-gradient-to-r from-sky-400 to-black p-4 flex justify-between items-center">
//                                             <div className="bg-white p-3 rounded-full">
//                                                 {getProjectIcon(project.type)}
//                                             </div>
//                                             <div className="text-right">
//                                                 <span className="text-xs font-medium bg-white text-gray-800 px-2 py-1 rounded-full">
//                                                     {project.type === 'villa' ? 'Villa' : project.type === 'maison' ? 'Maison' : 'Immeuble'}
//                                                 </span>
//                                             </div>
//                                         </div>
                                        
//                                         <div className="p-4">
//                                             <h3 className="font-bold text-lg text-gray-800 mb-2">{project.name}</h3>
                                            
//                                             {/* Construction workers illustration inspired visual */}
//                                             <div className="bg-sky-50 border border-sky-100 rounded-lg p-3 mb-3 relative overflow-hidden">
//                                                 {/* Simplified construction scene */}
//                                                 <div className="flex items-end justify-between h-16">
//                                                     {/* Wall/brick section */}
//                                                     <div className="w-10 h-10 bg-orange-500 rounded-sm relative">
//                                                         <div className="absolute top-2 left-2 w-2 h-1 bg-orange-800"></div>
//                                                         <div className="absolute top-4 left-4 w-2 h-1 bg-orange-800"></div>
//                                                         <div className="absolute top-6 left-1 w-2 h-1 bg-orange-800"></div>
//                                                     </div>
                                                    
//                                                     {/* Roof/ladder worker */}
//                                                     <div className="w-10 h-12 flex flex-col items-center">
//                                                         <div className="w-8 h-1 bg-orange-700"></div>
//                                                         <div className="w-6 h-3 bg-orange-500 transform skew-x-12"></div>
//                                                         <div className="w-2 h-2 bg-blue-500 rounded-full -mt-1"></div>
//                                                         <div className="w-1 h-4 bg-gray-500"></div>
//                                                     </div>
                                                    
//                                                     {/* Painter */}
//                                                     <div className="w-8 h-8 flex items-end">
//                                                         <div className="w-3 h-6 bg-blue-500"></div>
//                                                         <div className="w-1 h-8 bg-gray-500"></div>
//                                                         <div className="w-3 h-3 bg-yellow-500 rounded-full -mt-10"></div>
//                                                     </div>
                                                    
//                                                     {/* Flooring worker */}
//                                                     <div className="w-10 h-4">
//                                                         <div className="w-10 h-1 bg-brown-500"></div>
//                                                         <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
//                                                     </div>
//                                                 </div>
//                                             </div>
                                            
//                                             {/* Info icon for project details */}
//                                             <div className="flex justify-end mb-3">
//                                                 <button 
//                                                     onClick={() => toggleProjectInfo(project.id)}
//                                                     className="flex items-center justify-center p-2 bg-sky-100 hover:bg-sky-200 rounded-full transition-colors"
//                                                 >
//                                                     <Info className="w-5 h-5 text-sky-600" />
//                                                 </button>
//                                             </div>
                                            
//                                             {/* Project info popup */}
//                                             {showProjectInfo[project.id] && (
//                                                 <motion.div 
//                                                     initial={{ opacity: 0, height: 0 }}
//                                                     animate={{ opacity: 1, height: 'auto' }}
//                                                     className="bg-sky-50 rounded-lg p-3 mb-3 border border-sky-200"
//                                                 >
//                                                     {project.details && (
//                                                         <div className="mb-2">
//                                                             <span className="font-medium text-sky-700">Détails:</span>
//                                                             <p className="text-gray-600 text-sm mt-1">{project.details}</p>
//                                                         </div>
//                                                     )}
                                                    
//                                                     {project.email && (
//                                                         <div className="flex justify-between text-sm mb-2">
//                                                             <span className="text-sky-700">Email:</span>
//                                                             <span className="font-medium text-gray-700">{project.email}</span>
//                                                         </div>
//                                                     )}
                                                    
//                                                     {project.budget_total && (
//                                                         <div className="flex justify-between text-sm mb-2">
//                                                             <span className="text-sky-700">Budget:</span>
//                                                             <span className="font-medium text-gray-700">{Number(project.budget_total).toLocaleString()} €</span>
//                                                         </div>
//                                                     )}
                                                    
//                                                     {project.avanceClient && (
//                                                         <div className="flex justify-between text-sm">
//                                                             <span className="text-sky-700">Avance:</span>
//                                                             <span className="font-medium text-gray-700">{Number(project.avanceClient).toLocaleString()} €</span>
//                                                         </div>
//                                                     )}
//                                                 </motion.div>
//                                             )}
//                                         </div>
                                        
//                                         <div className="border-t border-gray-200 p-3 bg-gray-50 flex justify-between">
//                                             <button 
//                                                 onClick={() => window.location.href = route('projects.edit', { id: project.id })} 
//                                                 className="text-gray-700 hover:text-sky-600 transition-colors"
//                                                 title="Modifier"
//                                             >
//                                                 <Edit className="w-5 h-5" />
//                                             </button>
//                                             <button 
//                                                 onClick={() => deleteProject(project.id)} 
//                                                 className="text-gray-700 hover:text-red-600 transition-colors"
//                                                 title="Supprimer"
//                                             >
//                                                 <Trash2 className="w-5 h-5" />
//                                             </button>
//                                             <Link 
//                                                 href={route('tasks.index', { id: project.id })} 
//                                                 className="text-gray-700 hover:text-green-600 transition-colors"
//                                                 title="Voir les tâches"
//                                             >
//                                                 <List className="w-5 h-5" />
//                                             </Link>
//                                         </div>
//                                     </motion.div>
//                                 ))}
//                             </motion.div>
//                         ) : (
//                             <div className="bg-white p-8 rounded-lg shadow-md text-center">
//                                 <div className="bg-sky-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
//                                     <Building className="w-8 h-8 text-sky-500" />
//                                 </div>
//                                 <h3 className="text-lg font-medium text-gray-800 mb-2">Aucun projet trouvé</h3>
//                                 <p className="text-gray-600 mb-4">Commencez par ajouter votre premier projet de construction</p>
//                                 <button 
//                                     onClick={toggleForm}
//                                     className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-sky-400 to-black hover:from-sky-500 hover:to-black text-white font-medium rounded-md transition-colors"
//                                 >
//                                     <Plus className="w-4 h-4 mr-2" />
//                                     Ajouter un projet
//                                 </button>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </motion.div>
//         </div>
//         </AuthenticatedLayout>
//     );
// }






// //code ashboard modifiè style

// import { Head, useForm, Link } from '@inertiajs/react';
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Edit, Trash2, List, Plus, Building, Home, Briefcase, ChevronRight, DollarSign, Mail, FileText, Info } from 'lucide-react';
// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

// export default function Dashboard({ projects, editProject, clients }) {
//     const [showForm, setShowForm] = useState(false);
//     const [showProjectInfo, setShowProjectInfo] = useState({});
    
//     const { data, setData, post, processing, reset, errors } = useForm({
//         name: '',
//         details: '',
//         budget_total: '',
//         avanceClient: '',
//         email: '',
//         type: 'immeuble'
//     });

//     useEffect(() => {
//         if (editProject) {
//             setData({
//                 name: editProject.name || '',
//                 details: editProject.details || '',
//                 budget_total: editProject.budget_total || '',
//                 avanceClient: editProject.avanceClient || '',
//                 email: editProject.email || '',
//                 type: editProject.type || 'immeuble'
//             });
//             setShowForm(true);
//         }
//     }, [editProject]);

//     const addProject = () => {
//         post(route('projects.store'), {
//             data,
//             onSuccess: () => {
//                 reset();
//                 setShowForm(false);
//             },
//         });
//     };

//     const deleteProject = (id) => {
//         if (window.confirm("Êtes-vous sûr de vouloir supprimer ce projet ?")) {
//             post(route('projects.destroy', { id }), {
//                 method: 'POST',
//             });
//         }
//     };

//     const toggleForm = () => {
//         setShowForm(!showForm);
//     };

//     const toggleProjectInfo = (id) => {
//         setShowProjectInfo(prev => ({
//             ...prev,
//             [id]: !prev[id]
//         }));
//     };

//     const getProjectIcon = (type) => {
//         switch(type) {
//             case 'villa':
//                 return <Home className="w-6 h-6 text-sky-600" />;
//             case 'maison':
//                 return <Home className="w-6 h-6 text-sky-600" />;
//             case 'immeuble':
//             default:
//                 return <Building className="w-6 h-6 text-sky-600" />;
//         }
//     };

//     return (
//         <AuthenticatedLayout>
//             <div>
//                 <Head title="Dashboard" />

//                 <motion.div 
//                     initial={{ opacity: 0, y: 20 }} 
//                     animate={{ opacity: 1, y: 0 }} 
//                     transition={{ duration: 0.6 }} 
//                     className="p-6 bg-white min-h-screen"
//                 >
//                     <div className="max-w-7xl mx-auto">
//                         <div className="flex justify-between items-center mb-8">
//                             <motion.h1 className="text-3xl font-bold text-gray-800">
//                                 Tableau de Bord <span className="text-sky-500">Construction</span>
//                             </motion.h1>
                            
//                             {!showForm && (
//                                 <motion.button 
//                                     whileHover={{ scale: 1.05 }}
//                                     whileTap={{ scale: 0.95 }}
//                                     onClick={toggleForm}
//                                     className="bg-gradient-to-r from-sky-400 to-black text-white font-semibold py-2 px-4 rounded-lg shadow-md flex items-center gap-2 transition-all"
//                                 >
//                                     <Plus className="w-5 h-5" />
//                                     Nouveau Projet
//                                 </motion.button>
//                             )}
//                         </div>

//                         {/* Formulaire inchangé */}
//                         {showForm && (
//                             <motion.div 
//                                 initial={{ opacity: 0, height: 0 }}
//                                 animate={{ opacity: 1, height: 'auto' }}
//                                 exit={{ opacity: 0, height: 0 }}
//                                 className="bg-white p-6 rounded-lg shadow-lg mb-8 border-l-4 border-sky-400"
//                             >
//                                 <div className="flex justify-between items-center mb-6">
//                                     <h2 className="text-xl font-semibold text-gray-800">
//                                         {editProject ? 'Modifier le projet' : 'Ajouter un nouveau projet'}
//                                     </h2>
//                                     {showForm && (
//                                         <button 
//                                             onClick={toggleForm} 
//                                             className="text-gray-500 hover:text-gray-700"
//                                         >
//                                             &times;
//                                         </button>
//                                     )}
//                                 </div>

//                                 <div className="grid gap-6 md:grid-cols-2">
//                                     <div className="space-y-4">
//                                         <div className="form-group">
//                                             <label className="block text-sm font-medium text-gray-700 mb-1">Nom du projet</label>
//                                             <div className="relative">
//                                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                                     <Briefcase className="h-5 w-5 text-gray-400" />
//                                                 </div>
//                                                 <input
//                                                     type="text"
//                                                     value={data.name}
//                                                     onChange={(e) => setData('name', e.target.value)}
//                                                     className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-gray-50"
//                                                     placeholder="Résidence Les Oliviers"
//                                                 />
//                                             </div>
//                                             {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
//                                         </div>

//                                         <div className="form-group">
//                                             <label className="block text-sm font-medium text-gray-700 mb-1">Budget total (€)</label>
//                                             <div className="relative">
//                                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                                     <DollarSign className="h-5 w-5 text-gray-400" />
//                                                 </div>
//                                                 <input
//                                                     type="number"
//                                                     value={data.budget_total}
//                                                     onChange={(e) => setData('budget_total', e.target.value)}
//                                                     className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-gray-50"
//                                                     placeholder="150000"
//                                                 />
//                                             </div>
//                                             {errors.budget_total && <p className="mt-1 text-sm text-red-600">{errors.budget_total}</p>}
//                                         </div>

//                                         <div className="form-group">
//                                             <label className="block text-sm font-medium text-gray-700 mb-1">Avance client (€)</label>
//                                             <div className="relative">
//                                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                                     <DollarSign className="h-5 w-5 text-gray-400" />
//                                                 </div>
//                                                 <input
//                                                     type="number"
//                                                     value={data.avanceClient}
//                                                     onChange={(e) => setData('avanceClient', e.target.value)}
//                                                     className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-gray-50"
//                                                     placeholder="30000"
//                                                 />
//                                             </div>
//                                             {errors.avanceClient && <p className="mt-1 text-sm text-red-600">{errors.avanceClient}</p>}
//                                         </div>
//                                     </div>

//                                     <div className="space-y-4">
//                                         <div className="form-group">
//                                             <label className="block text-sm font-medium text-gray-700 mb-1">Email du client</label>
//                                             <div className="relative">
//                                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                                     <Mail className="h-5 w-5 text-gray-400" />
//                                                 </div>
//                                                 <select 
//                                                     value={data.email} 
//                                                     onChange={(e) => setData('email', e.target.value)}
//                                                     className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-gray-50"
//                                                 >
//                                                     {clients.map((client, i) => (
//                                                         <option key={i} value={client.email}>
//                                                             {client.email}
//                                                         </option>
//                                                     ))}
//                                                 </select>
//                                             </div>
//                                             {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
//                                         </div>

//                                         <div className="form-group">
//                                             <label className="block text-sm font-medium text-gray-700 mb-1">Type de projet</label>
//                                             <div className="relative">
//                                                 <select
//                                                     value={data.type}
//                                                     onChange={(e) => setData('type', e.target.value)}
//                                                     className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-gray-50"
//                                                 >
//                                                     <option value="immeuble">Immeuble</option>
//                                                     <option value="villa">Villa</option>
//                                                     <option value="maison">Maison</option>
//                                                 </select>
//                                             </div>
//                                         </div>

//                                         <div className="form-group">
//                                             <label className="block text-sm font-medium text-gray-700 mb-1">Détails</label>
//                                             <div className="relative">
//                                                 <div className="absolute inset-y-0 left-0 pl-3 pt-3 pointer-events-none">
//                                                     <FileText className="h-5 w-5 text-gray-400" />
//                                                 </div>
//                                                 <textarea
//                                                     value={data.details}
//                                                     onChange={(e) => setData('details', e.target.value)}
//                                                     rows="3"
//                                                     className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-gray-50"
//                                                     placeholder="Description du projet..."
//                                                 ></textarea>
//                                             </div>
//                                             {errors.details && <p className="mt-1 text-sm text-red-600">{errors.details}</p>}
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="mt-6 flex justify-end">
//                                     <button 
//                                         onClick={() => toggleForm()} 
//                                         className="mr-3 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
//                                     >
//                                         Annuler
//                                     </button>
//                                     <button 
//                                         onClick={addProject} 
//                                         disabled={processing} 
//                                         className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-sky-400 to-black hover:from-sky-500 hover:to-black rounded-md shadow-sm transition-colors flex items-center"
//                                     >
//                                         {editProject ? 'Mettre à jour' : 'Enregistrer le projet'}
//                                         <ChevronRight className="ml-2 w-4 h-4" />
//                                     </button>
//                                 </div>
//                             </motion.div>
//                         )}

//                         {/* Liste des projets avec nouveau style */}
//                         <div className="mb-6">
//                             <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                                 <Briefcase className="mr-2 w-5 h-5 text-sky-500" />
//                                 Projets en cours ({projects.length})
//                             </h2>
                            
//                             {projects.length > 0 ? (
//                                 <motion.div 
//                                     className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
//                                     initial={{ opacity: 0 }}
//                                     animate={{ opacity: 1 }}
//                                     transition={{ staggerChildren: 0.1 }}
//                                 >
//                                     {projects.map((project) => (
//                                         <motion.div 
//                                             key={project.id}
//                                             whileHover={{ y: -5 }}
//                                             className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all hover:shadow-lg"
//                                         >
//                                             {/* En-tête avec dégradé bleu/noir */}
//                                             <div className="bg-gradient-to-r from-sky-500 to-black p-4 flex justify-between items-center">
//                                                 <div className="bg-white p-2 rounded-full shadow-sm">
//                                                     {getProjectIcon(project.type)}
//                                                 </div>
//                                                 <span className="text-white font-medium text-sm bg-black/20 px-2 py-1 rounded-full">
//                                                     {project.type === 'villa' ? 'Villa' : project.type === 'maison' ? 'Maison' : 'Immeuble'}
//                                                 </span>
//                                             </div>
                                            
//                                             <div className="p-4">
//                                                 <h3 className="font-bold text-lg text-gray-800 mb-3">{project.name}</h3>
                                                
//                                                 {/* Nouvelle illustration simplifiée */}
//                                                 <div className="bg-sky-50 rounded-lg p-3 mb-4 flex justify-center items-center h-32">
//                                                     <div className="relative w-full h-full">
//                                                         {/* Bâtiment stylisé */}
//                                                         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
//                                                             <div className="w-20 h-16 bg-white border-2 border-gray-800 relative">
//                                                                 {/* Fenêtres */}
//                                                                 <div className="absolute top-2 left-2 w-3 h-3 bg-sky-300 border border-gray-400"></div>
//                                                                 <div className="absolute top-2 right-2 w-3 h-3 bg-sky-300 border border-gray-400"></div>
//                                                                 <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-gray-800"></div>
//                                                             </div>
//                                                             {/* Toit */}
//                                                             <div className="w-24 h-4 bg-gray-800 mx-auto -mt-1"></div>
//                                                         </div>
//                                                         {/* Soleil */}
//                                                         <div className="absolute top-2 right-4 w-8 h-8 bg-yellow-300 rounded-full"></div>
//                                                     </div>
//                                                 </div>
                                                
//                                                 {/* Info rapide */}
//                                                 <div className="flex justify-between text-sm mb-3">
//                                                     <span className="text-gray-600">Budget:</span>
//                                                     <span className="font-medium text-gray-800">{Number(project.budget_total).toLocaleString()} €</span>
//                                                 </div>
//                                                 <div className="flex justify-between text-sm">
//                                                     <span className="text-gray-600">Avance:</span>
//                                                     <span className="font-medium text-gray-800">{Number(project.avanceClient).toLocaleString()} €</span>
//                                                 </div>
                                                
//                                                 {/* Bouton info */}
//                                                 <div className="flex justify-end mt-3">
//                                                     <button 
//                                                         onClick={() => toggleProjectInfo(project.id)}
//                                                         className="flex items-center justify-center p-2 bg-sky-100 hover:bg-sky-200 rounded-full transition-colors"
//                                                     >
//                                                         <Info className="w-5 h-5 text-sky-600" />
//                                                     </button>
//                                                 </div>
                                                
//                                                 {/* Détails supplémentaires */}
//                                                 {showProjectInfo[project.id] && (
//                                                     <motion.div 
//                                                         initial={{ opacity: 0, height: 0 }}
//                                                         animate={{ opacity: 1, height: 'auto' }}
//                                                         className="bg-sky-50 rounded-lg p-3 mt-3 border border-sky-200"
//                                                     >
//                                                         {project.details && (
//                                                             <div className="mb-2">
//                                                                 <span className="font-medium text-sky-700">Détails:</span>
//                                                                 <p className="text-gray-600 text-sm mt-1">{project.details}</p>
//                                                             </div>
//                                                         )}
//                                                         {project.email && (
//                                                             <div className="flex justify-between text-sm">
//                                                                 <span className="text-sky-700">Client:</span>
//                                                                 <span className="font-medium text-gray-700">{project.email}</span>
//                                                             </div>
//                                                         )}
//                                                     </motion.div>
//                                                 )}
//                                             </div>
                                            
//                                             {/* Boutons d'action */}
//                                             <div className="border-t border-gray-200 p-3 bg-gray-50 flex justify-between">
//                                                 <button 
//                                                     onClick={() => window.location.href = route('projects.edit', { id: project.id })} 
//                                                     className="text-gray-700 hover:text-sky-600 transition-colors"
//                                                     title="Modifier"
//                                                 >
//                                                     <Edit className="w-5 h-5" />
//                                                 </button>
//                                                 <button 
//                                                     onClick={() => deleteProject(project.id)} 
//                                                     className="text-gray-700 hover:text-red-600 transition-colors"
//                                                     title="Supprimer"
//                                                 >
//                                                     <Trash2 className="w-5 h-5" />
//                                                 </button>
//                                                 <Link 
//                                                     href={route('tasks.index', { id: project.id })} 
//                                                     className="text-gray-700 hover:text-green-600 transition-colors"
//                                                     title="Voir les tâches"
//                                                 >
//                                                     <List className="w-5 h-5" />
//                                                 </Link>
//                                             </div>
//                                         </motion.div>
//                                     ))}
//                                 </motion.div>
//                             ) : (
//                                 <div className="bg-white p-8 rounded-lg shadow-md text-center">
//                                     <div className="bg-sky-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
//                                         <Building className="w-8 h-8 text-sky-500" />
//                                     </div>
//                                     <h3 className="text-lg font-medium text-gray-800 mb-2">Aucun projet trouvé</h3>
//                                     <p className="text-gray-600 mb-4">Commencez par ajouter votre premier projet de construction</p>
//                                     <button 
//                                         onClick={toggleForm}
//                                         className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-sky-400 to-black hover:from-sky-500 hover:to-black text-white font-medium rounded-md transition-colors"
//                                     >
//                                         <Plus className="w-4 h-4 mr-2" />
//                                         Ajouter un projet
//                                     </button>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </motion.div>
//             </div>
//         </AuthenticatedLayout>
//     );
// }


// import { Head, useForm, Link } from '@inertiajs/react';
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Edit, Trash2, List, Plus, X, Check, AlertTriangle } from 'lucide-react';

// export default function Dashboard({ projects, editProject }) {
//     const [showForm, setShowForm] = useState(!!editProject);
//     const [notification, setNotification] = useState(null);
//     const { data, setData, post, processing, reset, errors } = useForm({
//         name: '',
//         details: '',
//         budget_total: '',
//         avanceClient: '',
//         email: ''
//     });

//     useEffect(() => {
//         if (editProject) {
//             setData({
//                 name: editProject.name,
//                 details: editProject.details || '',
//                 budget_total: editProject.budget_total || '',
//                 avanceClient: editProject.avanceClient || '',
//                 email: editProject.email || ''
//             });
//         }
//     }, [editProject]);

//     const addProject = () => {
//         post(route('projects.store'), {
//             data,
//             onSuccess: () => {
//                 reset();
//                 setShowForm(false);
//                 showNotification('Projet ajouté avec succès!', 'success');
//             },
//             onError: () => {
//                 showNotification('Erreur lors de l\'ajout du projet', 'error');
//             }
//         });
//     };

//     const deleteProject = (id) => {
//         if (window.confirm("Êtes-vous sûr de vouloir supprimer ce projet ?")) {
//             post(route('projects.destroy', { id }), {
//                 method: 'POST',
//                 onSuccess: () => {
//                     showNotification('Projet supprimé avec succès!', 'success');
//                 },
//                 onError: () => {
//                     showNotification('Erreur lors de la suppression', 'error');
//                 }
//             });
//         }
//     };

//     const showNotification = (message, type) => {
//         setNotification({ message, type });
//         setTimeout(() => setNotification(null), 3000);
//     };

//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: { 
//             opacity: 1,
//             transition: { 
//                 staggerChildren: 0.1
//             }
//         }
//     };

//     const itemVariants = {
//         hidden: { y: 20, opacity: 0 },
//         visible: { 
//             y: 0, 
//             opacity: 1,
//             transition: { type: 'spring', stiffness: 100 }
//         }
//     };

//     return (
//         <div className="bg-gray-50 min-h-screen">
//             <Head title="Dashboard" />
            
//             {/* Notification */}
//             {notification && (
//                 <motion.div 
//                     initial={{ opacity: 0, y: -50 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -50 }}
//                     className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 flex items-center ${
//                         notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
//                     } text-white`}
//                 >
//                     {notification.type === 'success' ? <Check className="mr-2 w-5 h-5" /> : <AlertTriangle className="mr-2 w-5 h-5" />}
//                     {notification.message}
//                 </motion.div>
//             )}

//             <div className="max-w-7xl mx-auto p-6">
//                 <motion.div 
//                     initial={{ opacity: 0, y: 20 }} 
//                     animate={{ opacity: 1, y: 0 }} 
//                     transition={{ duration: 0.6 }}
//                     className="flex justify-between items-center mb-8"
//                 >
//                     <h1 className="text-3xl font-bold text-gray-900">Tableau de Bord</h1>
                    
//                     {!editProject && !showForm && (
//                         <motion.button
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             onClick={() => setShowForm(true)}
//                             className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center shadow-md transition-all duration-300"
//                         >
//                             <Plus className="mr-2 w-5 h-5" /> Nouveau Projet
//                         </motion.button>
//                     )}
//                 </motion.div>

//                 {/* Formulaire */}
//                 {(showForm || editProject) && (
//                     <motion.div 
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         exit={{ opacity: 0, scale: 0.9 }}
//                         className="bg-white p-8 rounded-xl shadow-xl mb-8 relative overflow-hidden"
//                     >
//                         <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
                        
//                         <div className="flex justify-between items-center mb-6">
//                             <h2 className="text-2xl font-semibold text-gray-900">
//                                 {editProject ? 'Modifier le projet' : 'Ajouter un projet'}
//                             </h2>
//                             {!editProject && (
//                                 <button 
//                                     onClick={() => setShowForm(false)}
//                                     className="text-gray-500 hover:text-gray-700 transition-colors"
//                                 >
//                                     <X className="w-6 h-6" />
//                                 </button>
//                             )}
//                         </div>
                        
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             <div className="relative group">
//                                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                                     Nom du projet
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id="name"
//                                     value={data.name}
//                                     onChange={(e) => setData('name', e.target.value)}
//                                     className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-300"
//                                     placeholder="Saisissez le nom du projet"
//                                 />
//                                 {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
//                             </div>
                            
//                             <div className="relative group">
//                                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                                     Email du client
//                                 </label>
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     value={data.email}
//                                     onChange={(e) => setData('email', e.target.value)}
//                                     className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-300"
//                                     placeholder="email@exemple.com"
//                                 />
//                                 {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
//                             </div>
                            
//                             <div className="relative group md:col-span-2">
//                                 <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">
//                                     Détails
//                                 </label>
//                                 <textarea
//                                     id="details"
//                                     value={data.details}
//                                     onChange={(e) => setData('details', e.target.value)}
//                                     rows="3"
//                                     className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-300"
//                                     placeholder="Description détaillée du projet..."
//                                 ></textarea>
//                                 {errors.details && <p className="mt-1 text-sm text-red-600">{errors.details}</p>}
//                             </div>
                            
//                             <div className="relative group">
//                                 <label htmlFor="budget_total" className="block text-sm font-medium text-gray-700 mb-1">
//                                     Budget total (€)
//                                 </label>
//                                 <div className="relative">
//                                     <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">€</span>
//                                     <input
//                                         type="number"
//                                         id="budget_total"
//                                         value={data.budget_total}
//                                         onChange={(e) => setData('budget_total', e.target.value)}
//                                         className="w-full pl-8 px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-300"
//                                         placeholder="0.00"
//                                     />
//                                 </div>
//                                 {errors.budget_total && <p className="mt-1 text-sm text-red-600">{errors.budget_total}</p>}
//                             </div>
                            
//                             <div className="relative group">
//                                 <label htmlFor="avanceClient" className="block text-sm font-medium text-gray-700 mb-1">
//                                     Avance client (€)
//                                 </label>
//                                 <div className="relative">
//                                     <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">€</span>
//                                     <input
//                                         type="number"
//                                         id="avanceClient"
//                                         value={data.avanceClient}
//                                         onChange={(e) => setData('avanceClient', e.target.value)}
//                                         className="w-full pl-8 px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-300"
//                                         placeholder="0.00"
//                                     />
//                                 </div>
//                                 {errors.avanceClient && <p className="mt-1 text-sm text-red-600">{errors.avanceClient}</p>}
//                             </div>
//                         </div>
                        
//                         <div className="mt-8 flex justify-end">
//                             {!editProject && (
//                                 <button 
//                                     onClick={() => setShowForm(false)}
//                                     className="mr-4 px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
//                                 >
//                                     Annuler
//                                 </button>
//                             )}
//                             <motion.button 
//                                 onClick={addProject} 
//                                 disabled={processing}
//                                 whileHover={{ scale: 1.03 }}
//                                 whileTap={{ scale: 0.97 }}
//                                 className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-800 text-white rounded-lg shadow-lg hover:shadow-xl disabled:opacity-70 transition-all duration-300 flex items-center"
//                             >
//                                 {processing ? 
//                                     "Traitement en cours..." : 
//                                     (<><Check className="mr-2 w-5 h-5" /> {editProject ? 'Mettre à jour' : 'Ajouter le projet'}</>)
//                                 }
//                             </motion.button>
//                         </div>
//                     </motion.div>
//                 )}

//                 {/* Liste des projets */}
//                 <div className="mb-6">
//                     <h2 className="text-2xl font-semibold text-gray-900 mb-4">Mes Projets</h2>
//                     <div className="bg-gray-200 h-1 w-24 rounded-full mb-6"></div>
//                 </div>
                
//                 <motion.div 
//                     variants={containerVariants}
//                     initial="hidden"
//                     animate="visible"
//                     className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
//                 >
//                     {projects.length > 0 ? (
//                         projects.map((project) => (
//                             <motion.div 
//                                 key={project.id} 
//                                 variants={itemVariants}
//                                 whileHover={{ y: -5 }}
//                                 className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
//                             >
//                                 <div className="p-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
//                                 <div className="p-6">
//                                     <div className="flex items-center justify-between mb-4">
//                                         <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-xl shadow-md">
//                                             {project.type === 'villa' ? '🏠' : project.type === 'maison' ? '🏡' : '🏢'}
//                                         </div>
//                                         <div className="bg-blue-50 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
//                                             {project.email ? project.email.split('@')[0] : 'Client'}
//                                         </div>
//                                     </div>
                                    
//                                     <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">{project.name}</h3>
                                    
//                                     <p className="text-gray-600 text-sm mb-4 line-clamp-2 h-10">
//                                         {project.details || "Aucun détail disponible"}
//                                     </p>
                                    
//                                     {(project.budget_total || project.avanceClient) && (
//                                         <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
//                                             {project.budget_total && (
//                                                 <div className="bg-gray-50 p-2 rounded-lg">
//                                                     <p className="text-gray-500">Budget</p>
//                                                     <p className="font-semibold text-gray-900">{project.budget_total} €</p>
//                                                 </div>
//                                             )}
//                                             {project.avanceClient && (
//                                                 <div className="bg-gray-50 p-2 rounded-lg">
//                                                     <p className="text-gray-500">Avance</p>
//                                                     <p className="font-semibold text-gray-900">{project.avanceClient} €</p>
//                                                 </div>
//                                             )}
//                                         </div>
//                                     )}
                                    
//                                     <div className="mt-4 flex justify-between">
//                                         <div className="flex space-x-2">
//                                             <button 
//                                                 onClick={() => window.location.href = route('projects.edit', { id: project.id })} 
//                                                 className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
//                                                 title="Modifier"
//                                             >
//                                                 <Edit className="w-5 h-5" />
//                                             </button>
//                                             <button 
//                                                 onClick={() => deleteProject(project.id)} 
//                                                 className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
//                                                 title="Supprimer"
//                                             >
//                                                 <Trash2 className="w-5 h-5" />
//                                             </button>
//                                         </div>
//                                         <Link 
//                                             href={route('tasks.index', { id: project.id })} 
//                                             className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors flex items-center"
//                                             title="Tâches"
//                                         >
//                                             <List className="w-5 h-5" />
//                                             <span className="ml-1 text-sm">Tâches</span>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         ))
//                     ) : (
//                         <motion.div 
//                             variants={itemVariants}
//                             className="col-span-full flex flex-col items-center justify-center p-12 bg-white rounded-xl shadow-sm border border-dashed border-gray-300"
//                         >
//                             <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
//                                 <Plus className="w-10 h-10 text-gray-400" />
//                             </div>
//                             <p className="text-gray-600 mb-4">Aucun projet trouvé.</p>
//                             <button 
//                                 onClick={() => setShowForm(true)}
//                                 className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                             >
//                                 Créer votre premier projet
//                             </button>
//                         </motion.div>
//                     )}
//                 </motion.div>
//             </div>
//         </div>
//     );
// }



// import { Head, useForm, Link } from '@inertiajs/react';
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Edit, Trash2, List } from 'lucide-react';

// export default function Dashboard({ projects, editProject }) {
//     const { data, setData, post, processing, reset } = useForm({
//         name: '',
//         details: '',
//         budget_total: '',
//         avanceClient: '',
//         email: ''
//     });

//     useEffect(() => {
//         if (editProject) {
//             setData('name', editProject.name);
//             setData('details', editProject.details || '');
//         }
//     }, [editProject]);

//     const addProject = () => {
//         post(route('projects.store'), {
//             data,
//             onSuccess: () => reset(),
//         });
//     };

//     const deleteProject = (id) => {
//         if (window.confirm("Êtes-vous sûr de vouloir supprimer ce projet ?")) {
//             post(route('projects.destroy', { id }), {
//                 method: 'POST',
//             });
//         }
//     };

//     // Composant pour l'icône de projet améliorée
//     const ProjectIcon = ({ project }) => {
//         return (
//             <div className="w-full h-32 bg-blue-100 rounded-t-lg overflow-hidden">
//                 <div className="w-full h-full p-4 flex items-center justify-center">
//                     <div className="bg-white rounded-lg p-3 shadow-md w-full flex flex-col">
//                         <div className="flex items-center mb-2">
//                             <div className="w-4 h-16 bg-blue-500 rounded-sm mr-2"></div>
//                             <div className="flex-1 space-y-2">
//                                 <div className="flex items-center space-x-2">
//                                     <div className="h-2 w-2 bg-blue-200 rounded-full"></div>
//                                     <div className="h-2 bg-blue-400 rounded-sm w-16"></div>
//                                 </div>
//                                 <div className="flex items-center space-x-2">
//                                     <div className="h-2 w-2 bg-blue-200 rounded-full"></div>
//                                     <div className="h-2 bg-blue-400 rounded-sm w-12"></div>
//                                 </div>
//                                 <div className="flex items-center space-x-2">
//                                     <div className="h-2 w-2 bg-blue-200 rounded-full"></div>
//                                     <div className="h-2 bg-blue-400 rounded-sm w-14"></div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="grid grid-cols-2 gap-1">
//                             <div className="h-3 bg-green-400 rounded-sm"></div>
//                             <div className="h-3 bg-yellow-400 rounded-sm"></div>
//                             <div className="h-3 bg-yellow-400 rounded-sm"></div>
//                             <div className="h-3 bg-red-400 rounded-sm"></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <div>
//             <Head title="Dashboard" />
//             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="p-6 bg-gray-100 min-h-screen">
//                 <motion.h1 className="text-3xl font-bold text-gray-900 mb-6">Tableau de Bord</motion.h1>

//                 {/* Formulaire */}
//                 {!editProject && (
//                     <motion.div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
//                         <h2 className="text-xl font-semibold mb-4 text-gray-900">Ajouter un projet</h2>
//                         <div className="grid gap-4">
//                             {['name', 'details', 'budget_total', 'avanceClient', 'email'].map((field, index) => (
//                                 <div key={index} className="relative">
//                                     <input
//                                         type={field.includes('budget') || field.includes('avance') ? 'number' : 'text'}
//                                         id={field}
//                                         placeholder=" "
//                                         value={data[field]}
//                                         onChange={(e) => setData(field, e.target.value)}
//                                         className="peer border border-gray-300 p-2 w-full text-gray-900 bg-transparent rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                                     />
//                                     <label htmlFor={field} className="absolute left-2 top-2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-500 capitalize">
//                                         {field.replace('_', ' ')}
//                                     </label>
//                                 </div>
//                             ))}
//                         </div>
//                         <button onClick={addProject} disabled={processing} className="mt-4 bg-gradient-to-r from-blue-500 to-black text-white p-3 rounded-lg w-full hover:from-blue-600 hover:to-black transition-all duration-300">
//                             Ajouter le projet
//                         </button>
//                     </motion.div>
//                 )}

//                 {/* Liste des projets */}
//                 <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">Projets</h2>
//                 <motion.div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                     {projects.length > 0 ? (
//                         projects.map((project) => (
//                             <motion.div 
//                                 key={project.id} 
//                                 className="bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform overflow-hidden"
//                             >
//                                 {/* Nouvelle icône de projet avec visualisation graphique */}
//                                 <ProjectIcon project={project} />
                                
//                                 <div className="p-4">
//                                     <div className="flex items-center justify-between mb-2">
//                                         <p className="text-gray-900 font-semibold text-lg">{project.name}</p>
//                                         <div className="p-1 px-2 bg-blue-100 text-blue-800 text-xs rounded-full">
//                                             {project.type || 'Projet'}
//                                         </div>
//                                     </div>
//                                     <p className="text-gray-600 text-sm mb-4">{project.details}</p>
                                    
//                                     <div className="flex justify-between items-center border-t pt-3 mt-2">
//                                         <div className="flex space-x-2">
//                                             <button onClick={() => window.location.href = route('projects.edit', { id: project.id })} className="text-blue-500 hover:text-blue-600 p-1">
//                                                 <Edit className="w-5 h-5" />
//                                             </button>
//                                             <button onClick={() => deleteProject(project.id)} className="text-red-500 hover:text-red-600 p-1">
//                                                 <Trash2 className="w-5 h-5" />
//                                             </button>
//                                         </div>
//                                         <Link href={route('tasks.index', { id: project.id })} className="flex items-center text-green-500 hover:text-green-600 p-1">
//                                             <List className="w-5 h-5 mr-1" />
//                                             <span className="text-sm">Tâches</span>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         ))
//                     ) : (
//                         <p>Aucun projet trouvé.</p>
//                     )}
//                 </motion.div>
//             </motion.div>
//         </div>
//     );
// }




// import { Head, useForm, Link } from '@inertiajs/react';
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Edit, Trash2, List, User, FileText, CreditCard, DollarSign, Mail, Plus, Check } from 'lucide-react';

// export default function Dashboard({ projects, editProject }) {
//     const { data, setData, post, processing, reset } = useForm({
//         name: '',
//         details: '',
//         budget_total: '',
//         avanceClient: '',
//         email: ''
//     });

//     useEffect(() => {
//         if (editProject) {
//             setData('name', editProject.name);
//             setData('details', editProject.details || '');
//         }
//     }, [editProject]);

//     const addProject = () => {
//         post(route('projects.store'), {
//             data,
//             onSuccess: () => reset(),
//         });
//     };

//     const deleteProject = (id) => {
//         if (window.confirm("Êtes-vous sûr de vouloir supprimer ce projet ?")) {
//             post(route('projects.destroy', { id }), {
//                 method: 'POST',
//             });
//         }
//     };

//     // Composant pour l'icône de projet améliorée
//     const ProjectIcon = ({ project }) => {
//         return (
//             <div className="w-full h-32 bg-blue-100 rounded-t-lg overflow-hidden">
//                 <div className="w-full h-full p-4 flex items-center justify-center">
//                     <div className="bg-white rounded-lg p-3 shadow-md w-full flex flex-col">
//                         <div className="flex items-center mb-2">
//                             <div className="w-4 h-16 bg-blue-500 rounded-sm mr-2"></div>
//                             <div className="flex-1 space-y-2">
//                                 <div className="flex items-center space-x-2">
//                                     <div className="h-2 w-2 bg-blue-200 rounded-full"></div>
//                                     <div className="h-2 bg-blue-400 rounded-sm w-16"></div>
//                                 </div>
//                                 <div className="flex items-center space-x-2">
//                                     <div className="h-2 w-2 bg-blue-200 rounded-full"></div>
//                                     <div className="h-2 bg-blue-400 rounded-sm w-12"></div>
//                                 </div>
//                                 <div className="flex items-center space-x-2">
//                                     <div className="h-2 w-2 bg-blue-200 rounded-full"></div>
//                                     <div className="h-2 bg-blue-400 rounded-sm w-14"></div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="grid grid-cols-2 gap-1">
//                             <div className="h-3 bg-green-400 rounded-sm"></div>
//                             <div className="h-3 bg-yellow-400 rounded-sm"></div>
//                             <div className="h-3 bg-yellow-400 rounded-sm"></div>
//                             <div className="h-3 bg-red-400 rounded-sm"></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     };

//     // Icônes pour chaque champ du formulaire
//     const fieldIcons = {
//         'name': <User className="w-5 h-5 text-gray-500" />,
//         'details': <FileText className="w-5 h-5 text-gray-500" />,
//         'budget_total': <CreditCard className="w-5 h-5 text-gray-500" />,
//         'avanceClient': <DollarSign className="w-5 h-5 text-gray-500" />,
//         'email': <Mail className="w-5 h-5 text-gray-500" />
//     };

//     return (
//         <div>
//             <Head title="Dashboard" />
//             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="p-6 bg-gray-100 min-h-screen">
//                 <motion.h1 className="text-3xl font-bold text-gray-900 mb-6">Tableau de Bord</motion.h1>

//                 {/* Formulaire amélioré avec icônes */}
//                 {!editProject && (
//                     <motion.div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto border border-gray-200">
//                         <div className="flex items-center justify-between mb-4">
//                             <h2 className="text-xl font-semibold text-gray-900">Ajouter un projet</h2>
//                             <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
//                                 <Plus className="w-5 h-5 text-blue-600" />
//                             </div>
//                         </div>
//                         <div className="grid gap-4">
//                             {['name', 'details', 'budget_total', 'avanceClient', 'email'].map((field, index) => (
//                                 <div key={index} className="relative">
//                                     <div className="flex">
//                                         <div className="bg-gray-100 flex items-center justify-center p-2 rounded-l-md border-l border-y border-gray-300">
//                                             {fieldIcons[field]}
//                                         </div>
//                                         <input
//                                             type={field.includes('budget') || field.includes('avance') ? 'number' : field === 'email' ? 'email' : 'text'}
//                                             id={field}
//                                             placeholder={field === 'name' ? 'Nom du projet' : 
//                                                         field === 'details' ? 'Description du projet' : 
//                                                         field === 'budget_total' ? 'Budget total' : 
//                                                         field === 'avanceClient' ? 'Avance client' : 
//                                                         'Email du client'}
//                                             value={data[field]}
//                                             onChange={(e) => setData(field, e.target.value)}
//                                             className="peer border-r border-y border-gray-300 p-2 w-full text-gray-900 bg-transparent rounded-r-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
//                                         />
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                         <button 
//                             onClick={addProject} 
//                             disabled={processing} 
//                             className="mt-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white p-3 rounded-lg w-full hover:from-blue-600 hover:to-blue-800 transition-all duration-300 flex items-center justify-center"
//                         >
//                             <Check className="w-5 h-5 mr-2" />
//                             {processing ? "Traitement..." : "Ajouter le projet"}
//                         </button>
//                     </motion.div>
//                 )}

//                 {/* Liste des projets */}
//                 <div className="flex items-center justify-between mt-8 mb-4">
//                     <h2 className="text-xl font-semibold text-gray-900">Projets</h2>
//                     <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
//                         {projects.length} {projects.length > 1 ? 'projets' : 'projet'}
//                     </div>
//                 </div>
//                 <motion.div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                     {projects.length > 0 ? (
//                         projects.map((project) => (
//                             <motion.div 
//                                 key={project.id} 
//                                 className="bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform overflow-hidden"
//                             >
//                                 {/* Nouvelle icône de projet avec visualisation graphique */}
//                                 <ProjectIcon project={project} />
                                
//                                 <div className="p-4">
//                                     <div className="flex items-center justify-between mb-2">
//                                         <p className="text-gray-900 font-semibold text-lg">{project.name}</p>
//                                         <div className="p-1 px-2 bg-blue-100 text-blue-800 text-xs rounded-full">
//                                             {project.type || 'Projet'}
//                                         </div>
//                                     </div>
//                                     <p className="text-gray-600 text-sm mb-4">{project.details}</p>
                                    
//                                     <div className="flex justify-between items-center border-t pt-3 mt-2">
//                                         <div className="flex space-x-2">
//                                             <button onClick={() => window.location.href = route('projects.edit', { id: project.id })} className="text-blue-500 hover:text-blue-600 p-1">
//                                                 <Edit className="w-5 h-5" />
//                                             </button>
//                                             <button onClick={() => deleteProject(project.id)} className="text-red-500 hover:text-red-600 p-1">
//                                                 <Trash2 className="w-5 h-5" />
//                                             </button>
//                                         </div>
//                                         <Link href={route('tasks.index', { id: project.id })} className="flex items-center text-green-500 hover:text-green-600 p-1">
//                                             <List className="w-5 h-5 mr-1" />
//                                             <span className="text-sm">Tâches</span>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         ))
//                     ) : (
//                         <div className="col-span-full bg-white p-6 rounded-lg border border-dashed border-gray-300 flex flex-col items-center justify-center">
//                             <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
//                                 <Plus className="w-8 h-8 text-blue-500" />
//                             </div>
//                             <p className="text-gray-500 mb-2">Aucun projet trouvé.</p>
//                             <p className="text-sm text-gray-400">Créez votre premier projet en utilisant le formulaire ci-dessus.</p>
//                         </div>
//                     )}
//                 </motion.div>
//             </motion.div>
//         </div>
//     );
// }


//CLAUDE NE DEMARRE PLUS
// import { Head, useForm, Link } from '@inertiajs/react';
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Trash2, List, Hammer, FileText, CreditCard, DollarSign, Mail, Plus, Check, HardHat, Home, Tool, Building, Calendar } from 'lucide-react';

// export default function Dashboard({ projects, editProject }) {
//     const { data, setData, post, processing, reset } = useForm({
//         name: '',
//         details: '',
//         budget_total: '',
//         avanceClient: '',
//         email: '',
//         startDate: '',
//         projectType: 'construction'
//     });

//     useEffect(() => {
//         if (editProject) {
//             setData('name', editProject.name);
//             setData('details', editProject.details || '');
//             setData('budget_total', editProject.budget_total || '');
//             setData('avanceClient', editProject.avanceClient || '');
//             setData('email', editProject.email || '');
//             setData('startDate', editProject.startDate || '');
//             setData('projectType', editProject.projectType || 'construction');
//         }
//     }, [editProject]);

//     const [showForm, setShowForm] = useState(false);

//     const addProject = () => {
//         post(route('projects.store'), {
//             data,
//             onSuccess: () => {
//                 reset();
//                 setShowForm(false);
//             },
//         });
//     };

//     const deleteProject = (id) => {
//         if (window.confirm("Êtes-vous sûr de vouloir supprimer ce projet ?")) {
//             post(route('projects.destroy', { id }), {
//                 method: 'POST',
//             });
//         }
//     };

//     // Composant pour l'icône de projet améliorée avec thème construction
//     const ProjectIcon = ({ project }) => {
//         return (
//             <div className="w-full h-36 bg-yellow-100 rounded-t-lg overflow-hidden">
//                 <div className="w-full h-full p-4 flex items-center justify-center">
//                     <div className="bg-white rounded-lg p-3 shadow-md w-full flex flex-col">
//                         <div className="flex items-center mb-2">
//                             <div className="w-4 h-16 bg-yellow-500 rounded-sm mr-2"></div>
//                             <div className="flex-1 space-y-2">
//                                 <div className="flex items-center space-x-2">
//                                     <div className="h-2 w-2 bg-yellow-200 rounded-full"></div>
//                                     <div className="h-2 bg-blue-400 rounded-sm w-16"></div>
//                                 </div>
//                                 <div className="flex items-center space-x-2">
//                                     <div className="h-2 w-2 bg-yellow-200 rounded-full"></div>
//                                     <div className="h-2 bg-blue-400 rounded-sm w-12"></div>
//                                 </div>
//                                 <div className="flex items-center space-x-2">
//                                     <div className="h-2 w-2 bg-yellow-200 rounded-full"></div>
//                                     <div className="h-2 bg-blue-400 rounded-sm w-14"></div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="grid grid-cols-2 gap-1">
//                             <div className="h-3 bg-green-400 rounded-sm"></div>
//                             <div className="h-3 bg-yellow-400 rounded-sm"></div>
//                             <div className="h-3 bg-yellow-400 rounded-sm"></div>
//                             <div className="h-3 bg-red-400 rounded-sm"></div>
//                         </div>
//                         <div className="mt-2 grid grid-cols-4 gap-1">
//                             <div className="h-2 bg-gray-300 rounded-sm"></div>
//                             <div className="h-2 bg-gray-300 rounded-sm"></div>
//                             <div className="h-2 bg-gray-300 rounded-sm"></div>
//                             <div className="h-2 bg-gray-300 rounded-sm"></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     };

//     // Icônes pour chaque champ du formulaire avec thème construction
//     const fieldIcons = {
//         'name': <Building className="w-5 h-5 text-yellow-600" />,
//         'details': <FileText className="w-5 h-5 text-yellow-600" />,
//         'budget_total': <CreditCard className="w-5 h-5 text-yellow-600" />,
//         'avanceClient': <DollarSign className="w-5 h-5 text-yellow-600" />,
//         'email': <Mail className="w-5 h-5 text-yellow-600" />,
//         'startDate': <Calendar className="w-5 h-5 text-yellow-600" />,
//         'projectType': <Hammer className="w-5 h-5 text-yellow-600" />
//     };

//     const projectTypes = [
//         { value: 'construction', label: 'Construction' },
//         { value: 'renovation', label: 'Rénovation' },
//         { value: 'installation', label: 'Installation' },
//         { value: 'maintenance', label: 'Maintenance' }
//     ];

//     return (
//         <div>
//             <Head title="Dashboard" />
//             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="p-6 bg-gray-100 min-h-screen">
//                 <div className="flex items-center justify-between mb-6">
//                     <motion.h1 className="text-3xl font-bold text-gray-900">Gestion de Projets de Construction</motion.h1>
//                     <div className="flex items-center space-x-2">
//                         <div className="h-6 w-6 bg-yellow-500 rounded-sm"></div>
//                         <div className="h-6 w-6 bg-blue-500 rounded-sm"></div>
//                         <div className="h-6 w-6 bg-red-500 rounded-sm"></div>
//                     </div>
//                 </div>

//                 {/* Bouton pour afficher le formulaire */}
//                 {!showForm && !editProject && (
//                     <motion.button
//                         onClick={() => setShowForm(true)}
//                         className="mx-auto mb-6 flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-white p-4 rounded-lg shadow-lg transition-all duration-300"
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                     >
//                         <div className="mr-3">
//                             <HardHat className="w-6 h-6" />
//                         </div>
//                         <span className="font-bold">Nouveau Projet de Construction</span>
//                     </motion.button>
//                 )}

//                 {/* Formulaire amélioré avec icônes de construction */}
//                 {(showForm || editProject) && (
//                     <motion.div 
//                         initial={{ opacity: 0, y: -20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.4 }}
//                         className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto border-l-4 border-yellow-500"
//                     >
//                         <div className="flex items-center justify-between mb-6">
//                             <h2 className="text-xl font-semibold text-gray-900">{editProject ? 'Modifier le projet' : 'Nouveau Projet'}</h2>
//                             <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
//                                 <HardHat className="w-6 h-6 text-yellow-600" />
//                             </div>
//                         </div>
//                         <div className="grid gap-4">
//                             {['name', 'details', 'budget_total', 'avanceClient', 'email', 'startDate', 'projectType'].map((field, index) => (
//                                 <div key={index} className="relative">
//                                     {field === 'projectType' ? (
//                                         <div className="flex">
//                                             <div className="bg-yellow-100 flex items-center justify-center p-2 rounded-l-md border-l border-y border-gray-300">
//                                                 {fieldIcons[field]}
//                                             </div>
//                                             <select
//                                                 id={field}
//                                                 value={data[field]}
//                                                 onChange={(e) => setData(field, e.target.value)}
//                                                 className="peer border-r border-y border-gray-300 p-2 w-full text-gray-900 bg-transparent rounded-r-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 focus:outline-none"
//                                             >
//                                                 {projectTypes.map(type => (
//                                                     <option key={type.value} value={type.value}>{type.label}</option>
//                                                 ))}
//                                             </select>
//                                         </div>
//                                     ) : (
//                                         <div className="flex">
//                                             <div className="bg-yellow-100 flex items-center justify-center p-2 rounded-l-md border-l border-y border-gray-300">
//                                                 {fieldIcons[field]}
//                                             </div>
//                                             <input
//                                                 type={field.includes('budget') || field.includes('avance') ? 'number' : 
//                                                       field === 'email' ? 'email' : 
//                                                       field === 'startDate' ? 'date' : 'text'}
//                                                 id={field}
//                                                 placeholder={field === 'name' ? 'Nom du projet' : 
//                                                             field === 'details' ? 'Description du projet' : 
//                                                             field === 'budget_total' ? 'Budget total (€)' : 
//                                                             field === 'avanceClient' ? 'Avance client (€)' : 
//                                                             field === 'startDate' ? 'Date de début' :
//                                                             'Email du client'}
//                                                 value={data[field]}
//                                                 onChange={(e) => setData(field, e.target.value)}
//                                                 className="peer border-r border-y border-gray-300 p-2 w-full text-gray-900 bg-transparent rounded-r-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 focus:outline-none"
//                                             />
//                                         </div>
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                         <div className="flex space-x-3 mt-6">
//                             <button 
//                                 onClick={addProject} 
//                                 disabled={processing} 
//                                 className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-3 rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 flex items-center justify-center"
//                             >
//                                 <Check className="w-5 h-5 mr-2" />
//                                 {processing ? "Traitement..." : editProject ? "Sauvegarder" : "Ajouter le projet"}
//                             </button>
//                             <button 
//                                 onClick={() => {
//                                     reset();
//                                     setShowForm(false);
//                                 }}
//                                 className="bg-gray-300 text-gray-700 p-3 rounded-lg hover:bg-gray-400 transition-all duration-300"
//                             >
//                                 Annuler
//                             </button>
//                         </div>
//                     </motion.div>
//                 )}

//                 {/* Liste des projets */}
//                 <div className="flex items-center justify-between mt-8 mb-4">
//                     <div className="flex items-center">
//                         <Hammer className="w-6 h-6 text-yellow-600 mr-2" />
//                         <h2 className="text-xl font-semibold text-gray-900">Projets en cours</h2>
//                     </div>
//                     <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium border border-yellow-300">
//                         {projects.length} {projects.length > 1 ? 'projets' : 'projet'}
//                     </div>
//                 </div>
//                 <motion.div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                     {projects.length > 0 ? (
//                         projects.map((project) => (
//                             <motion.div 
//                                 key={project.id} 
//                                 className="bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform overflow-hidden border border-gray-200"
//                                 whileHover={{ y: -5 }}
//                             >
//                                 {/* Nouvelle icône de projet avec visualisation graphique */}
//                                 <ProjectIcon project={project} />
                                
//                                 <div className="p-4">
//                                     <div className="flex items-center justify-between mb-2">
//                                         <p className="text-gray-900 font-semibold text-lg">{project.name}</p>
//                                         <div className="p-1 px-3 bg-yellow-100 text-yellow-800 text-xs rounded-full border border-yellow-200">
//                                             {project.type || 'Construction'}
//                                         </div>
//                                     </div>
//                                     <p className="text-gray-600 text-sm mb-2">{project.details}</p>
                                    
//                                     <div className="grid grid-cols-2 gap-2 mb-3">
//                                         <div className="bg-gray-100 p-2 rounded-md">
//                                             <p className="text-xs text-gray-500">Budget</p>
//                                             <p className="font-medium text-gray-800">{project.budget_total ? `${project.budget_total} €` : 'Non défini'}</p>
//                                         </div>
//                                         <div className="bg-gray-100 p-2 rounded-md">
//                                             <p className="text-xs text-gray-500">Avance</p>
//                                             <p className="font-medium text-gray-800">{project.avanceClient ? `${project.avanceClient} €` : '0 €'}</p>
//                                         </div>
//                                     </div>
                                    
//                                     <div className="flex justify-between items-center border-t pt-3 mt-2">
//                                         <div className="flex space-x-2">
//                                             <button onClick={() => window.location.href = route('projects.edit', { id: project.id })} className="text-yellow-500 hover:text-yellow-600 p-1">
//                                                 <Tool className="w-5 h-5" />
//                                             </button>
//                                             <button onClick={() => deleteProject(project.id)} className="text-red-500 hover:text-red-600 p-1">
//                                                 <Trash2 className="w-5 h-5" />
//                                             </button>
//                                         </div>
//                                         <Link href={route('tasks.index', { id: project.id })} className="flex items-center text-blue-500 hover:text-blue-600 p-1">
//                                             <List className="w-5 h-5 mr-1" />
//                                             <span className="text-sm">Tâches</span>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         ))
//                     ) : (
//                         <div className="col-span-full bg-white p-8 rounded-lg border border-dashed border-yellow-300 flex flex-col items-center justify-center">
//                             <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
//                                 <HardHat className="w-10 h-10 text-yellow-500" />
//                             </div>
//                             <p className="text-gray-700 text-lg font-medium mb-2">Aucun projet de construction en cours</p>
//                             <p className="text-sm text-gray-500 mb-4 text-center">Créez votre premier projet en cliquant sur le bouton "Nouveau Projet de Construction"</p>
//                             {!showForm && (
//                                 <button
//                                     onClick={() => setShowForm(true)}
//                                     className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center"
//                                 >
//                                     <Plus className="w-5 h-5 mr-2" />
//                                     Commencer un projet
//                                 </button>
//                             )}
//                         </div>
//                     )}
//                 </motion.div>
//             </motion.div>
//         </div>
//     );
// }



// import { Head, useForm, Link } from '@inertiajs/react';
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Edit, Trash2, List, HardHat, FileText, CreditCard, DollarSign, Mail, Plus, Check, Hammer, Tool } from 'lucide-react';

// export default function Dashboard({ projects, editProject }) {
//     const { data, setData, post, processing, reset } = useForm({
//         name: '',
//         details: '',
//         budget_total: '',
//         avanceClient: '',
//         email: ''
//     });

//     useEffect(() => {
//         if (editProject) {
//             setData('name', editProject.name);
//             setData('details', editProject.details || '');
//         }
//     }, [editProject]);

//     const addProject = () => {
//         post(route('projects.store'), {
//             data,
//             onSuccess: () => reset(),
//         });
//     };

//     const deleteProject = (id) => {
//         if (window.confirm("Êtes-vous sûr de vouloir supprimer ce projet ?")) {
//             post(route('projects.destroy', { id }), {
//                 method: 'POST',
//             });
//         }
//     };

//     // Composant pour l'icône de projet améliorée avec thème construction
//     const ProjectIcon = ({ project }) => {
//         return (
//             <div className="w-full h-32 bg-yellow-100 rounded-t-lg overflow-hidden">
//                 <div className="w-full h-full p-4 flex items-center justify-center">
//                     <div className="bg-white rounded-lg p-3 shadow-md w-full flex flex-col">
//                         <div className="flex items-center mb-2">
//                             <div className="w-4 h-16 bg-yellow-500 rounded-sm mr-2"></div>
//                             <div className="flex-1 space-y-2">
//                                 <div className="flex items-center space-x-2">
//                                     <div className="h-2 w-2 bg-yellow-200 rounded-full"></div>
//                                     <div className="h-2 bg-blue-400 rounded-sm w-16"></div>
//                                 </div>
//                                 <div className="flex items-center space-x-2">
//                                     <div className="h-2 w-2 bg-yellow-200 rounded-full"></div>
//                                     <div className="h-2 bg-blue-400 rounded-sm w-12"></div>
//                                 </div>
//                                 <div className="flex items-center space-x-2">
//                                     <div className="h-2 w-2 bg-yellow-200 rounded-full"></div>
//                                     <div className="h-2 bg-blue-400 rounded-sm w-14"></div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="grid grid-cols-2 gap-1">
//                             <div className="h-3 bg-green-400 rounded-sm"></div>
//                             <div className="h-3 bg-yellow-400 rounded-sm"></div>
//                             <div className="h-3 bg-yellow-400 rounded-sm"></div>
//                             <div className="h-3 bg-red-400 rounded-sm"></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     };

//     // Icônes pour chaque champ du formulaire avec thème construction
//     const fieldIcons = {
//         'name': <HardHat className="w-5 h-5 text-yellow-600" />,
//         'details': <FileText className="w-5 h-5 text-yellow-600" />,
//         'budget_total': <CreditCard className="w-5 h-5 text-yellow-600" />,
//         'avanceClient': <DollarSign className="w-5 h-5 text-yellow-600" />,
//         'email': <Mail className="w-5 h-5 text-yellow-600" />
//     };

//     return (
//         <div>
//             <Head title="Dashboard" />
//             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="p-6 bg-gray-100 min-h-screen">
//                 <motion.h1 className="text-3xl font-bold text-gray-900 mb-6">Tableau de Bord - Projets de Construction</motion.h1>

//                 {/* Formulaire amélioré avec icônes */}
//                 {!editProject && (
//                     <motion.div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto border-l-4 border-yellow-500">
//                         <div className="flex items-center justify-between mb-4">
//                             <h2 className="text-xl font-semibold text-gray-900">Ajouter un projet</h2>
//                             <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
//                                 <Hammer className="w-5 h-5 text-yellow-600" />
//                             </div>
//                         </div>
//                         <div className="grid gap-4">
//                             {['name', 'details', 'budget_total', 'avanceClient', 'email'].map((field, index) => (
//                                 <div key={index} className="relative">
//                                     <div className="flex">
//                                         <div className="bg-yellow-100 flex items-center justify-center p-2 rounded-l-md border-l border-y border-yellow-300">
//                                             {fieldIcons[field]}
//                                         </div>
//                                         <input
//                                             type={field.includes('budget') || field.includes('avance') ? 'number' : field === 'email' ? 'email' : 'text'}
//                                             id={field}
//                                             placeholder={field === 'name' ? 'Nom du projet' : 
//                                                         field === 'details' ? 'Description du projet' : 
//                                                         field === 'budget_total' ? 'Budget total (€)' : 
//                                                         field === 'avanceClient' ? 'Avance client (€)' : 
//                                                         'Email du client'}
//                                             value={data[field]}
//                                             onChange={(e) => setData(field, e.target.value)}
//                                             className="peer border-r border-y border-gray-300 p-2 w-full text-gray-900 bg-transparent rounded-r-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 focus:outline-none"
//                                         />
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                         <button 
//                             onClick={addProject} 
//                             disabled={processing} 
//                             className="mt-6 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white p-3 rounded-lg w-full hover:from-yellow-600 hover:to-yellow-800 transition-all duration-300 flex items-center justify-center"
//                         >
//                             <Check className="w-5 h-5 mr-2" />
//                             {processing ? "Traitement..." : "Ajouter le projet"}
//                         </button>
//                     </motion.div>
//                 )}

//                 {/* Liste des projets */}
//                 <div className="flex items-center justify-between mt-8 mb-4">
//                     <div className="flex items-center">
//                         <Tool className="w-6 h-6 text-yellow-600 mr-2" />
//                         <h2 className="text-xl font-semibold text-gray-900">Projets</h2>
//                     </div>
//                     <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium border border-yellow-200">
//                         {projects.length} {projects.length > 1 ? 'projets' : 'projet'}
//                     </div>
//                 </div>
//                 <motion.div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                     {projects.length > 0 ? (
//                         projects.map((project) => (
//                             <motion.div 
//                                 key={project.id} 
//                                 className="bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform overflow-hidden border border-gray-200"
//                             >
//                                 {/* Nouvelle icône de projet avec visualisation graphique */}
//                                 <ProjectIcon project={project} />
                                
//                                 <div className="p-4">
//                                     <div className="flex items-center justify-between mb-2">
//                                         <p className="text-gray-900 font-semibold text-lg">{project.name}</p>
//                                         <div className="p-1 px-2 bg-yellow-100 text-yellow-800 text-xs rounded-full border border-yellow-200">
//                                             {project.type || 'Construction'}
//                                         </div>
//                                     </div>
//                                     <p className="text-gray-600 text-sm mb-4">{project.details}</p>
                                    
//                                     <div className="flex justify-between items-center border-t pt-3 mt-2">
//                                         <div className="flex space-x-2">
//                                             <button onClick={() => window.location.href = route('projects.edit', { id: project.id })} className="text-yellow-500 hover:text-yellow-600 p-1">
//                                                 <Edit className="w-5 h-5" />
//                                             </button>
//                                             <button onClick={() => deleteProject(project.id)} className="text-red-500 hover:text-red-600 p-1">
//                                                 <Trash2 className="w-5 h-5" />
//                                             </button>
//                                         </div>
//                                         <Link href={route('tasks.index', { id: project.id })} className="flex items-center text-blue-500 hover:text-blue-600 p-1">
//                                             <List className="w-5 h-5 mr-1" />
//                                             <span className="text-sm">Tâches</span>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         ))
//                     ) : (
//                         <div className="col-span-full bg-white p-6 rounded-lg border border-dashed border-yellow-300 flex flex-col items-center justify-center">
//                             <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
//                                 <HardHat className="w-8 h-8 text-yellow-500" />
//                             </div>
//                             <p className="text-gray-500 mb-2">Aucun projet trouvé.</p>
//                             <p className="text-sm text-gray-400">Créez votre premier projet en utilisant le formulaire ci-dessus.</p>
//                         </div>
//                     )}
//                 </motion.div>
//             </motion.div>
//         </div>
//     );
// }



import { Head, useForm, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Edit, Trash2, List, Plus, Building, Home, Briefcase, ChevronRight, DollarSign, Mail, FileText, Info } from 'lucide-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Dashboard({ projects, editProject, clients }) {
    const [showForm, setShowForm] = useState(false);
    const [showProjectInfo, setShowProjectInfo] = useState({});
    
    const { data, setData, post, processing, reset, errors } = useForm({
        name: '',
        details: '',
        budget_total: '',
        avanceClient: '',
        email: '',
        type: 'immeuble'
    });

    useEffect(() => {
        if (editProject) {
            setData({
                name: editProject.name || '',
                details: editProject.details || '',
                budget_total: editProject.budget_total || '',
                avanceClient: editProject.avanceClient || '',
                email: editProject.email || '',
                type: editProject.type || 'immeuble'
            });
            setShowForm(true);
        }
    }, [editProject]);

    const addProject = () => {
        post(route('projects.store'), {
            data,
            onSuccess: () => {
                reset();
                setShowForm(false);
            },
        });
    };

    const deleteProject = (id) => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer ce projet ?")) {
            post(route('projects.destroy', { id }), {
                method: 'POST',
            });
        }
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const toggleProjectInfo = (id) => {
        setShowProjectInfo(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const getProjectIcon = (type) => {
        switch(type) {
            case 'villa':
                return <Home className="w-8 h-8" />;
            case 'maison':
                return <Home className="w-8 h-8" />;
            case 'immeuble':
            default:
                return <Building className="w-8 h-8" />;
        }
    };

    const renderConstructionIllustration = () => {
        return (
            <div className="bg-white border border-gray-100 rounded-lg p-3 mb-3 relative overflow-hidden shadow-sm">
                <div className="flex items-center justify-between h-24">
                    {/* Brick Stack */}
                    <div className="w-16 h-16 bg-orange-600 rounded-lg relative shadow-md">
                        <div className="absolute top-2 left-2 w-3 h-2 bg-orange-800 opacity-70"></div>
                        <div className="absolute bottom-3 right-3 w-4 h-3 bg-orange-700 opacity-80"></div>
                    </div>
                    
                    {/* Hard Hat */}
                    <div className="w-20 h-16 bg-yellow-500 rounded-t-full rounded-b-sm shadow-md flex items-center justify-center">
                        <div className="w-14 h-10 bg-yellow-600 rounded-t-full rounded-b-sm"></div>
                    </div>
                    
                    {/* Trowel */}
                    <div className="w-16 h-16 relative">
                        <div className="absolute bottom-0 left-0 w-2 h-10 bg-gray-700 transform -rotate-45 origin-bottom-left"></div>
                        <div className="absolute bottom-0 left-2 w-8 h-3 bg-gray-500 rounded-r-sm"></div>
                    </div>
                </div>
                
                {/* Small decorative elements */}
                <div className="absolute bottom-1 left-1 w-2 h-2 bg-blue-500 rounded-full opacity-50"></div>
                <div className="absolute top-1 right-1 w-3 h-3 bg-black rounded-full opacity-30"></div>
            </div>
        );
    };

    return (
        <AuthenticatedLayout>
        <div>
            <Head title="Dashboard" />

            <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }} 
                className="p-6 bg-white min-h-screen"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <motion.h1 className="text-3xl font-bold text-gray-800">
                            Tableau de Bord <span className="text-sky-500">Construction</span>
                        </motion.h1>
                        
                        {!showForm && (
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={toggleForm}
                                className="bg-gradient-to-r from-sky-400 to-black text-white font-semibold py-2 px-4 rounded-lg shadow-md flex items-center gap-2 transition-all"
                            >
                                <Plus className="w-5 h-5" />
                                Nouveau Projet
                            </motion.button>
                        )}
                    </div>

                    {/* Formulaire */}
                    {showForm && (
                        <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-white p-6 rounded-lg shadow-lg mb-8 border-l-4 border-sky-400"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-semibold text-gray-800">
                                    {editProject ? 'Modifier le projet' : 'Ajouter un nouveau projet'}
                                </h2>
                                {showForm && (
                                    <button 
                                        onClick={toggleForm} 
                                        className="text-gray-500 hover:text-gray-700"
                                    >
                                        &times;
                                    </button>
                                )}
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-4">
                                    <div className="form-group">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Nom du projet</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Briefcase className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-gray-50"
                                                placeholder="Résidence Les Oliviers"
                                            />
                                        </div>
                                        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                                    </div>

                                    <div className="form-group">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Budget total (€)</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <DollarSign className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="number"
                                                value={data.budget_total}
                                                onChange={(e) => setData('budget_total', e.target.value)}
                                                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-gray-50"
                                                placeholder="150000"
                                            />
                                        </div>
                                        {errors.budget_total && <p className="mt-1 text-sm text-red-600">{errors.budget_total}</p>}
                                    </div>

                                    <div className="form-group">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Avance client (€)</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <DollarSign className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="number"
                                                value={data.avanceClient}
                                                onChange={(e) => setData('avanceClient', e.target.value)}
                                                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-gray-50"
                                                placeholder="30000"
                                            />
                                        </div>
                                        {errors.avanceClient && <p className="mt-1 text-sm text-red-600">{errors.avanceClient}</p>}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="form-group">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email du client</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Mail className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <select 
                                                value={data.email} 
                                                onChange={(e) => setData('email', e.target.value)}
                                                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-gray-50"
                                            >
                                                {clients.map((client, i) => (
                                                    <option key={i} value={client.email}>
                                                        {client.email}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                    </div>

                                    <div className="form-group">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Type de projet</label>
                                        <div className="relative">
                                            <select
                                                value={data.type}
                                                onChange={(e) => setData('type', e.target.value)}
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-gray-50"
                                            >
                                                <option value="immeuble">Immeuble</option>
                                                <option value="villa">Villa</option>
                                                <option value="maison">Maison</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Détails</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 pt-3 pointer-events-none">
                                                <FileText className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <textarea
                                                value={data.details}
                                                onChange={(e) => setData('details', e.target.value)}
                                                rows="3"
                                                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-gray-50"
                                                placeholder="Description du projet..."
                                            ></textarea>
                                        </div>
                                        {errors.details && <p className="mt-1 text-sm text-red-600">{errors.details}</p>}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex justify-end">
                                <button 
                                    onClick={() => toggleForm()} 
                                    className="mr-3 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                                >
                                    Annuler
                                </button>
                                <button 
                                    onClick={addProject} 
                                    disabled={processing} 
                                    className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-sky-400 to-black hover:from-sky-500 hover:to-black rounded-md shadow-sm transition-colors flex items-center"
                                >
                                    {editProject ? 'Mettre à jour' : 'Enregistrer le projet'}
                                    <ChevronRight className="ml-2 w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* Liste des projets */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <Briefcase className="mr-2 w-5 h-5 text-sky-500" />
                            Projets en cours ({projects.length})
                        </h2>
                        
                        {projects.length > 0 ? (
                            <motion.div 
                                className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ staggerChildren: 0.1 }}
                            >
                                {projects.map((project) => (
                                    <motion.div 
                                        key={project.id}
                                        whileHover={{ y: -5 }}
                                        className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
                                    >
                                        <div className="bg-gradient-to-r from-sky-400 to-black p-4 flex justify-between items-center">
                                            <div className="bg-white p-3 rounded-full">
                                                {getProjectIcon(project.type)}
                                            </div>
                                            <div className="text-right">
                                                <span className="text-xs font-medium bg-white text-gray-800 px-2 py-1 rounded-full">
                                                    {project.type === 'villa' ? 'Villa' : project.type === 'maison' ? 'Maison' : 'Immeuble'}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <div className="p-4">
                                            <h3 className="font-bold text-lg text-gray-800 mb-2">{project.name}</h3>
                                            
                                            {/* New Construction Illustration */}
                                            {renderConstructionIllustration()}
                                            
                                            {/* Info icon for project details */}
                                            <div className="flex justify-end mb-3">
                                                <button 
                                                    onClick={() => toggleProjectInfo(project.id)}
                                                    className="flex items-center justify-center p-2 bg-sky-100 hover:bg-sky-200 rounded-full transition-colors"
                                                >
                                                    <Info className="w-5 h-5 text-sky-600" />
                                                </button>
                                            </div>
                                            
                                            {/* Project info popup */}
                                            {showProjectInfo[project.id] && (
                                                <motion.div 
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    className="bg-sky-50 rounded-lg p-3 mb-3 border border-sky-200"
                                                >
                                                    {project.details && (
                                                        <div className="mb-2">
                                                            <span className="font-medium text-sky-700">Détails:</span>
                                                            <p className="text-gray-600 text-sm mt-1">{project.details}</p>
                                                        </div>
                                                    )}
                                                    
                                                    {project.email && (
                                                        <div className="flex justify-between text-sm mb-2">
                                                            <span className="text-sky-700">Email:</span>
                                                            <span className="font-medium text-gray-700">{project.email}</span>
                                                        </div>
                                                    )}
                                                    
                                                    {project.budget_total && (
                                                        <div className="flex justify-between text-sm mb-2">
                                                            <span className="text-sky-700">Budget:</span>
                                                            <span className="font-medium text-gray-700">{Number(project.budget_total).toLocaleString()} €</span>
                                                        </div>
                                                    )}
                                                    
                                                    {project.avanceClient && (
                                                        <div className="flex justify-between text-sm">
                                                            <span className="text-sky-700">Avance:</span>
                                                            <span className="font-medium text-gray-700">{Number(project.avanceClient).toLocaleString()} €</span>
                                                        </div>
                                                    )}
                                                </motion.div>
                                            )}
                                        </div>
                                        
                                        <div className="border-t border-gray-200 p-3 bg-gray-50 flex justify-between">
                                            <button 
                                                onClick={() => window.location.href = route('projects.edit', { id: project.id })} 
                                                className="text-gray-700 hover:text-sky-600 transition-colors"
                                                title="Modifier"
                                            >
                                                <Edit className="w-5 h-5" />
                                            </button>
                                            <button 
                                                onClick={() => deleteProject(project.id)} 
                                                className="text-gray-700 hover:text-red-600 transition-colors"
                                                title="Supprimer"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                            <Link 
                                                href={route('tasks.index', { id: project.id })} 
                                                className="text-gray-700 hover:text-green-600 transition-colors"
                                                title="Voir les tâches"
                                            >
                                                <List className="w-5 h-5" />
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                                <div className="bg-sky-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <Building className="w-8 h-8 text-sky-500" />
                                </div>
                                <h3 className="text-lg font-medium text-gray-800 mb-2">Aucun projet trouvé</h3>
                                <p className="text-gray-600 mb-4">Commencez par ajouter votre premier projet de construction</p>
                                <button 
                                    onClick={toggleForm}
                                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-sky-400 to-black hover:from-sky-500 hover:to-black text-white font-medium rounded-md transition-colors"
                                >
                                    <Plus className="w-4 h-4 mr-2" />
                                    Ajouter un projet
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
        </AuthenticatedLayout>
    );
}



