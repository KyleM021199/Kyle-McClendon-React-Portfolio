import { Outlet } from 'react-router-dom';
import Nav from './components/Navbar/NavTabs';
import Footer from './components/Navbar/Footer'


function App() {
  return (
    
    <>
  
      <Nav/>
        <Outlet/>
        <Footer/>
    </>
  );
}

export default App;