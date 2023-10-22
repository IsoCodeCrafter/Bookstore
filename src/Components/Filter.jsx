import React from 'react'
import { useSearchParams } from "react-router-dom"

const Filter = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const handleChange = (e) => {

        searchParams.set('order', e.target.value)
        setSearchParams(searchParams)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        searchParams.set('query', e.target[0].value)
        setSearchParams(searchParams)
        
        e.target[0].value = ""
    }

    return (

        <div className="d-flex justify-content-between align-items-center">
            <div className="mx-5 mt-3 fs-5">
                <label className="me-3">Sort by Year</label>
                <select
                    value={searchParams.get('order')}
                    onChange={handleChange} className="px-4">
                    <option >a-z</option>
                    <option >z-a</option>
                </select>
            </div>


            <form onSubmit={handleSubmit} className="d-flex  gap-2">
                <input placeholder="enter the book name" className="form-control" type="text" />
                <button className="btn btn-success">Search</button>
            </form>

        </div>


    )
}

export default Filter