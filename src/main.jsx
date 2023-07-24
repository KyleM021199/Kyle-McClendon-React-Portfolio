import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/styles.css'
import './assets/css/reset.css'
import { element } from 'prop-types';

const router = createBrowserRouter([
    // Todo: Define the accessible routes, and which components respond to which URL
    {
      path: '/',
      element: <App/>,
      errorElement: <errorPage/>,
      children: [
        {
        index: true,
        element: <homePage/>,
        },
        {
          path: '/works-page',
          element: <worksPage/>,
        },
        {
          path: '/about-Page',
          element: <aboutMePage/>,
        },
        {
            path:'/contact-page',
            element: <ContactPage/>,
        },

      ],
  
    },
  ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)