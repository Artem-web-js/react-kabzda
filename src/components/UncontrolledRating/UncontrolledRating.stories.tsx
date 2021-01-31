import React from 'react';
import {action} from '@storybook/addon-actions';
import {UncontrolledRating} from "./UncontrolledRating";

export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating
};

const callback = action("rating changed inside component")

export const EmptyRating = React.memo(() => <UncontrolledRating defaultValue={0} onChange={callback}/>);
export const Rating1 = React.memo(() => <UncontrolledRating defaultValue={1} onChange={callback}/>);
export const Rating2 = React.memo(() => <UncontrolledRating defaultValue={2} onChange={callback}/>);
export const Rating3 = React.memo(() => <UncontrolledRating defaultValue={3} onChange={callback}/>);
export const Rating4 = React.memo(() => <UncontrolledRating defaultValue={4} onChange={callback}/>);
export const Rating5 = React.memo(() => <UncontrolledRating defaultValue={5} onChange={callback}/>);