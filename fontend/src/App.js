import './App.css';
import { Routes, Route } from 'react-router-dom'
import OutletPage from './pages/Outlet';
import HomePage from './pages/HomePage';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<OutletPage/>}>
          <Route index element={<HomePage/>}/>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
