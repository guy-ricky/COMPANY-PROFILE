import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Services from "./components/Services";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import AOS from 'aos';
import "aos/dist/aos.css";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
      anchorPlacement: "top-bottom"
    });
    AOS.refresh();
  }, []);
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/portfolio',
          element: <Portfolio/>
        },
        {
          path: '/contact',
          element: <Contact/>
        },
        {
          path: '/services',
          element: <Services/>
        },
        {
          path: '/privacypolicy',
          element: <PrivacyPolicy/>
        }
      ],
    },
  ]);
  return (
  <>
  <RouterProvider router={router} />
  <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
  </>
  )
}

export default App;
