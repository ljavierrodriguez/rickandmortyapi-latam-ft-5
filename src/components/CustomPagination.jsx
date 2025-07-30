import React from 'react'

const CustomPagination = ({ info, getCharacters }) => {
    return (
        <div className='container my-3 d-flex justify-content-between'>
            <button className={'btn btn-info btn-sm ' + (info?.prev === null ? 'disabled' : '')} disabled={info.prev === null ? true : false } onClick={() => getCharacters(info.prev)}>Prev</button>
            <button className={'btn btn-info btn-sm ' + (info?.next === null ? 'disabled' : '')} disabled={info.next === null ? true : false } onClick={() => getCharacters(info.next)}>Next</button>
        </div>
    )
}

export default CustomPagination