import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Error from './components/pages/errorPage';
import Home from './components/pages/homePage';
import Contact from './components/pages/ContactPage';
import About from './components/pages/aboutMePage';
import Work from './components/pages/worksPage';
import './assets/css/style.css'
import './assets/css/reset.css'




const router = createBrowserRouter([
    {
      path: '/',
      element: <App/>,
      errorElement: <Error/>,
      children: [
        {
        index: true,
        element: <Home/>,
        },
        {
          path: '/works-page',
          element: <Work/>,
        },
        {
          path: '/about-page',
          element: <About/>,
        },
        {
            path:'/contact-page',
            element: <Contact/>,
        },

      ],
  
    },
  ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)