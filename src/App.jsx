import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';

import FloorTwo from './pages/Floors/FloorTwo/FloorTwo';
import FloorThree from './pages/Floors/FloorThree/FloorThree';
import FloorFour from './pages/Floors/FloorFour/FloorFour';
import FloorFive from './pages/Floors/FloorFive/FloorFive';
import FloorSix from './pages/Floors/FloorSix/FloorSix';
import FloorSeven from './pages/Floors/FloorSeven/FloorSeven';
import FloorEight from './pages/Floors/FloorEight/FloorEight';

import FlatOne2 from './pages/Flats/FloorTwo/FlatOne2/FlatOne2';
import FlatTwo2 from './pages/Flats/FloorTwo/FlatTwo2/FlatTwo2';
import FlatThree2 from './pages/Flats/FloorTwo/FlatThree2/FlatThree2';
import FlatFour2 from './pages/Flats/FloorTwo/FlatFour2/FlatFour2';
import FlatFive2 from './pages/Flats/FloorTwo/FlatFive2/FlatFive2';
import FlatSix2 from './pages/Flats/FloorTwo/FlatSix2/FlatSix2';
import FlatSeven2 from './pages/Flats/FloorTwo/FlatSeven2/FlatSeven2';
import FlatEight2 from './pages/Flats/FloorTwo/FlatEight2/FlatEight2';
import FlatNine2 from './pages/Flats/FloorTwo/FlatNine2/FlatNine2';
import FlatTen2 from './pages/Flats/FloorTwo/FlatTen2/FlatTen2';
import FlatEleven2 from './pages/Flats/FloorTwo/FlatEleven2/FlatEleven2';
import FlatTwelve2 from './pages/Flats/FloorTwo/FlatTwelve2/FlatTwelve2';
import FlatThirteen2 from './pages/Flats/FloorTwo/FlatThirteen2/FlatThirteen2';

import FlatOne3 from './pages/Flats/FloorThree/FlatOne3/FlatOne3';
import FlatTwo3 from './pages/Flats/FloorThree/FlatTwo3/FlatTwo3';
import FlatThree3 from './pages/Flats/FloorThree/FlatThree3/FlatThree3';
import FlatFour3 from './pages/Flats/FloorThree/FlatFour3/FlatFour3';
import FlatFive3 from './pages/Flats/FloorThree/FlatFive3/FlatFive3';
import FlatSix3 from './pages/Flats/FloorThree/FlatSix3/FlatSix3';
import FlatSeven3 from './pages/Flats/FloorThree/FlatSeven3/FlatSeven3';
import FlatEight3 from './pages/Flats/FloorThree/FlatEight3/FlatEight3';
import FlatNine3 from './pages/Flats/FloorThree/FlatNine3/FlatNine3';
import FlatTen3 from './pages/Flats/FloorThree/FlatTen3/FlatTen3';
import FlatEleven3 from './pages/Flats/FloorThree/FlatEleven3/FlatEleven3';
import FlatTwelve3 from './pages/Flats/FloorThree/FlatTwelve3/FlatTwelve3';
import FlatThirteen3 from './pages/Flats/FloorThree/FlatThirteen3/FlatThirteen3';

import FlatOne4 from './pages/Flats/FloorFour/FlatOne4/FlatOne4';
import FlatTwo4 from './pages/Flats/FloorFour/FlatTwo4/FlatTwo4';
import FlatThree4 from './pages/Flats/FloorFour/FlatThree4/FlatThree4';
import FlatFour4 from './pages/Flats/FloorFour/FlatFour4/FlatFour4';
import FlatFive4 from './pages/Flats/FloorFour/FlatFive4/FlatFive4';
import FlatSix4 from './pages/Flats/FloorFour/FlatSix4/FlatSix4';
import FlatSeven4 from './pages/Flats/FloorFour/FlatSeven4/FlatSeven4';
import FlatEight4 from './pages/Flats/FloorFour/FlatEight4/FlatEight4';
import FlatNine4 from './pages/Flats/FloorFour/FlatNine4/FlatNine4';
import FlatTen4 from './pages/Flats/FloorFour/FlatTen4/FlatTen4';
import FlatEleven4 from './pages/Flats/FloorFour/FlatEleven4/FlatEleven4';
import FlatTwelve4 from './pages/Flats/FloorFour/FlatTwelve4/FlatTwelve4';
import FlatThirteen4 from './pages/Flats/FloorFour/FlatThirteen4/FlatThirteen4';


function App() {
  return (
    <div className="App">
       <Routes>
          <Route index element={<Home/>} />
            <Route path="/floor-two" element={<FloorTwo/>} />
              <Route path="/floor-two/flat-one" exact element={<FlatOne2/>} />
              <Route path="/floor-two/flat-two" element={<FlatTwo2/>} />
              <Route path="/floor-two/flat-three" element={<FlatThree2/>} />
              <Route path="/floor-two/flat-four" element={<FlatFour2/>} />
              <Route path="/floor-two/flat-five" element={<FlatFive2/>} />
              <Route path="/floor-two/flat-six" element={<FlatSix2/>} />
              <Route path="/floor-two/flat-seven" element={<FlatSeven2/>} />
              <Route path="/floor-two/flat-eight" element={<FlatEight2/>} />
              <Route path="/floor-two/flat-nine" element={<FlatNine2/>} />
              <Route path="/floor-two/flat-ten" element={<FlatTen2/>} />
              <Route path="/floor-two/flat-eleven" element={<FlatEleven2/>} />
              <Route path="/floor-two/flat-twelve" element={<FlatTwelve2/>} />
              <Route path="/floor-two/flat-thirteen" element={<FlatThirteen2/>} />

            <Route path="/floor-three" element={<FloorThree/>} />
              <Route path="/floor-three/flat-one" exact element={<FlatOne3/>} />
              <Route path="/floor-three/flat-two" element={<FlatTwo3/>} />
              <Route path="/floor-three/flat-three" element={<FlatThree3/>} />
              <Route path="/floor-three/flat-four" element={<FlatFour3/>} />
              <Route path="/floor-three/flat-five" element={<FlatFive3/>} />
              <Route path="/floor-three/flat-six" element={<FlatSix3/>} />
              <Route path="/floor-three/flat-seven" element={<FlatSeven3/>} />
              <Route path="/floor-three/flat-eight" element={<FlatEight3/>} />
              <Route path="/floor-three/flat-nine" element={<FlatNine3/>} />
              <Route path="/floor-three/flat-ten" element={<FlatTen3/>} />
              <Route path="/floor-three/flat-eleven" element={<FlatEleven3/>} />
              <Route path="/floor-three/flat-twelve" element={<FlatTwelve3/>} />
              <Route path="/floor-three/flat-thirteen" element={<FlatThirteen3/>} />


            <Route path="/floor-four" element={<FloorFour/>} />
              <Route path="/floor-four/flat-one" exact element={<FlatOne4/>} />
              <Route path="/floor-four/flat-two" element={<FlatTwo4/>} />
              <Route path="/floor-four/flat-three" element={<FlatThree4/>} />
              <Route path="/floor-four/flat-four" element={<FlatFour4/>} />
              <Route path="/floor-four/flat-five" element={<FlatFive4/>} />
              <Route path="/floor-four/flat-six" element={<FlatSix4/>} />
              <Route path="/floor-four/flat-seven" element={<FlatSeven4/>} />
              <Route path="/floor-four/flat-eight" element={<FlatEight4/>} />
              <Route path="/floor-four/flat-nine" element={<FlatNine4/>} />
              <Route path="/floor-four/flat-ten" element={<FlatTen4/>} />
              <Route path="/floor-four/flat-eleven" element={<FlatEleven4/>} />
              <Route path="/floor-four/flat-twelve" element={<FlatTwelve4/>} />
              <Route path="/floor-four/flat-thirteen" element={<FlatThirteen4/>} />


            <Route path="/floor-five" element={<FloorFive/>} />
              {/* <Route path="/floor-five/flat-one" exact element={<FlatOne/>} />
              <Route path="/floor-five/flat-two" element={<FlatTwo/>} />
              <Route path="/floor-five/flat-three" element={<FlatThree/>} />
              <Route path="/floor-five/flat-four" element={<FlatFour/>} />
              <Route path="/floor-five/flat-five" element={<FlatFive/>} />
              <Route path="/floor-five/flat-six" element={<FlatSix/>} />
              <Route path="/floor-five/flat-seven" element={<FlatSeven/>} />
              <Route path="/floor-five/flat-eight" element={<FlatEight/>} />
              <Route path="/floor-five/flat-nine" element={<FlatNine/>} />
              <Route path="/floor-five/flat-ten" element={<FlatTen/>} />
              <Route path="/floor-five/flat-eleven" element={<FlatEleven/>} />
              <Route path="/floor-five/flat-twelve" element={<FlatTwelve/>} />
              <Route path="/floor-five/flat-thirteen" element={<FlatThirteen/>} /> */}

            <Route path="/floor-six" element={<FloorSix/>} />
              {/* <Route path="/floor-six/flat-one" exact element={<FlatOne/>} />
              <Route path="/floor-six/flat-two" element={<FlatTwo/>} />
              <Route path="/floor-six/flat-three" element={<FlatThree/>} />
              <Route path="/floor-six/flat-four" element={<FlatFour/>} />
              <Route path="/floor-six/flat-five" element={<FlatFive/>} />
              <Route path="/floor-six/flat-six" element={<FlatSix/>} />
              <Route path="/floor-six/flat-seven" element={<FlatSeven/>} />
              <Route path="/floor-six/flat-eight" element={<FlatEight/>} />
              <Route path="/floor-six/flat-nine" element={<FlatNine/>} />
              <Route path="/floor-six/flat-ten" element={<FlatTen/>} />
              <Route path="/floor-six/flat-eleven" element={<FlatEleven/>} />
              <Route path="/floor-six/flat-twelve" element={<FlatTwelve/>} />
              <Route path="/floor-six/flat-thirteen" element={<FlatThirteen/>} /> */}


            <Route path="/floor-seven" element={<FloorSeven/>} />
              {/* <Route path="/floor-seven/flat-one" exact element={<FlatOne/>} />
              <Route path="/floor-seven/flat-two" element={<FlatTwo/>} />
              <Route path="/floor-seven/flat-three" element={<FlatThree/>} />
              <Route path="/floor-seven/flat-four" element={<FlatFour/>} />
              <Route path="/floor-seven/flat-five" element={<FlatFive/>} />
              <Route path="/floor-seven/flat-six" element={<FlatSix/>} />
              <Route path="/floor-seven/flat-seven" element={<FlatSeven/>} />
              <Route path="/floor-seven/flat-eight" element={<FlatEight/>} />
              <Route path="/floor-seven/flat-nine" element={<FlatNine/>} />
              <Route path="/floor-seven/flat-ten" element={<FlatTen/>} />
              <Route path="/floor-seven/flat-eleven" element={<FlatEleven/>} />
              <Route path="/floor-seven/flat-twelve" element={<FlatTwelve/>} />
              <Route path="/floor-seven/flat-thirteen" element={<FlatThirteen/>} /> */}

            <Route path="/floor-eight" element={<FloorEight/>} />
              {/* <Route path="/floor-eight/flat-one" exact element={<FlatOne/>} />
              <Route path="/floor-eight/flat-two" element={<FlatTwo/>} />
              <Route path="/floor-eight/flat-three" element={<FlatThree/>} />
              <Route path="/floor-eight/flat-four" element={<FlatFour/>} />
              <Route path="/floor-eight/flat-five" element={<FlatFive/>} />
              <Route path="/floor-eight/flat-six" element={<FlatSix/>} />
              <Route path="/floor-eight/flat-seven" element={<FlatSeven/>} />
              <Route path="/floor-eight/flat-eight" element={<FlatEight/>} />
              <Route path="/floor-eight/flat-nine" element={<FlatNine/>} />
              <Route path="/floor-eight/flat-ten" element={<FlatTen/>} />
              <Route path="/floor-eight/flat-eleven" element={<FlatEleven/>} />
              <Route path="/floor-eight/flat-twelve" element={<FlatTwelve/>} />
              <Route path="/floor-eight/flat-thirteen" element={<FlatThirteen/>} /> */}
          
            
        </Routes>
    </div>
  );
}

export default App;
