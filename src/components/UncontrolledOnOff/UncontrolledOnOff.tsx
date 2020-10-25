import React, {useState} from "react";
import s from './UncontrolledOnOff.module.css'

type OnOffType = {
    onChange: (on: boolean) => void
}

const UncontrolledOnOff = (props: OnOffType) => {

    let [on, setOn] = useState(false)

    const onBlock = {
        width: "40px",
        height: "20px",
        marginTop: "10px",
        border: "2px solid black",
        display: "inline-block",
        backgroundColor: on ? "green" : "white"
    }
    const offBlock = {
        width: "40px",
        height: "20px",
        marginTop: "10px",
        marginLeft: "-1px",
        border: "2px solid black",
        display: "inline-block",
        backgroundColor: !on ? "red" : "white"
    }
    const circle = {
        width: "10px",
        height: "10px",
        marginTop: "10px",
        verticalAlign: "baseline",
        marginLeft: "5px",
        borderRadius: "50%",
        border: "2px solid black",
        display: "inline-block",
        backgroundColor: on ? "green" : "red"
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={onBlock} onClick={onClicked}>On</div>
            <div style={offBlock} onClick={offClicked}>Off</div>
            <div style={circle}></div>
        </div>
    )
}

export default UncontrolledOnOff;