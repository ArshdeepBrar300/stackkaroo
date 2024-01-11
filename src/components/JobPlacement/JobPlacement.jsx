import React from 'react'
import '../../App.css'
import jobData from './JobData'
import JobContainer from './JobContainer'
function JobPlacement() {
    return (
        <div className='job'>

            <div className="job-title">{`Stackkaroo’s Talent Hiring & Job Placement Services`}
            </div>
            <div className='job-subTitle'>
                <p>   We are a talent searching platform that redesigns how companies hire talents. It is a cost-effective solution for industries.</p>
                <p>  We also provide global job opportunities with good salaries, support, and professional development.</p>

            </div>
            <div className='job-body' >
                {
                    jobData.map(job => <JobContainer img={job.img} title={job.title} subtext={job.subtitle} key={job.title} />)
                }
            </div>
        </div>
    )
}

export default JobPlacement