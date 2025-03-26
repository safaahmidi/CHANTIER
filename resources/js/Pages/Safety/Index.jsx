// import { Head, Link } from '@inertiajs/react';
// import { Shield, AlertTriangle, HardHat, CheckCircle } from 'lucide-react';

// export default function SafetyIndex({ project, safetyChecks = [] }) { // Valeur par défaut
//     return (
//         <div className="p-6">
//             <Head title={`Sécurité - ${project?.name}`} />
            
//             <div className="mb-6 bg-white p-4 rounded-lg shadow">
//                 <h1 className="text-2xl font-bold flex items-center gap-2">
//                     <Shield className="text-yellow-500" /> 
//                     Mesures de Sécurité - {project?.name}
//                 </h1>
                
//                 {/* ... reste du code inchangé ... */}
                
//                 <div className="space-y-4">
//                     {safetyChecks && safetyChecks.length > 0 ? (
//                         safetyChecks.map(check => (
//                             <div key={check.id} className="border p-4 rounded-lg">
//                                 <h3 className="font-medium">{check.title}</h3>
//                             </div>
//                         ))
//                     ) : (
//                         <p>Aucune checklist de sécurité enregistrée</p>
//                     )}
//                 </div>
                
//                 {/* ... reste du code ... */}
//             </div>
//         </div>
//     );
// }




// import { Head, Link, useForm } from '@inertiajs/react';
// import { 
//   Shield, 
//   AlertTriangle, 
//   HardHat, 
//   CheckCircle, 
//   ClipboardList,
//   FileText,
//   UserCheck,
//   AlertCircle,
//   Plus,
//   Check,
//   X 
// } from 'lucide-react';
// import { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// export default function SafetyIndex({ project, safetyChecks = [] }) {
//   const [showCheckForm, setShowCheckForm] = useState(false);
//   const [selectedCheck, setSelectedCheck] = useState(null);
  
//   const { data, setData, post, processing, reset } = useForm({
//     title: '',
//     description: '',
//     check_date: new Date(),
//     priority: 'medium',
//     status: 'pending',
//     corrective_action: ''
//   });

//   const submitCheck = (e) => {
//     e.preventDefault();
//     post(route('safety.store', { id: project.id }), {
//       onSuccess: () => {
//         reset();
//         setShowCheckForm(false);
//       }
//     });
//   };

//   // Statistiques calculées
//   const stats = {
//     pending: safetyChecks.filter(c => c.status === 'pending').length,
//     completed: safetyChecks.filter(c => c.status === 'completed').length,
//     overdue: safetyChecks.filter(c => 
//       new Date(c.check_date) < new Date() && c.status === 'pending'
//     ).length,
//     compliance: safetyChecks.length > 0 
//       ? Math.round((safetyChecks.filter(c => c.status === 'completed').length / safetyChecks.length) * 100)
//       : 0
//   };

//   return (
//     <div className="p-6 space-y-6">
//       <Head title={`Sécurité - ${project?.name}`} />
      
//       {/* En-tête */}
//       <div className="flex justify-between items-center">
//         <h1 className="text-2xl font-bold flex items-center gap-2">
//           <Shield className="text-yellow-500" /> 
//           Sécurité Chantier - {project?.name}
//         </h1>
//         <button 
//           onClick={() => {
//             setSelectedCheck(null);
//             setShowCheckForm(true);
//           }}
//           className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//         >
//           <Plus className="w-5 h-5 mr-2" />
//           Nouveau Contrôle
//         </button>
//       </div>

//       {/* Tableau de bord rapide */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//         <div className="bg-white p-4 rounded-lg shadow border-l-4 border-red-500">
//           <div className="flex items-center gap-2 text-gray-600">
//             <AlertTriangle className="text-red-500" />
//             <h3>Contrôles en attente</h3>
//           </div>
//           <p className="text-3xl font-bold mt-2">{stats.pending}</p>
//         </div>
        
//         <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-500">
//           <div className="flex items-center gap-2 text-gray-600">
//             <CheckCircle className="text-green-500" />
//             <h3>Contrôles validés</h3>
//           </div>
//           <p className="text-3xl font-bold mt-2">{stats.completed}</p>
//         </div>
        
//         <div className="bg-white p-4 rounded-lg shadow border-l-4 border-orange-500">
//           <div className="flex items-center gap-2 text-gray-600">
//             <AlertCircle className="text-orange-500" />
//             <h3>Contrôles en retard</h3>
//           </div>
//           <p className="text-3xl font-bold mt-2">{stats.overdue}</p>
//         </div>
        
//         <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500">
//           <div className="flex items-center gap-2 text-gray-600">
//             <ClipboardList className="text-blue-500" />
//             <h3>Taux de conformité</h3>
//           </div>
//           <p className="text-3xl font-bold mt-2">{stats.compliance}%</p>
//         </div>
//       </div>

//       {/* Formulaire de contrôle */}
//       {showCheckForm && (
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
//             <FileText className="text-blue-500" />
//             {selectedCheck ? 'Modifier le contrôle' : 'Nouveau contrôle de sécurité'}
//           </h2>
          
//           <form onSubmit={submitCheck}>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Titre du contrôle</label>
//                 <input
//                   type="text"
//                   value={data.title}
//                   onChange={(e) => setData('title', e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Date du contrôle</label>
//                 <DatePicker
//                   selected={new Date(data.check_date)}
//                   onChange={(date) => setData('check_date', date)}
//                   className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>
              
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
//                 <textarea
//                   value={data.description}
//                   onChange={(e) => setData('description', e.target.value)}
//                   rows="3"
//                   className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Priorité</label>
//                 <select
//                   value={data.priority}
//                   onChange={(e) => setData('priority', e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="low">Faible</option>
//                   <option value="medium">Moyenne</option>
//                   <option value="high">Élevée</option>
//                 </select>
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Statut</label>
//                 <select
//                   value={data.status}
//                   onChange={(e) => setData('status', e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="pending">En attente</option>
//                   <option value="completed">Complété</option>
//                   <option value="failed">Non conforme</option>
//                 </select>
//               </div>
              
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Actions correctives</label>
//                 <textarea
//                   value={data.corrective_action}
//                   onChange={(e) => setData('corrective_action', e.target.value)}
//                   rows="2"
//                   className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//                   placeholder="Décrire les mesures correctives si nécessaire..."
//                 />
//               </div>
//             </div>
            
//             <div className="mt-6 flex justify-end space-x-3">
//               <button
//                 type="button"
//                 onClick={() => setShowCheckForm(false)}
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
//       )}

//       {/* Liste des contrôles */}
//       <div className="bg-white rounded-lg shadow overflow-hidden">
//         <div className="p-4 border-b flex justify-between items-center">
//           <h2 className="text-xl font-semibold flex items-center gap-2">
//             <ClipboardList className="text-blue-500" />
//             Historique des Contrôles
//           </h2>
//           <div className="flex items-center space-x-2">
//             <select className="p-2 border border-gray-300 rounded-lg">
//               <option>Tous les statuts</option>
//               <option>En attente</option>
//               <option>Complété</option>
//               <option>Non conforme</option>
//             </select>
//           </div>
//         </div>
        
//         {safetyChecks.length > 0 ? (
//           <div className="divide-y">
//             {safetyChecks.map(check => (
//               <div key={check.id} className="p-4 hover:bg-gray-50">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h3 className="font-medium flex items-center gap-2">
//                       {check.priority === 'high' && (
//                         <AlertTriangle className="text-red-500 w-4 h-4" />
//                       )}
//                       {check.title}
//                     </h3>
//                     <p className="text-sm text-gray-600 mt-1">{check.description}</p>
//                     {check.corrective_action && (
//                       <div className="mt-2 p-2 bg-orange-50 text-orange-800 text-sm rounded">
//                         <strong>Action corrective :</strong> {check.corrective_action}
//                       </div>
//                     )}
//                   </div>
                  
//                   <div className="text-right">
//                     <div className={`px-2 py-1 rounded-full text-xs font-medium ${
//                       check.status === 'completed' 
//                         ? 'bg-green-100 text-green-800' 
//                         : check.status === 'failed'
//                           ? 'bg-red-100 text-red-800'
//                           : 'bg-yellow-100 text-yellow-800'
//                     }`}>
//                       {check.status === 'completed' 
//                         ? 'Complété' 
//                         : check.status === 'failed'
//                           ? 'Non conforme'
//                           : 'En attente'}
//                     </div>
//                     <div className="text-sm text-gray-500 mt-1">
//                       {new Date(check.check_date).toLocaleDateString()}
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="mt-3 flex justify-end space-x-2">
//                   <button
//                     onClick={() => {
//                       setSelectedCheck(check);
//                       setShowCheckForm(true);
//                     }}
//                     className="text-blue-600 hover:text-blue-800 text-sm font-medium"
//                   >
//                     Modifier
//                   </button>
//                   <button className="text-red-600 hover:text-red-800 text-sm font-medium">
//                     Supprimer
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="p-8 text-center text-gray-500">
//             <p>Aucun contrôle de sécurité enregistré pour ce chantier</p>
//             <button 
//               onClick={() => setShowCheckForm(true)}
//               className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
//             >
//               <Plus className="w-4 h-4 mr-1" />
//               Créer votre premier contrôle
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
// SAFETY PAGE NON VOULU


import React, { useState } from 'react';
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
  Move 
} from 'lucide-react';

export default function SafetyManagementTracking({ project }) {
  const [safetyMeasures, setSafetyMeasures] = useState([]);
  const [showMeasureForm, setShowMeasureForm] = useState(false);

  // Catégories de sécurité (identique à l'implémentation précédente)
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
      color: 'text-yellow-500', 
      label: 'Gestion des Risques' 
    },
    'height-work': { 
      icon: ArrowUp, 
      color: 'text-blue-500', 
      label: 'Sécurisation des Travaux en Hauteur' 
    },
    'electrical-safety': { 
      icon: Bolt, 
      color: 'text-purple-500', 
      label: 'Sécurité Électrique' 
    },
    'equipment-usage': { 
      icon: Hammer, 
      color: 'text-gray-500', 
      label: 'Utilisation d\'Équipements et Machines' 
    },
    'site-signage': { 
      icon: Clipboard, 
      color: 'text-green-500', 
      label: 'Signalisation et Délimitation du Chantier' 
    },
    'personal-protective': { 
      icon: HardHat, 
      color: 'text-indigo-500', 
      label: 'Équipements de Protection Individuelle (EPI)' 
    },
    'training': { 
      icon: Users, 
      color: 'text-teal-500', 
      label: 'Formation et Sensibilisation' 
    }
  };

  // État initial du formulaire
  const initialFormState = {
    category: 'first-aid',
    title: '',
    description: '',
    implementation_date: new Date(),
    priority: 'medium',
    status: 'pending',
    corrective_action: ''
  };

  const [formData, setFormData] = useState(initialFormState);

  // Gestion du changement dans le formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Soumettre une nouvelle mesure de sécurité
  const submitMeasure = (e) => {
    e.preventDefault();
    
    const newMeasure = {
      id: Date.now(),
      ...formData,
      implementation_date: new Date(formData.implementation_date)
    };

    setSafetyMeasures(prev => [...prev, newMeasure]);
    setFormData(initialFormState);
    setShowMeasureForm(false);
  };

  // Déplacer une mesure entre les colonnes
  const moveMeasure = (measure) => {
    const updatedMeasures = safetyMeasures.map(m => 
      m.id === measure.id 
        ? { ...m, status: m.status === 'pending' ? 'completed' : 'pending' } 
        : m
    );
    setSafetyMeasures(updatedMeasures);
  };

  // Séparer les mesures par statut
  const pendingMeasures = safetyMeasures.filter(m => m.status === 'pending');
  const completedMeasures = safetyMeasures.filter(m => m.status === 'completed');

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 flex items-center">
        <ShieldCheck className="mr-2 text-blue-500" /> 
        Suivi des Mesures de Sécurité
      </h1>

      {/* Bouton Nouvelle Mesure */}
      <div className="mb-6">
        <button 
          onClick={() => setShowMeasureForm(true)}
          className="btn btn-primary flex items-center"
        >
          <PlusCircle className="mr-2" /> Nouvelle Mesure
        </button>
      </div>

      {/* Formulaire de Nouvelle Mesure */}
      {showMeasureForm && (
        <div className="bg-white shadow-md rounded p-6 mb-6">
          <form onSubmit={submitMeasure}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Catégorie</label>
                <select 
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                >
                  {Object.entries(safetyCategoriesMap).map(([key, category]) => (
                    <option key={key} value={key}>{category.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block mb-2">Titre</label>
                <input 
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required 
                />
              </div>
              <div className="col-span-2">
                <label className="block mb-2">Description</label>
                <textarea 
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  rows="3"
                />
              </div>
              <div>
                <label className="block mb-2">Priorité</label>
                <select 
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="low">Faible</option>
                  <option value="medium">Moyenne</option>
                  <option value="high">Élevée</option>
                </select>
              </div>
              <div className="col-span-2 flex justify-end space-x-2">
                <button 
                  type="button"
                  onClick={() => setShowMeasureForm(false)}
                  className="btn btn-secondary"
                >
                  Annuler
                </button>
                <button 
                  type="submit"
                  className="btn btn-primary flex items-center"
                >
                  Enregistrer
                  <Check className="ml-2" />
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Tableau de Suivi des Mesures */}
      <div className="grid grid-cols-2 gap-6">
        {/* Colonne Mesures Non Mises en Place */}
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center text-orange-600">
            <AlertTriangle className="mr-2" /> 
            Mesures Non Mises en Place
          </h2>
          {pendingMeasures.length === 0 ? (
            <div className="text-center text-gray-500 bg-white p-4 rounded shadow">
              Aucune mesure en attente
            </div>
          ) : (
            <div className="space-y-4">
              {pendingMeasures.map(measure => (
                <div 
                  key={measure.id} 
                  className="bg-white shadow rounded p-4 flex justify-between items-center"
                >
                  <div className="flex items-center space-x-4">
                    <AlertTriangle className="text-orange-500" />
                    <div>
                      <h3 className="font-semibold">{measure.title}</h3>
                      <p className="text-sm text-gray-500">
                        {safetyCategoriesMap[measure.category]?.label}
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => moveMeasure(measure)}
                    className="btn btn-sm btn-outline-primary flex items-center"
                  >
                    <Move className="mr-2" /> Mettre en Place
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Colonne Mesures Mises en Place */}
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center text-green-600">
            <CheckCircle className="mr-2" /> 
            Mesures Mises en Place
          </h2>
          {completedMeasures.length === 0 ? (
            <div className="text-center text-gray-500 bg-white p-4 rounded shadow">
              Aucune mesure mise en place
            </div>
          ) : (
            <div className="space-y-4">
              {completedMeasures.map(measure => (
                <div 
                  key={measure.id} 
                  className="bg-white shadow rounded p-4 flex justify-between items-center"
                >
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="text-green-500" />
                    <div>
                      <h3 className="font-semibold">{measure.title}</h3>
                      <p className="text-sm text-gray-500">
                        {safetyCategoriesMap[measure.category]?.label}
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => moveMeasure(measure)}
                    className="btn btn-sm btn-outline-secondary flex items-center"
                  >
                    <Move className="mr-2" /> Annuler
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// import { Head, Link, useForm } from '@inertiajs/react';
// import { 
//   Shield, AlertTriangle, HardHat, CheckCircle, 
//   ClipboardList, FileText, UserCheck, AlertCircle,
//   Plus, Check, X, ChevronDown, Filter, Search 
// } from 'lucide-react';
// import { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// export default function SafetyIndex({ project, safetyChecks = [] }) {
//   const [showCheckForm, setShowCheckForm] = useState(false);
//   const [selectedCheck, setSelectedCheck] = useState(null);
//   const [activeTab, setActiveTab] = useState('all');
  
//   const { data, setData, post, processing, reset } = useForm({
//     title: '',
//     description: '',
//     check_date: new Date(),
//     priority: 'medium',
//     status: 'pending',
//     corrective_action: ''
//   });

//   // Filtrage des contrôles
//   const filteredChecks = safetyChecks.filter(check => {
//     if (activeTab === 'all') return true;
//     if (activeTab === 'pending') return check.status === 'pending';
//     if (activeTab === 'completed') return check.status === 'completed';
//     if (activeTab === 'overdue') return new Date(check.check_date) < new Date() && check.status === 'pending';
//     return true;
//   });

//   const submitCheck = (e) => {
//     e.preventDefault();
//     post(route('safety.store', { id: project.id }), {
//       onSuccess: () => {
//         reset();
//         setShowCheckForm(false);
//       }
//     });
//   };

//   // Statistiques calculées
//   const stats = {
//     pending: safetyChecks.filter(c => c.status === 'pending').length,
//     completed: safetyChecks.filter(c => c.status === 'completed').length,
//     overdue: safetyChecks.filter(c => new Date(c.check_date) < new Date() && c.status === 'pending').length,
//     compliance: safetyChecks.length > 0 
//       ? Math.round((safetyChecks.filter(c => c.status === 'completed').length / safetyChecks.length) * 100)
//       : 0
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <Head title={`Sécurité - ${project?.name}`} />
      
//       {/* Header */}
//       <div className="mb-8">
//         <div className="flex justify-between items-center mb-4">
//           <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
//             <Shield className="text-blue-600" size={28} />
//             <span>Sécurité - {project?.name}</span>
//           </h1>
//           <button 
//             onClick={() => {
//               setSelectedCheck(null);
//               setShowCheckForm(true);
//             }}
//             className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
//           >
//             <Plus className="w-5 h-5 mr-2" />
//             Nouveau Contrôle
//           </button>
//         </div>
        
//         {/* Navigation tabs */}
//         <div className="flex border-b border-gray-200">
//           {['all', 'pending', 'completed', 'overdue'].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`px-4 py-2 font-medium text-sm flex items-center gap-2 ${
//                 activeTab === tab 
//                   ? 'text-blue-600 border-b-2 border-blue-600' 
//                   : 'text-gray-500 hover:text-gray-700'
//               }`}
//             >
//               {tab === 'all' && <ClipboardList size={16} />}
//               {tab === 'pending' && <AlertCircle size={16} />}
//               {tab === 'completed' && <CheckCircle size={16} />}
//               {tab === 'overdue' && <AlertTriangle size={16} />}
//               {tab === 'all' ? 'Tous' : 
//                tab === 'pending' ? 'En attente' : 
//                tab === 'completed' ? 'Validés' : 'En retard'}
//               {tab === 'pending' && stats.pending > 0 && (
//                 <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">
//                   {stats.pending}
//                 </span>
//               )}
//               {tab === 'overdue' && stats.overdue > 0 && (
//                 <span className="bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full">
//                   {stats.overdue}
//                 </span>
//               )}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
//         <StatCard 
//           icon={<ClipboardList className="text-blue-500" />}
//           title="Total"
//           value={safetyChecks.length}
//           color="blue"
//         />
//         <StatCard 
//           icon={<AlertCircle className="text-yellow-500" />}
//           title="En attente"
//           value={stats.pending}
//           color="yellow"
//         />
//         <StatCard 
//           icon={<CheckCircle className="text-green-500" />}
//           title="Complétés"
//           value={stats.completed}
//           color="green"
//         />
//         <StatCard 
//           icon={<AlertTriangle className="text-red-500" />}
//           title="En retard"
//           value={stats.overdue}
//           color="red"
//         />
//       </div>

//       {/* Contrôles List */}
//       <div className="bg-white rounded-lg shadow overflow-hidden">
//         <div className="p-4 border-b flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//           <h2 className="text-lg font-semibold flex items-center gap-2">
//             <HardHat className="text-blue-500" />
//             Liste des Contrôles
//           </h2>
          
//           <div className="flex items-center w-full md:w-auto gap-2">
//             <div className="relative flex-1 md:w-64">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
//               <input
//                 type="text"
//                 placeholder="Rechercher..."
//                 className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
//               <Filter size={16} />
//               <span className="hidden md:inline">Filtrer</span>
//               <ChevronDown size={16} />
//             </button>
//           </div>
//         </div>
        
//         {filteredChecks.length > 0 ? (
//           <div className="divide-y divide-gray-200">
//             {filteredChecks.map(check => (
//               <ControlItem 
//                 key={check.id} 
//                 check={check}
//                 onEdit={() => {
//                   setSelectedCheck(check);
//                   setShowCheckForm(true);
//                 }}
//               />
//             ))}
//           </div>
//         ) : (
//           <EmptyState onAddNew={() => setShowCheckForm(true)} />
//         )}
//       </div>

//       {/* Control Form Modal */}
//       {showCheckForm && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//             <div className="p-6">
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-xl font-semibold flex items-center gap-2">
//                   <FileText className="text-blue-500" />
//                   {selectedCheck ? 'Modifier contrôle' : 'Nouveau contrôle'}
//                 </h2>
//                 <button 
//                   onClick={() => setShowCheckForm(false)}
//                   className="text-gray-500 hover:text-gray-700"
//                 >
//                   <X size={24} />
//                 </button>
//               </div>
              
//               <ControlForm 
//                 data={data}
//                 setData={setData}
//                 processing={processing}
//                 onSubmit={submitCheck}
//                 onCancel={() => setShowCheckForm(false)}
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// // Composants supplémentaires
// function StatCard({ icon, title, value, color }) {
//   const colors = {
//     blue: 'border-blue-500',
//     yellow: 'border-yellow-500',
//     green: 'border-green-500',
//     red: 'border-red-500'
//   };

//   return (
//     <div className={`bg-white p-4 rounded-lg shadow border-l-4 ${colors[color]}`}>
//       <div className="flex items-center gap-3">
//         <div className="p-2 bg-gray-100 rounded-full">
//           {icon}
//         </div>
//         <div>
//           <p className="text-sm text-gray-600">{title}</p>
//           <p className="text-2xl font-bold">{value}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ControlItem({ check, onEdit }) {
//   const statusColors = {
//     pending: 'bg-yellow-100 text-yellow-800',
//     completed: 'bg-green-100 text-green-800',
//     failed: 'bg-red-100 text-red-800'
//   };

//   const priorityIcons = {
//     high: <AlertTriangle className="text-red-500 w-4 h-4" />,
//     medium: <AlertTriangle className="text-yellow-500 w-4 h-4" />,
//     low: null
//   };

//   return (
//     <div className="p-4 hover:bg-gray-50 transition-colors">
//       <div className="flex justify-between items-start gap-4">
//         <div className="flex-1">
//           <div className="flex items-center gap-2 mb-1">
//             {priorityIcons[check.priority]}
//             <h3 className="font-medium">{check.title}</h3>
//           </div>
//           <p className="text-sm text-gray-600 mb-2">{check.description}</p>
          
//           {check.corrective_action && (
//             <div className="mt-2 p-2 bg-orange-50 text-orange-800 text-sm rounded">
//               <strong>Action corrective :</strong> {check.corrective_action}
//             </div>
//           )}
//         </div>
        
//         <div className="flex flex-col items-end gap-2">
//           <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[check.status]}`}>
//             {check.status === 'completed' ? 'Validé' : 
//              check.status === 'failed' ? 'Non conforme' : 'En attente'}
//           </span>
//           <span className="text-xs text-gray-500">
//             {new Date(check.check_date).toLocaleDateString()}
//           </span>
//         </div>
//       </div>
      
//       <div className="mt-3 flex justify-end gap-3">
//         <button
//           onClick={onEdit}
//           className="text-sm text-blue-600 hover:text-blue-800 font-medium px-3 py-1 hover:bg-blue-50 rounded"
//         >
//           Modifier
//         </button>
//         <button className="text-sm text-red-600 hover:text-red-800 font-medium px-3 py-1 hover:bg-red-50 rounded">
//           Supprimer
//         </button>
//       </div>
//     </div>
//   );
// }

// function EmptyState({ onAddNew }) {
//   return (
//     <div className="p-8 text-center">
//       <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
//         <ClipboardList className="text-gray-400" size={40} />
//       </div>
//       <h3 className="text-lg font-medium text-gray-900 mb-1">Aucun contrôle enregistré</h3>
//       <p className="text-gray-500 mb-4">Commencez par créer votre premier contrôle de sécurité</p>
//       <button
//         onClick={onAddNew}
//         className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
//       >
//         <Plus className="w-4 h-4 mr-2" />
//         Nouveau contrôle
//       </button>
//     </div>
//   );
// }

// function ControlForm({ data, setData, processing, onSubmit, onCancel }) {
//   return (
//     <form onSubmit={onSubmit}>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Titre*</label>
//           <input
//             type="text"
//             value={data.title}
//             onChange={(e) => setData('title', e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             required
//           />
//         </div>
        
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Date*</label>
//           <DatePicker
//             selected={new Date(data.check_date)}
//             onChange={(date) => setData('check_date', date)}
//             className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             required
//           />
//         </div>
        
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Priorité*</label>
//           <select
//             value={data.priority}
//             onChange={(e) => setData('priority', e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             required
//           >
//             <option value="low">Faible</option>
//             <option value="medium">Moyenne</option>
//             <option value="high">Élevée</option>
//           </select>
//         </div>
        
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Statut*</label>
//           <select
//             value={data.status}
//             onChange={(e) => setData('status', e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             required
//           >
//             <option value="pending">En attente</option>
//             <option value="completed">Complété</option>
//             <option value="failed">Non conforme</option>
//           </select>
//         </div>
        
//         <div className="md:col-span-2">
//           <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
//           <textarea
//             value={data.description}
//             onChange={(e) => setData('description', e.target.value)}
//             rows="3"
//             className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>
        
//         <div className="md:col-span-2">
//           <label className="block text-sm font-medium text-gray-700 mb-1">Actions correctives</label>
//           <textarea
//             value={data.corrective_action}
//             onChange={(e) => setData('corrective_action', e.target.value)}
//             rows="2"
//             className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             placeholder="Décrire les mesures correctives si nécessaire..."
//           />
//         </div>
//       </div>
      
//       <div className="mt-8 flex justify-end gap-3">
//         <button
//           type="button"
//           onClick={onCancel}
//           className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors"
//         >
//           Annuler
//         </button>
//         <button
//           type="submit"
//           disabled={processing}
//           className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50 flex items-center"
//         >
//           {processing ? 'Enregistrement...' : 'Enregistrer'}
//           {!processing && <Check className="ml-2 w-4 h-4" />}
//         </button>
//       </div>
//     </form>
//   );
// }
