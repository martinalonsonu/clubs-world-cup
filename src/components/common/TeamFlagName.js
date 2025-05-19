import PropTypes from "prop-types";

const TeamFlagName = (props) => {
  const { name, slug, textColor, urlAssets } = props;

  return (
    <article className="d-flex align-items-center">
      <img
        src={`${urlAssets}/img/escudos/${slug}.png`}
        alt={name}
        loading="lazy"
        width={26}
      />
      <span className={`ms-1 ${textColor} team-name`}>{name}</span>
    </article>
  );
};

export default TeamFlagName;

TeamFlagName.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  urlAssets: PropTypes.string.isRequired,
};
