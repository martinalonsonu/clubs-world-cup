import { useContext, useState } from 'react';
import { isDesktop } from "react-device-detect";
import axios from 'axios';

import { headers, idEntityApi, responseStatusOk } from '../../Constants';

//context
import GroupsContext from '../../context/GroupsContext';

//components
import KnockOutStage from './KnockOutStage';
import FinalForm from './FinalForm';
import ConfirmationModal from './ConfirmationModal';

const KnockOutStageForm = () => {

    const { finalFormPos, stage } = useContext(GroupsContext);
    
    const width = isDesktop ? 'w-50' : 'w-100';
    const [champion, setChampion] = useState({});

    const urlForm = `https://elcomercio-data.com/formulario-input?form_id=${idEntityApi}`;
    
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [idPronostico, setIdPronostico] = useState(0);

    const onSubmit = async data => {
        console.log('OK!')                
        try {
            console.log('Enviando data a api...');
            const response = await axios.post(urlForm, data, { headers });
            
            if(response.status === responseStatusOk){ 
                setIsSubmitted(true);
                setIdPronostico(response.data.key.id);
            } 
        } catch (error) {
            console.error(`Error: ${error}`);            
        }    

        return isSubmitted;
    }

    return (
        (!isSubmitted)
            ? (stage !== finalFormPos) 
                ? <KnockOutStage setChampion={setChampion} width={width} />
                : <FinalForm onSubmit={onSubmit} champion={champion} width={width} />
            : <ConfirmationModal idPronostico={idPronostico} />    
    )
}

export default KnockOutStageForm;;