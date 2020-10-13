import React from 'react';
import styled from '@emotion/styled';
import {StyledSelect,customDropdownRenderer} from './DropDownRendrer';
import  {customContentRenderer} from './SearchContentRendere'
import '../css/dropdown-search.css'

export class CustomContentAndDropdown extends React.Component<any,any> {

  constructor(props: any){
      super(props)
  }  
 


  render() {
    let options = this.props.options.map((option: any) => ({
      label: option,
      value: option
    }));
    return (
      <div>
       
        <StyledSelect
          placeholder="Select"
          dropdownRenderer={customDropdownRenderer}
          contentRenderer={customContentRenderer}
          onChange={(value) =>
            console.log(
              `%c > onChange ${this.props.title} `,
              'background: #555; color: tomato',
              value
            )
          }
          options={this.props.options}
          values={[options.find((opt: any) => opt.label === "Unassigned")]}
        />
      </div>
    );
  }
}


const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  & div {
    margin: 10px 0 0 10px;
    font-weight: 600;
  }
`;

const Button = styled.button`
  background: none;
  border: 1px solid #555;
  color: #555;
  border-radius: 3px;
  margin: 10px 10px 0;
  padding: 3px 5px;
  font-size: 10px;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  &.clear {
    color: tomato;
    border: 1px solid tomato;
  }
  :hover {
    border: 1px solid deepskyblue;
    color: deepskyblue;
  }
`;


export default CustomContentAndDropdown;