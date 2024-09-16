import Link from "next/link";

async function Dashboard() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home`, {
    cache: "no-store",
  });

  const data = await res.json();

  return (
    <div className="flex flex-col items-center pt-3 min-h-screen">
      <div
        className="
        underline
        text-blue-600
        hover:text-blue-800
        visited:text-purple-600"
      >
        <Link href="/">Home</Link>
      </div>
      <h1 className="text-6xl font-bold">Dashboard - SSR</h1>
      <h1>server-side</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <div>yoo </div>
    </div>
  );
}

export default Dashboard;
