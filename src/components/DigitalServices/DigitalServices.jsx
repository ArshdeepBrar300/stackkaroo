import React from 'react'
import DigitalServicesComponent from './DigitalServicesComponent'
import DigitalServicesData from './DigitalServicesData'

function DigitalServices() {
    return (
        <div>
            <div className='digital-services'>
                <div className="digital-services-title">
                    Stackkaroo’s Digital Services
                </div>
                <div className="digital-services-text">
                    <p className="explorogent-international-serv">
                        We excel with reliability, innovation and customer-centric approach
                        for our quality products.
                    </p>
                    <p className="explorogent-international-serv">
                        Our dedicated team ensures that the solutions provided are dependable
                        and long-term
                    </p>
                </div>
                <div className='ds-grid'>
                    {
                        DigitalServicesData.map(ds => <DigitalServicesComponent title={ds.text} img={ds.img} subText={ds.subText} key={ds.text} />)
                    }
                </div>

            </div>
        </div>
    )
}

export default DigitalServices