"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "./Dropdown";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";

export interface MenuItem {
  title: string;
  route?: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "Products",
    children: [
      {
        title: "Hinkle Horns",
        route: "/products",
      },
      {
        title: "Doozers",
        route: "/view",
      },
      {
        title: "Zizzer-zazzers",
        route: "/zizzer-zazzers",
      },
    ],
  },
];

export default function Header() {
  const [user, setUser] = useState<any>();
  const [loading, setLoading] = useState(false)
  const [authStatus, setAuthStatus] = useState(null);

  useEffect(() => {
    const getKindeSession = async () => {
      setLoading(true)
      const res = await fetch("/api/kindeSession");
      const data = await res.json();
      console.log(data);
      setUser(data.user);
      setAuthStatus(data.authenticated);
      setLoading(false)
    };

    getKindeSession();
  }, []);
  
  if (loading){
    return <div>loading...</div>
  }

  return (
    <header className="flex gap-10 items-center bg-zinc-800 py-4 px-2">
      <Link href="https://designly.biz" target="_blank">
        <Image src="/logo.svg" width={200} height={20} alt="logo" />
      </Link>
      <div className="flex gap-8 items-center text-white">
        {menuItems.map((item, i) => {
          return item.hasOwnProperty("children") ? (
            <Dropdown key={i} item={item} />
          ) : (
            <Link key={i} className="hover:text-blue-500" href={item?.route || ""}>
              {item.title}
            </Link>
          );
        })}
      </div>
      <div className="flex gap-12 items-center">
        {!authStatus ? (
          <>
            <LoginLink className="bg-red-800 text-white px-4 py-2 rounded">
              Sign in
            </LoginLink>
          </>
        ) : (
          <div className="flex gap-4 font-normal">
            {user?.picture ? (
              <Image
                className="rounded-full"
                src={user?.picture}
                width={55}
                height={55}
                alt="user profile avatar"
              />
            ) : (
              <div className="bg-black text-white rounded-full p-4">
                {user?.given_name?.[0]}
                {user?.family_name?.[0]}
              </div>
            )}
            <div>
              <p className="text-2xl">
                {user?.given_name} {user?.family_name}
              </p>

              <LogoutLink className="text-black">Log out</LogoutLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
