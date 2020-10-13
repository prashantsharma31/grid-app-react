import React from 'react';
import '../css/lob.css';
export const LOB = (props: any) => {
    let {lobName} = props;
    let cssClass: string = '';
    switch(lobName) {
        case 'Medicare':
            cssClass = 'med';
            break;
        case 'Commercial':
            cssClass = 'comm';
            break;
        case 'Exchange':
            cssClass = 'exc'
            break;
        case 'Medicaid':
            cssClass = 'medi'
            break;
    }
    return (
    <span className={cssClass}>{lobName.toUpperCase()}</span>
    )
}