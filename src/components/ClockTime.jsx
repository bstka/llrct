import React from 'react'
import Clock from 'react-live-clock';

function ClockTime() {
    return (
        <div>
            <Clock format={'HH:mm:ss'} ticking={true} id="time"/>
        </div>
    )
    
}

export default ClockTime
