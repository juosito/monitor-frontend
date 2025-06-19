import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchShipments = async () => {
    try {
      const response = await fetch('https://monitor-backend-nxug.vercel.app/shipments');
      const data = await response.json();
      setShipments(data);
    } catch (error) {
      console.error('Error al obtener los envíos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkDelivered = (id) => {
    // Aquí deberías hacer un fetch PUT/POST al backend
    alert(`Pedido ${id} marcado como entregado`);
  };

  useEffect(() => {
    fetchShipments();
  }, []);

  if (loading) return <p>Cargando pedidos...</p>;

  return (
    <div>
      <h1>Pedidos FLEX</h1>
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
          {shipments.map((s, index) => (
            <tr key={index}>
              <td>{s.id || '-'}</td>
              <td>{s.name || '-'}</td>
              <td>{s.phone || '-'}</td>
              <td>
                <button onClick={() => handleMarkDelivered(s.id)}>
                  Marcar como entregado
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
