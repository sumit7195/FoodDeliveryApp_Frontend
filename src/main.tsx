import React from 'react'
import ReactDOM from 'react-dom/client'
import "./global.css"
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import { Auth0Provider } from '@auth0/auth0-react'
import Auth0ProviderWithNavigate from './auth/Auth0ProviderWithNavigate'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderWithNavigate>
        <AppRoutes />
      </Auth0ProviderWithNavigate>
     </Router>
  </React.StrictMode>,
)
