import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import {
  flagTeams,
  headers,
  idEntityApi,
  responseStatusOk,
  urlEspecial,
} from "../../Constants";

//components
import Loading from "../common/Loading";
import Champion from "../common/Champion";

const Prediction = (props) => {
  const { idPronostico } = props;
  const urlPrediction = `https://elcomercio-data.com/formulario-search?form_id=${idEntityApi}`;

  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState({
    userSlugFlag: "",
    userChampion: "",
  });
  const { userSlugFlag } = prediction;

  const getPrediction = async () => {
    try {
      const data = { _id: idPronostico };
      const response = await axios.post(urlPrediction, data, { headers });

      if (response.status === responseStatusOk) {
        const { slugflag, champion } = response.data[0];

        setPrediction({
          userSlugFlag: slugflag,
          userChampion: `¡${champion} CAMPEÓN!`,
        });

        setLoading(false);
      }
    } catch (error) {
      console.log(`Error al obtener el pronóstico: ${error}`);
    }
  };

  useEffect(() => {
    getPrediction();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <section className="px-2" style={{ marginTop: "13px" }}>
            <Champion slugFlag={userSlugFlag} />
          </section>
          <section className="text-center mb-3">
            <a className="btn btn-next text-white" href={urlEspecial}>
              INICIO
            </a>
          </section>
        </>
      )}
    </>
  );
};

export default Prediction;

Prediction.propTypes = {
  idPronostico: PropTypes.string.isRequired,
};
