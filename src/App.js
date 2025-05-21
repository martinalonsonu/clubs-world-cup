import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { isDesktop } from "react-device-detect";

import { idPredictionParam } from "./Constants";

//styles
import "./css/Custom.css";

//ads
import LateralIzquierdo from "./ads/LateralIzquierdo";
import LateralDerecho from "./ads/LateralDerecho";
import Caja3 from "./ads/Caja3";
import Zocalo from "./ads/Zocalo";

//components
// import Header from "./components/common/Header";
import EmptySpace from "./components/common/EmptySpace";
import Home from "./components/home/Home";
import Prediction from "./components/prediction/Prediction";

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <main className="container-full d-flex justify-content-around cont-principal px-0">
        {isDesktop && <LateralIzquierdo />}
        <section className="container cont-layout">
          <Router>
            <HandleViews />
          </Router>
          <section className="content-msgs">
            {!isDesktop && <Caja3 />}
            <EmptySpace />
          </section>
        </section>
        {isDesktop && <LateralDerecho />}
        <Zocalo isDesktop={isDesktop} />
      </main>
    </>
  );
};

export default App;

const GetQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const HandleViews = () => {
  const { search } = useLocation();
  const query = GetQuery();
  const idPronostico = query.get(idPredictionParam);

  return search.includes(idPredictionParam) && idPronostico !== "" ? (
    <Prediction idPronostico={idPronostico} />
  ) : (
    <Home />
  );
};
