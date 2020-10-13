import React from 'react';

export const customContentRenderer = ( prop: any) => {
  debugger;
    let {props, state} = prop;
    
      const spanCss = {
        height: '30px',
        backgroundColor: '#C4C4C4',
        color: 'rgb(255, 255, 255)',
        width: '27px',
        borderRadius:'50%',
        padding: '10%',
        marginRight: '10px',
        displayL: 'inline-block'
      }
    return (
  <div style={{ cursor: 'pointer' }}>
   {state.values.length > 0 && <div style={{fontSize: '12px'}}>
     <span className="" style={spanCss}>{state.values[0].label.charAt(0)}</span>
   {state.values[0].label}</div> }
  </div>
)};