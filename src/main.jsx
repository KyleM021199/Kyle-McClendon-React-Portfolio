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



const works = [
  {
    id: 1,
    title: "Tree Finder",
    link: "https://duckturtle.github.io/Full-Throttle--TreeFinder-The-Park-Finder-App/",
    img:"./src/assets/images/StateView.JPG",
    description: "A website where parks are found by state with their infomation. I helped develop the CSS with the CSS structure, Tailwind.",

  }
  // {
  //   id: 2,
  //   title: "Tree Finder",
  //   link: "https://duckturtle.github.io/Full-Throttle--TreeFinder-The-Park-Finder-App/",
  //   img:"../images/StateView.JPG",
  //   description: "A website where parks are found by state with their infomation. I helped develop the CSS with the CSS structure, Tailwind.",

  // },
]
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
          element: <Work works={works} />,
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