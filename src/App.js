import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import FloorOne from './pages/Floors/FloorOne/FloorOne';
import FlatOne from './pages/Flats/FlatOne/FlatOne';
import FlatTwo from './pages/Flats/FlatTwo/FlatTwo';
import FloorTwo from './pages/Floors/FloorTwo/FloorTwo';
import FloorThree from './pages/Floors/FloorThree/FloorThree';
import FloorFour from './pages/Floors/FloorFour/FloorFour';
import FloorFive from './pages/Floors/FloorFive/FloorFive';
import FloorSix from './pages/Floors/FloorSix/FloorSix';
import FloorSeven from './pages/Floors/FloorSeven/FloorSeven';
import FloorEight from './pages/Floors/FloorEight/FloorEight';
import FloorNine from './pages/Floors/FloorNine/FloorNine';

function App() {
  return (
    <div className="App">
       <Routes>
          <Route index element={<Home/>} />

          <Route path="/floor-one" element={<FloorOne/>} >
            <Route index element={<FloorOne/>} />
            <Route path="/floor-one/flat-one" element={<FlatOne/>} />
            <Route path="/floor-one/flat-two" element={<FlatTwo/>} />
            <Route path="/floor-one/flat-three" element={<FlatOne/>} />
            <Route path="/floor-one/flat-four" element={<FlatOne/>} />
            <Route path="/floor-one/flat-five" element={<FlatOne/>} />
            <Route path="/floor-one/flat-six" element={<FlatOne/>} />
            <Route path="/floor-one/flat-seven" element={<FlatOne/>} />
            <Route path="/floor-one/flat-eight" element={<FlatOne/>} />
            <Route path="/floor-one/flat-nine" element={<FlatOne/>} />
            <Route path="/floor-one/flat-ten" element={<FlatOne/>} />
            <Route path="/floor-one/flat-eleven" element={<FlatOne/>} />
            <Route path="/floor-one/flat-twelve" element={<FlatOne/>} />
          </Route>

          <Route path="/floor-two" element={<FloorTwo/>} >
            <Route index element={<FloorTwo/>} />
            <Route path="/floor-two/flat-one" element={<FlatOne/>} />
            <Route path="/floor-two/flat-two" element={<FlatTwo/>} />
            <Route path="/floor-two/flat-three" element={<FlatOne/>} />
            <Route path="/floor-two/flat-four" element={<FlatOne/>} />
            <Route path="/floor-two/flat-five" element={<FlatOne/>} />
            <Route path="/floor-two/flat-six" element={<FlatOne/>} />
            <Route path="/floor-two/flat-seven" element={<FlatOne/>} />
            <Route path="/floor-two/flat-eight" element={<FlatOne/>} />
            <Route path="/floor-two/flat-nine" element={<FlatOne/>} />
            <Route path="/floor-two/flat-ten" element={<FlatOne/>} />
            <Route path="/floor-two/flat-eleven" element={<FlatOne/>} />
            <Route path="/floor-two/flat-twelve" element={<FlatOne/>} />
          </Route>

          <Route path="/floor-three" element={<FloorThree/>} >
            <Route index element={<FloorThree/>} />
            <Route path="/floor-three/flat-one" element={<FlatOne/>} />
            <Route path="/floor-three/flat-two" element={<FlatTwo/>} />
            <Route path="/floor-three/flat-three" element={<FlatOne/>} />
            <Route path="/floor-three/flat-four" element={<FlatOne/>} />
            <Route path="/floor-three/flat-five" element={<FlatOne/>} />
            <Route path="/floor-three/flat-six" element={<FlatOne/>} />
            <Route path="/floor-three/flat-seven" element={<FlatOne/>} />
            <Route path="/floor-three/flat-eight" element={<FlatOne/>} />
            <Route path="/floor-three/flat-nine" element={<FlatOne/>} />
            <Route path="/floor-three/flat-ten" element={<FlatOne/>} />
            <Route path="/floor-three/flat-eleven" element={<FlatOne/>} />
            <Route path="/floor-three/flat-twelve" element={<FlatOne/>} />
          </Route>

          <Route path="/floor-four" element={<FloorFour/>} >
            <Route index element={<FloorFour/>} />
            <Route path="/floor-four/flat-one" element={<FlatOne/>} />
            <Route path="/floor-four/flat-two" element={<FlatTwo/>} />
            <Route path="/floor-four/flat-three" element={<FlatOne/>} />
            <Route path="/floor-four/flat-four" element={<FlatOne/>} />
            <Route path="/floor-four/flat-five" element={<FlatOne/>} />
            <Route path="/floor-four/flat-six" element={<FlatOne/>} />
            <Route path="/floor-four/flat-seven" element={<FlatOne/>} />
            <Route path="/floor-four/flat-eight" element={<FlatOne/>} />
            <Route path="/floor-four/flat-nine" element={<FlatOne/>} />
            <Route path="/floor-four/flat-ten" element={<FlatOne/>} />
            <Route path="/floor-four/flat-eleven" element={<FlatOne/>} />
            <Route path="/floor-four/flat-twelve" element={<FlatOne/>} />
          </Route>

          <Route path="/floor-five" element={<FloorFive/>} >
            <Route index element={<FloorFive/>} />
            <Route path="/floor-five/flat-one" element={<FlatOne/>} />
            <Route path="/floor-five/flat-two" element={<FlatTwo/>} />
            <Route path="/floor-five/flat-three" element={<FlatOne/>} />
            <Route path="/floor-five/flat-four" element={<FlatOne/>} />
            <Route path="/floor-five/flat-five" element={<FlatOne/>} />
            <Route path="/floor-five/flat-six" element={<FlatOne/>} />
            <Route path="/floor-five/flat-seven" element={<FlatOne/>} />
            <Route path="/floor-five/flat-eight" element={<FlatOne/>} />
            <Route path="/floor-five/flat-nine" element={<FlatOne/>} />
            <Route path="/floor-five/flat-ten" element={<FlatOne/>} />
            <Route path="/floor-five/flat-eleven" element={<FlatOne/>} />
            <Route path="/floor-five/flat-twelve" element={<FlatOne/>} />
          </Route>

          <Route path="/floor-six" element={<FloorSix/>} >
            <Route index element={<FloorSix/>} />
            <Route path="/floor-six/flat-one" element={<FlatOne/>} />
            <Route path="/floor-six/flat-two" element={<FlatTwo/>} />
            <Route path="/floor-six/flat-three" element={<FlatOne/>} />
            <Route path="/floor-six/flat-four" element={<FlatOne/>} />
            <Route path="/floor-six/flat-five" element={<FlatOne/>} />
            <Route path="/floor-six/flat-six" element={<FlatOne/>} />
            <Route path="/floor-six/flat-seven" element={<FlatOne/>} />
            <Route path="/floor-six/flat-eight" element={<FlatOne/>} />
            <Route path="/floor-six/flat-nine" element={<FlatOne/>} />
            <Route path="/floor-six/flat-ten" element={<FlatOne/>} />
            <Route path="/floor-six/flat-eleven" element={<FlatOne/>} />
            <Route path="/floor-six/flat-twelve" element={<FlatOne/>} />
          </Route>

          <Route path="/floor-seven" element={<FloorSeven/>} >
            <Route index element={<FloorSeven/>} />
            <Route path="/floor-seven/flat-one" element={<FlatOne/>} />
            <Route path="/floor-seven/flat-two" element={<FlatTwo/>} />
            <Route path="/floor-seven/flat-three" element={<FlatOne/>} />
            <Route path="/floor-seven/flat-four" element={<FlatOne/>} />
            <Route path="/floor-seven/flat-five" element={<FlatOne/>} />
            <Route path="/floor-seven/flat-six" element={<FlatOne/>} />
            <Route path="/floor-seven/flat-seven" element={<FlatOne/>} />
            <Route path="/floor-seven/flat-eight" element={<FlatOne/>} />
            <Route path="/floor-seven/flat-nine" element={<FlatOne/>} />
            <Route path="/floor-seven/flat-ten" element={<FlatOne/>} />
            <Route path="/floor-seven/flat-eleven" element={<FlatOne/>} />
            <Route path="/floor-seven/flat-twelve" element={<FlatOne/>} />
          </Route>
          
          <Route path="/floor-eight" element={<FloorEight/>} >
            <Route index element={<FloorEight/>} />
            <Route path="/floor-eight/flat-one" element={<FlatOne/>} />
            <Route path="/floor-eight/flat-two" element={<FlatTwo/>} />
            <Route path="/floor-eight/flat-three" element={<FlatOne/>} />
            <Route path="/floor-eight/flat-four" element={<FlatOne/>} />
            <Route path="/floor-eight/flat-five" element={<FlatOne/>} />
            <Route path="/floor-eight/flat-six" element={<FlatOne/>} />
            <Route path="/floor-eight/flat-seven" element={<FlatOne/>} />
            <Route path="/floor-eight/flat-eight" element={<FlatOne/>} />
            <Route path="/floor-eight/flat-nine" element={<FlatOne/>} />
            <Route path="/floor-eight/flat-ten" element={<FlatOne/>} />
            <Route path="/floor-eight/flat-eleven" element={<FlatOne/>} />
            <Route path="/floor-eight/flat-twelve" element={<FlatOne/>} />
          </Route>

          <Route path="/floor-nine" element={<FloorNine/>} >
            <Route index element={<FloorNine/>} />
            <Route path="/floor-nine/flat-one" element={<FlatOne/>} />
            <Route path="/floor-nine/flat-two" element={<FlatTwo/>} />
            <Route path="/floor-nine/flat-three" element={<FlatOne/>} />
            <Route path="/floor-nine/flat-four" element={<FlatOne/>} />
            <Route path="/floor-nine/flat-five" element={<FlatOne/>} />
            <Route path="/floor-nine/flat-six" element={<FlatOne/>} />
            <Route path="/floor-nine/flat-seven" element={<FlatOne/>} />
            <Route path="/floor-nine/flat-eight" element={<FlatOne/>} />
            <Route path="/floor-nine/flat-nine" element={<FlatOne/>} />
            <Route path="/floor-nine/flat-ten" element={<FlatOne/>} />
            <Route path="/floor-nine/flat-eleven" element={<FlatOne/>} />
            <Route path="/floor-nine/flat-twelve" element={<FlatOne/>} />
          </Route>

        </Routes>
    </div>
  );
}

export default App;
