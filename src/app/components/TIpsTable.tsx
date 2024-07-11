"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Tip {
  amount: number;
  url: string;
}

interface TipsTableProps {
  tips: Tip[];
}

export default function TipsTable() {
  const [tips, setTips] = useState<Tip[]>([]);

  useEffect(() => {
    // let tips_data = await fetch(
    //   `${process.env.NEXT_PUBLIC_API_URL}/api/user`
    // ).then((res) => res.json());

    const fetchTips = async () => {
      let tips_data = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user`
      ).then((res) => res.json());
      setTips(tips_data);
    };

    fetchTips();
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-900 to-black p-8 rounded-xl text-white shadow-lg border border-gray-700">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Tips</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-4 text-left text-xl font-semibold">Amount</th>
              <th className="p-4 text-left text-xl font-semibold">Link</th>
            </tr>
          </thead>
          <tbody>
            {tips.map((tip, index) => (
              <tr
                key={index}
                className="border-b border-gray-800 hover:bg-gray-800 transition-colors duration-200"
              >
                <td className="p-4 text-lg">{tip.amount}</td>
                <td className="p-4 truncate text-lg">
                  <Link
                    href={tip.url}
                    target="_blank"
                    className="text-sky-400 hover:text-sky-300 transition-colors duration-200"
                  >
                    {tip.url}{" "}
                    <span className="inline-block transform hover:translate-x-1 hover:-translate-y-1 transition-transform duration-200">
                      ↗
                    </span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
