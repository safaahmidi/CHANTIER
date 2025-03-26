// resources/js/Pages/Resources.jsx
import { useEffect, useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { motion } from 'framer-motion';

const Resources = ({ resources }) => {
    const [resourceList, setResourceList] = useState(resources);

    useEffect(() => {
        setResourceList(resources);
    }, [resources]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Gestion des Ressources</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {resourceList.map((resource) => (
                    <motion.div
                        key={resource.id}
                        className="bg-white p-4 rounded-lg shadow-md"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="text-xl font-semibold">{resource.name}</h3>
                        <p>{resource.description}</p>
                        <p>Stock: {resource.stock_quantity}</p>
                        <p>Fournisseur: {resource.supplier}</p>
                        <button
                            onClick={() => Inertia.get(`/resources/${resource.id}`)}
                            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                        >
                            Voir Détails
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Resources;
