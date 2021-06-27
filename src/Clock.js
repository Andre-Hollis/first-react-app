import React, { useState, useEffect } from 'react';

function Clock() {
    
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => setDateTime(new Date()), 1000);
        return () => {
            clearInterval(id);
        }
    }, []);


    return (
        <div>
            <h1>Hello world!</h1>
            <h2>It is {dateTime.toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock;