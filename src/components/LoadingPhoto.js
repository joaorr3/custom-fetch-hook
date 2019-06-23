import React from 'react'

import Spinner from './Spinner'

export default function LoadingPhoto() {
    return (
        <div className="col-sm-4 mb-4">
            <div className="card">
                <div className="card-body">
                    <div className="card-img-top" style={style}>
                        <Spinner />
                    </div>
                    <h5 className="card-title pt-3">{'Loading...'}</h5>
                    <p className="card-text">{'Loading...'}</p>
                </div>
            </div>
        </div>
    )
}

const style = {
    height: '300px'
}
