import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthProvider } from './contexts/AuthContext.tsx'
import { CartProvider } from './contexts/CartContext.tsx'
import { EnvWarning } from './components/global/EnvWarning.tsx'

const isSupabaseConfigured =
  import.meta.env.VITE_SUPABASE_URL &&
  import.meta.env.VITE_SUPABASE_ANON_KEY &&
  import.meta.env.VITE_SUPABASE_URL !== 'YOUR_SUPABASE_URL' &&
  import.meta.env.VITE_SUPABASE_ANON_KEY !== 'YOUR_SUPABASE_ANON_KEY'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {isSupabaseConfigured ? (
      <AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthProvider>
    ) : (
      <div className="flex h-screen items-center justify-center bg-background p-4">
        <EnvWarning />
      </div>
    )}
  </React.StrictMode>,
)
