import React, { useState } from 'react'
import './CreateCourse.css'
import Popup from '../Popup/Popup'

export default function CreateCourse() {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className='createcourse'>
            <button className='btn' onClick={() => setButtonPopup(true)}>Create a course </button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3>Popoup</h3>
            </Popup>
        </div>
    )
}
