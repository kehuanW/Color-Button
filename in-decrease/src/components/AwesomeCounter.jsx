import { useState } from 'react';

const AwesomeCounter = ({ initialValue }) => {
    const [count, setCount] = useState(initialValue ?? 0);
    const handleAdd = () => {
        setCount(count => count + 1);
    }
    const handleRemove = () => {
        setCount(count => {
            if (count > 0) {
                count -= 1;
            }
            return count;
        });
    }

    return (
        <div>
            <h1>Awesome Counter</h1>
            <button onClick={handleAdd}>Add</button>
            <span>{count ?? 0}</span>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}

export default AwesomeCounter;