import { useEffect, useRef } from 'react'; 
import PropTypes from 'prop-types';
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.min';

import { queryStrStart, urlEspecial } from '../../Constants';

const ConfirmationModal = props => {

    const { idPronostico } = props;
    const confirmationModalRef = useRef();    
    
    useEffect(() => {
        const confirmationModal = new Modal(confirmationModalRef.current);
        confirmationModal.show();              
    },[]);
    
    return (
        <div className="modal fade clickable" id="confirmationModal" ref={confirmationModalRef} tabIndex={-1} aria-labelledby="confirmationModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">                
                    <div className="modal-body text-center">
                        <p className="my-3 item-form">Tu pronóstico fue registrado.<br/>Gracias por participar.</p>
                    </div>
                    <div className="modal-footer d-flex justify-content-center">
                        <button 
                            className="btn mt-3 px-4 py-2 text-white btn-final" 
                            data-bs-dismiss="modal" 
                            onClick={() => redirectoIndex(idPronostico, queryStrStart, urlEspecial)}
                            type="button"
                        >
                            CONTINUAR
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const redirectoIndex = (idPronostico, queryStrStart, urlEspecial) => {    
    
    const timeToRedirect = 1000;

    setTimeout(() => {
        window.location.replace(`${urlEspecial}${queryStrStart}idPronostico=${idPronostico}`);
    }, timeToRedirect);
}

export default ConfirmationModal;

ConfirmationModal.propTypes = {
    idPronostico: PropTypes.number.isRequired
}