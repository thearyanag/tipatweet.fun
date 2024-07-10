interface TotalTipsProps {
  amountInSOL: number;
  amountInUSDC: number;
}

export default function TotalTips({
  amountInSOL,
  amountInUSDC,
}: TotalTipsProps) {
  return (
    <div className="bg-sky-400 p-4 rounded-lg text-white text-center">
      <h2 className="text-xl font-bold mb-4">Total Tips</h2>
      <table className="w-full border-collapse border border-white">
        <thead>
          <tr>
            <th className="border border-white p-2">in usdc</th>
            <th className="border border-white p-2">in sol</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-white p-2">{amountInUSDC}</td>
            <td className="border border-white p-2">{amountInSOL}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}