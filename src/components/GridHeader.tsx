import React, { useState, useEffect } from 'react';
import '../css/row.css';
import '../css/header.css';
import {SortComponent} from './SortColumn';

export const GridHeader = (props: any) => {
    let {handelSort} = props;
    let [sortKey, setSortKey] = useState('');
    const sortBy = (val: string) => {
        setSortKey(val);
        handelSort(val,0);
    }
    const unsort = () => {
        handelSort(sortKey,1);
        setSortKey('');
    }
    return (
        <div className="row border-top">
            <div className="col-md-1 header">
            <img className="d-inline-block" src={require('../images/Setting.svg')}></img>
                <div  className="d-inline-block custom-control custom-checkbox custom-checkbox-header">
                    <input type="checkbox" className="custom-control-input" id={"1"} />
                    <label className="custom-control-label clb" htmlFor={"1"}></label>
                </div>
            </div>
            <div className="col-md-2  header">
                <span className= {sortKey == 'taskName' ? 'float-left pl-2 sorted': 'float-left pl-2'} >
                TASK NAME
                </span>
                <SortComponent currentKey = {sortKey} sortByKey='taskName' handleSort = {(key: any) => sortBy(key)} handelUnsort= {()=> unsort()} />
            </div>
            <div className="col-md-2  header">
                <span className={sortKey == 'lob' ? 'float-left pl-2 sorted': 'float-left pl-2'}>
               LOB
                </span>
                <SortComponent currentKey = {sortKey} sortByKey='lob' handleSort = {(key: any) => sortBy(key)} handelUnsort= {()=> unsort()} />
            </div>
            <div className="col-md-2  header">
                <span className={sortKey == 'subtasks' ? 'float-left pl-2 sorted': 'float-left pl-2'}>
                SUBTASKS
                </span>
                <SortComponent currentKey = {sortKey} sortByKey='subtasks' handleSort = {(key: any) => sortBy(key)} handelUnsort= {()=> unsort()} />
            </div>
            <div className="col-md-2  header">
                 <span className={sortKey == 'assigned' ? 'float-left pl-2 sorted': 'float-left pl-2'}>
                 ASSIGNED TO
                </span>
                <SortComponent currentKey = {sortKey} sortByKey='assigned' handleSort = {(key: any) => sortBy(key)} handelUnsort= {()=> unsort()} />

            </div>
            <div className="col-md-1  header">
                <span className={sortKey == 'step' ? 'float-left pl-2 sorted': 'float-left pl-2'}>
                STEP
                </span>
                <SortComponent currentKey = {sortKey} sortByKey='step' handleSort = {(key: any) => sortBy(key)} handelUnsort= {()=> unsort()} />

            </div>
            <div className="col-md-2  header pr-3">
                <span className={sortKey == 'dueDate' ? 'float-left pl-2 sorted': 'float-left pl-2'}>
                DUE DATE
                </span>
                <SortComponent currentKey = {sortKey} sortByKey='dueDate' handleSort = {(key: any) => sortBy(key)} handelUnsort= {()=> unsort()} />

            </div>
        </div>
    )
}
