import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetail = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [book, setBook] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3080/product/${id}`)
            .then((res) => setBook(res.data))
            .catch((err) => navigate("/undefined", { state: err.response.status }))

    }
        , [id]);



    return (
        <div className=" container ">

            {book ? (
                <div className="row my-5" style={{ minHeight: '70vh' }}>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img className="rounded img-fluid shadow" style={{ maxWidth: '300px' }} src={book.image} />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center my-sm-3 ">
                        <h1 className="text-center">{book.title}</h1>

                        <BookInfo title={"Author"} value={book.author} />
                        <BookInfo title={"Year"} value={book.year} />
                        <BookInfo title={"Page"} value={book.page} />
                        <BookInfo title={"Description"} value={book.description} />



                    </div>
                </div>
            ) : <p>Loading</p>}





        </div>
    )
}


const BookInfo = ({ title, value }) => {
    return (
        <p >
            <span className="badge bg-warning me-3">{title}</span>
            <span>{value}</span>
        </p>

    )

}


export default ProductDetail