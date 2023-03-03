import React from 'react'
import '../css/loginForm.css';
import 'bootstrap/css/bootstrap.min.css'

function loginForm() {
    return(
        <div className='wrapper bg-dark d-flex align-items justify-content-center w-100'>
            <div className='login'>
            <h2 className='mb-3'>Login</h2>
                <form className='needs-validation'>
                    <div className='form-group was-validated mb-2'>
                        <label htmlFor='user' className='form-label'>Usuario</label>
                        <input type='email' className='form-control' required></input>
                        <div className='invalid-feedback'>Por favor ingrese usuario</div>
                    </div>
                    <div className='form-group was-validated mb-2'>
                        <label htmlFor='pass' className='form-label'>Contraseña</label>
                        <input type='password' className='form-control' required></input>
                        <div className='invalid-feedback'>Por favor ingrese contraseña</div>
                    </div>
                    <div className='form-group form-check mb-2'>
                        <input type='checkbox' className='form-check-input'></input>
                        <label htmlFor='check' className='form-check-label'>Recordarme</label>
                    </div>
                    <button type='submit' className='btn btn-success w-100 mt-2'>ENTRAR</button>
                </form>
                
            </div>
        </div>
    )
}

export default loginForm