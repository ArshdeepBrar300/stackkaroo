import React from 'react'
import ChooseData from './ChooseData'
import { ChooseComponent } from './ChooseComponent'

function Choose() {
    return (
        <div>
            <div className='choose'>
                <div className="choose-us">Why Choose Us?</div>
                <div className="we-excel-with-container">
                    <p >
                        We excel with reliability, innovation and customer-centric approach
                        for our quality products.
                    </p>
                    <p >
                        Our dedicated team ensures that the solutions provided are dependable
                        and long-term
                    </p>
                </div>
                <div className='choose-us-bottom'>
                    {
                        ChooseData.map((choose) => {
                            return <ChooseComponent img={choose.img} title={choose.text} key={choose.text} />
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Choose