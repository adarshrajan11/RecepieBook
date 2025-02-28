import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ApiRender from './component/Apirender';
import Navbar from './component/Navbar';
import MealDetails from './component/MealDetails';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Navbar remains visible on all pages */}
      <Routes>
        <Route path="/" element={<ApiRender />} />
        <Route path="/meal/:id" element={<MealDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
