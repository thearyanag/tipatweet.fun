"use client";
import { useState } from "react";
import Image from "next/image";

interface ProfileProps {
  image: string;
  name: string;
  username: string;
  bio: string;
  totalTipsUSDC: number;
  totalTipsSOL: number;
}

export default function Profile({
  image,
  name,
  username,
  bio,
  totalTipsUSDC,
  totalTipsSOL,
}: ProfileProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedBio, setEditedBio] = useState(bio);

  const handleEditClick = () => {
    if (isEditing) {
      console.log(editedBio);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 to-black text-white p-8 rounded-xl mb-12 shadow-lg border border-gray-700">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
        <div className="flex flex-col lg:flex-row items-center lg:items-start mb-8 lg:mb-0">
          <Image
            src={image}
            alt={name}
            width={128}
            height={128}
            className="rounded-full mb-4 lg:mb-0 lg:mr-8"
          />
          <div>
            <h2 className="text-3xl font-bold mb-2 text-center lg:text-left">
              {name}
            </h2>
            <p className="text-xl text-sky-400 mb-4 text-center lg:text-left">
              @{username}
            </p>
            <div className="flex items-center mb-4">
              {isEditing ? (
                <input
                  type="text"
                  value={editedBio}
                  onChange={(e) => setEditedBio(e.target.value)}
                  className="bg-gray-800 text-white px-4 py-2 rounded text-lg w-64"
                />
              ) : (
                <p className="text-lg">{bio}</p>
              )}
              <button
                onClick={handleEditClick}
                className="ml-4 text-2xl text-sky-400 hover:text-sky-300 transition-colors duration-200"
              >
                {isEditing ? "💾" : "✏️"}
              </button>
            </div>
            <p className="text-lg mt-4 text-center lg:text-left">
              <a
                href={`https://tipatweet.fun/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 transition-colors duration-200"
              >
                tipatweet.fun/{username} ↗
              </a>
            </p>
          </div>
        </div>
        <div className="text-center lg:text-right">
          <div className="my-4">
            <h3 className="text-2xl font-semibold mb-2">Total Tips 🏺</h3>
            <p className="text-xl">
              <strong>{totalTipsUSDC} USDC </strong>({totalTipsSOL} SOL)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
