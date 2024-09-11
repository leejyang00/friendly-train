async function Dashboard() {
  const res = await fetch(`http://localhost:8080/api/home`, {
    cache: "no-store",
  });

  const data = await res.json();

  return (
    <div>
      <h1>server-side</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <div>yoo  </div>
    </div>
  );
}

export default Dashboard;
