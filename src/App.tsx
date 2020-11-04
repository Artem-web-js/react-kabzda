import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    let [on, setOn] = useState(false)

    return (
        <div className="App">
            {/*<PageTitle title="This is APP component"/>
            <PageTitle title="My friends"/>
            <Rating value={3}/>
            <Accordion titleValue="Menu" collapsed={true}/>
            <Accordion titleValue="Check-list" collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
            {/*<UncontrolledRating/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue="Menu"
                       onChange={() => setAccordionCollapsed(!accordionCollapsed)}
                       items={[
                           {title: "Artem", value: 1},
                           {title: "Nikolay", value: 2},
                           {title: "Vladislav", value: 3},
                           {title: "Ignat", value: 4}
                       ]}
                       collapsed={accordionCollapsed}
                       onClick={setAccordionCollapsed}/>
            <UncontrolledOnOff onChange={setOn}/>{on.toString()}
            {/*<OnOff on={on} onClick={setOn}/>*/}
            {/*<UncontrolledAccordion titleValue="Menu"/>*/}
            {/*<UncontrolledAccordion titleValue="Check-list"/>*/}
        </div>
    );
}

type PageType = {
    title: string
}

function PageTitle(props: PageType) {
    return <div>{props.title}</div>
}

export default App;
