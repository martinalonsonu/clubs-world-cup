import { Fragment } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";

//components
import GroupStageTeam from "./GroupStageTeam";

//constants
import { months } from "../../Constants";

const MatchesByGroup = (props) => {
  const {
    group,
    errors,
    handleSubmitForm,
    matches,
    onSubmitForm,
    register,
    teams,
    urlAssets,
  } = props;

  const daysOfWeek = 7;
  const today = dayjs().format("YYYY-MM-DD");

  const getFormattedNumberMonth = (monthName) => {
    const numberOfMonth = months.findIndex((m) => m === monthName) + 1;

    return numberOfMonth < 10 ? `0${numberOfMonth}` : numberOfMonth;
  };

  const getBgColor = (matchDate, today, finished) => {
    const splittedMatchDate = matchDate.split(" ");
    const nextMatchDate = dayjs(
      `${dayjs().year()}-${getFormattedNumberMonth(splittedMatchDate[3])}-${
        splittedMatchDate[1]
      }`
    );
    if (finished) {
      return "bg-played-match text-white";
    } else if (nextMatchDate.diff(today, "day") < daysOfWeek) {
      return "bg-current-match text-unselected";
    }

    return "bg-future-match text-unselected";
  };

  return (
    <section className="">
      <h2 className="text-center group-name">GRUPO {group}</h2>
      <form key={group} onSubmit={handleSubmitForm(onSubmitForm)}>
        <section className="row mx-auto px-0">
          {matches.map((match, index) => {
            let dateMatch = Math.ceil((index + 1) / 2);
            const matchStadium = match.stadium.split(",");
            return (
              <Fragment key={match.matchNumber}>
                <input type="hidden" {...register("group")} value={group} />
                <article className="col-12 d-flex align-items-center justify-content-center mb-2 text-center">
                  <span className="date-match">
                    FECHA {dateMatch} (Partido {match?.matchNumber})
                  </span>
                </article>
                <GroupStageTeam
                  group={group}
                  paddingContainer="ps-1 ps-md-2 pe-0"
                  direction="flex-row"
                  marginTeamName="ms-1"
                  slug={teams[match.home].slug}
                  team="Home"
                  teamId={match.home}
                  teamName={teams[match.home].name}
                  urlAssets={urlAssets}
                  matchNumber={match.matchNumber}
                  bgColor={getBgColor(
                    match.matchDate,
                    today,
                    match.completedApi
                  )}
                  goals={match.goalsHome}
                  finished={match.finished}
                  completed={match.completedApi}
                  register={register}
                  errors={errors}
                />
                <GroupStageTeam
                  group={group}
                  paddingContainer="pe-1 pe-md-2 ps-0"
                  direction="flex-row-reverse"
                  marginTeamName="me-1"
                  slug={teams[match.away].slug}
                  team="Away"
                  teamId={match.away}
                  teamName={teams[match.away].name}
                  urlAssets={urlAssets}
                  matchNumber={match.matchNumber}
                  bgColor={getBgColor(
                    match.matchDate,
                    today,
                    match.completedApi
                  )}
                  goals={match.goalsAway}
                  finished={match.finished}
                  completed={match.completedApi}
                  register={register}
                  errors={errors}
                />
                <article className="col-12 d-flex align-items-center justify-content-center mb-2 text-center">
                  <span className="match-data">
                    <b>{matchStadium[1]}</b> / {matchStadium[0]} -{" "}
                    {`${match.matchDate
                      .charAt(0)
                      .toUpperCase()}${match.matchDate.slice(1)}`}{" "}
                    - {match.matchHour}
                  </span>
                </article>
              </Fragment>
            );
          })}
          <section className="col-12 d-flex justify-content-center my-3">
            <button
              className="btn rounded-pill shadow px-3 py-2 btn-next text-white"
              type="submit"
              disabled={matches.every((match) => match.completedApi)}
            >
              Calcular
            </button>
          </section>
        </section>
      </form>
    </section>
  );
};

export default MatchesByGroup;

MatchesByGroup.propTypes = {
  group: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  handleSubmitForm: PropTypes.func.isRequired,
  matches: PropTypes.array.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  teams: PropTypes.object.isRequired,
  urlAssets: PropTypes.string.isRequired,
};
