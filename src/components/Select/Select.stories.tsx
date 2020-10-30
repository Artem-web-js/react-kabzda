import React, {MouseEvent, useState} from "react";
import { Select } from "./Select";


export default {
    title: 'Select',
    component: Select
};

export const SelectChanged = () => {

    const [selectValue, setSelectValue] = useState<string>('enter value');
    const [selected, setSelected] = useState(false);
    const setCurrentValue = (e: MouseEvent<HTMLDivElement>) => {

        if (e.currentTarget.textContent) {
            setSelectValue(e.currentTarget.textContent)
            setSelected(false)
        }
    }

    return(
        <div>
            <Select items={[
                {title: "Artem", value: 1},
                {title: "Nikolay", value: 2},
                {title: "Vladislav", value: 3},
                {title: "Nino", value: 4}
            ]}
                    onClick={setCurrentValue}
                    selectValue={selectValue}
                    setSelectValue={setSelectValue}
                    selected={selected}
                    setSelected={setSelected}
            />
        </div>
    )
}