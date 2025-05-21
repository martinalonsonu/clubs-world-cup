import PropTypes from "prop-types";

const TeamStanding = (props) => {
  const {
    positionClass,
    slug,
    name,
    playedMatches,
    wonMatches,
    drawnMatches,
    lostMatches,
    goalsFor,
    goalsAgainst,
    goalsDifference,
    points,
    urlAssets,
  } = props;

  const CellValue = ({ children }) => (
    <td>
      <span>{children}</span>
    </td>
  );

  return (
    <tr className={`mb-1 standing-data ${positionClass}`}>
      <td>
        <article className="d-flex align-items-center justify-content-start my-1 ms-1">
          <img
            className="px-1"
            src={`${urlAssets}${slug}.png`}
            style={{ height: "21px" }}
            alt={name}
            loading="lazy"
            height={21}
          />
          <span className="ms-1">{name}</span>
        </article>
      </td>
      <CellValue>{playedMatches}</CellValue>
      <CellValue>{wonMatches}</CellValue>
      <CellValue>{drawnMatches}</CellValue>
      <CellValue>{lostMatches}</CellValue>
      <CellValue>{goalsFor}</CellValue>
      <CellValue>{goalsAgainst}</CellValue>
      <CellValue>{goalsDifference}</CellValue>
      <CellValue>{points}</CellValue>
    </tr>
  );
};

export default TeamStanding;

TeamStanding.propTypes = {
  positionClass: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  playedMatches: PropTypes.number.isRequired,
  wonMatches: PropTypes.number.isRequired,
  drawnMatches: PropTypes.number.isRequired,
  lostMatches: PropTypes.number.isRequired,
  goalsFor: PropTypes.number.isRequired,
  goalsAgainst: PropTypes.number.isRequired,
  goalsDifference: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  urlAssets: PropTypes.string.isRequired,
};
