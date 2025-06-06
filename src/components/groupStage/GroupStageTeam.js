import PropTypes from "prop-types";

import { Form } from "react-bootstrap";

const GroupStageTeam = (props) => {
  const {
    direction,
    errors,
    goals,
    finished,
    marginTeamName,
    bgColor,
    matchNumber,
    paddingContainer,
    register,
    slug,
    team,
    teamId,
    teamName,
    urlAssets,
    completed,
  } = props;

  const allowedKeys = [
    "ArrowLeft",
    "ArrowUp",
    "ArrowRight",
    "ArrowDown",
    "Backspace",
    "Delete",
    "Tab",
    "Ctrl",
    "F5",
    "F12",
    "Home",
    "End",
  ];

  const name = `match${matchNumber}${team}Goals`;

  const minValueAllowed = 0;

  const maxValueAllowed = 99;

  return (
    <section className="col-6 px-0">
      <section
        className={`d-flex align-items-center justify-content-between shadow-sm ${direction} ${paddingContainer} match-rounded ${bgColor}`}
      >
        <article
          className={`d-flex align-items-center ${direction} py-1 py-md-2`}
        >
          <img
            src={`${urlAssets}${slug}.png`}
            alt={teamName}
            loading="lazy"
            width={26}
          />
          <span className={`${marginTeamName} groupstage-team-name`}>
            {teamName}
          </span>
        </article>
        <article className="d-flex">
          <Form.Control
            type="hidden"
            {...register(`match${matchNumber}${team}`)}
            value={teamId}
          />
          <Form.Control
            bsPrefix="-"
            className="form-control text-center input-score"
            name={name}
            type="number"
            placeholder="-"
            readOnly={completed}
            onKeyDown={(e) => {
              if (allowedKeys.includes(e.key)) {
                return;
              }

              if (
                !/^[0-9]*$/.test(e.key) ||
                e.currentTarget.value.length + 1 > 2
              ) {
                e.preventDefault();
              }
            }}
            min={minValueAllowed}
            max={maxValueAllowed}
            defaultValue={finished ? goals : ""}
            {...register(name, {
              valueAsNumber: true,
              required: {
                required: true,
                message: "Debes ingresar los goles de este equipo",
              },
              pattern: {
                value: /^[0-9]*$/,
                message: "El marcador debe ser numérico",
              },
              max: {
                value: 99,
                message: "El marcador debe ser hasta de dos cifras",
              },
              min: {
                value: 0,
                message: "El marcador debe ser mayor o igual a 0",
              },
              // validate: value => !isNaN(value) || 'Debes ingresar los goles de este equipo'
            })}
          />
        </article>
      </section>
      <article className="d-flex my-1">
        <span className="match-data text-danger">
          {errors[`match${matchNumber}${team}Goals`]?.type === "validate" &&
            errors[`match${matchNumber}${team}Goals`].message}
          {errors[`match${matchNumber}${team}Goals`]?.type === "pattern" &&
            errors[`match${matchNumber}${team}Goals`].message}
          {errors[`match${matchNumber}${team}Goals`]?.type === "max" &&
            errors[`match${matchNumber}${team}Goals`].message}
          {errors[`match${matchNumber}${team}Goals`]?.type === "min" &&
            errors[`match${matchNumber}${team}Goals`].message}
        </span>
      </article>
    </section>
  );
};

export default GroupStageTeam;

GroupStageTeam.propTypes = {
  direction: PropTypes.string.isRequired,
  goals: PropTypes.number.isRequired,
  group: PropTypes.string.isRequired,
  finished: PropTypes.bool.isRequired,
  marginTeamName: PropTypes.string.isRequired,
  matchNumber: PropTypes.number.isRequired,
  bgColor: PropTypes.string.isRequired,
  paddingContainer: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  teamId: PropTypes.string.isRequired,
  teamName: PropTypes.string.isRequired,
  urlAssets: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
};
