import React, {  useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon } from 'react-share'; 

import { flagTeams, headers, idEntityApi, idPredictionParam, queryStrStart, responseStatusOk, socialShareText, twitterAccount, urlEspecial, urlMagAssets } from '../../Constants';

//components
import Loading from '../common/Loading';
import Heading from '../common/Heading';
import Champion from '../common/Champion';

const Prediction = props => {

    const { idPronostico } = props;
    const urlPrediction = `https://elcomercio-data.com/formulario-search?form_id=${idEntityApi}`;

    const [loading, setLoading] = useState(false);
    const [prediction, setPrediction] = useState({ userSlugFlag: '', userChampion: '' });
    const { userSlugFlag, userChampion } = prediction;

    const getPrediction = async () => {
        try{
            const data = { _id: idPronostico }        
            const response = await axios.post(urlPrediction, data, { headers });
            
            if(response.status === responseStatusOk){ 

                const { slugflag, champion } = response.data[0];

                setPrediction({
                    userSlugFlag: slugflag, 
                    userChampion: `¡${champion} CAMPEÓN!`
                });

                setLoading(false);
            }
        }
        catch(error){
            console.log(`Error al obtener el pronóstico: ${error}`);
        }            
    } 
    
    useEffect(() => {
        getPrediction(); 
    }, []);

    return (
        <>
            {
                loading
                    ? <Loading />
                    : <>
                        <Heading />
                        <section className="my-3 px-2">
                            <Champion flagTeams={flagTeams} name={`¡${userChampion} CAMPEÓN!`} slugFlag={userSlugFlag} urlMagAssets={urlMagAssets} />
                        </section>
                        <section className="d-flex justify-content-center mt-3">
                            <p className="text-center share-prediction">COMPARTE TU PRONÓSTICO</p>
                        </section>  
                        <section className="d-flex justify-content-center mb-3 social">
                            <ul className="list-group list-group-horizontal">
                                <li className="d-block mx-2">
                                    <FacebookShareButton
                                        quote={socialShareText}
                                        url={`${urlEspecial}${queryStrStart}${idPredictionParam}=${idPronostico}`}
                                        width="20"
                                    >
                                        <FacebookIcon size={32} round={true} />
                                    </FacebookShareButton>
                                </li>                  
                                <li className="d-block mx-2">
                                    <WhatsappShareButton
                                        url={`${urlEspecial}${queryStrStart}${idPredictionParam}=${idPronostico}`}
                                        title={socialShareText}
                                        windowWidth="600"
                                        windowHeight="600"
                                    >
                                        <WhatsappIcon size={32} round={true} />
                                    </WhatsappShareButton>  
                                </li>          
                                <li className="d-block mx-2">
                                    <TwitterShareButton
                                        url={`${urlEspecial}${queryStrStart}${idPredictionParam}=${idPronostico}`}
                                        title={socialShareText}
                                        via={twitterAccount}
                                    >
                                        <TwitterIcon size={32} round={true} />
                                    </TwitterShareButton>                            
                                </li>                        
                            </ul>
                        </section>          
                        <section className="text-center mb-3">
                            <a className="btn btn-next text-white" href={urlEspecial}>
                                INICIO
                            </a>
                        </section>
                    </>               
            }
        </>
    )
}

export default Prediction;

Prediction.propTypes = {
    idPronostico: PropTypes.string.isRequired,    
}