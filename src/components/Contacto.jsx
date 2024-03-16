import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

import './Contacto.css'

export const Contacto = ()=>{

    const form = useRef();



    const sendEmail = (e) => {
        e.preventDefault();

      
        
        emailjs
        .sendForm('service_uplovda', 'template_pxq00jf', form.current, {
            publicKey: 'U9wU-xGBDwJ8SRyWH',
        })
        .then(
            () => {
                console.log('SUCCESS!')

                // Buscar todos los inputs, textArea con la clase específica dentro del formulario
                const inputsWithClass = e.target.querySelectorAll('input.input-conct, textarea.textarea-conct');
                
                
                inputsWithClass.forEach( input => {
                    input.value = "";
                } );
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };



    return (
        <div id='contacto' className="contacto pb-5">

            <h4 className='text-center text-sobre pt-5 pb-3 mb-5'>Contacto</h4>

            <form ref={form} onSubmit={sendEmail} className='form-contact d-flex justify-content-center align-items-center'>

                <div className="row" style={{minheight: '18rem', width: '100%'}}>

                    <div className="col-12 col-md-6" >

                        <div className="d-flex flex-column justify-content-start align-items-center" >

                        <div className='d-flex flex-column align-items-center mb-5 pb-4' style={{height: '100%',width: '100%'}}>

                            <label className='label mb-2 fs-4'>Nombre</label>
                            <input className='form form-label input-conct' name="user_name" placeholder='Ingrese su nombre'  />

                        </div>

                        <div className='d-flex flex-column align-items-center mb-5 pb-4' style={{height: '100%', width: '100%'}}>

                            <label className='label mb-2 fs-4'  >Email</label>
                            <input typeof="email" className='form form-label input-conct' placeholder='Ingrese su mail' name="user_email"/>

                        </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">

                        <div className='d-flex flex-column justify-content-start align-items-center'>

                        <div className="mb-3 text-center" style={{minWidth: '70%'}}>
                            <label className="form-label fs-4" >Mensaje</label>
                            <textarea className="form-control textarea-conct" rows="7" name="message"></textarea>
                        </div>

                        <div className='d-flex flex-column justify-content-center align-items-center' style={{height: '5rem', width: '100%'}}>
                            <button type="submit" value={"Send"} className='btn-repositorio color-change-2x mb-2'>Enviar</button>
                        </div>

                        </div>

                        

                    </div>
                </div>
            </form>

        </div>
    )

}