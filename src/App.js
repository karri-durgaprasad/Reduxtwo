import react from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Provider as Reduxprovider } from "react-redux";
import store from './REDUXSETUP/Store';
import Display from "./REDUXSETUP/Display";
import Show from "./REDUXSETUP/Show";
import Pizzareducer from './REDUXSETUP/Pizzareducer';
import About from "./REDUXSETUP/About";
function App(){
      return(
          <>
          <BrowserRouter>
          <Reduxprovider store={store}>
            <Routes>
                <Route path="/" element={<Display/>}/>
                <Route path="show" element={<Show/>}/>
                <Route path="about" element={<About />} />
            </Routes>
          </Reduxprovider>
          </BrowserRouter>
          </>
      )
}
export default App;