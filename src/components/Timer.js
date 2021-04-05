import React, { useState, useEffect } from 'react';

function Timer(){
    
    const [time, setTime] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => setTime((prev) => prev+1), 1000);
        return () => clearInterval(intervalId);
       }, []);

    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const dateId = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(dateId);
    }, []);

    const [startTime] = useState(new Date());
    useEffect(() => {
        return () => startTime;
    }, []);
    
    

    return(
      <div>
      <h1>Timer: {time}s</h1> 
      <h1>Date: {date.toLocaleTimeString()}</h1> 
      {/*<h1>Start Time: {startTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</h1>*/}
      </div>
    );
}
export default Timer;