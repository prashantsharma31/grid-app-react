import React from 'react';
import '../css/row.css';
import {LOB} from './LOBComponent'
import {CustomContentAndDropdown} from './Dropdown'
import {TimerComponent} from './TimerComponent'

export const Row = (props: any) => {
    let { id,task } = props;
    return (
        <div className="row mt-1 p-2">
            <div className="col-md-1">
                <div className=" cp-left custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id={id} />
                    <label className="custom-control-label" htmlFor={id}></label>
                </div>
            </div>
            <div className="col-md-2">
                <span className="name">{task.taskName}</span>
            </div>
            <div className="col-md-2">
               <LOB lobName= {task.lob}/>
            </div>
            <div className="col-md-2">
            {
                task.subtasks &&
                <b><img src={require('../images/Union.svg')} className="mr-2"/>{task.subtasks}</b>
            } 
            </div>
            <div className="col-md-2">
                <CustomContentAndDropdown options={["Abhi","Prashant","Yash","Unassigned"]}/>
            </div>
            <div className="col-md-1">
                {task.step}
            </div>
            <div className="col-md-2">
              <TimerComponent time = {task.dueDate}/>
            </div>
        </div>
    )
}
