import React, { useState, useEffect } from 'react';
import JobInfo from './JobInfo'
import BtnContainer from './BtnContainer';

const Tabs = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const url = 'https://www.course-api.com/react-tabs-project'; // Updated to match the proxy configuration
    const [currentItem, setCurrentItem] = useState(0)

    const fetchJobs = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const newJobs = await response.json();
            setJobs(newJobs);
        } catch (error) {
            console.error('Fetch error: ', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    if (isLoading) {
        return (
            <section className='jobs-center'>
               <div>Loading...</div>;
            </section>
        );
    }

    return (
        <section className='jobs-center'>
            <h1>Jobs</h1>
            <ul>
                {jobs.map(job => (
                    <li key={job.id}>{job.title}</li>
                ))}
            </ul>
            <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem}
                     />
            <JobInfo jobs={jobs} currentItem={currentItem}/>
        </section>
    );
};

export default Tabs;
