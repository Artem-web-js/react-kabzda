import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from './components/OnOff/OnOff';
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {
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
            <UncontrolledAccordion titleValue="Menu"/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledAccordion titleValue="Check-list"/>
            <OnOff/>
            <OnOff/>
            <OnOff/>
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
