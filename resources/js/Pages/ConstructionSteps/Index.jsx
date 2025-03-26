// import { useState } from 'react';
// import { useForm } from '@inertiajs/react';
// import { motion } from 'framer-motion';

// const ConstructionSteps = ({ steps, projectId }) => {
//     // Donner une valeur par défaut à steps
//     const [stepPrices, setStepPrices] = useState(
//         (steps || []).reduce((acc, step) => {
//             acc[step.id] = step.prix_saisi || '';
//             return acc;
//         }, {})
//     );

//     const { post } = useForm();

//     // Mettre à jour le prix saisi
//     const handlePriceChange = (e, stepId) => {
//         const newPrice = e.target.value;
//         setStepPrices(prevState => ({
//             ...prevState,
//             [stepId]: newPrice,
//         }));
//     };

//     // Envoyer la mise à jour du prix
//     const handleUpdatePrice = (stepId) => {
//         post(route('steps.update-price', { projectId, stepId }), {
//             data: {
//                 prix_saisi: stepPrices[stepId],
//             },
//         });
//     };

//     // Confirmer l'étape
//     const handleConfirmStep = (stepId) => {
//         post(route('steps.confirm', { projectId, stepId }));
//     };

//     return (
//         <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={{
//                 hidden: { opacity: 0, y: 20 },
//                 visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//             }}
//             className="p-6 bg-gray-100 min-h-screen"
//         >
//             <h1 className="text-3xl font-bold mb-4">Étapes de Construction</h1>
//             <div className="grid gap-6">
//                 {(steps || []).map((step) => (
//                     <div key={step.id} className="bg-white p-4 rounded-lg shadow-lg">
//                         <h3 className="font-semibold">{step.nom}</h3>
//                         <div className="mb-4">
//                             <label htmlFor={`price-${step.id}`} className="block text-black mb-2">Prix Saisi</label>
//                             <input
//                                 id={`price-${step.id}`}
//                                 type="number"
//                                 value={stepPrices[step.id] || ''}
//                                 onChange={(e) => handlePriceChange(e, step.id)}
//                                 className="border-b p-2 w-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                         </div>
//                         <button
//                             onClick={() => handleUpdatePrice(step.id)}
//                             className="bg-blue-500 text-white p-2 rounded-lg mr-2"
//                         >
//                             Mettre à jour le prix
//                         </button>
//                         {step.status !== 'confirmé' && (
//                             <button
//                                 onClick={() => handleConfirmStep(step.id)}
//                                 className="bg-green-500 text-white p-2 rounded-lg"
//                             >
//                                 Confirmer
//                             </button>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </motion.div>
//     );
// };

// export default ConstructionSteps;



//affiche d'avance et budget mais affichage non attendu
// import { useState, useEffect } from 'react';
// import { useForm } from '@inertiajs/react';
// import { motion } from 'framer-motion';

// const ConstructionSteps = ({ steps, projectId, budgetTotal, avanceClient }) => {
//     // Donner une valeur par défaut à steps
//     const [stepPrices, setStepPrices] = useState(
//         (steps || []).reduce((acc, step) => {
//             acc[step.id] = step.prix_saisi || '';
//             return acc;
//         }, {})
//     );

//     // État pour suivre les étapes confirmées et le budget restant
//     const [confirmedSteps, setConfirmedSteps] = useState([]);
//     const [remainingBudget, setRemainingBudget] = useState(budgetTotal - avanceClient);

//     const { post } = useForm();

//     // Mettre à jour le prix saisi
//     const handlePriceChange = (e, stepId) => {
//         const newPrice = e.target.value;
//         setStepPrices(prevState => ({
//             ...prevState,
//             [stepId]: newPrice,
//         }));
//     };

//     // Envoyer la mise à jour du prix
//     const handleUpdatePrice = (stepId) => {
//         post(route('steps.update-price', { projectId, stepId }), {
//             data: {
//                 prix_saisi: stepPrices[stepId],
//             },
//         });
//     };

//     // Confirmer l'étape
//     const handleConfirmStep = (stepId) => {
//         const stepPrice = parseFloat(stepPrices[stepId]) || 0;

//         post(route('steps.confirm', { projectId, stepId }), {
//             onSuccess: () => {
//                 // Mettre à jour les étapes confirmées et le budget restant
//                 setConfirmedSteps((prev) => [...prev, stepId]);
//                 setRemainingBudget((prev) => prev - stepPrice);
//             },
//         });
//     };

//     // Filtrer les étapes non confirmées
//     const activeSteps = (steps || []).filter((step) => !confirmedSteps.includes(step.id));

//     return (
//         <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={{
//                 hidden: { opacity: 0, y: 20 },
//                 visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//             }}
//             className="p-6 bg-gray-100 min-h-screen"
//         >
//             <h1 className="text-3xl font-bold mb-4">Étapes de Construction</h1>

//             {/* Affichage du budget total et de l'avance client */}
//             <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
//                 <h2 className="text-xl font-semibold mb-4 text-gray-900">Budget du Projet</h2>
//                 <p><strong>Budget total :</strong> {budgetTotal} DH</p>
//                 <p><strong>Avance client :</strong> {avanceClient} DH</p>
//                 <p className="font-semibold text-gray-900">
//                     Budget restant : <span className="text-yellow-600">{remainingBudget} DH</span>
//                 </p>
//             </div>

//             {/* Liste des étapes actives (non confirmées) */}
//             <div className="grid gap-6">
//                 {activeSteps.map((step) => (
//                     <div key={step.id} className="bg-white p-4 rounded-lg shadow-lg">
//                         <h3 className="font-semibold">{step.nom}</h3>
//                         <div className="mb-4">
//                             <label htmlFor={`price-${step.id}`} className="block text-black mb-2">Prix Saisi</label>
//                             <input
//                                 id={`price-${step.id}`}
//                                 type="number"
//                                 value={stepPrices[step.id] || ''}
//                                 onChange={(e) => handlePriceChange(e, step.id)}
//                                 className="border-b p-2 w-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                         </div>
//                         <button
//                             onClick={() => handleUpdatePrice(step.id)}
//                             className="bg-blue-500 text-white p-2 rounded-lg mr-2"
//                         >
//                             Mettre à jour le prix
//                         </button>
//                         <button
//                             onClick={() => handleConfirmStep(step.id)}
//                             className="bg-green-500 text-white p-2 rounded-lg"
//                         >
//                             Confirmer
//                         </button>
//                     </div>
//                 ))}
//             </div>

//             {/* Affichage des étapes confirmées */}
//             {confirmedSteps.length > 0 && (
//                 <div className="mt-8">
//                     <h2 className="text-xl font-semibold mb-4 text-gray-900">Étapes Confirmées</h2>
//                     <div className="grid gap-6">
//                         {steps
//                             .filter((step) => confirmedSteps.includes(step.id))
//                             .map((step) => (
//                                 <div key={step.id} className="bg-white p-4 rounded-lg shadow-lg">
//                                     <h3 className="font-semibold">{step.nom}</h3>
//                                     <p><strong>Prix confirmé :</strong> {step.prix_saisi} DH</p>
//                                 </div>
//                             ))}
//                     </div>
//                 </div>
//             )}
//         </motion.div>
//     );
// };

// export default ConstructionSteps;



import { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';

const ConstructionSteps = ({ steps, projectId, budgetTotal, avanceClient }) => {
    // Donner une valeur par défaut à steps
    const [stepPrices, setStepPrices] = useState(
        (steps || []).reduce((acc, step) => {
            acc[step.id] = step.prix_saisi || '';
            return acc;
        }, {})
    );

    // État pour suivre les étapes confirmées
    const [confirmedSteps, setConfirmedSteps] = useState([]);

    // État pour suivre le budget investi
    const [budgetInvesti, setBudgetInvesti] = useState(0);

    const { post } = useForm();

    // Mettre à jour le prix saisi
    const handlePriceChange = (e, stepId) => {
        const newPrice = e.target.value;
        setStepPrices(prevState => ({
            ...prevState,
            [stepId]: newPrice,
        }));
    };

    // Envoyer la mise à jour du prix
    const handleUpdatePrice = (stepId) => {
        post(route('steps.update-price', { projectId, stepId }), {
            data: {
                prix_saisi: stepPrices[stepId],
            },
        });
    };

    // Confirmer l'étape
    const handleConfirmStep = (stepId) => {
        const stepPrice = parseFloat(stepPrices[stepId]) || 0;

        post(route('steps.confirm', { projectId, stepId }), {
            onSuccess: () => {
                // Ajouter l'étape confirmée à la liste
                setConfirmedSteps((prev) => [...prev, { id: stepId, prix_saisi: stepPrice }]);

                // Mettre à jour le budget investi
                setBudgetInvesti((prev) => prev + stepPrice);
            },
        });
    };

    // Filtrer les étapes non confirmées
    const activeSteps = (steps || []).filter((step) => !confirmedSteps.some((confirmed) => confirmed.id === step.id));

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="p-6 bg-gray-100 min-h-screen"
        >
            <h1 className="text-3xl font-bold mb-4">Étapes de Construction</h1>

            {/* Affichage du budget total et de l'avance client */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">Budget du Projet</h2>
                <p><strong>Budget total :</strong> {budgetTotal} DH</p>
                <p><strong>Avance client :</strong> {avanceClient} DH</p>
            </div>

            {/* Liste des étapes actives (non confirmées) */}
            <div className="grid gap-6">
                {activeSteps.map((step) => (
                    <div key={step.id} className="bg-white p-4 rounded-lg shadow-lg">
                        <h3 className="font-semibold">{step.nom}</h3>
                        <div className="mb-4">
                            <label htmlFor={`price-${step.id}`} className="block text-black mb-2">Prix Saisi</label>
                            <input
                                id={`price-${step.id}`}
                                type="number"
                                value={stepPrices[step.id] || ''}
                                onChange={(e) => handlePriceChange(e, step.id)}
                                className="border-b p-2 w-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button
                            onClick={() => handleUpdatePrice(step.id)}
                            className="bg-blue-500 text-white p-2 rounded-lg mr-2"
                        >
                            Mettre à jour le prix
                        </button>
                        <button
                            onClick={() => handleConfirmStep(step.id)}
                            className="bg-green-500 text-white p-2 rounded-lg"
                        >
                            Confirmer
                        </button>
                    </div>
                ))}
            </div>

            {/* Affichage des étapes confirmées */}
            {confirmedSteps.length > 0 && (
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4 text-gray-900">Étapes Confirmées</h2>
                    <div className="grid gap-6">
                        {confirmedSteps.map((step) => (
                            <div key={step.id} className="bg-white p-4 rounded-lg shadow-lg">
                                <h3 className="font-semibold">{steps.find((s) => s.id === step.id).nom}</h3>
                                <p><strong>Prix confirmé :</strong> {step.prix_saisi} DH</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Affichage du budget investi */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">Budget Investi</h2>
                <p><strong>Total investi jusqu'à présent :</strong> {budgetInvesti} DH</p>
            </div>
        </motion.div>
    );
};

export default ConstructionSteps;