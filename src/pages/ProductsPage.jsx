import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../Components/ProductCard'
import { useSearchParams } from 'react-router-dom'
import Filter from '../Components/Filter'

const ProductsPage = () => {



    const [books, setBooks] = useState(null)

    const [searchParams, setSearchParams] = useSearchParams()

    const order = searchParams.get("order")
    const query = searchParams.get('query')

    const options = {
        params: {
            _sort: "title",
            _order: order === 'z-a' ? "desc" : "asc",
            q: query,
        }
    }

    useEffect(() => {
        axios.get("http://localhost:3080/product", options)
            .then((res) => setBooks(res.data))
            .catch((err) => console.log(err))
    }, [order, query])



    return (
        <div className="container">
            {!books && <p className="text-center">Loading.</p>}

            <h3 className="mx-5 mt-3">
                {books?.length} Books Found
            </h3>
            <Filter />

            <div className="card-container">

                {books?.map((book) => (
                    <ProductCard key={book.id} book={book} />
                )

                )}
            </div>


        </div>
    )
}

export default ProductsPage