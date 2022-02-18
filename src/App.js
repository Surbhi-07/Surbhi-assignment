import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Slider from './Component/Slider';
import List from './Component/List';
import Button from './Component/Button';
import {BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom'
function App() {
  return( 
  <div>
  
    
    
    <Router>
    <Link to='/' className='app1'>Slides</Link>
    <Link to='/List' className='app2'> List</Link>
    <Link to='/Button' className='app2'> Button</Link>
      <Routes>
      <Route path= "/" element ={<Slider />}></Route>
      <Route path= "/List" element ={<List />}></Route>
      <Route path= "/Button" element ={<Button />}></Route>
      </Routes>
    </Router>
 
  </div>
    )
}

export default App;
