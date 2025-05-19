import { useState, useEffect } from "react";
import axios from "axios";

//constants
import { googleSheetKey, query, responseStatusOk } from "../Constants";

const useScores = () => {
  const [loading, setLoading] = useState(true);
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const getAllScores = async () => {
      const urlJsonScores = `https://docs.google.com/spreadsheets/d/${googleSheetKey}/gviz/tq?tq=${encodeURIComponent(
        query
      )}`;

      try {
        const result = await axios(urlJsonScores);
        if (result.status === responseStatusOk) {
          const jsonContent = JSON.parse(result.data.substr(47).slice(0, -2));
          setScores(jsonContent.table.rows);
          setLoading(false);
        }
      } catch (error) {
        console.log(`Error al obtener los partidos: ${error}`);
      }
    };

    getAllScores();
  }, []);

  return [loading, scores];
};

export { useScores };
