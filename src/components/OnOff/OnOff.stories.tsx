import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {OnOff} from "./OnOff";

export default {
    title: 'OnOff',
    component: OnOff
};

const callback = action('on or off clicked');

export const OnMode = React.memo(() => <OnOff on={true} onClick={callback}/>);
export const OffMode = React.memo(() => <OnOff on={false} onClick={callback}/>);

export const OnOffChanging = React.memo(() => {
    let [on, setOn] = useState(true)
    return <OnOff on={on} onClick={setOn}/>
});

