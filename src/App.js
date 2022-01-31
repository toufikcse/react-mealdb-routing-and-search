import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Resturant from './components/Resturant/Resturant';
import NotFound from './components/NotFound/NotFound';
import MealDetail from './components/MealDetail/MealDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/resturant" element={<Resturant />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/mealdetail/:mealId" element={<MealDetail />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
