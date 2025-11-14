import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProfilePage from "./pages/Profile";
import { Toaster } from "@/components/ui/sonner";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";
import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminOrderDetail from "./pages/admin/AdminOrderDetail";
import MainLayout from "./components/MainLayout";
import { EnvWarning } from "./components/global/EnvWarning";

const isSupabaseConfigured =
  import.meta.env.VITE_SUPABASE_URL &&
  import.meta.env.VITE_SUPABASE_ANON_KEY &&
  import.meta.env.VITE_SUPABASE_URL !== 'YOUR_SUPABASE_URL' &&
  import.meta.env.VITE_SUPABASE_ANON_KEY !== 'YOUR_SUPABASE_ANON_KEY'

function App() {
  if (!isSupabaseConfigured) {
    return (
      <div className="flex h-screen items-center justify-center bg-background p-4">
        <EnvWarning />
      </div>
    )
  }

  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Routes with MainLayout (header, footer) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          
          {/* Protected user routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Route>

        {/* Protected admin routes (separate layout) */}
        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="orders/:id" element={<AdminOrderDetail />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
