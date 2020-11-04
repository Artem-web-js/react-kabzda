import React, {useReducer, useState} from "react";

type AccordionType = {
    titleValue: string
}

type AccordionTitleType = {
    title: string
    onClick: () => void
}

type ActionType = {
    type: string
}

const reducer = (state: boolean, action: ActionType) => {
    if(action.type === "TOGGLE-COLLAPSED") {
        return !state;
    }
    return state;
}

export function UncontrolledAccordion(props: AccordionType) {
    //let [collapsed, setCollapsed] = useState(true);
    let [collapsed, dispatch] = useReducer(reducer, false);
    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>*/}
            <AccordionTitle title={props.titleValue} onClick={() => {dispatch({type: "TOGGLE-COLLAPSED"})}}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitleType) {
    return <h3 onClick={() => {props.onClick()}}>-- {props.title} --</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}