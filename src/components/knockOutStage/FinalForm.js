import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { flagTeams, urlBrand, urlPrivacyPolicy, urlMagAssets } from '../../Constants';

//components
import Champion from '../common/Champion';

const FinalForm = props => {

    const { register, handleSubmit, formState: { errors } } = useForm();   
    const { slug, name, playOff } = props.champion;
    const width = props.width;

    const slugFlag = slug !== '' ? slug : playOff;
    const maxLengthPhone = 9;

    const onSubmit = async (data, e) => {
        e.preventDefault();

        if(errors){
            props.onSubmit(data);
        }
    }

    const MessageError = ({ children }) => <span className="my-1 text-danger team-final-form">{children}</span>;

    return (
        <section className="my-3 px-2">
            <Champion flagTeams={flagTeams} name={`¡${name} CAMPEÓN!`} slugFlag={slugFlag} urlMagAssets={urlMagAssets} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <section className={`${width} mt-4 mx-auto`}>
                    <input type="hidden" {...register('slugflag')} value={slugFlag} />
                    <input type="hidden" {...register('champion')} value={name} />
                    <div className="my-2">
                        <input                     
                            className={`form-control border-0 rounded p-2 bg-input item-form  ${errors.name ? 'is-invalid' : ''}`} 
                            name="name"
                            type="text" 
                            placeholder="NOMBRE"
                            {...register("name", { 
                                required:{
                                    value: true,
                                    message: 'Debes ingresar tus nombres y apellidos' 
                                }
                            })}
                        />
                        <MessageError>{errors?.name?.message}</MessageError>
                    </div>
                    <div className="my-2">
                        <input                     
                            className={`form-control border-0 rounded p-2 bg-input item-form ${errors.email ? 'is-invalid' : ''}`} 
                            id="email" 
                            name="email"
                            type="email" 
                            placeholder="CORREO"
                            {...register("email", { 
                                required:{
                                    value: true,
                                    message: 'Debes ingresar tu correo' 
                                }
                            })}
                        />
                        <MessageError>{errors?.email?.message}</MessageError>
                    </div>
                    <div className="my-2">
                        <input                     
                            className={`form-control border-0 rounded p-2 bg-input item-form  ${errors.phone ? 'is-invalid' : ''}`} 
                            name="phone"
                            type="tel" 
                            placeholder="CELULAR"
                            {...register("phone", { 
                                required:{
                                    value: true,
                                    message: 'Debes ingresar tu celular' 
                                },
                                pattern: {
                                    value: /^[0-9]*$/,
                                    message: 'El celular sólo debe tener números'
                                },
                                validate: value => value.length === maxLengthPhone || `El celular debe tener ${maxLengthPhone} dígitos`
                            })}
                        />
                        <MessageError>{errors?.phone?.message}</MessageError>
                    </div>
                    <div className="my-2">
                        <div className="form-check">
                            <input 
                                className={`form-check-input ${errors.privacyPolicy && 'is-invalid'}`}
                                id="privacyPolicy" 
                                type="checkbox" 
                                value="Autorizo" 
                                {...register("privacyPolicy", { 
                                    required:{
                                        value: true,
                                        message: 'Debes aceptar las Políticas de Privacidad' 
                                    }
                                })}
                            />
                            <label className="form-check-label item-form" htmlFor="privacyPolicy">
                                Al registrarme por este formulario autorizo el uso de mis datos para &nbsp;
                                <a className="text-decoration-underline item-form" 
                                    href={`${urlBrand}tratamiento-de-datos`} 
                                    target="_blank" 
                                    rel="noreferrer"
                                > 
                                    fines adicionales
                                </a>
                                &nbsp;y acepto las &nbsp;
                                <a className="text-decoration-underline item-form" 
                                    href={`${urlBrand}${urlPrivacyPolicy}`} 
                                    target="_blank" 
                                    rel="noreferrer"
                                > 
                                    Políticas de Privacidad
                                </a>
                            </label>
                        </div>
                        <MessageError>{errors?.privacyPolicy?.message}</MessageError>
                    </div>               
                    <div className="my-4 text-center">
                        <button 
                            className="btn btn-final text-white" 
                            type="submit"
                        >
                            ENVÍA TUS RESULTADOS
                        </button>
                    </div>
                </section>
            </form>
        </section>
    )
}

export default FinalForm;

FinalForm.propTypes = {
    champion: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    width: PropTypes.string.isRequired
}