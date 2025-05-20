import { memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { isDesktop } from "react-device-detect";

import { titleHome, urlAssets } from "../../Constants";

const Heading = () => {
  const headingBanner = isDesktop ? "desktop" : "mobile";

  return (
    <section className="text-center">
      <LazyLoadImage
        alt={titleHome}
        className="d-block img-fluid"
        effect="blur"
        src={`${urlAssets}/img/header-${headingBanner}.jpg?d=2`}
      />
    </section>
  );
};

export default memo(Heading);
