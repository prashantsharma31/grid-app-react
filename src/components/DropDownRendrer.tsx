import React from 'react';
import Select from 'react-dropdown-select';
import styled from '@emotion/styled';
import 'font-awesome/css/font-awesome.min.css';

export const customDropdownRenderer = ( prop: any) => {
    let {props, state, methods } = prop
    let options = props.options.map((option: any) => ({
        label: option,
        value: option
      }));
    const regexp = new RegExp(state.search, 'i');
    const spanCss = {
        height: '30px',
        backgroundColor: '#F65A1C',
        color: 'rgb(255, 255, 255)',
        width: '30px',
        borderRadius:'50%',
        marginRight: '5px',
        paddingTop: '5px'
      }
      
    return (
      <div>
        <SearchAndToggle color={props.color}>
        <span className='searchSpan'><i className="fa fa-search"></i></span>
          <input
            type="text"
            value={state.search}
            onChange={methods.setSearch}
            placeholder="Search for user"
          />
        </SearchAndToggle>
        <Items>
          {options
            .filter((item: any) => regexp.test(item[props.searchBy] || item[props.labelField]))
            .map((option: any) => {
              if (!props.keepSelectedInList && methods.isSelected(option)) {
                return null;
              }

              return (
                <Item
                  key={option[props.valueField]}
                  onClick={() => methods.addItem(option)}>
                  <span className="" style={spanCss}>{option[props.labelField].charAt(0)}</span>
                  <ItemLabel>{option[props.labelField]}</ItemLabel>
                  

                <div className="custom-control custom-checkbox">
                {/* <input
                    type="checkbox" className="custom-control-input"
                    onChange={() => (option.disabled ? undefined : methods.addItem(option))}
                    checked={state.values.indexOf(option) !== -1}
                  /> */}
                    
                </div>
                </Item>
              );
            })}
        </Items>
      </div>
    );
  };

 export const StyledSelect = styled(Select)`
  .react-dropdown-select-dropdown {
    overflow: initial;
  }
`;

export const SearchAndToggle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ECF5FA;
  input {
    margin: 10px 10px 10px;
    line-height: 30px;
    padding: 0px 20px;
    border: 1px solid #ccc;
    border-radius: 20px;
    :focus {
      outline: none;
      border: 1px solid deepskyblue;
    }
  }
`;

export const Items = styled.div`
  overflow: auto;
  min-height: 10px;
  max-height: 200px;
`;

export const Item = styled.div`
  display: flex;
  margin: 10px;
  align-items: baseline;
  }
`;

export const ItemLabel = styled.div`
  margin: 5px 10px;
`;
