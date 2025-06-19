import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://monitor-backend-nxug.vercel.app/shipments')
      .then(res => res.json())
      .then(data => {
        setShipments(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar los envíos:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Pedidos FLEX</h1>
      {loading ? (
        <p>Cargando pedidos...</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Teléfono</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {shipments.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.phone}</td>
                <td><button>Marcar como entregado</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Dashboard;
