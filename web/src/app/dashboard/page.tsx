async function Dashboard() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  console.log("API URL:", apiUrl);

  const res = await fetch(
    // `http://api-image:8081/api/home`,
    `${apiUrl}/api/home`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  return (
    <div>
      <h1>server-side</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <div>yoo </div>
    </div>
  );
}

export default Dashboard;
