import React from 'react'

import "./ImageAnimation.css"

export const ImageAnimation = ({srcImgDev, srcImgProd}) => {
    return (
        <div className="container-image">
            <div className="box-image">
                <img className="image" src={srcImgDev} alt="dev" ></img>
            </div>
            <div className="box-image">
                <img className="image" src={srcImgProd} alt="dev" ></img>
            </div>
        </div>
    )
}
