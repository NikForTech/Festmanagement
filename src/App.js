
import './App.css';
import Home from './Components/Home';

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import BottamNave from './Components/BottamNave';
import participationform from './Components/participationform';
import AdminLogin from './Components/AdminLogin';


function App() {
  


  return (
    <BrowserRouter>
    <BottamNave/>

    <Routes>
     <Route path = '/' Component = {Home} exact/>
    <Route path = '/form' Component={participationform} exact/>
    <Route path = '/admin' Component={AdminLogin} exact/>
    </Routes>
    </BrowserRouter>
 
  
  );
}

export default App;
