// 'use client'
// import Image from "next/image";
// import { FiMenu } from "react-icons/fi";
// import React, { Fragment, useState, useEffect } from "react";
// import { Dialog, Transition } from "@headlessui/react";
// import { XMarkIcon } from "@heroicons/react/24/outline";
// import logo from "../../../public/logotest.png"
// import {
//   getKindeServerSession,
//   RegisterLink,
//   LoginLink,
//   LogoutLink,
// } from "@kinde-oss/kinde-auth-nextjs/server";

// import Link from "next/link";
// import { NAV_LINKS } from "@/constants";

// export default function Navbar() {
//   const [user, setUser] = useState<any>();
//     const [authStatus, setAuthStatus] = useState(null);

//     useEffect(() => {
//         const getKindeSession = async () => {
//             const res = await fetch("/api/kindeSession");
//             const data = await res.json();
//             // console.log(data);
//             setUser(data.user);
//             setAuthStatus(data.authenticated);
//         };

//         getKindeSession();
//     }, []);


//   return (
//     <header
//       role="banner"
//       className=" w-full flexBetween max-container padding-container relative z-30 py-5"
//     >
//       <div className="container px-4 mx-auto flex items-center justify-between">
//         <div>
//           <Link href="/">
//             <Image
//               src={logo}
//               width={500}
//               height={500}
//               alt="blog post image"
//               className="w-auto max-h-[60px] object-cover group-hover:scale-105 duration-300 rounded-tl-md rounded-bl-md"
//             />
//           </Link>
//         </div>
//         <div className="flex">
//           <ul role="list" className="hidden md:flex py-4 space-x-8 ">
//             {NAV_LINKS.map((link, idx) => (
//               <li key={link.label}>
//                 <Link
//                   href={link.href}
//                   className={`relative before:content[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-yellow-400 before:origin-[100%, 50%] before:transition-all before:duration-300 before:ease-in-out before:scale-x-0 before:scale-y[] before:scale-z-[1] before:will-change-transform hover:before:origin-[100%, 0%] hover:before:scale-x-[1] hover:before:scale-y-[1] hover:before:scale-z-[1] text-[12px] tracking-[2px] uppercase font-semibold pb-2`}
//                 >
//                   {link.label}
//                 </Link>
//               </li>
//             ))}
//             <div className="flex gap-12 items-center">
//               {!isAuthenticated() ? (
//                 <>
//                   <LoginLink className="bg-red-800 text-white px-4 py-2 rounded">
//                     Sign in
//                   </LoginLink>
//                 </>
//               ) : (
//                 <div className="flex gap-4 font-normal">
//                   {user?.picture ? (
//                     <Image
//                       className="rounded-full"
//                       src={user?.picture}
//                       width={55}
//                       height={55}
//                       alt="user profile avatar"
//                     />
//                   ) : (
//                     <div className="bg-black text-white rounded-full p-4">
//                       {user?.given_name?.[0]}
//                       {user?.family_name?.[0]}
//                     </div>
//                   )}
//                   <div>
//                     <p className="text-2xl">
//                       {user?.given_name} {user?.family_name}
//                     </p>

//                     <LogoutLink className="text-black">Log out</LogoutLink>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </ul>
//           <div>
//           <FiMenu className="md:hidden text-md" />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }



