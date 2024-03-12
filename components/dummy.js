import React from 'react'

const Dummy = () => {
    return (
        <>
            <style jsx>
                {`
                    .dummy{
                        background: yellow;
                        color: black
                    }
                `}
            </style>
            <div className='dummy'>Dummy</div>
        </>

    )
}

export default Dummy