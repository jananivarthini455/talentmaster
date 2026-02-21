import { Routes, Route } from "react-router-dom";
import Home from "./Home";   // or whatever your homepage file is
import Tiers from "./Tier";  // make sure filename matches
import EnterNow from "./Enternow";
import GoldMedal from "./GoldeMedal";
import Silvermedal from "./SilverMedal";
import Bronzemedal from "./BronzeMedal";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tiers" element={<Tiers />}
     

       />
       <Route path="/enter-now" element={<EnterNow />} />
         <Route path="/gold-medal" element={<GoldMedal />} />
          <Route path="/silver-medal" element={<Silvermedal />} />
            <Route path="/bronze-medal" element={<Bronzemedal />} />
    </Routes>
  );
}

export default App;
