'use client';

import { signIn, signOut, useSession } from "next-auth/react";

export function AuthButton() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p className="text-gray-500">Cargando...</p>;

  if (session) {
    return (
      <div className="w-full flex justify-center mb-6">
        <div className="flex flex-col items-center gap-3 p-6 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl shadow-lg border border-blue-100 max-w-xs">
          <img
            src={session.user?.image ?? ''}
            alt={session.user?.name ?? 'Avatar'}
            className="w-16 h-16 rounded-full border-2 border-blue-400 shadow"
          />
          <div className="text-center">
            <div className="font-bold text-lg text-gray-800">{session.user?.name}</div>
            <div className="text-gray-500 text-sm">{session.user?.email}</div>
          </div>
          <button
            onClick={() => signOut()}
            className="mt-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg font-semibold shadow hover:from-red-600 hover:to-pink-600 transition-all"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center mb-6">
      <button
        onClick={() => signIn("google")}
        className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-500 text-white rounded-xl font-bold shadow-lg hover:scale-105 hover:from-blue-700 hover:to-pink-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_17_40)">
            <path d="M47.5 24.5C47.5 22.6 47.3 21 47 19.4H24V28.6H37.3C36.7 31.5 34.7 34.1 31.7 35.9V41.1H39.3C43.7 37.1 47.5 31.5 47.5 24.5Z" fill="#4285F4"/>
            <path d="M24 48C30.6 48 36.1 45.9 39.3 41.1L31.7 35.9C29.9 37.1 27.5 37.9 24 37.9C17.7 37.9 12.3 33.7 10.5 28.1H2.6V33.5C5.8 40.1 14.1 48 24 48Z" fill="#34A853"/>
            <path d="M10.5 28.1C9.9 26.5 9.5 24.8 9.5 23C9.5 21.2 9.9 19.5 10.5 17.9V12.5H2.6C0.9 15.9 0 19.4 0 23C0 26.6 0.9 30.1 2.6 33.5L10.5 28.1Z" fill="#FBBC05"/>
            <path d="M24 9.1C27.8 9.1 30.5 10.7 32.1 12.2L39.4 5C36.1 1.9 30.6 0 24 0C14.1 0 5.8 7.9 2.6 12.5L10.5 17.9C12.3 12.3 17.7 9.1 24 9.1Z" fill="#EA4335"/>
          </g>
          <defs>
            <clipPath id="clip0_17_40">
              <rect width="48" height="48" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        Iniciar sesión con Google
      </button>
    </div>
  );
} 