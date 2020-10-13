import React, {useState} from 'react';

export const SortComponent = (props: any) => {
    let {currentKey,sortByKey,handleSort,handelUnsort} = props;
    let [currentSortKey, setCurrentSortKey] = useState('');
    const sortBy =  (name: any) => {
        handleSort(name);
        setCurrentSortKey(name);
    }
    const unsort =  () => {
        handelUnsort();
        setCurrentSortKey('');
    }

    return (
        <div className="d-inline">
                    {
        currentKey != sortByKey ?
        <span  onClick = {() => sortBy(sortByKey)} className="float-right pr-1">
            <img src={require('../images/Vector.svg')}></img>
        </span>:
        <span className="float-right pr-1" onClick= {()=> unsort()}>
            <img src={require('../images/Vector.png')}></img>
        </span>
        }
        </div>
    )
}