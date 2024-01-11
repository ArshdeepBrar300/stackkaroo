import React from 'react';
import bgPreview from '../../assets/2809413-removebg-preview 1.png';
import bookACallImg from '../../assets/book-a-call.png'
import '../../App.css';
import ExpertiseData from './ExpertiseData';
import Expertise from './Expertise';

function Home() {
    console.log(ExpertiseData);
    return (
        <div>
            <div className='home'>
                <div className='home-img'>
                    <img
                        alt=""
                        src={bgPreview}
                    />
                </div>
                <div className='home-text'>
                    <div className="diversifying-the-designs">
                        Diversifying the Designs of Digital World
                    </div>
                    <div className="explorogent-international-serv-container">
                        <p className="explorogent-international-serv">
                            Explorogent International Services Private Limited (EISPL) is one of
                            the most famous companies in the sector of Web and Mobile Development.
                            In the market, EISPL has a strong presence in providing quality
                            services to its clients.
                        </p>

                        <p className="explorogent-international-serv">
                            EISPL is convinced that one should diversify the offering, given the
                            changing needs of the clients. That is why we engage in multiple
                            projects and activities. We also possess knowledge in web development,
                            app development, UI/UX design, as well as digital marketing.
                        </p>
                    </div>
                    <div className='book-a-call'>
                        <img src={bookACallImg} />
                        <div >Book a Call</div>
                    </div>

                </div>




            </div>
            <div className='home-bottom'>
                <div className="in-the-realm">
                    In the realm of digital solutions, we offer expertise in
                </div>
                <div className='expertise-container'>
                    {
                        ExpertiseData.map((exp) => <Expertise text={exp} key={exp} />)
                    }

                </div>


                <div className="showcasing-our-proficiency">{`showcasing our proficiency across various facets of the digital platform `}
                </div>

                <div className='launch'>
                    <div>Stay Ahead!</div>
                    <div>
                        Launch Your Next Project with Stackkaroo
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Home