import PropTypes from 'prop-types';

//components
import TeamFlagName from '../common/TeamFlagName';

const KnockOutStageTeam = props => {

    const { addWinner, buttonClass, id, image, index, name, sectionClass, slug, team, textColor, urlAssets } = props;

    return (
        <section className={`col-6 mx-0 mt-1 ${sectionClass}`}>
            <button 
                type="button"
                className={buttonClass}
                onClick={() => addWinner(index, id, team)}
            >
                <TeamFlagName name={name} slug={slug} textColor={textColor} urlAssets={urlAssets} />
                <div className="text-end">
                    <img src={image} alt="Elige un ganador" loading="lazy" />
                </div>
            </button>
        </section>
    )
}

export default KnockOutStageTeam;

KnockOutStageTeam.propTypes = {    
    addWinner: PropTypes.func.isRequired,
    buttonClass: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    sectionClass: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    urlAssets: PropTypes.string.isRequired,    
}