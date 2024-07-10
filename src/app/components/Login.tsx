import React from "react";
import Image from "next/image";

export default function LoginScreen() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="w-full max-w-4xl bg-gray-900 rounded-3xl p-12 shadow-2xl border border-gray-700">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold text-white mb-6 leading-tight">
              Accept tips and manage who tipped you, directly through your
              X account
            </h1>
            <p className="text-gray-400 mb-8">
              Connect your X account to start receiving tips and track
              your supporters easily.
            </p>
            <div className="flex items-center space-x-4">
              <Image
                src="/twitter-logo.png"
                alt="Twitter Logo"
                width={32}
                height={32}
              />
              <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                Login with X (prev Twitter)
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-sky-400 to-purple-500 flex flex-col items-center justify-center p-4">
              <span className="text-6xl mb-4" role="img" aria-label="Tip Jar">
                🏺
              </span>
              <h2 className="text-3xl font-bold text-white text-center">
                tipa<span className="text-yellow-300">tweet</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            By logging in, you agree to our{" "}
            <a className="text-sky-400 hover:underline">
              don&apos;t be a jackass policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
