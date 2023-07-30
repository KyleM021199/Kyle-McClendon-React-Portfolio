import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Error from './components/pages/errorPage';
import Home from './components/pages/homePage';
import Contact from './components/pages/ContactPage';
import About from './components/pages/aboutMePage';
import Work from './components/pages/worksPage';
import './assets/css/style.css';
import './assets/css/reset.css';
import treeFinderImg from './assets/images/StateView.jpg';
import RPSImg from './assets/images/Rock-Paper-Showdown.png';


const works = [
  {
    id: 1,
    title: "Tree Finder",
    link: "https://duckturtle.github.io/Full-Throttle--TreeFinder-The-Park-Finder-App/",
    img: treeFinderImg,
    description: "A website where parks are found by state with their infomation. I helped develop the CSS with the CSS structure, Tailwind.",

  },
  {
    id: 2,  
    title: "Rock Paper Showdown",
    link: "https://rock-paper-showdown-ed328492c032.herokuapp.com/",
    img: RPSImg,
    description: "A social Rock Paper Scissors app that uses Socket.io for chat functionality. My work consisted of using Handlebars.js to render the many pages.",

  },
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