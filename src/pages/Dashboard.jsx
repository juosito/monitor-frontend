import { useEffect, useState } from "react";
import "./Dashboard.css";              // opcional, puro estilo

export default function Dashboard() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_URL + "/shipments")
      .then(r => r.ok ? r.json() : Promise.reject(r.statusText))
      .then(setRows)
      .catch(e => setErr(e.toString()))
      .finally(() => setLoading(false));
  }, []);

  if (loading)  return <p>Cargando pedidos…</p>;
  if (err)      return <p style={{color:"red"}}>Error: {err}</p>;
  if (!rows.length) return <p>No hay envíos FLEX pendientes</p>;

  return (
    <>
      <h1>Pedidos FLEX</h1>
      <table>
        <thead>
          <tr><th>ID</th><th>Nombre</th><th>Teléfono</th><th>Cuenta</th></tr>
        </thead>
        <tbody>
          {rows.map(s => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.receiver?.nickname ?? "—"}</td>
              <td>{s.receiver?.phone?.number ?? "—"}</td>
              <td>{s.account}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
