import React, { memo } from 'react';
import UseDfpSlot from './UseDfpSlot';

const LateralIzquierdo = () => {    

    UseDfpSlot({
        path: '/28253241/depor/web/post/default/laterall',
        size: [[120, 600], 'fluid', [160, 600]],
        id: 'div-gpt-ad-1582159368137-0',
    });
    
    return (
        <aside className="d-none d-xl-block position-fixed start-0 ms-4 text-end lateral-izq">
            <div id="div-gpt-ad-1582159368137-0"></div> 
        </aside>
    )
}

export default memo(LateralIzquierdo);
