// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
// import { Head, Link } from '@inertiajs/react';
// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import { Home, Building, Info, List } from 'lucide-react';

// export default function DashboardClient({ auth, projects }) {
//     const [showProjectInfo, setShowProjectInfo] = useState({});
    
//     const toggleProjectInfo = (id) => {
//         setShowProjectInfo(prev => ({
//             ...prev,
//             [id]: !prev[id]
//         }));
//     };

//     const getProjectIcon = (type) => {
//         switch(type) {
//             case 'villa':
//             case 'maison':
//                 return <Home className="w-8 h-8" />;
//             case 'immeuble':
//             default:
//                 return <Building className="w-8 h-8" />;
//         }
//     };

//     return (
//         <AuthenticatedLayout
//             user={auth.user}
//             header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tableau de Bord Client</h2>}
//         >
//             <Head title="Tableau de Bord Client" />
            
//             <div className="py-12">
//                 <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
//                     <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
//                         <div className="p-6 bg-white border-b border-gray-200">
//                             <h2 className="text-xl font-semibold mb-6">Mes Projets</h2>
                            
//                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                                 {projects.length > 0 ? (
//                                     projects.map((project) => (
//                                         <motion.div 
//                                             key={project.id}
//                                             whileHover={{ y: -5 }}
//                                             className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
//                                         >
//                                             <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-4 flex justify-between items-center">
//                                                 <div className="bg-white p-3 rounded-full">
//                                                     {getProjectIcon(project.type)}
//                                                 </div>
//                                                 <div className="text-right">
//                                                     <span className="text-xs font-medium bg-white text-gray-800 px-2 py-1 rounded-full">
//                                                         {project.type === 'villa' ? 'Villa' : 
//                                                          project.type === 'maison' ? 'Maison' : 'Immeuble'}
//                                                     </span>
//                                                 </div>
//                                             </div>
                                            
//                                             <div className="p-4">
//                                                 <h3 className="font-bold text-lg text-gray-800 mb-2">{project.name}</h3>
                                                
//                                                 <div className="flex justify-end mb-3">
//                                                     <button 
//                                                         onClick={() => toggleProjectInfo(project.id)}
//                                                         className="flex items-center justify-center p-2 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors"
//                                                     >
//                                                         <Info className="w-5 h-5 text-blue-600" />
//                                                     </button>
//                                                 </div>
                                                
//                                                 {showProjectInfo[project.id] && (
//                                                     <motion.div 
//                                                         initial={{ opacity: 0, height: 0 }}
//                                                         animate={{ opacity: 1, height: 'auto' }}
//                                                         className="bg-blue-50 rounded-lg p-3 mb-3 border border-blue-200"
//                                                     >
//                                                         {project.details && (
//                                                             <div className="mb-2">
//                                                                 <span className="font-medium text-blue-700">Détails:</span>
//                                                                 <p className="text-gray-600 text-sm mt-1">{project.details}</p>
//                                                             </div>
//                                                         )}
                                                        
//                                                         {project.budget_total && (
//                                                             <div className="flex justify-between text-sm mb-2">
//                                                                 <span className="text-blue-700">Budget:</span>
//                                                                 <span className="font-medium text-gray-700">
//                                                                     {Number(project.budget_total).toLocaleString()} €
//                                                                 </span>
//                                                             </div>
//                                                         )}
//                                                     </motion.div>
//                                                 )}
//                                             </div>
                                            
//                                             <div className="border-t border-gray-200 p-4 bg-gray-50 flex justify-center">
//                                                 <Link 
//                                                     href={route('client.projects.tasks', project.id)} 
//                                                     className="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 active:bg-blue-900 focus:outline-none focus:border-blue-900 focus:ring focus:ring-blue-300 disabled:opacity-25 transition"
//                                                 >
//                                                     <List className="w-4 h-4 mr-2" />
//                                                     Voir les tâches
//                                                 </Link>
//                                             </div>
//                                         </motion.div>
//                                     ))
//                                 ) : (
//                                     <div className="col-span-full text-center py-8">
//                                         <p className="text-gray-500">Aucun projet trouvé.</p>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </AuthenticatedLayout>
//     );
// }


import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Home, Building, Info, List, Briefcase, ChevronRight } from 'lucide-react';

export default function DashboardClient({ auth, projects }) {
    const [showProjectInfo, setShowProjectInfo] = useState({});
    
    const toggleProjectInfo = (id) => {
        setShowProjectInfo(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const getProjectIcon = (type) => {
        switch(type) {
            case 'villa':
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
                <div className="absolute bottom-1 left-1 w-2 h-2 bg-sky-500 rounded-full opacity-50"></div>
                <div className="absolute top-1 right-1 w-3 h-3 bg-black rounded-full opacity-30"></div>
            </div>
        );
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tableau de Bord Client</h2>}
        >
            <Head title="Tableau de Bord Client" />
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }} 
                className="py-12 min-h-screen"
            >
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <motion.h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                <Briefcase className="mr-2 w-6 h-6 text-sky-500" />
                                Mes <span className="text-sky-500 ml-2">Projets</span>
                            </motion.h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {projects.length > 0 ? (
                                    projects.map((project) => (
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
                                                        {project.type === 'villa' ? 'Villa' : 
                                                         project.type === 'maison' ? 'Maison' : 'Immeuble'}
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div className="p-4">
                                                <h3 className="font-bold text-lg text-gray-800 mb-2">{project.name}</h3>
                                                
                                                {/* Construction Illustration */}
                                                {renderConstructionIllustration()}
                                                
                                                <div className="flex justify-end mb-3">
                                                    <button 
                                                        onClick={() => toggleProjectInfo(project.id)}
                                                        className="flex items-center justify-center p-2 bg-sky-100 hover:bg-sky-200 rounded-full transition-colors"
                                                    >
                                                        <Info className="w-5 h-5 text-sky-600" />
                                                    </button>
                                                </div>
                                                
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
                                                        
                                                        {project.budget_total && (
                                                            <div className="flex justify-between text-sm mb-2">
                                                                <span className="text-sky-700">Budget:</span>
                                                                <span className="font-medium text-gray-700">
                                                                    {Number(project.budget_total).toLocaleString()} €
                                                                </span>
                                                            </div>
                                                        )}
                                                    </motion.div>
                                                )}
                                            </div>
                                            
                                            <div className="border-t border-gray-200 p-4 bg-gray-50 flex justify-center">
                                                <Link 
                                                    href={route('client.projects.tasks', project.id)} 
                                                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-sky-400 to-black border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:from-sky-500 hover:to-black active:from-sky-600 active:to-black focus:outline-none focus:ring focus:ring-sky-300 disabled:opacity-25 transition"
                                                >
                                                    <List className="w-4 h-4 mr-2" />
                                                    Voir les tâches
                                                    <ChevronRight className="ml-2 w-4 h-4" />
                                                </Link>
                                            </div>
                                        </motion.div>
                                    ))
                                ) : (
                                    <div className="col-span-full bg-white p-8 rounded-lg shadow-md text-center">
                                        <div className="bg-sky-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                            <Building className="w-8 h-8 text-sky-500" />
                                        </div>
                                        <h3 className="text-lg font-medium text-gray-800 mb-2">Aucun projet trouvé.</h3>
                                        <p className="text-gray-500 mb-4">Aucun projet n'est associé à votre compte pour le moment.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AuthenticatedLayout>
    );
}