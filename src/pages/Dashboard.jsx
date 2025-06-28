import React, { useEffect, useState } from 'react'

export default function Dashboard() {
  const [html, setHtml] = useState('Cargando pedidos...')

  useEffect(() => {
    fetch('https://monitor-backend-xxx.vercel.app/shipments')
      .then(res => res.text())
      .then(data => setHtml(data))
      .catch(() => setHtml('Error cargando los pedidos.'))
  }, [])

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
