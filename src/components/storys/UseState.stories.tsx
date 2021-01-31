import React, {useState} from "react";

export default {
    title: 'useState'
}

const ExampleUseState = () => {
    const [counter, setCounter] = useState(0)

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }
        }>+</button>
        <hr/>
        <div>Counter: {counter}</div>
    </>
}