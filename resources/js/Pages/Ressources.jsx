


// import React, { useState, useRef, useEffect } from 'react';
// import { Head } from '@inertiajs/react';
// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
// import { router } from '@inertiajs/react';

// export default function Ressources({ auth, ressources }) {
//     const [activeCard, setActiveCard] = useState(null);
//     const [isDragging, setIsDragging] = useState(false);
//     const [dragStartY, setDragStartY] = useState(0);
//     const [cards, setCards] = useState({
//         fer: ressources.fer || false,
//         simon: ressources.simon || false
//     });
//     const [showQuantityPopup, setShowQuantityPopup] = useState(false);
//     const [quantity, setQuantity] = useState(0);
    
//     const dragItemRef = useRef(null);
//     const [dragItemStyle, setDragItemStyle] = useState({});
//     const [isOverDropZone, setIsOverDropZone] = useState(false);
//     const dropZoneRef = useRef(null);

//     useEffect(() => {
//         const preventSelection = (e) => {
//             if (isDragging) {
//                 e.preventDefault();
//             }
//         };

//         document.addEventListener('selectstart', preventSelection);
//         return () => document.removeEventListener('selectstart', preventSelection);
//     }, [isDragging]);

//     const handleDragStart = (e, cardName) => {
//         setIsDragging(true);
//         setActiveCard(cardName);
//         const clientY = e.clientY || e.touches[0].clientY;
//         setDragStartY(clientY);
        
//         const cardElement = e.currentTarget;
//         const rect = cardElement.getBoundingClientRect();
        
//         setDragItemStyle({
//             position: 'fixed',
//             left: `${rect.left}px`,
//             top: `${rect.top}px`,
//             width: `${rect.width}px`,
//             height: `${rect.height}px`,
//             pointerEvents: 'none',
//             zIndex: 1000,
//             transform: 'scale(1.05)',
//             boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
//             opacity: 0.9,
//             transition: 'transform 0.15s ease-out, opacity 0.15s ease-out',
//             backgroundColor: 'white',
//             borderRadius: '0.5rem',
//             padding: '1.5rem'
//         });
        
//         cardElement.classList.add('opacity-20', 'scale-95');
//     };

//     const handleDragMove = (e) => {
//         if (!isDragging) return;
        
//         const clientY = e.clientY || (e.touches && e.touches[0].clientY);
//         if (!clientY) return;

//         setDragItemStyle(prev => ({
//             ...prev,
//             top: `${clientY - 50}px`,
//             transform: `translateY(5px) scale(1.05)`
//         }));

//         if (dropZoneRef.current) {
//             const dropZoneRect = dropZoneRef.current.getBoundingClientRect();
//             const isOver = clientY > dropZoneRect.top;
//             setIsOverDropZone(isOver);
            
//             if (isOver) {
//                 dropZoneRef.current.classList.add('bg-green-50', 'border-green-300');
//                 dropZoneRef.current.classList.remove('bg-gray-50', 'border-gray-300');
//             } else {
//                 dropZoneRef.current.classList.remove('bg-green-50', 'border-green-300');
//                 dropZoneRef.current.classList.add('bg-gray-50', 'border-gray-300');
//             }
//         }
//     };

//     const handleDragEnd = (e) => {
//         if (isDragging && isOverDropZone) {
//             setShowQuantityPopup(true);
//         }
        
//         setIsDragging(false);
//         setIsOverDropZone(false);
//         setDragItemStyle({});
        
//         document.querySelectorAll('.resource-card').forEach(card => {
//             card.classList.remove('opacity-20', 'scale-95');
//         });
        
//         if (dropZoneRef.current) {
//             dropZoneRef.current.classList.remove('bg-green-50', 'border-green-300');
//             dropZoneRef.current.classList.add('bg-gray-50', 'border-gray-300');
//         }
//     };

//     const confirmActivation = () => {
//         const updatedCards = {
//             ...cards,
//             [activeCard]: true
//         };
//         setCards(updatedCards);
        
//         router.post(route('ressources.update', { id: ressources.id }), {
//             [activeCard]: true,
//             [`quantite_${activeCard}`]: quantity
//         }, {
//             onSuccess: () => {
//                 setShowQuantityPopup(false);
//                 setQuantity(0);
//             }
//         });
//     };

//     const deactivateCard = (cardName, e) => {
//         e.stopPropagation();
        
//         const updatedCards = {
//             ...cards,
//             [cardName]: false
//         };
//         setCards(updatedCards);
        
//         router.post(route('ressources.update', { id: ressources.id }), {
//             [cardName]: false,
//             [`quantite_${cardName}`]: 0
//         });
//     };

//     const resourceDescriptions = {
//         fer: "La ressource Fer permet d'accéder aux fonctionnalités métallurgiques du système.",
//         simon: "La ressource Simon donne accès aux outils de simulation avancés."
//     };

//     return (
//         <>
//             <Head title="Ressources" />

//             <div className="py-8">
//                 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
//                         {!cards.fer && (
//                             <div 
//                                 className="resource-card bg-white border border-gray-200 rounded-xl p-5 cursor-grab active:cursor-grabbing transition-all hover:shadow-md hover:border-gray-300"
//                                 onMouseDown={(e) => handleDragStart(e, 'fer')}
//                                 onTouchStart={(e) => handleDragStart(e, 'fer')}
//                                 draggable="false"
//                             >
//                                 <div className="flex items-start">
//                                     <div className="bg-blue-100 rounded-lg p-3 mr-4 text-blue-600">
//                                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
//                                         </svg>
//                                     </div>
//                                     <div className="flex-1">
//                                         <div className="flex items-center justify-between">
//                                             <h3 className="text-lg font-semibold text-gray-800">Ressource Fer</h3>
//                                             <div className="relative group">
//                                                 <button className="text-gray-400 hover:text-blue-500 focus:outline-none">
//                                                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                                                         <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
//                                                     </svg>
//                                                 </button>
//                                                 <div className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-2 px-2 w-64">
//                                                     <div className="bg-white shadow-lg rounded-lg p-3 text-sm text-gray-600 hidden group-hover:block">
//                                                         {resourceDescriptions.fer}
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <p className="text-gray-500 text-sm">Accès aux fonctionnalités fer</p>
//                                         <div className="mt-3 flex items-center text-sm text-blue-600">
//                                             <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//                                             </svg>
//                                             Glisser vers le bas pour activer
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}

//                         {!cards.simon && (
//                             <div 
//                                 className="resource-card bg-white border border-gray-200 rounded-xl p-5 cursor-grab active:cursor-grabbing transition-all hover:shadow-md hover:border-gray-300"
//                                 onMouseDown={(e) => handleDragStart(e, 'simon')}
//                                 onTouchStart={(e) => handleDragStart(e, 'simon')}
//                                 draggable="false"
//                             >
//                                 <div className="flex items-start">
//                                     <div className="bg-purple-100 rounded-lg p-3 mr-4 text-purple-600">
//                                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                                         </svg>
//                                     </div>
//                                     <div className="flex-1">
//                                         <div className="flex items-center justify-between">
//                                             <h3 className="text-lg font-semibold text-gray-800">Ressource Simon</h3>
//                                             <div className="relative group">
//                                                 <button className="text-gray-400 hover:text-purple-500 focus:outline-none">
//                                                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                                                         <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
//                                                     </svg>
//                                                 </button>
//                                                 <div className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-2 px-2 w-64">
//                                                     <div className="bg-white shadow-lg rounded-lg p-3 text-sm text-gray-600 hidden group-hover:block">
//                                                         {resourceDescriptions.simon}
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <p className="text-gray-500 text-sm">Accès aux fonctionnalités Simon</p>
//                                         <div className="mt-3 flex items-center text-sm text-purple-600">
//                                             <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//                                             </svg>
//                                             Glisser vers le bas pour activer
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     <div 
//                         ref={dropZoneRef}
//                         className="bg-gray-50 p-6 rounded-xl border-2 border-dashed border-gray-300 min-h-[180px] transition-all duration-200"
//                         onMouseMove={handleDragMove}
//                         onTouchMove={handleDragMove}
//                         onMouseUp={handleDragEnd}
//                         onMouseLeave={() => setIsOverDropZone(false)}
//                         onTouchEnd={handleDragEnd}
//                     >
//                         <div className="flex items-center justify-between mb-4">
//                             <h3 className="text-lg font-semibold text-gray-700">
//                                 Ressources Activées
//                             </h3>
//                             <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
//                                 {Object.values(cards).filter(Boolean).length} / 2
//                             </span>
//                         </div>
                        
//                         {!cards.fer && !cards.simon ? (
//                             <div className="text-center py-8">
//                                 <svg className="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                                 </svg>
//                                 <p className="mt-3 text-gray-500">
//                                     Glissez une ressource ici pour l'activer
//                                 </p>
//                                 {isDragging && (
//                                     <p className="mt-2 text-sm text-blue-500 animate-pulse">
//                                         Relâchez pour activer {activeCard}
//                                     </p>
//                                 )}
//                             </div>
//                         ) : (
//                             <div className="grid grid-cols-1 gap-3">
//                                 {cards.fer && (
//                                     <div className="bg-white border border-green-200 rounded-lg p-4 flex justify-between items-center shadow-sm hover:shadow-md transition-shadow">
//                                         <div className="flex items-center">
//                                             <div className="bg-green-100 rounded-full p-2 mr-3 text-green-600">
//                                                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                                                 </svg>
//                                             </div>
//                                             <div>
//                                                 <div className="flex items-center">
//                                                     <h4 className="font-medium text-gray-800">Fer</h4>
//                                                     <div className="relative group ml-2">
//                                                         <button className="text-gray-400 hover:text-green-500 focus:outline-none">
//                                                             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                                                                 <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
//                                                             </svg>
//                                                         </button>
//                                                         <div className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-2 px-2 w-64">
//                                                             <div className="bg-white shadow-lg rounded-lg p-3 text-sm text-gray-600 hidden group-hover:block">
//                                                                 {resourceDescriptions.fer}
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <p className="text-xs text-gray-500">Activé</p>
//                                             </div>
//                                         </div>
//                                         <button 
//                                             onClick={(e) => deactivateCard('fer', e)}
//                                             className="text-gray-400 hover:text-red-500 p-1 transition-colors"
//                                             title="Désactiver"
//                                         >
//                                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                             </svg>
//                                         </button>
//                                     </div>
//                                 )}
                                
//                                 {cards.simon && (
//                                     <div className="bg-white border border-green-200 rounded-lg p-4 flex justify-between items-center shadow-sm hover:shadow-md transition-shadow">
//                                         <div className="flex items-center">
//                                             <div className="bg-green-100 rounded-full p-2 mr-3 text-green-600">
//                                                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                                                 </svg>
//                                             </div>
//                                             <div>
//                                                 <div className="flex items-center">
//                                                     <h4 className="font-medium text-gray-800">Simon</h4>
//                                                     <div className="relative group ml-2">
//                                                         <button className="text-gray-400 hover:text-green-500 focus:outline-none">
//                                                             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                                                                 <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
//                                                             </svg>
//                                                         </button>
//                                                         <div className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-2 px-2 w-64">
//                                                             <div className="bg-white shadow-lg rounded-lg p-3 text-sm text-gray-600 hidden group-hover:block">
//                                                                 {resourceDescriptions.simon}
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <p className="text-xs text-gray-500">Activé</p>
//                                             </div>
//                                         </div>
//                                         <button 
//                                             onClick={(e) => deactivateCard('simon', e)}
//                                             className="text-gray-400 hover:text-red-500 p-1 transition-colors"
//                                             title="Désactiver"
//                                         >
//                                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                             </svg>
//                                         </button>
//                                     </div>
//                                 )}
//                             </div>
//                         )}
//                     </div>

//                     {isDragging && (
//                         <div 
//                             ref={dragItemRef}
//                             className="bg-white border border-gray-200 rounded-xl p-5 shadow-xl"
//                             style={{
//                                 ...dragItemStyle,
//                                 ...(isOverDropZone ? {
//                                     transform: 'scale(1.1)',
//                                     boxShadow: '0 15px 30px -5px rgba(0, 0, 0, 0.2)',
//                                     borderColor: '#34d399'
//                                 } : {})
//                             }}
//                         >
//                             <div className="flex items-start">
//                                 <div className={`rounded-lg p-3 mr-4 ${
//                                     activeCard === 'fer' ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'
//                                 }`}>
//                                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         {activeCard === 'fer' ? (
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
//                                         ) : (
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                                         )}
//                                     </svg>
//                                 </div>
//                                 <div>
//                                     <h3 className="font-semibold text-gray-800">
//                                         {activeCard === 'fer' ? 'Ressource Fer' : 'Ressource Simon'}
//                                     </h3>
//                                     <p className="text-sm text-gray-500 mt-1">
//                                         {isOverDropZone ? 'Relâchez pour activer' : 'Glissez vers la zone ci-dessous'}
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>

//             {showQuantityPopup && (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//         <div className="bg-white rounded-lg p-6 w-full max-w-md">
//             <h3 className="text-lg font-medium text-gray-900 mb-4">
//                 Activer {activeCard === 'fer' ? 'Fer' : 'Simon'}
//             </h3>
//             <div className="mb-4">
//                 <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
//                     Quantité (Actuelle: {ressources[`quantite_${activeCard}`] || 0})
//                 </label>
//                 <input
//                     type="number"
//                     id="quantity"
//                     min="0"
//                     defaultValue={ressources[`quantite_${activeCard}`] || 0}
//                     className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                     onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
//                     autoFocus
//                 />
//             </div>
//             <div className="flex justify-end space-x-3">
//                 <button
//                     onClick={() => setShowQuantityPopup(false)}
//                     className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
//                 >
//                     Annuler
//                 </button>
//                 <button
//                     onClick={confirmActivation}
//                     className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//                 >
//                     Confirmer
//                 </button>
//             </div>
//         </div>
//     </div>
// )}
//         </>
//     );
// }




import React, { useState, useRef, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { router } from '@inertiajs/react';

export default function GestionMateriaux({ auth, materiaux = {} }) {
    // État initial des matériaux
    const [materials, setMaterials] = useState({
        ciment: materiaux.ciment || { 
            quantite: 0, 
            enStock: false, 
            qualite: 'non_verifie',
            dateLivraison: null,
            notes: '',
            fournisseur: '',
            seuilMin: 10
        },
        sable: materiaux.sable || { 
            quantite: 0, 
            enStock: false, 
            qualite: 'non_verifie',
            dateLivraison: null,
            notes: '',
            fournisseur: '',
            seuilMin: 20
        },
        beton: materiaux.beton || { 
            quantite: 0, 
            enStock: false, 
            qualite: 'non_verifie',
            dateLivraison: null,
            notes: '',
            fournisseur: '',
            seuilMin: 15
        },
        acier: materiaux.acier || { 
            quantite: 0, 
            enStock: false, 
            qualite: 'non_verifie',
            dateLivraison: null,
            notes: '',
            fournisseur: '',
            seuilMin: 5
        },
        bois: materiaux.bois || { 
            quantite: 0, 
            enStock: false, 
            qualite: 'non_verifie',
            dateLivraison: null,
            notes: '',
            fournisseur: '',
            seuilMin: 8
        },
    });

    // États pour les modales et formulaires
    const [selectedMaterial, setSelectedMaterial] = useState(null);
    const [orderForm, setOrderForm] = useState({
        material: '',
        quantity: 0,
        supplier: '',
        urgence: 'normale',
        notes: '',
        deliveryDate: new Date().toISOString().split('T')[0]
    });
    const [qualityForm, setQualityForm] = useState({
        status: 'non_verifie',
        notes: '',
        inspector: ''
    });
    const [showOrderForm, setShowOrderForm] = useState(false);
    const [showQualityCheck, setShowQualityCheck] = useState(false);
    const [showMaterialDetails, setShowMaterialDetails] = useState(false);
    const [showDeliveryForm, setShowDeliveryForm] = useState(false);
    const [showThresholdForm, setShowThresholdForm] = useState(false);
    const [thresholdForm, setThresholdForm] = useState({
        value: 0
    });

    // Fonction pour mettre à jour la quantité
    const updateQuantity = (materialName, newQuantity) => {
        const updatedMaterials = {
            ...materials,
            [materialName]: {
                ...materials[materialName],
                quantite: parseInt(newQuantity) || 0,
                enStock: parseInt(newQuantity) > 0
            }
        };
        setMaterials(updatedMaterials);
        
        router.post(route('materiaux.update'), {
            material: materialName,
            quantite: parseInt(newQuantity) || 0
        });
    };

    // Fonction pour vérifier la qualité
    const checkQuality = (e) => {
        e.preventDefault();
        const updatedMaterials = {
            ...materials,
            [selectedMaterial]: {
                ...materials[selectedMaterial],
                qualite: qualityForm.status,
                notes: qualityForm.notes
            }
        };
        setMaterials(updatedMaterials);
        
        router.post(route('materiaux.update-quality'), {
            material: selectedMaterial,
            ...qualityForm
        });
        
        setShowQualityCheck(false);
    };

    // Fonction pour passer commande
    const submitOrder = (e) => {
        e.preventDefault();
        router.post(route('materiaux.order'), orderForm);
        
        // Simuler l'arrivée de la commande (en réalité, cela viendrait du backend)
        setTimeout(() => {
            const updatedMaterials = {
                ...materials,
                [orderForm.material]: {
                    ...materials[orderForm.material],
                    quantite: materials[orderForm.material].quantite + parseInt(orderForm.quantity),
                    enStock: true,
                    dateLivraison: orderForm.deliveryDate,
                    fournisseur: orderForm.supplier
                }
            };
            setMaterials(updatedMaterials);
        }, 2000);
        
        setShowOrderForm(false);
        setOrderForm({
            material: '',
            quantity: 0,
            supplier: '',
            urgence: 'normale',
            notes: '',
            deliveryDate: new Date().toISOString().split('T')[0]
        });
    };

    // Fonction pour enregistrer une livraison
    const registerDelivery = (e) => {
        e.preventDefault();
        const updatedMaterials = {
            ...materials,
            [selectedMaterial]: {
                ...materials[selectedMaterial],
                enStock: true,
                dateLivraison: orderForm.deliveryDate,
                fournisseur: orderForm.supplier,
                quantite: materials[selectedMaterial].quantite + parseInt(orderForm.quantity)
            }
        };
        setMaterials(updatedMaterials);
        
        router.post(route('materiaux.delivery'), {
            material: selectedMaterial,
            ...orderForm
        });
        
        setShowDeliveryForm(false);
    };

    // Fonction pour mettre à jour le seuil minimal
    const updateThreshold = (e) => {
        e.preventDefault();
        const updatedMaterials = {
            ...materials,
            [selectedMaterial]: {
                ...materials[selectedMaterial],
                seuilMin: parseInt(thresholdForm.value)
            }
        };
        setMaterials(updatedMaterials);
        
        router.post(route('materiaux.update-threshold'), {
            material: selectedMaterial,
            threshold: thresholdForm.value
        });
        
        setShowThresholdForm(false);
    };

    // Obtenir le code couleur selon la qualité
    const getQualityColor = (quality) => {
        switch(quality) {
            case 'conforme': return 'bg-green-100 text-green-800';
            case 'non_conforme': return 'bg-red-100 text-red-800';
            case 'partiellement_conforme': return 'bg-yellow-100 text-yellow-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    // Obtenir le code couleur selon le niveau de stock
    const getStockLevelColor = (materialName) => {
        const material = materials[materialName];
        if (material.quantite <= 0) return 'bg-red-100 text-red-800';
        if (material.quantite <= material.seuilMin) return 'bg-yellow-100 text-yellow-800';
        return 'bg-green-100 text-green-800';
    };

    // Icônes pour les matériaux
    const materialIcons = {
        ciment: '🏗️',
        sable: '🏝️',
        beton: '🧱',
        acier: '🔩',
        bois: '🪵'
    };

    // Unités pour chaque matériau
    const materialUnits = {
        ciment: 'tonnes',
        sable: 'tonnes',
        beton: 'm³',
        acier: 'tonnes',
        bois: 'm²'
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Gestion des Matériaux" />

            <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* En-tête */}
                    <div className="mb-6 flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-gray-800">Gestion des Matériaux de Chantier</h1>
                        <div className="flex space-x-3">
                            <button 
                                onClick={() => {
                                    setSelectedMaterial(null);
                                    setShowOrderForm(true);
                                }}
                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center"
                            >
                                <span className="mr-2">+</span> Commander
                            </button>
                            <button 
                                onClick={() => {
                                    // Générer un rapport
                                    alert("Fonctionnalité de rapport à implémenter");
                                }}
                                className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 flex items-center"
                            >
                                <span className="mr-2">📊</span> Rapport
                            </button>
                        </div>
                    </div>

                    {/* Alertes de stock faible */}
                    {Object.entries(materials).filter(([name, data]) => 
                        data.quantite > 0 && data.quantite <= data.seuilMin
                    ).length > 0 && (
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-sm font-medium text-yellow-800">
                                        Stock faible pour {Object.entries(materials)
                                            .filter(([name, data]) => data.quantite > 0 && data.quantite <= data.seuilMin)
                                            .map(([name, _]) => name)
                                            .join(', ')}
                                    </h3>
                                    <div className="mt-2 text-sm text-yellow-700">
                                        <p>Veuillez passer commande pour réapprovisionner ces matériaux.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Vue d'ensemble des matériaux */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
                        {Object.entries(materials).map(([name, data]) => (
                            <div 
                                key={name}
                                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 cursor-pointer"
                                onClick={() => {
                                    setSelectedMaterial(name);
                                    setShowMaterialDetails(true);
                                }}
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className="text-2xl mb-2">{materialIcons[name]}</div>
                                        <h3 className="font-medium text-gray-800 capitalize">{name}</h3>
                                        <p className="text-sm text-gray-500">{data.quantite} {materialUnits[name]}</p>
                                    </div>
                                    <div className={`text-xs font-medium px-2 py-1 rounded-full ${getStockLevelColor(name)}`}>
                                        {data.quantite <= 0 ? 'Épuisé' : 
                                         data.quantite <= data.seuilMin ? 'Stock faible' : 'Stock OK'}
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                                    <span className={`text-xs px-2 py-1 rounded-full ${getQualityColor(data.qualite)}`}>
                                        {data.qualite === 'conforme' ? 'Conforme' : 
                                         data.qualite === 'non_conforme' ? 'Non conforme' : 
                                         data.qualite === 'partiellement_conforme' ? 'Partiellement conforme' : 
                                         'Non vérifié'}
                                    </span>
                                    <span className={`text-xs px-2 py-1 rounded-full ${data.enStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {data.enStock ? 'En stock' : 'Hors stock'}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Tableau de gestion détaillée */}
                    <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
                        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                            <h2 className="text-lg font-medium text-gray-800">Gestion des Matériaux</h2>
                            <div className="flex space-x-2">
                                <button 
                                    onClick={() => setShowThresholdForm(true)}
                                    className="text-sm bg-gray-600 text-white px-3 py-1 rounded-md hover:bg-gray-700"
                                    disabled={!selectedMaterial}
                                >
                                    Modifier seuil
                                </button>
                                <button 
                                    onClick={() => setShowQualityCheck(true)}
                                    className="text-sm bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700"
                                    disabled={!selectedMaterial}
                                >
                                    Vérifier qualité
                                </button>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Matériau</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantité</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seuil min</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qualité</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {Object.entries(materials).map(([name, data]) => (
                                        <tr 
                                            key={name} 
                                            className={selectedMaterial === name ? 'bg-blue-50' : 'hover:bg-gray-50'}
                                            onClick={() => setSelectedMaterial(name)}
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="text-xl mr-3">{materialIcons[name]}</div>
                                                    <div className="font-medium capitalize">{name}</div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <input
                                                    type="number"
                                                    min="0"
                                                    value={data.quantite}
                                                    onChange={(e) => updateQuantity(name, e.target.value)}
                                                    className="w-20 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                                />
                                                <span className="ml-1 text-gray-500">{materialUnits[name]}</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-800 text-xs">
                                                    {data.seuilMin} {materialUnits[name]}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 py-1 rounded-full text-xs ${getStockLevelColor(name)}`}>
                                                    {data.quantite <= 0 ? 'Épuisé' : 
                                                     data.quantite <= data.seuilMin ? 'Stock faible' : 'Stock OK'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 py-1 rounded-full text-xs ${getQualityColor(data.qualite)}`}>
                                                    {data.qualite === 'conforme' ? 'Conforme' : 
                                                     data.qualite === 'non_conforme' ? 'Non conforme' : 
                                                     data.qualite === 'partiellement_conforme' ? 'Partiellement conforme' : 
                                                     'Non vérifié'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setSelectedMaterial(name);
                                                        setShowDeliveryForm(true);
                                                    }}
                                                    className="text-blue-600 hover:text-blue-900 mr-3"
                                                >
                                                    Livraison
                                                </button>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setSelectedMaterial(name);
                                                        setShowMaterialDetails(true);
                                                    }}
                                                    className="text-gray-600 hover:text-gray-900"
                                                >
                                                    Détails
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Graphique de suivi des stocks */}
                    <div className="bg-white shadow rounded-lg p-6 mb-6">
                        <h2 className="text-lg font-medium text-gray-800 mb-4">Niveaux de stock</h2>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                            {Object.entries(materials).map(([name, data]) => {
                                const percentage = Math.min(Math.round((data.quantite / (data.seuilMin * 2)) * 100), 100);
                                return (
                                    <div key={`chart-${name}`} className="mb-4">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-sm font-medium capitalize">{name}</span>
                                            <span className="text-xs text-gray-500">{data.quantite}/{data.seuilMin * 2} {materialUnits[name]}</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div 
                                                className={`h-2.5 rounded-full ${
                                                    percentage <= 25 ? 'bg-red-500' : 
                                                    percentage <= 50 ? 'bg-yellow-500' : 
                                                    'bg-green-500'
                                                }`} 
                                                style={{ width: `${percentage}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modals */}

            {/* Modal de commande */}
            {showOrderForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-medium text-gray-900">Commander des matériaux</h3>
                            <button 
                                onClick={() => setShowOrderForm(false)}
                                className="text-gray-400 hover:text-gray-500"
                            >
                                ✕
                            </button>
                        </div>
                        <form onSubmit={submitOrder}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Matériau</label>
                                <select
                                    value={orderForm.material}
                                    onChange={(e) => setOrderForm({...orderForm, material: e.target.value})}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    required
                                >
                                    <option value="">Sélectionner un matériau</option>
                                    {Object.keys(materials).map(name => (
                                        <option key={name} value={name} className="capitalize">{name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Quantité</label>
                                <input
                                    type="number"
                                    min="1"
                                    value={orderForm.quantity}
                                    onChange={(e) => setOrderForm({...orderForm, quantity: e.target.value})}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Fournisseur</label>
                                <input
                                    type="text"
                                    value={orderForm.supplier}
                                    onChange={(e) => setOrderForm({...orderForm, supplier: e.target.value})}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Date de livraison prévue</label>
                                <input
                                    type="date"
                                    value={orderForm.deliveryDate}
                                    onChange={(e) => setOrderForm({...orderForm, deliveryDate: e.target.value})}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Niveau d'urgence</label>
                                <select
                                    value={orderForm.urgence}
                                    onChange={(e) => setOrderForm({...orderForm, urgence: e.target.value})}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                >
                                    <option value="normale">Normale</option>
                                    <option value="urgente">Urgente</option>
                                    <option value="critique">Critique</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                                <textarea
                                    rows="3"
                                    value={orderForm.notes}
                                    onChange={(e) => setOrderForm({...orderForm, notes: e.target.value})}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                ></textarea>
                            </div>
                            <div className="flex justify-end space-x-3">
                                <button
                                    type="button"
                                    onClick={() => setShowOrderForm(false)}
                                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                                >
                                    Annuler
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                >
                                    Confirmer la commande
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal de vérification qualité */}
            {showQualityCheck && selectedMaterial && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-medium text-gray-900">Vérification qualité - {selectedMaterial}</h3>
                            <button 
                                onClick={() => setShowQualityCheck(false)}
                                className="text-gray-400 hover:text-gray-500"
                            >
                                ✕
                            </button>
                        </div>
                        <form onSubmit={checkQuality}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Statut qualité</label>
                                <select
                                    value={qualityForm.status}
                                    onChange={(e) => setQualityForm({...qualityForm, status: e.target.value})}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    required
                                >
                                    <option value="non_verifie">Non vérifié</option>
                                    <option value="conforme">Conforme</option>
                                    <option value="partiellement_conforme">Partiellement conforme</option>
                                    <option value="non_conforme">Non conforme</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Inspecteur</label>
                                <input
                                    type="text"
                                    value={qualityForm.inspector}
                                    onChange={(e) => setQualityForm({...qualityForm, inspector: e.target.value})}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                                <textarea
                                    rows="3"
                                    value={qualityForm.notes}
                                    onChange={(e) => setQualityForm({...qualityForm, notes: e.target.value})}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                ></textarea>
                            </div>
                            <div className="flex justify-end space-x-3">
                                <button
                                    type="button"
                                    onClick={() => setShowQualityCheck(false)}
                                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                                >
                                    Annuler
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                >
                                    Enregistrer
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal de détails matériau */}
            {showMaterialDetails && selectedMaterial && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-medium text-gray-900">Détails - {selectedMaterial}</h3>
                            <button 
                                onClick={() => setShowMaterialDetails(false)}
                                className="text-gray-400 hover:text-gray-500"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-sm font-medium text-gray-500">Quantité actuelle</h4>
                                <p className="mt-1 text-sm text-gray-900">
                                    {materials[selectedMaterial].quantite} {materialUnits[selectedMaterial]}
                                </p>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-gray-500">Seuil minimal</h4>
                                <p className="mt-1 text-sm text-gray-900">
                                    {materials[selectedMaterial].seuilMin} {materialUnits[selectedMaterial]}
                                </p>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-gray-500">Statut qualité</h4>
                                <p className="mt-1 text-sm text-gray-900">
                                    <span className={`px-2 py-1 rounded-full text-xs ${getQualityColor(materials[selectedMaterial].qualite)}`}>
                                        {materials[selectedMaterial].qualite === 'conforme' ? 'Conforme' : 
                                         materials[selectedMaterial].qualite === 'non_conforme' ? 'Non conforme' : 
                                         materials[selectedMaterial].qualite === 'partiellement_conforme' ? 'Partiellement conforme' : 
                                         'Non vérifié'}
                                    </span>
                                </p>
                            </div>
                            {materials[selectedMaterial].dateLivraison && (
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500">Dernière livraison</h4>
                                    <p className="mt-1 text-sm text-gray-900">
                                        {new Date(materials[selectedMaterial].dateLivraison).toLocaleDateString()}
                                    </p>
                                </div>
                            )}
                            {materials[selectedMaterial].fournisseur && (
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500">Fournisseur</h4>
                                    <p className="mt-1 text-sm text-gray-900">
                                        {materials[selectedMaterial].fournisseur}
                                    </p>
                                </div>
                            )}
                            {materials[selectedMaterial].notes && (
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500">Notes</h4>
                                    <p className="mt-1 text-sm text-gray-900">
                                        {materials[selectedMaterial].notes}
                                    </p>
                                </div>
                            )}
                        </div>
                        <div className="mt-6 flex justify-end">
                            <button
                                onClick={() => setShowMaterialDetails(false)}
                                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal d'enregistrement livraison */}
            {showDeliveryForm && selectedMaterial && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-medium text-gray-900">Enregistrer livraison - {selectedMaterial}</h3>
                            <button 
                                onClick={() => setShowDeliveryForm(false)}
                                className="text-gray-400 hover:text-gray-500"
                            >
                                ✕
                            </button>
                        </div>
                        <form onSubmit={registerDelivery}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Quantité livrée</label>
                                <input
                                    type="number"
                                    min="1"
                                    value={orderForm.quantity}
                                    onChange={(e) => setOrderForm({...orderForm, quantity: e.target.value})}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Fournisseur</label>
                                <input
                                    type="text"
                                    value={orderForm.supplier}
                                    onChange={(e) => setOrderForm({...orderForm, supplier: e.target.value})}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Date de livraison</label>
                                <input
                                    type="date"
                                    value={orderForm.deliveryDate}
                                    onChange={(e) => setOrderForm({...orderForm, deliveryDate: e.target.value})}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                                <textarea
                                    rows="3"
                                    value={orderForm.notes}
                                    onChange={(e) => setOrderForm({...orderForm, notes: e.target.value})}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                ></textarea>
                            </div>
                            <div className="flex justify-end space-x-3">
                                <button
                                    type="button"
                                    onClick={() => setShowDeliveryForm(false)}
                                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                                >
                                    Annuler
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                >
                                    Enregistrer
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal de modification seuil minimal */}
            {showThresholdForm && selectedMaterial && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-medium text-gray-900">Modifier seuil minimal - {selectedMaterial}</h3>
                            <button 
                                onClick={() => setShowThresholdForm(false)}
                                className="text-gray-400 hover:text-gray-500"
                            >
                                ✕
                            </button>
                        </div>
                        <form onSubmit={updateThreshold}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Nouveau seuil minimal ({materialUnits[selectedMaterial]})</label>
                                <input
                                    type="number"
                                    min="1"
                                    value={thresholdForm.value || materials[selectedMaterial].seuilMin}
                                    onChange={(e) => setThresholdForm({value: e.target.value})}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="flex justify-end space-x-3">
                                <button
                                    type="button"
                                    onClick={() => setShowThresholdForm(false)}
                                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                                >
                                    Annuler
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                >
                                    Enregistrer
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}