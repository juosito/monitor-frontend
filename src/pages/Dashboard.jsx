import { useEffect, useState } from 'react'

function Dashboard() {
  const [shipments, setShipments] = useState([])

  useEffect(() => {
    fetch('https://monitor-backend-nxug.vercel.app/shipments')
      .then(res => res.json())
      .then(data => setShipments(data))
  }, [])

  const handleMark = (id) => {
    fetch(`https://monitor-backend-nxug.vercel.app/mark-delivered/${id}`, {
      method: 'POST'
    }).then(() => {
      setShipments(prev => prev.filter(s => s.id !== id))
    })
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Pedidos FLEX</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th><th>Nombre</th><th>Teléfono</th><th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {shipments.map(s => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.phone}</td>
              <td><button onClick={() => handleMark(s.id)}>Marcar como entregado</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard
