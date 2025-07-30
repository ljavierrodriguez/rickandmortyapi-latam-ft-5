import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

const Detail = () => {
    const { character } = useParams()
    const [char, setChar] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        getCharacterById(`https://rickandmortyapi.com/api/character/${character}`)
    }, [])

    const getCharacterById = async (url) => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setChar(data)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className='container py-5 bg-dark text-white min-vh-100'>
            <h1 className='text-center mb-5'>Rick and Morty Characters</h1>
            <div className="row g-4">
                <div className='col-12' key={char?.id}>
                    <div className="card bg-secondary text-white border-0">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <img src={char?.image} alt={char?.name} className='img-fluid' />
                            </div>
                            <div className="col-lg-8">
                                <div className="card-body">
                                    <h5 className="card-title">{char?.name}</h5>
                                    <p className="card-text mb-1">{char?.species}</p>
                                    <p className="card-text mb-1">{char?.gender}</p>
                                    <p className="card-text mb-1">{char?.origin?.name}</p>
                                    <div className="d-flex justify-content-between">
                                        <span className={`badge d-flex align-items-center ${char?.status === 'Alive' ? 'bg-success' :
                                            char?.status === 'Dead' ? 'bg-danger' : 'bg-dark'
                                            }`}>
                                            {char?.status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-warning btn-sm my-3" onClick={() => navigate('/')}>
                        Regresar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Detail