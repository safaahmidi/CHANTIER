// import Checkbox from '@/Components/Checkbox';
// import InputError from '@/Components/InputError';
// import InputLabel from '@/Components/InputLabel';
// import PrimaryButton from '@/Components/PrimaryButton';
// import TextInput from '@/Components/TextInput';
// import GuestLayout from '@/Layouts/GuestLayout';
// import { Head, Link, useForm } from '@inertiajs/react';
// import Navbar from '@/Components/Navbar';  // Assure-toi que le chemin est correct


// export default function Login({ status, canResetPassword }) {
//     const { data, setData, post, processing, errors, reset } = useForm({
//         email: '',
//         password: '',
//         remember: false,
//     });

//     const submit = (e) => {
//         e.preventDefault();

//         post(route('login'), {
//             onFinish: () => reset('password'),
//         });
//     };

//     return (
//         <>
//         <Navbar/>
//         <GuestLayout>
//             <Head title="Log in" />

//             {status && (
//                 <div className="mb-4 text-sm font-medium text-green-600">
//                     {status}
//                 </div>
//             )}

//             <form onSubmit={submit}>
//                 <div>
//                     <InputLabel htmlFor="email" value="Email" />

//                     <TextInput
//                         id="email"
//                         type="email"
//                         name="email"
//                         value={data.email}
//                         className="mt-1 block w-full   text-black"
//                         autoComplete="username"
//                         isFocused={true}
//                         onChange={(e) => setData('email', e.target.value)}
//                     />

//                     <InputError message={errors.email} className="mt-2" />
//                 </div>

//                 <div className="mt-4">
//                     <InputLabel htmlFor="password" value="Password" />

//                     <TextInput
//                         id="password"
//                         type="password"
//                         name="password"
//                         value={data.password}
//                         className="mt-1 block w-full  text-black"
//                         autoComplete="current-password"
//                         onChange={(e) => setData('password', e.target.value)}
//                     />

//                     <InputError message={errors.password} className="mt-2" />
//                 </div>

//                 <div className="mt-4 block">
//                     <label className="flex items-center">
//                         <Checkbox
//                             name="remember"
//                             checked={data.remember}
//                             onChange={(e) =>
//                                 setData('remember', e.target.checked)
//                             }
//                         />
//                         <span className="ms-2 text-sm text-gray-600">
//                             Remember me
//                         </span>
//                     </label>
//                 </div>

//                 <div className="mt-4 flex items-center justify-end">
//                     {canResetPassword && (
//                         <Link
//                             href={route('password.request')}
//                             className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                         >
//                             Forgot your password?
//                         </Link>
//                     )}

//                     <PrimaryButton className="ms-4 bg-yellow-500" disabled={processing}>
//                         Log in
//                     </PrimaryButton>
//                 </div>
//             </form>
//         </GuestLayout>
//         </>
//     );
// }



/// CODE 2

// import Checkbox from '@/Components/Checkbox';
// import InputError from '@/Components/InputError';
// import InputLabel from '@/Components/InputLabel';
// import PrimaryButton from '@/Components/PrimaryButton';
// import TextInput from '@/Components/TextInput';
// import GuestLayout from '@/Layouts/GuestLayout';
// import { Head, Link, useForm } from '@inertiajs/react';
// import Navbar from '@/Components/Navbar';  // Assure-toi que le chemin est correct

// export default function Login({ status, canResetPassword }) {
//     const { data, setData, post, processing, errors, reset } = useForm({
//         email: '',
//         password: '',
//         remember: false,
//     });

//     const submit = (e) => {
//         e.preventDefault();

//         post(route('login'), {
//             onFinish: () => reset('password'),
//         });
//     };

//     return (
//         <>
//         <Navbar />
//         <GuestLayout>
//             <Head title="Log in" />

//             {status && (
//                 <div className="mb-4 text-sm font-medium text-green-600">
//                     {status}
//                 </div>
//             )}

//             {/* Conteneur principal avec un fond dégradé */}
//             <div className="bg-gradient-to-br from-[#070a0b] to-[#1d5c76] min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//                 {/* Formulaire avec fond blanc */}
//                 <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//                     <form onSubmit={submit}>
//                         {/* Champ Email */}
//                         <div>
//                             <InputLabel htmlFor="email" value="Email" />
//                             <TextInput
//                                 id="email"
//                                 type="email"
//                                 name="email"
//                                 value={data.email}
//                                 className="mt-1 block w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//                                 autoComplete="username"
//                                 isFocused={true}
//                                 onChange={(e) => setData('email', e.target.value)}
//                             />
//                             <InputError message={errors.email} className="mt-2" />
//                         </div>

//                         {/* Champ Password */}
//                         <div className="mt-4">
//                             <InputLabel htmlFor="password" value="Password" />
//                             <TextInput
//                                 id="password"
//                                 type="password"
//                                 name="password"
//                                 value={data.password}
//                                 className="mt-1 block w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//                                 autoComplete="current-password"
//                                 onChange={(e) => setData('password', e.target.value)}
//                             />
//                             <InputError message={errors.password} className="mt-2" />
//                         </div>

//                         {/* Checkbox Remember */}
//                         <div className="mt-4 block">
//                             <label className="flex items-center">
//                                 <Checkbox
//                                     name="remember"
//                                     checked={data.remember}
//                                     onChange={(e) =>
//                                         setData('remember', e.target.checked)
//                                     }
//                                 />
//                                 <span className="ms-2 text-sm text-gray-600">
//                                     Remember me
//                                 </span>
//                             </label>
//                         </div>

//                         {/* Boutons */}
//                         <div className="mt-4 flex items-center justify-between">
//                             {canResetPassword && (
//                                 <Link
//                                     href={route('password.request')}
//                                     className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                                 >
//                                     Forgot your password?
//                                 </Link>
//                             )}

//                             <PrimaryButton className="bg-blue-400 hover:bg-yellow-600 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" disabled={processing}>
//                                 Log in
//                             </PrimaryButton>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </GuestLayout>
//         </>
//     );
// }


import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';  // Assure-toi que le chemin est correct

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Navbar />
            <GuestLayout>
                <Head title="Log in" />

                {status && (
                    <div className="mb-4 text-sm font-medium text-green-600">
                        {status}
                    </div>
                )}

                {/* Conteneur principal avec une image de fond */}
                <div
                    className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
                    style={{
                        backgroundImage: "url('./AAA.jpeg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    {/* Formulaire avec un fond semi-transparent */}
                    <div className="bg-black/50 p-8 rounded-lg shadow-lg w-full max-w-md">
                        <form onSubmit={submit} className="space-y-6">
                            {/* Champ Email */}
                            <div>
                                <InputLabel htmlFor="email" value="Email" className="text-white" />
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gradient-to-br from-[#070a0b] to-[#1d5c76] text-white placeholder-gray-300"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="Enter your email"
                                />
                                <InputError message={errors.email} className="mt-2 text-white" />
                            </div>

                            {/* Champ Password */}
                            <div>
                                <InputLabel htmlFor="password" value="Password" className="text-white" />
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gradient-to-br from-[#070a0b] to-[#1d5c76] text-white placeholder-gray-300"
                                    autoComplete="current-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder="Enter your password"
                                />
                                <InputError message={errors.password} className="mt-2 text-white" />
                            </div>

                            {/* Checkbox Remember */}
                            <div className="block">
                                <label className="flex items-center">
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) =>
                                            setData('remember', e.target.checked)
                                        }
                                        className="text-white"
                                    />
                                    <span className="ms-2 text-sm text-white">
                                        Remember me
                                    </span>
                                </label>
                            </div>

                            {/* Boutons */}
                            <div className="flex items-center justify-between">
                                {canResetPassword && (
                                    <Link
                                        href={route('password.request')}
                                        className="rounded-md text-sm text-white underline hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Forgot your password?
                                    </Link>
                                )}

                                <PrimaryButton className="bg-blue-400 hover:bg-yellow-600 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" disabled={processing}>
                                    Log in
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </GuestLayout>
        </>
    );
}


// 1 ère style par taylwind et framer motion 
// import React, { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { useForm } from '@inertiajs/react';
// import toast, { Toaster } from 'react-hot-toast';
// import Navbar from '@/Components/Navbar';
// import GuestLayout from '@/Layouts/GuestLayout';
// import { Head, Link } from '@inertiajs/react';
// import InputError from '@/Components/InputError';
// import InputLabel from '@/Components/InputLabel';
// import TextInput from '@/Components/TextInput';
// import PrimaryButton from '@/Components/PrimaryButton';
// import Checkbox from '@/Components/Checkbox';

// export default function Login({ status, canResetPassword }) {
//     const { data, setData, post, processing, errors, reset } = useForm({
//         email: '',
//         password: '',
//         remember: false,
//     });

//     const submit = (e) => {
//         e.preventDefault();
//         post(route('login'), {
//             onFinish: () => reset('password'),
//         });
//     };

//     return (
//         <>
//         <Navbar />
//         <GuestLayout>
//             <Head title="Log in" />
            
//             {/* Message de succès */}
//             {status && (
//                 <div className="mb-4 text-sm font-medium text-green-600">
//                     {status}
//                 </div>
//             )}

//             {/* Formulaire de connexion */}
//             <motion.div
//                 initial="hidden"
//                 animate="visible"
//                 variants={{
//                     hidden: { opacity: 0, y: 20 },
//                     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//                 }}
//                 className="bg-gradient-to-br from-[#070a0b] to-[#1d5c76] min-h-screen py-12 px-4 sm:px-6 lg:px-8"
//             >
//                 <Toaster />
//                 {/* En-tête de la page */}
//                 <motion.header
//                     initial="hidden"
//                     animate="visible"
//                     variants={{
//                         hidden: { opacity: 0, y: 20 },
//                         visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//                     }}
//                     className="bg-[url('./contact-header.jpg')] bg-cover bg-center py-20 text-center rounded-xl shadow-lg"
//                 >
//                     <motion.h1
//                         variants={{
//                             hidden: { opacity: 0, y: 20 },
//                             visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//                         }}
//                         className="text-4xl md:text-5xl font-extrabold text-white mb-4"
//                     >
//                         Connexion
//                     </motion.h1>
//                     <motion.p
//                         variants={{
//                             hidden: { opacity: 0, y: 20 },
//                             visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//                         }}
//                         className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
//                     >
//                         Connectez-vous à votre compte pour commencer à gérer vos projets.
//                     </motion.p>
//                 </motion.header>

//                 {/* Formulaire de connexion */}
//                 <motion.div
//                     initial="hidden"
//                     animate="visible"
//                     variants={{
//                         hidden: { opacity: 0, y: 20 },
//                         visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//                     }}
//                     className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-12"
//                 >
//                     {/* Formulaire */}
//                     <form onSubmit={submit}>
//                         <div className="mb-6">
//                             <InputLabel htmlFor="email" value="Email" />
//                             <TextInput
//                                 id="email"
//                                 type="email"
//                                 name="email"
//                                 value={data.email}
//                                 className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 autoComplete="username"
//                                 isFocused={true}
//                                 onChange={(e) => setData('email', e.target.value)}
//                             />
//                             <InputError message={errors.email} className="mt-2 text-red-500" />
//                         </div>

//                         <div className="mb-6">
//                             <InputLabel htmlFor="password" value="Mot de passe" />
//                             <TextInput
//                                 id="password"
//                                 type="password"
//                                 name="password"
//                                 value={data.password}
//                                 className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 autoComplete="current-password"
//                                 onChange={(e) => setData('password', e.target.value)}
//                             />
//                             <InputError message={errors.password} className="mt-2 text-red-500" />
//                         </div>

//                         <div className="mt-4 block">
//                             <label className="flex items-center">
//                                 <Checkbox
//                                     name="remember"
//                                     checked={data.remember}
//                                     onChange={(e) =>
//                                         setData('remember', e.target.checked)
//                                     }
//                                 />
//                                 <span className="ms-2 text-sm text-gray-600">
//                                     Se souvenir de moi
//                                 </span>
//                             </label>
//                         </div>

//                         <div className="mt-4 flex items-center justify-end">
//                             {canResetPassword && (
//                                 <Link
//                                     href={route('password.request')}
//                                     className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                                 >
//                                     Mot de passe oublié ?
//                                 </Link>
//                             )}

//                             <PrimaryButton className="ms-4 bg-yellow-500" disabled={processing}>
//                                 Se connecter
//                             </PrimaryButton>
//                         </div>
//                     </form>
//                 </motion.div>
//             </motion.div>
//         </GuestLayout>
//         </>
//     );
// }
