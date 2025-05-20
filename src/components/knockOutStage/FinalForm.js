import PropTypes from "prop-types";

import { sessionStorageKey } from "../../Constants";

//components
import Champion from "../common/Champion";

const FinalForm = (props) => {
  const deleteMatchesFromSessionStorage = () =>
    sessionStorage.removeItem(sessionStorageKey);
  const { slug, name, playOff } = props.champion;

  const handleRefresh = () => {
    deleteMatchesFromSessionStorage();
    window.location.reload();
  };

  const slugFlag = slug !== "" ? slug : playOff;

  return (
    <section className="px-2 d-flex flex-column justify-content-center align-items-center">
      <Champion name={`¡${name} CAMPEÓN!`} slugFlag={slugFlag} />
      <button
        className="btn  rounded-pill shadow px-3 py-2 btn-next text-white"
        onClick={handleRefresh}
      >
        Inicio
      </button>
    </section>
  );
};

export default FinalForm;

FinalForm.propTypes = {
  champion: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  width: PropTypes.string.isRequired,
};
