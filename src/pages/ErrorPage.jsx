import React from 'react'
import { useLocation } from 'react-router-dom'

const ErrorPage = () => {

    const { state } = useLocation()

    return (
        <div style={{ height: '80vh' }} className="container py-5" >

            <img className="img-fluid rounded" src="https://i.pinimg.com/originals/a8/12/1a/a8121abee959e18cbad25ad4046f76d8.gif" />

            <p className="text-center fs-3 my-5" >Sorry, the page you were looking for was not found.</p>

            {state && (
                <p className="text-center fs-4">Error Code : <span className="badge bg-danger">{state}</span></p>
            )}

        </div>
    )
}

export default ErrorPage