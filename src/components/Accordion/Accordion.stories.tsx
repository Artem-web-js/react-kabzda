import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion
};

const callback = action('accordion changed event fired');
const onClickCallback = action('some item was clicked')

export const CollapsedMode = () => <Accordion titleValue="Menu" collapsed={true}
                                              onClick={onClickCallback}
                                              items={[]}
                                              onChange={callback}/>;
export const UncollapsedMode = () => <Accordion titleValue="Menu"
                                                collapsed={false}
                                                onClick={onClickCallback}
                                                onChange={callback}
                                                items={[
                                                    {title: "Artem", value: 1},
                                                    {title: "Nikolay", value: 2},
                                                    {title: "Vladislav", value: 3},
                                                    {title: "Ignat", value: 4}
                                                    ]}/>;

export const AccordionChanged = () => {
    let [accordionCollapsed, setAccordionCollapsed] = useState(true)
    return <Accordion titleValue="Menu"
                      collapsed={accordionCollapsed}
                      onClick={onClickCallback}
                      onChange={() => setAccordionCollapsed(!accordionCollapsed)}
                      items={[
                          {title: "Artem", value: 1},
                          {title: "Nikolay", value: 2},
                          {title: "Vladislav", value: 3},
                          {title: "Ignat", value: 4}
                          ]}
    />
};

