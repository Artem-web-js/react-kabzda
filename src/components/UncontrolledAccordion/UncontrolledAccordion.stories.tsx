import React from 'react';
import {action} from '@storybook/addon-actions';
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion
};

const callback = action('accordion changed event fired');

export const AccordionChanged = () => {
    return <UncontrolledAccordion titleValue="Menu"/>
};

