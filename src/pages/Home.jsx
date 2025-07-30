import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { FaEye } from 'react-icons/fa'
import CustomPagination from '../components/CustomPagination'
import Pagination from 'react-js-pagination'

const Home = () => {

    const [characters, setCharacters] = useState(null)
    const [page, setPage] = useState(1)

    useEffect(() => {
        getCharacters('https://rickandmortyapi.com/api/character')
    }, [])

    const handlePageChange = page => {
        setPage(page)
        getCharacters(`https://rickandmortyapi.com/api/character?page=${page}`)
    }

    const getCharacters = async (url) => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setCharacters(data)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className='container py-5 bg-dark text-white min-vh-100'>
            <h1 className='text-center mb-5'>Rick and Morty Characters</h1>
            {!!characters && <CustomPagination info={characters?.info} getCharacters={getCharacters} />}
            <div className="row">
                <div className="col-lg-12 d-flex justify-content-center p-2">
                    {!!characters &&
                        <Pagination
                            itemClass="page-item"
                            linkClass="page-link"
                            activePage={page}
                            itemsCountPerPage={20}
                            totalItemsCount={characters.info.count}
                            pageRangeDisplayed={5}
                            onChange={handlePageChange}
                        />
                    }
                </div>
            </div>
            <div className="row g-4">
                {
                    !!characters && characters?.results.map((char) => (
                        <div className='col-12 col-sm-6 col-md-4 col-lg-3' key={char.id}>
                            <div className="card h-100 bg-secondary text-white border-0">
                                <img src={char.image} alt={char.name} className='card-img-top' />
                                <div className="card-body">
                                    <h5 className="card-title">{char.name}</h5>
                                    <p className="card-text mb-1">{char.species}</p>
                                    <div className="d-flex justify-content-between">
                                        <span className={`badge d-flex align-items-center ${char.status === 'Alive' ? 'bg-success' :
                                            char.status === 'Dead' ? 'bg-danger' : 'bg-dark'
                                            }`}>
                                            {char.status}
                                        </span>
                                        <Link to={`/${char.id}`} className='btn btn-primary btn-sm'>
                                            <FaEye />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="row">
                <div className="col-lg-12 d-flex justify-content-center p-2">
                    {!!characters &&
                        <Pagination
                            itemClass="page-item"
                            linkClass="page-link"
                            activePage={page}
                            itemsCountPerPage={20}
                            totalItemsCount={characters.info.count}
                            pageRangeDisplayed={5}
                            onChange={handlePageChange}
                        />
                    }
                </div>
            </div>
            {!!characters && <CustomPagination info={characters?.info} getCharacters={getCharacters} />}
        </div>
    )
}

export default Home