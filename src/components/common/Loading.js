import React from 'react';
import { urlCommonAssets } from '../../Constants';

const Loading = () => {

    return (
        <article className={`vh-100 d-flex align-items-center justify-content-center`}>
            <img className="img-fluid" src={`${urlCommonAssets}img/loading-brand.gif`} alt="Cargando"/>
        </article>        
    )
}

export default Loading;