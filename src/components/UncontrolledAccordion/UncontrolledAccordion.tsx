import React, {useState} from "react";

type AccordionType = {
    titleValue: string
    // collapsed: boolean
}

type AccordionTitleType = {
    title: string
}

export function UncontrolledAccordion(props: AccordionType) {
    let [collapsed, setCollapsed] = useState(true);
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={() => {setCollapsed(!collapsed)}}>TOGGLE</button>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitleType) {
    return <h3>-- {props.title} --</h3>
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