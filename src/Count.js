import React, { useState } from 'react';
//test
function Count() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>The count is {count}</p>
            <button onClick={() => {setCount(count + 1);}}>
                Click me
            </button>
        </div>
    );
}
export default Count;
