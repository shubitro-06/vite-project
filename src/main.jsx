import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Contact from './components/pages/Contact.jsx';
import Notices from './components/pages/Notices.jsx';
import About from './components/pages/About.jsx';
import RootLayOut from './RootLayOut.jsx';
import Input from './Input.jsx';
import ContactMe from './components/pages/ContactMe.jsx';
import Banner from './components/Banner.jsx';





const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <App/>,
  // },
  // {
  //   path: "/Contact",
  //   element: < Contact/>,
  // },
  // {
  //   path: "/Notices",
  //   element: < Notices/>,
  // },
  // {
  //   path: "/About",
  //   element: < About/>,
  // },

  {
    path: "/",
    Component: RootLayOut,
    children: [
      { index: true, Component: App },
      { path: "Contact", Component: Contact },
      { path: "Notices", Component: Notices },
      { path: "About", Component: About },
      { path: "Login", Component: Input },
      // { path: "/", Component: App },
      // { path: "contact", Component: Contact },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />,
  </StrictMode>,
)
