import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import FloorOne from './pages/Floors/FloorOne/FloorOne';
import FloorTwo from './pages/Floors/FloorTwo/FloorTwo';
import FloorThree from './pages/Floors/FloorThree/FloorThree';
import FloorFour from './pages/Floors/FloorFour/FloorFour';
import FloorFive from './pages/Floors/FloorFive/FloorFive';
import FloorSix from './pages/Floors/FloorSix/FloorSix';
import FloorSeven from './pages/Floors/FloorSeven/FloorSeven';
import FloorEight from './pages/Floors/FloorEight/FloorEight';
import FloorNine from './pages/Floors/FloorNine/FloorNine';

import FlatOne from './pages/Flats/FlatOne/FlatOne';
import FlatTwo from './pages/Flats/FlatTwo/FlatTwo';
import FlatThree from './pages/Flats/FlatThree/FlatThree';
import FlatFour from './pages/Flats/FlatFour/FlatFour';
import FlatFive from './pages/Flats/FlatFive/FlatFive';
import FlatSix from './pages/Flats/FlatSix/FlatSix';
import FlatSeven from './pages/Flats/FlatSeven/FlatSeven';
import FlatEight from './pages/Flats/FlatEight/FlatEight';
import FlatNine from './pages/Flats/FlatNine/FlatNine';
import FlatTen from './pages/Flats/FlatTen/FlatTen';
import FlatEleven from './pages/Flats/FlatEleven/FlatEleven';
import FlatTwelve from './pages/Flats/FlatTwelve/FlatTwelve';


function App() {
  return (
    <div className="App">
       <Routes>
          <Route index element={<Home/>} />
            <Route path="/floor-one" element={<FloorOne/>}/>
            <Route path="/floor-two" element={<FloorTwo/>} />
            <Route path="/floor-three" element={<FloorThree/>} />
            <Route path="/floor-four" element={<FloorFour/>} />
            <Route path="/floor-five" element={<FloorFive/>} />
            <Route path="/floor-six" element={<FloorSix/>} />
            <Route path="/floor-seven" element={<FloorSeven/>} />
            <Route path="/floor-eight" element={<FloorEight/>} />
            <Route path="/floor-nine" element={<FloorNine/>}/>
          
            <Route path="/flat-one" exact element={<FlatOne/>} />
            <Route path="/flat-two" element={<FlatTwo/>} />
            <Route path="/flat-three" element={<FlatThree/>} />
            <Route path="/flat-four" element={<FlatFour/>} />
            <Route path="/flat-five" element={<FlatFive/>} />
            <Route path="/flat-six" element={<FlatSix/>} />
            <Route path="/flat-seven" element={<FlatSeven/>} />
            <Route path="/flat-eight" element={<FlatEight/>} />
            <Route path="/flat-nine" element={<FlatNine/>} />
            <Route path="/flat-ten" element={<FlatTen/>} />
            <Route path="/flat-eleven" element={<FlatEleven/>} />
            <Route path="/flat-twelve" element={<FlatTwelve/>} />
        </Routes>
    </div>
  );
}

export default App;
