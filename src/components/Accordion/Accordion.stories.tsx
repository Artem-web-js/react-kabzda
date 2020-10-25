import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion
};

const callback = action('accordion changed event fired');

export const CollapsedMode = () => <Accordion titleValue="Menu" collapsed={true} onClick={callback}/>;
export const UncollapsedMode = () => <Accordion titleValue="Menu" collapsed={false} onClick={callback}/>;

export const AccordionChanged = () => {
    let [accordionCollapsed, setAccordionCollapsed] = useState(true)
    return <Accordion titleValue="Menu" collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
};

