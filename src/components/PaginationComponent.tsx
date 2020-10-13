import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { setTimeout } from 'timers';
import '../css/dropdown-search.css'
export const PaginationComponent = (props: any) => {
    let { totalCount, handelPageChange} = props;
    const [count, setCount] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);
    const [switch1,handleSwitchChange] = useState(1);
    const [inputValue, setInputValue] = useState('');
    const [updatedValue, setUpdatedValue] = useState(0);
    let pageCount = totalCount > count ? totalCount/count : 1;
    const onPageChange = (e: any) => {
        setCurrentPage(e.selected);
        handelPageChange(e.selected,count);
    }

    const onCountChange = (e: any) => {
        setCount(parseInt(e));
        setCurrentPage(1);
        setUpdatedValue(1);
        setTimeout(()=> {
            setCurrentPage(0);
            setUpdatedValue(0);
        },10)
        handelPageChange(1,parseInt(e));
    }

    const handelChange = (e: any) => {
        setInputValue(e);
    }

    const updatePage = () => {
        debugger
        if(inputValue){
            if(parseInt(inputValue) > Math.ceil(pageCount) ||parseInt(inputValue) <=0  )
            {
                alert('Value should be in page range');
            } else {
                setUpdatedValue(updatedValue => parseInt(inputValue)-1);
                setCurrentPage(parseInt(inputValue)-1);
                handelPageChange(parseInt(inputValue)-1,count);
            }
        }
    }

    return (
    <div className="row align-center pt-2 pb-2">
        <div className=' custom-switch col-md-4 tc'>
        <input
          type='checkbox'
          className='custom-control-input'
          id='customSwitches'
          checked={!!switch1}
          onChange={() => !!switch1? handleSwitchChange(0): handleSwitchChange(1)}
          readOnly
        />
        <label className='custom-control-label' htmlFor='customSwitches'>
            Multi Sort
        </label>
        <div className="clear-filter d-inline-block">
        <img className="mr-2" src={require('../images/Clear.svg')}></img>
        <span>Clear All Filters</span>
        </div>
      </div>
        <div className="col-md-3 tc">
            <span className="mr-4">Result {(currentPage*count)+1} to {(currentPage*count)+count > totalCount ? totalCount: (currentPage*count)+count} of {totalCount}</span>
            <span className="float-right">Items per page</span>
            <select onChange= {(e) => onCountChange(e.target.value)} className="browser-default m-1 ml-3 custom-select">
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            </select>
        </div>
        <div className="col-md-3">
        <ReactPaginate
          previousLabel={<i className="fa fa-chevron-left"></i>}
          nextLabel={<i className="fa fa-chevron-right"></i>}
          breakLabel={''}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={12}
          pageRangeDisplayed={20}
          onPageChange={(e) => onPageChange(e) }
          containerClassName={'pagination'}
          activeClassName={'active'}
          pageClassName = {'pageClassName'}
          forcePage={updatedValue}
         // forcePage={}
        />
        </div>
        <div className="col-md-2 text-left tc">
            <span className="d-inline">Go to page &nbsp;</span>
            <input value={inputValue} onChange={(e) => handelChange(e.target.value)} className="ml-0 input form-control d-inline" ></input>
            <span >&nbsp; of {Math.ceil(pageCount)}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;<span onClick={() => updatePage()} className="border-bottom go border-primary text-primary"> <b>Go {">"}</b> </span>
        </div>
    </div>
    )
}