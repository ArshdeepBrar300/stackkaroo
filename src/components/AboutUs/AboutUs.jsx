import React from 'react'
import Story from '../../assets/story.png'
import Rupee from '../../assets/rupee.png'
function AboutUs() {
    return (
        <div className='about-us'>
            <div className='about-us-text'>
                <b className="our-story">Our Story</b>

                <div className="guiding-eispl-as-container">
                    <p className="explorogent-international-serv">
                        Guiding EISPL as Directors, Mr. Sourav Gupta and Mr. Chandan Mishra
                        bring their extensive experience to the forefront as industry
                        veterans. Our team is fueled by innovation, continually striving to
                        exceed customer expectations.
                    </p>
                    <p className="explorogent-international-serv">&nbsp;</p>
                    <p className="explorogent-international-serv">
                        Operating from our registered office in Agartala Sadar, Tripura (W),
                        our company is officially registered with the Corporate Identification
                        Number (CIN). Our active status and an authorized share capital of Rs
                        10.00 lac are a source of pride.
                    </p>
                </div>

                <div className='rupee'>
                    <img src={Rupee} alt="" />
                    <div className="get-estimated-project">Get Estimated Project Cost</div>

                </div>

            </div>
            <div className='about-us-img'>
                <img src={Story} />
            </div>



        </div>

    )
}

export default AboutUs