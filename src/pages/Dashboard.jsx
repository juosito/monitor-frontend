import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(import.meta.env.VITE_API_URL + "/shipments");
      setShipments(res.data);
    };
    fetchData();
  }, []);

  const markDelivered = (id) => {
    alert("Marcado como entregado: " + id);
    // Aquí podrías hacer un POST/PATCH al backend para marcarlo entregado
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>Pedidos FLEX</h1>
      {shipments.length === 0 ? (
        <p>Cargando envíos...</p>
      ) : (
        <table border="1" cellPadding="8">
          <thead>
            <tr><th>ID</th><th>Nombre</th><th>Teléfono</th><th>Acción</th></tr>
          </thead>
          <tbody>
            {shipments.map(s => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.nombre}</td>
                <td>{s.telefono}</td>
                <td><button onClick={() => markDelivered(s.id)}>Entregado</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;