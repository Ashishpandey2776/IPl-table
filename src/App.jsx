import { Route,Routes } from "react-router-dom";
 import Home from "./component/Home";
import MatchDetail from "./component/MatchDetails";
function App() {
 return(
    <Routes>
         <Route path="/" element={ <Home/>}/>
         <Route path="/matchDetail/:id" element={ <MatchDetail/>}/>
    </Routes>
   
 )
}
export default App
