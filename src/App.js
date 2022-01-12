import * as React from "react"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// import { publicRoutes } from "./routes/publicRoutes";
import Home from "./routes/home"
import GifInformation from "./routes/gifInformation";
import './App.css';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}>
            <Route path='gif-information' element={<GifInformation/>}/>
          </Route>

          {/* {publicRoutes.map((publicRoute,i) => {
            return <Route exact={publicRoute.exact} key={i} path={publicRoute.link} element={<publicRoute.component/>} />
          })} */}
          
        </Routes>
      </BrowserRouter>
  );
}
export default App;
