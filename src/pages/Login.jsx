import React, { useEffect } from 'react'

export default function Login() {
  useEffect(() => {
    window.location.href =
      'https://auth.mercadolibre.com.uy/authorization?response_type=code&client_id=8230362313334703&redirect_uri=https://monitor-frontend-liard.vercel.app/auth'
  }, [])

  return <h2>Redireccionando a Mercado Libre...</h2>
}
