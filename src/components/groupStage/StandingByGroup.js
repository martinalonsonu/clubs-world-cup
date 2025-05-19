import PropTypes from "prop-types";

//components
import TeamStanding from "./TeamStanding";

const StandingByGroup = (props) => {
  const { standings, urlAssets } = props;

  //const maxPosToAdvance = 1;

  const ColumnName = ({ children }) => (
    <th scope="col">
      <span className="mx-1">{children}</span>
    </th>
  );

  const getPositionColor = (pos) => {
    const positionColors = [
      "text-selected to-knockout-stage-team",
      "text-selected to-knockout-stage-team",
      "text-unselected eliminated-team",
      "text-unselected eliminated-team",
    ];

    return positionColors[pos];
  };

  return (
    <section className="mt-2 mb-4 mb-md-5 px-1">
      <table className="w-100 table text-center">
        <thead className="standing-head">
          <tr>
            <th scope="">
              <span className="mx-5"></span>
            </th>
            <ColumnName>PJ</ColumnName>
            <ColumnName>PG</ColumnName>
            <ColumnName>PE</ColumnName>
            <ColumnName>PP</ColumnName>
            <ColumnName>GF</ColumnName>
            <ColumnName>GC</ColumnName>
            <ColumnName>Dif.</ColumnName>
            <ColumnName>Pts.</ColumnName>
          </tr>
        </thead>
        <tbody>
          {standings.map((stdTeam, i) => (
            <TeamStanding
              key={stdTeam.id}
              positionClass={getPositionColor(i)}
              slug={stdTeam.slug}
              name={stdTeam.name}
              playedMatches={stdTeam.playedMatches}
              wonMatches={stdTeam.wonMatches}
              drawnMatches={stdTeam.drawnMatches}
              lostMatches={stdTeam.lostMatches}
              goalsFor={stdTeam.goalsFor}
              goalsAgainst={stdTeam.goalsAgainst}
              goalsDifference={stdTeam.goalsDifference}
              points={stdTeam.points}
              urlAssets={urlAssets}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default StandingByGroup;

StandingByGroup.propTypes = {
  standings: PropTypes.array.isRequired,
  urlAssets: PropTypes.string.isRequired,
};
