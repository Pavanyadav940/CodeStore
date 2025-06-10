import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/custom/Navbar";
// import { ThemeProvider } from "./components/provider/theme-provider";
import Footer from "./components/custom/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
// import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import AdminLogin from "./pages/AdminLogin";
import Error from "./pages/Error";
import Success from "./pages/Success";
// import RootLayout from "./layouts/RootLayout";
// import AdminLayout from "./layouts/AdminLayout";
import CreateProducts from "./components/custom/CreateProducts";
import AllProducts from "./components/custom/AllProducts";
import Analytics from "./components/custom/Analytics";
import Orders from "./components/custom/Orders";
import Settings from "./components/custom/Settings";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import MyOrders from "./pages/MyOrders";
// import { Toaster } from "./components/ui/toaster";
// import ProtectedRoute from "./components/custom/ProtectedRoute";
import { ThemeProvider } from "./components/provider/ThemeProvider";
import RootLayout from "./layout/RootLayout";
import AdminLayout from "./layout/AdminLayout";
import { Toaster } from "./components/ui/sonner";
import ProtectedRoute from "./components/custom/ProtectedRoute";
import Product from "./pages/Product";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <RootLayout children={<Home />} />
        </ProtectedRoute>
      ),
    },
    {
      path: "/signup",
      element: (
        <ProtectedRoute>
          <RootLayout children={<Signup />} />
        </ProtectedRoute>
      ),
    },
    {
      path: "/login",
      element: (
        <ProtectedRoute>
          <RootLayout children={<Login />} />
        </ProtectedRoute>
      ),
    },
    {
      path: "/product/:productName",
      element: <RootLayout children={<Product />} />,
    },
    {
      path: "/checkout",
      element: (
        <ProtectedRoute>
          <RootLayout children={<Checkout />} />
        </ProtectedRoute>
      ),
    },
    {
      path: "/orders",
      element: (
        <ProtectedRoute>
          <RootLayout children={<MyOrders />} />{" "}
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/login",
      element: (
        <ProtectedRoute>
          <RootLayout children={<AdminLogin />} />
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/dashboard",
      element: (
        <ProtectedRoute>
          <AdminLayout children={<CreateProducts />} />
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/dashboard/all-products",
      element: (
        <ProtectedRoute>
          <AdminLayout children={<AllProducts />} />
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/dashboard/analytics",
      element: (
        <ProtectedRoute>
          <AdminLayout children={<Analytics />} />
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/dashboard/orders",
      element: (
        <ProtectedRoute>
          <AdminLayout children={<Orders />} />
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/dashboard/settings",
      element: (
        <ProtectedRoute>
          <AdminLayout children={<Settings />} />
        </ProtectedRoute>
      ),
    },
    {
      path: "/*",
      element: <Error />,
    },
    {
      path: "/success",
      element: <Success />,
    },
  ]);

  return (
    <>
      <ThemeProvider>
        <Provider store={store}>
          <Toaster />
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>
    </>
  );
}
