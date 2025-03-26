// import { Link } from '@inertiajs/react';

// export default function Navbar2({ project }) {
//     return (
//         <div className="bg-white shadow p-4 flex justify-between items-center">
//             <h1 className="text-2xl font-bold">Projet - {project.name}</h1>
//             <div className="flex space-x-4">
//                 {/* Lien vers la page des tâches */}
//                 <Link
//                     href={route('tasks.index', { id: project.id })}
//                     className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//                 >
//                     Tâches
//                 </Link>

//                 {/* Lien vers la page des ouvriers */}
//                 <Link
//                     href={route('workers.index', { id: project.id })}
//                     className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
//                 >
//                     Ouvriers
//                 </Link>
//             </div>
//         </div>
//     );
// }