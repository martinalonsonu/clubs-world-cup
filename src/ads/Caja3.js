import React, { memo } from 'react';
import UseDfpSlot from './UseDfpSlot';

const Caja3 = () => {

    UseDfpSlot({
        path: '/28253241/depor/web/post/default/caja3',
        size: ['fluid', [300, 100], [300, 50], [300, 250], [320, 100], [320, 50]],
        id: 'div-gpt-ad-1582239025732-0',
    });

    return (
        <section className="container pt-3 d-xl-none text-center container-caja3">
            <div id="div-gpt-ad-1582239025732-0"></div> 
        </section>
    )
}

export default memo(Caja3);
