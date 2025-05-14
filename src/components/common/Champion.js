import { memo } from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ReactPlayer from 'react-player';

const Champion = props => {

    const { flagTeams, name, slugFlag, urlMagAssets } = props;
    var isVideoFlag = (flagTeams.includes(slugFlag)) ? false : true

    return (
        <section className="mb-3 text-center">
            {
                isVideoFlag
                    ? <ReactPlayer
                            className="mx-auto"
                            url={`${urlMagAssets}${slugFlag}.mp4`}
                            loop={true}
                            muted={true}
                            playing={true}
                            playsinline={true}
                            width="300px"
                            height="200px"
                        />
                    : <LazyLoadImage
                            alt={name}
                            className="mt-3 img-fluid"
                            effect="blur"
                            src={`${urlMagAssets}${slugFlag}.jpg`}
                        />
            }
        </section>
    )
}

export default memo(Champion);

Champion.propTypes = {
    flagTeams: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    slugFlag: PropTypes.string.isRequired,
    urlMagAssets: PropTypes.string.isRequired
}