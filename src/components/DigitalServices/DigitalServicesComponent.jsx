import React from 'react'
import Arrow from '../../assets/arrow.png'
function DigitalServicesComponent({ img, title, subText }) {
    return (

        <div className="ds-box">
            <div className="ds-rectangle">
                <img src={img} alt={title} />
                <div className='ds-title'>{title}</div>
            </div>
            <div className='ds-subText'>
                {subText}
            </div>
            <div className='ds-arrow'>
                <img src={Arrow} />
            </div>

        </div>

    )
}

export default DigitalServicesComponent