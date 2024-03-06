
export const Contacto = ()=>{
    return (
        <div className="contacto pb-5">

            <h4 className='text-center text-sobre pt-5 pb-3 mb-5'>Contacto</h4>

            <div className="row" style={{minheight: '18rem', width: '100%'}}>

            <div className="col-6">

                <div className="d-flex flex-column justify-content-start align-items-center" >

                <div className='d-flex flex-column align-items-center mb-5 pb-4' style={{height: '100%', width: '70%'}}>

                    <label className='label mb-2 fs-4'>Nombre</label>
                    <input className='form form-label' placeholder='Ingrese su nombre' style={{width: '100%'}} />

                </div>

                <div className='d-flex flex-column align-items-center mb-5 pb-4' style={{height: '100%', width: '70%'}}>

                    <label className='label mb-2 fs-4'>Email</label>
                    <input className='form form-label' placeholder='Ingrese su mail' style={{width: '100%'}} />

                </div>
                </div>
            </div>

            <form className="col-6">

                <div className='d-flex flex-column justify-content-start align-items-center'>

                <div className="mb-3 text-center" style={{width: '70%'}}>
                    <label className="form-label fs-4">Example textarea</label>
                    <textarea className="form-control" rows="7"></textarea>
                </div>

                <div className='d-flex flex-column justify-content-center align-items-center' style={{height: '5rem', width: '100%'}}>
                    <button className='btn-repositorio color-change-2x mb-2'>Enviar</button>
                </div>

                </div>

                

            </form>

            </div>
        </div>
    )

}