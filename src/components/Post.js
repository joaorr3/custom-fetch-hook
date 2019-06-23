import React, { } from 'react'
import LazyLoad from 'react-lazyload';
import { CSSTransition } from 'react-transition-group';

export default function Post({ key, title, body, url }) {
    return (
        <div className="col-sm-4 mb-4">
            <div className="card">
                <div className="card-body">
                    <LazyLoad once>
                        <CSSTransition key={key} in={true} timeout={1000} classNames="post">
                            <img className="card-img-top" src={url} alt="" />
                        </CSSTransition>
                    </LazyLoad>
                    <h5 className="card-title pt-3">{title}</h5>
                    <p className="card-text">{body}</p>
                </div>
            </div>
        </div>
    )
}
