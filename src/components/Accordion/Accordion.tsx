import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[] // так же можно использовать такую запись -> Array<string>
    onClick: (value: any) => void
}

type AccordionTitleType = {
    title: string
    collapsed: boolean
    onChange: () => void
}

export function Accordion(props: AccordionType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange} collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitleType) {
    return <h3 onClick={() => {props.onChange()}}>-- {props.title} --</h3>
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((i,index) => <li onClick={() => { props.onClick(i.value) }} key={index}>{i.title}</li>)}
        </ul>
    )
}