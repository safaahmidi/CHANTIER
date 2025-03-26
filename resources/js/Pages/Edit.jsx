import { useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function Edit({ project }) {
    const { data, setData, put, processing, reset } = useForm({
        name: project.name,
        details: project.details || '',
        budget_total: project.budget_total || '',
        avanceClient: project.avanceClient || '',
        email: project.email || ''
    });

    const submitForm = (e) => {
        e.preventDefault();
        put(route('projects.update', { id: project.id }), {
            data: { 
                name: data.name, 
                details: data.details, 
                budget_total: data.budget_total, 
                avanceClient: data.avanceClient, 
                email: data.email 
            },
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center min-h-screen bg-gray-100"
        >
            <div className="max-w-2xl w-full p-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Modifier le projet</h2>

                <form onSubmit={submitForm} className="space-y-6">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 mb-2">Nom du projet</label>
                        <input
                            type="text"
                            id="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Entrez le nom du projet"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="details" className="block text-gray-700 mb-2">Détails du projet</label>
                        <textarea
                            id="details"
                            value={data.details}
                            onChange={(e) => setData('details', e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Entrez les détails du projet"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="budget_total" className="block text-gray-700 mb-2">Budget total</label>
                        <input
                            type="number"
                            id="budget_total"
                            value={data.budget_total}
                            onChange={(e) => setData('budget_total', e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Entrez le budget total"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="avanceClient" className="block text-gray-700 mb-2">Avance Client</label>
                        <input
                            type="number"
                            id="avanceClient"
                            value={data.avanceClient}
                            onChange={(e) => setData('avanceClient', e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Entrez l'avance client"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Entrez l'email"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full py-3 bg-gradient-to-r from-blue-500 to-black text-white rounded-lg hover:from-blue-600 hover:to-black transition-all duration-300"
                    >
                        Mettre à jour le projet
                    </button>
                </form>
            </div>
        </motion.div>
    );
}