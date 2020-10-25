import React from "react";

type AccordionType = {
    titleValue: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
}

type AccordionTitleType = {
    title: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
}

export function Accordion(props: AccordionType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick} collapsed={!props.collapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitleType) {
    return <h3 onClick={() => {props.onClick(props.collapsed)}}>-- {props.title} --</h3>
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