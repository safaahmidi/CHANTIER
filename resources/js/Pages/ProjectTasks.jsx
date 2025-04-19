import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function ProjectTasks({ auth, project, phases }) {
    const getStatusColor = (status) => {
        switch(status.toLowerCase()) {
            case 'à faire':
                return 'bg-gray-200 text-gray-800';
            case 'en cours':
                return 'bg-blue-200 text-blue-800';
            case 'en revue':
                return 'bg-yellow-200 text-yellow-800';
            case 'terminé':
                return 'bg-green-200 text-green-800';
            default:
                return 'bg-gray-200 text-gray-800';
        }
    };

    const getPriorityColor = (priority) => {
        switch(priority.toLowerCase()) {
            case 'haute':
                return 'bg-red-100 text-red-800';
            case 'moyenne':
                return 'bg-orange-100 text-orange-800';
            case 'basse':
                return 'bg-green-100 text-green-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Tâches du projet: {project.name}
                    </h2>
                    <Link 
                        href={route('client.dashboard')} 
                        className="text-blue-600 hover:text-blue-800"
                    >
                        Retour au tableau de bord
                    </Link>
                </div>
            }
        >
            <Head title={`Tâches - ${project.name}`} />

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="space-y-8">
                                {phases.map((phase) => (
                                    <motion.div 
                                        key={phase.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="border rounded-lg overflow-hidden"
                                    >
                                        <div className="bg-gray-50 px-4 py-3 border-b">
                                            <h3 className="font-medium text-lg">
                                                Phase {phase.order}: {phase.name}
                                            </h3>
                                        </div>
                                        
                                        <div className="divide-y">
                                            {phase.tasks.length > 0 ? (
                                                phase.tasks.map((task) => (
                                                    <div key={task.id} className="p-4 hover:bg-gray-50">
                                                        <div className="flex justify-between items-start">
                                                            <div>
                                                                <h4 className="font-medium">{task.name}</h4>
                                                                {task.assigned_to && (
                                                                    <p className="text-sm text-gray-500 mt-1">
                                                                        Assigné à: {task.assigned_to}
                                                                    </p>
                                                                )}
                                                            </div>
                                                            
                                                            <div className="flex space-x-2">
                                                                <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(task.status)}`}>
                                                                    {task.status}
                                                                </span>
                                                                <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(task.priority)}`}>
                                                                    {task.priority}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        
                                                        {(task.start_date || task.end_date) && (
                                                            <div className="flex items-center text-sm text-gray-500 mt-2">
                                                                {task.start_date && (
                                                                    <span>Début: {new Date(task.start_date).toLocaleDateString()}</span>
                                                                )}
                                                                {task.start_date && task.end_date && (
                                                                    <span className="mx-2">-</span>
                                                                )}
                                                                {task.end_date && (
                                                                    <span>Fin: {new Date(task.end_date).toLocaleDateString()}</span>
                                                                )}
                                                            </div>
                                                        )}
                                                        
                                                        {task.remarks && (
                                                            <p className="text-sm text-gray-600 mt-2">
                                                                {task.remarks}
                                                            </p>
                                                        )}
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="p-4 text-center text-gray-500">
                                                    Aucune tâche dans cette phase
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}