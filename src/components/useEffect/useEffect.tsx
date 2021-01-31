import React, {useEffect, useState} from "react";

const Clock = () => {
    let [seconds, setSeconds] = useState(0)
    let [min, setMin] = useState(0)
    let [hours, setHours] = useState(0)


    useEffect(() => {
        if (seconds === 60) {
            return setSeconds(0)
        }
        setInterval(() => {
            setSeconds(seconds + 1)
        }, 1000)
    }, [seconds])
    return <>
        Clock: {`${min}:${seconds}`}
    </>
}

export default Clock