import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ book }) => {


    return (
        <div className="card shadow rounded p-1">

            <div className="img-card">
                <img className="img-fluid rounded" src={book.image} alt="" />
            </div>
            <div className="card-body">
                <p className="bold text-center">{book.title}</p>
                <p className="text-center">{book.author}</p>

                <Link to={`/detail/${book.id}`} className="btn btn-primary w-100" >See Details...</Link>
            </div>





        </div>
    )
}

export default ProductCard