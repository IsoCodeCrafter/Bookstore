import React from 'react'
import { Link } from 'react-router-dom'

const MainPage = () => {
    return (
        <div style={{ height: "70vh" }} className=" container d-flex flex-column align-items-center gap-5 my-5 " >


            <h1>"STATUS" Public Exam Preparation Books</h1>


            <img className="img-fluid rounded" src="https://media.tenor.com/STKqa16qMoQAAAAC/welcome.gif" alt="" />

            <p className="lead">
                You can find all the published books on the <Link to="/product">products page.</Link>
            </p>




        </div>
    )
}

export default MainPage