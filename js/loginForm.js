import React from 'react'
import '../css/loginForm.css';
import 'bootstrap/css/bootstrap.min.css'

function loginForm() {
    return(
        <div className='wrapper d-flex align-items justify-content-center w-100'>
            <div className='login'>
            <h2>Login</h2>
                <form>
                    <div className='form-group'>
                        <label htmlFor='user'>Usuario</label>
                        <input type='email'></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pass'>Contraseña</label>
                        <input type='password'></input>
                    </div>
                    <div className='form-group'>
                        <input type='checkbox'></input>
                        <label htmlFor='check'>Recordarme</label>
                    </div>
                    <button type='submit' className='btn'>ENTRAR</button>
                </form>
                
            </div>
        </div>
    )
}

export default loginForm