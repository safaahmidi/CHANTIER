import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { BookOpen, Shield } from 'lucide-react';

export default function DashboardClient({ projects }) {
    return (
        <AuthenticatedLayout>
            <Head title="Tableau de Bord Client" />
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                className="p-6 bg-gray-100 min-h-screen"
            >
                <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-3xl font-bold text-gray-900 mb-6">
                    Tableau de Bord Client
                </motion.h1>

                {/* Liste des projets assignés */}
                <h2 className="text-xl font-semibold mb-4 text-gray-900">Projets Assignés</h2>
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="gap-2 grid grid-cols-3">
                    {projects.length > 0 ? (
                        projects.map((project) => (
                            <motion.div key={project.id} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="bg-white p-6 h-32 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                <Link href={route('tasks.index', { id: project.id })} className="block text-gray-900 font-semibold text-lg hover:text-yellow-500">
                                    {project.name}
                                </Link>
                                <p className="text-gray-600">{project.details}</p>

                                {/* Actions */}
                                <div className="mt-4 flex space-x-4">
                                    <Link href={route('resources.index', { id: project.id })} className="text-blue-500 hover:text-blue-600">
                                        <BookOpen className="w-5 h-5" />
                                    </Link>
                                    <Link href={route('security.index')} className="text-blue-500 hover:text-blue-600 flex items-center space-x-2">
                                        <Shield className="w-5 h-5" />
                                        <span>Page Sécurité</span>
                                    </Link>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <p>Aucun projet trouvé.</p>
                    )}
                </motion.div>
            </motion.div>
        </AuthenticatedLayout>
    );
}