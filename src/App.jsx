import { Outlet } from 'react-router-dom';
import Nav from './components/Navbar';

function App() {
  return (
    
    <>
      <Nav />
        <Outlet/>
    </>
  );
}

export default App;