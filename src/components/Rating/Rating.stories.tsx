import React, {useState} from 'react';
import {Rating, RatingValueType} from "./Rating";

export default {
    title: 'Rating',
    component: Rating
};

export const EmptyRating = React.memo(() => <Rating value={0} onClick={x=>x}/>);
export const Rating1 = React.memo(() => <Rating value={1} onClick={x=>x}/>);
export const Rating2 = React.memo(() => <Rating value={2} onClick={x=>x}/>);
export const Rating3 = React.memo(() => <Rating value={3} onClick={x=>x}/>);
export const Rating4 = React.memo(() => <Rating value={4} onClick={x=>x}/>);
export const Rating5 = React.memo(() => <Rating value={5} onClick={x=>x}/>);

export const RatingChanging = React.memo(() => {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    return <Rating value={ratingValue} onClick={setRatingValue}/>
});

