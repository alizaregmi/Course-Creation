import React from 'react'
import './YourCourse.css'
import CourseCard from '../Card/CourseCard'

export default function YourCourse() {
    return (
        <div>
            <div className='yourcourse'>
                <h1>Your Courses :</h1>
            </div>
            <CourseCard />
        </div>
    )
}
