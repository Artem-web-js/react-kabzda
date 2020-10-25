import React from "react";
import s from './OnOff.module.css'

type OnOffType = {
    on: boolean
    onClick: (on: boolean) => void
}

export const OnOff = (props: OnOffType) => {

    const onBlock = {
        width: "40px",
        height: "20px",
        marginTop: "10px",
        border: "2px solid black",
        display: "inline-block",
        backgroundColor: props.on ? "green" : "white"
    }
    const offBlock = {
        width: "40px",
        height: "20px",
        marginTop: "10px",
        marginLeft: "-1px",
        border: "2px solid black",
        display: "inline-block",
        backgroundColor: !props.on ? "red" : "white"
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
        backgroundColor: props.on ? "green" : "red"
    }
    return (
        <div>
            <div style={onBlock} onClick={() => {props.onClick(true)}}>On</div>
            <div style={offBlock} onClick={() => {props.onClick(false)}}>Off</div>
            <div style={circle}></div>
        </div>
    )
}