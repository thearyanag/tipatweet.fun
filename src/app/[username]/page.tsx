export default function Username({ params }: { params: { username: string } }) {
  return <div className="text-white">{params.username}</div>;
}
