import React from "react";
import '../../App.css';

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    items: ItemType[]
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void
    selectValue: string
    setSelectValue: (value: string) => void
    selected: boolean
    setSelected: (value: boolean) => void
}

export function Select(props: SelectPropsType) {

    const showMenu = () => {
        props.setSelected(!props.selected)
    }

    const offMode = () => {
        props.setSelected(false)
    }

    return (
        <div className={"mainBlock"}>
            <div className={"select"} onClick={showMenu} onBlur={offMode}> {props.selectValue}
                <span className={`selectIcon ${props.selected ? "selectIconRotate" : ""}`} onClick={showMenu} onBlur={offMode}> </span>
            </div>
            {props.selected &&
            <div className={"optionItems"}>
                {props.items.map(i => {
                    return (
                        <div key={i.value} onClick={props.onClick} className={"items"}>{i.title}</div>
                    )
                })}
            </div>
            }
        </div>
    )
}