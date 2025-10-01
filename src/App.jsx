import React from 'react';
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';
import Footer from './components/Footer';
import { ConfigProvider } from 'antd';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Payment from './pages/Payment';
import Header from './components/Header';
import Checkout from './pages/CheckoutPage';

export default function App() {
  function PageLayout() {
    return (
      <>
        <Header />
        <div className="min-h-[80vh]">
          <Outlet />
        </div>
        <Footer />
      </>
    );
  }

  function ProtectedPageLayout() {
    const site = useSelector(state => state.site);
    if (!site?.isLoggedIn) {
      return <Navigate to="/login" replace />;
    }
    return (
      <div className="min-h-[80vh]">
        <Outlet />
      </div>
    );
  }

  const PageRoutes = createBrowserRouter([
    {
      path: '/',
      element: <PageLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/shop', element: <Shop /> },
        { path: '/cart', element: <Cart /> },
        { path: '/login', element: <Login /> },
        { path: '/contact', element: <Contact /> },
        { path: '/checkout', element: <Checkout /> },
      ],
    },
    {
      path: '/payment',
      element: <ProtectedPageLayout />,
      children: [
        { path: '/payment', element: <Payment /> },
      ],
    },
  ]);

  return (
    <>
      <Toaster />
      <ConfigProvider>
        <RouterProvider router={PageRoutes} />
      </ConfigProvider>
    </>
  );
}
