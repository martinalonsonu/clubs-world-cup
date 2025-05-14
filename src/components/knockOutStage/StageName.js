import PropTypes from 'prop-types';

const StageName = props => {

    const { activeClass, stageName } = props;

    return (
        <span className={`rounded mx-1 px-3 py-2 shadow text-white btn-knockout-stage ${activeClass ? 'active' : 'inactive'}`}>
            {stageName}
        </span>
    )
}

export default StageName;

StageName.propTypes = {
    activeClass: PropTypes.bool.isRequired,
    stageName: PropTypes.string.isRequired
}