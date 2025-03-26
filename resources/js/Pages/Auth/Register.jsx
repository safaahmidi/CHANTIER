// import InputError from '@/Components/InputError';
// import InputLabel from '@/Components/InputLabel';
// import PrimaryButton from '@/Components/PrimaryButton';
// import TextInput from '@/Components/TextInput';
// import GuestLayout from '@/Layouts/GuestLayout';
// import { Head, Link, useForm } from '@inertiajs/react';
// import Navbar from '@/Components/Navbar';  // Assure-toi que le chemin est correct


// export default function Register() {
//     const { data, setData, post, processing, errors, reset } = useForm({
//         name: '',
//         email: '',
//         password: '',
//         password_confirmation: '',
//     });

//     const submit = (e) => {
//         e.preventDefault();

//         post(route('register'), {
//             onFinish: () => reset('password', 'password_confirmation'),
//         });
//     };

//     return (
//         <>
//         <Navbar/>
//         <GuestLayout>
//             <Head title="Register" />

//             <form onSubmit={submit}>
//                 <div>
//                     <InputLabel htmlFor="name" value="Name" />

//                     <TextInput
//                         id="name"
//                         name="name"
//                         value={data.name}
//                         className="mt-1 block w-full text-black"
//                         autoComplete="name"
//                         isFocused={true}
//                         onChange={(e) => setData('name', e.target.value)}
//                         required
//                     />

//                     <InputError message={errors.name} className="mt-2" />
//                 </div>

//                 <div className="mt-4">
//                     <InputLabel htmlFor="email" value="Email" />

//                     <TextInput
//                         id="email"
//                         type="email"
//                         name="email"
//                         value={data.email}
//                         className="mt-1 block w-full text-black"
//                         autoComplete="username"
//                         onChange={(e) => setData('email', e.target.value)}
//                         required
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
//                         className="mt-1 block w-full text-black"
//                         autoComplete="new-password"
//                         onChange={(e) => setData('password', e.target.value)}
//                         required
//                     />

//                     <InputError message={errors.password} className="mt-2" />
//                 </div>

//                 <div className="mt-4">
//                     <InputLabel
//                         htmlFor="password_confirmation"
//                         value="Confirm Password"
//                     />

//                     <TextInput
//                         id="password_confirmation"
//                         type="password"
//                         name="password_confirmation"
//                         value={data.password_confirmation}
//                         className="mt-1 block w-full text-black"
//                         autoComplete="new-password"
//                         onChange={(e) =>
//                             setData('password_confirmation', e.target.value)
//                         }
//                         required
//                     />

//                     <InputError
//                         message={errors.password_confirmation}
//                         className="mt-2"
//                     />
//                 </div>

//                 <div className="mt-4 flex items-center justify-end">
//                     <Link
//                         href={route('login')}
//                         className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                     >
//                         Already registered?
//                     </Link>

//                     <PrimaryButton className="ms-4" disabled={processing}>
//                         Register
//                     </PrimaryButton>
//                 </div>
//             </form>
//         </GuestLayout>
//         </>
//     );
// }



//code awla 
// import InputError from '@/Components/InputError';
// import InputLabel from '@/Components/InputLabel';
// import PrimaryButton from '@/Components/PrimaryButton';
// import TextInput from '@/Components/TextInput';
// import GuestLayout from '@/Layouts/GuestLayout';
// import { Head, Link, useForm } from '@inertiajs/react';
// import Navbar from '@/Components/Navbar';  // Assure-toi que le chemin est correct

// export default function Register() {
//     const { data, setData, post, processing, errors, reset } = useForm({
//         name: '',
//         email: '',
//         password: '',
//         password_confirmation: '',
//     });

//     const submit = (e) => {
//         e.preventDefault();

//         post(route('register'), {
//             onFinish: () => reset('password', 'password_confirmation'),
//         });
//     };

//     return (
//         <>
//         <Navbar />
//         <GuestLayout>
//             <Head title="Register" />

//             {/* Conteneur principal avec un fond dégradé bleu-noir */}
//             <div className="bg-gradient-to-br from-[#070a0b] to-[#1d5c76] min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//                 {/* Formulaire avec fond blanc */}
//                 <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//                     <form onSubmit={submit}>
//                         {/* Champ du nom */}
//                         <div>
//                             <InputLabel htmlFor="name" value="Name" />
//                             <TextInput
//                                 id="name"
//                                 name="name"
//                                 value={data.name}
//                                 className="mt-1 block w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//                                 autoComplete="name"
//                                 isFocused={true}
//                                 onChange={(e) => setData('name', e.target.value)}
//                                 required
//                             />
//                             <InputError message={errors.name} className="mt-2" />
//                         </div>

//                         {/* Champ email */}
//                         <div className="mt-4">
//                             <InputLabel htmlFor="email" value="Email" />
//                             <TextInput
//                                 id="email"
//                                 type="email"
//                                 name="email"
//                                 value={data.email}
//                                 className="mt-1 block w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//                                 autoComplete="username"
//                                 onChange={(e) => setData('email', e.target.value)}
//                                 required
//                             />
//                             <InputError message={errors.email} className="mt-2" />
//                         </div>

//                         {/* Champ mot de passe */}
//                         <div className="mt-4">
//                             <InputLabel htmlFor="password" value="Password" />
//                             <TextInput
//                                 id="password"
//                                 type="password"
//                                 name="password"
//                                 value={data.password}
//                                 className="mt-1 block w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//                                 autoComplete="new-password"
//                                 onChange={(e) => setData('password', e.target.value)}
//                                 required
//                             />
//                             <InputError message={errors.password} className="mt-2" />
//                         </div>

//                         {/* Champ confirmation du mot de passe */}
//                         <div className="mt-4">
//                             <InputLabel
//                                 htmlFor="password_confirmation"
//                                 value="Confirm Password"
//                             />
//                             <TextInput
//                                 id="password_confirmation"
//                                 type="password"
//                                 name="password_confirmation"
//                                 value={data.password_confirmation}
//                                 className="mt-1 block w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//                                 autoComplete="new-password"
//                                 onChange={(e) =>
//                                     setData('password_confirmation', e.target.value)
//                                 }
//                                 required
//                             />
//                             <InputError
//                                 message={errors.password_confirmation}
//                                 className="mt-2"
//                             />
//                         </div>

//                         {/* Liens et bouton de soumission */}
//                         <div className="mt-4 flex items-center justify-between">
//                             <Link
//                                 href={route('login')}
//                                 className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                             >
//                                 Already registered?
//                             </Link>

//                             <PrimaryButton className="ms-4 bg-blue-400 hover:bg-yellow-600 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" disabled={processing}>
//                                 Register
//                             </PrimaryButton>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </GuestLayout>
//         </>
//     );
// }


import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';  // Assure-toi que le chemin est correct

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            <Navbar />
            <GuestLayout>
                <Head title="Register" />

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
                            {/* Champ du nom */}
                            <div>
                                <InputLabel htmlFor="name" value="Name" className="text-white" />
                                <TextInput
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    className="mt-1 block w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gradient-to-br from-[#070a0b] to-[#1d5c76] text-white placeholder-gray-300"
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={(e) => setData('name', e.target.value)}
                                    placeholder="Enter your name"
                                    required
                                />
                                <InputError message={errors.name} className="mt-2 text-white" />
                            </div>

                            {/* Champ email */}
                            <div>
                                <InputLabel htmlFor="email" value="Email" className="text-white" />
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gradient-to-br from-[#070a0b] to-[#1d5c76] text-white placeholder-gray-300"
                                    autoComplete="username"
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                />
                                <InputError message={errors.email} className="mt-2 text-white" />
                            </div>

                            {/* Champ mot de passe */}
                            <div>
                                <InputLabel htmlFor="password" value="Password" className="text-white" />
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gradient-to-br from-[#070a0b] to-[#1d5c76] text-white placeholder-gray-300"
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder="Enter your password"
                                    required
                                />
                                <InputError message={errors.password} className="mt-2 text-white" />
                            </div>

                            {/* Champ confirmation du mot de passe */}
                            <div>
                                <InputLabel
                                    htmlFor="password_confirmation"
                                    value="Confirm Password"
                                    className="text-white"
                                />
                                <TextInput
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="mt-1 block w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gradient-to-br from-[#070a0b] to-[#1d5c76] text-white placeholder-gray-300"
                                    autoComplete="new-password"
                                    onChange={(e) =>
                                        setData('password_confirmation', e.target.value)
                                    }
                                    placeholder="Confirm your password"
                                    required
                                />
                                <InputError
                                    message={errors.password_confirmation}
                                    className="mt-2 text-white"
                                />
                            </div>

                            {/* Liens et bouton de soumission */}
                            <div className="flex items-center justify-between">
                                <Link
                                    href={route('login')}
                                    className="rounded-md text-sm text-white underline hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Already registered?
                                </Link>

                                <PrimaryButton className="ms-4 bg-blue-400 hover:bg-yellow-600 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" disabled={processing}>
                                    Register
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </GuestLayout>
        </>
    );
}