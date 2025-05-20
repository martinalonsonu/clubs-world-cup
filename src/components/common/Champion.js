import { memo } from "react";
import PropTypes from "prop-types";
import "react-lazy-load-image-component/src/effects/blur.css";
import ReactPlayer from "react-player";
import { urlAssets } from "../../Constants";

const Champion = (props) => {
  const { slugFlag } = props;

  return (
    <section className="mb-3 text-center">
      <ReactPlayer
        className="mx-auto"
        url={`${urlAssets}/videos/campeones/${slugFlag}.mp4`}
        loop={true}
        muted={true}
        playing={true}
        playsinline={true}
        width="470px"
        height="470px"
      />
    </section>
  );
};

export default memo(Champion);

Champion.propTypes = {
  name: PropTypes.string.isRequired,
  slugFlag: PropTypes.string.isRequired,
};
