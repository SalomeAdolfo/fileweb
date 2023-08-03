import React from 'react'
import { url } from '../constants/route'
import '../styles/LogInStyles.css'
import { useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import * as Yup from 'yup'
function LogInPage() {
    const navigate = useNavigate()
    return (
        <div className='container'>
            <div className='form-log'>
                <Formik
                    initialValues={{
                        usuario: '',
                        password: ''
                    }}
                    onSubmit={(values) => {
                        async function logIn() {
                            const res = await fetch(`${url}auth/logIn`, {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    user: values.usuario,
                                    password: values.password
                                })
                            })
                            if (res.ok) {
                                const json = await res.json()
                                alert(JSON.stringify(json))
                                window.sessionStorage.setItem('token', JSON.stringify(json.token));
                                navigate(`/${json.rol}`, { replace: true })
                            }
                            if (!res.ok) {
                                alert('Usuario no válido', 'info')
                                console.clear()
                            }
                        }
                        logIn()
                    }}
                    validationSchema={Yup.object().shape({
                        usuario: Yup.string().required('El usuario es requerido'),
                        password: Yup.string().required('Password requerida')
                    })}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                    }) => (
                        <form onSubmit={handleSubmit} className='container__form_data'>
                            <div className="mb-3 sectionInput">
                                <span>Usuario:</span>
                                <input
                                    autoFocus
                                    type='text'
                                    name='usuario'
                                    className='form-control'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete='current-user'
                                    value={values.usuario} />
                                {errors.usuario && touched.usuario && <div className='error__message'>{errors.usuario}</div>}
                            </div>
                            <div className='mb-3 sectionInput'>
                                <span>Password:</span>
                                <input
                                    type='password'
                                    name='password'
                                    className='form-control'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete='current-password'
                                    value={values.password} />
                                {errors.password && touched.password && <div className='error__message'>{errors.password}</div>}
                            </div>
                            <div className='button__container'>
                                <button type="submit" className='button_form'>
                                    Enviar
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default LogInPage