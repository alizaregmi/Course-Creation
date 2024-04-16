import React from 'react'
import YourCourse from '../Components/YourCourse/YourCourse'
import CreateCourse from '../Components/CreateCourse/CreateCourse'
import './CSS/Dashboard.css'
export default function Dashboard() {
    return (
        <div className='main'>

            <CreateCourse />
            <YourCourse />

        </div>
    )
}
