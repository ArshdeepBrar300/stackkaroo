import React from 'react';
import '../../App.css'

function JobContainer({ img, title, subtext }) {
    return (
        <div className='job-container'>
            <img src={img} />
            <div className='job-text'>{title}</div>
            <p>{subtext}</p>

        </div>
    )
}

export default JobContainer