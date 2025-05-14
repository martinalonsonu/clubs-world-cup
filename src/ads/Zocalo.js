import React, { memo } from 'react';
import PropTypes from 'prop-types';
import UseDfpSlot from './UseDfpSlot';

const Zocalo = props => {

    const desktop = [728, 90];
    const mobile = [320, 50];
    const size = props.isDesktop ? [desktop] : [mobile];

    UseDfpSlot({
        path: '/28253241/depor/web/post/default/zocalo',
        size,
        id: 'div-gpt-ad-1582159417206-0',
    });

    return (
        <section className="position-fixed bottom-0 start-0 end-0 mx-auto text-center container-zocalo">
            <div id="div-gpt-ad-1582159417206-0"></div> 
        </section>
    )
}

export default memo(Zocalo);

Zocalo.propTypes = {
    isDesktop: PropTypes.bool.isRequired
}